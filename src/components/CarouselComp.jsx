// 'use client';

// import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import {
//   Navigation,
//   Thumbs,
//   Pagination,
//   A11y,
//   Zoom,
//   Keyboard,
// } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';
// import 'swiper/css/zoom';
// import 'swiper/css/pagination';

// const CarouselComp = ({ imgArray }) => {
//   const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
//   const [thumbnail, setThumbnail] = useState(false);

//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     setThumbnail(true);
//   //   }, 2000);
//   // }, []);

//   return (
//     <div className='relative w-full max-w-screen-lg mx-auto'>
//       {/* Main Carousel */}
//       <Swiper
//         lazy={'true'}
//         modules={[Navigation, Thumbs, Pagination, A11y, Zoom, Keyboard]}
//         navigation
//         thumbs={{ swiper: thumbsSwiper }}
//         spaceBetween={10}
//         slidesPerView={1}
//         className='w-full h-[60vh] md:h-[70vh]'
//         pagination={{ clickable: true }}
//         zoom={true}
//         keyboard={{ enabled: true, onlyInViewport: true }}
//       >
//         {imgArray.map((img, index) => (
//           <SwiperSlide key={index}>
//             <div className='w-full h-full swiper-zoom-container flex items-center justify-center'>
//               <img
//                 src={img}
//                 alt={`Slide ${index}`}
//                 loading='lazy' // Lazy load images
//                 className='max-w-full max-h-full object-contain'
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Thumbnail Navigation */}
//       {/* {thumbnail && ( */}
//       <Swiper
//         modules={[Thumbs]}
//         onSwiper={setThumbsSwiper}
//         spaceBetween={10}
//         slidesPerView={5}
//         className='mt-4 w-full'
//         lazy={'true'}
//       >
//         {imgArray.map((img, index) => (
//           <SwiperSlide key={index}>
//             <div className='w-full h-20 md:h-24 flex items-center justify-center'>
//               <img
//                 src={img}
//                 alt={`Thumbnail ${index}`}
//                 className='w-full h-full object-cover cursor-pointer rounded-lg'
//                 loading='lazy' // Lazy load the image
//                 sizes='(max-width: 480px) 150px, (max-width: 800px) 300px, 300px' // Sizes based on screen width
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       {/* )} */}
//     </div>
//   );
// };

// export default CarouselComp;

'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Thumbs,
  Pagination,
  A11y,
  Zoom,
  Keyboard,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';
import 'swiper/css/pagination';

const CarouselComp = ({ imgArray }) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const carouselRef = React.useRef(null);

  // Fullscreen toggle handler
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      carouselRef.current.requestFullscreen?.().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen?.();
    }
  };

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

  return (
    <div
      className={`relative ${
        isFullscreen ? 'w-screen h-screen' : 'w-full max-w-screen-lg m-0 p-0'
      }`}
      ref={carouselRef}
    >
      {/* Fullscreen Button */}
      <button
        onClick={toggleFullscreen}
        className='absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/75 transition-colors hidden sm:block'
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

      {/* Thumbnail Navigation - Positioned above main carousel */}
      <div
        className={`absolute bottom-4 left-0 right-0 z-20 px-4 hidden sm:block ${
          isFullscreen ? 'opacity-75 hover:opacity-100 transition-opacity' : ''
        }`}
      >
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          spaceBetween={isFullscreen ? 8 : 10}
          slidesPerView={isFullscreen ? 8 : 5}
          className='thumbnail-swiper'
          lazy={'true'}
          watchSlidesProgress
        >
          {imgArray.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className={`
                  ${
                    // isFullscreen
                    //   ? 'h-16 w-16 p-1 bg-white/10 backdrop-blur-sm rounded-lg'
                    //   : 'h-20 md:h-24'
                    ''
                  }
                 flex items-center h-20 md:h-24 justify-center cursor-pointer transition-all`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className={`w-full h-full object-cover rounded ${
                    isFullscreen ? 'border-2 border-white/20' : ''
                  }`}
                  loading='lazy'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Main Carousel */}
      <Swiper
        lazy={'true'}
        modules={[Navigation, Thumbs, Pagination, A11y, Zoom, Keyboard]}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={10}
        slidesPerView={1}
        className={`w-full ${
          isFullscreen ? 'h-[calc(100vh)]' : 'h-[60vh] md:h-[70vh]'
        }`}
        pagination={{ clickable: true }}
        zoom={true}
        keyboard={{ enabled: true, onlyInViewport: true }}
      >
        {imgArray.map((img, index) => (
          <SwiperSlide key={index}>
            <div className='w-full h-full swiper-zoom-container flex items-center justify-center'>
              <img
                src={img}
                alt={`Slide ${index}`}
                loading='lazy'
                className='max-w-full max-h-full object-contain'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Navigation */}
      <div className='sm:hidden'>
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={5}
          className='mt-4 w-full h-24 absolute top-0 z-30'
          lazy={'true'}
        >
          {imgArray.map((img, index) => (
            <SwiperSlide key={index}>
              <div className='w-full h-full flex items-center justify-center'>
                <img
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className='w-full h-full object-cover cursor-pointer rounded-lg'
                  loading='lazy'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselComp;
