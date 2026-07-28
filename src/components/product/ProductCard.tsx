import Image from 'next/image';
import type { Product } from '@/types/product';
import { useState } from 'react';

export default function ProductCard({
  product,
  onClick,
}: {
  product: Product;
  onClick?: () => void;
}) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  return (
    <div
      className="cursor-pointer flex flex-col p-3 bg-white"
      onClick={onClick}
    >
      {/* Product Image */}
      <div className="relative aspect-4/3 w-full">
        <Image
          src={selectedColor.image}
          alt={`${product.name} ${product.model}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain object-center"
        />
      </div>

      <div className="flex flex-col gap-2 py-4">
        <div className="flex items-center justify-between gap-3">
          {/* Name */}
          <h3 className="font-roboto-condensed text-4xl font-bold uppercase leading-none tracking-tight text-secondary lg:text-6xl">
            {product.name}
          </h3>

          {/* Colors selector */}
          <ul className="flex shrink-0 items-center gap-2.5 mr-2.5">
            {product.colors.map((color) => (
              <li key={color.name}>
                <span
                  role="img"
                  aria-label={color.name}
                  title={color.name}
                  style={color.style}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedColor(color);
                  }}
                  className={`block size-7 rounded-full ${color.className ?? ''} ${
                    selectedColor.name === color.name
                      ? 'ring-2 ring-primary ring-offset-2 ring-offset-white'
                      : ''
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Product Info */}
        <div className="flex items-end justify-between gap-3">
          <p className="font-outfit text-base text-secondary lg:text-xl">
            {product.model}
          </p>
          <p className="font-notosansjp text-xl lg:text-3xl font-bold leading-none text-secondary md:text-4xl">
            ¥{product.price.toLocaleString('en-US')}
            <span className="text-base font-medium md:text-lg">+tax</span>
          </p>
        </div>
      </div>
    </div>
  );
}
