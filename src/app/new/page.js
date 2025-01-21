import React from 'react';
import Image from 'next/image';

const New = () => {
  const logos = [
    '/features/hello-india.png',
    '/features/living-etc.png',
    '/features/elle-decor.png',
    '/features/ad.png',
    '/features/a+d.png',
    '/features/india-today.png',
    '/features/better-interiors.png',
    '/features/h&d.png',
    '/features/trends.png',
    '/features/goodhomes.png',
    '/features/aii.png',
  ];

  return (
    <div className='overflow-hidden w-full'>
      <div className='flex space-x-8 animate-marquee'>
        {/* Render logos */}
        {logos.map((src, index) => (
          <div key={index} className='flex-shrink-0'>
            <Image
              src={src}
              alt={`Logo ${index + 1}`}
              width={120}
              height={120}
              className='object-contain'
            />
          </div>
        ))}
        {/* Duplicate logos for seamless loop */}
        {logos.map((src, index) => (
          <div key={`duplicate-${index}`} className='flex-shrink-0'>
            <Image
              src={src}
              alt={`Logo Duplicate ${index + 1}`}
              width={120}
              height={120}
              className='object-contain'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default New;
