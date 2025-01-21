import React from 'react';
import Image from 'next/image';

const LogoComp = () => {
  return (
    <div className=' w-full justify-center items-center flex flex-col'>
      <h1 className='text-2xl tracking-widest text-white -mb-10'>
        exclusive features
      </h1>
      <div className='overflow-hidden w-full'>
        <div className='flex space-x-20 animate-marquee'>
          <div className='flex-shrink-0 flex space-x-20'>
            <Image
              src='/features/hello-india.png'
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
          <div className='flex-shrink-0 flex space-x-20'>
            <Image
              src='/features/hello-india.png'
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
