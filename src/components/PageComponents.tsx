import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  House,
  Building2,
  Zap,
  Droplets,
  Wrench,
  ClipboardList,
  ChevronRight,
  Check,
  Star,
  Phone,
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
  Shield,
  Handshake,
  BookOpen,
  BarChart3,
} from "lucide-react";
import {
  BRAND,
  SERVICES,
  PROJECTS,
  TESTIMONIALS,
  STATS,
  TEAM_MEMBERS,
} from "@/constants";

// ─── Icon Map ───────────────────────────────────────────────────────
const iconMap: Record<string, React.ElementType> = {
  House,
  Building2,
  Zap,
  Droplets,
  Wrench,
  ClipboardList,
};

// ─── Fade In Up Wrapper ──────────────────────────────────────────────
function FadeInUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── CountUp Animation ───────────────────────────────────────────────
function CountUp({
  end,
  suffix = "",
  duration = 2,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// ─── Hero Section ────────────────────────────────────────────────────
export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/solar-hero-nigeria.webp"
          alt="Solar panels in Nigeria"
          className="w-full h-full object-cover"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0a1628]/70 to-[#0a1628]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/60 to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-xs font-medium tracking-wide mb-6">
              <Zap className="w-3.5 h-3.5 text-orange-400" />
              Nigeria's Trusted Solar Energy Partner
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Powering{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Nigeria's Future
            </span>{" "}
            with Solar Energy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed mb-8"
          >
            Reliable, affordable, and sustainable solar solutions for homes,
            businesses, and communities across Nigeria.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all duration-200 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
            >
              Get a Free Quote
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium backdrop-blur-sm border border-white/10 transition-all"
            >
              Explore Services
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10"
          >
            {STATS.slice(0, 3).map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">
                  <CountUp
                    end={parseInt(stat.value.replace(/[^0-9]/g, ""))}
                    suffix={stat.suffix || "+"}
                    duration={2.5}
                  />
                </span>
                <span className="text-xs text-white/50">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── About Section ───────────────────────────────────────────────────
export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image collage */}
          <FadeInUp className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/images/solar-engineer-team.webp"
                alt="Helios solar engineering team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl shadow-black/10 p-4 border border-white/50 max-w-[200px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900">
                    {BRAND.founded}+
                  </div>
                  <div className="text-xs text-slate-500">Years of Trust</div>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Right: Content */}
          <FadeInUp delay={0.15}>
            <span className="text-xs font-semibold tracking-widest uppercase text-orange-600">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-6 leading-tight">
              Nigeria's Leading Solar Energy{" "}
              <span className="text-orange-600">Solutions Provider</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Founded in {BRAND.founded}, Helios Smart Energy Nigeria Limited
              has grown to become one of Nigeria's most trusted renewable energy
              companies. We have successfully delivered over {BRAND.projectsCompleted}{" "}
              solar projects nationwide, from residential rooftop installations
              to large-scale commercial and industrial solar farms.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Our team of certified engineers, project managers, and energy
              analysts brings decades of combined experience in the Nigerian
              energy sector. We are committed to making clean, reliable, and
              affordable solar energy accessible to every Nigerian.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Projects Completed", value: BRAND.projectsCompleted },
                { label: "MW Installed", value: BRAND.megawattsInstalled },
                { label: "Team Members", value: BRAND.employees },
                { label: "Satisfaction", value: BRAND.satisfactionRate },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-100"
                >
                  <div className="text-xl font-bold text-slate-900">
                    {item.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

// ─── Services Section ────────────────────────────────────────────────
export function ServicesSection() {
  const [activeService, setActiveService] = useState(SERVICES[0].id);

  return (
    <section id="services" className="relative py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-orange-600">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Comprehensive Solar Energy Solutions
          </h2>
          <p className="text-slate-500">
            From residential rooftops to industrial-scale installations, we
            deliver end-to-end solar solutions tailored to your needs.
          </p>
        </FadeInUp>

        {/* Service tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || House;
            const isActive = activeService === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{service.title}</span>
                <span className="sm:hidden">{service.title.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active service detail */}
        <AnimatePresence mode="wait">
          {SERVICES.filter((s) => s.id === activeService).map((service) => {
            const Icon = iconMap[service.icon] || House;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden"
              >
                <div className="grid lg:grid-cols-5">
                  <div className="lg:col-span-3 p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {service.longDescription}
                    </p>
                    <div className="space-y-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-600">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm transition-all shadow-lg shadow-orange-500/20"
                    >
                      Enquire About This Service
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="lg:col-span-2 relative min-h-[250px] lg:min-h-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-black/20 to-transparent" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}

// ─── Stats Counter Bar ───────────────────────────────────────────────
export function StatsSection() {
  return (
    <section className="relative py-16 bg-gradient-to-r from-[#0a1628] to-[#0d2137]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <FadeInUp key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  <CountUp
                    end={parseInt(stat.value.replace(/[^0-9]/g, ""))}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Projects Section ────────────────────────────────────────────────
export function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const categories = [
    "All",
    ...new Set(PROJECTS.map((p) => p.category)),
  ];
  const filtered =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-orange-600">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-500">
            From residential estates to industrial complexes, explore our
            portfolio of successful solar installations across Nigeria.
          </p>
        </FadeInUp>

        {/* Filter tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <FadeInUp key={project.id} delay={i * 0.08}>
              <div className="group relative bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-xs font-medium text-slate-700">
                    {project.category}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                    <span className="text-xs text-white/80 bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-md">
                      {project.capacity}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                    <span className="ml-auto">{project.year}</span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials Section ────────────────────────────────────────────
export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="relative py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-orange-600">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-500">
            Hear from the businesses, homeowners, and communities we've
            empowered with reliable solar energy.
          </p>
        </FadeInUp>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < TESTIMONIALS[active].rating
                        ? "text-amber-400 fill-amber-400"
                        : "text-slate-200"
                    }`}
                  />
                ))}
              </div>
              <blockquote className="text-lg text-slate-700 leading-relaxed mb-8 italic">
                &ldquo;{TESTIMONIALS[active].text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white font-bold text-sm">
                  {TESTIMONIALS[active].name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    {TESTIMONIALS[active].name}
                  </div>
                  <div className="text-sm text-slate-500">
                    {TESTIMONIALS[active].title},{" "}
                    {TESTIMONIALS[active].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "bg-orange-500 w-8"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Team Section ────────────────────────────────────────────────────
export function TeamSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-orange-600">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Meet the Experts
          </h2>
          <p className="text-slate-500">
            A dedicated team of engineers, project managers, and energy
            professionals committed to powering Nigeria's future.
          </p>
        </FadeInUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member, i) => (
            <FadeInUp key={member.name} delay={i * 0.08}>
              <div className="group p-6 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white font-bold text-lg mb-4">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-sm text-orange-600 font-medium mb-3">
                  {member.title}
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact Section ─────────────────────────────────────────────────
export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate send
    setTimeout(() => {
      setSubmitted(true);
      setFormState({ name: "", email: "", phone: "", service: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-orange-600">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Let's Power Your Future
          </h2>
          <p className="text-slate-500">
            Ready to switch to solar? Fill out the form below and our team will
            get back to you within 24 hours.
          </p>
        </FadeInUp>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {[
              {
                icon: Phone,
                label: "Phone",
                value: BRAND.phone,
                href: `tel:${BRAND.phone.replace(/\s/g, "")}`,
              },
              {
                icon: Mail,
                label: "Email",
                value: BRAND.email,
                href: `mailto:${BRAND.email}`,
              },
              {
                icon: MapPin,
                label: "Address",
                value: BRAND.address,
                href: null,
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-slate-500 hover:text-orange-600 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-500">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-3">
                Follow us on social media
              </p>
              <div className="flex items-center gap-3">
                {[
                  { icon: Handshake, label: "LinkedIn" },
                  { icon: BookOpen, label: "Facebook" },
                  { icon: Send, label: "Twitter" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-orange-100 flex items-center justify-center text-slate-400 hover:text-orange-600 transition-all"
                    aria-label={s.label}
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-10 text-center border border-slate-100 shadow-xl"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-slate-500 mb-6">
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm transition-all"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-xl space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all"
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Service Interested In
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) =>
                        setFormState({ ...formState, service: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all"
                    >
                      <option value="">Select a service</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all resize-none"
                    placeholder="Tell us about your project or requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all shadow-lg shadow-orange-500/25"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── WhatsApp Widget ─────────────────────────────────────────────────
export function WhatsAppWidget() {
  return (
    <a
      href={`https://wa.me/${BRAND.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 transition-all duration-300 hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        fill="white"
        className="w-7 h-7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}