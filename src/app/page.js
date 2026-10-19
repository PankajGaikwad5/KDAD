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
      {/* Crawlable semantic section for Search Engines, AI Overviews & Assistive Tech */}
      <section className='sr-only' aria-label='About Karan Desai Architecture + Design Studio'>
        <h1>Top Architects in Mumbai & Luxury Interior Designers | Karan Desai (KDAD)</h1>
        <h2>Award-Winning Architecture Firm & Luxury Interior Design Studio in Mumbai, India</h2>
        <p>
          Karan Desai Architecture + Design (KDAD) is a leading architecture firm and luxury interior design studio based in Andheri West, Mumbai. Founded in 2012 by architect Karan Desai (TEDx Speaker and Pillai’s College of Architecture graduate), KDAD has established itself as one of the best architects and interior designers in Mumbai and across India.
        </p>

        <h3>Bespoke Residential Architecture & Luxury Villa Design</h3>
        <p>
          As residential architects, we specialize in high-end private villas, luxury bungalows, holiday homes in Goa and Alibaug, and contemporary residential architecture. Our architectural practice balances structural rigor with fluid spatial layouts, natural lighting, and sustainable construction.
        </p>

        <h3>Luxury Interior Design: Penthouses, Duplexes & Sea-Facing Apartments</h3>
        <p>
          Ranked among Mumbai’s top interior designers, KDAD transforms luxury penthouses, high-rise duplexes, and prestigious residences across South Mumbai, Worli, Bandra, Juhu, and Andheri. Our interior design services encompass end-to-end space planning, bespoke material curation, lighting architecture, custom joinery, and styling.
        </p>

        <h3>Commercial Architecture & Office Interior Design</h3>
        <p>
          KDAD delivers cutting-edge commercial architecture, corporate headquarters, executive office interiors, boutique retail showrooms (such as KiahMoi), and hospitality spaces tailored to brand identity and functionality.
        </p>

        <h3>Custom Collectible Furniture by Karan Desai Home (KDH)</h3>
        <p>
          KDH (Karan Desai Home) designs handcrafted sculptural furniture, custom marble dining tables, luxury consoles, and collectible art pieces, collaborating with international stone artisans like Serafini (Italy) and The Quarry.
        </p>

        <h3>Architects and Interior Designers Serving Mumbai, India & Globally</h3>
        <p>
          Located at Shah Industrial Estate, 1001 PARINEE I, 7-A, Andheri West, Mumbai, our architects and interior designers cater to clients across Mumbai, South Mumbai, Bandra, Juhu, Worli, Delhi NCR, Goa, Alibaug, Pune, Bangalore, Hyderabad, and internationally across the United States (including a completed 20,000 sq. ft. project in Chicago and a 15,000 sq. ft. mansion in Washington, D.C.), Europe, and globally.
        </p>

        <nav aria-label='Quick Links'>
          <ul>
            <li><a href='/projects'>Explore Luxury Architecture & Interior Design Portfolio</a></li>
            <li><a href='/about-us'>About Karan Desai — Founder, Architect & Interior Designer</a></li>
            <li><a href='/collaborations'>Design Collaborations with India Design and The Quarry</a></li>
            <li><a href='/publications'>Media Features in Architectural Digest, Elle Decor & GoodHomes</a></li>
            <li><a href='/contact-us'>Hire Architects & Interior Designers — Book a Consultation</a></li>
          </ul>
        </nav>
      </section>

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
            alt='Karan Desai Architecture signature logo - Award-winning architect and TEDx speaker'
            width='600'
            height='400'
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
