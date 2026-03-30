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
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-400 text-white">
      <div className="container-custom py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Build Your Digital Product with{" "}
            <span className="text-yellow-300">Sadino Technology</span>
          </h1>

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
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/hero_laptop.png"
            alt="Sadino"
            width={500}
            height={500}
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}

/* ================= SERVICES ================= */
function Services() {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom text-center mb-12">
        <span className="inline-block text-xs font-semibold bg-blue-100 text-blue-600 px-4 py-1 rounded-full mb-4">
          OUR SERVICES
        </span>

        <h2 className="heading-lg mb-2">What We Can Build for You</h2>

        <p className="text-muted max-w-xl mx-auto">
          End-to-end digital solutions tailored to your business needs.
        </p>
      </div>

      <div className="container-custom grid md:grid-cols-5 gap-4">
        {services.map((item) => (
          <ServiceCard
            key={item.id}
            icon={iconMap[item.icon]}
            title={item.name}
            desc={item.description}
            href={`/services/${item.slug}`}
          />
        ))}
      </div>
    </section>
  );
}

/* ================= WHY ================= */
function Why() {
  return (
    <section className="section bg-blue-50">
      <div className="container-custom text-center mb-12">
        <span className="inline-block text-xs font-semibold bg-blue-100 text-blue-600 px-4 py-1 rounded-full mb-4">
          WHY CHOOSE SADINO?
        </span>

        <h2 className="heading-lg">Why Clients Trust Us</h2>
      </div>

      <div className="container-custom grid md:grid-cols-4 gap-8 text-center">
        <WhyCard
          icon={<Zap />}
          title="Fast Development"
          desc="On-time delivery with agile process"
        />
        <WhyCard
          icon={<Code />}
          title="Clean Code"
          desc="Maintainable & scalable architecture"
        />
        <WhyCard
          icon={<Layers />}
          title="Scalable System"
          desc="Built for future growth"
        />
        <WhyCard
          icon={<DollarSign />}
          title="Affordable Solution"
          desc="High quality at fair price"
        />
      </div>
    </section>
  );
}

/* ================= PORTFOLIO ================= */
function Portfolio() {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom flex flex-col md:flex-row md:items-center md:justify-between mb-10">
        {/* LEFT */}
        <div>
          <span className="inline-block text-xs font-semibold bg-blue-100 text-blue-600 px-4 py-1 rounded-full mb-3">
            OUR PROJECTS
          </span>

          <h2 className="heading-lg mb-1">Featured Projects</h2>

          <p className="text-muted text-sm">
            Some of the amazing products we’ve built.
          </p>
        </div>

        {/* RIGHT */}
        <Link href="/portfolio" className="mt-4 md:mt-0 btn-secondary">
          View All Projects →
        </Link>
      </div>

      {/* GRID */}
      <div className="container-custom grid md:grid-cols-3 gap-6">
        {portfolios
          .filter((item) => item.featured)
          .slice(0, 3)
          .map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
      </div>
    </section>
  );
}

/* ================= PROCESS ================= */
function Process() {
  return (
    <section className="section bg-blue-50">
      <div className="container-custom text-center mb-16">
        {/* LABEL */}
        <span className="inline-block text-xs font-semibold bg-blue-100 text-blue-600 px-4 py-1 rounded-full mb-4">
          OUR PROCESS
        </span>

        {/* TITLE */}
        <h2 className="heading-lg mb-2">How We Work</h2>

        <p className="text-muted">Simple steps to bring your idea to life.</p>
      </div>

      {/* TIMELINE */}
      <div className="container-custom relative">
        {/* LINE */}
        <div className="hidden md:block absolute top-6 left-0 right-0 h-[2px] bg-blue-200"></div>

        {/* ITEMS */}
        <div className="grid md:grid-cols-4 gap-8 text-center relative">
          {process.map((item) => (
            <ProcessStep
              key={item.id}
              icon={iconMap[item.icon]}
              title={item.title}
              desc={item.description}
              step={item.step}
            />
          ))}
        </div>
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

/* ================= COMPONENTS ================= */

function ServiceCard({ icon, title, desc, href }: any) {
  return (
    <motion.div whileHover={{ y: -6 }} className="card text-center group">
      <div className="flex justify-center mb-5">
        <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-md group-hover:scale-110 transition">
          {icon}
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      <p className="text-sm text-gray-500 mb-4">{desc}</p>

      <Link href={href} className="text-blue-600 text-sm font-medium">
        Learn More →
      </Link>
    </motion.div>
  );
}

function WhyCard({ icon, title, desc }: any) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white mb-4">
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

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        {/* TITLE */}
        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>

        {/* DESC */}
        <p className="text-sm text-gray-500 mb-3">{item.description}</p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2">
          {item.techStack.map((tech: string, i: number) => (
            <span
              key={i}
              className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProcessStep({ icon, title, desc, step }: any) {
  return (
    <div className="flex flex-col items-center text-center relative">
      {/* ICON */}
      <div
        className="w-14 h-14 flex items-center justify-center rounded-full 
      bg-blue-600 text-white shadow-md mb-4 z-10"
      >
        {icon}
      </div>

      {/* STEP */}
      <p className="text-xs text-gray-400 mb-1">{step}.</p>

      {/* TITLE */}
      <h3 className="font-semibold text-base mb-1">{title}</h3>

      {/* DESC */}
      <p className="text-sm text-gray-500 max-w-[180px]">{desc}</p>
    </div>
  );
}
