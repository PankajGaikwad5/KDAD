'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Poppins, Montserrat } from 'next/font/google';
import { gsap } from 'gsap';

// popins
// montserrat
const popins = Poppins({
  subsets: ['latin'], // Specify subsets
  weight: ['100', '200', '300', '400', '600', '700'], // Specify weight
});
const montserrat = Montserrat({
  subsets: ['latin'], // Specify subsets
  weight: ['100', '200', '300', '400', '600', '700'], // Specify weight
});

const LogoComp = () => {
  const headingRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      headingRef.current,
      { clipPath: 'inset(100% 0 0 0)' },
      { clipPath: 'inset(0% 0 0 0)', duration: 1.6, delay: 1, ease: 'power2.inOut' }
    ).fromTo(
      marqueeRef.current,
      { clipPath: 'inset(100% 0 0 0)' },
      { clipPath: 'inset(0% 0 0 0)', duration: 1.8, ease: 'power2.inOut' },
      '-=0.4'
    );
  }, []);

  return (
    <div className=' w-full justify-center items-center flex flex-col'>
      <h2
        ref={headingRef}
        className={`text-xl md:text-2xl tracking-widest text-white -mb-10 line-clamp-5 ${montserrat.className} uppercase font-extrabold`}
      >
        exclusive features
      </h2>
      <div ref={marqueeRef} className='overflow-hidden w-full'>
        <div className='flex space-x-20 animate-marquee'>
          <div className='flex-shrink-0 flex space-x-20'>
            <Image
              src='/features/hello-india2.png'
              alt='hello india'
              width={120}
              height={120}
              className='object-contain'
            />
            <Image
              src='/features/living-etc.png'
              alt='Logo 2'
              width={120}
              height={120}
              className='object-contain'
            />
            <Image
              src='/features/elle-decor.png'
              alt='Logo 2'
              width={100}
              height={100}
              className='object-contain'
            />
            <Image
              src='/features/ad.png'
              alt='Logo 2'
              width={80}
              height={80}
              className='object-contain'
            />
            <Image
              src='/features/a+d.png'
              alt='Logo 2'
              width={120}
              height={120}
              className='object-contain'
            />{' '}
            <Image
              src='/features/india-today3.png'
              alt='Logo 2'
              width={120}
              height={120}
              className='object-contain'
            />
            <Image
              src='/features/better-interiors2.png'
              alt='Logo 2'
              width={120}
              height={120}
              className='object-contain'
            />
            <Image
              src='/features/h&d.png'
              alt='Logo 2'
              width={160}
              height={160}
              className='object-contain'
            />
            <Image
              src='/features/trends.png'
              alt='Logo 2'
              width={120}
              height={120}
              className='object-contain'
            />
            <Image
              src='/features/goodhomes.png'
              alt='Logo 2'
              width={170}
              height={170}
              className='object-contain'
            />
            <Image
              src='/features/aaii.png'
              alt='Logo 2'
              width={170}
              height={170}
              className='object-contain'
            />
          </div>
          <div className='flex-shrink-0 flex space-x-20'>
            <Image
              src='/features/hello-india2.png'
              alt='hello india'
              width={120}
              height={120}
              className='object-contain'
            />
            <Image
              src='/features/living-etc.png'
              alt='Logo 2'
              width={120}
              height={120}
              className='object-contain'
            />
            <Image
              src='/features/elle-decor.png'
              alt='Logo 2'
              width={100}
              height={100}
              className='object-contain'
            />
            <Image
              src='/features/ad.png'
              alt='Logo 2'
              width={80}
              height={80}
              className='object-contain'
            />
            <Image
              src='/features/a+d.png'
              alt='Logo 2'
              width={120}
              height={120}
              className='object-contain'
            />{' '}
            <Image
              src='/features/india-today.png'
              alt='Logo 2'
              width={120}
              height={120}
              className='object-contain'
            />
            <Image
              src='/features/better-interiors.png'
              alt='Logo 2'
              width={120}
              height={120}
              className='object-contain'
            />
            <Image
              src='/features/h&d.png'
              alt='Logo 2'
              width={160}
              height={160}
              className='object-contain'
            />
            <Image
              src='/features/trends.png'
              alt='Logo 2'
              width={120}
              height={120}
              className='object-contain'
            />
            <Image
              src='/features/goodhomes.png'
              alt='Logo 2'
              width={170}
              height={170}
              className='object-contain'
            />
            <Image
              src='/features/aii.png'
              alt='Logo 2'
              width={170}
              height={170}
              className='object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoComp;
