export const BRAND = {
  name: "Helios Smart Energy Nigeria Limited",
  shortName: "Helios Energy",
  tagline: "Powering Nigeria's Future",
  description:
    "Nigeria's premier solar and renewable energy solutions provider — delivering reliable, sustainable, and cost-effective energy to residential, commercial, and industrial clients across the nation.",
  email: "info@heliosenergy.ng",
  phone: "+234 800 123 4567",
  whatsapp: "+2348001234567",
  address: "42 Ahmadu Bello Way, Victoria Island, Lagos, Nigeria",
  founded: 2015,
  employees: "250+",
  projectsCompleted: "5,000+",
  megawattsInstalled: "150+ MW",
  satisfactionRate: "98%",
  social: {
    linkedin: "https://linkedin.com/company/heliosenergyng",
    facebook: "https://facebook.com/heliosenergyng",
    twitter: "https://twitter.com/heliosenergyng",
    instagram: "https://instagram.com/heliosenergyng",
  },
} as const;

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: "residential",
    title: "Residential Solar",
    slug: "residential",
    description:
      "Custom solar solutions for homes — cut your electricity bills by up to 70%.",
    longDescription:
      "From rooftop panels to complete off-grid systems, we design and install residential solar solutions tailored to your home's energy needs. Our residential packages include high-efficiency panels, smart inverters, battery storage, and real-time monitoring — all backed by comprehensive warranties and after-sales support.",
    icon: "House",
    features: [
      "High-efficiency monocrystalline panels (up to 22.5% efficiency)",
      "Hybrid inverters with grid-tie and off-grid capability",
      "Lithium-ion battery storage (5kWh – 20kWh)",
      "Real-time mobile monitoring app",
      "Professional installation & 5-year warranty",
      "Flexible financing options available",
    ],
    image: "/images/solar-residential-estate.webp",
  },
  {
    id: "commercial",
    title: "Commercial & Industrial",
    slug: "commercial",
    description:
      "Scalable solar systems for businesses, factories, and commercial properties.",
    longDescription:
      "Helios delivers turnkey commercial solar installations that reduce operational costs and enhance your sustainability credentials. We handle everything from feasibility studies and system design to procurement, installation, and ongoing maintenance — ensuring your business stays powered without interruption.",
    icon: "Building2",
    features: [
      "Custom system design from 50kW to 2MW+",
      "Ground-mount and rooftop configurations",
      "C&I battery storage solutions (50kWh – 5MWh)",
      "Power Purchase Agreements (PPA) available",
      "Carbon footprint tracking & reporting",
      "24/7 remote monitoring & maintenance",
    ],
    image: "/images/solar-commercial-factory.webp",
  },
  {
    id: "mini-grid",
    title: "Mini-Grids & Rural Electrification",
    slug: "mini-grid",
    description:
      "Community-scale solar mini-grids bringing reliable power to underserved areas.",
    longDescription:
      "Helios develops and operates solar mini-grids that provide clean, affordable electricity to communities, industrial clusters, and rural areas. Our mini-grid solutions are designed for reliability, scalability, and community impact — powering homes, schools, clinics, and small businesses.",
    icon: "Zap",
    features: [
      "Community-scale solar PV (10kW – 500kW)",
      "Smart metering & pay-as-you-go billing",
      "Battery energy storage for 24/7 power",
      "Community training & local job creation",
      "Government & development partner collaboration",
      "SCADA remote monitoring & control",
    ],
    image: "/images/solar-hero-nigeria.webp",
  },
  {
    id: "solar-pumps",
    title: "Solar Water Pumps",
    slug: "solar-pumps",
    description:
      "Solar-powered water pumping solutions for agriculture and communities.",
    longDescription:
      "Our solar water pumping systems provide reliable, maintenance-free water supply for irrigation, livestock, and community water projects. Powered entirely by the sun, these systems eliminate fuel costs and reduce dependence on erratic grid power.",
    icon: "Droplets",
    features: [
      "Submersible & surface pump configurations",
      "AC and DC pump options",
      "Automatic dry-run protection",
      "Remote monitoring & control",
      "10-year solar panel warranty",
      "Installation & training included",
    ],
    image: "/images/solar-engineer-team.webp",
  },
  {
    id: "maintenance",
    title: "Operations & Maintenance",
    slug: "maintenance",
    description:
      "Comprehensive O&M services to maximise your solar asset performance.",
    longDescription:
      "Keep your solar installation performing at peak efficiency with Helios' comprehensive operations and maintenance services. Our certified technicians provide preventive maintenance, remote monitoring, fault detection, and rapid response repairs — ensuring your investment delivers maximum returns for years to come.",
    icon: "Wrench",
    features: [
      "Scheduled preventive maintenance visits",
      "Real-time performance monitoring",
      "Thermal imaging & drone inspections",
      "Panel cleaning & vegetation management",
      "Inverter & battery health checks",
      "Emergency repair service (4hr response)",
    ],
    image: "/images/solar-engineer-team.webp",
  },
  {
    id: "consulting",
    title: "Energy Consulting",
    slug: "consulting",
    description:
      "Expert energy advisory, feasibility studies, and project development services.",
    longDescription:
      "From feasibility assessment to project finance structuring, Helios offers end-to-end energy consulting services for organisations looking to transition to solar energy. Our team of certified engineers and energy analysts bring decades of combined experience in the Nigerian energy sector.",
    icon: "ClipboardList",
    features: [
      "Energy audit & consumption analysis",
      "Feasibility studies & site assessment",
      "System design & financial modelling",
      "Regulatory compliance & permit assistance",
      "Project management & contractor supervision",
      "Carbon credit advisory & documentation",
    ],
    image: "/images/solar-commercial-factory.webp",
  },
];

