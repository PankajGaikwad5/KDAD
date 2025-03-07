'use client';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import LogoComp from '../components/LogoComp';
import { useState, useEffect } from 'react';
// import CursorTrail from '../components/CursorTrail';

export default function Home() {
  const [gifKey, setGifKey] = useState('');
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    // Generate a unique key (timestamp) on every page load
    setGifKey(`?reload=${Date.now()}`);
    setInterval(() => {
      setLogoLoaded(true);
    }, 3500);
  }, []);
  return (
    <div className='bg-black/90'>
      {/* // <div className='relative overflow-hidden'> */}
      <h1 className='sr-only'>
        Karan Desai Architecture and Design – Innovative, Modern, Sustainable
        Design Solutions
      </h1>
      <div className='relative w-full h-screen overflow-hidden m-0 p-0'>
        {/* <CursorTrail /> */}
        <Navbar isBgBlack={true} isHomePage={true} />
        <div
          className={`absolute inset-0 z-0 bg-cover bg-center ${
            !logoLoaded ? 'opacity-20' : 'opacity-70'
          } animate-bg-change  animate-bg transition-all duration-700`}
        ></div>
        <div className='relative z-10 font-semibold text-center top-1/2 -mt-28 lg:-mt-8 -translate-y-1/2 text-3xl sm:text-8xl text-white tracking-widest flex flex-col  justify-center items-center mb-0'>
          {/* <h1 className='text-center'>karan desai</h1>
        <h1 className='text-2xl font-sans text-center uppercase font-thin linespace '>
          architecture + design
        </h1> */}
          {/* <img src='/assets/signature.gif' alt='' /> */}
          {/* <img
            src={`/assets/sign.gif${gifKey}`}
            className={`${!logoLoaded ? 'opacity-100' : 'opacity-30'}`}
            alt='Animated signature representing Karan Desai Architecture'
          /> */}
          <video
            src={`/assets/sign.webm${gifKey}`}
            autoPlay
            muted
            playsInline
            className={`${!logoLoaded ? 'opacity-100' : 'opacity-30'}`}
            alt='Animated signature representing Karan Desai Architecture'
          ></video>
        </div>
        {/* <div className='absolute right-0 top-0 -mt-12 z-30'>
        <Image
          src='/assets/newlogo.png'
          alt='logo'
          width={225}
          height={225}
          className='object-contain'
        />
      </div> */}
        <div className='w-full fixed left-[50%] bottom-[2%] translate-x-[-50%]  flex items-center text-black px-4  overflow-hidden z-10 m-0'>
          <LogoComp />

          <Footer home={true} />
        </div>
        //{' '}
      </div>
    </div>
  );
}
