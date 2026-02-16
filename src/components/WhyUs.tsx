"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Lightbulb,
  HeartHandshake,
  Scale,
  Clock,
  Sparkles,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Ethical and transparent operations in everything we do.",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Users,
    title: "Accessibility",
    description: "Financial services available for all Zimbabweans.",
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Scale,
    title: "Accountability",
    description: "Responsible lending and strong governance practices.",
    gradient: "from-amber-500 to-amber-600",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Centricity",
    description: "Clients first, always — your needs drive our solutions.",
    gradient: "from-rose-500 to-rose-600",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Modern, flexible financial solutions for a digital age.",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "Consistent and dependable service delivery you can count on.",
    gradient: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Sparkles,
    title: "Respect",
    description: "Dignity and fairness for every client we serve.",
    gradient: "from-indigo-500 to-indigo-600",
  },
];

const strategicAreas = [
  "Foreign currency micro-lending",
  "Government employee financing",
  "Education financing",
  "Asset and product financing",
  "SME support and empowerment",
  "Digital transformation of loan services",
  "Financial literacy and client education",
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white">
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
            Why Choose FlexiFund
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Built on a foundation of trust, innovation, and client empowerment —
            these values guide every decision we make.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <value.icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Strategic Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#0c2d48] via-[#145a8a] to-[#1a7ab5] rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden"
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Strategic Focus Areas
              </h3>
              <p className="text-blue-100/80 text-lg leading-relaxed">
                We are strategically positioned to drive financial inclusion and
                economic empowerment across key sectors in Zimbabwe.
              </p>
            </div>
            <div className="space-y-3">
              {strategicAreas.map((area, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10"
                >
                  <div className="w-2 h-2 bg-cyan-300 rounded-full flex-shrink-0" />
                  <span className="text-white/90 font-medium text-sm">
                    {area}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
