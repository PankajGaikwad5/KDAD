import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ProjectsClient from '../../components/ClientComponents/ProjectsClient';
import { projects } from '../../components/projects';
import { Metadata } from 'next';

export const metadata = {
  title: 'Projects By Karan Desai Architecture + Design ',
  description:
    'Explore the diverse portfolio of creative projects and design works by Karan Desai Architecture + Design. Discover innovative architecture and interior design that blend artistry, functionality, and timeless elegance.',
  keywords: [
    'projects',
    'karan desai',
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
  ],
  openGraph: {
    title: 'Projects By Karan Desai Architecture + Design ',
    description:
      'Explore the diverse portfolio of creative projects and design works by Karan Desai Architecture + Design. Discover innovative architecture and interior design that blend artistry, functionality, and timeless elegance.',
    type: 'website',
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
