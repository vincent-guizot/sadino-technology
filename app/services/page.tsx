"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code,
  Layout,
  Database,
  FileText,
  Smartphone,
  Zap,
  Layers,
  DollarSign,
  MessageCircle,
  Lightbulb,
  Rocket,
} from "lucide-react";
import { process } from "@/constants/data";
import { useState } from "react";

/* ================= ANIMATION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

/* ================= PAGE ================= */
export default function ServicesPage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <ServiceDetail />
      <Process />
      <CTA />
      <FAQ />
    </>
  );
}

/* ================= HERO ================= */

function Hero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/hero_laptop.png')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="relative z-10 max-w-2xl px-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Build Better Digital Products
        </h1>

        <p className="text-gray-200 mb-6">
          We help businesses grow with scalable web, design, and backend
          solutions.
        </p>

        <button className="btn-primary">Get Free Consultation</button>
      </motion.div>
    </section>
  );
}

/* ================= SERVICES ================= */

function ServicesOverview() {
  const data = [
    {
      icon: <FileText />,
      title: "Company Profile",
      desc: "Professional and reliable web company profile",
      href: "/services/company-profile",
    },
    {
      icon: <Code />,
      title: "Web Development",
      desc: "Modern and scalable web apps",
      href: "/services/web-development",
    },
    {
      icon: <Layout />,
      title: "UI/UX Design",
      desc: "Clean & intuitive interfaces",
      href: "/services/ui-ux-design",
    },
    {
      icon: <Database />,
      title: "API / Backend",
      desc: "Secure & scalable systems",
      href: "/services/backend-api",
    },
    {
      icon: <Smartphone />,
      title: "Mobile Apps ( coming soon )",
      desc: "Modern and scalable mobile apps",
      href: "/services/mobile-apps",
    },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container-custom text-center mb-12">
        <h2 className="heading-lg">Our Services</h2>
        <p className="text-muted">We build scalable digital solutions</p>
      </div>

      <motion.div
        className="container-custom grid md:grid-cols-3 gap-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {data.map((item, i) => (
          <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }}>
            <ServiceCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function ServiceCard({ icon, title, desc, href }: any) {
  return (
    <div className="group card text-center relative overflow-hidden">
      {/* GLOW BACKGROUND */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-blue-100/40 to-transparent blur-2xl" />

      {/* ICON */}
      <div className="flex justify-center mb-5 relative z-10">
        <div
          className="
          w-16 h-16 flex items-center justify-center 
          rounded-2xl 
          bg-gradient-to-br from-blue-500 to-blue-700 
          text-white 
          shadow-md
          transition duration-300
          group-hover:scale-110 group-hover:rotate-3
        "
        >
          {icon}
        </div>
      </div>

      {/* TITLE */}
      <h3 className="text-lg font-semibold mb-2 relative z-10">{title}</h3>

      {/* DESC */}
      <p className="text-sm text-gray-500 mb-4 relative z-10">{desc}</p>

      {/* LINK */}
      <Link
        href={href}
        className="
        text-blue-600 text-sm font-medium 
        inline-flex items-center gap-1
        relative z-10
        transition group-hover:gap-2
      "
      >
        View Details →
      </Link>
    </div>
  );
}

/* ================= DETAIL ================= */

function ServiceDetail() {
  return (
    <motion.section
      className="section bg-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <div className="container-custom max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* ================= LEFT ================= */}
        <div>
          <h2 className="heading-lg mb-4">Web Development</h2>

          <p className="text-muted mb-6">
            We build scalable, high-performance web applications tailored to
            your business needs — from landing pages to complex dashboards.
          </p>

          {/* FEATURES */}
          <div className="space-y-3 mb-6">
            {[
              "Custom Website & Landing Page",
              "Admin Dashboard System",
              "API Integration & Automation",
              "SEO Optimized Structure",
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 text-sm text-gray-600 group"
                variants={fadeUp}
              >
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs group-hover:scale-110 transition">
                  ✓
                </div>
                <p>{item}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex gap-4">
            <button className="btn-primary">Get Started</button>

            <button className="btn-secondary">See Portfolio</button>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="relative">
          {/* CARD */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-6 shadow-md"
            variants={fadeUp}
            whileHover={{ y: -6 }}
          >
            <h4 className="font-semibold mb-4">Tech Stack</h4>

            {/* TECH BADGES */}
            <div className="flex flex-wrap gap-3 mb-6">
              {["React", "Next.js", "Node.js", "PostgreSQL"].map((tech, i) => (
                <span
                  key={i}
                  className="
                  text-sm px-3 py-1 rounded-full 
                  bg-white border 
                  shadow-sm
                  hover:bg-blue-50 hover:text-blue-600
                  transition
                "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* MINI STATS */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-xl font-bold text-blue-600">50+</p>
                <p className="text-xs text-gray-500">Projects</p>
              </div>

              <div>
                <p className="text-xl font-bold text-blue-600">99%</p>
                <p className="text-xs text-gray-500">Success Rate</p>
              </div>
            </div>
          </motion.div>

          {/* DECORATIVE BLOB */}
          <div className="absolute -z-10 top-6 left-6 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50" />
        </div>
      </div>
    </motion.section>
  );
}

/* ================= PROCESS ================= */
const iconMap: any = {
  Code: <Code size={28} />,
  Layout: <Layout size={28} />,
  Database: <Database size={28} />,
  FileText: <FileText size={28} />,
  Smartphone: <Smartphone size={28} />,
  Zap: <Zap size={20} />,
  Layers: <Layers size={20} />,
  DollarSign: <DollarSign size={20} />,
  MessageCircle: <MessageCircle size={20} />,
  Lightbulb: <Lightbulb size={20} />,
  Rocket: <Rocket size={20} />,
};

function Process() {
  return (
    <section className="process-section">
      <div className="container-custom text-center mb-12">
        <span className="badge">OUR PROCESS</span>
        <h2 className="heading-lg">How We Work</h2>
      </div>

      <div className="container-custom relative">
        <div className="process-line" />

        <motion.div
          className="process-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          {process.map((item) => (
            <motion.div key={item.id} variants={fadeUp}>
              <ProcessStep
                icon={iconMap[item.icon]}
                title={item.title}
                desc={item.description}
                step={item.step}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProcessStep({ icon, title, desc, step }: any) {
  return (
    <div className="center flex-col text-center">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full center mb-2">
        {icon}
      </div>
      <p className="text-xs text-gray-400">{step}</p>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  );
}

/* ================= CTA ================= */

function CTA() {
  const items = [
    {
      title: "Company Profile",
      desc: "Professional company website",
      href: "/services/company-profile",
    },
    {
      title: "Web Application",
      desc: "Custom system for your business",
      href: "/services/web-development",
    },
    {
      title: "UI/UX Design",
      desc: "Modern user experience",
      href: "/services/ui-ux-design",
    },
  ];

  return (
    <section className="section text-center">
      <motion.div
        className="container-custom grid md:grid-cols-3 gap-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {items.map((item, i) => (
          <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }}>
            <div className="card">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{item.desc}</p>

              <Link href={item.href} className="btn-primary block">
                Get Started
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ================= FAQ ================= */

function FAQ() {
  const faqs = [
    {
      q: "How long does development take?",
      a: "Development usually takes 2–6 weeks depending on the complexity of the project. We always provide a clear timeline before starting.",
    },
    {
      q: "How much does it cost?",
      a: "Pricing depends on your requirements. We offer flexible solutions based on your business needs and budget.",
    },
    {
      q: "Can I request revisions?",
      a: "Yes, revisions are included in our process to ensure the final product meets your expectations.",
    },
    {
      q: "Will my website be SEO friendly?",
      a: "Yes, we build all websites with SEO best practices including fast loading, clean structure, and proper meta setup.",
    },
    {
      q: "Do you provide maintenance?",
      a: "Yes, we offer ongoing support and maintenance to ensure your system runs smoothly after launch.",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="section bg-gray-50">
      <div className="container-custom max-w-6xl">
        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="heading-lg">Frequently Asked Questions</h2>
          <p className="text-muted">
            Everything you need to know before starting your project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* ================= LEFT (QUESTIONS) ================= */}
          <motion.div
            className="space-y-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                onClick={() => setActive(i)}
                className={`
                  cursor-pointer px-5 py-4 rounded-xl transition
                  ${
                    active === i
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white hover:bg-blue-50"
                  }
                `}
              >
                <p className="text-sm font-medium">{item.q}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* ================= RIGHT (ANSWER) ================= */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <h3 className="font-semibold mb-3">{faqs[active].q}</h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {faqs[active].a}
            </p>

            {/* BONUS EXTRA POINTS */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-lg font-bold text-blue-600">2–6 Weeks</p>
                <p className="text-xs text-gray-500">Avg Timeline</p>
              </div>
              <div>
                <p className="text-lg font-bold text-blue-600">Flexible</p>
                <p className="text-xs text-gray-500">Pricing</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
