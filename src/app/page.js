import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Image from 'next/image';

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
      <div className='w-full fixed left-[50%] bottom-[2%] translate-x-[-50%]  flex items-center text-black px-4 whitespace-nowrap overflow-hidden z-20 m-0'>
        <div className=' w-full justify-center items-center hidden lg:flex flex-col'>
          <h1 className='text-2xl tracking-widest text-white -mb-10'>
            exclusive features
          </h1>
          <div className='space-x-20 note whitespace-nowrap flex-wrap flex px-4 '>
            <Image
              src='/features/hello-india.png'
              alt='hello india'
              width={120}
              height={120}
              className='object-contain'
            />
            <Image
              src='/features/living-etc.png'
              alt='Logo 2'
              width={120}
              height={120}
              className='object-contain'
            />
            <Image
              src='/features/elle-decor.png'
              alt='Logo 2'
              width={100}
              height={100}
              className='object-contain'
            />
            <Image
              src='/features/ad.png'
              alt='Logo 2'
              width={80}
              height={80}
              className='object-contain'
            />
            <Image
              src='/features/a+d.png'
              alt='Logo 2'
              width={120}
              height={120}
              className='object-contain'
            />
            <Image
              src='/features/india-today.png'
              alt='Logo 2'
              width={120}
              height={120}
              className='object-contain'
            />
            <Image
              src='/features/better-interiors.png'
              alt='Logo 2'
              width={120}
              height={120}
              className='object-contain'
            />
            <Image
              src='/features/h&d.png'
              alt='Logo 2'
              width={160}
              height={160}
              className='object-contain'
            />
            <Image
              src='/features/trends.png'
              alt='Logo 2'
              width={120}
              height={120}
              className='object-contain'
            />
            <Image
              src='/features/goodhomes.png'
              alt='Logo 2'
              width={170}
              height={170}
              className='object-contain'
            />
            <Image
              src='/features/aii.png'
              alt='Logo 2'
              width={170}
              height={170}
              className='object-contain'
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
    // </div>
  );
}
