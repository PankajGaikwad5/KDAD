import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';

const Collaborations = () => {
  const imgArray = [
    'https://www.logoai.com/oss/icons/2021/10/27/Uq3ZUB0h-aPQG6-.png',
    'https://www.logoai.com/oss/icons/2021/10/27/Uq3ZUB0h-aPQG6-.png',
    'https://www.logoai.com/oss/icons/2021/10/27/Uq3ZUB0h-aPQG6-.png',
    'https://www.logoai.com/oss/icons/2021/10/27/Uq3ZUB0h-aPQG6-.png',
    'https://www.logoai.com/oss/icons/2021/10/27/Uq3ZUB0h-aPQG6-.png',
    'https://www.logoai.com/oss/icons/2021/10/27/Uq3ZUB0h-aPQG6-.png',
    'https://www.logoai.com/oss/icons/2021/10/27/Uq3ZUB0h-aPQG6-.png',
    'https://www.logoai.com/oss/icons/2021/10/27/Uq3ZUB0h-aPQG6-.png',
  ];
  return (
    <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10'>
      <Navbar isBgBlack={true} />
      <div className='text-white flex flex-col items-center justify-center mb-8'>
        <h1 className='text-3xl font-bold mb-8 tracking-widest font-sans uppercase '>
          Collaborations
        </h1>
        <div className='w-full relative max-w-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center my-4'>
          {imgArray.map((img, index) => {
            return <ProjectCard img={img} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collaborations;
