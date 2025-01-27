'use client';

import React from 'react';
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

  return (
    <div className='relative w-full max-w-screen-lg mx-auto'>
      {/* Main Carousel */}
      <Swiper
        lazy={'true'}
        modules={[Navigation, Thumbs, Pagination, A11y, Zoom, Keyboard]}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={10}
        slidesPerView={1}
        className='w-full h-[60vh] md:h-[70vh]'
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
                loading='lazy' // Lazy load images
                className='max-w-full max-h-full object-contain'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Navigation */}
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        className='mt-4 w-full'
        lazy={'true'}
      >
        {imgArray.map((img, index) => (
          <SwiperSlide key={index}>
            <div className='w-full h-20 md:h-24 flex items-center justify-center'>
              <img
                src={img}
                alt={`Thumbnail ${index}`}
                className='w-full h-full object-cover cursor-pointer rounded-lg'
                loading='lazy' // Lazy load thumbnails
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselComp;
