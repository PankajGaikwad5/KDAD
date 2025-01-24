import React from 'react';
import CarouselComp from '../../../components/CarouselComp';
import { ChevronLeft } from 'lucide-react';

const getTopicById = async (id) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/features/${id}`, {
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

const FeatureDetails = async ({ params }) => {
  const { id } = await params;
  const { features } = await getTopicById(id);
  const { title, images } = await features;

  return (
    <div className='relative'>
      {/* <h1 className='text-3xl tracking-wider mb-4'>{title}</h1> */}
      <div className='absolute left-3 top-3'>
        <a href='/features'>
          <ChevronLeft
            className='text-white'
            size={50}
            strokeWidth={0.9}
            absoluteStrokeWidth
          />
        </a>
      </div>
      <div className='h-screen items-center flex justify-center'>
        <CarouselComp imgArray={images.map((image) => image.fileUrl)} />
      </div>
    </div>
  );
};

export default FeatureDetails;
