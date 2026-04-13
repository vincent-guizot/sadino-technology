"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-white">
      {/* 🔵 BACKGROUND GRADIENT EFFECT */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-40 -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-200 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        {/* 🔷 LEFT CONTENT */}
        <div className="space-y-8">
          {/* BADGE */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-xs font-bold tracking-widest uppercase">
            Next-Gen Software House
          </div>

          {/* HEADING */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
            Build Scalable <br />
            Digital Products <br />
            with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Sadino Technology
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
            Helping businesses grow with high-performance web apps, intuitive
            UI/UX design, and robust backend systems tailored for scale.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-[1.03] transition">
              Get Free Consultation
            </button>

            <button className="px-8 py-4 rounded-xl border text-gray-700 font-semibold hover:bg-gray-50 transition">
              View Portfolio
            </button>
          </div>

          {/* TRUST TEXT */}
          <p className="text-xs uppercase tracking-wider text-gray-400 pt-2">
            Trusted by innovators at
          </p>
        </div>

        {/* 🔷 RIGHT IMAGE */}
        <div className="relative">
          {/* MAIN CARD */}
          <div className="bg-white p-4 rounded-2xl shadow-2xl border">
            <Image
              src="/images/hero-dashboard.png" // 👉 kamu taruh image dari HTML di sini
              alt="Dashboard UI"
              width={800}
              height={600}
              className="rounded-xl object-cover w-full h-auto"
              priority
            />
          </div>

          {/* FLOATING CARD */}
          <div className="hidden md:flex items-center gap-4 absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl border">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-xl">📊</span>
            </div>

            <div>
              <p className="text-xs text-gray-400 font-semibold uppercase">
                Growth Rate
              </p>
              <p className="text-xl font-bold text-gray-900">+124%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
