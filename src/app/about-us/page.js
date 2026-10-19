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
  title: 'Award-Winning Architects & Luxury Interior Designers Mumbai | Karan Desai KDAD',
  description:
    'Learn about Karan Desai — leading architect, luxury interior designer, and TEDx speaker in Mumbai. Discover KDAD’s bespoke residential architecture, penthouse interiors, and custom furniture (KDH).',
  keywords: [
    'architects in Mumbai',
    'best architects in Mumbai',
    'interior designers in Mumbai',
    'best interior designers Mumbai',
    'luxury architects Mumbai',
    'luxury interior designers Mumbai',
    'Karan Desai',
    'Karan Desai architect',
    'KDAD',
    'residential architects Mumbai',
    'penthouse interior designer',
    'villa architecture Goa Alibaug',
    'award-winning architect India',
    'TEDx speaker architect',
    'KDH furniture',
    'Karan Desai Home',
  ],
  alternates: {
    canonical: 'https://karandesai.in/about-us',
  },
  openGraph: {
    title: 'Award-Winning Architects & Interior Designers Mumbai | Karan Desai',
    description:
      'Karan Desai is an award-winning architect, luxury interior designer, and TEDx speaker. Explore his studio philosophy, projects, and collaborations.',
    url: 'https://karandesai.in/about-us',
    siteName: 'Karan Desai Architecture + Design',
    type: 'profile',
    locale: 'en_IN',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Karan Desai — Architecture + Design Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architects & Luxury Interior Designers Mumbai | Karan Desai',
    description:
      'Award-winning architect and luxury interior designer. Discover Karan Desai’s design philosophy, portfolio, and custom furniture line.',
    images: ['/og-image.jpg'],
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

const aboutFaqs = [
  {
    question: 'Who is Karan Desai and what is KDAD?',
    answer:
      'Karan Desai is an award-winning architect, interior designer, and TEDx speaker based in Mumbai, India. Born in 1987 and an alumnus of Pillai’s College of Architecture (2011), he founded Karan Desai Architecture + Design (KDAD) in 2012, recognized as one of the best architecture and luxury interior design studios in Mumbai.',
  },
  {
    question: 'What architectural and interior design services does KDAD provide?',
    answer:
      'KDAD provides comprehensive services covering bespoke residential villa architecture, penthouse interior design, duplex space planning, commercial workspace architecture, hospitality design, and collectible custom furniture under the Karan Desai Home (KDH) label.',
  },
  {
    question: 'Why hire Karan Desai Architecture + Design for luxury interiors in Mumbai?',
    answer:
      'KDAD is renowned for a monolithic, minimalist aesthetic blended with warm tactile materiality and custom craftsmanship. Every interior is tailored down to custom lighting fixtures, artisan marble surfaces, and bespoke furniture, resulting in cohesive, world-class luxury spaces featured in Elle Decor and Architectural Digest.',
  },
  {
    question: 'What is KDH (Karan Desai Home)?',
    answer:
      'KDH is the bespoke furniture and collectible design label by Karan Desai. It features sculpted marble dining tables, luxury consoles, and accent pieces, created in partnership with international surface artisans such as Serafini (Italy) and The Quarry.',
  },
  {
    question: 'Where do your architects and interior designers work?',
    answer:
      'Based in Andheri West, Mumbai, KDAD undertakes luxury residential, villa, and commercial projects across Mumbai (Bandra, Juhu, Worli, South Mumbai), Delhi NCR, Goa, Alibaug, Pune, Bangalore, Hyderabad, and internationally across the United States (including a completed 20,000 sq.ft. project in Chicago and a 15,000 sq.ft. mansion in Washington, D.C.), Europe, and globally.',
  },
];

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': 'https://karandesai.in/about-us#webpage',
        url: 'https://karandesai.in/about-us',
        name: 'About Karan Desai | Architecture + Design',
        description:
          'Learn about Karan Desai, award-winning architect, TEDx speaker, and founder of Karan Desai Architecture + Design.',
        breadcrumb: {
          '@id': 'https://karandesai.in/about-us#breadcrumb',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://karandesai.in/about-us#breadcrumb',
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
            name: 'About Us',
            item: 'https://karandesai.in/about-us',
          },
        ],
      },
      {
        '@type': 'Person',
        '@id': 'https://karandesai.in/#karandesai',
        name: 'Karan Desai',
        jobTitle: 'Principal Architect & Founder',
        birthDate: '1987',
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: "Pillai's College of Architecture",
        },
        worksFor: {
          '@type': 'ArchitectureFirm',
          name: 'Karan Desai Architecture + Design',
          url: 'https://karandesai.in',
        },
        image: 'https://karandesai.in/assets/profile.JPG',
        url: 'https://karandesai.in/about-us',
        sameAs: [
          'https://www.instagram.com/karandesai_a.d/',
          'https://www.linkedin.com/in/karandesaiad/',
          'https://www.youtube.com/@KarandesaiAD',
        ],
        knowsAbout: [
          'Architecture',
          'Interior Design',
          'Luxury Residential Architecture',
          'Furniture Design',
          'Sustainable Building Design',
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://karandesai.in/about-us#faq',
        mainEntity: aboutFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
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
                    alt='Portrait of Karan Desai, Founder and Principal Architect at KDAD'
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
                <div className='mt-4 flex gap-4 items-center'>
                  <Link
                    href='/projects'
                    className='inline-block px-5 py-2.5 bg-pink-600 text-white rounded-full text-sm font-medium hover:bg-pink-700 transition'
                  >
                    View Projects
                  </Link>
                  <Link
                    href='/contact-us'
                    className='inline-block px-5 py-2.5 border border-pink-400 text-pink-300 rounded-full text-sm font-medium hover:bg-pink-500/10 transition'
                  >
                    Contact Studio
                  </Link>
                </div>
              </div>
            </section>

            {/* KDH Section */}
            <section
              className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'
              aria-label='KDH — furniture and collaborations'
            >
              <div data-gsap='card' className='bg-gray-800/50 backdrop-blur-sm rounded-xl md:p-6 p-4 flex flex-col items-center'>
                <Image
                  src='/assets/kdhLogoo.png'
                  alt='KDH - Karan Desai Home Bespoke Furniture Label'
                  width={150}
                  height={150}
                  className='mb-4'
                  loading='lazy'
                />
                <Image
                  src='/kdhimage.jpg'
                  alt='KDH Furniture Collection designed by Karan Desai'
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
                <h3 className={`text-xl font-bold text-white mb-3 ${montserrat.className}`}>
                  Bespoke Furniture & Collectible Design
                </h3>
                <p
                  className={`text-sm sm:text-base leading-relaxed text-gray-300 ${poppins.className}`}
                >
                  KDH specializes in creating artful furniture that balances
                  beauty with utility. Since the success of the Monster
                  collection (2022), KDH has collaborated with The Quarry, Casa
                  Walls and Bharat Flooring, and maintains international ties
                  including a partnership with Serafini (Italy).
                </p>

                <div className='w-full justify-center items-center mt-5'>
                  <a
                    href='https://karandesaihome.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block px-5 py-2 border border-gray-400 text-gray-200 rounded-full text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors'
                  >
                    Explore Karan Desai Home ↗
                  </a>
                </div>
              </div>
            </section>

            {/* AEO / GEO FAQ Section */}
            <section
              className='mb-12 bg-gray-900/60 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-gray-800'
              aria-labelledby='faq-heading'
            >
              <h2
                id='faq-heading'
                className={`text-xl sm:text-2xl font-bold text-white mb-6 uppercase tracking-wider border-b border-gray-700 pb-3 ${montserrat.className}`}
              >
                Frequently Asked Questions
              </h2>
              <div className='space-y-6'>
                {aboutFaqs.map((faq, idx) => (
                  <div key={idx} className='border-b border-gray-800 pb-4 last:border-0 last:pb-0'>
                    <h3 className={`text-base sm:text-lg font-semibold text-pink-300 mb-2 ${montserrat.className}`}>
                      {faq.question}
                    </h3>
                    <p className={`text-sm sm:text-base text-gray-300 leading-relaxed ${poppins.className}`}>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Shukhabar Section (Client Component for interaction) */}
            <AboutVideoSection poppins={poppins} montserrat={montserrat} />
          </div>
        </main>

        <Footer />

        {/* Structured data for SEO & AEO (JSON-LD) */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </div>
  );
}
