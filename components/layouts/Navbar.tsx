"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  /* ================= SCROLL DETECT ================= */

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        // scroll down → hide
        setShow(false);
      } else {
        // scroll up → show
        setShow(true);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const navLinks = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Articles", href: "/articles" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: show ? 0 : -100, opacity: show ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full bg-white/80 backdrop-blur shadow fixed top-0 z-50"
    >
      <div className="container-custom flex items-center justify-between py-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Sadino Technology"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-2">
          <Dropdown />

          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium uppercase transition-all duration-200
                ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <button className="btn-primary hidden md:block">
          Get Free Consultation
        </button>
      </div>
    </motion.nav>
  );
}

/* ================= DROPDOWN ================= */

function Dropdown() {
  const pathname = usePathname();

  const services = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "API / Backend", href: "/services/backend-api" },
    { name: "Company Profile", href: "/services/company-profile" },
    { name: "Mobile Apps", href: "/services/mobile-apps" },
  ];

  const isActive = pathname.startsWith("/services");

  return (
    <div className="relative group">
      <Link
        href="/services"
        className={`px-4 py-2 rounded-lg text-sm font-medium uppercase transition-all duration-200
        ${
          isActive
            ? "bg-blue-600 text-white shadow-sm"
            : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
        }`}
      >
        Services
      </Link>

      <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="bg-white shadow-xl rounded-xl p-2">
          {services.map((item) => {
            const isSubActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-2 rounded-lg text-sm transition
                ${
                  isSubActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-50 hover:text-blue-600 text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
