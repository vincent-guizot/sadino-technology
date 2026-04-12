"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function ArticleNewsletter() {
  return (
    <motion.section variants={fadeUp} className="container-custom">
      <div className="rounded-3xl bg-blue-600 text-white text-center p-12 md:p-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Stay updated with latest tech trends
        </h2>

        <p className="text-blue-100 mb-10">
          Get bi-weekly insights delivered to your inbox.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            placeholder="Enter your email"
            className="px-6 py-3 rounded-xl text-black w-full sm:w-80"
          />

          <button className="px-6 py-3 bg-black text-white rounded-xl font-semibold">
            Join Newsletter
          </button>
        </div>

        <p className="text-sm text-blue-200 mt-6">
          Join 5,000+ developers already subscribed.
        </p>
      </div>
    </motion.section>
  );
}
