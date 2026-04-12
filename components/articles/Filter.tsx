"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function ArticleFilter() {
  const filters = ["All Stories", "Web Dev", "AI", "UI/UX", "Business"];

  return (
    <motion.section variants={fadeUp} className="container-custom mb-16">
      <div className="flex flex-col md:flex-row justify-between gap-6 bg-gray-50 p-6 rounded-2xl">
        {/* FILTER */}
        <div className="flex flex-wrap gap-2">
          {filters.map((item, i) => (
            <button
              key={i}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition ${
                i === 0
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:text-blue-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* SEARCH */}
        <div className="relative w-full md:w-72">
          <input
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border bg-white text-sm"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>
      </div>
    </motion.section>
  );
}
