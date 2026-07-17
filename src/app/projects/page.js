import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ProjectsClient from '../../components/ClientComponents/ProjectsClient';
import { projects } from '../../components/projects';

export const metadata = {
  title: 'Architecture Portfolio | Luxury Projects by KDAD',
  description:
    'Explore our award-winning architecture and interior design projects across India and internationally. From luxury residences to commercial spaces, discover innovative designs.',
  keywords: [
    'architecture portfolio',
    'luxury projects',
    'karan desai projects',
    'residential architecture',
    'commercial design',
    'interior design portfolio',
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
  openGraph: {
    title: 'Architecture Portfolio | Luxury Projects by KDAD',
    description:
      'Explore our award-winning architecture and interior design projects across India and internationally. From luxury residences to commercial spaces.',
    url: 'https://karandesai.in/projects',
    siteName: 'Karan Desai Architecture + Design',
    images: [
      {
        url: '/signlogo.png',
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
      'Explore our award-winning architecture and interior design projects.',
    images: ['/signlogo.png'],
  },
};

export default function Projects() {
  return (
    <div>
      <div className='project-bg fixed w-full h-full m-0 p-0 z-0 opacity-25 blur-md'></div>
      <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10'>
        <Navbar isBgBlack={true} />
        <ProjectsClient projects={projects} />
        <Footer />
      </div>
    </div>
  );
}
