import React from 'react';
import CarouselComp from '../../../components/CarouselComp';
import { ChevronLeft } from 'lucide-react';
import { Poppins, Montserrat } from 'next/font/google';
import { projects } from '../../../components/projects';
import ClickOutsideWrapper from '../../../components/ClickOutsideWrapper'; // Adjust path as needed

const popins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const FeatureDetails = async ({ params }) => {
  const { id } = await params;
  const projectData = projects.find((project) => project._id.$oid === id);

  if (!projectData) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <p className='text-red-500 text-lg'>Feature not found.</p>
      </div>
    );
  }

  const { title, images } = projectData;

  return (
    <div>
      <div className='project-bg fixed w-full h-full m-0 p-0 z-0 opacity-25 blur-md'></div>
      <div className='relative text-center w-full'>
        <div className='absolute left-3 top-3 z-10'>
          <a href='/projects'>
            <ChevronLeft
              className='text-white'
              size={50}
              strokeWidth={0.9}
              absoluteStrokeWidth
            />
          </a>
        </div>

        <ClickOutsideWrapper>
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
        </ClickOutsideWrapper>
      </div>
    </div>
  );
};

export default FeatureDetails;
