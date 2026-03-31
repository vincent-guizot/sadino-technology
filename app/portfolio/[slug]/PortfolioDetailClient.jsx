"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* ANIMATION */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PortfolioDetailClient({ project }) {
  const [selected, setSelected] = useState(null);

  const gallery = Array.from({ length: 8 }).map(
    (_, i) => `https://picsum.photos/1200/800?random=${i + 1}`,
  );

  const next = () => setSelected((prev) => (prev + 1) % gallery.length);

  const prev = () =>
    setSelected((prev) => (prev - 1 + gallery.length) % gallery.length);

  return (
    <section className="section">
      <div className="container-custom max-w-6xl grid md:grid-cols-2 gap-10">
        {/* ================= LEFT ================= */}
        <div className="space-y-6">
          {/* MAIN IMAGE */}
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <Image
              src={project.image}
              alt={project.name}
              width={600}
              height={300}
              className="rounded-2xl w-full cursor-pointer"
              onClick={() => setSelected(0)}
            />
          </motion.div>

          {/* GALLERY */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            {gallery.map((img, i) => (
              <div
                key={i}
                className="relative h-28 rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelected(i)}
              >
                <Image
                  src={img}
                  alt="gallery"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* ================= RIGHT ================= */}
        <motion.div
          className="p-2 h-fit" // 🔥 clean (no shadow, no border)
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <h1 className="text-2xl font-bold mb-4">{project.name}</h1>

          <div className="space-y-2 text-sm mb-6">
            <p>
              <strong>Client:</strong> {project.client}
            </p>
            <p>
              <strong>Year:</strong> {project.year}
            </p>
            <p>
              <strong>Category:</strong> {project.category}
            </p>
            <p>
              <strong>Status:</strong> {project.status}
            </p>
          </div>

          <p className="text-gray-600 text-sm mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              className="btn-primary w-full text-center block"
            >
              View Live Project
            </a>
          )}
        </motion.div>
      </div>

      {/* ================= LIGHTBOX ================= */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl px-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* IMAGE */}
              <Image
                src={gallery[selected]}
                alt="preview"
                width={1200}
                height={800}
                className="rounded-xl w-full"
              />

              {/* CLOSE */}
              <button
                className="absolute top-4 right-4 text-white text-xl bg-white/10 backdrop-blur px-3 py-1 rounded-full hover:bg-white/20 transition"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>

              {/* PREV */}
              <button
                onClick={prev}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 
                w-10 h-10 flex items-center justify-center 
                rounded-full bg-white/10 backdrop-blur text-white 
                hover:bg-white/20 transition"
              >
                ‹
              </button>

              {/* NEXT */}
              <button
                onClick={next}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 
                w-10 h-10 flex items-center justify-center 
                rounded-full bg-white/10 backdrop-blur text-white 
                hover:bg-white/20 transition"
              >
                ›
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
