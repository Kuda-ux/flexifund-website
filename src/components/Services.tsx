"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, CheckCircle, FileText } from "lucide-react";

const services = [
  {
    title: "Salary-Based Loans",
    description:
      "Quick and accessible loans for salaried employees, designed to bridge financial gaps between pay cycles with flexible repayment terms.",
    details: [
      "Available to permanently employed individuals",
      "Loan amounts based on your net salary",
      "Flexible repayment periods of up to 12 months",
      "Quick processing — funds within 24–48 hours",
      "No hidden fees or charges",
    ],
    requirements: [
      "Valid national ID or passport",
      "Latest 3 months' payslips",
      "3 months' bank statements",
      "Proof of employment (employment letter)",
      "Proof of residence",
    ],
    image:
      "https://images.pexels.com/photos/5082976/pexels-photo-5082976.jpeg?auto=compress&cs=tinysrgb&w=800&fit=crop",
    alt: "Black African professional man working at his office desk",
  },
  {
    title: "Collateral-Based Loans",
    description:
      "Secured lending solutions with competitive rates, allowing you to leverage your assets for larger loan amounts and better terms.",
    details: [
      "Use vehicles, property, or other assets as security",
      "Higher loan amounts with competitive interest rates",
      "Flexible repayment terms tailored to your needs",
      "Professional asset valuation included",
      "Quick turnaround on approvals",
    ],
    requirements: [
      "Valid national ID or passport",
      "Proof of asset ownership (vehicle registration book, title deed, etc.)",
      "Asset valuation report (can be arranged by FlexiFund)",
      "3 months' bank statements",
      "Proof of residence",
    ],
    image:
      "https://images.pexels.com/photos/5082985/pexels-photo-5082985.jpeg?auto=compress&cs=tinysrgb&w=800&fit=crop",
    alt: "Black African business people shaking hands on a deal",
  },
  {
    title: "School Fees Loans",
    description:
      "Invest in education without financial stress. Our school fees loans ensure uninterrupted learning for your children.",
    details: [
      "Covers tuition, boarding, and related school expenses",
      "Available for primary, secondary, and tertiary education",
      "Direct payment to schools available",
      "Affordable repayment plans spread over the term",
      "Apply before or during the school term",
    ],
    requirements: [
      "Valid national ID or passport",
      "School fees invoice or quotation from the institution",
      "Latest 3 months' payslips or proof of income",
      "3 months' bank statements",
      "Proof of residence",
    ],
    image:
      "https://images.pexels.com/photos/8617938/pexels-photo-8617938.jpeg?auto=compress&cs=tinysrgb&w=800&fit=crop",
    alt: "Black African children studying happily in a classroom",
  },
  {
    title: "Product Financing",
    description:
      "Acquire essential products and assets through our flexible financing plans, making big purchases manageable with structured repayments.",
    details: [
      "Finance electronics, furniture, appliances, and more",
      "Structured monthly repayment plans",
      "Competitive rates with no balloon payments",
      "Quick approval process",
      "Partnerships with leading retailers",
    ],
    requirements: [
      "Valid national ID or passport",
      "Quotation or proforma invoice for the product",
      "Latest 3 months' payslips or proof of income",
      "3 months' bank statements",
      "Proof of residence",
    ],
    image:
      "https://images.pexels.com/photos/3869639/pexels-photo-3869639.jpeg?auto=compress&cs=tinysrgb&w=800&fit=crop",
    alt: "Black African woman professional with confidence",
  },
  {
    title: "SSB Government Loans",
    description:
      "Tailored lending solutions exclusively for government employees, with special terms and streamlined processing through SSB deductions.",
    details: [
      "Exclusive to government and civil service employees",
      "Repayments deducted directly from salary via SSB",
      "Special preferential interest rates",
      "Higher loan limits for qualifying employees",
      "Simplified documentation and fast processing",
    ],
    requirements: [
      "Valid national ID or passport",
      "Government employee ID / staff card",
      "Latest 3 months' payslips (showing SSB deductions)",
      "3 months' bank statements",
      "Confirmation letter from employer / HR department",
    ],
    image:
      "https://images.pexels.com/photos/5060991/pexels-photo-5060991.jpeg?auto=compress&cs=tinysrgb&w=800&fit=crop",
    alt: "Black African government employee in professional attire",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
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

        {/* Expandable details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="border-t border-gray-100 pt-4 mb-5 space-y-4">
                {/* Features */}
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                    <CheckCircle size={13} className="text-emerald-500" />
                    Key Features
                  </h4>
                  <ul className="space-y-1.5">
                    {service.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="w-1 h-1 bg-emerald-400 rounded-full flex-shrink-0 mt-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Requirements */}
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                    <FileText size={13} className="text-primary" />
                    Requirements
                  </h4>
                  <ul className="space-y-1.5">
                    {service.requirements.map((req, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-2" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all duration-200 cursor-pointer"
          >
            {expanded ? "Show Less" : "Learn More"}
            <ChevronDown
              size={15}
              className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </button>
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-1 bg-primary text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-primary-dark transition-all duration-200 cursor-pointer"
          >
            Apply Now
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

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
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
