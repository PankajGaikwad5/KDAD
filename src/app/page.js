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
      <div className='hidden'>
        <h1>Karan Desai</h1>
        <h1>Karan Desai Acrhitect + Design</h1>
        <h1>Karan Desai Acrhitect</h1>
        <h2>Interior Designer</h2>
        <h2>Architect</h2>
        <h1>Karan Desai Home</h1>
        <h2>Designer</h2>
        <h2>Serafini</h2>
        <h2>Casa walls</h2>
        <h2>Dimensions</h2>
        <h2>Top Brewer</h2>
        <h2>Gattoo</h2>
        <h2>Monster</h2>
        <p>Discover the innovative architectural designs of Karan Desai Home</p>
        <p>
          Karan Desai Award Winning Architecture + Interior Design Studio | TedX
          Speaker Karan DesaiBorn in 1987, a passionate founder of his eponymous
          studio, KARAN DESAI | Architecture + Design, focusing on Architecture,
          Interiors & furniture designing, KD started off with his individual
          practice right after he gave his Thesis in 2011 from Pillai’s college
          of architecture & founded the company in 2012. The internship under
          Ar. Ashiesh Shah during a year drop in 2007, carved a path for his
          career with a clear direction towards his goals & dreams which he
          lives today. The Studio has spread its wings in Mangalore, Goa, Delhi,
          Kullu - Manali, Uttarakhand, Kolkata, Chennai and plan to continue.
          Inspired by contemporary aesthetics and clean lines, the studio
          beautifies projects both residential and commercial on varying scales.
          From ideation rooms to offices , homes to private getaways, the team
          designs projects and products in close association with clients to
          deliver unique results and reflect personal tastes with consolidating
          the studio’s vision. We're also doing projects internationally, We've
          completed working on the order of 20,000 sq.ft. in Chicago and
          currently working on 15,000 sq.ft Mansion in Washington, D.C.
        </p>
        <p>
          "Imagine transforming everyday spaces into rich, immersive
          experiences—what if art became a part of your daily life?" Karan Desai
          Home is a testament to bringing the experience through meticulously
          crafted furniture and products. KDH specialises in creating art pieces
          that are not only visually striking but also serve a functional
          purpose. Following the success of our Monster collection in 2022, we
          have consistently expanded our portfolio, collaborating with renowned
          industry leaders such as The Quarry, Casa Walls, Bharat Flooring, and
          more. Our dedication to design innovation has earned us international
          recognition, including a prestigious partnership with Serafini
          (Italy). With a commitment to global collaborations and a mission to
          craft extraordinary designs, KDH continues to redefine functional art.
          Our unique approach and creative philosophy aim to inspire and
          captivate, bringing exceptional products to life.
        </p>
        <p>
          'KDAD', 'Karan Desai', 'Karan Desai Architecture and Design', 'modern
          architecture', 'contemporary architecture', 'innovative architecture',
          'creative architecture', 'architectural design', 'modern design',
          'sustainable architecture', 'eco-friendly design', 'residential
          architecture', 'commercial architecture', 'interior design',
          'architectural portfolio', 'design studio', 'urban design',
          'minimalist design', 'award-winning architecture', 'architecture
          firm', 'creative design solutions', 'luxury architecture', 'modern
          building design', 'architectural innovation', 'architectural trends',
          'design inspiration', 'architectural projects',
        </p>
        <p>https://karandesaihome.com</p>
      </div>
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
            !logoLoaded ? 'opacity-20' : 'opacity-100'
          } animate-bg-change  animate-bg transition-all duration-700`}
        ></div>
        <div className='relative z-10 font-semibold text-center top-1/2 -mt-28 lg:-mt-8 -translate-y-1/2 text-3xl sm:text-8xl text-white tracking-widest flex flex-col  justify-center items-center mb-0'>
          {/* <h1 className='text-center'>karan desai</h1>
        <h1 className='text-2xl font-sans text-center uppercase font-thin linespace '>
          architecture + design
        </h1> */}
          {/* <img src='/assets/signature.gif' alt='' /> */}
          <img
            src={`/assets/sign.gif${gifKey}`}
            className={`${!logoLoaded ? 'opacity-100' : 'opacity-30'}`}
            alt='Animated signature representing Karan Desai Architecture'
          />
          {/* <video
            src={`/assets/sign.webm${gifKey}`}
            autoPlay
            muted
            playsInline
            className={`${!logoLoaded ? 'opacity-100' : 'opacity-30'}`}
            alt='Animated signature representing Karan Desai Architecture'
          ></video> */}
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
