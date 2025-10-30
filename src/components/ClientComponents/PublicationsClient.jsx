'use client';
import React from 'react';
import ProjectCard from '../ProjectCard';
import { Poppins, Montserrat } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const PublicationsClient = ({ articles, features }) => {
  return (
    <div className='text-white flex flex-col items-center justify-center mb-8 md:ml-12'>
      <h1
        className={`text-3xl tracking-wider border-b-4 border-pink-800 mb-8 font-semibold uppercase ${montserrat.className}`}
      >
        publications
      </h1>
      <div className='flex gap-4 flex-col w-full justify-center items-center'>
        <h2
          className={`text-2xl w-full text-center max-w-[60%] tracking-wider border-b-4 border-pink-800 my-8 font-semibold uppercase ${montserrat.className}`}
        >
          Articles
        </h2>
        <div className='w-full relative max-w-[54rem] 2xl:max-w-[80%] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-colsp-8 text-center my-4'>
          {articles.map((item) => {
            const { id, image, link, text } = item;
            return (
              <div
                key={id}
                className='flex justify-center items-center flex-col gap-5 my-8'
              >
                <a href={link} target='_blank' rel='noopener noreferrer'>
                  <Image
                    width={170}
                    height={170}
                    src={image}
                    alt={`article image: ${text}`}
                  />
                </a>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className='flex gap-4 flex-col w-full justify-center items-center'>
        <h2
          className={`text-2xl w-full text-center max-w-[60%] tracking-wider border-b-4 border-pink-800 my-14 font-semibold uppercase ${montserrat.className}`}
        >
          magazines
        </h2>
        <div className='w-full relative max-w-[54rem] 2xl:max-w-[80%] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 text-center my-4'>
          {features.map((item, index) => {
            const { _id, images, title } = item;
            return (
              <ProjectCard
                key={index}
                priority={index < 3}
                img={images[0].fileUrl}
                id={_id}
                title={title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PublicationsClient;
