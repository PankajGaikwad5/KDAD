import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ContactClient from '../../components/ClientComponents/ContactClient';

export const metadata = {
  title: 'Hire Architects & Interior Designers in Mumbai | Karan Desai KDAD',
  description:
    'Inquire with Karan Desai Architecture + Design in Andheri West, Mumbai. Consult with top architects and luxury interior designers for bespoke villas, penthouses, commercial spaces, and custom furniture across India.',
  keywords: [
    'hire architects in Mumbai',
    'hire interior designers in Mumbai',
    'architects in Mumbai contact',
    'best architects Mumbai consultation',
    'luxury interior designers Mumbai',
    'interior designer Andheri West',
    'luxury home architecture Mumbai',
    'architecture consultation Mumbai',
    'penthouse interior designer Mumbai',
    'commercial architecture firm Mumbai',
    'Karan Desai contact',
    'KDAD contact',
    'Shah Industrial Estate architect',
  ],
  alternates: {
    canonical: 'https://karandesai.in/contact-us',
  },
  openGraph: {
    title: 'Contact Karan Desai Architecture + Design | Studio in Mumbai',
    description:
      'Connect with KDAD for luxury residential, villa, penthouse, and commercial architecture and design consultations in Mumbai and worldwide.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://karandesai.in/contact-us',
    siteName: 'Karan Desai Architecture + Design',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Karan Desai Architecture + Design Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact KDAD | Karan Desai Architecture + Design',
    description:
      'Connect with our Mumbai studio for luxury architecture and interior design projects across India & internationally.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};

const contactFaqs = [
  {
    question: 'Where is the Karan Desai Architecture + Design studio located?',
    answer:
      'The KDAD studio is located at Shah Industrial Estate, 1001 PARINEE I, 7-A, Andheri West, Mumbai, Maharashtra 400053, India.',
  },
  {
    question: 'How do I book an architectural or interior design consultation?',
    answer:
      'You can book a consultation by submitting the contact form on this page, emailing info@karandesai.in, or reaching out directly via phone / WhatsApp at +91 79771 12242.',
  },
  {
    question: 'Does Karan Desai take on projects outside of Mumbai?',
    answer:
      'Yes. While headquartered in Mumbai, KDAD actively designs and executes luxury residential, villa, and commercial projects across India (including Delhi NCR, Goa, Alibaug, Bangalore, Pune) and internationally across the United States (including a completed 20,000 sq.ft. project in Chicago and a 15,000 sq.ft. mansion in Washington, D.C.), Europe, and globally.',
  },
  {
    question: 'What information should I have ready for a new project inquiry?',
    answer:
      'Sharing your project location, approximate built-up area (sq. ft.), project typology (luxury apartment, villa, commercial office, restaurant), desired timeline, and key design requirements will help us tailor our initial discovery consultation.',
  },
];

export default function Contact() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': 'https://karandesai.in/contact-us#webpage',
        url: 'https://karandesai.in/contact-us',
        name: 'Contact Karan Desai Architecture + Design',
        description:
          'Get in touch with Karan Desai Architecture + Design for bespoke luxury architecture and interior design inquiries.',
        breadcrumb: {
          '@id': 'https://karandesai.in/contact-us#breadcrumb',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://karandesai.in/contact-us#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://karandesai.in/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Contact Us',
            item: 'https://karandesai.in/contact-us',
          },
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://karandesai.in/#service',
        name: 'Karan Desai Architecture + Design',
        image: 'https://karandesai.in/og-image.jpg',
        url: 'https://karandesai.in',
        telephone: '+917977112242',
        email: 'info@karandesai.in',
        priceRange: '$$$$',
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
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://karandesai.in/contact-us#faq',
        mainEntity: contactFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div>
      <div className='project-bg fixed w-full h-full m-0 p-0 z-0 opacity-25 blur-md' />
      <div className='relative w-full overflow-hidden md:pt-32 px-4 tracking-widest'>
        <Navbar isBgBlack={true} />
        
        {/* Hidden SEO/AEO context block for Answer Engines & screen readers */}
        <div className='sr-only'>
          <h1>Contact Karan Desai Architecture + Design Studio in Mumbai</h1>
          <p>
            Visit our architecture studio in Andheri West, Mumbai, or schedule a consultation for residential, villa, commercial, or furniture projects.
          </p>
          <address>
            Shah Industrial Estate, 1001 PARINEE I, 7-A, Andheri West, Mumbai 400053, Maharashtra, India.
            Phone: +91 79771 12242 | Email: info@karandesai.in
          </address>
        </div>

        <ContactClient />
        <Footer />

        {/* Structured Data for SEO / Local GEO / AEO */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </div>
  );
}
