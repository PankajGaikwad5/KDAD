import React from 'react';
import CarouselComp from '../../../components/CarouselComp';
import { ChevronLeft } from 'lucide-react';

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/projects/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch topic');
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const ProjectDetails = async ({ params }) => {
  const { id } = params;
  const { projects } = await getTopicById(id);
  const { title, images } = await projects;
  console.log(title, images);
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
      <h1 className='text-3xl tracking-wider'>{title}</h1>
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
        <CarouselComp imgArray={images} />
      </div>
    </div>
  );
};

export default ProjectDetails;
