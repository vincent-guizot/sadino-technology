"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function PortfolioHero() {
  return (
    <section className="section">
      <div className="container-custom max-w-3xl">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="heading-xl mb-6"
        >
          Engineering digital{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Masterpiece
          </span>
          .
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-muted text-lg"
        >
          A collection of high-performance applications, sleek interfaces, and
          scalable architectures built for global industry leaders.
        </motion.p>
      </div>
    </section>
  );
}
