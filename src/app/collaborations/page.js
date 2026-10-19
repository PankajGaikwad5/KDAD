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
  title: 'Design Collaborations & Exhibitions | Karan Desai | KDAD',
  description:
    'Explore design collaborations and curated installations by Karan Desai Architecture + Design with prestigious industry leaders including The Quarry, India Design (ID) Delhi and Mumbai.',
  keywords: [
    'architecture collaborations',
    'design partnerships',
    'india design delhi',
    'india design mumbai',
    'karan desai collaborations',
    'the quarry india design',
    'architectural partnerships',
    'design exhibitions',
    'quarry',
    'india design',
    'collaborations',
  ],
  alternates: {
    canonical: 'https://karandesai.in/collaborations',
  },
  openGraph: {
    title: 'Design Collaborations & Exhibitions | KDAD | Karan Desai',
    description:
      'Explore collaborative projects and design partnerships by Karan Desai Architecture + Design with India Design Delhi, Mumbai, and The Quarry.',
    url: 'https://karandesai.in/collaborations',
    siteName: 'Karan Desai Architecture + Design',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KDAD Design Collaborations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design Collaborations & Exhibitions | KDAD',
    description:
      'Explore collaborative projects and design partnerships by Karan Desai Architecture + Design.',
    images: ['/og-image.jpg'],
  },
};

export default function Collaborations() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Design Collaborations & Exhibitions | Karan Desai Architecture + Design',
    description:
      'Architectural collaborations with India Design ID Delhi 2024, ID Delhi 2025, ID Mumbai 2024, and The Quarry curated by Karan Desai.',
    url: 'https://karandesai.in/collaborations',
    publisher: {
      '@type': 'ArchitectureFirm',
      name: 'Karan Desai Architecture + Design',
      url: 'https://karandesai.in',
    },
  };

  return (
    <div>
      <div className='project-bg fixed w-full h-full m-0 p-0 z-0 opacity-25 blur-md' />

      {/* JSON-LD Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10'>
        <Navbar isBgBlack={true} />
        <h1 className='sr-only'>
          Design Collaborations & Industry Exhibitions — Karan Desai Architecture + Design
        </h1>
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
