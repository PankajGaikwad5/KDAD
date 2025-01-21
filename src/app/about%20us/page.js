import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import React from 'react';

const About = () => {
  return (
    <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10'>
      <Navbar isBgBlack={true} isHomePage={true} />
      <div className='text-white flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold mb-8'>About Us</h1>
        <div className='max-w-2xl space-y-8 pb-8 border-b border-gray-600 border-dashed'>
          <Card
            img={'/assets/profile.JPG'}
            imagePosition={'left'}
            title={
              'Architecture + Design | Award Winning Architect | TedX Speaker'
            }
            text={`Born in 1987, a passionate founder of his eponymous studio, KARAN DESAI | Architecture + Design, focusing on Architecture, Interiors & furniture designing, KD started off with his individual practice right after he gave his Thesis in 2011 from Pillai’s college of architecture & founded the company in 2012. The internship under Ar. Ashiesh Shah during a year drop in 2007, carved a path for his career with a clear direction towards his goals & dreams which he lives today. The Studio has spread its wings in Mangalore, Goa, Delhi, Kullu - Manali, Uttarakhand, Kolkata, Chennai and plan to continue. Inspired by contemporary aesthetics and clean lines, the studio beautifies projects both residential and commercial on varying scales. From ideation rooms to offices , homes to private getaways, the team designs projects and products in close association with clients to deliver unique results and reflect personal tastes with consolidating the studio’s vision
`}
          />
        </div>
        {/* <h1 className='text-3xl font-bold my-4'>meet the team</h1> */}
        <div className='max-w-2xl space-y-8 pb-8'>
          {/* <Card
            imagePosition={'left'}
            
          /> */}
          {/* <Card />
          <Card imagePosition={'left'} />
          <Card /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
