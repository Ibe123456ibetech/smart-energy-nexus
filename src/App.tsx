import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  StatsSection,
  ProjectsSection,
  TestimonialsSection,
  TeamSection,
  ContactSection,
  WhatsAppWidget,
} from "@/components/PageComponents";

export default function App() {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest<HTMLAnchorElement>("a[href^='#']");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <StatsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <TeamSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppWidget />

      {/* Back to top */}
      <BackToTop />
    </div>
  );
}

function BackToTop() {
  useEffect(() => {
    const handleScroll = () => {
      const btn = document.getElementById("back-to-top");
      if (btn) {
        btn.classList.toggle("opacity-0", window.scrollY < 400);
        btn.classList.toggle("pointer-events-none", window.scrollY < 400);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.a
      id="back-to-top"
      href="#home"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-24 sm:bottom-28 right-6 z-40 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 flex items-center justify-center text-slate-600 shadow-lg hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 opacity-0 pointer-events-none"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Back to top"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </motion.a>
  );
}