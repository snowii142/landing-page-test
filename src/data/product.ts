import type { CSSProperties } from 'react';
import type { Product, ProductColorVariant } from '@/types/product';

const root = '/images/products';

const img = (slug: string, color: string, n: number) =>
  `${root}/${slug}/${color}-${n}.jpg`;

const galleriesImg = (slug: string, color: string, n: number) =>
  `${root}/${slug}/galleries/${color}-${n}.png`;

const imgs = (slug: string, color: string) => [
  galleriesImg(slug, color, 2),
  galleriesImg(slug, color, 1),
  galleriesImg(slug, color, 3),
];

const SWATCH = {
  black: { style: { background: '#141414' } },
  brownDemi: {
    style: {
      background: "url('/images/brown-demi.jpg') center / cover no-repeat",
    },
  },
  clearGray: {
    className: '',
    style: { background: '#dddcd4' },
  },
  clearWhite: {
    className: '',
    style: { background: '#f7f5f4' },
  },
  clearGreen: {
    className: '',
    style: { background: '#def9eb' },
  },
  beige: {
    className: '',
    style: { background: '#ceb39c' },
  },
  blackOrange: {
    style: {
      background: 'linear-gradient(135deg, #141414 0 50%, #f26a21 50% 100%)',
    },
  },
  blackClear: {
    className: '',
    style: {
      background: 'linear-gradient(135deg, #141414 0 50%, #dbe6f0 50% 100%)',
    },
  },
} satisfies Record<string, { className?: string; style?: CSSProperties }>;

type Swatch = keyof typeof SWATCH;

const v = (
  slug: string,
  name: string,
  colorSlug: string,
  model: string,
  swatch: Swatch,
): ProductColorVariant => {
  const swatchConfig: { className?: string; style?: CSSProperties } =
    SWATCH[swatch];

  return {
    name,
    model,
    className: swatchConfig.className,
    style: swatchConfig.style,
    image: img(slug, colorSlug, 1),
    images: imgs(slug, colorSlug),
  };
};

