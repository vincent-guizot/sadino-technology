"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { fadeUp, stagger } from "@/lib/animations";
import { iconMap } from "@/constants/iconMap";

type Props = {
  data: {
    title: string;
    description: string;
    items: {
      name: string;
      icon: string; // 🔥 support both: logos:* OR lucide key
    }[];
  };
};

export default function ServiceTechStack({ data }: Props) {
  return (
    <section id="tech-stack" className="section bg-black text-white">
      {" "}
      <div className="container-custom text-center">
        {/* HEADER */}
        <motion.div variants={fadeUp}>
          <h2 className="heading-lg mb-4">{data.title}</h2>
          <p className="text-gray-400 mb-12">{data.description}</p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {data.items.map((item, i) => {
            const isIconify = item.icon.includes(":");

            const LucideIcon = iconMap[item.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white/5 p-6 rounded-xl hover-lift flex flex-col items-center gap-3"
              >
                {/* ================= ICON ================= */}
                {isIconify ? (
                  <Icon icon={item.icon} width={32} height={32} />
                ) : LucideIcon ? (
                  <LucideIcon className="w-8 h-8" />
                ) : null}

                {/* ================= LABEL ================= */}
                <p className="text-sm text-gray-300">{item.name}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
