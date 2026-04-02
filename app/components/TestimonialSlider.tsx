"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophia R.",
    service: "Hair Styling",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&q=80",
    quote:
      "I've never felt so pampered at a salon! The private suite was gorgeous — it felt like having my own personal stylist. Maya totally transformed my hair and I walked out feeling like a completely new person.",
    date: "March 2025",
  },
  {
    name: "Lauren K.",
    service: "Skincare & Facials",
    avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&q=80",
    quote:
      "Camille is an absolute gem. My skin has never looked better! The private suite setting meant the entire hour was just about me — no noise, no distractions. I've already booked my next appointment.",
    date: "February 2025",
  },
  {
    name: "Priya M.",
    service: "Nail Art & Manicures",
    avatar: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=150&q=80",
    quote:
      "Destiny's nail artistry is unreal — she turned my nails into tiny works of art. The whole experience was so relaxing and personal. I've been recommending LuxeSuite to all my friends!",
    date: "January 2025",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="py-24 px-6 bg-[#2d2d2d]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a96e] uppercase tracking-[0.3em] text-sm mb-3 font-sans">
            Client Love
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f9f7f4]">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-[#f9f7f4]/5 border border-[#f9f7f4]/10 p-10 md:p-14 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-[#c9a96e] fill-[#c9a96e]"
                  />
                ))}
              </div>

              <blockquote className="text-[#f9f7f4] text-lg md:text-xl leading-relaxed mb-10 italic">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#c9a96e]">
                  <Image
                    src={testimonials[current].avatar}
                    alt={testimonials[current].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[#f9f7f4] font-bold">
                    {testimonials[current].name}
                  </p>
                  <p className="text-[#c9a96e] text-sm font-sans">
                    {testimonials[current].service}
                  </p>
                  <p className="text-[#f9f7f4]/40 text-xs font-sans mt-1">
                    {testimonials[current].date}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 flex items-center justify-center border border-[#f9f7f4]/20 hover:border-[#c9a96e] text-[#f9f7f4]/60 hover:text-[#c9a96e] transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? "w-8 h-2 bg-[#c9a96e]"
                      : "w-2 h-2 bg-[#f9f7f4]/30 hover:bg-[#f9f7f4]/60"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 flex items-center justify-center border border-[#f9f7f4]/20 hover:border-[#c9a96e] text-[#f9f7f4]/60 hover:text-[#c9a96e] transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
