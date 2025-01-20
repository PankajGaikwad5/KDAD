import React from 'react';

const ProjectCard = ({ img, feature, title, id }) => {
  return (
    <div className=''>
      <div className='relative group rounded-2xl'>
        {id ? (
          <a href={`/projectdetails/${id}`}>
            <h3 className='absolute inset-0 flex items-center justify-center tracking-widest text-white text-lg font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10'>
              {title}
            </h3>
            <img
              src={img}
              alt=''
              className={`${
                feature ? 'aspect-[8/11]' : 'aspect-square'
              } rounded-3xl transform group-hover:scale-105 transition-transform duration-500`}
            />
          </a>
        ) : (
          <a href='#'>
            <h3 className='absolute inset-0 flex items-center justify-center tracking-widest text-white text-lg font-bold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10'>
              {title}
            </h3>
            <img
              src={img}
              alt=''
              className={`${
                feature ? 'aspect-[8/11]' : 'aspect-square'
              } rounded-3xl transform group-hover:scale-105 transition-transform duration-500`}
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
