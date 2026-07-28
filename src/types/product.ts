import React from 'react';

export type ProductColorVariant = {
  name: string;
  className?: string;
  style?: React.CSSProperties;
  model: string;
  image: string;
  images: string[];
};

export type Product = {
  id: string;
  name: string;
  model: string;
  type: string;
  price: number;
  description: string;
  image: string;
  onlineStoreUrl: string;
  colors: ProductColorVariant[];
};
