"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  Code,
  Layout,
  Database,
  FileText,
  Smartphone,
  Rocket,
  DollarSign,
  Layers,
  Zap,
  MessageCircle,
  Lightbulb,
} from "lucide-react";

import { services, portfolios, process } from "@/constants/data";

/* ================= ANIMATION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/* ================= ICON MAP ================= */
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

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Why />
      <Portfolio />
      <Process />
      <CTA />
    </>
  );
}

/* ================= HERO ================= */
function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.h1 variants={fadeUp} className="heading-xl mb-6">
            Build Your Digital Product with{" "}
            <span className="text-yellow-300">Sadino Technology</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mb-6 text-blue-100">
            We help businesses grow with modern web development, UI/UX design,
            and scalable backend solutions.
          </motion.p>

          <motion.div variants={fadeUp} className="flex gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold">
              Get Free Consultation
            </button>
            <button className="border border-white px-6 py-3 rounded-xl">
              View Our Services
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Image
            src="/images/hero_laptop.png"
            alt="Sadino"
            width={500}
            height={500}
            className="w-full max-w-md"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ================= SERVICES ================= */
function Services() {
  return (
    <section className="services-section">
      <motion.div
        className="container-custom text-center mb-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <span className="badge">OUR SERVICES</span>
        <h2 className="heading-lg mb-2">What We Can Build for You</h2>
        <p className="text-muted max-w-xl mx-auto">
          End-to-end digital solutions tailored to your business needs.
        </p>
      </motion.div>

      <motion.div
        className="services-grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
      >
        {services.map((item) => (
          <motion.div key={item.id} variants={fadeUp}>
            <ServiceCard
              icon={iconMap[item.icon]}
              title={item.name}
              desc={item.description}
              href={`/services/${item.slug}`}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ================= WHY ================= */
function Why() {
  return (
    <section className="why-section">
      <motion.div
        className="container-custom text-center mb-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <span className="badge">WHY CHOOSE SADINO?</span>
        <h2 className="heading-lg">Why Clients Trust Us</h2>
      </motion.div>

      <motion.div
        className="why-grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
      >
        <WhyCard
          icon={<Zap />}
          title="Fast Development"
          desc="On-time delivery"
        />
        <WhyCard
          icon={<Code />}
          title="Clean Code"
          desc="Maintainable system"
        />
        <WhyCard icon={<Layers />} title="Scalable" desc="Built for growth" />
        <WhyCard icon={<DollarSign />} title="Affordable" desc="Best value" />
      </motion.div>
    </section>
  );
}

/* ================= PORTFOLIO ================= */
function Portfolio() {
  return (
    <section className="portfolio-section">
      <div className="container-custom flex justify-between mb-10">
        <div>
          <span className="badge">OUR PROJECTS</span>
          <h2 className="heading-lg">Featured Projects</h2>
        </div>
        <Link href="/portfolio" className="btn-secondary">
          View All →
        </Link>
      </div>

      <motion.div
        className="portfolio-grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
      >
        {portfolios.slice(0, 3).map((item) => (
          <motion.div key={item.id} variants={fadeUp}>
            <PortfolioCard item={item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ================= PROCESS ================= */
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

/* ================= CTA ================= */
function CTA() {
  return (
    <motion.section
      className="cta-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
      <button className="btn-primary">Contact Us</button>
    </motion.section>
  );
}

/* ================= COMPONENTS ================= */

function ServiceCard({ icon, title, desc, href }: any) {
  return (
    <motion.div whileHover={{ y: -6 }} className="card text-center group">
      <div className="center mb-4 text-blue-600">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-3">{desc}</p>
      <Link href={href} className="text-blue-600 text-sm">
        Learn More →
      </Link>
    </motion.div>
  );
}

function WhyCard({ icon, title, desc }: any) {
  return (
    <div className="center flex-col text-center">
      <div className="w-14 h-14 bg-blue-600 text-white rounded-full center mb-3">
        {icon}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  );
}

function PortfolioCard({ item }: any) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden group"
    >
      {/* IMAGE */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>

        <p className="text-sm text-gray-500 mb-3">{item.description}</p>

        {/* TECH */}
        <div className="flex flex-wrap gap-2 mb-3">
          {item.techStack.map((tech: string, i: number) => (
            <span
              key={i}
              className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* LINK */}
        <Link
          href={`/portfolio/${item.slug}`}
          className="text-blue-600 text-sm font-medium"
        >
          View Details →
        </Link>
      </div>
    </motion.div>
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
