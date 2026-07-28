import { LEGAL_LINKS, NAV_LINKS } from '@/constants/menus';
import React from 'react';
import { CartIcon, ChevronRight, CopyIcon, InstagramIcon } from '../icons';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-primary font-roboto-condensed border-t-4 border-primary">
      {/* ─── Top section ─── */}
      <div className="lg:flex">
        {/* Left column */}
        <div className="lg:flex-1 lg:border-r-2 lg:border-primary lg:p-17.5">
          {/* Nav links */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-col lg:gap-5"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center justify-between border-b-2 p-4 lg:p-0 border-primary text-lg font-bold uppercase tracking-wide hover:opacity-70 transition-opacity lg:inline-block lg:border-b-0"
              >
                <span>{link.label}</span>
                {/* Chevron only on mobile/tablet */}
                <span className="lg:hidden">
                  <ChevronRight />
                </span>
              </a>
            ))}
          </nav>

          {/* Instagram — mobile */}
          <div className="hidden lg:flex items-center mt-16">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-70 transition-opacity"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Right column */}
        <div className="flex items-center justify-between px-6 py-10 border-b-2 border-primary lg:flex-col lg:justify-center lg:gap-3 lg:border-b-0 lg:px-37.5 lg:py-8">
          <a
            href="#"
            className="flex items-center gap-3 font-bold text-base uppercase tracking-wide hover:opacity-70 transition-opacity"
          >
            <CartIcon />
            <span>ONLINE STORE</span>
          </a>
          <a
            href="https://www.owndays.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-bold text-sm uppercase tracking-wide hover:opacity-70 transition-opacity"
          >
            <span>OWNDAYS.COM</span>
            <CopyIcon />
          </a>
        </div>
      </div>

      {/* ─── Bottom section ─── */}
      <div
        className="lg:flex lg:items-center lg:justify-between lg:px-17.5 lg:py-5 pt-6 lg:border-t-2 lg:border-primary
      "
      >
        {/* Legal links */}
        <nav
          aria-label="Legal links"
          className="flex lg:items-center lg:gap-6 lg:flex-row gap-2 flex-col"
        >
          {LEGAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-6 lg:py-3 text-sm font-bold uppercase tracking-wide hover:opacity-70 transition-opacity lg:p-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Instagram — mobile only */}
        <div className="flex items-center px-6 py-4 lg:hidden my-7">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:opacity-70 transition-opacity"
          >
            <InstagramIcon />
          </a>
        </div>

        {/* Bottom divider — mobile only */}
        <div className="h-0.5 bg-primary lg:hidden" />

        {/* Copyright */}
        <p className="p-6 text-[10px] text-center font-bold uppercase tracking-widest">
          COPYRIGHT (C) OWNDAYS CO., LTD. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
