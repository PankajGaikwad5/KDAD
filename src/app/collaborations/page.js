import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CollaborationsClient from '../../components/ClientComponents/CollaborationSection';
import {
  id2024delhi,
  id2025delhi,
  id2024mumbai,
  quarry,
} from '../../components/newcollabs';

export const metadata = {
  title: 'Collaborations | Karan Desai Architecture + Design',
  description:
    'Explore our collaborative projects and partnerships in architecture and design. View our work at prestigious events like India Design Delhi and Mumbai.',
  keywords: [
    'architecture collaborations',
    'design partnerships',
    'india design delhi',
    'india design mumbai',
    'karan desai collaborations',
    'quarry india design',
    'architectural partnerships',
    'design exhibitions',
    'quarry',
    'india design',
    'collaborations',
  ],
  openGraph: {
    title: 'Collaborations | KDAD',
    description:
      'Explore our collaborative projects and partnerships in architecture and design.',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Add your OG image path
        width: 1200,
        height: 630,
        alt: 'KDAD Collaborations',
      },
    ],
  },
};

export default function Collaborations() {
  return (
    <div>
      <div className='project-bg fixed w-full h-full m-0 p-0 z-0 opacity-25 blur-md'></div>
      <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10'>
        <Navbar isBgBlack={true} />
        <CollaborationsClient
          id2025delhi={id2025delhi}
          id2024delhi={id2024delhi}
          id2024mumbai={id2024mumbai}
          quarry={quarry}
        />
        <Footer />
      </div>
    </div>
  );
}
