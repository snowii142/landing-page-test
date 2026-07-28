import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

export function ProductImageSlider({
  images,
  name,
  model,
  colorIndex,
  onSwiper,
}: {
  images: string[];
  name: string;
  model: string;
  colorIndex: number;
  onSwiper: (swiper: SwiperType) => void;
}) {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1.45}
        centeredSlides
        spaceBetween={-10}
        initialSlide={1}
        onSwiper={onSwiper}
        className="py-4"
      >
        {images.map((img, i) => (
          <SwiperSlide key={`${colorIndex}-${i}`}>
            <div className="flex items-center justify-center w-full">
              <Image
                src={img}
                alt={`${name} ${model} - ${i + 1}`}
                sizes="(max-width: 1024px) 100vw, 448px"
                className="object-cover w-63 h-44.75 md:w-105 md:h-74.5"
                width={0}
                height={0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
