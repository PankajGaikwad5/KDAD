'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize, X } from 'lucide-react';
import { createPortal } from 'react-dom';

const MediaRenderer = React.memo(({ url, alt, onLoad }) => {
  const isVideo = /\.(mp4|webm|ogg)$/i.test(url);

  return isVideo ? (
    <video
      src={url}
      controls
      className='absolute inset-0 w-full h-full object-contain pointer-events-none'
      playsInline
      preload='metadata'
      onLoadedData={onLoad}
    />
  ) : (
    <motion.img
      decoding="async"
      loading="eager"
      src={url}
      alt={alt}
      className="absolute inset-0 w-full h-full object-contain pointer-events-none"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
      onLoad={onLoad}
      style={{ willChange: "opacity, transform" }}
    />
  );
});
MediaRenderer.displayName = 'MediaRenderer';

const CarouselComp = ({ imgArray, notcollab }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const carouselRef = useRef(null);
  const thumbRefs = useRef([]);
  const [bgNode, setBgNode] = useState(null);

  useEffect(() => {
    if (imgArray?.length) {
      setImageLoading(false);
    }
  }, [imgArray]);

  useEffect(() => {
    // Find the project-bg container in the parent page to mount the dynamic background
    setBgNode(document.querySelector('.project-bg'));
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      carouselRef.current?.requestFullscreen?.().catch(console.error);
    } else {
      document.exitFullscreen?.();
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const nextImage = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % imgArray.length);
  }, [imgArray?.length]);

  const prevImage = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + imgArray.length) % imgArray.length);
  }, [imgArray?.length]);

  // Centering active thumbnail
  useEffect(() => {
    const activeThumb = thumbRefs.current[activeIndex];
    if (activeThumb && !isFullscreen) {
      const container = activeThumb.parentElement;
      if (container) {
        const containerWidth = container.clientWidth;
        const thumbLeft = activeThumb.offsetLeft;
        const thumbWidth = activeThumb.clientWidth;
        container.scrollTo({
          left: thumbLeft - containerWidth / 2 + thumbWidth / 2,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex, isFullscreen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'Escape' && isFullscreen) {
        if (document.fullscreenElement) {
          document.exitFullscreen?.();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, nextImage, prevImage]);

  if (!imgArray?.length) {
    return (
      <div className='w-full h-[60vh] flex items-center justify-center'>
        <p>No images available</p>
      </div>
    );
  }

  return (
    <div
      className={`relative flex flex-col ${
        isFullscreen
          ? 'fixed inset-0 z-[100] w-screen h-screen bg-black'
          : 'w-full h-full flex-1 min-h-0'
      }`}
      ref={carouselRef}
    >
      {bgNode && createPortal(
        <AnimatePresence>
          <motion.img
            key={activeIndex}
            src={imgArray[activeIndex]}
            alt="Dynamic Background"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ willChange: "opacity", transform: "translateZ(0)" }}
          />
        </AnimatePresence>,
        bgNode
      )}

      {imageLoading && (
        <div className='absolute inset-0 flex items-center justify-center z-30 bg-black/50'>
          <div className='flex flex-col items-center gap-4'>
            <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-white'></div>
            <p className='text-sm text-gray-400'>Loading...</p>
          </div>
        </div>
      )}

      {/* Main Image Container */}
      <div className={`relative w-full select-none ${isFullscreen ? 'h-full' : 'flex-1 min-h-0'}`}>
        <AnimatePresence mode="wait">
          <MediaRenderer
            key={activeIndex}
            url={imgArray[activeIndex]}
            alt={`Slide ${activeIndex + 1}`}
          />
        </AnimatePresence>

        <button
          onClick={prevImage}
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/40 hover:bg-black/75 border border-white/20 text-white rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 flex items-center justify-center select-none cursor-pointer`}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextImage}
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/40 hover:bg-black/75 border border-white/20 text-white rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 flex items-center justify-center select-none cursor-pointer`}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        <button
          onClick={toggleFullscreen}
          className='absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/75 transition-colors text-white'
          aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
        >
          {isFullscreen ? <X size={24} /> : <Maximize size={24} />}
        </button>

        <div className='absolute top-4 left-4 md:left-auto md:right-16 z-10 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium select-none'>
          {activeIndex + 1} / {imgArray.length}
        </div>
      </div>

      {/* Thumbnails */}
      {notcollab && imgArray?.length > 1 && !isFullscreen && (
        <div className="bottom-4 left-0 right-0 z-20 px-4 mt-2 sm:mt-4">
          <div className={`relative flex gap-[10px] overflow-x-auto py-2 scroll-smooth select-none scrollbar-none [&::-webkit-scrollbar]:hidden`} style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch", willChange: "transform" }}>
            {imgArray.map((img, idx) => (
              <button
                key={idx}
                ref={(el) => (thumbRefs.current[idx] = el)}
                onClick={() => setActiveIndex(idx)}
                style={{ contentVisibility: "auto" }}
                className={`relative w-[120px] h-16 md:h-20 shrink-0 overflow-hidden rounded transition-opacity duration-200 cursor-pointer ${
                  idx === activeIndex ? 'border-2 border-white opacity-100' : 'border-2 border-transparent opacity-60 hover:opacity-85'
                }`}
              >
                {/\.(mp4|webm|ogg)$/i.test(img) ? (
                   <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white text-[10px] tracking-widest uppercase">Video</div>
                ) : (
                  <img src={img} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover pointer-events-none" alt={`Thumb ${idx}`} />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(CarouselComp);

