"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, slideRight, slideLeft } from "@/lib/animations";

type Props = {
  data: {
    badge: string;
    title: string;
    description: string;
    primaryCTA: string;
    secondaryCTA: string;
    image: string;
  };
};

export default function ServiceHero({ data }: Props) {
  return (
    <section id="overview" className="section">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-xs font-semibold uppercase tracking-wider text-blue-600"
          >
            {data.badge}
          </motion.span>

          <motion.h1
            variants={slideRight}
            initial="hidden"
            animate="show"
            className="heading-xl mb-6"
          >
            {data.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-muted mb-8"
          >
            {data.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-4"
          >
            <button className="btn-primary">{data.primaryCTA}</button>
            <button className="btn-secondary">{data.secondaryCTA}</button>
          </motion.div>
        </div>

        <motion.div variants={slideLeft} initial="hidden" animate="show">
          <Image
            src={data.image}
            alt={data.title}
            width={500}
            height={500}
            className="rounded-2xl shadow-xl w-full h-auto pt-16"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
