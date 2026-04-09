"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

/* ================= ANIMATION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

/* ================= PAGE ================= */
export default function About() {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </>
  );
}

//////////////////////////////////////////////////
/* ================= SECTION 1 ================= */
//////////////////////////////////////////////////

function SectionOne() {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom grid md:grid-cols-2 gap-10 items-center">
        {/* TEXT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-4">About Sadino Technology</h2>

          <p className="text-muted mb-4">
            Sadino Technology is a software house focused on building modern
            digital solutions for businesses. We help companies grow through
            scalable web applications, UI/UX design, and backend systems.
          </p>

          <p className="text-muted mb-4">
            Founded in 2024, we started as a small development team and evolved
            into a trusted partner for businesses looking to transform
            digitally.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <p className="font-semibold">📍 Location</p>
              <p className="text-sm text-gray-500">Indonesia</p>
            </div>
            <div>
              <p className="font-semibold">📅 Founded</p>
              <p className="text-sm text-gray-500">2024</p>
            </div>
            <div>
              <p className="font-semibold">👨‍💻 Team</p>
              <p className="text-sm text-gray-500">Professional Developers</p>
            </div>
            <div>
              <p className="font-semibold">🚀 Focus</p>
              <p className="text-sm text-gray-500">Web & Digital Solutions</p>
            </div>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/images/hero_laptop.png"
            alt="About"
            width={400}
            height={400}
            className="rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

//////////////////////////////////////////////////
/* ================= SECTION 2 ================= */
//////////////////////////////////////////////////

function SectionTwo() {
  const values = [
    {
      title: "Fast Execution",
      desc: "We deliver projects quickly without compromising quality.",
    },
    {
      title: "Clean & Scalable",
      desc: "Built with maintainable and future-proof architecture.",
    },
    {
      title: "Business Focused",
      desc: "We focus on results that help your business grow.",
    },
  ];

  return (
    <section className="section">
      <div className="container-custom text-center mb-12">
        <h2 className="heading-lg mb-2">Our Values</h2>
        <p className="text-muted">
          Principles that guide how we build and deliver
        </p>
      </div>

      <motion.div
        className="container-custom grid md:grid-cols-3 gap-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {values.map((item, i) => (
          <motion.div key={i} variants={fadeUp} className="card text-center">
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

//////////////////////////////////////////////////
/* ================= SECTION 3 ================= */
//////////////////////////////////////////////////

function SectionThree() {
  const images = Array.from({ length: 12 }).map(
    (_, i) => `https://picsum.photos/400/300?random=${i + 1}`,
  );

  const [page, setPage] = useState(1);
  const perPage = 6;

  const start = (page - 1) * perPage;
  const current = images.slice(start, start + perPage);

  const totalPages = Math.ceil(images.length / perPage);

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        {/* TITLE */}
        <div className="text-center mb-10">
          <h2 className="heading-lg">Our Gallery</h2>
          <p className="text-muted">A glimpse of our work and activities</p>
        </div>

        {/* GRID */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-8"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {current.map((img, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative h-40 rounded-xl overflow-hidden group"
            >
              <Image
                src={img}
                alt="gallery"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-3">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`
                w-8 h-8 rounded-full text-sm
                ${page === i + 1 ? "bg-blue-600 text-white" : "bg-white border"}
              `}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
