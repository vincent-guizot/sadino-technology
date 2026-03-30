"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-white/80 backdrop-blur border-b sticky top-0 z-50">
      <div className="container-custom flex items-center justify-between py-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-md" />
          <span className="font-bold text-lg">sadino</span>
        </Link>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`nav-link transition ${
                  isActive ? "text-blue-600 font-semibold" : "text-gray-700"
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
