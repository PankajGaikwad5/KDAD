'use client';
import ProjectCard from '../../components/ProjectCard';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [imgArray, setImgArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const newImgArray = [
    '/projects/1.jpg',
    '/projects/2.jpg',
    '/projects/3.jpg',
    '/projects/4.jpg',
    '/projects/5.jpg',
    '/projects/6.jpg',
    '/projects/7.jpg',
    '/projects/8.jpg',
    '/projects/9.jpg',
    '/projects/10.jpg',
  ];

  useEffect(() => {
    // Fetch topics from the API
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        console.log(data);

        setImgArray(data.projects);
        console.log(imgArray);
        // setTimeout(() => {
        setLoading(false);
        // }, 2000);
      } catch (error) {
        console.error('Error fetching topics:', error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <div className='project-bg fixed w-full h-full m-0 p-0 z-0 opacity-25'></div>
      <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10'>
        <Navbar isBgBlack={true} />
        <div className='text-white flex flex-col items-center justify-center mb-8'>
          <h1 className='text-3xl  border-b-4 border-pink-800 font-bold mb-8 tracking-widest font-sans uppercase \'>
            Projects
          </h1>
          {/* <div className='w-full relative max-w-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center my-4'>
          {imgArray.map((items) => {
            const { _id, images, title } = items;
            return (
              <ProjectCard key={_id} title={title} img={images[0].fileUrl} />
            );
          })}
        </div> */}
          {loading ? ( // Show a loading indicator while fetching
            <div>Loading...</div>
          ) : (
            <div className='w-full relative max-w-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center my-4'>
              {imgArray.map((items, index) => {
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
};

export default Projects;
