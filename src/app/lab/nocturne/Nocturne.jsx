'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import * as THREE from 'three';
import LabHeader from '../_shared/LabHeader';
import { PROJECTS, projectHref } from '../_shared/data';
import { createRenderer, loadTexture, prefersReducedMotion, GLSL_COVER, disposeScene } from '../_shared/three-utils';

/*
  Nocturne
  The house at night. The cursor is a lantern; rooms exist only where you
  shine it. Changing rooms bleeds one photograph into the next like ink.
  "Lights on" floods the room so you can see all of it.
  Palette: night #000000 · lamplight #F2B45A · moonstone #8E9AAF · paper #EDE6DA
*/

const vertexShader = /* glsl */ `
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

const fragmentShader = /* glsl */ `
uniform sampler2D uA;
uniform sampler2D uB;
uniform vec2 uImgA;
uniform vec2 uImgB;
uniform vec2 uRes;
uniform vec2 uMouse;
uniform float uMix;
uniform float uRadius;
uniform float uTime;
uniform float uLights;
varying vec2 vUv;
${GLSL_COVER}

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0; float a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; }
  return v;
}

void main() {
  vec2 uv = vUv;
  vec2 par = (uMouse - 0.5) * 0.018;
  float n = fbm(uv * vec2(uRes.x / uRes.y, 1.0) * 2.6 + uTime * 0.03);
  float wobble = sin(uMix * 3.14159);

  vec2 ca = (coverUv(uv, uRes, uImgA) - 0.5) * 0.96 + 0.5 - par + (n - 0.5) * 0.05 * wobble;
  vec2 cb = (coverUv(uv, uRes, uImgB) - 0.5) * (0.96 + 0.04 * (1.0 - uMix)) + 0.5 - par;
  vec3 a = texture2D(uA, ca).rgb;
  vec3 b = texture2D(uB, cb).rgb;

  float v = uMix * 1.24 - 0.12;
  float m = smoothstep(n - 0.12, n, v);
  vec3 col = mix(a, b, m);

  // lantern
  vec2 d = (uv - uMouse) * vec2(uRes.x / uRes.y, 1.0);
  float flick = 1.0 + 0.035 * sin(uTime * 11.0) * sin(uTime * 6.7 + 1.3);
  float lamp = pow(smoothstep(uRadius * flick, 0.0, length(d)), 1.7);
  vec3 warm = vec3(1.0, 0.8, 0.55);
  vec3 moon = vec3(0.56, 0.6, 0.69);
  float amb = mix(0.03, 1.0, uLights);
  vec3 light = moon * amb + warm * lamp * 1.4 * (1.0 - uLights * 0.7);
  vec3 lit = col * light;

  // the ink front glows faintly as it travels
  float front = smoothstep(0.05, 0.0, abs(v - n)) * wobble;
  lit += vec3(0.95, 0.7, 0.35) * front * 0.22 * (0.25 + lamp);

  lit += (hash(uv * uRes + fract(uTime * 7.0) * 91.0) - 0.5) * 0.045;
  float vig = smoothstep(1.25, 0.35, length((uv - 0.5) * vec2(1.2, 1.0)));
  gl_FragColor = vec4(lit * mix(0.75, 1.0, vig), 1.0);
}`;

export default function Nocturne() {
  const canvasRef = useRef(null);
  const lightRef = useRef(null);
  const api = useRef({ go: () => {}, setLights: () => {} });
  const [index, setIndex] = useState(0);
  const [lights, setLights] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const reduce = prefersReducedMotion();
    let disposed = false;
    let raf = 0;

    const renderer = createRenderer(canvas);
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const uniforms = {
      uA: { value: null },
      uB: { value: null },
      uImgA: { value: new THREE.Vector2(16, 9) },
      uImgB: { value: new THREE.Vector2(16, 9) },
      uRes: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uMix: { value: 0 },
      uRadius: { value: 0.32 },
      uTime: { value: 0 },
      uLights: { value: 0 },
    };
    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader })));

    const textures = new Array(PROJECTS.length).fill(null);
    Promise.all(
      PROJECTS.map((p, i) => loadTexture(p.img, renderer, { srgb: false }).then((t) => (textures[i] = t)))
    ).then(() => {
      if (disposed) return;
      const t = textures[0];
      if (t) {
        uniforms.uA.value = t;
        uniforms.uB.value = t;
        uniforms.uImgA.value.set(t.image.width, t.image.height);
        uniforms.uImgB.value.set(t.image.width, t.image.height);
      }
      setReady(true);
    });

    // scene changes
    let current = 0;
    let anim = null; // { from, start }
    let lightsTarget = 0;
    const DURATION = reduce ? 1 : 1700;
    const go = (next) => {
      const count = PROJECTS.length;
      next = ((next % count) + count) % count;
      if (anim || next === current || !textures[next]) return;
      const t = textures[next];
      uniforms.uB.value = t;
      uniforms.uImgB.value.set(t.image.width, t.image.height);
      anim = { start: performance.now() };
      current = next;
      setIndex(next);
    };
    api.current.go = (d, absolute) => go(absolute ? d : current + d);
    api.current.setLights = (on) => (lightsTarget = on ? 1 : 0);

    // lantern
    const mouse = { x: 0.5, y: 0.45, tx: 0.5, ty: 0.45 };
    let lastMove = -1e9;
    const onMove = (e) => {
      mouse.tx = e.clientX / window.innerWidth;
      mouse.ty = 1 - e.clientY / window.innerHeight;
      lastMove = performance.now();
    };
    let wheelLock = 0;
    const onWheel = (e) => {
      e.preventDefault();
      const now = performance.now();
      if (now < wheelLock || Math.abs(e.deltaY) < 8) return;
      wheelLock = now + 1300;
      go(current + (e.deltaY > 0 ? 1 : -1));
    };
    const onKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown') go(current + 1);
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') go(current - 1);
    };
    let touchY = null;
    const onTouchStart = (e) => {
      touchY = e.touches[0].clientY;
      onMove(e.touches[0]);
    };
    const onTouchMove = (e) => onMove(e.touches[0]);
    const onTouchEnd = (e) => {
      if (touchY == null) return;
      const dy = touchY - e.changedTouches[0].clientY;
      if (Math.abs(dy) > 60) go(current + (dy > 0 ? 1 : -1));
      touchY = null;
    };
    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      uniforms.uRes.value.set(window.innerWidth, window.innerHeight);
      uniforms.uRadius.value = window.innerWidth < 700 ? 0.42 : 0.32;
    };
    resize();
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKey);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('resize', resize);

    const clock = new THREE.Clock();
    let autoTimer = performance.now();
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

    function frame() {
      raf = requestAnimationFrame(frame);
      const now = performance.now();
      const t = clock.getElapsedTime();
      uniforms.uTime.value = t;

      // when idle, the lantern wanders on its own
      if (!reduce && now - lastMove > 3500) {
        const w = t * 0.25;
        mouse.tx = 0.5 + Math.sin(w * 1.3) * 0.28;
        mouse.ty = 0.5 + Math.sin(w * 0.9 + 1.0) * 0.22;
      }
      const k = reduce ? 1 : now - lastMove > 3500 ? 0.02 : 0.12;
      mouse.x += (mouse.tx - mouse.x) * k;
      mouse.y += (mouse.ty - mouse.y) * k;
      uniforms.uMouse.value.set(mouse.x, mouse.y);
      uniforms.uLights.value += (lightsTarget - uniforms.uLights.value) * 0.05;

      if (lightRef.current) {
        lightRef.current.style.setProperty('--mx', `${mouse.x * 100}%`);
        lightRef.current.style.setProperty('--my', `${(1 - mouse.y) * 100}%`);
        lightRef.current.style.setProperty('--lit', uniforms.uLights.value.toFixed(3));
      }

      if (anim) {
        const p = Math.min(1, (now - anim.start) / DURATION);
        uniforms.uMix.value = ease(p);
        if (p >= 1) {
          uniforms.uA.value = uniforms.uB.value;
          uniforms.uImgA.value.copy(uniforms.uImgB.value);
          uniforms.uMix.value = 0;
          anim = null;
          autoTimer = now;
        }
      } else if (!reduce && now - autoTimer > 9000 && now - lastMove > 3500) {
        go(current + 1);
      }

      renderer.render(scene, camera);
    }
    frame();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', resize);
      textures.forEach((tx) => tx && tx.dispose());
      disposeScene(scene);
      renderer.dispose();
    };
  }, []);

  const toggleLights = useCallback(() => {
    setLights((on) => {
      api.current.setLights(!on);
      return !on;
    });
  }, []);

  const p = PROJECTS[index];

  return (
    <main className='fixed inset-0 overflow-hidden bg-black text-[#EDE6DA] select-none'>
      <style>{`
        .noc-lit {
          -webkit-mask-image: radial-gradient(circle at var(--mx, 50%) var(--my, 50%), #000 0, #000 12vmax, rgba(0,0,0,calc(0.22 + var(--lit, 0) * 0.78)) 30vmax);
                  mask-image: radial-gradient(circle at var(--mx, 50%) var(--my, 50%), #000 0, #000 12vmax, rgba(0,0,0,calc(0.22 + var(--lit, 0) * 0.78)) 30vmax);
        }
        @keyframes nocIn { from { opacity: 0; letter-spacing: 0.08em; } to { opacity: 1; letter-spacing: 0; } }
        .noc-in { animation: nocIn 1.6s cubic-bezier(.2,.7,.1,1) both; }
      `}</style>

      <canvas
        ref={canvasRef}
        className='lab-canvas transition-opacity duration-[1500ms]'
        style={{ opacity: ready ? 1 : 0 }}
        aria-hidden='true'
      />

      <LabHeader
        brandClass='text-[13px] text-[#EDE6DA]'
        linkClass='text-[13px] text-[#EDE6DA]/65 hover:text-[#F2B45A] transition-colors'
      />

      {/* Lantern-lit headline */}
      <div ref={lightRef} className='noc-lit fixed inset-0 z-10 pointer-events-none flex items-end sm:items-center px-4 sm:px-[7vw] pb-28 sm:pb-0'>
        <div key={index} className='max-w-[min(92vw,980px)]'>
          {index === 0 ? (
            <>
              <h1 className='f-display noc-in text-[clamp(52px,10vw,168px)] leading-[0.9] text-[#EDE6DA]'>
                Light is the
                <br />
                first material.
              </h1>
              <p className='mt-6 max-w-[34ch] text-[15px] leading-relaxed text-[#EDE6DA]/80'>
                Karan Desai Architecture + Design. Move your light across the room; scroll to walk into the next one.
              </p>
            </>
          ) : (
            <>
              <h2 className='f-display noc-in text-[clamp(56px,11vw,180px)] leading-[0.9] text-[#EDE6DA]'>{p.name}</h2>
              <Link
                href={projectHref(p)}
                className='pointer-events-auto inline-block mt-6 text-[14px] text-[#F2B45A] border-b border-[#F2B45A]/50 pb-1 hover:border-[#F2B45A]'
              >
                Enter the project
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Room index */}
      <nav
        aria-label='Rooms'
        className='fixed z-20 right-4 sm:right-8 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-end gap-2'
      >
        {PROJECTS.map((pr, i) => (
          <button
            key={pr.id}
            onClick={() => api.current.go(i, true)}
            aria-current={i === index ? 'true' : undefined}
            className={`text-[12px] transition-all duration-500 ${
              i === index ? 'text-[#F2B45A] translate-x-0' : 'text-[#EDE6DA]/35 hover:text-[#EDE6DA]/80 translate-x-1'
            }`}
          >
            {pr.name}
          </button>
        ))}
      </nav>

      {/* Lights */}
      <div className='fixed z-20 left-4 sm:left-[7vw] bottom-16 sm:bottom-8 flex items-center gap-5'>
        <button
          onClick={toggleLights}
          aria-pressed={lights}
          className='group flex items-center gap-3 text-[13px] text-[#EDE6DA]/80 hover:text-[#EDE6DA]'
        >
          <span
            className={`relative inline-block w-9 h-5 rounded-full border transition-colors duration-500 ${
              lights ? 'border-[#F2B45A] bg-[#F2B45A]/20' : 'border-[#EDE6DA]/40'
            }`}
          >
            <span
              className={`absolute top-[3px] w-3 h-3 rounded-full transition-all duration-500 ${
                lights ? 'left-[19px] bg-[#F2B45A] shadow-[0_0_14px_#F2B45A]' : 'left-[3px] bg-[#EDE6DA]/60'
              }`}
            />
          </span>
          {lights ? 'Lights on' : 'Lights off'}
        </button>
        <span className='text-[12px] text-[#8E9AAF] hidden sm:inline'>
          {index + 1} of {PROJECTS.length}
        </span>
      </div>
    </main>
  );
}
