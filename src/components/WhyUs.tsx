"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Lightbulb,
  HeartHandshake,
  Scale,
  Clock,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Ethical and transparent operations in everything we do.",
  },
  {
    icon: Users,
    title: "Accessibility",
    description: "Financial services available for all Zimbabweans.",
  },
  {
    icon: Scale,
    title: "Accountability",
    description: "Responsible lending and strong governance practices.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Centricity",
    description: "Clients first, always — your needs drive our solutions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Modern, flexible financial solutions for a digital age.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "Consistent and dependable service delivery you can count on.",
  },
  {
    icon: Sparkles,
    title: "Respect",
    description: "Dignity and fairness for every client we serve.",
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
          className="text-center mb-14"
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

        {/* Values — image left, grid right */}
        <div className="grid lg:grid-cols-5 gap-10 items-stretch mb-20">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative rounded-2xl overflow-hidden min-h-[360px] shadow-lg"
          >
            <Image
              src="https://images.pexels.com/photos/7681016/pexels-photo-7681016.jpeg?auto=compress&cs=tinysrgb&w=1260&fit=crop"
              alt="Black African colleagues collaborating and smiling in a modern workspace"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c2d48]/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white font-bold text-lg">
                Values-Driven Lending
              </p>
              <p className="text-blue-100/70 text-sm">
                Every decision guided by integrity and client care.
              </p>
            </div>
          </motion.div>

          {/* Values grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="flex items-start gap-3.5 bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-blue-50/50 hover:border-primary/10 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <value.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-gray-900 mb-0.5">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Strategic Focus Areas — image background banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <Image
            src="https://images.pexels.com/photos/5439400/pexels-photo-5439400.jpeg?auto=compress&cs=tinysrgb&w=1920&fit=crop"
            alt="Black African businessman working in modern office environment"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0c2d48]/85" />

          <div className="relative p-8 sm:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Strategic Focus Areas
                </h3>
                <p className="text-blue-100/70 text-lg leading-relaxed">
                  We are strategically positioned to drive financial inclusion
                  and economic empowerment across key sectors in Zimbabwe.
                </p>
              </div>
              <div className="space-y-2.5">
                {strategicAreas.map((area, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3"
                  >
                    <CheckCircle size={16} className="text-cyan-300 flex-shrink-0" />
                    <span className="text-white/90 font-medium text-sm">
                      {area}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
