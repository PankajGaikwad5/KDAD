import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ProjectsClient from '../../components/ClientComponents/ProjectsClient';
import { projects } from '../../components/projects';

export const metadata = {
  title: 'Architecture & Interior Design Portfolio | Karan Desai | KDAD',
  description:
    'Explore the luxury architecture and interior design portfolio of Karan Desai Architecture + Design (KDAD). Featuring bespoke residential villas, penthouses, and commercial spaces across Mumbai, India, and internationally.',
  keywords: [
    'architecture portfolio',
    'luxury projects Mumbai',
    'karan desai projects',
    'residential architecture portfolio',
    'commercial design Mumbai',
    'interior design portfolio',
    'kd lodha home',
    'lodha home',
    'chaitya 777',
    'tdp',
    'the dream project',
    'project 86',
    'party pad',
    'kiahmoi',
    'project 101',
    'agra fort project',
    'red fort project',
    'project 704',
    'project 904',
    'blue house project',
    'luxury home projects Mumbai',
    'award-winning architecture',
  ],
  alternates: {
    canonical: 'https://karandesai.in/projects',
  },
  openGraph: {
    title: 'Architecture & Interior Design Portfolio | KDAD | Karan Desai',
    description:
      'Explore our award-winning architecture and interior design projects across India and internationally. From luxury residences to commercial spaces.',
    url: 'https://karandesai.in/projects',
    siteName: 'Karan Desai Architecture + Design',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KDAD Projects Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architecture Portfolio | Luxury Projects by KDAD',
    description:
      'Explore our award-winning architecture and interior design projects across India and internationally.',
    images: ['/og-image.jpg'],
  },
};

export default function Projects() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Architecture & Interior Design Portfolio | Karan Desai KDAD',
    description:
      'Portfolio of luxury residential, commercial, and bespoke architecture projects by Karan Desai Architecture + Design.',
    url: 'https://karandesai.in/projects',
    publisher: {
      '@type': 'ArchitectureFirm',
      name: 'Karan Desai Architecture + Design',
      url: 'https://karandesai.in',
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projects.map((p, index) => {
        const slug = p.title
          ? p.title.toLowerCase().replace(/\s+/g, '-')
          : p._id?.$oid ?? p.id;
        return {
          '@type': 'ListItem',
          position: index + 1,
          name: p.title,
          url: `https://karandesai.in/projectdetails/${encodeURIComponent(slug)}`,
          image: p.images?.[0]?.fileUrl ? `https://karandesai.in${p.images[0].fileUrl}` : undefined,
        };
      }),
    },
  };

  return (
    <div>
      <div className='project-bg fixed w-full h-full m-0 p-0 z-0 opacity-25 blur-md' />

      {/* JSON-LD Schema for Portfolio Collection */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10'>
        <Navbar isBgBlack={true} />
        <ProjectsClient projects={projects} />
        <Footer />
      </div>
    </div>
  );
}
