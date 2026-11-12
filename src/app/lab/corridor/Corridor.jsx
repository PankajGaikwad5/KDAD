'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as THREE from 'three';
import LabHeader from '../_shared/LabHeader';
import { PROJECTS, projectHref, SIGNATURE } from '../_shared/data';
import {
  createRenderer,
  loadTexture,
  prefersReducedMotion,
  scrollProgress,
  GLSL_COVER,
  disposeScene,
} from '../_shared/three-utils';

/*
  Corridor
  A dark stone gallery. Scrolling dollies the camera down its length; each
  project hangs in a brass frame and floods from stone-grey into colour as you
  reach it. A lit doorway waits at the end.
  Palette: basalt #000000 · travertine #CDBFA8 · brass #A88A5A · lamp #F4E6CC
*/

const SPACING = 9;
const START_Z = 7;
const BRASS = 0xa88a5a;

const vertexShader = /* glsl */ `
uniform float uBend;
varying vec2 vUv;
void main() {
  vUv = uv;
  vec3 p = position;
  p.z += sin(uv.x * 3.14159) * uBend;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`;

const fragmentShader = /* glsl */ `
uniform sampler2D uMap;
uniform vec2 uPlane;
uniform vec2 uImg;
uniform float uReveal;
uniform float uLight;
uniform float uHover;
varying vec2 vUv;
${GLSL_COVER}
void main() {
  vec2 uv = coverUv(vUv, uPlane, uImg);
  uv = (uv - 0.5) * (1.0 - 0.05 * uHover) + 0.5;
  vec3 c = texture2D(uMap, uv).rgb;
  float g = dot(c, vec3(0.299, 0.587, 0.114));
  vec3 stone = vec3(g) * vec3(1.0, 0.93, 0.82) * 0.55;

  // colour sweeps across the frame left to right
  float edge = uReveal * 1.3 - 0.15;
  float m = smoothstep(edge - 0.18, edge, vUv.x);
  vec3 col = mix(c, stone, m);
  float glint = smoothstep(0.012, 0.0, abs(vUv.x - edge)) * step(0.01, uReveal) * step(uReveal, 0.99);
  col += vec3(0.66, 0.54, 0.35) * glint * 0.8;

  gl_FragColor = vec4(col * uLight, 1.0);
}`;

const smooth = (e0, e1, x) => {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
};

