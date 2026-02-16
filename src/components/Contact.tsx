"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Clock, Send } from "lucide-react";

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
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-50">
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
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Business hours */}
            <div className="bg-gradient-to-br from-[#1a7ab5] to-[#155d8b] rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <Clock size={20} className="text-cyan-200" />
                <h3 className="font-bold">Business Hours</h3>
              </div>
              <div className="space-y-1 text-blue-100 text-sm">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h3>
              <p className="text-gray-500 mb-8 text-sm">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const name = (
                    form.elements.namedItem("name") as HTMLInputElement
                  ).value;
                  const email = (
                    form.elements.namedItem("email") as HTMLInputElement
                  ).value;
                  const phone = (
                    form.elements.namedItem("phone") as HTMLInputElement
                  ).value;
                  const subject = (
                    form.elements.namedItem("subject") as HTMLSelectElement
                  ).value;
                  const message = (
                    form.elements.namedItem("message") as HTMLTextAreaElement
                  ).value;

                  const mailtoLink = `mailto:info@flexifund.co.zw?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`)}`;
                  window.location.href = mailtoLink;
                }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      placeholder="+263 7XX XXX XXX"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-gray-700"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Salary-Based Loan">
                        Salary-Based Loan
                      </option>
                      <option value="Collateral-Based Loan">
                        Collateral-Based Loan
                      </option>
                      <option value="School Fees Loan">School Fees Loan</option>
                      <option value="Product Financing">
                        Product Financing
                      </option>
                      <option value="SSB Government Loan">
                        SSB Government Loan
                      </option>
                      <option value="Foreign Currency Lending">
                        Foreign Currency Lending
                      </option>
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
