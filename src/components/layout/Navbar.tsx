import Image from 'next/image';
import React from 'react';

export default function Navbar() {
  return (
    <header className="p-4 w-screen flex justify-between bg-transparent fixed top-0 left-0 z-60">
      <Image
        className="w-60"
        src="/logo.svg"
        alt="Logo"
        width={0}
        height={0}
        priority
      />
      <button>
        <Image
          className="w-6"
          src="/hamburger.svg"
          alt="Hamburger"
          width={0}
          height={0}
          priority
        />
      </button>
    </header>
  );
}
