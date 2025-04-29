"use client";

import { useState } from "react";
import TextRotateAnimation from "@/components/ui/TextRotateAnimation";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icon for mobile toggle
import { FaArrowRight } from "react-icons/fa";
import UserButton from "./UserButton";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "#products" },
  { name: "Compare", href: "#compare" },
  { name: "Features", href: "#features" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent w-full top-0 left-0 py-4 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link href="/" className="text-2xl text-white">
            CashMachine.
            <span className="font-euphoria text-4xl font-bold ml-1 text-primary">
              iO
            </span>
          </Link>

          {/* desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/50 hover:text-primary transition-all text-xl"
              >
                <TextRotateAnimation>{item.name}</TextRotateAnimation>
              </Link>
            ))}
          </div>

          <div className="flex gap-3 items-center">
            {/* auth */}
            <UserButton />
            {/* mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white focus:outline-none"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* mobile nav dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 space-y-4 p-6 bg-gray-900 absolute w-full z-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-white/90 text-lg py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* <Link
              href="#get-now"
              className=" lg:hidden flex items-center gap-3 text-white px-4 py-2 rounded-md text-lg font-semibold  transition-alls"
            ><FaArrowRight className='text-white bg-primary  rounded-full p-2 text-4xl' />
              Get Now
            </Link> */}
          </div>
        )}
      </div>
    </nav>
  );
}
