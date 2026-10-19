import React from 'react';
import CarouselComp from '../../../components/CarouselComp';
import { ChevronLeft } from 'lucide-react';
import { features } from '../../../components/features';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  const projectData = features.find((project) => {
    const slugifiedTitle = project.title ? project.title.toLowerCase().replace(/\s+/g, '-') : '';
    return project._id?.$oid === id || project.title === decodedId || slugifiedTitle === decodedId.toLowerCase();
  });

  if (!projectData) {
    return {
      title: 'Press Feature Not Found | Karan Desai Architecture + Design',
      description: 'The requested media publication feature could not be found.',
      robots: { index: false, follow: false },
    };
  }

  const title = `${projectData.title} | Press Feature | Karan Desai Architecture + Design`;
  const description = `Read the ${projectData.title} feature highlighting Karan Desai Architecture + Design (KDAD) projects, design innovations, and media press coverage.`;
  const firstImage = projectData.images?.[0]?.fileUrl ?? '/og-image.jpg';
  const url = `https://karandesai.in/featuredetails/${id}`;

  return {
    title,
    description,
    keywords: [
      projectData.title,
      'Karan Desai',
      'KDAD media feature',
      'architecture publication',
      'design magazine article',
      'luxury architecture Mumbai',
    ],
    openGraph: {
      title,
      description,
      url,
      siteName: 'Karan Desai Architecture + Design',
      images: [
        {
          url: firstImage,
          alt: projectData.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [firstImage],
    },
    alternates: {
      canonical: url,
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
}

const FeatureDetails = async ({ params }) => {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  const projectData = features.find((project) => {
    const slugifiedTitle = project.title ? project.title.toLowerCase().replace(/\s+/g, '-') : '';
    return project._id?.$oid === id || project.title === decodedId || slugifiedTitle === decodedId.toLowerCase();
  });

  if (!projectData) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <p className='text-red-500 text-lg'>Feature not found.</p>
      </div>
    );
  }

  const { title, images } = projectData;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: `Media coverage and magazine feature of Karan Desai Architecture + Design: ${title}`,
    url: `https://karandesai.in/featuredetails/${id}`,
    author: {
      '@type': 'Organization',
      name: 'Karan Desai Architecture + Design',
      url: 'https://karandesai.in',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Karan Desai Architecture + Design',
      logo: {
        '@type': 'ImageObject',
        url: 'https://karandesai.in/signlogo.png',
      },
    },
    image: (images || []).map((img) => img.fileUrl).filter(Boolean),
  };

  return (
    <div>
      <div className='project-bg fixed w-full h-full m-0 p-0 z-0 opacity-25 blur-md' />

      {/* JSON-LD Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className='relative'>
        <h1 className='sr-only'>{title} — Karan Desai Architecture + Design Media Feature</h1>
        <div className='absolute left-3 top-3 z-50'>
          <a href='/publications' aria-label='Back to publications'>
            <ChevronLeft
              className='text-white'
              size={50}
              strokeWidth={0.9}
              absoluteStrokeWidth
            />
          </a>
        </div>
        <div className='h-screen items-center flex justify-center'>
          <CarouselComp
            imgArray={images.map((image) => image.fileUrl)}
            notcollab={true}
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureDetails;
