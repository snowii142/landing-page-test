'use client';

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import type { Product } from '@/types/product';
import products from '@/data/product';

export default function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="py-20 px-4 md:px-17.5 md:py-32.25 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4.25">
        {products.map((product) => (
          <div
            key={product.id}
            className={`${selectedProduct?.id === product.id ? 'border-2 border-black' : 'border-2 border-transparent'} hover:border-black duration-200`}
          >
            <ProductCard
              product={product}
              onClick={() => handleProductClick(product)}
            />
          </div>
        ))}
      </div>

      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleClose}
      />
    </>
  );
}
