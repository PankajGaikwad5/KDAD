import React from 'react';
import CarouselComp from '../../components/CarouselComp';
import { ChevronLeft } from 'lucide-react';

const ProjectDetails = () => {
  const imgArray = [
    '/assets/1.jpg',
    '/assets/2.jpg',
    '/assets/3.jpg',
    '/assets/1.jpg',
    '/assets/2.jpg',
    '/assets/3.jpg',
  ];
  return (
    <div className='relative'>
      <div className='absolute left-3 top-3'>
        <a href='/projects'>
          <ChevronLeft
            className='text-white absolute left-2 top-2'
            size={50}
            strokeWidth={0.9}
            absoluteStrokeWidth
          />
        </a>
      </div>
      <div className=' h-screen items-center flex justify-center p-4'>
        <CarouselComp imgArray={imgArray} />
      </div>
    </div>
  );
};

export default ProjectDetails;
