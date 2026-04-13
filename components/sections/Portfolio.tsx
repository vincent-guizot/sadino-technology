"use client";

import Image from "next/image";

const projects = [
  {
    title: "Nexus Wallet",
    desc: "Securing global transactions with blockchain-backed security and lightning-fast UX.",
    image: "https://placehold.co/600x400?text=Portfolio\nProject",
    tags: ["FinTech", "React Native"],
  },
  {
    title: "Vogue Commerce",
    desc: "A high-conversion headless e-commerce engine for luxury fashion brands.",
    image: "https://placehold.co/600x400?text=Portfolio\nProject",
    tags: ["Retail", "Next.js"],
  },
  {
    title: "MediSync AI",
    desc: "Real-time data synchronization for hospital management systems across 12 countries.",
    image: "https://placehold.co/600x400?text=Portfolio\nProject",
    tags: ["Health", "Backend"],
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        {/* 🔷 HEADER */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Portfolio Preview
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
          </div>

          <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            See All Work →
          </button>
        </div>

        {/* 🔷 GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl aspect-[4/5] bg-gray-200"
            >
              {/* IMAGE */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 text-white">
                {/* TAGS */}
                <div className="flex gap-2 mb-4">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>

                {/* DESC */}
                <p className="text-sm text-gray-200 mb-4 line-clamp-2">
                  {item.desc}
                </p>

                {/* CTA */}
                <button className="w-fit bg-white text-gray-900 px-6 py-2 rounded-xl font-bold text-sm opacity-0 group-hover:opacity-100 transition">
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
