"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  CalendarDays,
  MapPin,
} from "lucide-react";

const companyInfo = [
  { icon: CalendarDays, label: "Incorporated", value: "29 May 2025" },
  { icon: MapPin, label: "Head Office", value: "First Floor, No. 1 Union Avenue, Harare" },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: Image + Intro */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src="https://images.pexels.com/photos/5061276/pexels-photo-5061276.jpeg?auto=compress&cs=tinysrgb&w=1260&fit=crop"
                alt="Black African businessman discussing business strategy"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAHxAAAgICAgMBAAAAAAAAAAAAAQIAAwQRBSESMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDK8XlL8esVpYoUewDr+yflOVyFt1rWN7Y9kxEH/9k="
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
              About FlexiFund
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              Building Financial Bridges Across Zimbabwe
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              FlexiFund Private Limited is a registered microfinance institution
              incorporated under the laws of Zimbabwe. We serve individuals,
              salaried employees, entrepreneurs, and government workers with
              accessible, transparent, and responsible financial solutions.
            </p>

            {/* Company info grid */}
            <div className="grid grid-cols-2 gap-4">
              {companyInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                      {item.label}
                    </div>
                    <div className="text-sm text-gray-900 font-semibold">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.pexels.com/photos/7679178/pexels-photo-7679178.jpeg?auto=compress&cs=tinysrgb&w=1260&fit=crop"
              alt="Black African professionals in a business meeting"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c2d48]/95 via-[#0c2d48]/70 to-[#0c2d48]/30" />
            <div className="relative p-8 sm:p-10 flex flex-col justify-end min-h-[320px]">
              <div className="flex items-center gap-2 mb-3">
                <Target className="text-cyan-300" size={22} />
                <h3 className="text-xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-blue-100/80 leading-relaxed">
                To empower individuals, families, and enterprises through
                accessible, flexible, and responsible financial solutions that
                promote economic stability, growth, and financial inclusion
                across Zimbabwe.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.pexels.com/photos/3727513/pexels-photo-3727513.jpeg?auto=compress&cs=tinysrgb&w=1260&fit=crop"
              alt="Confident Black African woman professional smiling"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c2d48]/95 via-[#0c2d48]/70 to-[#0c2d48]/30" />
            <div className="relative p-8 sm:p-10 flex flex-col justify-end min-h-[320px]">
              <div className="flex items-center gap-2 mb-3">
                <Eye className="text-cyan-300" size={22} />
                <h3 className="text-xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-blue-100/80 leading-relaxed">
                To become Zimbabwe&apos;s most trusted and innovative
                microfinance institution, transforming lives through sustainable
                financial empowerment and inclusive economic development.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Objectives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Our Core Objectives
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Financial Inclusion",
                desc: "Access to credit for underserved and financially excluded communities.",
                color: "bg-blue-50 border-blue-100",
              },
              {
                title: "Client Empowerment",
                desc: "Improving livelihoods through affordable and flexible financing solutions.",
                color: "bg-emerald-50 border-emerald-100",
              },
              {
                title: "Sustainable Growth",
                desc: "Building a financially strong and scalable microfinance institution.",
                color: "bg-amber-50 border-amber-100",
              },
              {
                title: "Trust & Transparency",
                desc: "Operating with integrity, fairness, and ethical lending practices.",
                color: "bg-purple-50 border-purple-100",
              },
            ].map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`${obj.color} border rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300`}
              >
                <h4 className="font-bold text-gray-900 mb-2">{obj.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {obj.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
