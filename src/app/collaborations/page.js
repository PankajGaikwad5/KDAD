'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CustomCarousel from '../../components/CarouselComp';
import { Poppins, Montserrat } from 'next/font/google';
import { collabs } from '../../components/collabs';
import { X } from 'lucide-react';
import Image from 'next/image';
import {
  id2024delhi,
  id2025delhi,
  id2024mumbai,
  quarry,
} from '../../components/newcollabs';

const popins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const Collaborations = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project.images);
    // console.log(project.images);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <div>
      <div className='project-bg fixed w-full h-full m-0 p-0 z-0 opacity-25 blur-md'></div>
      <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10'>
        <Navbar isBgBlack={true} />

        <div className='text-white flex flex-col items-center justify-center mb-8 scroll-custom'>
          <h1
            className={`md:text-3xl border-b-4 tracking-wider border-pink-800 mb-8 font-semibold uppercase ${montserrat.className}`}
          >
            Collaborations
          </h1>
          <div className='gap-8'>
            <div className=' max-w-5xl ml-28 flex  snap-x snap-mandatory flex-col gap-2 px-2 pb-4 '>
              <h1
                className={`${popins.className} text-xl font-bold tracking-widest ml-[18.5rem] `}
              >
                India Design 2025 Delhi
              </h1>
              <div className='flex gap-2 md:gap-6 overflow-x-auto'>
                {id2025delhi.map((item, index) => (
                  <div
                    key={index}
                    className='shrink-0 snap-start flex flex-col items-center w-[280px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg backdrop-blur-md'
                  >
                    <a href={item.image} target='_blank'>
                      <Image
                        src={item.image}
                        alt={`Collaboration ${item.people}`}
                        width={280}
                        height={280}
                        className='object-cover aspect-square'
                      />
                    </a>
                    <div className='p-3 text-center'>
                      <h2 className='text-sm text-gray-200 font-medium tracking-wide'>
                        in picture:{' '}
                        <span className='text-pink-400'>{item.people}</span>
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=' max-w-5xl ml-28 flex  snap-x snap-mandatory flex-col gap-2 px-2 pb-4 '>
              <h1
                className={`${popins.className} text-xl font-bold tracking-widest ml-[18.5rem] `}
              >
                India Design 2024 Mumbai
              </h1>
              <div className='flex gap-2 md:gap-6 overflow-x-auto'>
                {id2024mumbai.map((item, index) => (
                  <div
                    key={index}
                    className='shrink-0 snap-start flex flex-col items-center w-[280px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg backdrop-blur-md'
                  >
                    <a href={item.image} target='_blank'>
                      <Image
                        src={item.image}
                        alt={`Collaboration ${item.people}`}
                        width={280}
                        height={280}
                        className='object-cover aspect-square'
                      />
                    </a>
                    <div className='p-3 text-center'>
                      <h2 className='text-sm text-gray-200 font-medium tracking-wide'>
                        in picture:{' '}
                        <span className='text-pink-400'>{item.people}</span>
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=' max-w-5xl ml-28 flex  snap-x snap-mandatory flex-col gap-2 px-2 pb-4 '>
              <h1
                className={`${popins.className} text-xl font-bold tracking-widest ml-[18.5rem] `}
              >
                India Design 2024 Delhi
              </h1>
              <div className='flex gap-2 md:gap-6 overflow-x-auto'>
                {id2024delhi.map((item, index) => (
                  <div
                    key={index}
                    className='shrink-0 snap-start flex flex-col items-center w-[280px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg backdrop-blur-md'
                  >
                    <a href={item.image} target='_blank'>
                      <Image
                        src={item.image}
                        alt={`Collaboration ${item.people}`}
                        width={280}
                        height={280}
                        className='object-cover aspect-square'
                      />
                    </a>
                    <div className='p-3 text-center'>
                      <h2 className='text-sm text-gray-200 font-medium tracking-wide'>
                        in picture:{' '}
                        <span className='text-pink-400'>{item.people}</span>
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=' max-w-5xl ml-28 flex  snap-x snap-mandatory flex-col gap-2 px-2 pb-4 '>
              <h1
                className={`${popins.className} text-xl font-bold tracking-widest ml-[18.5rem] `}
              >
                Karan x Quarry India Design 2022
              </h1>
              <div className='flex gap-2 md:gap-6 overflow-x-auto'>
                {quarry.map((item, index) => (
                  <div
                    key={index}
                    className='shrink-0 snap-start flex flex-col items-center w-[280px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg backdrop-blur-md'
                  >
                    <a href={item.image} target='_blank'>
                      <Image
                        src={item.image}
                        alt={`Collaboration ${item.people}`}
                        width={280}
                        height={280}
                        className='object-cover aspect-square'
                      />
                    </a>
                    <div className='p-3 text-center'>
                      <h2 className='text-sm text-gray-200 font-medium tracking-wide'>
                        in picture:{' '}
                        <span className='text-pink-400'>{item.people}</span>
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Collaborations;
