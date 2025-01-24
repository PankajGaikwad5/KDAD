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
            title={'Karan Desai'}
            desc={'Award Winning Architecture + Interior Design | TedX Speaker'}
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
        <div className='w-full max-w-2xl space-y-8 pb-8 tracking-widest border-b border-gray-600 border-dashed text-center'>
          <h1 className='text-3xl font-bold mt-8'>karan desai homes</h1>
          <p className='font-sans text-start flex flex-col space-y-4'>
            <span>
              "Imagine transforming everyday spaces into rich, immersive
              experiences—what if art became a part of your daily life?" Karan
              Desai Home is a testament to bringing the experience through
              meticulously crafted furniture and products.
            </span>
            <span>
              KDH specialises in creating art pieces that are not only visually
              striking but also serve a functional purpose. Following the
              success of our Monster collection in 2022, we have consistently
              expanded our portfolio, collaborating with renowned industry
              leaders such as The Quarry, Casa Walls, Bharat Flooring, and more.
              Our dedication to design innovation has earned us international
              recognition, including a prestigious partnership with Serafini
              (Italy).
            </span>

            <span>
              With a commitment to global collaborations and a mission to craft
              extraordinary designs, KDH continues to redefine functional art.
              Our unique approach and creative philosophy aim to inspire and
              captivate, bringing exceptional products to life.
            </span>
          </p>
        </div>
        <div className='w-full max-w-2xl space-y-8 py-8 tracking-widest border-b border-gray-600 border-dashed text-center'>
          <h1 className='text-3xl font-bold'>Shu Khabar</h1>
          <p className='font-sans text-start'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            exercitationem hic, voluptate, assumenda culpa eum porro asperiores
            iure minima ipsa fuga eligendi sapiente reprehenderit dignissimos
            quis labore. Illum corrupti modi, dolores perspiciatis fugiat,
            incidunt aliquid iusto voluptate dolore autem aliquam unde animi
            dolor dolorem ratione, placeat aut beatae tenetur quidem.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
