// app/about/page.js
import Image from 'next/image';
import { Poppins, Montserrat } from 'next/font/google';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AboutVideoSection from '../../components/AboutVideoSection';

// Fonts
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'About Us | Karan Desai | Architecture + Design',
  description:
    'Learn about Karan Desai, an award-winning architect and TEDx speaker. Discover his design philosophy, projects, and collaborations with global brands.',
};

export default function AboutPage() {
  return (
    <div className='relative'>
      {/* Background Blur Overlay */}
      <div className='project-bg fixed inset-0 z-0 opacity-25 blur-md'></div>

      {/* Content Wrapper */}
      <div className='relative z-10 flex flex-col min-h-screen bg-transparent'>
        {/* Navbar */}
        <header className='fixed top-0 w-full z-50'>
          <Navbar isBgBlack={true} isHomePage={true} />
        </header>

        <main className='flex-grow pt-14 px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-4xl'>
            {/* Page Title */}
            <div className='text-center mb-8'>
              <h1
                className={`text-2xl sm:text-3xl font-semibold uppercase tracking-wider text-white border-b-4 border-pink-800 inline-block mb-4 ${montserrat.className}`}
              >
                About Us
              </h1>
            </div>

            {/* Intro Video */}
            <section className='mb-12 shadow-2xl rounded-xl overflow-hidden'>
              <div className='aspect-video'>
                <iframe
                  className='w-full h-full'
                  src='https://www.youtube.com/embed/rvwzTtiinDg?si=-isuvtARyOADPzm5'
                  title='Introduction Video'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              </div>
            </section>

            {/* Profile Section */}
            <section className='mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8 flex flex-col md:flex-row items-center'>
              <div className='w-2/3 md:w-1/3 mx-auto md:mx-0 mb-6 md:mb-0'>
                <div className='relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto'>
                  <Image
                    src='/assets/profile.JPG'
                    alt='Karan Desai'
                    fill
                    className='rounded-full border-4 border-pink-500/50 shadow-2xl object-cover'
                  />
                </div>
              </div>
              <div className='w-full md:w-2/3 md:pl-8'>
                <h2
                  className={`text-2xl sm:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 ${montserrat.className}`}
                >
                  Karan Desai
                </h2>
                <h3
                  className={`text-sm sm:text-lg uppercase tracking-wider mb-4 text-pink-400 ${montserrat.className}`}
                >
                  Award Winning Architect + Interior Designer | TedX Speaker
                </h3>
                <p
                  className={`text-sm sm:text-base leading-relaxed text-gray-300 ${poppins.className}`}
                >
                  Born in 1987, Karan Desai is a visionary founder of his
                  eponymous studio, KARAN DESAI | Architecture + Design.
                  Specializing in Architecture, Interiors & Furniture Design, he
                  established his individual practice immediately after
                  completing his thesis in 2011 from Pillai&apos;s College of
                  Architecture.
                  <br />
                  <br />
                  His transformative internship under Ar. Ashiesh Shah in 2007
                  crystallized his career path, setting the stage for his
                  current success. The studio has expanded its footprint across
                  multiple Indian cities, bringing contemporary aesthetics and
                  clean design principles to both residential and commercial
                  projects.
                </p>
              </div>
            </section>

            {/* KDH Section */}
            <section className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
              <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl md:p-6 flex flex-col items-center'>
                <Image
                  src='/assets/kdhLogoo.png'
                  alt='KDH Logo'
                  width={150}
                  height={150}
                  className='mb-4'
                />
                <Image
                  src='/kdhimage.jpg'
                  alt='Product and Owner'
                  width={250}
                  height={130}
                  className='rounded-lg shadow-lg mb-4'
                />
                <p
                  className={`text-center text-sm sm:text-base leading-relaxed text-gray-300 ${poppins.className}`}
                >
                  &quot;Transforming everyday spaces into immersive experiences
                  through meticulously crafted furniture and design.&quot;
                </p>
              </div>
              <div className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6'>
                <p
                  className={`text-sm sm:text-base leading-relaxed text-gray-300 ${poppins.className}`}
                >
                  KDH specializes in creating art pieces that are both visually
                  striking and functionally superior. Since the success of our
                  Monster collection in 2022, we&apos;ve expanded our portfolio
                  through collaborations with industry leaders like The Quarry,
                  Casa Walls, and Bharat Flooring.
                  <br />
                  <br />
                  Our international recognition includes a prestigious
                  partnership with Serafini (Italy), reflecting our commitment
                  to innovative design and global excellence.
                </p>
                <div className='w-full h-full justify-center items-center'>
                  <a
                    href='https://karandesaihome.com/'
                    target='_blank'
                    className='mt-5 inline-block px-5 py-2 border border-gray-400 text-gray-200 rounded-full text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors'
                  >
                    Want to know more?
                  </a>
                </div>
              </div>
            </section>

            {/* Shukhabar Section (Client Component for interaction) */}
            <AboutVideoSection poppins={poppins} montserrat={montserrat} />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
