import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sun, Phone } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-dark shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Sun className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold leading-tight text-white">
                Helios
              </span>
              <span className="text-[10px] leading-tight text-white/60 tracking-wider uppercase">
                Smart Energy
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const hasSubmenu = "submenu" in link;
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    hasSubmenu && setActiveDropdown(link.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      scrolled
                        ? "text-white/80 hover:text-white hover:bg-white/10"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                    {hasSubmenu && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </a>
                  {hasSubmenu && (
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/20 border border-white/20 p-1.5"
                        >
                          {link.submenu.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              className="block px-4 py-2.5 rounded-lg text-sm text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                            >
                              {sub.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+2348001234567"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-orange-500/25"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Call Us</span>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden glass-dark border-t border-white/10 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => {
                const hasSubmenu = "submenu" in link;
                return (
                  <div key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => {
                        if (!hasSubmenu) setMobileOpen(false);
                      }}
                      className="block px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors font-medium"
                    >
                      {link.label}
                    </a>
                    {hasSubmenu && (
                      <div className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-3">
                        {link.submenu.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors text-sm"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="pt-3">
                <a
                  href="tel:+2348001234567"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  Call Helios Energy
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}