import React from 'react';
import Image from 'next/image';

const ProjectCard = ({ img, feature, id, title }) => {
  return (
    <div className=''>
      <div className='relative group rounded-2xl '>
        {id ? (
          <a href={`/projectdetails/${id}`}>
            {/* <h3 className='absolute inset-0 flex items-center justify-center tracking-widest text-white text-lg font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10'>
              {title}
            </h3> */}
            <img
              src={img}
              alt=''
              loading='lazy'
              className={`${
                feature ? 'aspect-[8/11]' : 'aspect-video'
              } rounded-3xl transform group-hover:scale-105 transition-transform duration-500 `}
            />
          </a>
        ) : (
          <a href='#'>
            {/* <h3 className='absolute inset-0 flex items-center justify-center tracking-widest text-white text-lg font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10'>
            &nbsp;
          </h3> */}
            <img
              src={img}
              alt=''
              className={`${
                feature ? 'aspect-[8/11]' : 'aspect-video'
              } rounded-3xl transform group-hover:scale-105 transition-transform duration-500 `}
              loading='lazy'
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
