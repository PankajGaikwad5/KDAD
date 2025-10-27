'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export default function AboutVideoSection({ poppins, montserrat }) {
  const lastVideoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const playerWindow = lastVideoRef.current?.contentWindow;
        if (!playerWindow) return;

        const cmd = entry.isIntersecting ? 'playVideo' : 'pauseVideo';
        playerWindow.postMessage(
          JSON.stringify({ event: 'command', func: cmd, args: [] }),
          '*'
        );
      },
      { threshold: 0.5 }
    );

    if (lastVideoRef.current) observer.observe(lastVideoRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    const playerWindow = lastVideoRef.current?.contentWindow;
    if (!playerWindow) return;

    const cmd = isMuted ? 'unMute' : 'mute';
    playerWindow.postMessage(
      JSON.stringify({ event: 'command', func: cmd, args: [] }),
      '*'
    );
    setIsMuted(!isMuted);
  };

  return (
    <section className='mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8'>
      <div className='relative rounded-xl overflow-hidden mb-6'>
        <iframe
          ref={lastVideoRef}
          className='w-full aspect-video'
          src='https://www.youtube.com/embed/nS3qDFHinbw?si=nN81Ph4EZhx0cL-k&enablejsapi=1&autoplay=0&mute=1'
          title='Shukhabar Video'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
        <button
          onClick={toggleMute}
          className='absolute bottom-4 right-4 bg-gray-900/50 hover:bg-gray-700/50 text-white p-3 rounded-full transition-all duration-300 ease-in-out'
        >
          {isMuted ? 'Unmute' : 'Mute'}
        </button>
      </div>

      <div className='flex flex-col items-center mb-6 text-center justify-center md:flex-row '>
        <Image
          src='/assets/shukhabar.png'
          alt='Shukhabar Logo'
          width={150}
          height={150}
          className='mb-4 md:mb-0 md:mr-6'
        />
        <h4
          className={`text-base sm:text-xl text-pink-400 ${montserrat.className}`}
        >
          "Shu (Shun)" = What <br /> "Khabar" = The latest information; news
        </h4>
      </div>

      <p
        className={`text-sm sm:text-base leading-relaxed text-gray-300 ${poppins.className}`}
      >
        Shukhabar is your exclusive backstage pass to the design world! We go
        beyond blueprints and skyscrapers, delivering candid insights, industry
        secrets, and unfiltered conversations with design moguls. It&apos;s more
        than an interview—it's a raw, unscripted journey through the lives and
        minds of creative professionals.
      </p>
    </section>
  );
}
