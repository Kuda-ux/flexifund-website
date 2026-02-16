"use client";

import { motion } from "framer-motion";
import {
  Banknote,
  GraduationCap,
  ShoppingBag,
  Landmark,
  DollarSign,
  ShieldCheck,
  Zap,
  Eye,
  Heart,
  Repeat,
} from "lucide-react";

const services = [
  {
    icon: Banknote,
    title: "Salary-Based Loans",
    description:
      "Quick and accessible loans for salaried employees, designed to bridge financial gaps between pay cycles with flexible repayment terms.",
    color: "from-blue-500 to-blue-600",
    bgLight: "bg-blue-50",
  },
  {
    icon: ShieldCheck,
    title: "Collateral-Based Loans",
    description:
      "Secured lending solutions with competitive rates, allowing you to leverage your assets for larger loan amounts and better terms.",
    color: "from-emerald-500 to-emerald-600",
    bgLight: "bg-emerald-50",
  },
  {
    icon: GraduationCap,
    title: "School Fees Loans",
    description:
      "Invest in education without financial stress. Our school fees loans ensure uninterrupted learning for your children.",
    color: "from-amber-500 to-amber-600",
    bgLight: "bg-amber-50",
  },
  {
    icon: ShoppingBag,
    title: "Product Financing",
    description:
      "Acquire essential products and assets through our flexible financing plans, making big purchases manageable with structured repayments.",
    color: "from-purple-500 to-purple-600",
    bgLight: "bg-purple-50",
  },
  {
    icon: Landmark,
    title: "SSB Government Loans",
    description:
      "Tailored lending solutions exclusively for government employees, with special terms and streamlined processing through SSB deductions.",
    color: "from-rose-500 to-rose-600",
    bgLight: "bg-rose-50",
  },
  {
    icon: DollarSign,
    title: "Foreign Currency Lending",
    description:
      "Licensed forex lending solutions to meet your foreign currency needs, fully compliant with Reserve Bank of Zimbabwe regulations.",
    color: "from-cyan-500 to-cyan-600",
    bgLight: "bg-cyan-50",
  },
];

const features = [
  { icon: Zap, text: "Fast to Access" },
  { icon: Eye, text: "Transparent" },
  { icon: Heart, text: "Affordable" },
  { icon: Repeat, text: "Flexible Repayment" },
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
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Financial Solutions Tailored for You
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer a diversified portfolio of microfinance products designed to
            meet the real-life financial needs of every Zimbabwean.
          </p>
        </motion.div>

        {/* Features bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-16"
        >
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100"
            >
              <feature.icon size={18} className="text-primary" />
              <span className="text-sm font-medium text-gray-700">
                {feature.text}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 ${service.bgLight} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon
                  size={28}
                  className="text-primary"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
