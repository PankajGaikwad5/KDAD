'use client';
import React from 'react';
import { Poppins, Montserrat } from 'next/font/google';
import { motion } from 'framer-motion';

// popins
// montserrat
const popins = Poppins({
  subsets: ['latin'], // Specify subsets
  weight: ['400', '600', '700'], // Specify weight
});
const montserrat = Montserrat({
  subsets: ['latin'], // Specify subsets
  weight: ['400', '600', '700'], // Specify weight
});

const Card = ({ imagePosition, title, text, img, desc }) => {
  const pFont = popins.className;
  const MotionH2 = motion('h2');
  const MotionH6 = motion('h6');
  const MotionP = motion('p');
  return (
    //  {/* Team Member Card */}
    <div
      className={`flex ${
        imagePosition === 'left' ? 'flex-col' : 'flex-row-reverse'
      } items-start gap-6 pt-4 p-2 md:p-4 border border-gray-600 rounded-lg shadow-lg hover:shadow-2xl hover:border-white transition-all duration-500 `}
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
        <MotionH2
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 2, x: 0 }}
          transition={{ duration: 1 }}
          className={`text-2xl text-center font-bold ${montserrat.className}`}
        >
          {title}
        </MotionH2>
        {/* <h2
          className={`text-2xl text-center font-bold ${montserrat.className}`}
        >
          {title}
        </h2> */}
        <MotionH6
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className={`text-xs md:text-lg text-center uppercase font-semibold ${montserrat.className}`}
        >
          {desc}
        </MotionH6>

        {/* <h6
          className={`text-xs md:text-lg text-center uppercase font-semibold  ${montserrat.className} font-sans`}
        >
          {desc}
        </h6> */}
        {/* <p className='text-sm text-gray-300 font-sans'>
          John is an experienced architect with a passion for innovative design
          solutions that blend form and function. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
        </p> */}

        <MotionP
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 2, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className={`font-light text-gray-300 font-sans ${pFont}`}
        >
          {title}
          {/* <p className={`font-light text-gray-300 font-sans ${pFont}`}> */}
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
          the studio’s vision.
          <br />
          <br />
          We're also doing projects internationally, We've completed working on
          the order of 20,000 sq.ft. in Chicago and currently working on 15,000
          sq.ft Mansion in Washington, D.C.
          {/* Contact:{' '} */}
          {/* <a href='mailto:john.doe@example.com' className='text-blue-400'>
            john.doe@example.com */}
          {/* </a> */}
          {/* </p> */}
        </MotionP>
      </div>
    </div>
  );
};

export default Card;
