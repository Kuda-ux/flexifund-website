"use client";

import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-end lg:items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=2074&auto=format&fit=crop"
        alt="Black African professionals collaborating in a modern office in Zimbabwe"
        fill
        className="object-cover"
        priority
        sizes="100vw"
        quality={80}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAQMDBAMBAAAAAAAAAAAAAQIDBAAFEQYSITETQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCxp+/XO6amhQbi+4lpbqUqbCzsCT9A4H2tHooqB//Z"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c2d48]/90 via-[#0c2d48]/75 to-[#0c2d48]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c2d48]/80 via-transparent to-transparent" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Empowering Zimbabwe Through Flexible Finance
            </h1>

            <p className="text-lg sm:text-xl text-white/75 mb-8 max-w-lg leading-relaxed font-light">
              Accessible, responsible microfinance solutions for individuals,
              families, and businesses — licensed by the Reserve Bank of
              Zimbabwe.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0c2d48] px-7 py-3.5 rounded-lg font-bold text-[15px] hover:bg-blue-50 transition-all duration-200 shadow-lg"
              >
                Our Products
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-lg font-semibold text-[15px] hover:bg-white/10 transition-all duration-200"
              >
                Get In Touch
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {[
                "RBZ Licensed (No. 000994)",
                "Foreign Currency Lending",
                "Fast Loan Processing",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-white/60 text-sm"
                >
                  <CheckCircle size={14} className="text-emerald-400" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
