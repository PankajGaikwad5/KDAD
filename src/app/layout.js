import { Geist, Geist_Mono, Bebas_Neue } from 'next/font/google';
import './globals.css';
import CursorTrail from '../components/CursorTrail';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import Script from 'next/script';

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
  title: 'KDAD | Karan Desai Architecture and Design',
  description: `Discover award-winning architecture and interior designs by Karan Desai Studio — crafting luxurious homes and spaces in India and worldwide.`,
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
    title: 'Karan Desai Architecture + Design',
    type: 'website',
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
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        <Script
          id='json-ld'
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* <script
          src='https://seo-fixer.writesonic.com/site-audit/fixer-script/index.js'
          id='wsAiSeoMb'
          type='application/javascript'
        />
        <script
          id='wsAiSeoInitScript'
          dangerouslySetInnerHTML={{
            __html: `
              wsSEOfixer.configure({
                hostURL: 'https://seo-fixer.writesonic.com',
                siteID: '68fc86a19dc7d2449c142b76'
              });
            `,
          }}
        /> */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content="Discover the innovative architectural designs of Karan Desai Home. Karan Desai Award Winning Architecture + Interior Design Studio | TedX
          Speaker Karan DesaiBorn in 1987, a passionate founder of his eponymous
          studio, KARAN DESAI | Architecture + Design, focusing on Architecture,
          Interiors & furniture designing, KD started off with his individual
          practice right after he gave his Thesis in 2011 from Pillai’s college
          of architecture & founded the company in 2012. The internship under
          Ar. Ashiesh Shah during a year drop in 2007, carved a path for his
          career with a clear direction towards his goals & dreams which he
          lives today. The Studio has spread its wings in Mangalore, Goa, Delhi,
          Kullu - Manali, Uttarakhand, Kolkata, Chennai and plan to continue.
          Inspired by contemporary aesthetics and clean lines, the studio
          beautifies projects both residential and commercial on varying scales.
          From ideation rooms to offices , homes to private getaways, the team
          designs projects and products in close association with clients to
          deliver unique results and reflect personal tastes with consolidating
          the studio’s vision. We're also doing projects internationally, We've
          completed working on the order of 20,000 sq.ft. in Chicago and
          currently working on 15,000 sq.ft Mansion in Washington, D.C."
        />
        <link rel='canonical' href='https://karandesai.in' />
        <link rel='apple-touch-icon' href='/signlogo.png'></link>
        <meta property='og:title' content='Karan Desai Architecture + Design' />
        <meta
          property='og:description'
          content={`Discover the innovative architectural designs of Karan Desai Home. Karan Desai Award Winning Architecture + Interior Design Studio | TedX
          Speaker Karan DesaiBorn in 1987, a passionate founder of his eponymous
          studio, KARAN DESAI | Architecture + Design, focusing on Architecture,
          Interiors & furniture designing, KD started off with his individual
          practice right after he gave his Thesis in 2011 from Pillai’s college
          of architecture & founded the company in 2012. The internship under
          Ar. Ashiesh Shah during a year drop in 2007, carved a path for his
          career with a clear direction towards his goals & dreams which he
          lives today. The Studio has spread its wings in Mangalore, Goa, Delhi,
          Kullu - Manali, Uttarakhand, Kolkata, Chennai and plan to continue.
          Inspired by contemporary aesthetics and clean lines, the studio
          beautifies projects both residential and commercial on varying scales.
          From ideation rooms to offices , homes to private getaways, the team
          designs projects and products in close association with clients to
          deliver unique results and reflect personal tastes with consolidating
          the studio’s vision. We're also doing projects internationally, We've
          completed working on the order of 20,000 sq.ft. in Chicago and
          currently working on 15,000 sq.ft Mansion in Washington, D.C.`}
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://karandesai.in' />
        <meta property='og:image' content='/assets/signlogo.png' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Karan Desai Architecture + Design'
        />
        <meta
          name='twitter:description'
          content='Discover the innovative architectural designs of Karan Desai Home.'
        />
      </Head>
      {/* <script
        src='https://seo-fixer.writesonic.com/site-audit/fixer-script/index.js'
        id='wsAiSeoMb'
        type='application/javascript'
      />
      <script
        id='wsAiSeoInitScript'
        dangerouslySetInnerHTML={{
          __html: `
              wsSEOfixer.configure({
                hostURL: 'https://seo-fixer.writesonic.com',
                siteID: '68fc86a19dc7d2449c142b76'
              });
            `,
        }}
      /> */}
      <body className={`${bebasNueRegular.variable}  antialiased`}>
        {/* Meta Pixel Script */}
        <Script id='meta-pixel' strategy='afterInteractive'>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '4111080902498732');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* NoScript fallback */}
        <noscript>
          <img
            height='1'
            width='1'
            style={{ display: 'none' }}
            src='https://www.facebook.com/tr?id=4111080902498732&ev=PageView&noscript=1'
            alt='fb'
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
