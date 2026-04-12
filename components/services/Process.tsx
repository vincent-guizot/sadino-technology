"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

type Props = {
  data: {
    title: string;
    description: string;
    highlight: { label: string; text: string };
    steps: { title: string; desc: string }[];
  };
};

export default function ServiceProcess({ data }: Props) {
  return (
    <section id="process" className="section">
      <div className="container-custom grid-2 gap-16">
        <motion.div variants={fadeUp}>
          <h2 className="heading-lg mb-4">{data.title}</h2>
          <p className="text-muted mb-6">{data.description}</p>

          <div className="bg-gray-100 p-4 rounded-xl">
            <p className="text-xs text-blue-600 mb-2">{data.highlight.label}</p>
            <p className="text-sm italic">{data.highlight.text}</p>
          </div>
        </motion.div>

        <motion.div variants={stagger} className="space-y-6">
          {data.steps.map((step, i) => (
            <motion.div key={i} variants={fadeUp}>
              <h3 className="font-semibold">
                {i + 1}. {step.title}
              </h3>
              <p className="text-sm text-muted">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
