'use client';
import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

// Dynamically import LogoComp to keep initial SSR and hydration ultra-light
const LogoComp = dynamic(() => import('../components/LogoComp'), {
  ssr: false,
  loading: () => <div className='h-12 w-full' />,
});

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
  const [logoDimmed, setLogoDimmed] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const bgInterval = useRef(null);

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => window.innerWidth <= 768;
    setIsMobile(checkMobile());

    const handleResize = () => setIsMobile(checkMobile());
    window.addEventListener('resize', handleResize, { passive: true });

    // Smoothly dim signature logo after initial animation
    const logoTimer = setTimeout(() => setLogoDimmed(true), 3500);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(logoTimer);
      if (bgInterval.current) clearInterval(bgInterval.current);
    };
  }, []);

  // Cycle background images once hydrated
  useEffect(() => {
    if (!isClient) return;

    const currentList = isMobile ? IMAGES_MOBILE : IMAGES_DESKTOP;
    bgInterval.current = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % currentList.length);
    }, 4000);

    return () => {
      if (bgInterval.current) clearInterval(bgInterval.current);
    };
  }, [isClient, isMobile]);

  const activeImages = isMobile ? IMAGES_MOBILE : IMAGES_DESKTOP;

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

        {/* Primary Hero Slide 0 (Semantic Picture for instant LCP on both mobile and desktop) */}
        <picture
          className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000 ${
            currentBg === 0 ? 'opacity-90' : 'opacity-0'
          }`}
        >
          <source media='(max-width: 768px)' srcSet='/mobilebg/partypad3.webp' />
          <img
            src='/Picture1.webp'
            alt='Karan Desai Architecture + Design luxury interior architecture'
            className='w-full h-full object-cover'
            fetchPriority='high'
            loading='eager'
          />
        </picture>

        {/* Subsequent Slides (Loaded progressively after hydration to save initial bandwidth) */}
        {isClient &&
          activeImages.slice(1).map((src, idx) => {
            const slideIndex = idx + 1;
            const isActive = currentBg === slideIndex;

            return (
              <div
                key={src}
                className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ${
                  isActive ? 'opacity-90' : 'opacity-0 pointer-events-none'
                }`}
                style={{ backgroundImage: `url('${src}')` }}
              />
            );
          })}

        {/* Logo animation */}
        <div className='relative z-10 font-semibold text-center top-1/2 -mt-28 lg:-mt-8 -translate-y-1/2 text-3xl sm:text-8xl text-white tracking-widest flex flex-col justify-center items-center mb-0'>
          <img
            src='/assets/optimizedsign.gif'
            className={`${
              !logoDimmed ? 'opacity-100' : 'opacity-50'
            } transition-opacity duration-700 max-w-[85vw] sm:max-w-[480px] md:max-w-[560px] h-auto object-contain`}
            alt='Karan Desai Architecture signature logo - Award-winning architect and TEDx speaker'
            width={800}
            height={408}
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
