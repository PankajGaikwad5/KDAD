'use client';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import LogoComp from '../components/LogoComp';
import { useState, useEffect, useRef } from 'react';

const IMAGES = [
  '/Picture1.jpg',
  '/tdpextras/6.jpg',
  // '/tdpextras/31.jpg',
  '/project86/3.jpg',
  '/extras/agrafort/8.webp',
  '/extras/redfort/5.webp',
  '/bluehouse/3.jpg',
];

export default function Home() {
  const [gifKey, setGifKey] = useState('');
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);
  const bgInterval = useRef();

  useEffect(() => {
    // GIF cache-bust
    setGifKey(`?reload=${Date.now()}`);

    // after 3.5s, reveal your logo/video
    const logoTimer = setTimeout(() => setLogoLoaded(true), 3500);

    // start cycling backgrounds immediately
    bgInterval.current = setInterval(() => {
      setCurrentBg((i) => (i + 1) % IMAGES.length);
    }, 3500);

    return () => {
      clearTimeout(logoTimer);
      clearInterval(bgInterval.current);
    };
  }, []);

  return (
    <div className='bg-black/90'>
      <div className='hidden'>{/* …SEO copy unchanged… */}</div>

      <h1 className='sr-only'>
        Karan Desai Architecture and Design – Innovative, Modern, Sustainable
        Design Solutions
      </h1>

      <div className='relative w-full h-screen overflow-hidden m-0 p-0'>
        <Navbar isBgBlack={true} isHomePage={true} />

        {/* stacked backgrounds with dark overlay until `logoLoaded` */}
        {IMAGES.map((src, idx) => {
          const isActive = idx === currentBg;
          const baseOpacity = isActive
            ? logoLoaded
              ? 'opacity-90'
              : 'opacity-20'
            : 'opacity-0';

          return (
            <div
              key={idx}
              className={`
                absolute inset-0 z-0 bg-cover bg-center
                transition-opacity duration-1000
                ${baseOpacity}
              `}
              style={{ backgroundImage: `url('${src}')` }}
            />
          );
        })}

        <div className='relative z-10 font-semibold text-center top-1/2 -mt-28 lg:-mt-8 -translate-y-1/2 text-3xl sm:text-8xl text-white tracking-widest flex flex-col justify-center items-center mb-0'>
          <img
            src={`/assets/sign.gif${gifKey}`}
            className={`${
              !logoLoaded ? 'opacity-100' : 'opacity-50'
            } transition-opacity duration-700`}
            alt='Animated signature representing Karan Desai Architecture'
          />
        </div>

        <div className='w-full fixed left-[50%] bottom-[2%] translate-x-[-50%] flex items-center text-black px-4 overflow-hidden z-10 m-0'>
          <LogoComp />
          <Footer home={true} />
        </div>
      </div>
    </div>
  );
}
