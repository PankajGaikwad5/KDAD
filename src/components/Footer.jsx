'use client';
import React, { useEffect, useRef } from 'react';
import { Poppins, Montserrat } from 'next/font/google';
import Link from 'next/link';
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

const Footer = ({ home }) => {
  const footerRef = useRef(null);

  useEffect(() => {
    if (!footerRef.current) return;
    const links = footerRef.current.querySelectorAll('a, [href]');
    gsap.fromTo(
      links,
      { y: 16, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.55,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.8,
      }
    );
  }, []);

  return (
    <div
      ref={footerRef}
      className={`${
        home && 'fixed'
      } z-30 w-full bottom-0 right-0 text-white px-4 lg:px-8 tracking-widest text-xs py-4  uppercase`}
    >
      <div className='flex justify-between items-center gap-8 text-gray-400 flex-wrap sm:flex-nowrap'>
        <ul className='flex justify-start items-center gap-6 sm:gap-8 flex-wrap'>
          <li>
            <a
              href='https://www.instagram.com/karandesai_a.d/'
              target='_blank'
              className='hover:text-white hover:text-lg transition-all duration-300'
            >
              instagram
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/@KarandesaiAD'
              target='_blank'
              className='hover:text-white hover:text-lg transition-all duration-300'
            >
              youtube
            </a>
          </li>
          <li>
            <Link
              href='/projects'
              className='hover:text-white hover:text-lg transition-all duration-300'
            >
              latest project
            </Link>
          </li>
          <li>
            <Link
              href='/privacy-policy'
              className='hover:text-white hover:text-lg transition-all duration-300 text-[10px] sm:text-xs'
            >
              privacy policy
            </Link>
          </li>
          <li>
            <Link
              href='/terms-and-conditions'
              className='hover:text-white hover:text-lg transition-all duration-300 text-[10px] sm:text-xs'
            >
              terms & conditions
            </Link>
          </li>
        </ul>
        <Link
          href='contact us'
          className='hover:text-white hover:text-lg transition-all duration-300 whitespace-nowrap'
        >
          contact us
        </Link>
      </div>
    </div>
  );
};

export default Footer;
