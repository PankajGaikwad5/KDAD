import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';

const Collaborations = () => {
  const imgArray = [
    '/features/hello-india.png',
    '/features/living-etc.png',
    '/features/elle-decor.png',
    '/features/ad.png',
    '/features/a+d.png',
    '/features/india-today.png',
    '/features/better-interiors.png',
    '/features/h&d.png',
    '/features/trends.png',
    '/features/gooodhomes.png',
    '/features/aii.png',
  ];
  return (
    <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10'>
      <Navbar isBgBlack={true} />
      <div className='text-white flex flex-col items-center justify-center mb-8'>
        <h1 className='text-3xl border-b-2 border-pink-800 font-bold mb-8 tracking-widest font-sans uppercase '>
          Collaborations
        </h1>
        <div className='w-full relative p-8 rounded-2xl max-w-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center my-4'>
          {/* {imgArray.map((img, index) => {
            return <ProjectCard key={index} img={img} />;
          })} */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collaborations;
