import React from 'react';
import CarouselComp from '../../../components/CarouselComp';
import { ChevronLeft } from 'lucide-react';

const getFeatureById = async (id) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/projects/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch feature');
    }

    return await res.json();
  } catch (error) {
    console.error('Error fetching feature:', error);
    return null;
  }
};

const FeatureDetails = async ({ params }) => {
  const { id } = params;
  const featureData = await getFeatureById(id);

  if (!featureData) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <p className='text-red-500 text-lg'>Failed to load feature details.</p>
      </div>
    );
  }

  const { projects } = featureData;
  const { title, images } = projects;

  return (
    <div className='relative'>
      {/* Back Button */}
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

      {/* Carousel */}
      <div className='h-screen flex items-center justify-center'>
        {images && images.length > 0 ? (
          <CarouselComp imgArray={images.map((image) => image.fileUrl)} />
        ) : (
          <p className='text-gray-500 text-lg'>
            No images available for this feature.
          </p>
        )}
      </div>
    </div>
  );
};

export default FeatureDetails;
