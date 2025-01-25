'use client';
import React, { useState } from 'react';

const ProjectCard = ({ img, feature, id, title, projects }) => {
  const [isLoaded, setIsLoaded] = useState(false); // Track the loading state of the image

  const handleImageLoad = () => {
    setIsLoaded(true); // Set to true when the image finishes loading
  };

  return (
    <div>
      <div className='relative group rounded-sm overflow-hidden'>
        {projects ? (
          <a href={`/projectdetails/${id}`}>
            {/* Placeholder while loading */}
            {!isLoaded && (
              <div className='flex items-center justify-center rounded-3xl bg-gray-600 animate-pulse aspect-video'>
                <p className='text-gray-500'>Loading...</p>
              </div>
            )}
            {/* Actual image */}
            <img
              src={img}
              alt={title || 'Project Image'}
              loading='lazy'
              className={`rounded-3xl transform transition-transform duration-500 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              onLoad={handleImageLoad}
            />
          </a>
        ) : (
          <a href={`/featuredetails/${id}`}>
            {!isLoaded && (
              <div className='flex items-center justify-center bg-gray-600 animate-pulse aspect-[8/11]'>
                <p className='text-gray-500'></p>
              </div>
            )}
            <img
              src={img}
              alt={title || 'Feature Image'}
              loading='lazy'
              className={` transform transition-transform duration-500 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              onLoad={handleImageLoad}
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
