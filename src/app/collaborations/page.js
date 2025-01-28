import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Collaborations = () => {
  return (
    <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10'>
      <Navbar isBgBlack={true} />
      <div className='text-white flex flex-col items-center justify-center mb-8'>
        <h1 className='text-3xl border-b-2 border-pink-800 font-bold mb-8 tracking-widest font-sans uppercase '>
          Collaborations
        </h1>
        <div className='w-full relative p-8 rounded-2xl max-w-4xl 2xl:max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center my-4'>
          <div className='flex flex-col '>
            <div className='image-container'>
              <img
                src='https://karandesaihome.com/assets/gallery/e73bf9dc47f16650dcf4352d3ce79fc9.jpg'
                className='rounded-lg image'
                alt='collab'
              />
            </div>
            <h3 className='font-bold font-sans text-2xl capitalize my-3'>
              Monster 1.0
            </h3>
            <p className='text-center uppercase  font-sans my-2 tracking-normal'>
              Collab with{' '}
              <a href='https://www.quarry.asia/' className=' underline '>
                The Quarry
              </a>
            </p>
            <h2 className='border border-zinc-700 bg-transparent p-2'>2022</h2>
          </div>
          <div className='flex flex-col '>
            <div className='image-container'>
              <img
                src='/assets/collab.jpg'
                className='rounded-lg image'
                alt='collab'
              />
              {/* {imgArray.map((img, index) => {
            return <ProjectCard key={index} img={img} />;
          })} */}
            </div>
            <h3 className='font-bold font-sans text-2xl capitalize my-3'>
              Samaveta Bench
            </h3>
            <p className='text-center uppercase  font-sans my-2 tracking-normal'>
              Collab with{' '}
              <a href='https://www.serafini.com/' className=' underline '>
                Serafini
              </a>
            </p>
            <h2 className='border border-zinc-700 bg-transparent p-2'>2024</h2>
            <a
              href='https://www.serafini.com/products-page/samaveta-luxury-marble-bench'
              className='text-blue-700 m-2 capitalize'
              target='_blank'
            >
              Readmore
            </a>
          </div>

          <div className='flex flex-col '>
            <div className='image-container'>
              <img
                src='/assets/monster.png'
                className='rounded-lg image'
                alt='collab'
              />
            </div>
            <h3 className='font-bold font-sans text-2xl capitalize my-3'>
              Monster 2.0
            </h3>
            <p className='text-center uppercase  font-sans my-2 tracking-normal'>
              Collab with{' '}
              <a href='https://www.topbrewernyc.com/' className=' underline '>
                Top Brewer
              </a>
            </p>
            <h2 className='border border-zinc-700 bg-transparent p-2'>2024</h2>
            {/* <a
              href='https://www.serafini.com/products-page/samaveta-luxury-marble-bench'
              className='text-blue-700 m-2 capitalize'
              target='_blank'
            >
              readmore
            </a> */}
          </div>
          <div className='flex flex-col '>
            <div className='image-container'>
              <img
                src='https://karandesaihome.com/assets/gallery/c52d40f90264d936cdf2851933e6bd53.jpg'
                className='rounded-lg image'
                alt='collab'
              />
            </div>
            <h3 className='font-bold font-sans text-2xl capitalize my-3'>
              Monster 2.0
            </h3>
            <p className='text-center uppercase  font-sans my-2 tracking-normal'>
              Collab with{' '}
              <a href='https://casawalls.com/' className=' underline '>
                Casa Walls
              </a>
            </p>
            <h2 className='border border-zinc-700 bg-transparent p-2'>2024</h2>
            {/* <a
              href='https://www.serafini.com/products-page/samaveta-luxury-marble-bench'
              className='text-blue-700 m-2 capitalize'
              target='_blank'
            >
              readmore
            </a> */}
          </div>
          <div className='flex flex-col '>
            <div className='image-container'>
              <img
                src='/assets/yoda.jpg'
                className='rounded-lg image'
                alt='collab'
              />
            </div>
            <h3 className='font-bold font-sans text-2xl capitalize my-3'>
              Monster 2.0
            </h3>
            <p className='text-center uppercase  font-sans my-2 tracking-normal'>
              Collab with{' '}
              <a
                href='https://www.bharatfloorings.com/'
                className=' underline '
              >
                Bharat Flooring
              </a>
            </p>
            <h2 className='border border-zinc-700 bg-transparent p-2'>2024</h2>
          </div>
          <div className='flex flex-col '>
            <div className='image-container'>
              <img
                src='/assets/mconsole.png'
                className='rounded-lg image'
                alt='collab'
              />
            </div>
            <h3 className='font-bold font-sans text-2xl capitalize my-3'>
              Matilda
            </h3>
            <p className='text-center uppercase  font-sans my-2 tracking-normal'>
              Collab with{' '}
              <a href='https://foremostmarbles.com/' className=' underline '>
                Foremost Marbles
              </a>
            </p>
            <h2 className='border border-zinc-700 bg-transparent p-2'>2024</h2>
          </div>
          <div className='flex flex-col '>
            <div className='image-container'>
              <img
                src='/assets/mbrainy.jpg'
                className='rounded-lg image'
                alt='collab'
              />
            </div>
            <h3 className='font-bold font-sans text-2xl capitalize my-3'>
              Monster Collectibles
            </h3>
            <p className='text-center uppercase  font-sans my-2 tracking-normal'>
              Collab with{' '}
              <a href='https://www.arjunrathi.com/' className=' underline '>
                Arjun Rathi
              </a>
            </p>
            <h2 className='border border-zinc-700 bg-transparent p-2'>2024</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collaborations;
