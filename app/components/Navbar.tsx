"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Suites", href: "#suites" },
  { label: "Amenities", href: "#amenities" },
  { label: "Calculator", href: "#calculator" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#2d2d2d]/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-[#f9f7f4] font-bold text-xl tracking-wider">
          LUXE<span className="text-[#c9a96e]">SUITE</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[#f9f7f4]/70 hover:text-[#c9a96e] text-sm uppercase tracking-widest font-sans transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-[#c9a96e] hover:bg-[#b8944f] text-[#2d2d2d] font-bold px-6 py-2 text-sm uppercase tracking-widest font-sans transition-colors"
        >
          Book Tour
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#f9f7f4]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#2d2d2d] border-t border-[#f9f7f4]/10 px-6 pb-6"
        >
          <ul className="space-y-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block text-[#f9f7f4]/70 hover:text-[#c9a96e] text-sm uppercase tracking-widest font-sans py-1 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-block bg-[#c9a96e] text-[#2d2d2d] font-bold px-6 py-2 text-sm uppercase tracking-widest font-sans mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Book Tour
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
