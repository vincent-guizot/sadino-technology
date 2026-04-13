"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

export default function PricingPage() {
  const [customQuote, setCustomQuote] = useState({
    name: "",
    email: "",
    objective: "",
    message: "",
  });

  const customQuoteHandler = (e) => {
    e.preventDefault();
    let temp = {
      name: customQuote.name,
      email: customQuote.email,
      objective: customQuote.objective,
      message: customQuote.message,
    };
    alert(`Custom Quote Inquiry Submitted! ${JSON.stringify(temp)}`);
  };

  return (
    <div className="pt-28 pb-24">
      {/* ================= HERO ================= */}
      <section className="container-custom text-center mb-20">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
          >
            Architectural{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Precision
            </span>
            ,
            <br />
            Flexible Pricing.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-muted max-w-2xl mx-auto text-lg"
          >
            We don't believe in one-size-fits-all software. Every digital
            masterpiece requires a tailored foundation.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="container-custom grid md:grid-cols-3 gap-8 items-start mb-32">
        {/* STARTER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="card flex flex-col"
        >
          <h3 className="font-bold text-lg mb-6">Starter</h3>

          <div className="mb-8">
            <p className="text-3xl font-bold">Let's Talk</p>
            <p className="text-xs uppercase text-muted">Consultation-first</p>
          </div>

          <ul className="space-y-3 mb-8 flex-1">
            {[
              "MVP Development",
              "UI/UX Prototype",
              "Cloud Deployment",
              "Basic Maintenance",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600">
                ✔ {item}
              </li>
            ))}
          </ul>

          <button className="btn-secondary w-full">Schedule Intro</button>
        </motion.div>

        {/* BUSINESS (HIGHLIGHT) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            relative rounded-2xl p-10 flex flex-col
            border border-blue-200
            shadow-xl bg-white
            scale-105
          "
        >
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] bg-blue-600 text-white px-3 py-1 rounded-full uppercase">
            Most Popular
          </span>

          <h3 className="font-bold text-lg mb-6">Business</h3>

          <div className="mb-8">
            <p className="text-3xl font-bold">Custom Quote</p>
            <p className="text-xs uppercase text-blue-600">
              Scaling Infrastructure
            </p>
          </div>

          <ul className="space-y-3 mb-8 flex-1">
            {[
              "Dedicated Team",
              "Scalable Architecture",
              "Maintenance & Support",
              "Full DevOps Integration",
              "Bi-weekly Syncs",
            ].map((item, i) => (
              <li key={i} className="text-sm">
                ✔ {item}
              </li>
            ))}
          </ul>

          <button className="btn-primary w-full">Start Consultation</button>
        </motion.div>

        {/* CUSTOM */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="card flex flex-col"
        >
          <h3 className="font-bold text-lg mb-6">Custom</h3>

          <div className="mb-8">
            <p className="text-3xl font-bold">Let's Connect</p>
            <p className="text-xs uppercase text-muted">Enterprise Solutions</p>
          </div>

          <ul className="space-y-3 mb-8 flex-1">
            {[
              "Legacy Migration",
              "AI Integration",
              "24/7 Support",
              "Global Infra",
            ].map((item, i) => (
              <li key={i} className="text-sm text-gray-600">
                ✔ {item}
              </li>
            ))}
          </ul>

          <button className="btn-secondary w-full">Inquire Now</button>
        </motion.div>
      </section>

      {/* ================= FORM ================= */}
      <section className="container-custom mb-32">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            grid lg:grid-cols-2 overflow-hidden
            rounded-3xl bg-gray-50
          "
        >
          {/* LEFT */}

          {/* ================= LEFT (FORM) ================= */}
          <div className="p-12 lg:p-16">
            {/* HEADER */}
            <div className="mb-10 max-w-md">
              <h2 className="text-3xl font-bold mb-4">Get a Custom Quote</h2>

              <p className="text-gray-500 leading-relaxed">
                Our architects are ready to blueprint your next innovation. Fill
                in the details and we’ll get back within 24 hours.
              </p>
            </div>

            {/* FORM */}
            <form className="space-y-6">
              {/* NAME + EMAIL */}
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  onChange={(e) =>
                    setCustomQuote({ ...customQuote, name: e.target.value })
                  }
                  placeholder="Your Name"
                  className="
            w-full h-12 px-4 text-sm
            rounded-xl border border-gray-200
            focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500
            transition
          "
                />
                <input
                  onChange={(e) =>
                    setCustomQuote({ ...customQuote, email: e.target.value })
                  }
                  placeholder="Email Address"
                  className="
            w-full h-12 px-4 text-sm
            rounded-xl border border-gray-200
            focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500
            transition
          "
                />
              </div>

              {/* SELECT */}
              <select
                onChange={(e) =>
                  setCustomQuote({ ...customQuote, objective: e.target.value })
                }
                className="
          w-full h-12 px-4 text-sm
          rounded-xl border border-gray-200
          focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500
          transition
        "
              >
                <option>Project Objective</option>
                <option value="new-product-development">
                  New Product Development
                </option>
                <option value="system-migration">System Migration</option>
                <option value="ui-ux-redesign">UI/UX Redesign</option>
                <option value="custom-development">Custom Development</option>
                <option value="other">Other</option>
              </select>

              {/* TEXTAREA */}
              <textarea
                onChange={(e) =>
                  setCustomQuote({ ...customQuote, message: e.target.value })
                }
                rows={5}
                placeholder="Tell us about your vision..."
                className="
          w-full px-4 py-3 text-sm
          rounded-xl border border-gray-200
          resize-none
          focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500
          transition
        "
              />

              {/* BUTTON */}
              <button
                onClick={customQuoteHandler}
                className="
          w-full h-12 rounded-xl text-sm font-semibold text-white
          bg-gradient-to-r from-blue-600 to-blue-500
          shadow-lg shadow-blue-500/30
          hover:shadow-xl hover:-translate-y-0.5
          transition-all duration-200
        "
              >
                Submit Inquiry →
              </button>

              {/* DISCLAIMER */}
              <p className="text-xs text-gray-400 text-center">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </div>

          {/* ================= RIGHT (VISUAL + TRUST) ================= */}
          <div className="relative min-h-[420px]">
            {/* IMAGE */}
            <img
              src="/images/contact-visual.jpg"
              alt="Consultation"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            {/* CONTENT */}
            <div className="relative z-10 h-full flex items-end p-10">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl max-w-sm">
                <p className="text-sm font-semibold mb-2">
                  Trusted by Growing Teams
                </p>

                <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                  "Sadino didn’t just deliver a product — they built a scalable
                  system that accelerated our growth significantly."
                </p>

                <p className="text-xs font-medium text-blue-600">
                  — CTO, Lumina Capital
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= STATS ================= */}
      <section className="container-custom grid md:grid-cols-4 gap-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="md:col-span-2 bg-blue-600 text-white p-10 rounded-2xl"
        >
          <p className="text-4xl font-bold mb-2">99.9%</p>
          <p className="opacity-80">
            Infrastructure uptime for Business & Custom clients.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="bg-gray-100 p-8 rounded-2xl">
          <p className="text-3xl font-bold">500+</p>
          <p className="text-sm text-gray-500">Projects delivered globally</p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="bg-gray-100 p-8 rounded-2xl border-l-4 border-blue-600"
        >
          <p className="text-3xl font-bold">15min</p>
          <p className="text-sm text-gray-500">Avg response time</p>
        </motion.div>
      </section>
    </div>
  );
}
