"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      "Office 9, Suite 4, Centre Wing",
      "Number 1, Union Avenue",
      "Harare, Zimbabwe",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+263 788 089 061", "+263 787 543 916"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@flexifund.co.zw"],
  },
  {
    icon: Globe,
    title: "Website",
    details: ["www.flexifund.co.zw"],
  },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Web3Forms API — sends email to info@flexifund.co.zw
    // To activate: go to https://web3forms.com, enter info@flexifund.co.zw,
    // verify the email, and replace the access_key below with your key.
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");
    formData.append("from_name", "FlexiFund Website Contact Form");
    formData.append("to", "info@flexifund.co.zw");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-50">
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
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact Us Today
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ready to take the next step? Reach out to us and let our team help
            you find the right financial solution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left column: image + contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Contact image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              <Image
                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&fit=crop"
                alt="Black African woman professional smiling warmly"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c2d48]/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold">We&apos;re Here to Help</p>
                <p className="text-blue-100/70 text-sm">
                  Reach out and let&apos;s discuss your financial needs.
                </p>
              </div>
            </div>

            {/* Contact cards */}
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-0.5">
                      {item.title}
                    </h3>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-gray-500 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Business hours */}
            <div className="bg-[#0c2d48] rounded-xl p-5 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={18} className="text-cyan-300" />
                <h3 className="font-bold text-sm">Business Hours</h3>
              </div>
              <div className="space-y-0.5 text-blue-200/70 text-sm">
                <p>Monday – Friday: 8:00 AM – 5:00 PM</p>
                <p>Saturday: 8:00 AM – 1:00 PM</p>
                <p>Sunday & Public Holidays: Closed</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                Send Us a Message
              </h3>
              <p className="text-gray-400 mb-7 text-sm">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              {status === "success" && (
                <div className="mb-6 flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg px-4 py-3 text-sm">
                  <CheckCircle size={18} />
                  Message sent successfully! We&apos;ll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
                  Something went wrong. Please try again or email us directly at info@flexifund.co.zw
                </div>
              )}

              <form className="space-y-5" onSubmit={handleSubmit}>
                <input type="hidden" name="subject" value="New Contact Form Submission — FlexiFund Website" />
                <input type="hidden" name="replyto" value="" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      placeholder="+263 7XX XXX XXX"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="loan_type"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Loan Type
                    </label>
                    <select
                      id="loan_type"
                      name="loan_type"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-gray-700"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Salary-Based Loan">Salary-Based Loan</option>
                      <option value="Collateral-Based Loan">Collateral-Based Loan</option>
                      <option value="School Fees Loan">School Fees Loan</option>
                      <option value="Product Financing">Product Financing</option>
                      <option value="SSB Government Loan">SSB Government Loan</option>
                      <option value="Foreign Currency Lending">Foreign Currency Lending</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
