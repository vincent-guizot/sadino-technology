import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// 🔤 FONT (Poppins)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

// 🌐 Metadata
export const metadata: Metadata = {
  title: {
    default: "Sadino Technology",
    template: "%s | Sadino Technology",
  },
  description:
    "Software house specializing in web development, UI/UX design, and scalable backend solutions.",
};

// 🧩 Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} h-full`}>
      <body className="min-h-screen flex flex-col antialiased bg-white text-gray-900 font-[var(--font-poppins)]">
        {/* NAVBAR */}
        <Navbar />

        {/* CONTENT */}
        <main className="flex-1">{children}</main>

        {/* FOOTER (next step) */}
        {/* <Footer /> */}
        <Footer />
      </body>
    </html>
  );
}