export default function Corridor() {
  const canvasRef = useRef(null);
  const introRef = useRef(null);
  const endRef = useRef(null);
  const barRef = useRef(null);
  const activeRef = useRef(-1);
  const [active, setActive] = useState(-1);
  const router = useRouter();

  useEffect(() => {
    const canvas = canvasRef.current;
    const reduce = prefersReducedMotion();
    let disposed = false;
    let raf = 0;

    const renderer = createRenderer(canvas);
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 5, 30);
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 90);

    const n = PROJECTS.length;
    const depth = (n - 1) * SPACING;
    const END_Z = -depth - 3;
    const zA = START_Z + 6;
    const zB = -depth - 16;

    // Framed photographs
    const planeGeo = new THREE.PlaneGeometry(6.4, 3.6, 32, 1);
    const frameGeo = new THREE.PlaneGeometry(6.56, 3.76);
    const frameMat = new THREE.MeshBasicMaterial({ color: BRASS });
    const items = PROJECTS.map((p, i) => {
      const side = i % 2 === 0 ? -1 : 1;
      const mat = new THREE.ShaderMaterial({
        uniforms: {
          uMap: { value: null },
          uPlane: { value: new THREE.Vector2(16, 9) },
          uImg: { value: new THREE.Vector2(16, 9) },
          uReveal: { value: 0 },
          uLight: { value: 0 },
          uHover: { value: 0 },
          uBend: { value: 0 },
        },
        vertexShader,
        fragmentShader,
      });
      const mesh = new THREE.Mesh(planeGeo, mat);
      mesh.userData.index = i;
      const frame = new THREE.Mesh(frameGeo, frameMat);
      frame.position.z = -0.04;
      const holder = new THREE.Group();
      holder.add(frame, mesh);
      holder.position.z = -i * SPACING;
      scene.add(holder);
      loadTexture(p.img, renderer, { srgb: false }).then((t) => {
        if (!t || disposed) return;
        mat.uniforms.uMap.value = t;
        mat.uniforms.uImg.value.set(t.image.width, t.image.height);
      });
      return { holder, mesh, mat, side, hover: 0 };
    });
    const meshes = items.map((it) => it.mesh);

    // Brass inlay in the floor
    const pts = [];
    [-1.3, 1.3].forEach((x) => pts.push(x, -2.2, zA, x, -2.2, zB));
    for (let z = zA; z > zB; z -= SPACING / 2) pts.push(-7, -2.2, z, 7, -2.2, z);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    scene.add(new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial({ color: BRASS, transparent: true, opacity: 0.5 })));

    // Light coves in the ceiling
    const coveMat = new THREE.MeshBasicMaterial({ color: 0xffe9c7 });
    [-2.7, 2.7].forEach((x) => {
      const cove = new THREE.Mesh(new THREE.PlaneGeometry(0.07, zA - zB), coveMat);
      cove.rotation.x = Math.PI / 2;
      cove.position.set(x, 3.2, (zA + zB) / 2);
      scene.add(cove);
    });

    // Suspended dust
    const DUST = 700;
    const dp = new Float32Array(DUST * 3);
    for (let i = 0; i < DUST; i++) {
      dp[i * 3] = (Math.random() - 0.5) * 11;
      dp[i * 3 + 1] = Math.random() * 5.2 - 2.1;
      dp[i * 3 + 2] = zA - Math.random() * (zA - zB);
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dp, 3));
    const dust = new THREE.Points(
      dustGeo,
      new THREE.PointsMaterial({ color: 0xd9c7a5, size: 0.035, transparent: true, opacity: 0.55, depthWrite: false })
    );
    scene.add(dust);

    // The lit doorway at the end
    const doorMat = new THREE.MeshBasicMaterial({ color: 0xf4e6cc, fog: false, transparent: true, opacity: 0 });
    const door = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 5.4), doorMat);
    door.position.set(0, 0.5, -depth - 13);
    scene.add(door);

    function layout() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const aspect = w / h;
      const portrait = aspect < 0.9;
      renderer.setSize(w, h, false);
      camera.aspect = aspect;
      camera.fov = portrait ? 70 : 50;
      camera.updateProjectionMatrix();
      items.forEach((it) => {
        it.holder.scale.setScalar(portrait ? 0.6 : 1);
        it.holder.position.x = it.side * (portrait ? 1.0 : 3.7);
        it.holder.position.y = 0.15;
        it.holder.rotation.y = -it.side * (portrait ? 0.3 : 0.52);
      });
    }
    layout();

    // Input
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const ndc = new THREE.Vector2(9, 9);
    const ray = new THREE.Raycaster();
    let hovered = -1;
    const onMove = (e) => {
      mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.ty = -((e.clientY / window.innerHeight) * 2 - 1);
      ndc.set(mouse.tx, mouse.ty);
    };
    const onClick = (e) => {
      if (e.target !== canvas || hovered < 0) return;
      router.push(projectHref(PROJECTS[hovered]));
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('click', onClick);
    window.addEventListener('resize', layout);

    let cur = scrollProgress();
    let prev = cur;
    let speed = 0;
    let lookX = 0;
    const clock = new THREE.Clock();

    function frame() {
      raf = requestAnimationFrame(frame);
      const t = clock.getElapsedTime();
      const target = scrollProgress();
      cur += (target - cur) * (reduce ? 1 : 0.07);
      speed += ((cur - prev) * (START_Z - END_Z) * 60 - speed) * 0.12;
      prev = cur;

      const camZ = START_Z + (END_Z - START_Z) * cur;
      if (!reduce) {
        mouse.x += (mouse.tx - mouse.x) * 0.05;
        mouse.y += (mouse.ty - mouse.y) * 0.05;
      }
      camera.position.set(mouse.x * 0.45, 0.25 + mouse.y * 0.22, camZ);

      let best = -1;
      let bestD = Infinity;
      const bend = reduce ? 0 : Math.max(-0.7, Math.min(0.7, speed * 0.035));
      items.forEach((it, i) => {
        const d = camZ - it.holder.position.z;
        const u = it.mat.uniforms;
        u.uReveal.value = smooth(13, 4.5, d);
        u.uLight.value = smooth(34, 9, d);
        u.uBend.value = bend;
        it.hover += ((hovered === i ? 1 : 0) - it.hover) * 0.1;
        u.uHover.value = it.hover;
        if (d > -1.5 && d < bestD) {
          bestD = d;
          best = i;
        }
      });
      if (cur < 0.035 || cur > 0.93) best = -1;

      const lookTarget = best >= 0 ? items[best].side * 1.1 : 0;
      lookX += (lookTarget - lookX) * 0.03;
      camera.lookAt(lookX + mouse.x * 0.2, 0.15, camZ - 9);

      dust.position.y = Math.sin(t * 0.15) * 0.25;
      dust.position.x = Math.sin(t * 0.07) * 0.3;
      doorMat.opacity = 0.08 + smooth(0.7, 1, cur) * 0.92;

      // hover picking
      ray.setFromCamera(ndc, camera);
      const hit = ray.intersectObjects(meshes, false)[0];
      hovered = hit ? hit.object.userData.index : -1;
      canvas.style.cursor = hovered >= 0 ? 'pointer' : 'default';

      if (introRef.current) {
        const o = 1 - smooth(0, 0.035, cur);
        introRef.current.style.opacity = o;
        introRef.current.style.transform = `translateY(${-cur * 1200}px)`;
      }
      if (endRef.current) {
        const o = smooth(0.93, 0.99, cur);
        endRef.current.style.opacity = o;
        endRef.current.style.pointerEvents = o > 0.5 ? 'auto' : 'none';
      }
      if (barRef.current) barRef.current.style.transform = `scaleY(${cur})`;
      if (best !== activeRef.current) {
        activeRef.current = best;
        setActive(best);
      }

      renderer.render(scene, camera);
    }
    frame();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('click', onClick);
      window.removeEventListener('resize', layout);
      disposeScene(scene);
      renderer.dispose();
    };
  }, [router]);

  const p = active >= 0 ? PROJECTS[active] : null;

  return (
    <main className='relative text-[#CDBFA8] bg-black'>
      <style>{`
        @keyframes corridorIn { from { opacity: 0; transform: translateY(24px); filter: blur(8px); } to { opacity: 1; transform: none; filter: none; } }
        .corridor-in { animation: corridorIn 0.9s cubic-bezier(.2,.7,.1,1) both; }
      `}</style>

      <canvas ref={canvasRef} className='lab-canvas z-0' aria-hidden='true' />

      <LabHeader
        brandClass='text-[13px] tracking-[0.04em] text-[#CDBFA8]'
        linkClass='text-[13px] text-[#CDBFA8]/70 hover:text-[#F4E6CC] transition-colors'
      />

      {/* Intro */}
      <section
        ref={introRef}
        className='fixed inset-0 z-10 flex flex-col items-center justify-center px-4 pointer-events-none text-center'
      >
        <h1 className='sr-only'>Karan Desai Architecture + Design</h1>
        <img src={SIGNATURE} alt='' className='w-[min(78vw,520px)] h-auto opacity-90' width={800} height={408} />
        <p className='f-display italic mt-6 text-[clamp(18px,2.2vw,26px)] text-[#CDBFA8]'>
          Architecture and interiors, from Mumbai, since 2012.
        </p>
        <p className='mt-10 text-[12px] tracking-[0.08em] text-[#CDBFA8]/60'>Scroll to walk through</p>
      </section>

      {/* Current room */}
      <div className='fixed left-4 sm:left-8 bottom-16 sm:bottom-10 z-10 pointer-events-none max-w-[90vw]'>
        {p && (
          <div key={active} className='corridor-in'>
            <p className='text-[12px] tracking-[0.06em] text-[#A88A5A] mb-2'>
              Room {active + 1} of {PROJECTS.length}
            </p>
            <Link
              href={projectHref(p)}
              className='f-display italic block pointer-events-auto text-[clamp(40px,7vw,104px)] leading-[0.95] text-[#F4E6CC] hover:text-white transition-colors'
            >
              {p.name}
            </Link>
          </div>
        )}
      </div>

      {/* Progress rail */}
      <div className='fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 h-[38vh] w-px bg-[#CDBFA8]/15 z-10' aria-hidden='true'>
        <div ref={barRef} className='absolute inset-0 bg-[#A88A5A] origin-top' style={{ transform: 'scaleY(0)' }} />
      </div>

      {/* End: the doorway */}
      <section
        ref={endRef}
        className='fixed inset-0 z-20 flex flex-col items-center justify-center text-center px-4'
        style={{
          opacity: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 50% 55%, #F4E6CC 0%, #EAD7B5 55%, #A88A5A 130%)',
        }}
      >
        <h2 className='f-display text-[clamp(44px,8vw,120px)] leading-[0.95] text-black'>
          The next room
          <br />
          <span className='italic'>is yours.</span>
        </h2>
        <div className='mt-10 flex flex-wrap justify-center gap-3'>
          <Link
            href='/contact-us'
            className='px-7 py-3 bg-black text-[#F4E6CC] text-[14px] tracking-[0.03em] hover:bg-[#2a2016] transition-colors'
          >
            Begin a project
          </Link>
          <Link
            href='/projects'
            className='px-7 py-3 border border-black/60 text-black text-[14px] tracking-[0.03em] hover:bg-black/5 transition-colors'
          >
            See every project
          </Link>
        </div>
      </section>

      <nav className='sr-only' aria-label='Projects in the corridor'>
        <ul>
          {PROJECTS.map((pr) => (
            <li key={pr.id}>
              <a href={projectHref(pr)}>{pr.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div style={{ height: `${PROJECTS.length * 75 + 140}vh` }} aria-hidden='true' />
    </main>
  );
}
