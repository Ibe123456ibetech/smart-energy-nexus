import { Sun, Mail, Phone, MapPin, Linkedin, Facebook, Twitter, ArrowUpRight } from "lucide-react";
import { BRAND, SERVICES } from "@/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a1628] overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Top wave accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <a
              href="#home"
              className="inline-flex items-center gap-2 mb-4"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <Sun className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold leading-tight text-white">
                  Helios
                </span>
                <span className="text-[10px] leading-tight text-white/50 tracking-wider uppercase">
                  Smart Energy
                </span>
              </div>
            </a>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm mb-6">
              {BRAND.description}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={BRAND.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-orange-500/20 flex items-center justify-center text-white/50 hover:text-orange-400 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={BRAND.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-orange-500/20 flex items-center justify-center text-white/50 hover:text-orange-400 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BRAND.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-orange-500/20 flex items-center justify-center text-white/50 hover:text-orange-400 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-white/50 hover:text-orange-400 transition-colors flex items-center gap-1 group"
                    >
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <a
                    href={`#services-${s.id}`}
                    className="text-sm text-white/50 hover:text-orange-400 transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-sm text-white/50 hover:text-orange-400 transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-orange-400/60 group-hover:text-orange-400" />
                  <span>{BRAND.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-start gap-3 text-sm text-white/50 hover:text-orange-400 transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-orange-400/60 group-hover:text-orange-400" />
                  <span>{BRAND.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/50">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-orange-400/60" />
                  <span>{BRAND.address}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              &copy; {year} {BRAND.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-white/40">
              <a href="#" className="hover:text-white/60 transition-colors">
                Privacy Policy
              </a>
              <span className="text-white/20">|</span>
              <a href="#" className="hover:text-white/60 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}