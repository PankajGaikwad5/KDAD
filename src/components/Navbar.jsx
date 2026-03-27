'use client';
import Image from 'next/image';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
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

const Navbar = ({ isBgBlack, isHomePage }) => {
  const [nav, setNav] = useState(false);
  const logoRef = useRef(null);
  const navLinksRef = useRef([]);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Logo slides in from left + fades in
      tl.fromTo(
        logoRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7 }
      );

      // Nav links stagger up (start slightly below, move to position)
      tl.fromTo(
        navLinksRef.current.filter(Boolean),
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.07 },
        '-=0.3'
      );
    });

    // Hamburger fade in on mobile
    if (hamburgerRef.current) {
      gsap.fromTo(
        hamburgerRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.2 }
      );
    }

    return () => ctx.revert();
  }, []);
  const newNavTopics = [
    // {
    //   id: 1,
    //   name: 'home',
    //   path: '/',
    // },
    {
      id: 2,
      name: 'about us',
      path: 'about us',
    },
    {
      id: 3,
      name: 'projects',
      path: 'projects',
    },
    {
      id: 4,
      name: 'collaborations',
      path: 'collaborations',
    },
    {
      id: 5,
      name: 'publications',
      path: 'publications',
    },
    {
      id: 6,
      name: 'contact us',
      path: 'contact us',
    },
  ];

  const navTopics = [
    `${isHomePage ? '' : 'home'}`,
    'about us',
    'projects',
    'collaborations',
    'publications',
    'contact us',
  ];
  // karan desai homes
  // shu khabar
  return (
    <>
      <div
        ref={hamburgerRef}
        className={`xl:hidden w-full relative m-6 font-mono font-extralight text-xs uppercase tracking-wider text-gray-800 navMenu z-30  ${
          nav && 'open'
        }`}
        onClick={() => setNav(!nav)}
      >
        <span className={`${isBgBlack ? 'bg-white' : 'bg-black'}`}></span>
        <span className={`${isBgBlack ? 'bg-white' : 'bg-black'}`}></span>
        <span className={`${isBgBlack ? 'bg-white' : 'bg-black'}`}></span>
      </div>

      {/* <div className={`${!nav ? 'hidden' : 'block'} relative`}> */}
      <ul
        className={
          !nav
            ? 'absolute w-full h-screen top-0 left-[100%] xl:hidden flex flex-col justify-center text-white items-center duration-500 '
            : `absolute w-full h-screen top-0 left-0 flex flex-col xl:hidden ${
                isBgBlack ? 'text-white' : 'text-gray-800'
              } text-3xl justify-center items-center bg-black/80  z-20 duration-500 `
        }
      >
        <ul className={`flex flex-col gap-2 `}>
          <Link
            href='/'
            className={`hover:text-gray-600 transition-all duration-300`}
          >
            home
          </Link>
          {newNavTopics.map((items) => {
            const { id, name, path } = items;
            return (
              <li key={id}>
                <Link
                  href={path}
                  className='hover:text-gray-600 transition-all duration-300 '
                >
                  {name}
                </Link>
              </li>
            );
          })}
          <li className='border-t border-dotted pt-4'>
            <a
              href='https://www.shukhabarwithkd.com/'
              target='_blank'
              className='hover:text-gray-600 transition-all duration-300'
            >
              shukhabar
            </a>
          </li>
          <li>
            <a
              href='https://karandesaihome.com/'
              className='hover:text-gray-600 transition-all duration-300'
            >
              karan desai home
            </a>
          </li>
        </ul>
      </ul>
      {/* </div> */}

      <div
        className={`fixed hidden xl:flex flex-col space-y-2 top-0  ml-10 mt-6 font-mono font-extralight text-xs uppercase z-30 tracking-wider ${
          isBgBlack ? 'text-white hover:text-opacity-50' : 'text-gray-800'
        }`}
      >
        <Link href='/' ref={logoRef}>
          <Image
            src='/assets/signlogo.png'
            alt='Logo'
            width={120}
            height={120}
            className='object-contain -ml-1 m-0 p-0

            '
          />
        </Link>

        <ul
          className={`flex flex-col ${montserrat.className} font-semibold tracking-widest `}
        >
          {newNavTopics.map((items, index) => {
            const { id, name, path } = items;
            return (
              <li key={id} ref={(el) => (navLinksRef.current[index] = el)}>
                <Link
                  href={path}
                  className={`transition-all duration-300 hover:text-lg ${
                    isBgBlack ? 'hover:text-white' : 'hover:text-gray-400'
                  } w-full inline-block whitespace-nowrap overflow-hidden text-animate`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
          <span className='border-t border-dotted pt-2 mt-1 w-40'></span>
          <li ref={(el) => (navLinksRef.current[newNavTopics.length] = el)}>
            <a
              href='https://www.shukhabarwithkd.com/'
              target='_blank'
              className={`transition-all duration-300 hover:text-lg ${
                isBgBlack ? 'hover:text-white' : 'hover:text-gray-400'
              } w-full inline-block whitespace-nowrap overflow-hidden text-animate`}
            >
              shukhabar
            </a>
          </li>
          <li ref={(el) => (navLinksRef.current[newNavTopics.length + 1] = el)}>
            <a
              href='https://karandesaihome.com/'
              target='_blank'
              className={`transition-all duration-300 hover:text-lg ${
                isBgBlack ? 'hover:text-white' : 'hover:text-gray-400'
              } w-full inline-block whitespace-nowrap overflow-hidden text-animate`}
            >
              karan desai home
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
