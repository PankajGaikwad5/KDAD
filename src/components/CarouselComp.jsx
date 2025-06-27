'use client';

import React, { useEffect, useState, useCallback, useRef, memo } from 'react';
import dynamic from 'next/dynamic';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';
import 'swiper/css/pagination';
import 'swiper/css/virtual';

// Dynamically import Swiper modules to reduce initial JS
const SwiperCore = dynamic(
  () =>
    import('swiper').then((mod) => {
      mod.Virtual.use([
        mod.Navigation,
        mod.Thumbs,
        mod.Pagination,
        mod.Zoom,
        mod.Keyboard,
      ]);
      return mod;
    }),
  { ssr: false }
);
const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), {
  ssr: false,
});
const SwiperSlide = dynamic(
  () => import('swiper/react').then((mod) => mod.SwiperSlide),
  { ssr: false }
);
const Image = dynamic(() => import('next/image'), { ssr: false });

// Static image renderer optimized for Next.js
const ImageRenderer = ({ url, alt, priority }) => (
  <Image
    src={url}
    alt={alt}
    fill
    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw'
    quality={75}
    placeholder='blur'
    blurDataURL='/placeholder-blur.png'
    priority={priority}
    style={{ objectFit: 'contain' }}
  />
);

// Memoized media renderer
const MediaRenderer = memo(({ url, alt, priority }) => {
  // Video if extension indicates; skip HEAD for images
  if (/\.(mp4|webm|ogg)$/i.test(url)) {
    return (
      <video
        src={url}
        controls
        className='max-w-full max-h-full object-contain'
      />
    );
  }
  return <ImageRenderer url={url} alt={alt} priority={priority} />;
});

const CarouselComp = ({ imgArray = [], notcollab = false }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const onSlideChange = useCallback(
    (swiper) => setCurrentIndex(swiper.realIndex),
    []
  );
  const onSwiperInit = useCallback(
    (swiper) => setCurrentIndex(swiper.realIndex),
    []
  );

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      carouselRef.current.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  useEffect(() => {
    const onFull = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFull);
    return () => document.removeEventListener('fullscreenchange', onFull);
  }, []);

  return (
    <div
      className={`${
        isFullscreen ? 'w-screen h-screen' : 'w-screen max-w-screen-lg m-0 p-0'
      }`}
      ref={carouselRef}
    >
      <button
        onClick={toggleFullscreen}
        className='absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/75 transition-colors'
        aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
      >
        {/* SVG icons */}
      </button>

      <div className='absolute top-4 left-4 md:left-auto md:right-16 z-10 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium select-none'>
        {currentIndex + 1} / {imgArray.length}
      </div>

      <Swiper
        ref={carouselRef}
        modules={[
          Navigation,
          Thumbs,
          Pagination,
          A11y,
          Zoom,
          Keyboard,
          Virtual,
        ]}
        virtual
        lazy={{
          enabled: true,
          loadPrevNext: true,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: true,
        }}
        preloadImages={false}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={10}
        slidesPerView={1}
        zoom
        keyboard={{ enabled: true, onlyInViewport: true }}
        pagination={{ clickable: true }}
        onSlideChange={onSlideChange}
        onSwiper={onSwiperInit}
        className={`${isFullscreen ? 'h-[100vh]' : 'h-[60vh] md:h-[70vh]'}`}
      >
        {imgArray.map((url, idx) => (
          <SwiperSlide key={idx} virtualIndex={idx}>
            <div className='w-full h-full swiper-zoom-container flex items-center justify-center'>
              <MediaRenderer
                url={url}
                alt={`Slide ${idx}`}
                priority={idx === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {notcollab && (
        <ClientOnly>
          <div
            className={`${
              isFullscreen ? 'hidden' : 'mt-2 sm:mt-4'
            } bottom-4 left-0 right-0 z-20 px-4`}
          >
            <Swiper
              modules={[Thumbs, Virtual]}
              virtual
              onSwiper={setThumbsSwiper}
              spaceBetween={isFullscreen ? 8 : 10}
              slidesPerView={isFullscreen ? 8 : 5}
              watchSlidesProgress
              freeMode
              className='thumbnail-swiper'
            >
              {imgArray.map((url, idx) => (
                <SwiperSlide key={idx} virtualIndex={idx}>
                  <div className='flex items-center h-20 md:h-24 justify-center cursor-pointer transition-all'>
                    <ImageRenderer
                      url={url}
                      alt={`Thumbnail ${idx}`}
                      priority={idx === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </ClientOnly>
      )}

      <style jsx global>{`
        .swiper-slide,
        .swiper-zoom-container {
          backface-visibility: hidden;
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
};

export default CarouselComp;

// ClientOnly wrapper to defer non-critical UI
function ClientOnly({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? children : null;
}
