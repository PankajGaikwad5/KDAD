import ProjectCard from '../../components/ProjectCard';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import React from 'react';

export default async function Projects() {
  // Fetch data on the server
  let projects = [];
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/projects`, {
      cache: 'no-store', // Use 'force-cache' for SSG or 'no-store' for SSR
    });
    const data = await response.json();
    projects = data.projects || [];
  } catch (error) {
    console.error('Error fetching projects:', error);
  }

  return (
    <div>
      <div className='project-bg fixed w-full h-full m-0 p-0 z-0 opacity-25 '></div>
      <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10'>
        <Navbar isBgBlack={true} />
        <div className='text-white flex flex-col items-center justify-center mb-8'>
          <h1 className='text-3xl border-b-4 border-pink-800 font-bold mb-8 tracking-widest font-sans uppercase'>
            Projects
          </h1>
          {projects.length === 0 ? (
            <div>No projects available</div>
          ) : (
            <div className='w-full relative max-w-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center my-4'>
              {projects.map((items, index) => {
                const { _id, images, title } = items;

                return (
                  <ProjectCard
                    key={index}
                    img={images[0].fileUrl}
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
}
