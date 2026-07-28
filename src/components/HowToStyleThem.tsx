'use client';

import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Button } from './ui/Button';
import { PlusIcon } from './icons';

export type StyleSlide = {
  image: string;
  alt: string;
};

const SLIDES: StyleSlide[] = [
  { image: '/images/how-to-style/1.jpg', alt: 'Style look 1' },
  { image: '/images/how-to-style/2.jpg', alt: 'Style look 2' },
  { image: '/images/how-to-style/3.jpg', alt: 'Style look 3' },
  { image: '/images/how-to-style/4.jpg', alt: 'Style look 4' },
  { image: '/images/how-to-style/5.jpg', alt: 'Style look 5' },
  { image: '/images/how-to-style/6.jpg', alt: 'Style look 6' },
  { image: '/images/how-to-style/7.jpg', alt: 'Style look 7' },
  { image: '/images/how-to-style/8.jpg', alt: 'Style look 8' },
  { image: '/images/how-to-style/9.jpg', alt: 'Style look 9' },
  { image: '/images/how-to-style/10.jpg', alt: 'Style look 10' },
  { image: '/images/how-to-style/11.jpg', alt: 'Style look 11' },
  { image: '/images/how-to-style/12.jpg', alt: 'Style look 12' },
];

export default function HowToStyleThem() {
  const slides = SLIDES;
  return (
    <section className="relative w-full bg-primary mt-30">
      <div className="px-4 absolute md:px-17.5 z-10 -top-21.25">
        <div className="flex items-center justify-center">
          <h1 className="font-roboto-condensed text-[65px] xs:text-6xl leading-3 sm:text-7xl md:text-8xl text-primary select-none uppercase font-bold">
            <div className="tracking-[-4px] w-fit bg-black leading-11 md:leading-16.25">
              HOW TO
            </div>
            <br />
            <div className="tracking-[-4px] w-fit bg-black leading-11 md:leading-16.25">
              STYLE THEM
            </div>
          </h1>
        </div>
      </div>

      {/* Swiper slides */}
      <Swiper
        modules={[FreeMode]}
        freeMode
        grabCursor
        slidesPerView="auto"
        spaceBetween={0}
        className="pb-10 md:px-17.5 md:pb-20"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="w-81.75! md:w-[calc((100%-7.5rem)/4)]! h-123.5!"
          >
            <div className="relative w-full h-full overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-gray-700 via-gray-500 to-gray-800" />

              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="(max-width: 768px) 75vw, 25vw"
                className="object-cover object-center"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />

              {/* Plus button */}
              <Button className="absolute text-black! p-0! rounded-none bottom-0 right-0 w-14! h-14! md:w-17.5! md:h-17.5! flex items-center justify-center">
                <PlusIcon />
              </Button>
              {/* <button
                aria-label={`View details for ${slide.alt}`}
                className="absolute bottom-0 right-0 w-12 h-12 md:w-14 md:h-14 bg-primary flex items-center justify-center cursor-pointer transition-opacity hover:opacity-80"
              >
                <span className="text-black text-2xl md:text-3xl font-bold leading-none select-none">
                  +
                </span>
              </button> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
