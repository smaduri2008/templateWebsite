"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const professionals = [
  {
    id: "maya",
    name: "Maya Johnson",
    specialty: "Master Hair Stylist",
    services: ["Cuts & Color", "Balayage", "Extensions", "Blowouts"],
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80",
    rating: 4.9,
    reviews: 214,
    quote:
      "I specialize in transformative color work and cuts that complement your face shape and lifestyle. Every client leaves feeling like the best version of themselves.",
  },
  {
    id: "camille",
    name: "Camille Torres",
    specialty: "Licensed Esthetician",
    services: ["Custom Facials", "Chemical Peels", "Microdermabrasion", "Brow Shaping"],
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&q=80",
    rating: 5.0,
    reviews: 178,
    quote:
      "Healthy, glowing skin is possible for everyone. I use medical-grade products and personalized protocols to address your unique skin concerns.",
  },
  {
    id: "destiny",
    name: "Destiny Moore",
    specialty: "Nail Artist & Technician",
    services: ["Gel Manicures", "Acrylic Nails", "Nail Art", "Pedicures"],
    avatar:
      "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=600&q=80",
    rating: 4.8,
    reviews: 162,
    quote:
      "Your nails are a canvas — let me turn them into a masterpiece. From minimalist chic to bold artistry, I create designs that match your personality.",
  },
];

export default function SuiteOptions() {
  const [selected, setSelected] = useState("maya");
  const active = professionals.find((p) => p.id === selected)!;

  return (
    <section id="professionals" className="py-24 px-6 bg-[#f9f7f4]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a96e] uppercase tracking-[0.3em] text-sm mb-3 font-sans">
            Meet the Experts
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d]">
            Featured Professionals
          </h2>
          <p className="text-[#2d2d2d]/60 mt-4 font-sans max-w-xl mx-auto">
            Hand-picked beauty specialists, each with their own private suite
            and a passion for delivering exceptional results.
          </p>
        </motion.div>

        {/* Professional Selector Tabs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          {professionals.map((pro) => (
            <button
              key={pro.id}
              onClick={() => setSelected(pro.id)}
              className={`px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-300 font-sans ${
                selected === pro.id
                  ? "bg-[#2d2d2d] text-[#c9a96e]"
                  : "bg-transparent border border-[#2d2d2d]/30 text-[#2d2d2d]/60 hover:border-[#2d2d2d] hover:text-[#2d2d2d]"
              }`}
            >
              {pro.name.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Professional Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl"
          >
            {/* Photo */}
            <div className="relative h-80 lg:h-auto overflow-hidden">
              <Image
                src={active.avatar}
                alt={active.name}
                fill
                className="object-cover object-top"
              />
              {/* Rating badge */}
              <div className="absolute top-6 right-6 bg-[#c9a96e] text-[#2d2d2d] px-4 py-2 font-bold text-sm font-sans z-10 flex items-center gap-1">
                <Star size={14} className="fill-[#2d2d2d]" />
                {active.rating} ({active.reviews} reviews)
              </div>
            </div>

            {/* Details */}
            <div className="bg-[#2d2d2d] p-10 lg:p-14">
              <span className="text-[#c9a96e] text-sm uppercase tracking-widest font-sans">
                {active.specialty}
              </span>
              <h3 className="text-3xl font-bold text-[#f9f7f4] mt-2 mb-4">
                {active.name}
              </h3>
              <p className="text-[#f9f7f4]/70 mb-8 font-sans leading-relaxed italic">
                &ldquo;{active.quote}&rdquo;
              </p>

              <p className="text-[#c9a96e] text-xs uppercase tracking-widest font-sans mb-3">
                Services Offered
              </p>
              <ul className="space-y-2 mb-10">
                {active.services.map((svc) => (
                  <li
                    key={svc}
                    className="flex items-center gap-3 text-[#f9f7f4]/80 font-sans text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] shrink-0" />
                    {svc}
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className="inline-block bg-[#c9a96e] hover:bg-[#b8944f] text-[#2d2d2d] font-bold px-8 py-3 text-sm uppercase tracking-widest font-sans transition-colors"
              >
                Book with {active.name.split(" ")[0]}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
