"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is FlexiFund?",
    answer:
      "FlexiFund (Private) Limited is a registered and RBZ-licensed microfinance institution in Zimbabwe (Licence No. 000994). We provide accessible, flexible, and sustainable financial solutions including salary loans, school fees loans, collateral-based loans, product financing, SSB government loans, and foreign currency lending.",
  },
  {
    question: "Is FlexiFund licensed by the Reserve Bank of Zimbabwe?",
    answer:
      "Yes, FlexiFund is fully licensed by the Reserve Bank of Zimbabwe under Licence Number 000994 to provide lending services in foreign currency. We are fully compliant with all RBZ regulations and operate with the highest standards of governance.",
  },
  {
    question: "What types of loans does FlexiFund offer?",
    answer:
      "We offer six main loan products: Salary-Based Loans for salaried employees, Collateral-Based Loans secured against assets, School Fees Loans for education expenses, Product Financing for asset purchases, SSB Government Loans for government employees, and Foreign Currency Lending in forex.",
  },
  {
    question: "How do I apply for a loan at FlexiFund?",
    answer:
      "You can apply by visiting our office at No. 1 Union Avenue, Harare, calling us at +263 788 089 061 or +263 787 543 916, or emailing info@flexifund.co.zw. Our team will guide you through the fast and simple application process.",
  },
  {
    question: "Where is FlexiFund located?",
    answer:
      "Our head office is at Office 9, Suite 4, Centre Wing, Number 1 Union Avenue, Harare, Zimbabwe. We are open Monday to Friday 8:00 AM – 5:00 PM and Saturday 8:00 AM – 1:00 PM.",
  },
  {
    question: "Does FlexiFund offer loans in foreign currency?",
    answer:
      "Yes, FlexiFund is licensed by the Reserve Bank of Zimbabwe to provide lending services in foreign currency. Our Foreign Currency Lending product is fully compliant with RBZ regulations.",
  },
  {
    question: "Can government employees get loans from FlexiFund?",
    answer:
      "Yes, we offer SSB Government Loans specifically tailored for government employees with special terms and streamlined processing through SSB (Salary Service Bureau) deductions.",
  },
  {
    question:
      "What makes FlexiFund different from other microfinance institutions?",
    answer:
      "FlexiFund stands out through its RBZ licensing, fast loan processing, transparent terms, flexible repayment options, foreign currency lending capability, and commitment to financial inclusion. Our core values of integrity, accessibility, accountability, and customer-centricity guide every interaction.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Got Questions? We Have Answers
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Everything you need to know about FlexiFund and our microfinance
            services in Zimbabwe.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between bg-white rounded-xl px-6 py-5 text-left shadow-sm border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-200"
              >
                <span className="text-[15px] font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-60 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 py-4 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
