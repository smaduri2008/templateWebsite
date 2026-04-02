"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#2d2d2d]/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#c9a96e] uppercase tracking-[0.3em] text-sm mb-4 font-sans"
        >
          Luxury Beauty &amp; Wellness
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-[#f9f7f4] leading-tight mb-6"
        >
          Experience Personalized Care,{" "}
          <span className="text-[#c9a96e]">Your Way.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[#f9f7f4]/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-sans leading-relaxed"
        >
          Discover top-rated beauty professionals — all under one roof. From
          hair styling to skincare and massage therapy, your perfect look
          and lasting relaxation are just one booking away.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-[#c9a96e] hover:bg-[#b8944f] text-[#2d2d2d] font-bold px-8 py-4 rounded-none transition-all duration-300 text-sm uppercase tracking-widest font-sans"
          >
            Book Your Salon Experience
            <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 border border-[#f9f7f4]/50 hover:border-[#c9a96e] text-[#f9f7f4] hover:text-[#c9a96e] px-8 py-4 rounded-none transition-all duration-300 text-sm uppercase tracking-widest font-sans"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#f9f7f4]/50 text-xs uppercase tracking-widest font-sans">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-12 bg-gradient-to-b from-[#c9a96e] to-transparent"
        />
      </motion.div>
    </section>
  );
}
