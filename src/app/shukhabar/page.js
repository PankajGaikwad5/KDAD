import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div>
      <div className='project-bg fixed w-full h-full m-0 p-0 z-0 opacity-25 blur-md'></div>
      <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10'>
        <Navbar isBgBlack={true} />
        <div className='text-white flex flex-col items-center justify-center'>
          {/* <h1 className='text-3xl font-bold mb-8 tracking-widest font-sans uppercase  border-b-4 border-pink-800'>
            Shukhabar
          </h1> */}

          <Image
            src='/assets/shukhabar.png'
            alt='Logo'
            width={250}
            height={250}
            className=' flex justify-self-center object-contain m-0 p-0 
                                  
                                  '
          />
          <div className='my-4'>
            <iframe
              className='w-full md:w-[560px] md:h-[315px] '
              src='https://www.youtube.com/embed/nS3qDFHinbw?si=gbJct3hxMk5OkQ84'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            ></iframe>
            {/* <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/nS3qDFHinbw?si=gbJct3hxMk5OkQ84'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerpolicy='strict-origin-when-cross-origin'
            allowfullscreen
          ></iframe> */}
          </div>

          <div className='my-4 p-4 max-w-2xl'>
            <div className='flex flex-col justify-center space-y-4 w-full'>
              {/* <p className='font-sans'>
                Architecture + Design | Award Winning Architect | Featured in
                30+ Magazines | Public Speaker Inspired by contemporary
                aesthetics and clean lines, Ar. Karan Desai’s studio beautifies
                projects both residential and commercial on varying scales. From
                ideation rooms to offices, and homes to private getaways, the
                team designs projects and products in close association with
                clients to deliver unique results and reflect personal tastes
                while consolidating the studio’s vision.
              </p> */}
              <h4 className='text-xl tracking-widest text-center'>
                "Shu (Shun)" = What ﻿
                <br />
                "Khabar"= The latest information; news.
              </h4>
              <p className='font-sans text-start'>
                You've seen their blueprints, you've marveled at their
                skyscrapers—now it's time to spill the real tea! Welcome to
                Shukhabar, where we unravel the juicy secrets, epic fails, and
                hidden life hacks of industry moguls from the field of design.
                Fasten your seatbelts for an exhilarating rollercoaster of
                gossip, games, and golden advice. This isn't just an
                interview—it's your VIP backstage pass to the lives they'd
                rather you didn't see!
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
