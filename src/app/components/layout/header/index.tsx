"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
  import Image from "next/image";

/* -------------------------------------
   TCC BRAND COLORS
------------------------------------- */
const BRAND = {
  dark: "#000028",
  blue: "#004CFE",
  yellow: "#FFD200",
  orange: "#FF9500",
};

export default function Header() {
  const [onDark, setOnDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* ---------------- DARK SECTION DETECTION ---------------- */
  useEffect(() => {
    const sections =
      document.querySelectorAll<HTMLElement>("section[data-dark]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setOnDark(entries.some((entry) => entry.isIntersecting));
      },
      {
        rootMargin: "-80px 0px -70% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* ---------------- LOCK SCROLL ---------------- */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          backdrop-blur-xl
          transition-all duration-500
          ${
            onDark
              ? "bg-black/30 text-white"
              : "bg-white/80 text-[#000028]"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            {/* ================= LOGO ================= */}
          

<Link href="/" className="z-50 flex items-center">
  <Image
    src="/images/logo/tccblack.png" // make sure this path is correct
    alt="TCC 2026"
    width={120}
    height={40}
    className="object-contain"
    priority
  />
</Link>
            {/* ================= DESKTOP NAV ================= */}
            <nav className="hidden md:flex items-center gap-10">

              <NavItem onDark={onDark} href="#about">About</NavItem>
              <NavItem onDark={onDark} href="#experience">Experience</NavItem>
              <NavItem onDark={onDark} href="#speakers">Speakers</NavItem>
              <NavItem onDark={onDark} href="#tickets">Tickets</NavItem>

              {/* CTA */}
              <Link
                href="https://tix.africa/discover/the-career-core-conference-2026"
                className="
                  ml-4 px-5 py-2 rounded-full text-xs tracking-[0.2em] uppercase
                  bg-[#004CFE] text-white
                  hover:bg-[#003ad6]
                  transition
                "
              >
                Register
              </Link>
            </nav>

            {/* ================= MOBILE BUTTON ================= */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="
                md:hidden z-50
                h-11 w-11
                rounded-full
                flex items-center justify-center
                backdrop-blur-xl
                bg-white/20
                border border-white/20
                transition
              "
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#000028]/95 backdrop-blur-2xl">

          {/* GRADIENT BACKGROUND */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#004CFE]/20 via-transparent to-[#FF9500]/10" />

          <nav className="relative h-full flex flex-col items-center justify-center">

            <MobileNavItem href="#about" onClick={() => setMenuOpen(false)}>
              About
            </MobileNavItem>

            <Divider />

            <MobileNavItem href="#experience" onClick={() => setMenuOpen(false)}>
              Experience
            </MobileNavItem>

            <Divider />

            <MobileNavItem href="#speakers" onClick={() => setMenuOpen(false)}>
              Speakers
            </MobileNavItem>

            <Divider />

            <MobileNavItem href="#tickets" onClick={() => setMenuOpen(false)}>
              Tickets
            </MobileNavItem>

            <Divider />

            {/* CTA */}
            <a
              href="https://tix.africa/discover/the-career-core-conference-2026"
              className="
                mt-6 px-8 py-3 rounded-full
                bg-[#004CFE] text-white
                text-sm tracking-[0.25em] uppercase
                hover:bg-[#003ad6]
                transition
              "
            >
              Register Now
            </a>

          </nav>
        </div>
      )}
    </>
  );
}

/* ================= DESKTOP NAV ITEM ================= */
function NavItem({
  href,
  children,
  onDark,
}: {
  href: string;
  children: React.ReactNode;
  onDark: boolean;
}) {
  return (
    <Link
      href={href}
      className={`
        text-[11px] tracking-[0.3em] uppercase
        relative group
        ${onDark ? "text-white/80" : "text-[#000028]/80"}
      `}
    >
      {children}

      {/* UNDERLINE */}
      <span className="
        absolute left-0 -bottom-1 h-[1px] w-0
        bg-gradient-to-r from-[#004CFE] to-[#FF9500]
        transition-all duration-300
        group-hover:w-full
      " />
    </Link>
  );
}

/* ================= MOBILE NAV ITEM ================= */
function MobileNavItem({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="
        text-white text-sm
        tracking-[0.35em] uppercase
        py-4 transition hover:opacity-70
      "
    >
      {children}
    </Link>
  );
}

/* ================= DIVIDER ================= */
function Divider() {
  return (
    <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
  );
}