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
  title: 'OWNDAYS x MELLER',
  description: 'OWNDAYS x MELLER Collaboration',
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
