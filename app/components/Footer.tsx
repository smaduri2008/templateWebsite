import { Globe, Share2, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-[#f9f7f4] font-bold text-2xl tracking-wider mb-4">
              LUXE<span className="text-[#c9a96e]">SUITE</span>
            </h3>
            <p className="text-[#f9f7f4]/50 font-sans text-sm leading-relaxed">
              Luxury private salon suites for independent beauty professionals.
              Elevate your brand. Keep your profits.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-[#f9f7f4]/20 hover:border-[#c9a96e] text-[#f9f7f4]/50 hover:text-[#c9a96e] transition-all"
                aria-label="Instagram"
              >
                <Globe size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-[#f9f7f4]/20 hover:border-[#c9a96e] text-[#f9f7f4]/50 hover:text-[#c9a96e] transition-all"
                aria-label="Facebook"
              >
                <Share2 size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#f9f7f4] font-bold text-sm uppercase tracking-widest mb-5 font-sans">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Suite Options", "Amenities", "Profit Calculator", "Testimonials", "Book a Tour"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#f9f7f4]/50 hover:text-[#c9a96e] font-sans text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#f9f7f4] font-bold text-sm uppercase tracking-widest mb-5 font-sans">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#c9a96e] mt-0.5 shrink-0" />
                <span className="text-[#f9f7f4]/50 font-sans text-sm">
                  1234 Luxury Blvd, Suite 100
                  <br />
                  Atlanta, GA 30301
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#c9a96e] shrink-0" />
                <a
                  href="tel:+14045550100"
                  className="text-[#f9f7f4]/50 hover:text-[#c9a96e] font-sans text-sm transition-colors"
                >
                  (404) 555-0100
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#c9a96e] shrink-0" />
                <a
                  href="mailto:hello@luxesuite.com"
                  className="text-[#f9f7f4]/50 hover:text-[#c9a96e] font-sans text-sm transition-colors"
                >
                  hello@luxesuite.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#f9f7f4]/10 pt-8 text-center">
          <p className="text-[#f9f7f4]/30 font-sans text-xs">
            © {new Date().getFullYear()} LuxeSuite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
