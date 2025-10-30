'use client';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import LogoComp from '../components/LogoComp';
import { useState, useEffect, useRef } from 'react';

// Define separate image sets
const IMAGES_DESKTOP = [
  '/Picture1.webp',
  '/desktopbg/tdpextras6.webp',
  '/desktopbg/project86_3.webp',
  '/desktopbg/extrasagrafort8.webp',
  '/desktopbg/extrasredfort5.webp',
  '/desktopbg/bluehouse3.webp',
];

const IMAGES_MOBILE = [
  '/mobilebg/partypad3.webp',
  '/mobilebg/partypad8.webp',
  '/mobilebg/kiahmoi7.webp',
  '/mobilebg/tdpextras21.webp',
];

export default function Home() {
  const [gifKey, setGifKey] = useState('');
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);
  const [images, setImages] = useState(IMAGES_DESKTOP);
  const bgInterval = useRef();

  useEffect(() => {
    // Detect screen size and choose image set
    const isMobile = () => window.innerWidth <= 768;

    const updateImages = () => {
      setImages(isMobile() ? IMAGES_MOBILE : IMAGES_DESKTOP);
    };

    updateImages(); // run on first load
    window.addEventListener('resize', updateImages);

    return () => {
      window.removeEventListener('resize', updateImages);
    };
  }, []);

  useEffect(() => {
    setGifKey(`?reload=${Date.now()}`);
    const logoTimer = setTimeout(() => setLogoLoaded(true), 3500);

    bgInterval.current = setInterval(() => {
      setCurrentBg((i) => (i + 1) % images.length);
    }, 3500);

    return () => {
      clearTimeout(logoTimer);
      clearInterval(bgInterval.current);
    };
  }, [images]); // restart animation if image set changes

  return (
    <div className='bg-black/90'>
      <div className='hidden'>{/* …SEO copy unchanged… */}</div>

      <h1 className='sr-only'>
        Karan Desai Architecture and Design – Innovative, Modern, Sustainable
        Design Solutions
      </h1>

      <div className='relative w-full h-screen overflow-hidden m-0 p-0'>
        <Navbar isBgBlack={true} isHomePage={true} />

        {/* Background image stack */}
        {images.map((src, idx) => {
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

        {/* Logo animation */}
        <div className='relative z-10 font-semibold text-center top-1/2 -mt-28 lg:-mt-8 -translate-y-1/2 text-3xl sm:text-8xl text-white tracking-widest flex flex-col justify-center items-center mb-0'>
          <img
            src={`/assets/optimizedsign.gif${gifKey}`}
            className={`${
              !logoLoaded ? 'opacity-100' : 'opacity-50'
            } transition-opacity duration-700`}
            alt='Animated signature representing Karan Desai Architecture'
            fetchPriority='high'
          />
        </div>

        {/* Footer and LogoComp */}
        <div className='w-full fixed left-[50%] bottom-[2%] translate-x-[-50%] flex items-center text-black px-4 overflow-hidden z-10 m-0'>
          <LogoComp />
          <Footer home={true} />
        </div>
      </div>
    </div>
  );
}
