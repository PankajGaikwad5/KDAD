import React from 'react';
import CarouselComp from '../../../components/CarouselComp';
import { ChevronLeft } from 'lucide-react';
import { features } from '../../../components/features';

// const getTopicById = async (id) => {
//   try {
//     const res = await fetch(`${process.env.BASE_URL}/api/features/${id}`, {
//       cache: 'no-store',
//     });

//     if (!res.ok) {
//       throw new Error('Failed to fetch topic');
//     }

//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

const FeatureDetails = async ({ params }) => {
  const { id } = await params;
  const projectData = features.find((project) => project._id.$oid === id);

  if (!projectData) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <p className='text-red-500 text-lg'>Feature not found.</p>
      </div>
    );
  }

  const { title, images } = projectData;
  // const { features } = await getTopicById(id);
  // const { title, images } = await features;

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
