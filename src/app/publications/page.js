'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';
import { Poppins, Montserrat } from 'next/font/google';
import { features } from '../../components/features';

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

const Features = () => {
  const [imgArray, setImgArray] = useState([]);
  const [loading, setLoading] = useState(false);

  // const fetchFeatures = async () => {
  //   try {
  //     const response = await fetch('/api/features');
  //     const data = await response.json();
  //     setImgArray(data.features);
  //   } catch (error) {
  //     console.error('Error fetching features:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchFeatures();
  // }, []);

  return (
    <div>
      <div className='project-bg fixed w-full h-full m-0 p-0 z-0 opacity-25 blur-md'></div>
      <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10'>
        <Navbar isBgBlack={true} />
        <div className='text-white flex flex-col items-center justify-center mb-8 md:ml-12'>
          <h1
            className={`text-3xl tracking-wider border-b-4 border-pink-800 mb-8 font-semibold uppercase ${montserrat.className}`}
          >
            publications
          </h1>
          {loading ? (
            <p>Loading please wait...</p>
          ) : (
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
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Features;
