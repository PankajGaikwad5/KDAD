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

export const metadata = {
  title: 'KDAD',
  description: 'Website for Karan Desai Architecture and Design (KDAD)',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/assets/signlogo.png' />
      </head>
      <body className={`${bebasNueRegular.variable}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
