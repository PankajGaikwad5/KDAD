'use client';
import ProjectCard from '../../components/ProjectCard';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import React, { useEffect, useState } from 'react';
import { Poppins, Montserrat } from 'next/font/google';
import { projects } from '../../components/projects';

// popins
// montserrat
const popins = Poppins({
  subsets: ['latin'], // Specify subsets
  weight: ['400', '600', '700'], // Specify weight
});
const montserrat = Montserrat({
  subsets: ['latin'], // Specify subsets
  weight: ['400', '600', '700'], // Specify weight
});

const Projects = () => {
  const [imgArray, setImgArray] = useState([]);
  const [loading, setLoading] = useState(false);

  // const fetchProjects = async () => {
  //   try {
  //     const response = await fetch(`/api/projects`);
  //     const data = await response.json();
  //     setImgArray(data.projects);
  //   } catch (error) {
  //     console.error('Error fetching projects:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchProjects();
  // }, []);

  return (
    <div>
      <div className='project-bg fixed w-full h-full m-0 p-0 z-0 opacity-25 blur-md'></div>
      <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10'>
        <Navbar isBgBlack={true} />
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
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
