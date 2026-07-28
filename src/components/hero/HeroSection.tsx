import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col overflow-hidden md:border-b-2 md:border-black">
      <div className="relative w-full h-169.25 md:h-158.25 2xl:h-240 sm:h-[82vh]">
        <Image
          src="/images/banner.jpg"
          alt="OWNDAYS x MELLER Products Hero"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className="object-cover object-center filter brightness-[0.98] contrast-[1.02]"
        />

        <div className="absolute inset-x-0 top-0 h-full opacity-30 bg-linear-to-b from-black/60 to-transparent pointer-events-none">
          <Image
            src="/images/banner-overlay.png"
            alt="overlay"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className="object-cover object-top pointer-events-none"
          />
        </div>

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
