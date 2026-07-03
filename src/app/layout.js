import { Geist, Geist_Mono, Bebas_Neue } from 'next/font/google';
import './globals.css';
import CursorTrail from '../components/CursorTrail';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import CookieConsent from '../components/CookieConsent';

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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://karandesai.in/#organization',
      name: 'Karan Desai Architecture + Design',
      url: 'https://karandesai.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://karandesai.in/signlogo.png',
        width: 112,
        height: 112,
      },
      sameAs: [
        'https://www.instagram.com/karandesai_a.d/',
        'https://www.linkedin.com/in/karandesaiad/',
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://karandesai.in/#service',
      name: 'Karan Desai Architecture + Design',
      description:
        'Award-winning architecture and interior design studio specializing in luxury residential and commercial projects across India and internationally.',
      priceRange: '$$$',
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: '19.134860154879515',
          longitude: '72.83558120552186',
        },
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Shah Industrial Estate, 1001 PARINEE I, 7-A',
        addressLocality: 'Andheri West',
        addressRegion: 'Mumbai',
        postalCode: '400053',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '19.134860154879515',
        longitude: '72.83558120552186',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '10:30',
        closes: '19:30',
      },
      telephone: '+917977112242',
      email: 'info@karandesai.in',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://karandesai.in/#website',
      url: 'https://karandesai.in',
      name: 'KDAD | Karan Desai Architecture and Design',
      publisher: {
        '@id': 'https://karandesai.in/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://karandesai.in/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export const metadata = {
  metadataBase: new URL('https://karandesai.in'),
  title: 'KDAD | Karan Desai Architecture and Design',
  description:
    'Award-winning architecture and interior design studio in Mumbai. Specializing in luxury residential and commercial projects across India and internationally.',
  alternates: {
    canonical: 'https://karandesai.in',
  },
  keywords: [
    // Primary Keywords (Brand)
    'KDAD',
    'Karan Desai',
    'Karan Desai Architecture Design',
    'Karan Desai Studio',

    // Location-based Keywords
    'architects in Mumbai',
    'Mumbai interior designers',
    'best interior designer Mumbai',
    'luxury architects India',

    // Service-based Keywords (High Intent)
    'luxury home design',
    'residential architecture Mumbai',
    'commercial interior design',
    'sustainable architecture design',
    'modern house design Mumbai',
    'luxury interior design India',

    // Specialized Services
    'custom furniture design',
    'modern office interior',
    'luxury apartment design',
    'villa architecture design',
    'penthouse interior design',
    'sustainable building design',

    // Long-tail Keywords
    'best residential architects in Mumbai',
    'luxury home interior designer Mumbai',
    'modern house architects in India',
    'sustainable architecture firms Mumbai',
    'commercial space design Mumbai',

    // Industry-specific Terms
    'architecture studio',
    'interior design firm',
    'architectural consulting',
    'design-build firm',
    'space planning',

    // Project Types
    'residential projects',
    'commercial projects',
    'hospitality design',
    'retail design',
    'restaurant interior design',

    // Design Styles
    'contemporary architecture',
    'modern interior design',
    'minimalist design',
    'luxury architecture',
    'sustainable design',

    // Expertise Areas
    'space optimization',
    'architectural planning',
    'interior styling',
    'green building design',
    'custom home design',

    // Geographic Expansion
    'architects in Delhi',
    'interior designer Bangalore',
    'architecture firm Pune',
    'luxury designers India',
    'international architecture firm',
  ],
  openGraph: {
    title: 'KDAD | Karan Desai Architecture and Design',
    description:
      'Award-winning architecture and interior design studio in Mumbai. Specializing in luxury residential and commercial projects across India and internationally.',
    url: 'https://karandesai.in',
    siteName: 'Karan Desai Architecture + Design',
    images: [
      {
        url: '/signlogo.png',
        width: 1200,
        height: 630,
        alt: 'Karan Desai Architecture + Design Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KDAD | Karan Desai Architecture and Design',
    description:
      'Award-winning architecture and interior design studio in Mumbai. Specializing in luxury residential and commercial projects.',
    images: ['/signlogo.png'],
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    bing: 'your-bing-verification-code',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/signlogo.png',
    apple: '/signlogo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${bebasNueRegular.variable} antialiased`}>
        {/* JSON-LD Structured Data */}
        <Script
          id='json-ld'
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy='beforeInteractive'
        />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
