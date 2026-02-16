"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Salary-Based Loans",
    description:
      "Quick and accessible loans for salaried employees, designed to bridge financial gaps between pay cycles with flexible repayment terms.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop",
    alt: "Black African professional man working at his office desk",
  },
  {
    title: "Collateral-Based Loans",
    description:
      "Secured lending solutions with competitive rates, allowing you to leverage your assets for larger loan amounts and better terms.",
    image:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=1169&auto=format&fit=crop",
    alt: "Black African business people shaking hands on a deal",
  },
  {
    title: "School Fees Loans",
    description:
      "Invest in education without financial stress. Our school fees loans ensure uninterrupted learning for your children.",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1170&auto=format&fit=crop",
    alt: "Black African children studying happily in a classroom",
  },
  {
    title: "Product Financing",
    description:
      "Acquire essential products and assets through our flexible financing plans, making big purchases manageable with structured repayments.",
    image:
      "https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=987&auto=format&fit=crop",
    alt: "Black African woman shopping for products with confidence",
  },
  {
    title: "SSB Government Loans",
    description:
      "Tailored lending solutions exclusively for government employees, with special terms and streamlined processing through SSB deductions.",
    image:
      "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=1169&auto=format&fit=crop",
    alt: "Black African government employee in professional attire",
  },
  {
    title: "Foreign Currency Lending",
    description:
      "Licensed forex lending solutions to meet your foreign currency needs, fully compliant with Reserve Bank of Zimbabwe regulations.",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1170&auto=format&fit=crop",
    alt: "Foreign currency notes representing forex lending services",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Financial Solutions Tailored for You
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A diversified portfolio of microfinance products designed to meet the
            real-life financial needs of every Zimbabwean.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-4">
                  {service.description}
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