export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  capacity: string;
  description: string;
  image: string;
  year: number;
}

export const PROJECTS: Project[] = [
  {
    id: "lagos-commercial",
    title: "Lagos Business Park Solar Installation",
    location: "Lekki, Lagos",
    category: "Commercial",
    capacity: "1.2 MW",
    description:
      "A 1.2MW rooftop solar installation powering a 12-building business park. Reduced grid dependency by 65% and saved the client over ₦45M annually in energy costs.",
    image: "/images/solar-commercial-factory.webp",
    year: 2024,
  },
  {
    id: "abuja-estate",
    title: "Sunrise Estate Residential Solar",
    location: "Abuja, FCT",
    category: "Residential",
    capacity: "500 kW",
    description:
      "Phase 1 of a 500kW community solar project for a 150-home luxury estate. Each home equipped with 3.3kW rooftop system + 5kWh battery storage.",
    image: "/images/solar-residential-estate.webp",
    year: 2024,
  },
  {
    id: "rivers-mini-grid",
    title: "Rivers State Rural Mini-Grid",
    location: "Rivers State",
    category: "Mini-Grid",
    capacity: "250 kW",
    description:
      "A 250kW solar mini-grid powering 800+ households, 3 schools, and 2 health clinics in an off-grid community. Pay-as-you-go smart metering deployed.",
    image: "/images/solar-hero-nigeria.webp",
    year: 2023,
  },
  {
    id: "ibadan-factory",
    title: "Ibadan Manufacturing Plant",
    location: "Ibadan, Oyo State",
    category: "Industrial",
    capacity: "2.5 MW",
    description:
      "Nigeria's largest textile factory rooftop installation — 2.5MW of solar PV covering 80% of the plant's daytime energy needs. 20-year PPA structure.",
    image: "/images/solar-commercial-factory.webp",
    year: 2023,
  },
  {
    id: "kano-farm",
    title: "Kano Agricultural Solar Pumping",
    location: "Kano State",
    category: "Agriculture",
    capacity: "150 kW",
    description:
      "Solar-powered irrigation system for a 500-hectare farm. 150kW of solar pumping delivering 2M litres of water daily for dry-season farming.",
    image: "/images/solar-engineer-team.webp",
    year: 2023,
  },
  {
    id: "enugu-school",
    title: "Enugu University Solar Project",
    location: "Enugu State",
    category: "Institutional",
    capacity: "800 kW",
    description:
      "An 800kW solar installation powering lecture halls, labs, and administrative buildings. Battery backup ensures uninterrupted power for research and exams.",
    image: "/images/solar-hero-nigeria.webp",
    year: 2022,
  },
];

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  text: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. Adebayo Ogunlesi",
    title: "Managing Director",
    company: "Lagos Business Park Ltd",
    text: "Helios transformed our energy infrastructure. The 1.2MW installation has cut our operating costs significantly and the team's professionalism throughout the project was outstanding. I recommend them without reservation.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Chioma Eze",
    title: "Homeowner",
    company: "Sunrise Estate, Abuja",
    text: "Since installing Helios solar at our home, we've enjoyed uninterrupted power 24/7. Our electricity bills dropped from ₦150k to ₦45k per month. The mobile app makes it so easy to monitor our energy production.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Alhaji Sani Abdullahi",
    title: "CEO",
    company: "Northern Agro-Allied Ltd",
    text: "The solar water pumping system Helios installed has revolutionised our farming operations. We now irrigate year-round without worrying about fuel costs. The after-sales support has been exceptional.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Folake Adeyemi",
    title: "Facilities Manager",
    company: "Greenfield Manufacturing Plc",
    text: "Helios delivered our 2.5MW installation on time and on budget. Their technical expertise, especially in navigating the regulatory landscape, was invaluable. A true partner in our sustainability journey.",
    rating: 5,
  },
];

