import { Geist, Geist_Mono, Bebas_Neue, League_Spartan } from 'next/font/google';
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

// Importing League Spartan
const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-league-spartan',
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['ArchitectureFirm', 'ProfessionalService', 'LocalBusiness'],
      '@id': 'https://karandesai.in/#organization',
      name: 'Karan Desai Architecture + Design',
      alternateName: ['KDAD', 'Karan Desai Studio', 'Karan Desai Architects'],
      url: 'https://karandesai.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://karandesai.in/signlogo.png',
        width: 512,
        height: 512,
      },
      image: 'https://karandesai.in/og-image.jpg',
      description:
        'Award-winning luxury architecture and interior design studio based in Mumbai, India. Founded in 2012 by architect Karan Desai, KDAD specializes in bespoke residential villas, luxury penthouses, commercial spaces, and custom collectible furniture across India and internationally.',
      priceRange: '$$$$',
      telephone: '+917977112242',
      email: 'info@karandesai.in',
      founder: {
        '@type': 'Person',
        '@id': 'https://karandesai.in/#karandesai',
        name: 'Karan Desai',
        jobTitle: 'Principal Architect & Founder',
        birthDate: '1987',
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: "Pillai's College of Architecture",
        },
        image: 'https://karandesai.in/assets/profile.JPG',
        sameAs: [
          'https://www.instagram.com/karandesai_a.d/',
          'https://www.linkedin.com/in/karandesaiad/',
          'https://www.youtube.com/@KarandesaiAD',
        ],
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
        latitude: '19.134860',
        longitude: '72.835581',
      },
      hasMap:
        'https://maps.google.com/?q=Shah+Industrial+Estate+1001+PARINEE+I+7-A+Andheri+West+Mumbai+400053',
      areaServed: [
        'Mumbai',
        'South Mumbai',
        'Bandra',
        'Juhu',
        'Worli',
        'Andheri West',
        'Delhi NCR',
        'Goa',
        'Alibaug',
        'Bangalore',
        'Pune',
        'Washington D.C.',
        'Chicago',
        'United States',
        'Europe',
        'India',
        'International',
      ],
      openingHoursSpecification: [
        {
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
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Architectural & Interior Design Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Luxury Residential Architecture',
              description:
                'Comprehensive architectural planning, blueprinting, structural design, and construction supervision for luxury villas, private bungalows, and holiday estates.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'High-End Luxury Interior Design',
              description:
                'Full-scope luxury interior design and turnkey decoration for penthouses, duplex residences, sea-facing apartments, and private homes in Mumbai and pan-India.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Commercial & Office Interior Architecture',
              description:
                'Modern corporate office design, executive suites, boutique showrooms, and hospitality venues focused on aesthetics and brand experience.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Bespoke Furniture & Collectible Design (KDH)',
              description:
                'Custom handcrafted furniture, marble dining tables, sculptural consoles, and bespoke decor pieces curated by Karan Desai Home.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Turnkey Architectural Consultation & Execution',
              description:
                'End-to-end design-build consulting, 3D visualization, MEP coordination, and site supervision.',
            },
          },
        ],
      },
      knowsAbout: [
        'Architecture',
        'Interior Design',
        'Luxury Residential Architecture',
        'Bespoke Interior Design',
        'Custom Collectible Furniture',
        'Villa Architecture',
        'Penthouse Interior Design',
        'Sustainable Architecture',
        'Commercial Space Architecture',
      ],
      sameAs: [
        'https://www.instagram.com/karandesai_a.d/',
        'https://www.linkedin.com/in/karandesaiad/',
        'https://www.youtube.com/@KarandesaiAD',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://karandesai.in/#website',
      url: 'https://karandesai.in',
      name: 'KDAD | Karan Desai Architecture + Design',
      publisher: {
        '@id': 'https://karandesai.in/#organization',
      },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://karandesai.in/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does Karan Desai Architecture + Design (KDAD) offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'KDAD offers comprehensive architecture and luxury interior design services including bespoke residential architecture, high-end villa and penthouse design, commercial office design, hospitality interiors, and custom furniture via Karan Desai Home (KDH).',
          },
        },
        {
          '@type': 'Question',
          name: 'Who is the founder of KDAD?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'KDAD was founded in 2012 by Karan Desai, an award-winning Indian architect, interior designer, and TEDx speaker, graduated from Pillai’s College of Architecture.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is Karan Desai Architecture + Design located?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The KDAD studio is based at Shah Industrial Estate, 1001 PARINEE I, 7-A, Andheri West, Mumbai, Maharashtra 400053, India.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I book a design consultation with Karan Desai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can book a consultation by emailing info@karandesai.in, calling or messaging +91 79771 12242, or submitting an inquiry through https://karandesai.in/contact-us.',
          },
        },
      ],
    },
  ],
};

export const metadata = {
  metadataBase: new URL('https://karandesai.in'),
  title: {
    default: 'Top Architects in Mumbai & Luxury Interior Designers | Karan Desai (KDAD)',
    template: '%s | Karan Desai Architecture + Design',
  },
  description:
    'Award-winning architecture firm and luxury interior design studio in Mumbai, founded by Karan Desai. Specializing in bespoke residential villas, penthouses, and commercial spaces across Mumbai, India, and internationally.',
  alternates: {
    canonical: 'https://karandesai.in',
  },
  keywords: [
    // Top-Intent Category Keywords (Interior & Architects)
    'architects in Mumbai',
    'best architects in Mumbai',
    'top architects Mumbai',
    'luxury architects in Mumbai',
    'interior designers in Mumbai',
    'best interior designers in Mumbai',
    'luxury interior designers Mumbai',
    'top interior design firms Mumbai',
    'famous architects in Mumbai',
    'residential architects Mumbai',
    'commercial interior designers Mumbai',
    'architects near me',
    'interior designer near me',

    // Primary Brand Keywords
    'KDAD',
    'Karan Desai',
    'Karan Desai Architecture Design',
    'Karan Desai Studio',
    'Karan Desai Home',
    'KDH',

    // Specific Geographies
    'architects in Bandra',
    'architects in Juhu',
    'architects in Andheri West',
    'architects in Worli',
    'interior designers South Mumbai',
    'villa architects in Goa',
    'villa architects in Alibaug',
    'luxury designers Delhi NCR',
    'architects Bangalore',
    'architects Pune',

    // Project & Service Types
    'luxury home design',
    'luxury apartment interior design',
    'penthouse interior design Mumbai',
    'modern villa architecture design',
    'custom furniture design Mumbai',
    'commercial space design Mumbai',
    'contemporary architecture India',
    'sustainable luxury architecture',

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
    title: 'KDAD | Karan Desai Architecture + Design | Luxury Architects Mumbai',
    description:
      'Award-winning architecture and interior design studio in Mumbai, founded by Karan Desai. Specializing in bespoke luxury residences, villas, penthouses, and commercial spaces across India & globally.',
    url: 'https://karandesai.in',
    siteName: 'Karan Desai Architecture + Design',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Karan Desai Architecture + Design - Luxury Projects',
      },
      {
        url: '/signlogo.png',
        width: 512,
        height: 512,
        alt: 'Karan Desai Architecture + Design Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KDAD | Karan Desai Architecture + Design | Luxury Architects Mumbai',
    description:
      'Award-winning architecture and luxury interior design studio in Mumbai. Specializing in bespoke residential and commercial projects.',
    images: ['/og-image.jpg'],
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
  manifest: '/manifest.json',
  icons: {
    icon: '/signlogo.png',
    apple: '/signlogo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${bebasNueRegular.variable} ${leagueSpartan.variable} antialiased`}>
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
