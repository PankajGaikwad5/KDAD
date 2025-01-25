import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import React from 'react';

const About = () => {
  return (
    <div>
      <div className='project-bg fixed w-full h-full m-0 p-0 z-0 opacity-25'></div>
      <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10'>
        <Navbar isBgBlack={true} />
        <div className='text-white flex flex-col items-center justify-center'>
          <h1 className='text-3xl font-bold mb-8 tracking-widest font-sans uppercase \'>
            Shukhabar
          </h1>
          <div className='my-4'>
            <iframe
              className='w-full md:w-[560px] md:h-[315px]'
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

          <div className='my-4 p-4 max-w-xl'>
            <div className=''>
              <p className='font-sans'>
                Architecture + Design | Award Winning Architect | Featured in
                30+ Magazines | Public Speaker Inspired by contemporary
                aesthetics and clean lines, Ar. Karan Desai’s studio beautifies
                projects both residential and commercial on varying scales. From
                ideation rooms to offices, and homes to private getaways, the
                team designs projects and products in close association with
                clients to deliver unique results and reflect personal tastes
                while consolidating the studio’s vision.
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
