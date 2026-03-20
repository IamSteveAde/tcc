"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ============================= */
/* SLIDES DATA */
/* ============================= */

const slides = [
  {
    title: "Beyond the Paycheck.",
    highlight: "From Work to Wealth.",
    desc: "Join 1,000+ ambitious professionals for clarity, strategy, and real conversations about money and the future of work.",
  },
  {
    title: "Clarity.",
    highlight: "Strategy. Execution.",
    desc: "Learn how to position your career for growth, income expansion, and long-term wealth.",
  },
  {
    title: "Not Just Work.",
    highlight: "Build Wealth.",
    desc: "Move beyond survival income and start designing a financially intentional life.",
  },
];

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function PremiumHero() {
  const [index, setIndex] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#000028] text-white">

      {/* ================= VIDEO BACKGROUND ================= */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover scale-110"
      >
        <source src="/images/hero/lagos.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#000028]/40 " />

      {/* GRADIENT LIGHT FX */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#004CFE]/20 via-transparent to-[#FF9500]/10" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex h-full items-center px-6 md:px-16">

        <div className="max-w-3xl">

          {/* TAG */}
          <p className="mb-4 text-sm tracking-[0.2em] text-white/60">
            THE CAREER CORE CONFERENCE 2026
          </p>

          {/* SLIDER TEXT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">

                {slides[index].title}

                <br />

                <span className="bg-gradient-to-r from-[#004CFE] via-[#FFD200] to-[#FF9500] bg-clip-text text-transparent">
                  {slides[index].highlight}
                </span>
              </h1>

              <p className="mt-6 text-lg text-white/70 max-w-xl">
                {slides[index].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://tix.africa/discover/the-career-core-conference-2026"
              className="rounded-full bg-[#004CFE] px-6 py-3 text-sm font-medium transition hover:scale-105 hover:bg-[#003ad6]"
            >
              Get Your Ticket
            </a>

            <button className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/80 backdrop-blur-md hover:bg-white/10 transition">
              View Details
            </button>
          </div>

          {/* URGENCY */}
          <p className="mt-4 text-sm text-white/50">
            Limited seats available across all tiers
          </p>
        </div>
      </div>

      {/* ================= ARROWS ================= */}
      <div className="absolute bottom-10 right-10 flex gap-3 z-20">

        <button
          onClick={prev}
          className="group rounded-full border border-white/20 p-3 backdrop-blur-md hover:bg-white/10 transition"
        >
          <ChevronLeft className="h-5 w-5 text-white/70 group-hover:scale-110 transition" />
        </button>

        <button
          onClick={next}
          className="group rounded-full border border-white/20 p-3 backdrop-blur-md hover:bg-white/10 transition"
        >
          <ChevronRight className="h-5 w-5 text-white/70 group-hover:scale-110 transition" />
        </button>
      </div>

      {/* ================= SLIDE INDICATOR ================= */}
      <div className="absolute bottom-10 left-10 flex gap-2 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-[3px] w-8 rounded-full transition-all ${
              i === index
                ? "bg-[#004CFE] w-12"
                : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}