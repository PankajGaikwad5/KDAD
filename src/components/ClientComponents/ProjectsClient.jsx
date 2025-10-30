'use client';
import React, { useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import { Poppins, Montserrat } from 'next/font/google';

const popins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const ProjectsClient = ({ projects }) => {
  const [loading, setLoading] = useState(false);

  return (
    <div className='text-white flex flex-col items-center justify-center mb-8'>
      <h1
        className={`text-3xl border-b-4 tracking-wider border-pink-800 mb-8 font-semibold uppercase ${montserrat.className}`}
      >
        Projects
      </h1>
      {loading ? (
        <p>Loading please wait...</p>
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
