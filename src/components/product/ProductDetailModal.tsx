'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import type { Product } from '@/types/product';
import { ModalBody } from './modal/Body';

export default function ProductDetailModal({
  product,
  isOpen,
  onClose,
}: {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const prevProductId = useRef(product?.id);

  const dialogSwiperRef = useRef<SwiperType | null>(null);
  const drawerSwiperRef = useRef<SwiperType | null>(null);

  if (product?.id !== prevProductId.current) {
    prevProductId.current = product?.id;
    setSelectedColorIndex(0);
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleColorChange = useCallback((index: number) => {
    setSelectedColorIndex(index);
    dialogSwiperRef.current?.slideTo(0);
    drawerSwiperRef.current?.slideTo(0);
  }, []);

  if (!product) return null;

  const selectedColor = product.colors[selectedColorIndex];
  const currentImages = selectedColor?.images ?? [
    selectedColor?.image ?? product.image,
  ];
  const currentModel = selectedColor?.model ?? product.model;

  const bodyProps = {
    product,
    selectedColorIndex,
    images: currentImages,
    model: currentModel,
    onColorChange: handleColorChange,
    onClose,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-70 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* ─── Mobile: centered dialog ─── */}
          <motion.div
            className="fixed inset-0 z-80 flex items-center justify-center p-4 md:hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div
              className="bg-white w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label={`${product.name} details`}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalBody
                {...bodyProps}
                onSwiper={(swiper) => {
                  dialogSwiperRef.current = swiper;
                }}
              />
            </div>
          </motion.div>

          {/* ─── Desktop: right drawer ─── */}
          <motion.div
            className="fixed inset-y-0 right-0 z-80 w-full max-w-154 hidden md:flex"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div
              className="bg-white w-full h-full overflow-y-auto flex flex-col rounded-tl-3xl rounded-bl-3xl"
              role="dialog"
              aria-modal="true"
              aria-label={`${product.name} details`}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalBody
                {...bodyProps}
                onSwiper={(swiper) => {
                  drawerSwiperRef.current = swiper;
                }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
