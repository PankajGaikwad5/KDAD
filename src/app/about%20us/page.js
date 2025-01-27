import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div>
      <div className='project-bg fixed w-full h-full m-0 p-0 z-0 opacity-25 blur-md'></div>

      <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10 mb-6'>
        <Navbar isBgBlack={true} isHomePage={true} />
        <div className='text-white flex flex-col items-center justify-center'>
          <h1 className='text-3xl font-bold mb-8  border-b-4 border-pink-800'>
            About Us
          </h1>
          <div className='max-w-2xl 2xl:max-w-[80%] space-y-8 pb-8 border-b border-gray-600 border-dashed'>
            <Card
              img={'/assets/profile.JPG'}
              imagePosition={'left'}
              title={'Karan Desai'}
              desc={
                'Award Winning Architecture + Interior Design | TedX Speaker'
              }
              text={`Born in 1987, a passionate founder of his eponymous studio, KARAN DESAI | Architecture + Design, focusing on Architecture, Interiors & furniture designing, KD started off with his individual practice right after he gave his Thesis in 2011 from Pillai’s college of architecture & founded the company in 2012. The internship under Ar. Ashiesh Shah during a year drop in 2007, carved a path for his career with a clear direction towards his goals & dreams which he lives today. The Studio has spread its wings in Mangalore, Goa, Delhi, Kullu - Manali, Uttarakhand, Kolkata, Chennai and plan to continue. Inspired by contemporary aesthetics and clean lines, the studio beautifies projects both residential and commercial on varying scales. From ideation rooms to offices , homes to private getaways, the team designs projects and products in close association with clients to deliver unique results and reflect personal tastes with consolidating the studio’s vision
`}
            />
          </div>
          {/* <h1 className='text-3xl font-bold my-4'>meet the team</h1> */}
          <div className='max-w-2xl 2xl:max-w-[80%] space-y-8 pb-8'>
            {/* <Card
            imagePosition={'left'}
            
          /> */}
            {/* <Card />
          <Card imagePosition={'left'} />
          <Card /> */}
          </div>
          <div className='w-full max-w-2xl 2xl:max-w-[80%] space-y-8 pb-8 tracking-widest border-b border-gray-600 border-dashed text-center'>
            {/* <h1 className='text-3xl font-bold mt-8'>karan desai home</h1> */}
            <Image
              src='/assets/kdhlogo.png'
              alt='Logo'
              width={200}
              height={200}
              className=' flex justify-self-center object-contain m-0 p-0 
                        
                        '
            />
            <p className='font-sans text-start flex flex-col space-y-4'>
              <span>
                "Imagine transforming everyday spaces into rich, immersive
                experiences—what if art became a part of your daily life?" Karan
                Desai Home is a testament to bringing the experience through
                meticulously crafted furniture and products.
              </span>
              <span>
                KDH specialises in creating art pieces that are not only
                visually striking but also serve a functional purpose. Following
                the success of our Monster collection in 2022, we have
                consistently expanded our portfolio, collaborating with renowned
                industry leaders such as The Quarry, Casa Walls, Bharat
                Flooring, and more. Our dedication to design innovation has
                earned us international recognition, including a prestigious
                partnership with Serafini (Italy).
              </span>

              <span>
                With a commitment to global collaborations and a mission to
                craft extraordinary designs, KDH continues to redefine
                functional art. Our unique approach and creative philosophy aim
                to inspire and captivate, bringing exceptional products to life.
              </span>
            </p>
          </div>
          <div className='w-full max-w-2xl 2xl:max-w-[80%] space-y-8 py-8 tracking-widest  text-center '>
            {/* <h1 className='text-3xl font-bold'>Shu Khabar</h1> */}
            <Image
              src='/assets/shukhabar.png'
              alt='Logo'
              width={250}
              height={250}
              className=' flex justify-self-center object-contain m-0 p-0 
                        
                        '
            />
            <h4 className='text-xl tracking-widest'>
              "Shu (Shun)" = What ﻿
              <br />
              "Khabar"= The latest information; news.
            </h4>
            <p className='font-sans text-start'>
              You've seen their blueprints, you've marveled at their
              skyscrapers—now it's time to spill the real tea! Welcome to
              Shukhabar, where we unravel the juicy secrets, epic fails, and
              hidden life hacks of industry moguls from the field of design.
              Fasten your seatbelts for an exhilarating rollercoaster of gossip,
              games, and golden advice. This isn't just an interview—it's your
              VIP backstage pass to the lives they'd rather you didn't see!
            </p>
            <div className='w-full justify-center text-center items-center'>
              <iframe
                className=' md:w-[560px] md:h-[315px] justify-self-center'
                src='https://www.youtube.com/embed/nS3qDFHinbw?si=gbJct3hxMk5OkQ84'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
