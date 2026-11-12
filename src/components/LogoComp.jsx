'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const FEATURE_LOGOS_1 = [
  { src: '/features/hello-india2.webp', alt: 'Hello! India Magazine Feature', width: 120, height: 120 },
  { src: '/features/living-etc.webp', alt: 'Livingetc India Magazine Feature', width: 120, height: 120 },
  { src: '/features/elle-decor.webp', alt: 'Elle Decor India Architecture Feature', width: 100, height: 100 },
  { src: '/features/ad.webp', alt: 'Architectural Digest (AD) India Feature', width: 80, height: 80 },
  { src: '/features/a+d.webp', alt: 'Architecture + Design (A+D) Magazine', width: 120, height: 120 },
  { src: '/features/india-today3.webp', alt: 'India Today Home & Architecture', width: 120, height: 120 },
  { src: '/features/better-interiors2.webp', alt: 'Better Interiors Magazine', width: 120, height: 120 },
  { src: '/features/h&d.webp', alt: 'Home & Design Trends', width: 160, height: 160 },
  { src: '/features/trends.webp', alt: 'Trends Magazine Feature', width: 120, height: 120 },
  { src: '/features/goodhomes.webp', alt: 'GoodHomes India Magazine', width: 170, height: 170 },
  { src: '/features/aaii.webp', alt: 'Architect and Interiors India', width: 170, height: 170 },
];

const FEATURE_LOGOS_2 = [
  { src: '/features/hello-india2.webp', alt: 'Hello! India Magazine Feature', width: 120, height: 120 },
  { src: '/features/living-etc.webp', alt: 'Livingetc India Magazine Feature', width: 120, height: 120 },
  { src: '/features/elle-decor.webp', alt: 'Elle Decor India Architecture Feature', width: 100, height: 100 },
  { src: '/features/ad.webp', alt: 'Architectural Digest (AD) India Feature', width: 80, height: 80 },
  { src: '/features/a+d.webp', alt: 'Architecture + Design (A+D) Magazine', width: 120, height: 120 },
  { src: '/features/india-today.webp', alt: 'India Today Home & Architecture', width: 120, height: 120 },
  { src: '/features/better-interiors.webp', alt: 'Better Interiors Magazine', width: 120, height: 120 },
  { src: '/features/h&d.webp', alt: 'Home & Design Trends', width: 160, height: 160 },
  { src: '/features/trends.webp', alt: 'Trends Magazine Feature', width: 120, height: 120 },
  { src: '/features/goodhomes.webp', alt: 'GoodHomes India Magazine', width: 170, height: 170 },
  { src: '/features/aii.webp', alt: 'Architect and Interiors India', width: 170, height: 170 },
];

const LogoComp = () => {
  const headingRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    let ctx;
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(
          headingRef.current,
          { clipPath: 'inset(100% 0 0 0)' },
          { clipPath: 'inset(0% 0 0 0)', duration: 1.4, ease: 'power2.inOut' }
        ).fromTo(
          marqueeRef.current,
          { clipPath: 'inset(100% 0 0 0)' },
          { clipPath: 'inset(0% 0 0 0)', duration: 1.4, ease: 'power2.inOut' },
          '-=0.4'
        );
      });
    }, 400);

    return () => {
      clearTimeout(timer);
      ctx && ctx.revert();
    };
  }, []);

  return (
    <div className='w-full justify-center items-center flex flex-col'>
      <h2
        ref={headingRef}
        className='text-xl md:text-2xl tracking-widest text-white -mb-10 line-clamp-5 uppercase font-extrabold'
        style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
      >
        exclusive features
      </h2>
      <div ref={marqueeRef} className='overflow-hidden w-full'>
        <div className='flex space-x-20 animate-marquee'>
          <div className='flex-shrink-0 flex space-x-20'>
            {FEATURE_LOGOS_1.map((logo, idx) => (
              <Image
                key={`f1-${idx}`}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                loading='lazy'
                className='object-contain'
              />
            ))}
          </div>
          <div className='flex-shrink-0 flex space-x-20'>
            {FEATURE_LOGOS_2.map((logo, idx) => (
              <Image
                key={`f2-${idx}`}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                loading='lazy'
                className='object-contain'
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoComp;
