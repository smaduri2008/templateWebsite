"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Wifi, WashingMachine, Coffee, Shield, Scissors, Droplets, Tv, ParkingCircle } from "lucide-react";

const amenities = [
  { icon: Wifi, label: "High-Speed Wi-Fi" },
  { icon: WashingMachine, label: "On-Site Laundry" },
  { icon: Coffee, label: "Professional Breakroom" },
  { icon: Shield, label: "24/7 Secure Entry" },
  { icon: Scissors, label: "Backbar Products Available" },
  { icon: Droplets, label: "Shampoo Bowls Included" },
  { icon: Tv, label: "Waiting Area with TV" },
  { icon: ParkingCircle, label: "Free Client Parking" },
];

export default function AmenitiesList() {
  return (
    <section className="py-24 px-6 bg-[#f9f7f4]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a96e] uppercase tracking-[0.3em] text-sm mb-3 font-sans">
            Everything Included
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d]">
            Premium Amenities
          </h2>
          <p className="text-[#2d2d2d]/60 mt-4 font-sans max-w-xl mx-auto">
            Everything you need to run a world-class beauty business — included
            in your monthly rent.
          </p>
        </motion.div>

        {/* Image + Amenities Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full h-80 lg:h-[450px]">
              <Image
                src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&q=80"
                alt="Luxury salon amenities"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-[#c9a96e] hidden lg:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {amenities.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-white border border-[#2d2d2d]/10 hover:border-[#c9a96e] transition-colors group"
                >
                  <div className="w-9 h-9 flex items-center justify-center bg-[#c9a96e]/10 group-hover:bg-[#c9a96e]/20 transition-colors shrink-0">
                    <Icon size={18} className="text-[#c9a96e]" />
                  </div>
                  <span className="text-[#2d2d2d] font-sans text-sm font-medium">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