export const products: Product[] = [
  {
    id: 'ml2001d-6s',
    name: 'ADISA',
    model: 'ML2001D-6S C1',
    type: 'SQUARE',
    price: 7800,
    description:
      'クラシックな長方形シェイプに、シャープなラインを取り入れたサングラス。ユニセックスで使いやすく、重厚感のあるテンプルが安定感と上質な印象を与えます。ベーシックな装いからアクセントのあるスタイルまで幅広く対応するデザインです。',
    image: img('ML2001D', 'black', 1),
    onlineStoreUrl: '#',
    colors: [
      v('ML2001D', 'BLACK', 'black', 'ML2001D-6S C1', 'black'),
      v('ML2001D', 'BROWN DEMI', 'black', 'ML2001D-6S C2', 'brownDemi'),
      v('ML2001D', 'CLEAR GRAY', 'black', 'ML2001D-6S C3', 'clearGray'),
      v('ML2001D', 'CLEAR GREEN', 'black', 'ML2001D-6S C4', 'clearGreen'),
    ],
  },
  {
    id: 'ml2002d-6s',
    name: 'CHAUEN',
    model: 'ML2002D-6S',
    type: 'ROUND',
    price: 7800,
    description:
      'クラシックな長方形シェイプに、シャープなラインを取り入れたサングラス。ユニセックスで使いやすく、重厚感のあるテンプルが安定感と上質な印象を与えます。ベーシックな装いからアクセントのあるスタイルまで幅広く対応するデザインです。',
    image: img('ML2002D', 'brown-demi', 1),
    onlineStoreUrl: '#',
    colors: [
      v('ML2002D', 'BLACK', 'black', 'ML2002D-6S C1', 'black'),
      v('ML2002D', 'BROWN DEMI', 'black', 'ML2002D-6S C2', 'brownDemi'),
      v('ML2002D', 'CLEAR WHITE', 'black', 'ML2002D-6S C3', 'clearWhite'),
      v('ML2002D', 'CLEAR GRAY', 'black', 'ML2002D-6S C4', 'clearGray'),
    ],
  },
  {
    id: 'ml2003d-6s',
    name: 'CUMBI',
    model: 'ML2003D-6S',
    type: 'OCTAGON',
    price: 7800,
    description:
      'クラシックな長方形シェイプに、シャープなラインを取り入れたサングラス。ユニセックスで使いやすく、重厚感のあるテンプルが安定感と上質な印象を与えます。ベーシックな装いからアクセントのあるスタイルまで幅広く対応するデザインです。',
    image: img('ML2003D', 'black', 1),
    onlineStoreUrl: '#',
    colors: [
      v('ML2003D', 'BLACK', 'black', 'ML2003D-6S C1', 'black'),
      v('ML2003D', 'BROWN DEMI', 'black', 'ML2003D-6S C2', 'brownDemi'),
      v('ML2003D', 'CLEAR WHITE', 'black', 'ML2003D-6S C3', 'clearWhite'),
      v('ML2003D', 'CLEAR GRAY', 'black', 'ML2003D-6S C4', 'clearGray'),
    ],
  },
  {
    id: 'ml2004d-6s',
    name: 'KESSIE',
    model: 'ML2004D-6S',
    type: 'OVAL',
    price: 7800,
    description:
      'クラシックな長方形シェイプに、シャープなラインを取り入れたサングラス。ユニセックスで使いやすく、重厚感のあるテンプルが安定感と上質な印象を与えます。ベーシックな装いからアクセントのあるスタイルまで幅広く対応するデザインです。',
    image: img('ML2004D', 'black', 1),
    onlineStoreUrl: '#',
    colors: [
      v('ML2004D', 'BLACK', 'black', 'ML2004D-6S C1', 'black'),
      v('ML2004D', 'BROWN DEMI', 'black', 'ML2004D-6S C2', 'brownDemi'),
      v('ML2004D', 'BEIGE', 'black', 'ML2004D-6S C3', 'beige'),
      v('ML2004D', 'BLACK ORANGE', 'black', 'ML2004D-6S C4', 'blackOrange'),
    ],
  },
  {
    id: 'ml2005d-6s',
    name: 'NAYAH',
    model: 'ML2005D-6S',
    type: 'SQUARE',
    price: 7800,
    description:
      'クラシックな長方形シェイプに、シャープなラインを取り入れたサングラス。ユニセックスで使いやすく、重厚感のあるテンプルが安定感と上質な印象を与えます。ベーシックな装いからアクセントのあるスタイルまで幅広く対応するデザインです。',
    image: img('ML2005D', 'black', 1),
    onlineStoreUrl: '#',
    colors: [
      v('ML2005D', 'BLACK', 'black', 'ML2005D-6S C1', 'black'),
      v('ML2005D', 'BROWN DEMI', 'black', 'ML2005D-6S C2', 'brownDemi'),
      v('ML2005D', 'BLACK CLEAR', 'black', 'ML2005D-6S C3', 'blackClear'),
      v('ML2005D', 'BLACK ORANGE', 'black', 'ML2005D-6S C4', 'blackOrange'),
    ],
  },
  {
    id: 'ml2006d-6s',
    name: 'JAMIL',
    model: 'ML2006D-6S',
    type: 'OVAL',
    price: 7800,
    description:
      'クラシックな長方形シェイプに、シャープなラインを取り入れたサングラス。ユニセックスで使いやすく、重厚感のあるテンプルが安定感と上質な印象を与えます。ベーシックな装いからアクセントのあるスタイルまで幅広く対応するデザインです。',
    image: img('ML2006D', 'black', 1),
    onlineStoreUrl: '#',
    colors: [
      v('ML2006D', 'BROWN DEMI', 'black', 'ML2006D-6S C1', 'brownDemi'),
      v('ML2006D', 'CLEAR GRAY', 'black', 'ML2006D-6S C2', 'clearGray'),
    ],
  },
  {
    id: 'ml2007d-6s',
    name: 'KUBU',
    model: 'ML2007D-6S',
    type: 'ROUND',
    price: 7800,
    description:
      'クラシックな長方形シェイプに、シャープなラインを取り入れたサングラス。ユニセックスで使いやすく、重厚感のあるテンプルが安定感と上質な印象を与えます。ベーシックな装いからアクセントのあるスタイルまで幅広く対応するデザインです。',
    image: img('ML2007D', 'black', 1),
    onlineStoreUrl: '#',
    colors: [
      v('ML2007D', 'BROWN DEMI', 'black', 'ML2007D-6S C1', 'brownDemi'),
      v('ML2007D', 'CLEAR WHITE', 'black', 'ML2007D-6S C2', 'clearWhite'),
    ],
  },
  {
    id: 'ml2008d-6s',
    name: 'TANA',
    model: 'ML2008D-6S',
    type: 'SQUARE',
    price: 7800,
    description:
      'クラシックな長方形シェイプに、シャープなラインを取り入れたサングラス。ユニセックスで使いやすく、重厚感のあるテンプルが安定感と上質な印象を与えます。ベーシックな装いからアクセントのあるスタイルまで幅広く対応するデザインです。',
    image: img('ML2008D', 'black', 1),
    onlineStoreUrl: '#',
    colors: [
      v('ML2008D', 'BLACK', 'black', 'ML2008D-6S C1', 'black'),
      v('ML2008D', 'BROWN DEMI', 'black', 'ML2008D-6S C2', 'brownDemi'),
    ],
  },
];

export default products;
