'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { footerNavLinks } from '@/lib/constant';

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

 

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800  text-gray-300 py-12" id="contact">
      <div className="container mx-auto px-4 flex justify-center">

        {/* Desktop Nav */}
        <nav className="hidden sm:flex gap-6">
          {footerNavLinks.map((item) => (
            <Link key={item.name} href={item.href} className="hover:text-white">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="sm:hidden flex ml-auto justify-end">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="sm:hidden mt-4 px-4 flex flex-col items-center gap-4">
          {footerNavLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm">
        &copy; {new Date().getFullYear()} www.Truepi.com - All rights reserved.
      </div>
    </footer>
  );
}
