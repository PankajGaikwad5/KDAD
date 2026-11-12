'use client';
import React, { useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const ProjectsClient = ({ projects }) => {
  const [loading, setLoading] = useState(false);

  return (
    <div className='text-white flex flex-col items-center justify-center mb-8'>
      <header className='text-center max-w-3xl px-4 mb-8'>
        <h1
          className={`text-2xl sm:text-3xl lg:text-4xl border-b-4 tracking-wider border-pink-800 pb-2 mb-4 font-semibold uppercase inline-block ${montserrat.className}`}
        >
          Architecture & Interior Design Portfolio
        </h1>
      </header>

      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <div className='w-full relative max-w-3xl 2xl:max-w-[73%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center my-4'>
          {projects.map((item, index) => {
            const { _id, images, title } = item;
            return (
              <ProjectCard
                key={index}
                img={images[0].fileUrl}
                priority={index < 3}
                id={_id}
                title={title}
                projects={true}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProjectsClient;
