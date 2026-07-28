'use client';

import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';
import { NAV_LINKS } from '@/constants/menus';
import { HamburgerIcon } from '../icons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <header
        className={`p-4 lg:py-8 lg:px-17.5 w-screen duration-300 flex justify-between fixed top-0 left-0 z-60 ${isScrolled ? 'bg-black/70 backdrop-blur-sm' : 'bg-transparent'}`}
      >
        <Image
          className="w-60"
          src="/logo.svg"
          alt="Logo"
          width={0}
          height={0}
          priority
        />

        {/* Desktop nav links */}
        <nav
          className="hidden lg:flex items-center gap-12"
          aria-label="Desktop navigation"
        >
          {NAV_LINKS.map((nav, idx) => (
            <a
              key={idx}
              href={nav.href}
              className="font-roboto-condensed text-white text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              {nav.label}
            </a>
          ))}
        </nav>

        <button
          className="cursor-pointer lg:hidden block text-white"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <HamburgerIcon />
        </button>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
