"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function ProfitCalculator() {
  const [weeklyRevenue, setWeeklyRevenue] = useState(2000);
  const commissionRate = 0.4;
  const fixedRent = 1050;

  const weeklyGross = weeklyRevenue;
  const monthlyGross = weeklyGross * 4;

  const commissionLoss = monthlyGross * commissionRate;
  const commissionNet = monthlyGross - commissionLoss;

  const suiteNet = monthlyGross - fixedRent;
  const difference = suiteNet - commissionNet;

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <section className="py-24 px-6 bg-[#2d2d2d]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a96e] uppercase tracking-[0.3em] text-sm mb-3 font-sans">
            See the Numbers
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f9f7f4]">
            Profit Calculator
          </h2>
          <p className="text-[#f9f7f4]/60 mt-4 font-sans max-w-xl mx-auto">
            Drag the slider to estimate your weekly revenue and see how much more you keep in a salon suite.
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 max-w-xl mx-auto"
        >
          <label className="block text-[#f9f7f4]/80 font-sans text-sm mb-3 text-center">
            Weekly Revenue:{" "}
            <span className="text-[#c9a96e] font-bold text-lg">
              {formatCurrency(weeklyRevenue)}
            </span>
          </label>
          <input
            type="range"
            min={500}
            max={5000}
            step={100}
            value={weeklyRevenue}
            onChange={(e) => setWeeklyRevenue(Number(e.target.value))}
            className="w-full accent-[#c9a96e] cursor-pointer h-2"
          />
          <div className="flex justify-between text-[#f9f7f4]/40 text-xs font-sans mt-1">
            <span>$500</span>
            <span>$5,000</span>
          </div>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Commission Salon */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#f9f7f4]/5 border border-[#f9f7f4]/10 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingDown size={24} className="text-red-400" />
              <h3 className="text-xl font-bold text-[#f9f7f4]">
                Commission Salon
              </h3>
            </div>
            <p className="text-[#f9f7f4]/50 text-sm font-sans mb-6">
              40% commission to the salon owner
            </p>
            <div className="space-y-3 font-sans text-sm">
              <div className="flex justify-between text-[#f9f7f4]/70">
                <span>Monthly Gross</span>
                <span>{formatCurrency(monthlyGross)}</span>
              </div>
              <div className="flex justify-between text-red-400">
                <span>Commission (40%)</span>
                <span>− {formatCurrency(commissionLoss)}</span>
              </div>
              <div className="border-t border-[#f9f7f4]/10 pt-3 flex justify-between font-bold text-lg text-[#f9f7f4]">
                <span>You Keep</span>
                <span className="text-red-400">{formatCurrency(commissionNet)}</span>
              </div>
            </div>
          </motion.div>

          {/* Salon Suite */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#c9a96e]/10 border border-[#c9a96e]/50 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp size={24} className="text-[#c9a96e]" />
              <h3 className="text-xl font-bold text-[#f9f7f4]">
                Our Salon Suite
              </h3>
            </div>
            <p className="text-[#f9f7f4]/50 text-sm font-sans mb-6">
              Fixed rent of {formatCurrency(fixedRent)}/month — keep the rest
            </p>
            <div className="space-y-3 font-sans text-sm">
              <div className="flex justify-between text-[#f9f7f4]/70">
                <span>Monthly Gross</span>
                <span>{formatCurrency(monthlyGross)}</span>
              </div>
              <div className="flex justify-between text-[#c9a96e]/70">
                <span>Fixed Rent</span>
                <span>− {formatCurrency(fixedRent)}</span>
              </div>
              <div className="border-t border-[#c9a96e]/30 pt-3 flex justify-between font-bold text-lg text-[#f9f7f4]">
                <span>You Keep</span>
                <span className="text-[#c9a96e]">{formatCurrency(suiteNet)}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Difference Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 bg-[#c9a96e] p-6 text-center"
        >
          <p className="text-[#2d2d2d] font-sans text-sm uppercase tracking-widest mb-1">
            Monthly Advantage with a Salon Suite
          </p>
          <p className="text-[#2d2d2d] text-4xl font-bold">
            +{formatCurrency(difference)}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
