'use client';
import React from 'react';
import { useState } from 'react';

const Navbar = ({ isBgBlack }) => {
  const [nav, setNav] = useState(false);
  const navTopics = [
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
        className={`md:hidden w-full relative m-6 font-mono font-extralight text-xs uppercase tracking-wider text-gray-800 navMenu z-30  ${
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
            ? 'absolute w-full h-screen top-0 left-[100%] flex flex-col justify-center text-gray-300 items-center duration-500'
            : `absolute w-full h-screen top-0 left-0 flex flex-col md:hidden ${
                isBgBlack ? 'text-gray-300' : 'text-gray-800'
              } text-3xl justify-center items-center bg-black/40 z-20 duration-500`
        }
      >
        <ul className='flex flex-col gap-2'>
          {navTopics.map((items, index) => {
            return (
              <li key={index}>
                <a
                  href={items}
                  className='hover:text-gray-600 transition-all duration-300'
                >
                  {items}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href='shukhabar'
              className='hover:text-gray-600 transition-all duration-300'
            >
              shukhabar
            </a>
          </li>
        </ul>
      </ul>
      {/* </div> */}

      <div
        className={`fixed hidden md:block top-0 ml-14 mt-14 font-mono font-extralight text-xs uppercase z-30 tracking-wider ${
          isBgBlack ? 'text-gray-300' : 'text-gray-800'
        }`}
      >
        <ul className='flex flex-col gap-2'>
          {navTopics.map((items, index) => {
            return (
              <li key={index}>
                <a
                  href={items}
                  className={`transition-all duration-300 hover:text-lg ${
                    isBgBlack ? 'hover:text-white' : 'hover:text-gray-400'
                  }`}
                >
                  {items}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href='shukhabar'
              className={`transition-all duration-300 hover:text-lg ${
                isBgBlack ? 'hover:text-white' : 'hover:text-gray-400'
              }`}
            >
              shukhabar
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
