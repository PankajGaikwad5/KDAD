import ProjectCard from '../../components/ProjectCard';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import React from 'react';

const Projects = () => {
  return (
    <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10'>
      <Navbar isBgBlack={true} />
      <div className='text-white flex flex-col items-center justify-center mb-8'>
        <h1 className='text-3xl font-bold mb-8 tracking-widest font-sans uppercase \'>
          Projects
        </h1>
        <div className='w-full relative max-w-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center my-4'>
          <ProjectCard img={'/assets/moon1.jpg'} />
          <ProjectCard img={'/assets/moon1.jpg'} />
          <ProjectCard img={'/assets/moon1.jpg'} />
          <ProjectCard img={'/assets/moon1.jpg'} />
          <ProjectCard img={'/assets/moon1.jpg'} />
          <ProjectCard img={'/assets/moon1.jpg'} />
          <ProjectCard img={'/assets/moon1.jpg'} />
          <ProjectCard img={'/assets/moon1.jpg'} />
          <ProjectCard img={'/assets/moon1.jpg'} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
