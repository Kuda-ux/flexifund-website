"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, ChevronRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
          : "bg-white"
      }`}
    >
      {/* Top bar */}
      <div className="hidden lg:block bg-[#0c2d48] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9 text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-blue-200/80">
              <Phone size={12} />
              +263 788 089 061
            </span>
            <span className="text-blue-200/80">info@flexifund.co.zw</span>
          </div>
          <span className="text-blue-200/60">
            RBZ Licensed Microfinance — Licence No. 000994
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="#home" className="flex-shrink-0">
            <Image
              src="/logo.jpeg"
              alt="FlexiFund (Private) Limited"
              width={200}
              height={64}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-[13px] font-semibold tracking-wide uppercase transition-colors duration-200 rounded-md ${
                    isActive
                      ? "text-primary"
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white pl-5 pr-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Apply Now
              <ChevronRight size={16} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-3 space-y-0.5 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-blue-50/60 rounded-lg transition-colors text-sm font-semibold tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 pb-1 px-2">
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-primary text-white rounded-lg py-3 font-semibold text-sm"
            >
              Apply Now
              <ChevronRight size={16} />
            </Link>
          </div>
          <div className="flex items-center gap-4 px-4 py-3 text-xs text-gray-500 border-t border-gray-100 mt-1">
            <span className="flex items-center gap-1.5">
              <Phone size={12} />
              +263 788 089 061
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
