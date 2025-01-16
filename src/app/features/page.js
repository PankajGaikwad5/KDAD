import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Features = () => {
  return (
    <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10'>
      <Navbar isBgBlack={true} />
      <div className='text-white flex flex-col items-center justify-center mb-8'>
        <h1 className='text-3xl font-bold mb-8 tracking-widest font-sans uppercase '>
          Features
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default Features;
