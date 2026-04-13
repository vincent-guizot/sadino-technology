"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ data }: any) {
  return (
    <motion.div
      variants={fadeUp}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
    >
      {/* IMAGE */}
      <div className="h-56 relative overflow-hidden">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col h-full">
        <span className="text-xs bg-gray-100 px-3 py-1 rounded w-fit mb-3">
          {data.category}
        </span>

        <h4 className="text-lg font-semibold mb-2 group-hover:text-blue-600">
          <Link href={`/articles/${data.slug}`}>{data.title}</Link>
        </h4>

        <p className="text-sm text-gray-500 mb-6 line-clamp-3">
          {data.description}
        </p>

        {/* <div className="mt-auto flex justify-between items-center text-sm text-gray-400">
          <span>{data.date}</span>

          <Link href={`/articles/${data.slug}`} className="text-blue-600">
            Read More →
          </Link>
        </div> */}
      </div>
    </motion.div>
  );
}
