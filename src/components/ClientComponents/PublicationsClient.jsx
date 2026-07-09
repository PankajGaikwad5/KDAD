'use client';

import { useEffect, useRef, useState, Fragment } from 'react';
import gsap from 'gsap';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import { X, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '600', '700'],
});

const localMagazines = [
  {
    id: 1,
    name: 'Cover',
    issue: 'June 2026 Issue',
    coverImage: '/mags/cover1.webp',
    featuredImages: ['/mags/cover2.webp', '/mags/cover3.webp'],
    description: 'A special feature showcasing the unique design details across multiple editorial spreads.',
  },
  {
    id: 2,
    name: 'India Today Home',
    issue: 'June 2026 Issue',
    coverImage: '/mags/ithome1.webp',
    featuredImages: ['/mags/ithome2.webp'],
    description: 'Featuring the custom KDH Marble Console collection and minimal design aesthetics in a high-end luxury residence.',
  },
  {
    id: 3,
    name: 'Architects Fortune India',
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

  const [selectedMagazine, setSelectedMagazine] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const [zoomedImage, setZoomedImage] = useState(null);
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const zoomContainerRef = useRef(null);
  const [activeFeaturedIndex, setActiveFeaturedIndex] = useState(0);

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
      if (e.key === 'Escape') {
        if (zoomedImage) {
          closeZoom();
        } else if (selectedMagazine) {
          setSelectedMagazine(null);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [zoomedImage, selectedMagazine]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      const magItems = magazinesRef.current?.children;
      if (magItems?.length) {
        tl.fromTo(
          magItems,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.03, ease: 'power2.out' }
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

  const allMagazines = [...normalizedLocal, ...normalizedFeatures];

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
        {allMagazines.map((mag) => (
          <div
            key={mag.id}
            onClick={() => selectMagazine(mag)}
            className="group cursor-pointer relative flex flex-col rounded-xl overflow-hidden bg-zinc-950/40 border border-zinc-900 transition-all duration-500 hover:border-zinc-700/80 hover:shadow-2xl hover:shadow-white/[0.01]"
          >
            {/* Image Aspect ratio 3/4 */}
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-zinc-900">
              {!loadedImages[`mag-${mag.id}-cover`] && (
                <div className="absolute inset-0 bg-zinc-900 animate-pulse flex items-center justify-center">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-600">Loading...</span>
                </div>
              )}
              <img
                src={mag.coverImage}
                alt={`${mag.name} Cover`}
                className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                  loadedImages[`mag-${mag.id}-cover`] ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => handleImageLoad(`mag-${mag.id}-cover`)}
                onError={() => handleImageLoad(`mag-${mag.id}-cover`)}
                loading="lazy"
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
              <button
                onClick={() => setSelectedMagazine(null)}
                className="p-2 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-full transition-colors duration-200"
                aria-label="Close"
              >
                <X size={18} />
              </button>
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
                      <img
                        src={selectedMagazine.coverImage}
                        alt={`${selectedMagazine.name} Spread`}
                        className={`w-full h-full object-cover ${
                          loadedImages[`modal-${selectedMagazine.id}-cover`] ? 'opacity-100' : 'opacity-0'
                        }`}
                        onLoad={() => handleImageLoad(`modal-${selectedMagazine.id}-cover`)}
                        onError={() => handleImageLoad(`modal-${selectedMagazine.id}-cover`)}
                        loading="lazy"
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
                      <span className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2 font-semibold">Magazine Cover</span>
                      <div
                        onClick={() => { setZoomedImage(selectedMagazine.coverImage); setIsZoomedIn(false); }}
                        className="relative w-full max-w-[320px] aspect-[3/4] rounded-lg overflow-hidden border border-zinc-800/80 shadow-2xl cursor-zoom-in hover:opacity-95 transition-opacity duration-300"
                      >
                        {!loadedImages[`modal-${selectedMagazine.id}-cover`] && (
                          <div className="absolute inset-0 bg-zinc-900 animate-pulse flex items-center justify-center">
                            <span className="text-[10px] uppercase tracking-widest text-zinc-600">Loading...</span>
                          </div>
                        )}
                        <img
                          src={selectedMagazine.coverImage}
                          alt={`${selectedMagazine.name} Cover`}
                          className={`w-full h-full object-cover ${
                            loadedImages[`modal-${selectedMagazine.id}-cover`] ? 'opacity-100' : 'opacity-0'
                          }`}
                          onLoad={() => handleImageLoad(`modal-${selectedMagazine.id}-cover`)}
                          onError={() => handleImageLoad(`modal-${selectedMagazine.id}-cover`)}
                          loading="lazy"
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
                            Featured Page {selectedMagazine.featuredImages.length > 1 ? activeFeaturedIndex + 1 : ''}
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
                            <img
                              src={selectedMagazine.featuredImages[activeFeaturedIndex]}
                              alt={`${selectedMagazine.name} Feature ${activeFeaturedIndex + 1}`}
                              className={`w-full h-full object-cover ${
                                loadedImages[`modal-${selectedMagazine.id}-feature-${activeFeaturedIndex}`] ? 'opacity-100' : 'opacity-0'
                              }`}
                              onLoad={() => handleImageLoad(`modal-${selectedMagazine.id}-feature-${activeFeaturedIndex}`)}
                              onError={() => handleImageLoad(`modal-${selectedMagazine.id}-feature-${activeFeaturedIndex}`)}
                              loading="lazy"
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
                            className={`w-10 h-14 rounded overflow-hidden transition-all duration-300 ${
                              activeFeaturedIndex === idx
                                ? 'ring-2 ring-pink-700 scale-105 border-transparent'
                                : 'opacity-50 hover:opacity-100 border border-zinc-800'
                            }`}
                          >
                            <img src={img} className="w-full h-full object-cover" alt={`Spread page ${idx + 1}`} />
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
            {/* Close Button */}
            <button
              onClick={closeZoom}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-full transition-colors duration-200 z-20"
              aria-label="Close zoom view"
            >
              <X size={20} />
            </button>

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
                <img
                  src={zoomedImage}
                  alt="Full View Publication"
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
