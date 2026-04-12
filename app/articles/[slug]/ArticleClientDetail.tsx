"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import Image from "next/image";
import CTA from "@/components/sections/CTA";

/* ================= MAIN ================= */

export default function ArticleClientDetail({ article }: any) {
  return (
    <div className="pt-28">
      {/* ================= CONTENT CENTER ================= */}
      <div className="container-custom max-w-4xl mx-auto">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <ArticleContent article={article} />

          <div className="mt-20">
            <Tags />
          </div>

          <div className="mt-24">
            <RelatedPosts />
          </div>
        </motion.div>
      </div>

      {/* ================= CTA ================= */}
      <motion.div variants={fadeUp}>
        <CTA />
      </motion.div>
    </div>
  );
}

/* ================= CONTENT ================= */

function ArticleContent({ article }: any) {
  return (
    <motion.article variants={fadeUp}>
      {/* HEADER */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600 font-semibold">
            {article.category}
          </span>
          <span className="text-gray-400">•</span>
          <span className="text-sm text-gray-500">{article.date}</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8">
          {article.title}
        </h1>

        {/* AUTHOR */}
        <div className="flex items-center gap-4">
          <img src={article.author.avatar} className="w-12 h-12 rounded-full" />
          <div>
            <p className="font-semibold">{article.author.name}</p>
            <p className="text-sm text-gray-500">{article.author.role}</p>
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <div className="aspect-video rounded-2xl overflow-hidden mb-16 shadow-lg">
        <Image
          src={article.image}
          alt={article.title}
          width={1200}
          height={700}
          className="w-full h-full object-cover"
        />
      </div>

      {/* BODY */}
      <div className="prose max-w-none text-gray-700 space-y-8">
        {article.intro && (
          <p className="text-xl font-medium">{article.intro}</p>
        )}

        {article.section1 && (
          <>
            <h2>{article.section1.title}</h2>
            <p>{article.section1.content}</p>
          </>
        )}

        {article.quote && (
          <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-500">
            <p className="italic text-lg text-blue-600">{article.quote}</p>
          </div>
        )}

        {article.section2 && (
          <>
            <h2>{article.section2.title}</h2>
            <p>{article.section2.content}</p>
          </>
        )}

        {article.points && (
          <ul className="space-y-4">
            {article.points.map((item: any, i: number) => (
              <li key={i} className="flex gap-3">
                <span className="text-blue-600 mt-1">✔</span>
                <span>
                  <strong>{item.title}</strong>: {item.desc}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* AUTHOR CARD */}
      <AuthorCard author={article.author} />
    </motion.article>
  );
}

/* ================= AUTHOR ================= */

function AuthorCard({ author }: any) {
  return (
    <div className="mt-20 p-8 bg-gray-50 rounded-2xl flex gap-6 items-center hover:bg-gray-100 transition">
      <img src={author.avatar} className="w-20 h-20 rounded-xl object-cover" />

      <div>
        <h4 className="text-lg font-bold mb-2">{author.name}</h4>

        <p className="text-gray-500 mb-4">{author.bio}</p>

        <div className="flex gap-4 text-blue-600 text-sm font-semibold">
          <span>Twitter</span>
          <span>LinkedIn</span>
          <span>GitHub</span>
        </div>
      </div>
    </div>
  );
}

/* ================= RELATED ================= */

function RelatedPosts() {
  const items = [
    {
      title: "Implementing Observability with OpenTelemetry",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
      meta: "5 min read • Engineering",
    },
    {
      title: "The Cost of Premature Optimization",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
      meta: "8 min read • Strategy",
    },
    {
      title: "Scaling Microservices Efficiently",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800",
      meta: "6 min read • Architecture",
    },
    {
      title: "Design Systems at Scale",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800",
      meta: "7 min read • UI/UX",
    },
    {
      title: "Cloud Cost Optimization",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
      meta: "9 min read • DevOps",
    },
    {
      title: "Next.js Performance Tuning",
      image:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=800",
      meta: "8 min read • Web Dev",
    },
  ];

  return (
    <div>
      {/* HEADER */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-10 text-center"
      >
        <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-2">
          Related Insights
        </h3>
        <h2 className="text-2xl font-semibold">Continue Reading</h2>
      </motion.div>

      {/* GRID */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="group cursor-pointer"
          >
            <div className="aspect-video rounded-xl overflow-hidden mb-3">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={200}
                className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
              />
            </div>

            <h4 className="font-semibold group-hover:text-blue-600 transition">
              {item.title}
            </h4>

            <p className="text-xs text-gray-500 mt-1">{item.meta}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================= TAGS ================= */

function Tags() {
  const tags = [
    "Kubernetes",
    "Cloud Native",
    "Architecture",
    "Rust",
    "DevOps",
    "Product Design",
  ];

  return (
    <div className="text-center">
      <h3 className="text-xs uppercase text-gray-400 mb-6">Core Topics</h3>

      <div className="flex flex-wrap justify-center gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-2 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium hover:bg-blue-100 hover:text-blue-600 transition cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
