import React from 'react';

const Footer = () => {
  return (
    <div className='fixed z-30 w-full bottom-0 right-0 text-white px-4 lg:px-8 tracking-widest text-xs py-4'>
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
