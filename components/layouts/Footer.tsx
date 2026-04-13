"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Camera, Store, Globe } from "lucide-react";

import { contacts } from "@/constants/data";

const Footer = () => {
  const contact = contacts[0];

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      {/* TOP */}
      <div className="container-custom py-12 grid md:grid-cols-4 gap-10">
        {/* LOGO + DESC */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/images/logo.png"
              alt="Sadino Logo"
              width={120}
              height={40}
            />
          </div>

          <p className="text-sm text-blue-100 mb-4 leading-relaxed">
            Software House delivering modern web, UI/UX, and scalable backend
            solutions.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3">
            <a
              href={`https://instagram.com/${contact.instagram}`}
              target="_blank"
              className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
            >
              <Camera size={18} />
            </a>

            <a
              href={contact.website}
              target="_blank"
              className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
            >
              <Globe size={18} />
            </a>

            <a
              href="#"
              className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
            >
              <Store size={18} />
            </a>
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-blue-100">
            <li>
              <Link href="/services/web-development">Web Development</Link>
            </li>
            <li>
              <Link href="/services/ui-ux-design">UI/UX Design</Link>
            </li>
            <li>
              <Link href="/services/backend-api">API / Backend</Link>
            </li>
            <li>
              <Link href="/services/company-profile">Company Profile</Link>
            </li>
            <li>
              <Link href="/services/mobile-apps">Mobile Apps</Link>
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-blue-100">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>

          <ul className="space-y-3 text-sm text-blue-100">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href={`mailto:${contact.email}`} className="hover:underline">
                {contact.email}
              </a>
            </li>

            <li className="flex items-center gap-2">
              <Phone size={16} />
              <a
                href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`}
                target="_blank"
                className="hover:underline"
              >
                {contact.phone}
              </a>
            </li>

            <li className="flex items-center gap-2">
              <MapPin size={16} />
              {contact.location}
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-blue-200">
        © {new Date().getFullYear()} Sadino Technology. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
