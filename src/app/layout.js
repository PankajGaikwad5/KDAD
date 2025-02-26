import { Geist, Geist_Mono, Bebas_Neue } from 'next/font/google';
import './globals.css';
import CursorTrail from '../components/CursorTrail';
import { Analytics } from '@vercel/analytics/react';

// Importing Geist Sans
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

// Importing Geist Mono
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Importing Bebas Neue
const bebasNueRegular = Bebas_Neue({
  subsets: ['latin'], // Specify subsets
  weight: '400', // Specify weight
  variable: '--font-bebas-nue', // Custom CSS variable
});

// export const metadata = {
//   title: 'KDAD',
//   description: 'Website for Karan Desai Architecture and Design (KDAD)',
// };

export const metadata = {
  title: 'KDAD | Karan Desai Architecture and Design',
  description:
    'Discover the innovative architectural designs of Karan Desai Architecture and Design (KDAD).',
  keywords: [
    'KDAD',
    'Karan Desai',
    'Karan Desai Architecture and Design',
    'modern architecture',
    'contemporary architecture',
    'innovative architecture',
    'creative architecture',
    'architectural design',
    'modern design',
    'sustainable architecture',
    'eco-friendly design',
    'residential architecture',
    'commercial architecture',
    'interior design',
    'architectural portfolio',
    'design studio',
    'urban design',
    'minimalist design',
    'award-winning architecture',
    'architecture firm',
    'creative design solutions',
    'luxury architecture',
    'modern building design',
    'architectural innovation',
    'architectural trends',
    'design inspiration',
    'architectural projects',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/assets/signlogo.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Discover the innovative architectural designs of Karan Desai Architecture and Design (KDAD).'
        />
        <link rel='canonical' href='https://karandesai.in' />
        <meta
          property='og:title'
          content='KDAD | Karan Desai Architecture and Design'
        />
        <meta
          property='og:description'
          content='Discover the innovative architectural designs of Karan Desai Architecture and Design (KDAD).'
        />
        <meta
          property='og:image'
          content='https://karandesai.in/assets/og-image.jpg'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='KDAD | Karan Desai Architecture and Design'
        />
        <meta
          name='twitter:description'
          content='Discover the innovative architectural designs of Karan Desai Architecture and Design (KDAD).'
        />
      </head>
      <body className={`${bebasNueRegular.variable}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
