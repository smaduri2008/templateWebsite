"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const services = [
  "Hair Styling — Cut & Color",
  "Hair Styling — Blowout",
  "Hair Styling — Extensions",
  "Skincare — Custom Facial",
  "Skincare — Chemical Peel",
  "Skincare — Microdermabrasion",
  "Nail Art — Gel Manicure",
  "Nail Art — Acrylic Nails",
  "Nail Art — Pedicure",
  "Massage Therapy — Swedish",
  "Massage Therapy — Deep Tissue",
  "Massage Therapy — Hot Stone",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    date: "",
    time: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 px-6 bg-[#f9f7f4]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl">
          {/* Left Panel */}
          <div className="relative bg-[#2d2d2d] p-10 lg:p-14 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80')",
              }}
            />
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-[#c9a96e] uppercase tracking-[0.3em] text-sm mb-4 font-sans">
                  Reserve Your Spot
                </p>
                <h2 className="text-4xl font-bold text-[#f9f7f4] mb-6">
                  Book Your Salon Experience
                </h2>
                <p className="text-[#f9f7f4]/60 font-sans leading-relaxed mb-10">
                  Fill out the form and we&apos;ll confirm your appointment
                  within a few hours. Flexible scheduling available — morning,
                  afternoon, and evening slots.
                </p>

                <ul className="space-y-4">
                  {[
                    "Private, distraction-free suite experience",
                    "Top-rated specialists for every service",
                    "Premium products, personalized for you",
                    "Easy rescheduling, no cancellation hassle",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[#f9f7f4]/70 font-sans text-sm"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-[#c9a96e] shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Right Panel — Booking Form */}
          <div className="bg-white p-10 lg:p-14">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center gap-4 py-12"
              >
                <CheckCircle2 size={56} className="text-[#c9a96e]" />
                <h3 className="text-2xl font-bold text-[#2d2d2d]">
                  You&apos;re Booked!
                </h3>
                <p className="text-[#2d2d2d]/60 font-sans">
                  Thank you for booking with us. We&apos;ll confirm your
                  appointment details via phone or email shortly.
                </p>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Name */}
                <div>
                  <label className="block text-[#2d2d2d] text-sm font-bold mb-2 font-sans uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your full name"
                    className="w-full border border-[#2d2d2d]/20 focus:border-[#c9a96e] outline-none px-4 py-3 font-sans text-[#2d2d2d] placeholder:text-[#2d2d2d]/30 transition-colors"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-[#2d2d2d] text-sm font-bold mb-2 font-sans uppercase tracking-wider">
                    Service *
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full border border-[#2d2d2d]/20 focus:border-[#c9a96e] outline-none px-4 py-3 font-sans text-[#2d2d2d] appearance-none bg-white transition-colors cursor-pointer"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                      <svg
                        className="w-4 h-4 text-[#2d2d2d]/40"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#2d2d2d] text-sm font-bold mb-2 font-sans uppercase tracking-wider">
                      Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full border border-[#2d2d2d]/20 focus:border-[#c9a96e] outline-none px-4 py-3 font-sans text-[#2d2d2d] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[#2d2d2d] text-sm font-bold mb-2 font-sans uppercase tracking-wider">
                      Time *
                    </label>
                    <input
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      className="w-full border border-[#2d2d2d]/20 focus:border-[#c9a96e] outline-none px-4 py-3 font-sans text-[#2d2d2d] transition-colors"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[#2d2d2d] text-sm font-bold mb-2 font-sans uppercase tracking-wider">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="(555) 000-0000"
                    className="w-full border border-[#2d2d2d]/20 focus:border-[#c9a96e] outline-none px-4 py-3 font-sans text-[#2d2d2d] placeholder:text-[#2d2d2d]/30 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[#2d2d2d] text-sm font-bold mb-2 font-sans uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="you@example.com"
                    className="w-full border border-[#2d2d2d]/20 focus:border-[#c9a96e] outline-none px-4 py-3 font-sans text-[#2d2d2d] placeholder:text-[#2d2d2d]/30 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2d2d2d] hover:bg-[#c9a96e] text-[#f9f7f4] hover:text-[#2d2d2d] font-bold py-4 px-8 flex items-center justify-center gap-2 transition-all duration-300 text-sm uppercase tracking-widest font-sans"
                >
                  Confirm Booking
                  <Send size={16} />
                </button>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
