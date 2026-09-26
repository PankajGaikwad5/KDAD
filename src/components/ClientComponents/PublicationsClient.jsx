'use client';

import { useEffect, useRef, useState, Fragment } from 'react';
import gsap from 'gsap';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import { X, BookOpen, ChevronLeft, ChevronRight, Instagram, ExternalLink } from 'lucide-react';
import pressData from '../pressData.json';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '600', '700'],
});

const localMagazines = [
   {
    id: 1,
    name: 'Ezine',
    issue: 'August 2026 Issue',
    coverImage: '/mags/ezineaug26cover.webp',
    featuredImages: ['/mags/ezineaug262.webp','/mags/ezineaug263.webp',],
    description: 'Ezine Magazine featuring Monster 3.0 Collection',
  },
  {
    id: 2,
    name: 'FOAID India',
    issue: 'July 2026 Instagram Feature',
    coverImage: '/mags/foaid_cover.jpg',
    featuredImages: ['/mags/foaid_ig.png', '/mags/foaidinsta/2.webp', '/mags/foaidinsta/3.webp', '/mags/foaidinsta/4.webp', '/mags/foaidinsta/5.webp', '/mags/foaidinsta/6.webp', '/mags/foaidinsta/7.webp', '/mags/foaidinsta/8.webp', '/mags/foaidinsta/9.webp', '/mags/foaidinsta/10.webp'],
    description: 'Chaitya 777 — Designed by @karandesai_a.d transforms the living room into a bold, immersive space where colour becomes architecture.',
    externalLink: 'https://www.instagram.com/p/DbSOyQDCFk-/',
    isInstagram: true,
  },
  {
    id: 3,
    name: 'Elle Decor India',
    issue: 'July 2026 Instagram Feature',
    coverImage: '/mags/elledecor_cover.jpg',
    featuredImages: ['/mags/elledecor_ig.png', '/mags/elledecorinsta/2.webp', , '/mags/elledecorinsta/3.webp', '/mags/elledecorinsta/4.webp', '/mags/elledecorinsta/5.webp', '/mags/elledecorinsta/6.webp', '/mags/elledecorinsta/7.webp'],
    description: 'Someday this would be home — A 1,300 sq ft apartment in Mumbai overlooking Aarey forest by Karan Desai, featured on @elledecorindia.',
    externalLink: 'https://www.instagram.com/p/DbNFWwFiobQ/',
    isInstagram: true,
  },
  {
    id: 4,
    name: 'Living Etc',
    issue: 'July 2026 Issue',
    coverImage: '/mags/livingetc1.webp',
    featuredImages: ['/mags/livingetc2.webp', '/mags/livingetc3.webp','/mags/livingetc4.webp','/mags/livingetc5.webp'],
    description: 'AN ESCAPE IN PLAIN SIGHT',
  },
  {
    id: 5,
    name: 'Living Etc',
    issue: 'June 2026 Issue',
    coverImage: '/mags/livingetcjunecover.webp',
    featuredImages: ['/mags/livingetcjunefeature.webp'],
    description: 'Living Etc featuring Jina Shilp Collection',
  },
  {
    id: 6,
    name: 'Cover',
    issue: 'June 2026 Issue',
    coverImage: '/mags/cover1.webp',
    featuredImages: ['/mags/cover2.webp', '/mags/cover3.webp'],
    description: 'A special feature showcasing the unique design details across multiple editorial spreads.',
  },
  {
    id: 7,
    name: 'India Today Home',
    issue: 'June 2026 Issue',
    coverImage: '/mags/ithome1.webp',
    featuredImages: ['/mags/ithome2.webp'],
    description: 'Featuring the custom KDH Marble Console collection and minimal design aesthetics in a high-end luxury residence.',
  },
  {
    id: 8,
    name: 'Fortune India',
    issue: 'June 2026 Issue',
    coverImage: '/mags/fortune1.webp',
    featuredImages: ['/mags/fortune2.webp'],
    description: 'An exclusive feature highlighting the handcrafted brass details and futuristic design of the new Monster lighting series.',
  },
];

