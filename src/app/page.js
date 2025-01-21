import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import LogoComp from '../components/LogoComp';

export default function Home() {
  return (
    // <div className='relative overflow-hidden'>
    <div className='relative w-full h-screen overflow-hidden m-0 p-0'>
      <Navbar isBgBlack={true} isHomePage={true} />
      <div className='absolute inset-0 z-0 bg-cover bg-center  animate-bg-change'></div>
      <div className='relative z-10 font-semibold text-center top-1/2 -mt-12 lg:-mt-2 -translate-y-1/2 text-3xl sm:text-8xl text-white tracking-widest flex flex-col  justify-center items-center mb-0'>
        {/* <h1 className='text-center'>karan desai</h1>
        <h1 className='text-2xl font-sans text-center uppercase font-thin linespace '>
          architecture + design
        </h1> */}
        <img src='/assets/KD_signature.gif' alt='' />
      </div>
      {/* <div className='absolute right-0 top-0 -mt-12 z-30'>
        <Image
          src='/assets/newlogo.png'
          alt='logo'
          width={225}
          height={225}
          className='object-contain'
        />
      </div> */}
      <div className='w-full fixed left-[50%] bottom-[2%] translate-x-[-50%]  flex items-center text-black px-4  overflow-hidden z-20 m-0'>
        <LogoComp />

        <Footer />
      </div>
      //{' '}
    </div>
  );
}
