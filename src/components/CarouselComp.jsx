'use client';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { Card, CardContent } from './ui/card';

const CarouselComp = ({ imgArray }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className=' max-w-lg mx-auto'>
      {/* Main Carousel */}
      <Carousel
        className='w-full'
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
          className='transition-transform duration-500'
        >
          {imgArray.map((img, index) => (
            <CarouselItem key={index}>
              <div className='w-full'>
                <Card>
                  <CardContent className='flex items-center justify-center'>
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className='w-full h-auto rounded-lg'
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          onClick={() =>
            setCurrentIndex((prev) =>
              prev > 0 ? prev - 1 : imgArray.length - 1
            )
          }
        />
        <CarouselNext
          onClick={() =>
            setCurrentIndex((prev) =>
              prev < imgArray.length - 1 ? prev + 1 : 0
            )
          }
        />
      </Carousel>

      {/* Thumbnails */}
      <div className='flex mt-4 gap-2 justify-center'>
        {imgArray.map((img, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`w-16 h-16 overflow-hidden rounded-lg border-2 ${
              currentIndex === index ? 'border-blue-500' : 'border-transparent'
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className='w-full h-full object-cover'
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarouselComp;