export default function PublicationsClient({ articles, features }) {
  const pageRef = useRef(null);
  const magazinesRef = useRef(null);
  const articlesSectionRef = useRef(null);
  const podcastRef = useRef(null);

  const [selectedMagazine, setSelectedMagazine] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const [zoomedImage, setZoomedImage] = useState(null);
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const zoomContainerRef = useRef(null);
  const [activeFeaturedIndex, setActiveFeaturedIndex] = useState(0);

  const pressMagazines = pressData.map((item, idx) => {
    const isInsta = item.type === 'Instagram Story' || item.type === 'Social Media';
    const name = item.publication || item.type;
    return {
      id: `press-${item.year}-${idx}`,
      name: name,
      issue: `${item.month} ${item.year} - ${item.type}`,
      coverImage: item.images[0],
      featuredImages: item.images,
      isInstagram: isInsta,
      description: 'Press coverage featuring designs by Karan Desai.',
    };
  });

  // Compute all unique images available for the currently selected magazine
  const magazineImages = selectedMagazine
    ? Array.from(new Set([selectedMagazine.coverImage, ...(selectedMagazine.featuredImages || [])].filter(Boolean)))
    : [];

  const currentZoomIndex = magazineImages.indexOf(zoomedImage);

  const prevZoomImage = (e) => {
    if (e) e.stopPropagation();
    if (magazineImages.length <= 1) return;
    const prevIdx = (currentZoomIndex - 1 + magazineImages.length) % magazineImages.length;
    setZoomedImage(magazineImages[prevIdx]);
    setIsZoomedIn(false);
    setMousePos({ x: 0.5, y: 0.5 });
  };

  const nextZoomImage = (e) => {
    if (e) e.stopPropagation();
    if (magazineImages.length <= 1) return;
    const nextIdx = (currentZoomIndex + 1) % magazineImages.length;
    setZoomedImage(magazineImages[nextIdx]);
    setIsZoomedIn(false);
    setMousePos({ x: 0.5, y: 0.5 });
  };

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const closeZoom = () => {
    setZoomedImage(null);
    setIsZoomedIn(false);
    setMousePos({ x: 0.5, y: 0.5 });
  };

  const handleMouseMove = (e) => {
    if (!isZoomedIn || !zoomContainerRef.current) return;
    const { left, top, width, height } = zoomContainerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setMousePos({ x: Math.max(0, Math.min(1, x)), y: Math.max(0, Math.min(1, y)) });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (zoomedImage) {
        if (e.key === 'Escape') {
          closeZoom();
        } else if (e.key === 'ArrowLeft') {
          prevZoomImage();
        } else if (e.key === 'ArrowRight') {
          nextZoomImage();
        }
      } else if (selectedMagazine) {
        if (e.key === 'Escape') {
          setSelectedMagazine(null);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [zoomedImage, selectedMagazine, currentZoomIndex, magazineImages]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (podcastRef.current) {
        tl.fromTo(
          podcastRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
        );
      }

      const magItems = magazinesRef.current?.children;
      if (magItems?.length) {
        tl.fromTo(
          magItems,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.03, ease: 'power2.out' },
          podcastRef.current ? '-=0.4' : undefined
        );
      }

      const articlesItems = articlesSectionRef.current?.children;
      if (articlesItems?.length) {
        tl.fromTo(
          articlesItems,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.04, ease: 'power2.out' },
          '-=0.4'
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // Normalize local and dynamic database magazines into a unified structure
  const normalizedLocal = localMagazines.map((m) => ({
    id: `local-${m.id}`,
    name: m.name,
    issue: m.issue,
    coverImage: m.coverImage,
    featuredImages: m.featuredImages,
    description: m.description,
    externalLink: m.externalLink,
    isInstagram: m.isInstagram,
  }));

  const normalizedFeatures = (features || []).map((f, idx) => {
    const id = f._id?.$oid || f._id || `feat-${idx}`;
    const nameUpper = f.title ? f.title.toUpperCase() : 'EDITORIAL FEATURE';
    // Try to extract year or default to Feature
    const issueMatch = f.title ? f.title.match(/\d{4}/) : null;
    const issue = issueMatch ? `${issueMatch[0]} Issue` : 'Magazine Feature';
    
    return {
      id: id,
      name: nameUpper,
      issue: issue,
      coverImage: f.images?.[0]?.fileUrl || '',
      featuredImages: f.images && f.images.length > 1
        ? f.images.slice(1).map((img) => img.fileUrl)
        : [f.images?.[0]?.fileUrl || ''],
      description: 'Press spread featuring designs by Karan Desai.',
    };
  });

  const allMagazines = [...normalizedLocal, ...normalizedFeatures, ...pressMagazines];

  // Helper to check if a magazine layout has featured images separate from cover
  const isSinglePage = (mag) => {
    return mag.featuredImages.length === 1 && mag.featuredImages[0] === mag.coverImage;
  };

  const selectMagazine = (mag) => {
    setSelectedMagazine(mag);
    setActiveFeaturedIndex(0);
  };

  return (
    <div
      ref={pageRef}
      className="text-zinc-100 flex flex-col items-center justify-center mb-8 w-full"
    >
      {/* Title */}
      <h1
        className={`text-3xl tracking-wider border-b-4 border-pink-800 mb-8 font-semibold uppercase ${montserrat.className}`}
      >
        publications
      </h1>

      {/* Featured Podcast Section */}
      <div
        ref={podcastRef}
        className="w-full max-w-[54rem] 2xl:max-w-[80%] mb-12 flex flex-col items-center"
      >
        <div className="flex items-center gap-4 mb-8 w-full">
          <span className={`text-xs uppercase tracking-widest text-zinc-500 whitespace-nowrap ${montserrat.className}`}>
            Featured Podcast
          </span>
          <div className="flex-1 h-px bg-zinc-800" />
        </div>

        <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden bg-zinc-950 shadow-2xl border border-zinc-900/80 transition-all duration-500 hover:border-zinc-850">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/cfiPrdhy_yQ?rel=0"
            title="Karan Desai Podcast"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Magazines Section (Unified before articles) */}
      <div className="mt-8 mb-8 flex items-center gap-4 w-full max-w-[54rem] 2xl:max-w-[80%]">
        <span className={`text-xs uppercase tracking-widest text-zinc-500 whitespace-nowrap ${montserrat.className}`}>
          Featured Publications & Magazines
        </span>
        <div className="flex-1 h-px bg-zinc-800" />
      </div>

      <div
        ref={magazinesRef}
        className="grid grid-cols-1 gap-y-10 gap-x-8 pb-16 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-[54rem] 2xl:max-w-[80%]"
      >
        {allMagazines.map((mag, index) => (
          <div
            key={mag.id}
            onClick={() => selectMagazine(mag)}
            className="group cursor-pointer relative flex flex-col rounded-xl overflow-hidden bg-zinc-950/40  transition-all duration-500 hover:border-zinc-700/80 hover:shadow-2xl hover:shadow-white/[0.01]"
          >
            {/* Image Aspect ratio 3/4 */}
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-zinc-900">
              {mag.isInstagram && (
                <div className="absolute top-3 right-3 z-10 p-1.5 bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 text-white rounded-full shadow-lg">
                  <Instagram size={14} />
                </div>
              )}
              {!loadedImages[`mag-${mag.id}-cover`] && (
                <div className="absolute inset-0 bg-zinc-900 animate-pulse flex items-center justify-center">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-600">Loading...</span>
                </div>
              )}
              <Image
                src={mag.coverImage}
                alt={`${mag.name} Cover`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                  loadedImages[`mag-${mag.id}-cover`] ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => handleImageLoad(`mag-${mag.id}-cover`)}
                onError={() => handleImageLoad(`mag-${mag.id}-cover`)}
                priority={index < 3}
              />

              {/* Hover action overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="px-4 py-2 bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-zinc-200 text-[10px] uppercase tracking-widest font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                  <BookOpen size={12} className="text-zinc-400" />
                  <span>View Feature</span>
                </div>
              </div>
            </div>

            {/* Title & Info */}
            <div className="p-5 flex flex-col gap-1.5 border-t border-zinc-900">
              <span className={`text-[10px] uppercase tracking-widest text-zinc-500 font-semibold ${montserrat.className}`}>
                {mag.issue}
              </span>
              <h3 className={`text-base font-bold text-zinc-200 group-hover:text-white transition-colors duration-300 uppercase tracking-wide ${montserrat.className}`}>
                {mag.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Articles Section */}
      <div className="mt-8 mb-6 flex items-center gap-4 w-full max-w-[54rem] 2xl:max-w-[80%]">
        <span className={`text-xs uppercase tracking-widest text-zinc-500 whitespace-nowrap ${montserrat.className}`}>
          Online Coverage (Articles)
        </span>
        <div className="flex-1 h-px bg-zinc-800" />
      </div>

      <div
        ref={articlesSectionRef}
        className="w-full relative max-w-[54rem] 2xl:max-w-[80%] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center my-4"
      >
        {articles.map((item) => {
          const { id, image, link, text } = item;
          return (
            <div
              key={id}
              className="flex justify-center items-center flex-col gap-5 my-8"
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Image
                  width={170}
                  height={170}
                  src={image}
                  alt={`article image: ${text}`}
                />
              </a>
              <p className="px-4">{text}</p>
            </div>
          );
        })}
      </div>



      {/* Double-Page Spread Lightbox Modal */}
      {selectedMagazine && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity duration-300">
          <div className="absolute inset-0" onClick={() => setSelectedMagazine(null)} />

          <div className="relative w-full max-w-5xl bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] z-10">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-zinc-900 bg-zinc-950/50 backdrop-blur-md">
              <div>
                <h3 className={`text-lg font-bold text-white uppercase tracking-wider ${montserrat.className}`}>
                  {selectedMagazine.name}
                </h3>
                <p className="text-xs text-zinc-500 tracking-widest uppercase mt-0.5 font-semibold">
                  {selectedMagazine.issue}
                </p>
              </div>
              <div className="flex items-center gap-3">
                {selectedMagazine.externalLink && (
                  <a
                    href={selectedMagazine.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white text-xs font-semibold rounded-full flex items-center gap-2 transition-all duration-300 shadow-md"
                  >
                    <Instagram size={14} />
                    <span className="hidden sm:inline">View on Instagram</span>
                    <ExternalLink size={12} className="sm:hidden" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedMagazine(null)}
                  className="p-2 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-full transition-colors duration-200"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 flex flex-col items-center justify-start md:justify-center">
              {/* Spread layout - stacked on mobile, side-by-side on desktop */}
              {isSinglePage(selectedMagazine) ? (
                /* Single Page Fallback Layout */
                <div className="w-full flex justify-center items-center max-w-md">
                  <div className="w-full flex flex-col items-center justify-center">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2 font-semibold">Feature Image</span>
                    <div
                      onClick={() => { setZoomedImage(selectedMagazine.coverImage); setIsZoomedIn(false); }}
                      className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-zinc-800/80 shadow-2xl cursor-zoom-in hover:opacity-95 transition-opacity duration-300"
                    >
                      {!loadedImages[`modal-${selectedMagazine.id}-cover`] && (
                        <div className="absolute inset-0 bg-zinc-900 animate-pulse flex items-center justify-center">
                          <span className="text-[10px] uppercase tracking-widest text-zinc-600">Loading...</span>
                        </div>
                      )}
                      <Image
                        src={selectedMagazine.coverImage}
                        alt={`${selectedMagazine.name} Spread`}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className={`w-full h-full object-cover ${
                          loadedImages[`modal-${selectedMagazine.id}-cover`] ? 'opacity-100' : 'opacity-0'
                        }`}
                        onLoad={() => handleImageLoad(`modal-${selectedMagazine.id}-cover`)}
                        onError={() => handleImageLoad(`modal-${selectedMagazine.id}-cover`)}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                /* Double Page Layout */
                <div className="w-full flex flex-col items-center justify-center">
                  <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-4xl">
                    {/* Cover Spread */}
                    <div className="w-full md:flex-1 flex flex-col items-center justify-center">
                      <span className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2 font-semibold">
                        {selectedMagazine.isInstagram ? 'Project Photo' : 'Magazine Cover'}
                      </span>
                      <div
                        onClick={() => { setZoomedImage(selectedMagazine.coverImage); setIsZoomedIn(false); }}
                        className="relative w-full max-w-[320px] aspect-[3/4] rounded-lg overflow-hidden border border-zinc-800/80 shadow-2xl cursor-zoom-in hover:opacity-95 transition-opacity duration-300"
                      >
                        {!loadedImages[`modal-${selectedMagazine.id}-cover`] && (
                          <div className="absolute inset-0 bg-zinc-900 animate-pulse flex items-center justify-center">
                            <span className="text-[10px] uppercase tracking-widest text-zinc-600">Loading...</span>
                          </div>
                        )}
                        <Image
                          src={selectedMagazine.coverImage}
                          alt={`${selectedMagazine.name} Cover`}
                          fill
                          sizes="320px"
                          className={`w-full h-full object-cover ${
                            loadedImages[`modal-${selectedMagazine.id}-cover`] ? 'opacity-100' : 'opacity-0'
                          }`}
                          onLoad={() => handleImageLoad(`modal-${selectedMagazine.id}-cover`)}
                          onError={() => handleImageLoad(`modal-${selectedMagazine.id}-cover`)}
                        />
                      </div>
                    </div>

                    {/* Featured page rendering */}
                    {selectedMagazine.featuredImages[activeFeaturedIndex] && (
                      <>
                        {/* Vertical Divider */}
                        <div className="hidden md:block w-px self-stretch bg-zinc-800/60 my-4" />

                        {/* Feature Spread */}
                        <div className="w-full md:flex-1 flex flex-col items-center justify-center">
                          <span className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2 font-semibold">
                            {selectedMagazine.isInstagram
                              ? 'Instagram Post & Caption'
                              : `Featured Page ${selectedMagazine.featuredImages.length > 1 ? activeFeaturedIndex + 1 : ''}`}
                          </span>
                          <div
                            onClick={() => { setZoomedImage(selectedMagazine.featuredImages[activeFeaturedIndex]); setIsZoomedIn(false); }}
                            className="relative w-full max-w-[320px] aspect-[3/4] rounded-lg overflow-hidden border border-zinc-800/80 shadow-2xl cursor-zoom-in hover:opacity-95 transition-opacity duration-300"
                          >
                            {!loadedImages[`modal-${selectedMagazine.id}-feature-${activeFeaturedIndex}`] && (
                              <div className="absolute inset-0 bg-zinc-900 animate-pulse flex items-center justify-center">
                                <span className="text-[10px] uppercase tracking-widest text-zinc-600">Loading...</span>
                              </div>
                            )}
                            <Image
                              src={selectedMagazine.featuredImages[activeFeaturedIndex]}
                              alt={`${selectedMagazine.name} Feature ${activeFeaturedIndex + 1}`}
                              fill
                              sizes="320px"
                              className={`w-full h-full object-cover ${
                                loadedImages[`modal-${selectedMagazine.id}-feature-${activeFeaturedIndex}`] ? 'opacity-100' : 'opacity-0'
                              }`}
                              onLoad={() => handleImageLoad(`modal-${selectedMagazine.id}-feature-${activeFeaturedIndex}`)}
                              onError={() => handleImageLoad(`modal-${selectedMagazine.id}-feature-${activeFeaturedIndex}`)}
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Spread Thumbnails / Navigation if multiple pages */}
                  {selectedMagazine.featuredImages.length > 1 && (
                    <div className="mt-8 flex items-center justify-center gap-4">
                      <button
                        onClick={() =>
                          setActiveFeaturedIndex((prev) => (prev > 0 ? prev - 1 : selectedMagazine.featuredImages.length - 1))
                        }
                        className="p-2 rounded-full bg-zinc-950 border border-zinc-800 hover:text-white text-zinc-400 transition-colors"
                        aria-label="Previous page"
                      >
                        <ChevronLeft size={16} />
                      </button>

                      <div className="flex items-center gap-2">
                        {selectedMagazine.featuredImages.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveFeaturedIndex(idx)}
                            className={`relative w-10 h-14 rounded overflow-hidden transition-all duration-300 ${
                              activeFeaturedIndex === idx
                                ? 'ring-2 ring-pink-700 scale-105 border-transparent'
                                : 'opacity-50 hover:opacity-100 border border-zinc-800'
                            }`}
                          >
                            <Image
                              src={img}
                              alt={`Spread page ${idx + 1}`}
                              fill
                              sizes="40px"
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() =>
                          setActiveFeaturedIndex((prev) => (prev < selectedMagazine.featuredImages.length - 1 ? prev + 1 : 0))
                        }
                        className="p-2 rounded-full bg-zinc-950 border border-zinc-800 hover:text-white text-zinc-400 transition-colors"
                        aria-label="Next page"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Zoomed Full View Image Popup */}
      {zoomedImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm transition-opacity duration-300">
          <div className="absolute inset-0 cursor-zoom-out" onClick={closeZoom} />

          <div className="relative w-full max-w-5xl max-h-[90vh] z-10 flex flex-col items-center justify-center">
            {/* Top Bar with Counter and Close Button */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
              {magazineImages.length > 1 && currentZoomIndex !== -1 ? (
                <div className="px-3.5 py-1.5 bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 text-zinc-300 text-xs uppercase tracking-widest font-semibold rounded-full shadow-lg pointer-events-auto">
                  {currentZoomIndex + 1} / {magazineImages.length}
                </div>
              ) : <div />}

              <button
                onClick={closeZoom}
                className="p-2 text-zinc-400 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 rounded-full transition-colors duration-200 shadow-lg pointer-events-auto"
                aria-label="Close zoom view"
              >
                <X size={20} />
              </button>
            </div>

            {/* Left Navigation Arrow */}
            {magazineImages.length > 1 && (
              <button
                onClick={prevZoomImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 text-zinc-300 hover:text-white bg-zinc-950/80 hover:bg-zinc-900 border border-zinc-800/80 rounded-full transition-all duration-200 shadow-2xl backdrop-blur-md z-20 group cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
              </button>
            )}

            {/* Right Navigation Arrow */}
            {magazineImages.length > 1 && (
              <button
                onClick={nextZoomImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 text-zinc-300 hover:text-white bg-zinc-950/80 hover:bg-zinc-900 border border-zinc-800/80 rounded-full transition-all duration-200 shadow-2xl backdrop-blur-md z-20 group cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            )}

            {/* Responsive containment of image with hover panning zoom */}
            <div
              ref={zoomContainerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => isZoomedIn && setMousePos({ x: 0.5, y: 0.5 })}
              className="relative w-[90vw] h-[80vh] max-w-4xl max-h-[80vh] overflow-hidden select-none rounded-lg bg-black/20"
            >
              <div
                onClick={() => setIsZoomedIn(!isZoomedIn)}
                style={{
                  transformOrigin: isZoomedIn ? `${mousePos.x * 100}% ${mousePos.y * 100}%` : 'center',
                  transition: isZoomedIn ? 'transform 0.25s ease-out' : 'transform 0.3s ease-out, transform-origin 0.3s ease-out',
                }}
                className={`relative w-full h-full ${isZoomedIn ? 'scale-[1.8] cursor-zoom-out' : 'scale-100 cursor-zoom-in'
                  }`}
              >
                <Image
                  src={zoomedImage}
                  alt="Full View Publication"
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
