import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    // <div className='relative overflow-hidden'>
    <div className='relative w-full h-screen overflow-hidden'>
      <Navbar isBgBlack={true} />
      <div className='absolute inset-0 z-0 bg-cover bg-center opacity-30 animate-bg-change'></div>
      <h2 className='relative z-10 font-bold text-center top-1/2 -translate-y-1/2 text-4xl text-white tracking-widest'>
        main page
      </h2>

      <Footer />
    </div>
    // </div>
  );
}
