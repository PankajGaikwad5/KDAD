'use client';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

const Navbar = ({ isBgBlack, isHomePage }) => {
  const [nav, setNav] = useState(false);
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
      name: 'features',
      path: 'features',
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
    'features',
    'contact us',
  ];
  // karan desai homes
  // shu khabar
  return (
    <>
      <div
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
            ? 'absolute w-full h-screen top-0 left-[100%] xl:hidden flex flex-col justify-center text-gray-300 items-center duration-500'
            : `absolute w-full h-screen top-0 left-0 flex flex-col xl:hidden ${
                isBgBlack ? 'text-gray-300' : 'text-gray-800'
              } text-3xl justify-center items-center bg-black/60 z-20 duration-500 `
        }
      >
        <ul className='flex flex-col gap-2'>
          <a
            href='/'
            className={`hover:text-gray-600 transition-all duration-300`}
          >
            home
          </a>
          {newNavTopics.map((items) => {
            const { id, name, path } = items;
            return (
              <li key={id}>
                <a
                  href={path}
                  className='hover:text-gray-600 transition-all duration-300 '
                >
                  {name}
                </a>
              </li>
            );
          })}
          <li className='border-t border-dotted pt-4'>
            <a
              href='shukhabar'
              className='hover:text-gray-600 transition-all duration-300'
            >
              shukhabar
            </a>
          </li>
          <li>
            <a
              href='karan desai homes'
              className='hover:text-gray-600 transition-all duration-300'
            >
              karan desai home
            </a>
          </li>
        </ul>
      </ul>
      {/* </div> */}

      <div
        className={`fixed hidden xl:flex flex-col space-y-2 top-0 ml-14 mt-6 font-mono font-extralight text-xs uppercase z-30 tracking-wider ${
          isBgBlack ? 'text-gray-200' : 'text-gray-800'
        }`}
      >
        <a href='/'>
          <Image
            src='/assets/logo.png'
            alt='Logo'
            width={120}
            height={120}
            className='object-contain -ml-1 m-0 p-0 
            
            '
          />
        </a>

        <ul className='flex flex-col'>
          {newNavTopics.map((items) => {
            const { id, name, path } = items;
            return (
              <li key={id}>
                <a
                  href={path}
                  className={`transition-all duration-300 hover:text-lg ${
                    isBgBlack ? 'hover:text-white' : 'hover:text-gray-400'
                  } w-full inline-block whitespace-nowrap overflow-hidden text-animate`}
                >
                  {name}
                </a>
              </li>
            );
          })}
          <li className='border-t border-dotted pt-4'>
            <a
              href='shukhabar'
              className={`transition-all duration-300 hover:text-lg ${
                isBgBlack ? 'hover:text-white' : 'hover:text-gray-400'
              } w-full inline-block whitespace-nowrap overflow-hidden text-animate`}
            >
              shukhabar
            </a>
          </li>
          <li>
            <a
              href='karan desai homes'
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
