import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/hero/HeroSection';
import ProductList from '@/components/product/ProductList';
import HowToStyleThem from '@/components/HowToStyleThem';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start overflow-x-hidden">
      <div className="relative w-full min-h-screen flex flex-col shadow-2xl">
        <Navbar />
        <HeroSection />
        <ProductList />
        <HowToStyleThem />
        <Footer />
      </div>
    </main>
  );
}
