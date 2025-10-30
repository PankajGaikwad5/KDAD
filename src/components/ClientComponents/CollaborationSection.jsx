'use client';
import React from 'react';
import Image from 'next/image';
import { Poppins, Montserrat } from 'next/font/google';

const popins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const CollaborationsSection = ({ title, items }) => (
  <div className='max-w-5xl pl-[22.25rem] md:pl-28 flex snap-x snap-mandatory flex-col gap-2 px-2 pb-4'>
    <h2
      className={`${popins.className} text-xl font-bold tracking-widest my-2 underline`}
    >
      {title}
    </h2>
    <div className='flex gap-2 md:gap-6 overflow-x-auto'>
      {items.map((item, index) => (
        <div
          key={index}
          className='shrink-0 snap-start flex flex-col items-center w-[280px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg backdrop-blur-md'
        >
          <a href={item.image} target='_blank' rel='noopener noreferrer'>
            <Image
              src={item.image}
              alt={`Collaboration ${item.people || ''}`}
              width={280}
              height={280}
              className='object-cover aspect-square'
            />
          </a>
        </div>
      ))}
    </div>
  </div>
);

const CollaborationsClient = ({
  id2025delhi,
  id2024delhi,
  id2024mumbai,
  quarry,
}) => {
  return (
    <div className='text-white flex flex-col items-center justify-center mb-8 scroll-custom'>
      <h1
        className={`md:text-3xl border-b-4 tracking-wider border-pink-800 mb-8 font-semibold uppercase ${montserrat.className}`}
      >
        Collaborations
      </h1>
      <div className='gap-8'>
        <CollaborationsSection
          title='India Design 2025 Delhi'
          items={id2025delhi}
        />
        <CollaborationsSection
          title='India Design 2024 Mumbai'
          items={id2024mumbai}
        />
        <CollaborationsSection
          title='India Design 2024 Delhi'
          items={id2024delhi}
        />
        <CollaborationsSection
          title='Karan x Quarry India Design 2022'
          items={quarry}
        />
      </div>
    </div>
  );
};

export default CollaborationsClient;
