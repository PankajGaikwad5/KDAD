import * as THREE from 'three';

export function createRenderer(canvas, { alpha = false, clear = 0x000000 } = {}) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  if (!alpha) renderer.setClearColor(clear, 1);
  return renderer;
}

/**
 * srgb:false keeps raw sRGB texels — use it for custom ShaderMaterials that write
 * gl_FragColor directly (no colour-space conversion either way).
 */
export function loadTexture(url, renderer, { srgb = true } = {}) {
  return new Promise((resolve) => {
    new THREE.TextureLoader().load(
      url,
      (tex) => {
        if (srgb) tex.colorSpace = THREE.SRGBColorSpace;
        tex.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
        resolve(tex);
      },
      undefined,
      () => resolve(null)
    );
  });
}

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** 0..1 scroll progress of the whole document */
export function scrollProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  return max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
}

/** GLSL helper: object-fit: cover for a texture inside a plane */
export const GLSL_COVER = /* glsl */ `
vec2 coverUv(vec2 uv, vec2 plane, vec2 img) {
  float rp = plane.x / plane.y;
  float ri = img.x / img.y;
  vec2 s = rp < ri ? vec2(rp / ri, 1.0) : vec2(1.0, ri / rp);
  return (uv - 0.5) * s + 0.5;
}
`;

export function disposeScene(scene) {
  scene.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    if (o.material) {
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      mats.forEach((m) => {
        Object.values(m.uniforms || {}).forEach((u) => u.value && u.value.isTexture && u.value.dispose());
        if (m.map) m.map.dispose();
        m.dispose();
      });
    }
  });
}
