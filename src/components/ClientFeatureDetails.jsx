'use client';

import React, { useEffect, useRef } from 'react';
import CarouselComp from './CarouselComp';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ClientFeatureDetails = ({ projectData }) => {
  const router = useRouter();
  const carouselRef = useRef(null);

  const { title, images } = projectData;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!carouselRef.current) return;

      // Only trigger on desktop
      if (window.innerWidth < 768) return;

      const rect = carouselRef.current.getBoundingClientRect();
      const margin = 20;

      if (
        event.clientX < rect.left - margin ||
        event.clientX > rect.right + margin ||
        event.clientY < rect.top - margin ||
        event.clientY > rect.bottom + margin
      ) {
        router.push('/projects');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [router]);

  return (
    <div>
      <div className='project-bg fixed w-full h-full m-0 p-0 z-0 opacity-25 blur-md'></div>

      <div className='relative text-center'>
        <div className='absolute left-3 top-3'>
          <a href='/projects'>
            <ChevronLeft
              className='text-white'
              size={50}
              strokeWidth={0.9}
              absoluteStrokeWidth
            />
          </a>
        </div>

        <div
          ref={carouselRef}
          className='h-screen flex items-center justify-center'
        >
          {images && images.length > 0 ? (
            <CarouselComp
              imgArray={images.map((image) => image.fileUrl)}
              notcollab={true}
            />
          ) : (
            <p className='text-gray-500 text-lg'>
              No images available for this feature.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientFeatureDetails;
