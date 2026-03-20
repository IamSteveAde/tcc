"use client";

import { motion } from "framer-motion";

export default function JoinMovement() {
  return (
    <section className="relative bg-white py-32 px-6 md:px-16 overflow-hidden">

      {/* ================= BACKGROUND ELEMENT ================= */}
      <div className="absolute inset-0 pointer-events-none">

        {/* ROTATING GRADIENT RING */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(0,76,254,0.15), rgba(255,210,0,0.1), rgba(255,149,0,0.1), rgba(0,76,254,0.15))",
            transform: "translate(-50%, -50%)",
            filter: "blur(60px)",
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* SOFT CENTER GLOW */}
        <div className="absolute left-1/2 top-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-[#004CFE]/10 rounded-full blur-3xl" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* TAG */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-sm tracking-[0.2em] text-[#004CFE] mb-6"
        >
          JOIN THE MOVEMENT
        </motion.p>

        {/* HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-[#000028] leading-tight"
        >
          This is not just a conference.
          <br />
          <span className="bg-gradient-to-r from-[#004CFE] via-[#FFD200] to-[#FF9500] bg-clip-text text-transparent">
            It’s a shift.
          </span>
        </motion.h2>

        {/* SUBTEXT */}
        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
          TCC 2026 is redefining how professionals think about work, money,
          and the future.
        </p>

        {/* TRANSFORMATIONS */}
        <div className="mt-12 space-y-4">
          {[
            ["income", "assets"],
            ["career", "capital"],
            ["paycheck", "wealth"],
          ].map(([from, to], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-center gap-4 text-xl md:text-2xl font-medium"
            >
              <span className="text-gray-500">{from}</span>
              <span className="text-[#004CFE]">→</span>
              <span className="text-[#000028]">{to}</span>
            </motion.div>
          ))}
        </div>

        {/* STATEMENT */}
        <p className="mt-12 text-lg text-[#000028] font-medium">
          Be there. Be intentional. Build wealth.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="https://tix.africa/discover/the-career-core-conference-2026"
            className="inline-block rounded-full bg-[#004CFE] px-10 py-4 text-white font-medium transition hover:scale-105 hover:bg-[#003ad6]"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}