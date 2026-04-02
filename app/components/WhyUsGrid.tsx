"use client";

import { motion } from "framer-motion";
import { Clock, Zap, Gem, DollarSign } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Access",
    description:
      "Your suite, your schedule. Access your private space any time of day or night — because your clients don't always fit into a 9-to-5.",
  },
  {
    icon: Zap,
    title: "All-Inclusive Utilities",
    description:
      "Water, electricity, Wi-Fi, and climate control are all included in your monthly rate. No surprise bills, no hidden fees.",
  },
  {
    icon: Gem,
    title: "Luxury Modern Finishes",
    description:
      "Every suite features high-end cabinetry, premium lighting, and designer finishes that elevate your brand and impress your clients.",
  },
  {
    icon: DollarSign,
    title: "Keep 100% of Your Profits",
    description:
      "Stop splitting your hard-earned revenue with a salon owner. One fixed monthly rent — everything else is yours to keep.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function WhyUsGrid() {
  return (
    <section className="py-24 px-6 bg-[#2d2d2d]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a96e] uppercase tracking-[0.3em] text-sm mb-3 font-sans">
            The Difference
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f9f7f4]">
            Why Professionals Choose Us
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="group bg-[#f9f7f4]/5 hover:bg-[#c9a96e]/10 border border-[#f9f7f4]/10 hover:border-[#c9a96e]/50 p-8 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#c9a96e]/20 mb-6 group-hover:bg-[#c9a96e]/30 transition-colors">
                  <Icon size={24} className="text-[#c9a96e]" />
                </div>
                <h3 className="text-xl font-bold text-[#f9f7f4] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#f9f7f4]/60 text-sm leading-relaxed font-sans">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
