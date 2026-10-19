'use client';
import React, { useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import { Poppins, Montserrat } from 'next/font/google';

const popins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
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
        <p className={`text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed ${popins.className}`}>
          Award-winning residential villas, luxury penthouses, bespoke apartments, and commercial architecture by Karan Desai Architecture + Design (KDAD) across Mumbai, India, and internationally.
        </p>

        {/* Semantic Service Badges for Search Context */}
        <div className='flex flex-wrap justify-center gap-2 mt-4 text-[11px] sm:text-xs text-gray-400 uppercase tracking-widest'>
          <span className='px-3 py-1 bg-white/5 rounded-full border border-white/10'>Residential Architects</span>
          <span className='px-3 py-1 bg-white/5 rounded-full border border-white/10'>Luxury Interior Designers</span>
          <span className='px-3 py-1 bg-white/5 rounded-full border border-white/10'>Villas & Penthouses</span>
          <span className='px-3 py-1 bg-white/5 rounded-full border border-white/10'>Commercial Workspaces</span>
          <span className='px-3 py-1 bg-white/5 rounded-full border border-white/10'>Mumbai & Pan-India</span>
        </div>
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
