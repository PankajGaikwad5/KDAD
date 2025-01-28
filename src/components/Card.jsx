import React from 'react';

const Card = ({ imagePosition, title, text, img, desc }) => {
  return (
    //  {/* Team Member Card */}
    <div
      className={`flex ${
        imagePosition === 'left' ? 'flex-col' : 'flex-row-reverse'
      } items-start gap-6 p-4 border border-gray-600 rounded-lg shadow-lg hover:shadow-2xl hover:border-white transition-all duration-500 `}
    >
      {/* Image Section */}
      <div className='w-full flex justify-center flex-shrink-0'>
        <img
          // src='https://imgs.search.brave.com/FzIb_7_K0GtKCiCYvBH7ZoMI7buSHhwfON2RHP7kliA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/cmF6eS1tYW4tbG9v/a2luZy1jYW1lcmFf/MjMtMjE0NzgwODE1/MC5qcGc_c2VtdD1h/aXNfaHlicmlk'
          src={img}
          alt='Person 1'
          className='w-52 h-52    object-cover rounded-sm'
          style={{ aspectRatio: '3 / 4' }}
        />
      </div>
      {/* Text Section */}
      <div className='space-y-2'>
        <h2 className='text-2xl font-bold tracking-widest font-sans'>
          {title}
        </h2>
        <h6 className='text-base uppercase font-semibold tracking-widest font-sans'>
          {desc}
        </h6>
        {/* <p className='text-sm text-gray-300 font-sans'>
          John is an experienced architect with a passion for innovative design
          solutions that blend form and function. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
        </p> */}
        <p className=' tracking-widest text-gray-300 font-sans'>
          {/* {text} */}
          Born in 1987, a passionate founder of his eponymous studio, KARAN
          DESAI | Architecture + Design, focusing on Architecture, Interiors &
          furniture designing, KD started off with his individual practice right
          after he gave his Thesis in 2011 from Pillai’s college of architecture
          & founded the company in 2012.
          <br />
          <br /> The internship under Ar. Ashiesh Shah during a year drop in
          2007, carved a path for his career with a clear direction towards his
          goals & dreams which he lives today. <br />
          <br /> The Studio has spread its wings in Mangalore, Goa, Delhi, Kullu
          - Manali, Uttarakhand, Kolkata, Chennai and plan to continue. Inspired
          by contemporary aesthetics and clean lines, the studio beautifies
          projects both residential and commercial on varying scales. From
          ideation rooms to offices , homes to private getaways, the team
          designs projects and products in close association with clients to
          deliver unique results and reflect personal tastes with consolidating
          the studio’s vision
          {/* Contact:{' '} */}
          {/* <a href='mailto:john.doe@example.com' className='text-blue-400'>
            john.doe@example.com */}
          {/* </a> */}
        </p>
      </div>
    </div>
  );
};

export default Card;
