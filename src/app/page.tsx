import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/hero/HeroSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-start overflow-x-hidden">
      {/* Mobile Screen Container */}
      <div className="relative w-full max-w-md bg-black min-h-screen flex flex-col shadow-2xl">
        <Navbar />
        <HeroSection />
      </div>
    </main>
  );
}
