"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const suites = [
  {
    id: "standard",
    name: "Standard Suite",
    price: "$850/mo",
    sqft: "120 sq ft",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    description:
      "The perfect starting point for independent beauty professionals. Fully equipped and move-in ready.",
    amenities: [
      "Shampoo bowl & styling chair",
      "Built-in cabinetry & storage",
      "LED mirror with adjustable lighting",
      "Private entry door with keypad lock",
      "High-speed Wi-Fi included",
      "Climate control (heat & AC)",
    ],
  },
  {
    id: "window",
    name: "Window Suite",
    price: "$1,050/mo",
    sqft: "140 sq ft",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    description:
      "Bathe in natural light while you work. The premium window suite features stunning floor-to-ceiling windows.",
    amenities: [
      "Everything in Standard Suite",
      "Floor-to-ceiling windows",
      "Natural daylight lighting",
      "Premium décor package",
      "Extra counter workspace",
      "Upgraded salon chair",
    ],
  },
  {
    id: "double",
    name: "Double Suite",
    price: "$1,650/mo",
    sqft: "240 sq ft",
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80",
    description:
      "Maximum space for your growing brand. Ideal for stylists who want to bring on an assistant or junior stylist.",
    amenities: [
      "Everything in Window Suite",
      "Dual styling stations",
      "Two shampoo bowls",
      "Separate reception area",
      "Expanded storage & vanity",
      "Perfect for booth rental model",
    ],
  },
];

export default function SuiteOptions() {
  const [selected, setSelected] = useState("standard");
  const activeSuite = suites.find((s) => s.id === selected)!;

  return (
    <section id="suites" className="py-24 px-6 bg-[#f9f7f4]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a96e] uppercase tracking-[0.3em] text-sm mb-3 font-sans">
            Find Your Fit
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d]">
            Our Suite Options
          </h2>
        </motion.div>

        {/* Suite Selector Tabs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          {suites.map((suite) => (
            <button
              key={suite.id}
              onClick={() => setSelected(suite.id)}
              className={`px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-300 font-sans ${
                selected === suite.id
                  ? "bg-[#2d2d2d] text-[#c9a96e]"
                  : "bg-transparent border border-[#2d2d2d]/30 text-[#2d2d2d]/60 hover:border-[#2d2d2d] hover:text-[#2d2d2d]"
              }`}
            >
              {suite.name}
            </button>
          ))}
        </div>

        {/* Suite Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl"
          >
            {/* Image */}
            <div className="relative h-72 lg:h-auto overflow-hidden">
              <Image
                src={activeSuite.image}
                alt={activeSuite.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-6 right-6 bg-[#c9a96e] text-[#2d2d2d] px-4 py-2 font-bold text-sm font-sans z-10">
                {activeSuite.price}
              </div>
            </div>

            {/* Details */}
            <div className="bg-[#2d2d2d] p-10 lg:p-14">
              <span className="text-[#c9a96e] text-sm uppercase tracking-widest font-sans">
                {activeSuite.sqft}
              </span>
              <h3 className="text-3xl font-bold text-[#f9f7f4] mt-2 mb-4">
                {activeSuite.name}
              </h3>
              <p className="text-[#f9f7f4]/70 mb-8 font-sans leading-relaxed">
                {activeSuite.description}
              </p>

              <ul className="space-y-3">
                {activeSuite.amenities.map((amenity) => (
                  <li
                    key={amenity}
                    className="flex items-center gap-3 text-[#f9f7f4]/80 font-sans text-sm"
                  >
                    <CheckCircle2 size={18} className="text-[#c9a96e] shrink-0" />
                    {amenity}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-block mt-10 bg-[#c9a96e] hover:bg-[#b8944f] text-[#2d2d2d] font-bold px-8 py-3 text-sm uppercase tracking-widest font-sans transition-colors"
              >
                Inquire About This Suite
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
