"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";

export default function EventDetailsElegant() {
  return (
    <section className="relative bg-white py-24 px-6 md:px-16 overflow-hidden">

      {/* ================= BACKGROUND SOFT SHAPE ================= */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[-120px] left-[-100px] w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,76,254,0.15), rgba(255,149,0,0.1))",
          }}
          animate={{
            x: [0, 40, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* ================= HEADER ================= */}
      <div className="text-center max-w-3xl mx-auto mb-16">

        <p className="text-sm tracking-[0.2em] text-[#004CFE] mb-4">
          EVENT DETAILS
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-[#000028] leading-tight">
          Plan your experience.
          <br />
          <span className="bg-gradient-to-r from-[#004CFE] via-[#FFD200] to-[#FF9500] bg-clip-text text-transparent">
            Be ready for what’s ahead.
          </span>
        </h2>
      </div>

      {/* ================= MAIN CARD ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative max-w-4xl mx-auto"
      >

        {/* GLOW BORDER */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#004CFE]/30 via-transparent to-[#FF9500]/30 blur opacity-70" />

        {/* CARD */}
        <div className="relative rounded-2xl bg-white border border-black/5 shadow-xl p-10 md:p-14">

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-10">

            {/* LOCATION */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-4 p-4 rounded-full bg-[#004CFE]/10 text-[#004CFE] group-hover:scale-110 transition">
                <MapPin size={22} />
              </div>
              <p className="text-sm text-gray-500 mb-1">Location</p>
              <p className="font-medium text-[#000028]">
                Lagos, Nigeria
              </p>
            </div>

            {/* DATE */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-4 p-4 rounded-full bg-[#FFD200]/20 text-[#FF9500] group-hover:scale-110 transition">
                <Calendar size={22} />
              </div>
              <p className="text-sm text-gray-500 mb-1">Date</p>
              <p className="font-medium text-[#000028]">
                September 17th, 2026
              </p>
            </div>

            {/* TIME */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-4 p-4 rounded-full bg-[#E23C2E]/10 text-[#E23C2E] group-hover:scale-110 transition">
                <Clock size={22} />
              </div>
              <p className="text-sm text-gray-500 mb-1">Time</p>
              <p className="font-medium text-[#000028]">
                9:00 AM – 4:00 PM
              </p>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="my-10 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

          {/* FOOT NOTE */}
          <p className="text-center text-gray-600">
            Stay tuned for speaker announcements and the full agenda.
          </p>

        </div>
      </motion.div>

      {/* ================= CTA ================= */}
      <div className="text-center mt-12">
        <a
          href="https://tix.africa/discover/the-career-core-conference-2026"
          className="inline-block rounded-full bg-[#004CFE] px-8 py-4 text-white font-medium transition hover:scale-105 hover:bg-[#003ad6]"
        >
          Save Your Seat
        </a>
      </div>

    </section>
  );
}