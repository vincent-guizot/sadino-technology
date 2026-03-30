"use client";
import Image from "next/image";
import { motion } from "framer-motion";
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
} from "lucide-react";

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
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-400 text-white">
      <div className="container-custom py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Build Your Digital Product with{" "}
            <span className="text-yellow-300">Sadino Technology</span>
          </motion.h1>

          <p className="mb-6 text-blue-100">
            We help businesses grow with modern web development, UI/UX design,
            and scalable backend solutions.
          </p>

          <div className="flex gap-4 mb-6">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold">
              Get Free Consultation
            </button>

            <button className="border border-white px-6 py-3 rounded-xl">
              View Our Services
            </button>
          </div>

          <div className="flex gap-6 text-sm text-blue-100">
            <span>⚡ Fast Delivery</span>
            <span>💻 Clean Code</span>
            <span>💰 Affordable</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center"
        >
          <Image
            src="/images/hero_laptop.png"
            alt="Sadino Laptop"
            width={500}
            height={500}
            className="w-full max-w-md drop-shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
/* ================= SERVICES ================= */
function Services() {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom text-center mb-12">
        <h2 className="heading-lg mb-2">What We Can Build for You</h2>
        <p className="text-muted">
          End-to-end digital solutions tailored to your business
        </p>
      </div>

      <div className="container-custom grid md:grid-cols-3 gap-6">
        <ServiceCard icon={<Code />} title="Web Development" />
        <ServiceCard icon={<Layout />} title="UI/UX Design" />
        <ServiceCard icon={<Database />} title="API / Backend" />
        <ServiceCard icon={<FileText />} title="Company Profile" />
        <ServiceCard icon={<Smartphone />} title="Mobile Apps" />
      </div>
    </section>
  );
}

/* ================= WHY ================= */
function Why() {
  return (
    <section className="section">
      <div className="container-custom text-center mb-12">
        <h2 className="heading-lg">Why Clients Trust Us</h2>
      </div>

      <div className="container-custom grid md:grid-cols-4 gap-6 text-center">
        <WhyCard icon={<Zap />} title="Fast Development" />
        <WhyCard icon={<Code />} title="Clean Code" />
        <WhyCard icon={<Layers />} title="Scalable System" />
        <WhyCard icon={<DollarSign />} title="Affordable Solution" />
      </div>
    </section>
  );
}

/* ================= PORTFOLIO ================= */
function Portfolio() {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom flex justify-between items-center mb-10">
        <h2 className="heading-lg">Featured Projects</h2>
        <button className="btn-secondary">View All</button>
      </div>

      <div className="container-custom grid md:grid-cols-3 gap-6">
        <PortfolioCard title="E-Commerce Platform" />
        <PortfolioCard title="Healthcare Website" />
        <PortfolioCard title="Fintech Dashboard" />
      </div>
    </section>
  );
}

/* ================= PROCESS ================= */
function Process() {
  return (
    <section className="section">
      <div className="container-custom text-center mb-12">
        <h2 className="heading-lg">How We Work</h2>
      </div>

      <div className="container-custom grid md:grid-cols-4 gap-6 text-center">
        <ProcessStep title="Consult" />
        <ProcessStep title="Design" />
        <ProcessStep title="Develop" />
        <ProcessStep title="Launch" />
      </div>
    </section>
  );
}

/* ================= CTA ================= */
function CTA() {
  return (
    <section className="bg-primary-gradient py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
      <p className="mb-6">Let’s build something great together</p>
      <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold">
        Contact Us Today
      </button>
    </section>
  );
}

/* ================= SMALL COMPONENTS ================= */

function ServiceCard({ icon, title }: any) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="card text-center">
      <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
    </motion.div>
  );
}

function WhyCard({ icon, title }: any) {
  return (
    <div>
      <div className="text-blue-600 flex justify-center mb-3">{icon}</div>
      <p className="font-medium">{title}</p>
    </div>
  );
}

function PortfolioCard({ title }: any) {
  return (
    <div className="card">
      <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
      <h3 className="font-semibold">{title}</h3>
    </div>
  );
}

function ProcessStep({ title }: any) {
  return (
    <div>
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
        <Rocket size={20} />
      </div>
      <p className="font-medium">{title}</p>
    </div>
  );
}
