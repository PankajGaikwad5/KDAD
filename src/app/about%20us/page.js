import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import React from 'react';

const About = () => {
  return (
    <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10'>
      <Navbar isBgBlack={true} />
      <div className='text-white flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold mb-8'>About Us</h1>
        <div className='max-w-2xl space-y-8 pb-8 border-b border-gray-600 border-dashed'>
          <Card imagePosition={'left'} />
        </div>
        <h1 className='text-3xl font-bold my-4'>meet the team</h1>
        <div className='max-w-2xl space-y-8 pb-8'>
          <Card imagePosition={'left'} />
          <Card />
          <Card imagePosition={'left'} />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
