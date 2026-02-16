"use client";

import { ArrowRight, Shield, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c2d48] via-[#145a8a] to-[#1a7ab5]" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Shield size={16} className="text-cyan-300" />
              <span className="text-sm text-cyan-100 font-medium">
                RBZ Licensed — Licence No. 000994
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Flexible Financial{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-200">
                Solutions
              </span>{" "}
              for Every Zimbabwean
            </h1>

            <p className="text-lg text-blue-100/80 mb-8 max-w-xl leading-relaxed">
              Empowering individuals, families, and enterprises through
              accessible, responsible, and innovative microfinance solutions that
              promote economic stability and growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1a7ab5] px-8 py-4 rounded-full font-bold text-base hover:bg-cyan-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Explore Our Products
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
              >
                Get In Touch
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { label: "Licensed by RBZ", value: "Regulated" },
                { label: "Loan Processing", value: "Fast" },
                { label: "Currency", value: "Forex" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-blue-200/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right content - Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl">
                    <div className="w-12 h-12 bg-cyan-400/20 rounded-xl flex items-center justify-center">
                      <TrendingUp className="text-cyan-300" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">
                        Salary-Based Loans
                      </h3>
                      <p className="text-blue-200/70 text-sm">
                        Quick access for salaried employees
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl">
                    <div className="w-12 h-12 bg-emerald-400/20 rounded-xl flex items-center justify-center">
                      <Shield className="text-emerald-300" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">
                        Collateral-Based Loans
                      </h3>
                      <p className="text-blue-200/70 text-sm">
                        Secured lending with flexible terms
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl">
                    <div className="w-12 h-12 bg-amber-400/20 rounded-xl flex items-center justify-center">
                      <Clock className="text-amber-300" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">
                        School Fees Loans
                      </h3>
                      <p className="text-blue-200/70 text-sm">
                        Invest in education, stress-free
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">
                      100% Compliant
                    </div>
                    <div className="text-xs text-gray-500">
                      Reserve Bank of Zimbabwe
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
