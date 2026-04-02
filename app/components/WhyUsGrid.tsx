"use client";

import { motion } from "framer-motion";
import { Scissors, Sparkles, Hand, Heart } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Hair Styling",
    description:
      "From precision cuts and vibrant color to blowouts and extensions — our master stylists craft looks that turn heads and reflect your unique personality.",
  },
  {
    icon: Sparkles,
    title: "Skincare & Facials",
    description:
      "Revitalize your skin with customized facials, deep cleansing treatments, and anti-aging therapies designed to leave you glowing and refreshed.",
  },
  {
    icon: Hand,
    title: "Nail Art & Manicures",
    description:
      "Indulge in stunning nail artistry — from classic manicures and pedicures to elaborate nail designs that express your individual style.",
  },
  {
    icon: Heart,
    title: "Massage Therapy",
    description:
      "Melt away stress with therapeutic massage by certified specialists. Swedish, deep tissue, hot stone, and more — tailored to your needs.",
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
    <section id="services" className="py-24 px-6 bg-[#2d2d2d]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a96e] uppercase tracking-[0.3em] text-sm mb-3 font-sans">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f9f7f4]">
            Our Signature Services
          </h2>
          <p className="text-[#f9f7f4]/60 mt-4 font-sans max-w-xl mx-auto">
            Every service is delivered by an independent specialist in their
            own private suite — giving you a truly personal, distraction-free
            experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group bg-[#f9f7f4]/5 hover:bg-[#c9a96e]/10 border border-[#f9f7f4]/10 hover:border-[#c9a96e]/50 p-8 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#c9a96e]/20 mb-6 group-hover:bg-[#c9a96e]/30 transition-colors">
                  <Icon size={24} className="text-[#c9a96e]" />
                </div>
                <h3 className="text-xl font-bold text-[#f9f7f4] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#f9f7f4]/60 text-sm leading-relaxed font-sans">
                  {service.description}
                </p>
                <a
                  href="#booking"
                  className="inline-block mt-6 text-[#c9a96e] text-xs uppercase tracking-widest font-sans font-bold hover:underline"
                >
                  Book Now →
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
