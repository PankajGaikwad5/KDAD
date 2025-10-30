import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ContactClient from '../../components/ClientComponents/ContactClient';

export const metadata = {
  title: 'Contact Us | Karan Desai Architecture + Design',
  description:
    'Get in touch with Karan Desai Architecture + Design for innovative architectural and interior design solutions. Located in Mumbai, we offer exceptional design experiences.',
  keywords: [
    'contact KDAD',
    'Karan Desai contact',
    'architecture firm Mumbai',
    'interior design contact',
    'design consultation',
    'Mumbai architects',
    'book appointment',
    'architectural services',
    'design studio Mumbai',
    'architecture consultation',
    'contact karan desai',
    'contact karan',
    'contact',
    'appointment',
  ],
  openGraph: {
    title: 'Contact Karan Desai Architecture + Design',
    description:
      'Connect with KDAD for innovative architectural and interior design solutions in Mumbai',
    type: 'website',
    locale: 'en_IN',
    url: 'https://karandesai.in/contact-us',
    siteName: 'Karan Desai Architecture + Design',
    images: [
      {
        url: '/contact-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact KDAD',
      },
    ],
  },
  alternates: {
    canonical: 'https://karandesai.in/contact-us',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function Contact() {
  return (
    <div>
      <div className='project-bg fixed w-full h-full m-0 p-0 z-0 opacity-25 blur-md'></div>
      <div className='relative w-full overflow-hidden md:pt-32 px-4 tracking-widest'>
        <Navbar isBgBlack={true} />
        <ContactClient />
        <Footer />
      </div>
    </div>
  );
}
