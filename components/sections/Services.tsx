"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const services = [
  {
    title: "Profile Company",
    desc: "Comprehensive company profiling and market analysis services.",
    href: "/services/profile-company",
    icon: "🏢",
  },
  {
    title: "Web Development",
    desc: "High-performance React & Next.js applications optimized for speed and conversion.",
    href: "/services/web-development",
    icon: "💻",
  },
  {
    title: "UI/UX Design",
    desc: "Data-driven interface design focusing on user psychology and seamless experiences.",
    href: "/services/ui-ux-design",
    icon: "🎨",
  },
  {
    title: "Mobile Apps",
    desc: "Native-feel cross-platform mobile experiences for iOS and Android using Flutter.",
    href: "/services/mobile-apps",
    icon: "📱",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        {/* ================= HEADER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Core Expertise
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
        </motion.div>

        {/* ================= GRID ================= */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="
                group bg-white p-8 rounded-2xl border border-gray-200
                hover:shadow-2xl hover:shadow-blue-100
                transition-all duration-300
              "
            >
              {/* ICON */}
              <div
                className="
                w-14 h-14 mb-6 rounded-xl flex items-center justify-center
                bg-blue-50 group-hover:bg-blue-600
                transition-all duration-300
              "
              >
                <span className="text-2xl group-hover:text-white transition">
                  {item.icon}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* LINK */}
              <Link
                href={item.href}
                className="
                  text-blue-600 text-sm font-semibold flex items-center gap-2
                  group-hover:gap-3 transition-all duration-300
                "
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
