import React from 'react';

const ProjectCard = ({ img }) => {
  return (
    <div className=''>
      <div className='relative group rounded-2xl'>
        <a href='/projectdetails'>
          <h3 className='absolute inset-0 flex items-center justify-center text-white text-lg font-bold bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10'>
            title
          </h3>
          <img
            src={img}
            alt=''
            className='aspect-square rounded-3xl transform group-hover:scale-105 transition-transform duration-500'
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
