import React from 'react';

const Card = ({ imagePosition }) => {
  return (
    //  {/* Team Member Card */}
    <div
      className={`flex ${
        imagePosition === 'left' ? 'flex-row' : 'flex-row-reverse'
      } items-start gap-6 p-4 border border-gray-600 rounded-lg shadow-lg hover:shadow-2xl hover:border-white transition-all duration-500 hover:bg-zinc-800 cursor-pointer`}
    >
      {/* Image Section */}
      <div className='w-32 h-36 flex-shrink-0'>
        <img
          src='https://imgs.search.brave.com/FzIb_7_K0GtKCiCYvBH7ZoMI7buSHhwfON2RHP7kliA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/cmF6eS1tYW4tbG9v/a2luZy1jYW1lcmFf/MjMtMjE0NzgwODE1/MC5qcGc_c2VtdD1h/aXNfaHlicmlk'
          alt='Person 1'
          className='w-full h-full object-cover rounded-lg'
          style={{ aspectRatio: '3 / 4' }}
        />
      </div>
      {/* Text Section */}
      <div className='space-y-2'>
        <h2 className='text-xl font-semibold'>John Doe</h2>
        <p className='text-sm text-gray-300 font-sans'>
          John is an experienced architect with a passion for innovative design
          solutions that blend form and function. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
        </p>
        <p className='text-sm text-gray-300 font-sans'>
          Contact:{' '}
          <a href='mailto:john.doe@example.com' className='text-blue-400'>
            john.doe@example.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Card;
