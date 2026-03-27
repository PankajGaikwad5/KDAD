// ...existing code...
import Image from 'next/image';
import Link from 'next/link';
import { Poppins, Montserrat } from 'next/font/google';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AboutVideoSection from '../../components/AboutVideoSection';
import AboutPageAnimations from '../../components/AboutPageAnimations';

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
  title: 'About Us | Karan Desai | Architecture & Interior Design',
  description:
    'Learn about Karan Desai — award-winning architect, TEDx speaker and founder of KARAN DESAI | Architecture + Design. See projects, philosophy, collaborations and contact details.',
  keywords: [
    'Karan Desai',
    'architecture',
    'interior design',
    'furniture design',
    'award-winning architect',
    'TEDx speaker',
    'KARAN DESAI',
    'KDH',
    'design studio',
    'collaborations',
    'kdh',
    'karan desai architecture + design',
    'tedx',
    'luxury',
  ],
  alternates: {
    canonical: 'https://www.karandesai.in/about%20us',
  },
  openGraph: {
    title: 'Karan Desai | Architecture + Design — About',
    description:
      'Karan Desai is an award-winning architect and founder of KARAN DESAI | Architecture + Design. Explore his projects, studio philosophy and collaborations.',
    url: 'https://www.karandesai.in/about%20us',
    siteName: 'Karan Desai Architecture + Design',
    type: 'website',
    images: [
      {
        url: '/assets/signlogo.png',
        width: 1200,
        height: 630,
        alt: 'Karan Desai — Architecture + Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Karan Desai | Architecture + Design',
    description:
      'Award-winning architect and TEDx speaker. Learn about Karan Desai’s work, studio and collaborations.',
    images: ['/assets/signlogo.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'KARAN DESAI | Architecture + Design',
        url: 'https://www.karandesai.in/about%20us',
        logo: 'https://karandesai.in/assets/signlogo.png',
        sameAs: [
          'https://www.instagram.com/karandesai_a.d/',
          // 'https://www.linkedin.com/in/karan-desai-architecture/',
        ],
        description:
          'KARAN DESAI is a design studio specializing in architecture, interiors and furniture design led by award-winning architect Karan Desai.',
      },
      {
        '@type': 'Person',
        name: 'Karan Desai',
        jobTitle: 'Founder, Architect & Designer',
        worksFor: {
          '@type': 'Organization',
          name: 'KARAN DESAI | Architecture + Design',
        },
        url: 'https://karandesai.in/about%20us',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://karandesai.in/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'About',
            item: 'https://karandesai.in/about%20us',
          },
        ],
      },
    ],
  };

  return (
    <div className='relative'>
      {/* Background Blur Overlay */}
      <div className='project-bg fixed inset-0 z-0 opacity-25 blur-md' />

      {/* GSAP animations (client, renders nothing) */}
      <AboutPageAnimations />

      {/* Content Wrapper */}
      <div className='relative z-10 flex flex-col min-h-screen bg-transparent'>
        {/* Navbar */}
        <header className='fixed top-0 w-full z-50'>
          <Navbar isBgBlack={true} isHomePage={true} />
        </header>

        <main
          className='flex-grow pt-16 px-4 sm:px-6 lg:px-8'
          aria-label='About Karan Desai — main content'
        >
          <div className='mx-auto max-w-4xl'>
            {/* Page Title */}
            <header>
              <div className='text-center mb-8'>
                <h1
                  data-gsap='title'
                  className={`text-2xl sm:text-3xl font-semibold uppercase tracking-wider text-white border-b-4 border-pink-800 inline-block mb-4 ${montserrat.className}`}
                >
                  About Us
                </h1>
                <p data-gsap='subtitle' className={`text-sm text-gray-300 ${poppins.className}`}>
                  Architect, designer and studio information — projects,
                  philosophy and collaborations.
                </p>
              </div>
            </header>

            {/* Intro Video */}
            <section
              data-gsap='section'
              className='mb-12 shadow-2xl rounded-xl overflow-hidden'
              aria-labelledby='intro-video-heading'
            >
              <h2 id='intro-video-heading' className='sr-only'>
                Introduction video about Karan Desai
              </h2>
              <div className='aspect-video'>
                <iframe
                  className='w-full h-full'
                  src='https://www.youtube.com/embed/rvwzTtiinDg?si=-isuvtARyOADPzm5'
                  title='Karan Desai — Introduction to the studio and design philosophy'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  loading='lazy'
                />
              </div>
            </section>

            {/* Profile Section */}
            <section
              data-gsap='section'
              className='mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8 flex flex-col md:flex-row items-center'
              aria-labelledby='profile-heading'
            >
              <h2 id='profile-heading' className='sr-only'>
                Karan Desai profile
              </h2>

              <div className='w-2/3 md:w-1/3 mx-auto md:mx-0 mb-6 md:mb-0'>
                <div data-gsap='profile-img' className='relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto'>
                  <Image
                    src='/assets/profile.JPG'
                    alt='Portrait of Karan Desai'
                    fill
                    className='rounded-full border-4 border-pink-500/50 shadow-2xl object-cover'
                    priority
                  />
                </div>
              </div>

              <div className='w-full md:w-2/3 md:pl-8'>
                <h3
                  className={`text-2xl sm:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 ${montserrat.className}`}
                >
                  Karan Desai
                </h3>
                <p
                  className={`text-sm sm:text-lg uppercase tracking-wider mb-4 text-pink-400 ${montserrat.className}`}
                >
                  Award Winning Architect + Interior Designer | TEDx Speaker
                </p>
                <p
                  className={`text-sm sm:text-base leading-relaxed text-gray-300 ${poppins.className}`}
                >
                  Born in 1987, Karan Desai founded his studio after completing
                  his thesis in 2011 at Pillai's College of Architecture. His
                  work blends contemporary aesthetics with functional clarity
                  across architecture, interiors and furniture — serving
                  residential and commercial clients with a focus on craft and
                  materiality.
                </p>
                <div className='mt-4'>
                  <Link
                    href='/portfolio'
                    className='inline-block px-4 py-2 bg-pink-600 text-white rounded-full text-sm font-medium hover:bg-pink-700 transition'
                  >
                    View Projects
                  </Link>
                </div>
              </div>
            </section>

            {/* KDH Section */}
            <section
              className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'
              aria-label='KDH — furniture and collaborations'
            >
              <div data-gsap='card' className='bg-gray-800/50 backdrop-blur-sm rounded-xl md:p-6 flex flex-col items-center'>
                <Image
                  src='/assets/kdhLogoo.png'
                  alt='KDH Logo'
                  width={150}
                  height={150}
                  className='mb-4'
                  loading='lazy'
                />
                <Image
                  src='/kdhimage.jpg'
                  alt='Product and owner — KDH collection'
                  width={250}
                  height={130}
                  className='rounded-lg shadow-lg mb-4'
                  loading='lazy'
                />
                <p
                  className={`text-center text-sm sm:text-base leading-relaxed text-gray-300 ${poppins.className}`}
                >
                  "Transforming everyday spaces into immersive experiences
                  through meticulously crafted furniture and design."
                </p>
              </div>

              <div data-gsap='card' className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6'>
                <p
                  className={`text-sm sm:text-base leading-relaxed text-gray-300 ${poppins.className}`}
                >
                  KDH specializes in creating artful furniture that balances
                  beauty with utility. Since the success of the Monster
                  collection (2022), KDH has collaborated with The Quarry, Casa
                  Walls and Bharat Flooring, and maintains international ties
                  including a partnership with Serafini (Italy).
                </p>

                <div className='w-full h-full justify-center items-center mt-5'>
                  <a
                    href='https://karandesaihome.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block px-5 py-2 border border-gray-400 text-gray-200 rounded-full text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors'
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

        {/* Structured data for SEO (JSON-LD) */}
        <script
          type='application/ld+json'
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </div>
  );
}
// ...existing code...
