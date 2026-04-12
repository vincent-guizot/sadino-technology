"use client";

import { motion } from "framer-motion";
import { stagger } from "@/lib/animations";
import { articles } from "@/constants/articles";
import ArticleCard from "./Card";

export default function ArticleGrid() {
  const data = articles.filter((a) => !a.featured);

  return (
    <section className="container-custom mb-24">
      <div className="flex items-center gap-4 mb-12">
        <h3 className="text-3xl font-bold">Latest Perspectives</h3>
        <div className="h-[1px] bg-gray-200 flex-1" />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {data.map((item) => (
          <ArticleCard key={item.slug} data={item} />
        ))}
      </motion.div>

      <div className="text-center mt-12">
        <button className="px-6 py-3 bg-gray-100 rounded-xl font-medium">
          Load More Articles
        </button>
      </div>
    </section>
  );
}
