import type { Metadata } from 'next';
import { Outfit, Noto_Sans_JP, Roboto_Condensed } from 'next/font/google';
import './globals.css';

const outFit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

const notoSansJP = Noto_Sans_JP({
  variable: '--font-notosansjp',
  subsets: ['latin'],
});

const robotoCondensed = Roboto_Condensed({
  variable: '--font-roboto-condensed',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title:
    '商品一覧 | OWNDAYS × MELLER（メラー） 公式オンラインストア｜サングラス ',
  description:
    'OWNDAYS × MELLER 商品一覧。デザイン性・機能性に優れたサステナブルな素材のサングラス（全てUV99%以上カット・偏光レンズ・傷防止コート・撥水コート）を展開中。',
  keywords:
    '商品一覧,サングラス,偏光レンズ,Meller,メラー,アイウェア,フレーム,サステイナブ,トレンド,バルセロナ,スペイン,OWNDAYS,オンデーズ,オンデイズ',
  openGraph: {
    title:
      '商品一覧 | OWNDAYS × MELLER（メラー） 公式オンラインストア｜サングラス',
    description:
      'OWNDAYS × MELLER 商品一覧。デザイン性・機能性に優れたサステナブルな素材のサングラス（全てUV99%以上カット・偏光レンズ・傷防止コート・撥水コート）を展開中。',
    images: [
      {
        url: '/images/ogp_1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'OWNDAYS × MELLER',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      '商品一覧 | OWNDAYS × MELLER（メラー） 公式オンラインストア｜サングラス',
    description:
      'OWNDAYS × MELLER 商品一覧。デザイン性・機能性に優れたサステナブルな素材のサングラス。',
    images: ['/images/ogp_1200x630.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicons/favicon.ico' },
      { url: '/favicons/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicons/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      {
        url: '/favicons/android-chrome-192x192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        url: '/favicons/android-chrome-512x512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    apple: [{ url: '/favicons/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outFit.variable} ${notoSansJP.variable} ${robotoCondensed.variable} h-full antialiased`}
    >
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ldm8iso.js" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
