"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

type Props = {
  data: {
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
};

export default function ServiceCTA({ data }: Props) {
  return (
    <section id="cta" className="section">
      <div className="container-custom">
        <motion.div
          variants={fadeUp}
          className="bg-blue-600 text-white p-12 rounded-3xl text-center"
        >
          <h2 className="heading-lg mb-4">{data.title}</h2>
          <p className="mb-8">{data.description}</p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold">
              {data.primary}
            </button>
            <button className="border px-6 py-3 rounded-xl font-semibold">
              {data.secondary}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
