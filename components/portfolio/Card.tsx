"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: {
    slug: string;
    title: string;
    description: string;
    image: string;
    category: string;
    meta?: {
      tech?: string[];
    };
  };
};

export default function PortfolioCard({ data }: Props) {
  const techStack = data.meta?.tech ?? [];

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="
        group bg-white rounded-3xl overflow-hidden
        shadow-sm hover:shadow-xl
        transition duration-300
      "
    >
      {/* ================= IMAGE ================= */}
      <div className="aspect-[16/10] overflow-hidden">
        <Image
          src={data.image}
          alt={data.title}
          width={800}
          height={500}
          className="
            w-full h-full object-cover
            transition duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-6">
        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-[10px] px-3 py-1 bg-blue-100 text-blue-600 rounded">
            {data.category}
          </span>

          {techStack.slice(0, 2).map((tech, i) => (
            <span key={i} className="text-[10px] px-3 py-1 bg-gray-100 rounded">
              {tech}
            </span>
          ))}
        </div>

        {/* TITLE */}
        <h3 className="text-xl font-semibold mb-2">{data.title}</h3>

        {/* DESC */}
        <p className="text-sm text-gray-500 mb-6">{data.description}</p>

        {/* LINK */}
        <Link
          href={`/portfolio/${data.slug}`}
          className="
            text-blue-600 text-sm font-medium
            hover:underline
          "
        >
          View Details →
        </Link>
      </div>
    </motion.div>
  );
}