export const STATS = [
  { label: "Projects Completed", value: "5,000+", suffix: "" },
  { label: "MW Installed", value: "150", suffix: "+ MW" },
  { label: "Happy Clients", value: "4,500", suffix: "+" },
  { label: "Satisfaction Rate", value: "98", suffix: "%" },
];

export const TEAM_MEMBERS = [
  {
    name: "Emeka Okonkwo",
    title: "CEO & Co-Founder",
    bio: "15+ years in Nigeria's energy sector. Former MD at Shell Nigeria Gas. MSc Energy Systems Engineering.",
    image: "",
  },
  {
    name: "Yetunde Balogun",
    title: "COO & Co-Founder",
    bio: "Experienced operations executive with a track record of scaling cleantech businesses across West Africa.",
    image: "",
  },
  {
    name: "Dr. Hassan Ibrahim",
    title: "CTO",
    bio: "PhD in Renewable Energy Engineering. Led solar projects totalling 200+ MW across Nigeria and Ghana.",
    image: "",
  },
  {
    name: "Ngozi Okafor",
    title: "Director of Projects",
    bio: "PMP-certified project manager with 12 years delivering large-scale energy infrastructure projects.",
    image: "",
  },
  {
    name: "Tunde Martins",
    title: "Head of Sales & Marketing",
    bio: "Built and led high-performing sales teams in the Nigerian renewable energy market for over a decade.",
    image: "",
  },
  {
    name: "Funmi Adeniyi",
    title: "Head of Customer Success",
    bio: "Passionate about customer experience. Ensures every Helios client gets world-class support throughout their journey.",
    image: "",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  {
    label: "Services",
    href: "#services",
    submenu: [
      { label: "Residential Solar", href: "#services-residential" },
      { label: "Commercial & Industrial", href: "#services-commercial" },
      { label: "Mini-Grids", href: "#services-mini-grid" },
      { label: "Solar Water Pumps", href: "#services-pumps" },
      { label: "O&M Services", href: "#services-maintenance" },
      { label: "Energy Consulting", href: "#services-consulting" },
    ],
  },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];