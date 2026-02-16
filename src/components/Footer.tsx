"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "Why Choose Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Salary-Based Loans",
  "Collateral-Based Loans",
  "School Fees Loans",
  "Product Financing",
  "SSB Government Loans",
  "Foreign Currency Lending",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0c2d48] text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-blue-200/70">
                Apply for a loan today and experience the FlexiFund difference.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="tel:+263788089061"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1a7ab5] px-8 py-3.5 rounded-full font-bold hover:bg-cyan-50 transition-all duration-200 shadow-lg"
              >
                <Phone size={18} />
                Call Now
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-all duration-200"
              >
                <Mail size={18} />
                Email Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/logo.jpeg"
              alt="FlexiFund Logo"
              width={160}
              height={50}
              className="h-12 w-auto mb-5 brightness-0 invert"
            />
            <p className="text-blue-200/60 text-sm leading-relaxed mb-6">
              A licensed microfinance institution providing accessible,
              flexible, and sustainable financial solutions across Zimbabwe.
            </p>
            <div className="flex items-center gap-2 text-sm text-blue-200/60">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full" />
              RBZ Licensed — No. 000994
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blue-200/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-blue-200/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-primary-light flex-shrink-0 mt-0.5"
                />
                <span className="text-blue-200/60 text-sm">
                  Office 9, Suite 4, Centre Wing, No. 1 Union Avenue, Harare
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary-light flex-shrink-0" />
                <div className="text-blue-200/60 text-sm">
                  <p>+263 788 089 061</p>
                  <p>+263 787 543 916</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary-light flex-shrink-0" />
                <span className="text-blue-200/60 text-sm">
                  info@flexifund.co.zw
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-blue-200/40 text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} FlexiFund (Private) Limited. All
              rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
