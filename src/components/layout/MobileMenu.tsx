'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CloseIcon } from '../icons';
import { LEGAL_LINKS, NAV_LINKS } from '@/constants/menus';

export default function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu panel wrapper */}
          <motion.div
            className="fixed inset-0 z-80 p-4"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <div className="bg-black w-full h-full flex flex-col overflow-y-auto rounded-[10px]">
              <div className="flex justify-end p-5">
                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="text-primary cursor-pointer hover:opacity-70 transition-opacity"
                >
                  <CloseIcon />
                </button>
              </div>

              {/* Main nav links */}
              <nav aria-label="Main navigation" className="px-8 pt-4">
                <ul className="flex flex-col gap-4">
                  {NAV_LINKS.map((link, index) => (
                    <motion.li
                      key={link.label}
                      initial={{ x: 60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        type: 'spring',
                        damping: 25,
                        stiffness: 250,
                        delay: 0.15 + index * 0.08,
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={onClose}
                        className="font-roboto-condensed text-primary text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Legal links */}
              <nav aria-label="Legal navigation" className="px-8 pt-12">
                <ul className="flex flex-col gap-4">
                  {LEGAL_LINKS.map((link, index) => (
                    <motion.li
                      key={link.label}
                      initial={{ x: 40, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        type: 'spring',
                        damping: 25,
                        stiffness: 250,
                        delay: 0.35 + index * 0.06,
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={onClose}
                        className="font-roboto-condensed text-primary text-sm font-bold uppercase tracking-wide hover:opacity-70 transition-opacity"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
