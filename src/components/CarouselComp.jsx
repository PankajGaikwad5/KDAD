'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Thumbs,
  Pagination,
  A11y,
  Zoom,
  Keyboard,
  Virtual,
  FreeMode,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';
import 'swiper/css/pagination';
import 'swiper/css/virtual';
import 'swiper/css/free-mode';

// Optimized MediaRenderer with memoization
const MediaRenderer = React.memo(({ url, alt }) => {
  // Simplified media type detection using file extensions
  const isVideo = /\.(mp4|webm|ogg)$/i.test(url);

  return isVideo ? (
    <video
      src={url}
      controls
      className='max-w-full max-h-full object-contain'
      playsInline
      preload='metadata'
    />
  ) : (
    <img
      src={url}
      alt={alt}
      loading='lazy'
      className='max-w-full max-h-full object-contain select-none'
      decoding='async'
    />
  );
});
MediaRenderer.displayName = 'MediaRenderer';

const CarouselComp = ({ imgArray, notcollab }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = React.useRef(null);

  // Fullscreen toggle handler
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      carouselRef.current?.requestFullscreen?.().catch(console.error);
    } else {
      document.exitFullscreen?.();
    }
  }, []);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Optimized thumbnail rendering
  const renderThumbnails = useCallback(() => {
    if (!notcollab) return null;

    return (
      <div
        className={`bottom-4 left-0 right-0 z-20 px-4 ${
          isFullscreen ? 'hidden' : 'mt-2 sm:mt-4'
        }`}
      >
        <Swiper
          modules={[Thumbs, Virtual, FreeMode]}
          onSwiper={setThumbsSwiper}
          spaceBetween={isFullscreen ? 8 : 10}
          slidesPerView={isFullscreen ? 8 : 5}
          className='thumbnail-swiper'
          watchSlidesProgress
          virtual
          freeMode={{
            enabled: true,
            momentum: true,
            momentumBounce: false,
            minimumVelocity: 0.1,
          }}
          breakpoints={{
            640: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: isFullscreen ? 10 : 8,
            },
          }}
        >
          {imgArray.map((img, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <div className='flex items-center h-20 md:h-24 justify-center cursor-pointer'>
                <img
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className={`w-full h-full object-cover rounded transition-opacity ${
                    currentIndex === index
                      ? 'opacity-100 border-2 border-white'
                      : 'opacity-60'
                  }`}
                  loading='lazy'
                  decoding='async'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }, [notcollab, isFullscreen, imgArray, currentIndex]);

  return (
    <div
      className={`relative ${
        isFullscreen
          ? 'w-screen h-screen'
          : 'w-screen max-w-screen-lg 2xl:max-w-none m-0 p-0'
      }`}
      ref={carouselRef}
    >
      {/* Fullscreen Button */}
      <button
        onClick={toggleFullscreen}
        className='absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/75 transition-colors'
        aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
      >
        {isFullscreen ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-white'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-white'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4'
            />
          </svg>
        )}
      </button>

      {/* Slide Counter */}
      <div className='absolute top-4 left-4 md:left-auto md:right-16 z-10 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium select-none'>
        {currentIndex + 1} / {imgArray.length}
      </div>

      {/* Main Carousel */}
      <Swiper
        modules={[
          Navigation,
          Thumbs,
          Pagination,
          A11y,
          Zoom,
          Keyboard,
          Virtual,
        ]}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={10}
        slidesPerView={1}
        className={`w-full ${
          isFullscreen ? 'h-[100vh]' : 'h-[60vh] md:h-[70vh]'
        }`}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 5,
        }}
        zoom={{
          maxRatio: 3,
          minRatio: 1,
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        onSwiper={(swiper) => setCurrentIndex(swiper.realIndex)}
        speed={500}
        virtual
      >
        {imgArray.map((img, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <div className='w-full h-full swiper-zoom-container flex items-center justify-center'>
              <MediaRenderer url={img} alt={`Slide ${index}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Navigation */}
      {renderThumbnails()}
    </div>
  );
};

export default React.memo(CarouselComp);
