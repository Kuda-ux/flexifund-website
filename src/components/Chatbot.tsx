"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "bot" | "user";
  text: string;
};

const quickReplies = [
  "What loans do you offer?",
  "How do I apply?",
  "What are the requirements?",
  "Where are you located?",
  "Contact details",
];

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();

  if (
    lower.includes("loan") &&
    (lower.includes("type") || lower.includes("offer") || lower.includes("what"))
  ) {
    return "We offer 5 loan products:\n\n• Salary-Based Loans\n• Collateral-Based Loans\n• School Fees Loans\n• Product Financing\n• SSB Government Loans\n\nWould you like to know the requirements for any of these?";
  }

  if (lower.includes("salary") && (lower.includes("loan") || lower.includes("based"))) {
    return "Our Salary-Based Loans are for permanently employed individuals. You'll need:\n\n• Valid national ID\n• Latest 3 months' payslips\n• 3 months' bank statements\n• Employment letter\n• Proof of residence\n\nFunds can be processed within 24–48 hours!";
  }

  if (lower.includes("collateral")) {
    return "Collateral-Based Loans let you use assets as security for higher loan amounts. Requirements:\n\n• Valid national ID\n• Proof of asset ownership\n• Asset valuation report\n• 3 months' bank statements\n• Proof of residence";
  }

  if (lower.includes("school") || lower.includes("fees") || lower.includes("education")) {
    return "Our School Fees Loans cover tuition, boarding, and related expenses for primary, secondary, and tertiary education. You'll need:\n\n• Valid national ID\n• School fees invoice\n• 3 months' payslips or proof of income\n• 3 months' bank statements\n• Proof of residence";
  }

  if (lower.includes("product") && (lower.includes("financ") || lower.includes("loan"))) {
    return "Product Financing helps you acquire electronics, furniture, appliances, and more with structured repayments. Requirements:\n\n• Valid national ID\n• Quotation or proforma invoice\n• 3 months' payslips or proof of income\n• 3 months' bank statements\n• Proof of residence";
  }

  if (lower.includes("ssb") || lower.includes("government")) {
    return "SSB Government Loans are exclusively for government employees with salary deductions via SSB. You'll need:\n\n• Valid national ID\n• Government employee ID / staff card\n• 3 months' payslips (showing SSB deductions)\n• 3 months' bank statements\n• Confirmation letter from employer";
  }

  if (lower.includes("apply") || lower.includes("how do i")) {
    return "You can apply by:\n\n1. Visiting our office at First Floor, Office 9, Suite 4, Centre Wing, No. 1 Union Avenue, Harare\n2. Calling us at +263 788 089 061 or +263 787 543 916\n3. Emailing info@flexifund.co.zw\n4. Using the contact form on this website\n\nOur team will guide you through the fast and simple process!";
  }

  if (lower.includes("requirement") || lower.includes("document") || lower.includes("need")) {
    return "General requirements for most loans include:\n\n• Valid national ID or passport\n• Latest 3 months' payslips or proof of income\n• 3 months' bank statements\n• Proof of residence\n\nSpecific products may require additional documents. Which loan are you interested in?";
  }

  if (lower.includes("where") || lower.includes("location") || lower.includes("address") || lower.includes("office")) {
    return "Our head office is at:\n\nFirst Floor, Office 9, Suite 4\nCentre Wing, Number 1 Union Avenue\nHarare, Zimbabwe\n\nBusiness Hours:\nMon–Fri: 8:00 AM – 5:00 PM\nSaturday: 8:00 AM – 1:00 PM";
  }

  if (lower.includes("contact") || lower.includes("phone") || lower.includes("email") || lower.includes("call")) {
    return "You can reach us at:\n\n📞 +263 788 089 061\n📞 +263 787 543 916\n✉️ info@flexifund.co.zw\n\nOr use the contact form on this website — we respond within 24 hours!";
  }

  if (lower.includes("hour") || lower.includes("open") || lower.includes("time")) {
    return "Our business hours are:\n\nMonday – Friday: 8:00 AM – 5:00 PM\nSaturday: 8:00 AM – 1:00 PM\nSunday & Public Holidays: Closed";
  }

  if (lower.includes("interest") || lower.includes("rate")) {
    return "Our interest rates are competitive and vary by loan product. For specific rates, please contact our team at +263 788 089 061 or visit our office for a personalised quote.";
  }

  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey") || lower.includes("good")) {
    return "Hello! 👋 Welcome to FlexiFund. How can I help you today? You can ask me about our loan products, requirements, how to apply, or our contact details.";
  }

  if (lower.includes("thank")) {
    return "You're welcome! If you have any other questions, feel free to ask. You can also reach our team directly at +263 788 089 061. Have a great day! 😊";
  }

  return "I'd be happy to help! You can ask me about:\n\n• Our loan products\n• Requirements for each loan\n• How to apply\n• Our location and contact details\n• Business hours\n\nOr contact our team directly at +263 788 089 061 for personalised assistance.";
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hello! 👋 Welcome to FlexiFund. I'm here to help you with information about our loan products, requirements, and how to apply. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend(text?: string) {
    const msg = text || input.trim();
    if (!msg) return;

    const userMsg: Message = { role: "user", text: msg };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const botResponse = getBotResponse(msg);
      setMessages((prev) => [...prev, { role: "bot", text: botResponse }]);
    }, 500);
  }

  return (
    <>
      {/* Chat toggle button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 cursor-pointer"
            aria-label="Open chat"
          >
            <MessageCircle size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
            style={{ height: "min(520px, calc(100vh - 6rem))" }}
          >
            {/* Header */}
            <div className="bg-[#0c2d48] text-white px-5 py-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center">
                  <Bot size={18} />
                </div>
                <div>
                  <p className="font-bold text-sm">FlexiFund Assistant</p>
                  <p className="text-blue-200/60 text-xs">Online now</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "bot" && (
                    <div className="w-7 h-7 bg-[#0c2d48] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot size={14} className="text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-primary text-white rounded-br-md"
                        : "bg-white text-gray-700 border border-gray-100 shadow-sm rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <User size={14} className="text-primary" />
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies */}
            {messages.length <= 2 && (
              <div className="px-4 py-2 border-t border-gray-100 bg-white flex-shrink-0">
                <div className="flex flex-wrap gap-1.5">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleSend(reply)}
                      className="text-xs bg-blue-50 text-primary px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors cursor-pointer font-medium"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="px-4 py-3 border-t border-gray-100 bg-white flex-shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="w-10 h-10 bg-primary hover:bg-primary-dark text-white rounded-xl flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
