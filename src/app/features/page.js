'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';

const Features = () => {
  const [imgArray, setImgArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch topics from the API
    const fetchProjects = async () => {
      try {
        const response = await fetch(`/api/features`);
        const data = await response.json();
        console.log(data);

        setImgArray(data.features);
        console.log(imgArray);
        // setTimeout(() => {

        setLoading(false);
        // }, 2000);
      } catch (error) {
        console.error('Error fetching topics:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <div className='project-bg fixed w-full h-full m-0 p-0 z-0 opacity-25 blur-md'></div>
      <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10'>
        <Navbar isBgBlack={true} />
        <div className='text-white flex flex-col items-center justify-center mb-8 md:ml-12'>
          <h1 className='text-3xl font-bold  border-b-4 border-pink-800 mb-8 tracking-widest font-sans uppercase '>
            Features
          </h1>
          {/* {loading ? ( // Show a loading indicator while fetching
            <div>Loading...</div>
          ) : ( */}
          <div className='w-full relative max-w-4xl grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 text-center my-4'>
            {/* {imgArray.map((item, index) => {
            return <ProjectCard key={index} img={item} feature={true} />;
          })} */}
            {imgArray.map((items, index) => {
              const { _id, images, title } = items;

              return (
                <ProjectCard
                  key={index}
                  img={images[0].fileUrl}
                  id={_id}
                  title={title}
                />
              );
            })}
          </div>
          {/* )} */}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Features;
