"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const specialties = [
  "Hairstylist",
  "Esthetician",
  "Nail Technician",
  "Barber",
  "Makeup Artist",
  "Lash Technician",
  "Massage Therapist",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to your backend or form service
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#f9f7f4]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl">
          {/* Left Panel */}
          <div className="relative bg-[#2d2d2d] p-10 lg:p-14 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80')",
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
                  Start Your Journey
                </p>
                <h2 className="text-4xl font-bold text-[#f9f7f4] mb-6">
                  Book a Private Tour
                </h2>
                <p className="text-[#f9f7f4]/60 font-sans leading-relaxed mb-10">
                  Ready to take control of your career? Fill out the form and
                  we&apos;ll schedule a private tour at your convenience. No
                  pressure, no commitment — just a chance to see if this is
                  right for you.
                </p>

                <ul className="space-y-4">
                  {[
                    "Personalized walkthrough of available suites",
                    "Transparent pricing — no hidden fees",
                    "Flexible month-to-month and annual leases",
                    "Move in as soon as 48 hours",
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

          {/* Right Panel — Form */}
          <div className="bg-white p-10 lg:p-14">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center gap-4 py-12"
              >
                <CheckCircle2 size={56} className="text-[#c9a96e]" />
                <h3 className="text-2xl font-bold text-[#2d2d2d]">
                  We&apos;ll Be in Touch!
                </h3>
                <p className="text-[#2d2d2d]/60 font-sans">
                  Thank you for your inquiry. A member of our team will contact
                  you within 24 hours to schedule your private tour.
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

                <div>
                  <label className="block text-[#2d2d2d] text-sm font-bold mb-2 font-sans uppercase tracking-wider">
                    Specialty *
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={formData.specialty}
                      onChange={(e) =>
                        setFormData({ ...formData, specialty: e.target.value })
                      }
                      className="w-full border border-[#2d2d2d]/20 focus:border-[#c9a96e] outline-none px-4 py-3 font-sans text-[#2d2d2d] appearance-none bg-white transition-colors cursor-pointer"
                    >
                      <option value="" disabled>
                        Select your specialty
                      </option>
                      {specialties.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                      <svg className="w-4 h-4 text-[#2d2d2d]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

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

                <div>
                  <label className="block text-[#2d2d2d] text-sm font-bold mb-2 font-sans uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about yourself or any questions you have..."
                    className="w-full border border-[#2d2d2d]/20 focus:border-[#c9a96e] outline-none px-4 py-3 font-sans text-[#2d2d2d] placeholder:text-[#2d2d2d]/30 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2d2d2d] hover:bg-[#c9a96e] text-[#f9f7f4] hover:text-[#2d2d2d] font-bold py-4 px-8 flex items-center justify-center gap-2 transition-all duration-300 text-sm uppercase tracking-widest font-sans"
                >
                  Request Private Tour
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
