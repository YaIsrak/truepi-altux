"use client";

import { navLinks } from "@/lib/constant";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Animate hamburger bars
    if (hamburgerRef.current) {
      const top = hamburgerRef.current.querySelector(".top-bar");
      const middle = hamburgerRef.current.querySelector(".middle-bar");
      const bottom = hamburgerRef.current.querySelector(".bottom-bar");

      if (isOpen) {
        gsap.to(top, { rotate: 45, y: 6, duration: 0.5, ease: "power2.out" });
        gsap.to(bottom, { rotate: -45, y: -6, duration: 0.5, ease: "power2.out" });
        gsap.to(middle, { opacity: 0, y: -6, duration: 0.3, ease: "power2.out" });
      } else {
        gsap.to(top, { rotate: 0, y: 0, duration: 0.5, ease: "power2.inOut" });
        gsap.to(bottom, { rotate: 0, y: 0, duration: 0.5, ease: "power2.inOut" });
        gsap.to(middle, { opacity: 1, y: 0, duration: 0.3, ease: "power2.inOut" });
      }
    }

    // Animate mobile menu
    gsap.to(mobileMenuRef.current, {
      autoAlpha: isOpen ? 1 : 0,
      y: isOpen ? 0 : -30,
      duration: 0.3,
      ease: isOpen ? "power2.out" : "power2.in",
      display: isOpen ? "block" : "none",
    });
  }, [isOpen]);

  useEffect(() => {
    // Entrance animation
    gsap.from(navRef.current, {
      opacity: 0,
      duration: 0.5,
      y: -30,
      ease: "power2.out",
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (index: number) => {
    setActiveIndex(index);
    setIsOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={cn(
        "w-full py-4 sticky top-0 z-10 transition-colors duration-300 border-b md:border-0",
        isScrolled ? "bg-white shadow-md border-gray-200" : "bg-muted"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/">
          <h1 className="font-extrabold text-2xl text-primary">Truepi</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(index)}
              className={cn(
                "text-sm relative hover:text-secondary transition-colors",
                activeIndex === index ? "text-secondary font-semibold" : "text-primary"
              )}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary"></span>
            </a>
          ))}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden block cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <svg
            ref={hamburgerRef}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line className="top-bar" x1="3" y1="6" x2="21" y2="6" />
            <line className="middle-bar" x1="3" y1="12" x2="21" y2="12" />
            <line className="bottom-bar" x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={cn(
          "w-full bg-primary md:hidden overflow-hidden z-20 text-white mt-4"
        )}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(index)}
                className={cn(
                  "text-lg transition-colors",
                  activeIndex === index ? "text-secondary font-semibold" : "text-white"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
