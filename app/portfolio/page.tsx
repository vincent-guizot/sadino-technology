"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { portfolios } from "@/constants/data";

/* ANIMATION */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      {/* HEADER */}
      <div className="container-custom text-center mb-12">
        <h1 className="heading-xl mb-2">Our Portfolio</h1>
        <p className="text-muted">Explore some of the projects we’ve built.</p>
      </div>

      {/* GRID */}
      <motion.div
        className="portfolio-grid"
        initial="hidden"
        animate="show"
        variants={stagger}
      >
        {portfolios.map((item) => (
          <motion.div key={item.id} variants={fadeUp}>
            <PortfolioCard item={item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;

/* ================= CARD ================= */

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
