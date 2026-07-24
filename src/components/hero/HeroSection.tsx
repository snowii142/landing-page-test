import Image from 'next/image';
import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col bg-[#0f141d] overflow-hidden">
      <div className="relative w-full h-169.25 sm:h-[82vh]">
        <Image
          src="/images/banner.jpg"
          alt="OWNDAYS x MELLER Products Hero"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className="object-cover object-top filter brightness-[0.98] contrast-[1.02]"
        />

        {/* Subtle Dark Vignette Overlay at Top for Header readability */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

        {/* PRODUCTS Censor Bar Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center top-0">
          <div className="bg-black flex items-center justify-center">
            <h1 className="font-roboto-condensed leading-13 text-[70px] xs:text-6xl sm:text-7xl md:text-8xl tracking-[-2px] text-primary select-none uppercase font-bold">
              PRODUCTS
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
