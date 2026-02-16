"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Building2,
  CalendarDays,
  FileCheck,
  MapPin,
} from "lucide-react";

const companyInfo = [
  {
    icon: Building2,
    label: "Registration Number",
    value: "44846A0252025",
  },
  {
    icon: FileCheck,
    label: "RBZ License Number",
    value: "000994",
  },
  {
    icon: CalendarDays,
    label: "Date of Incorporation",
    value: "29 May 2025",
  },
  {
    icon: MapPin,
    label: "Head Office",
    value: "Office 9, Suite 4, Centre Wing, No. 1 Union Avenue, Harare",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
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
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            FlexiFund Private Limited is a registered microfinance institution
            incorporated under the laws of Zimbabwe, duly licensed by the Reserve
            Bank of Zimbabwe to provide lending services in foreign currency.
          </p>
        </motion.div>

        {/* Company overview */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left - Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Target className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To empower individuals, families, and enterprises through
                accessible, flexible, and responsible financial solutions that
                promote economic stability, growth, and financial inclusion
                across Zimbabwe.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Eye className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become Zimbabwe&apos;s most trusted and innovative microfinance
                institution, transforming lives through sustainable financial
                empowerment and inclusive economic development.
              </p>
            </div>
          </motion.div>

          {/* Right - Company Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-[#1a7ab5] to-[#155d8b] px-8 py-6">
                <h3 className="text-xl font-bold text-white">
                  Corporate Information
                </h3>
                <p className="text-blue-100 text-sm mt-1">
                  Fully registered and compliant MFI
                </p>
              </div>
              <div className="p-8 space-y-6">
                {companyInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent-light rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-medium">
                        {item.label}
                      </div>
                      <div className="text-gray-900 font-semibold">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
                color: "bg-blue-50 border-blue-200",
                iconColor: "text-blue-600",
              },
              {
                title: "Client Empowerment",
                desc: "Improving livelihoods through affordable and flexible financing solutions.",
                color: "bg-emerald-50 border-emerald-200",
                iconColor: "text-emerald-600",
              },
              {
                title: "Sustainable Growth",
                desc: "Building a financially strong and scalable microfinance institution.",
                color: "bg-amber-50 border-amber-200",
                iconColor: "text-amber-600",
              },
              {
                title: "Trust & Transparency",
                desc: "Operating with integrity, fairness, and ethical lending practices.",
                color: "bg-purple-50 border-purple-200",
                iconColor: "text-purple-600",
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
