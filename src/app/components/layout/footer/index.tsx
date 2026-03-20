"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#000028] py-24 md:py-32 overflow-hidden text-white">

      {/* ================= BACKGROUND EFFECT ================= */}
      <div className="absolute inset-0 pointer-events-none">

        {/* GRADIENT LIGHT */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#004CFE]/20 via-transparent to-[#FF9500]/10" />

        {/* TOP HAIRLINE */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-[70%] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-12 gap-16">

          {/* ================= BRAND ================= */}
          <div className="lg:col-span-4 space-y-6">

            <Link href="/" className="block">
              <Image
                src="/images/logo/tccwhite.png"
                alt="TCC 2026"
                width={140}
                height={50}
                className="object-contain"
                priority
              />
            </Link>

            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              The Career Core Conference (TCC) 2026 is designed to help
              professionals move beyond earning a salary and start building
              long-term wealth through intentional career and financial
              decisions.
            </p>

          </div>

          {/* ================= NAVIGATION ================= */}
          <div className="lg:col-span-4 space-y-6">

            <span className="block text-[11px] tracking-[0.3em] uppercase text-white/40">
              Navigate
            </span>

            <ul className="space-y-3 text-sm">

              <li>
                <Link href="#about" className="text-white/70 hover:text-white transition">
                  About
                </Link>
              </li>

              <li>
                <Link href="#experience" className="text-white/70 hover:text-white transition">
                  Experience
                </Link>
              </li>

              <li>
                <Link href="#speakers" className="text-white/70 hover:text-white transition">
                  Speakers
                </Link>
              </li>

              <li>
                <Link href="#tickets" className="text-white/70 hover:text-white transition">
                  Tickets
                </Link>
              </li>

              <li>
                <Link href="#faq" className="text-white/70 hover:text-white transition">
                  FAQ
                </Link>
              </li>

            </ul>

          </div>

          {/* ================= CONTACT / CTA ================= */}
          <div className="lg:col-span-4 space-y-6">

            <span className="block text-[11px] tracking-[0.3em] uppercase text-white/40">
              Get Involved
            </span>

            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              For partnerships, sponsorships, or enquiries, reach out and
              become part of a movement shaping the future of careers and wealth.
            </p>

            <a
              href="mailto:thecareercoreconference@gmail.com"
              className="block text-white hover:text-[#FFD200] transition text-sm"
            >
              thecareercoreconference@gmail.com
            </a>

            {/* CTA BUTTON */}
            <div className="pt-2">
              <a
                href="https://tix.africa/discover/the-career-core-conference-2026"
                className="
                  inline-block rounded-full px-6 py-3 text-sm font-medium
                  bg-[#004CFE] hover:bg-[#003ad6]
                  transition hover:scale-105
                "
              >
                Register Now
              </a>
            </div>

          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-20 text-center text-white/40 text-xs tracking-wide">
          © {new Date().getFullYear()} The Career Core Conference. All rights reserved.
        </div>

      </div>
    </footer>
  );
}