import { Product } from '@/types/product';
import { ModalHeader } from './Header';
import { ProductImageSlider } from '../ProductSlider';
import { ColorVariants } from '../ColorVariants';
import { ProductInfo } from '../ProductInfo';
import type { Swiper as SwiperType } from 'swiper';

export function ModalBody({
  product,
  selectedColorIndex,
  images,
  model,
  onSwiper,
  onColorChange,
  onClose,
}: {
  product: Product;
  selectedColorIndex: number;
  images: string[];
  model: string;
  onSwiper: (swiper: SwiperType) => void;
  onColorChange: (index: number) => void;
  onClose: () => void;
}) {
  return (
    <div className="h-full bg-black">
      <div className="flex flex-col h-83.75 md:h-124.75 shrink-0 bg-gray-light">
        <ModalHeader name={product.name} onClose={onClose} />
        <ProductImageSlider
          images={images}
          name={product.name}
          model={model}
          colorIndex={selectedColorIndex}
          onSwiper={onSwiper}
        />
        <ColorVariants
          colors={product.colors}
          selectedIndex={selectedColorIndex}
          onSelect={onColorChange}
        />
      </div>
      <ProductInfo product={product} model={model} />
    </div>
  );
}
