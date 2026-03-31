"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    // { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="w-full bg-white/80 backdrop-blur border-b sticky top-0 z-50">
      <div className="container-custom flex items-center justify-between py-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Sadino"
            width={120}
            height={40}
            style={{ width: "auto", height: "auto" }}
          />
          {/* <span className="font-bold text-lg uppercase">sadino</span> */}
        </Link>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-4">
          {/* SERVICES (SPECIAL) */}
          <Dropdown />

          {/* NORMAL LINKS */}
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium uppercase transition
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-50"
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
    </nav>
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
      {/* TRIGGER */}
      <Link
        href="/services"
        className={`px-4 py-2 rounded-lg text-sm font-medium uppercase transition
        ${
          isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-blue-50"
        }`}
      >
        Services
      </Link>

      {/* DROPDOWN WRAPPER (NO GAP) */}
      <div className="absolute top-full left-0 mt-1 w-60">
        {/* DROPDOWN */}
        <div className="bg-white shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
          <div className="p-2">
            {services.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 rounded-lg text-sm hover:bg-blue-50 hover:text-blue-600 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
