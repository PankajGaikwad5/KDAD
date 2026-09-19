// ...existing code...
import React from 'react';
import Link from 'next/link';
import CarouselComp from '../../../components/CarouselComp';
import { ChevronLeft } from 'lucide-react';
import { Poppins, Montserrat } from 'next/font/google';
import { projects } from '../../../components/projects';
import ClickOutsideWrapper from '../../../components/ClickOutsideWrapper'; // Adjust path as needed

const popins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

// Server-side dynamic metadata for each project
export async function generateMetadata({ params }) {
  const { id } = await params;
  const projectData = projects.find((p) => {
    const pid = p._id?.$oid ?? p._id ?? p.id;
    return String(pid) === String(id);
  });

  if (!projectData) {
    return {
      title: 'Project not found | Karan Desai Architecture + Design',
      description: 'Project not found.',
      robots: { index: false, follow: false },
    };
  }

  const title = `${projectData.title} | Karan Desai Architecture + Design`;
  const description =
    projectData.description ||
    `${projectData.title} — architecture and interior design project by Karan Desai Architecture + Design. Explore images, concept and details.`;
  const firstImage = projectData.images?.[0]?.fileUrl ?? '/og-image.jpg';
  const url = `https://karandesai.in/projectdetails/${id}`;

  return {
    title,
    description,
    keywords: [
      projectData.title,
      'Karan Desai',
      'KDAD',
      'architecture',
      'interior design',
      projectData.location ?? 'Mumbai',
      ...(projectData.tags ?? []).slice(0, 10),
    ].filter(Boolean),
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
  const projectData = projects.find((project) => {
    const pid = project._id?.$oid ?? project._id ?? project.id;
    return String(pid) === String(id);
  });

  if (!projectData) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <p className='text-red-500 text-lg'>Feature not found.</p>
      </div>
    );
  }

  const { title, images } = projectData;

  // JSON-LD structured data for the project (CreativeWork / ImageGallery)
  const ldJson = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    description:
      projectData.description ||
      `Project by Karan Desai Architecture + Design: ${title}`,
    url: `https://karandesai.in/projectdetails/${id}`,
    author: {
      '@type': 'Organization',
      name: 'Karan Desai Architecture + Design',
      url: 'https://karandesai.in',
    },
    image: (images || []).map((img) => img.fileUrl).filter(Boolean),
    keywords: (projectData.tags || []).slice(0, 10),
    provider: {
      '@type': 'Organization',
      name: 'Karan Desai Architecture + Design',
    },
  };

  return (
    <div className='h-[100dvh] w-full flex flex-col overflow-hidden relative'>
      <div className='project-bg absolute inset-0 z-0 opacity-25 blur-md pointer-events-none'></div>

      {/* inject JSON-LD for search engines */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />

      <div className='relative z-10 flex flex-col flex-1 min-h-0 w-full'>
        <div className='absolute left-3 top-3 z-50'>
          <Link href='/projects' aria-label='Back to projects'>
            <ChevronLeft
              className='text-white'
              size={50}
              strokeWidth={0.9}
              absoluteStrokeWidth
            />
          </Link>
        </div>

        {/* Visible H1 for SEO and accessibility */}
        <header className='py-2 md:py-4 flex-shrink-0 text-center relative z-20'>
          <h1 className='text-white text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide uppercase'>
            {title}
          </h1>
          {projectData.location && (
            <p className='text-gray-300 text-xs md:text-sm mt-1'>{projectData.location}</p>
          )}
        </header>

        <div className='flex-1 min-h-0 w-full relative z-20 flex flex-col pb-4'>
          <ClickOutsideWrapper 
            className='w-full h-full flex flex-col'
            innerClassName='w-full h-full flex flex-col'
          >
            {images && images.length > 0 ? (
              <CarouselComp
                imgArray={images.map((image) => image.fileUrl)}
                notcollab={true}
              />
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <p className='text-gray-500 text-lg'>
                  No images available for this feature.
                </p>
              </div>
            )}
          </ClickOutsideWrapper>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetails;
