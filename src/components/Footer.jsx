import React from 'react';
import { Poppins, Montserrat } from 'next/font/google';

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
  return (
    <div
      className={`${
        home && 'fixed'
      } z-30 w-full bottom-0 right-0 text-white px-4 lg:px-8 tracking-widest text-xs py-4  uppercase`}
    >
      <div className='flex justify-between items-center gap-8 text-gray-400'>
        <ul className='flex justify-between items-center gap-8'>
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
              href='/projects'
              className='hover:text-white hover:text-lg transition-all duration-300'
            >
              latest project
            </a>
          </li>
        </ul>
        <a
          href='contact us'
          className='hover:text-white hover:text-lg transition-all duration-300'
        >
          contact us
        </a>
      </div>
    </div>
  );
};

export default Footer;
