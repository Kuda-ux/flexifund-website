"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp, Facebook, Instagram, Linkedin } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "Why Choose Us", href: "#why-us" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const serviceLinks = [
  { name: "Salary-Based Loans", href: "#services" },
  { name: "Collateral-Based Loans", href: "#services" },
  { name: "School Fees Loans", href: "#services" },
  { name: "Product Financing", href: "#services" },
  { name: "SSB Government Loans", href: "#services" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      {/* CTA Banner with background image */}
      <div className="relative overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/5439400/pexels-photo-5439400.jpeg?auto=compress&cs=tinysrgb&w=1920&fit=crop"
          alt="Black African businessman in professional office setting"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0c2d48]/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-blue-200/70 max-w-md">
                Apply for a loan today and experience the FlexiFund difference.
                Fast, flexible, and trusted by Zimbabweans.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="tel:+263788089061"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0c2d48] px-7 py-3.5 rounded-lg font-bold text-sm hover:bg-blue-50 transition-all duration-200 shadow-lg"
              >
                <Phone size={18} />
                Call Now
              </Link>
              <button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-white/10 transition-all duration-200 cursor-pointer"
              >
                <Mail size={18} />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#071e32] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Image
                src="/logo.jpeg"
                alt="FlexiFund Logo"
                width={160}
                height={50}
                className="h-11 w-auto mb-5 brightness-0 invert"
              />
              <p className="text-blue-200/50 text-sm leading-relaxed mb-5">
                A trusted microfinance institution providing accessible,
                flexible, and sustainable financial solutions across Zimbabwe.
              </p>
              {/* Social Media */}
              <div className="flex items-center gap-3">
                <Link
                  href="https://www.facebook.com/flexifund"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/5 hover:bg-white/15 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook size={16} className="text-blue-200/60" />
                </Link>
                <Link
                  href="https://www.instagram.com/flexifund"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/5 hover:bg-white/15 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={16} className="text-blue-200/60" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/flexifund"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/5 hover:bg-white/15 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} className="text-blue-200/60" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-widest">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => {
                        document
                          .getElementById(link.href.replace("#", ""))
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-blue-200/50 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-widest">
                Our Services
              </h4>
              <ul className="space-y-2.5">
                {serviceLinks.map((service) => (
                  <li key={service.name}>
                    <button
                      onClick={() => {
                        document
                          .getElementById(service.href.replace("#", ""))
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-blue-200/50 hover:text-white text-sm transition-colors duration-200 cursor-pointer text-left"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-widest">
                Contact Info
              </h4>
              <div className="space-y-4">
                <Link
                  href="https://maps.google.com/?q=1+Union+Avenue+Harare+Zimbabwe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group/link"
                >
                  <MapPin
                    size={16}
                    className="text-blue-300/50 flex-shrink-0 mt-0.5"
                  />
                  <span className="text-blue-200/50 text-sm group-hover/link:text-white transition-colors duration-200">
                    First Floor, Office 9, Suite 4, Centre Wing, No. 1 Union Avenue, Harare
                  </span>
                </Link>
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-blue-300/50 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <Link href="tel:+263788089061" className="block text-blue-200/50 hover:text-white transition-colors duration-200">
                      +263 788 089 061
                    </Link>
                    <Link href="tel:+263787543916" className="block text-blue-200/50 hover:text-white transition-colors duration-200">
                      +263 787 543 916
                    </Link>
                  </div>
                </div>
                <Link
                  href="mailto:info@flexifund.co.zw"
                  className="flex items-center gap-3 group/link"
                >
                  <Mail size={16} className="text-blue-300/50 flex-shrink-0" />
                  <span className="text-blue-200/50 text-sm group-hover/link:text-white transition-colors duration-200">
                    info@flexifund.co.zw
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-blue-200/30 text-xs text-center sm:text-left">
                &copy; {new Date().getFullYear()} FlexiFund (Private) Limited.
                All rights reserved.
              </p>
              <button
                onClick={scrollToTop}
                className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} className="text-white/50" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
