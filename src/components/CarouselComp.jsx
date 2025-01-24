// 'use client';
// import React, { useState } from 'react';
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from './ui/carousel';
// import { Card, CardContent } from './ui/card';

// const CarouselComp = ({ imgArray }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleThumbnailClick = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className=' max-w-lg max-h-[32rem] mx-auto '>
//       {/* Main Carousel */}
//       <Carousel
//         className='w-full'
//         opts={{
//           align: 'start',
//           loop: true,
//         }}
//       >
//         <CarouselContent
//           style={{
//             transform: `translateX(-${currentIndex * 100}%)`,
//           }}
//           className='transition-transform duration-500'
//         >
//           {imgArray.map((item, index) => (
//             <CarouselItem key={item._id}>
//               <div className='w-full'>
//                 <Card>
//                   <CardContent className='flex items-center justify-center'>
//                     <a href={item.fileUrl} target='_blank'>
//                       <img
//                         loading='lazy'
//                         src={item.fileUrl}
//                         alt={`Slide ${index + 1}`}
//                         className='aspect-video rounded-lg'
//                         decoding='async'
//                       />
//                     </a>
//                   </CardContent>
//                 </Card>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious
//           onClick={() =>
//             setCurrentIndex((prev) =>
//               prev > 0 ? prev - 1 : imgArray.length - 1
//             )
//           }
//         />
//         <CarouselNext
//           onClick={() =>
//             setCurrentIndex((prev) =>
//               prev < imgArray.length - 1 ? prev + 1 : 0
//             )
//           }
//         />
//       </Carousel>

//       {/* Thumbnails */}
//       <div className='flex mt-4 gap-2 justify-center'>
//         {imgArray.map((item, index) => (
//           <button
//             key={index}
//             onClick={() => handleThumbnailClick(index)}
//             className={`w-16 h-16 overflow-hidden rounded-lg border-2 ${
//               currentIndex === index ? 'border-blue-500' : 'border-transparent'
//             }`}
//           >
//             <img
//               src={item.fileUrl}
//               alt={`Thumbnail ${index + 1}`}
//               className='w-full h-full object-cover'
//             />
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CarouselComp;

'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Thumbs,
  Pagination,
  Scrollbar,
  A11y,
  Zoom,
  Keyboard,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const CarouselComp = ({ imgArray }) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  return (
    <div className='relative w-full max-w-screen-lg  mx-auto'>
      {/* Main Carousel */}
      <Swiper
        lazy={'true'}
        modules={[
          Navigation,
          Thumbs,
          Pagination,
          Scrollbar,
          A11y,
          Zoom,
          Keyboard,
        ]}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={10}
        slidesPerView={1}
        className='w-full h-[60vh] md:h-[70vh]'
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        zoom={true}
        keyboard={{ enabled: true, onlyInViewport: true }}
      >
        {imgArray.map((img, index) => (
          <SwiperSlide key={index}>
            <div className='w-full h-full swiper-zoom-container flex items-center justify-center'>
              <img
                src={img}
                alt={`Slide ${index}`}
                className='max-w-full max-h-full object-contain'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Navigation */}
      <Swiper
        lazy={'true'}
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        className='mt-4 w-full'
        scrollbar={{ draggable: true }}
      >
        {imgArray.map((img, index) => (
          <SwiperSlide key={index}>
            <div className='w-full h-20 md:h-24 flex items-center justify-center'>
              <img
                src={img}
                alt={`Thumbnail ${index}`}
                className='w-full h-full object-cover cursor-pointer rounded-lg'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselComp;
