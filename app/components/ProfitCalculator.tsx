"use client";

import { motion } from "framer-motion";
import { Search, CalendarCheck, Sparkles, Repeat } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Browse & Choose",
    description:
      "Explore our curated roster of beauty specialists. Filter by service type, read reviews, and find the perfect match for your needs.",
  },
  {
    step: "02",
    icon: CalendarCheck,
    title: "Book Your Appointment",
    description:
      "Select your preferred date, time, and specialist using our easy booking form. Flexible scheduling available 7 days a week.",
  },
  {
    step: "03",
    icon: Sparkles,
    title: "Enjoy Private, Premium Service",
    description:
      "Arrive and be welcomed into a beautifully designed private suite. No crowds, no distractions — just you and your specialist.",
  },
  {
    step: "04",
    icon: Repeat,
    title: "Come Back & Rebook",
    description:
      "Loved your experience? Easily rebook with your favorite professional and build an ongoing relationship with your beauty team.",
  },
];

const highlights = [
  {
    stat: "20+",
    label: "Beauty Specialists",
  },
  {
    stat: "4 Types",
    label: "of Services",
  },
  {
    stat: "500+",
    label: "Happy Clients",
  },
  {
    stat: "5★",
    label: "Average Rating",
  },
];

export default function ProfitCalculator() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-[#2d2d2d]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a96e] uppercase tracking-[0.3em] text-sm mb-3 font-sans">
            Simple &amp; Seamless
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f9f7f4]">
            How It Works
          </h2>
          <p className="text-[#f9f7f4]/60 mt-4 font-sans max-w-2xl mx-auto">
            Multiple beauty experts, one location. We bring together the best
            independent specialists under one roof so you get premium, private
            service customized exactly for you.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-[#c9a96e]/20 font-bold text-6xl leading-none mb-4 font-sans">
                  {s.step}
                </div>
                <div className="w-12 h-12 flex items-center justify-center bg-[#c9a96e]/20 mb-4">
                  <Icon size={22} className="text-[#c9a96e]" />
                </div>
                <h3 className="text-xl font-bold text-[#f9f7f4] mb-3">
                  {s.title}
                </h3>
                <p className="text-[#f9f7f4]/60 text-sm leading-relaxed font-sans">
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#c9a96e] p-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {highlights.map((h) => (
            <div key={h.label}>
              <p className="text-[#2d2d2d] text-4xl font-bold mb-1">{h.stat}</p>
              <p className="text-[#2d2d2d]/70 text-sm uppercase tracking-widest font-sans">
                {h.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
