import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ProjectsClient from '../../components/ClientComponents/ProjectsClient';
import { projects } from '../../components/projects';
import { Metadata } from 'next';

export const metadata = {
  title: 'Projects | KDAD',
  description: 'Explore our portfolio of creative projects and works',
  openGraph: {
    title: 'Projects | KDAD',
    description: 'Explore our portfolio of creative projects and works',
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
