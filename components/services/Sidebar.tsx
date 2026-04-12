"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { serviceSections } from "@/constants/serviceSections";
import { iconMap } from "@/constants/iconMap";
import { stagger, fadeLeft } from "@/lib/animations";

export default function ServiceSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
     hidden lg:flex flex-col
     sticky top-24 self-start
     w-full max-h-[calc(100vh-6rem)]
     p-6 bg-gray-50 rounded-lg
     overflow-y-auto
   "
    >
      {/* ================= HEADER ================= */}
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        animate="show"
        className="mb-8"
      >
        <p className="text-xs uppercase tracking-widest text-gray-400">
          Navigator
        </p>
        <p className="text-sm font-semibold text-gray-800">Service Sections </p>
      </motion.div>

      {/* ================= NAV ================= */}
      <motion.nav
        variants={stagger}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-1"
      >
        {serviceSections.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];

          return (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              variants={fadeLeft}
              whileHover={{ x: 6 }}
              whileTap={{ scale: 0.97 }}
              className="
            flex items-center gap-3
            px-4 py-3 rounded-lg
            text-sm font-medium
            text-gray-600
            transition-all duration-200

            hover:bg-white
            hover:text-blue-600
            hover:shadow-sm
          "
            >
              {/* ICON */}
              {Icon && <Icon className="w-4 h-4 opacity-70" />}

              {/* LABEL */}
              <span>{item.label}</span>
            </motion.a>
          );
        })}
      </motion.nav>
    </aside>
  );
}
