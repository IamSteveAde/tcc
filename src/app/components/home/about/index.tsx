"use client";

import { motion } from "framer-motion";

export default function AboutConference() {
  return (
    <section className="relative overflow-hidden bg-white py-24 px-6 md:px-16" id="about">

      {/* ================= BALANCED ORBIT BACKGROUND ================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        {/* SOFT BASE GLOW */}
        <motion.div
          className="absolute w-[750px] h-[750px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,76,254,0.08) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* RING 1 (SOFT) */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            boxShadow: "0 0 0 1px rgba(0,0,0,0.06)",
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* RING 2 */}
        <motion.div
          className="absolute w-[420px] h-[420px] rounded-full"
          style={{
            boxShadow: "0 0 0 1px rgba(0,0,0,0.05)",
          }}
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 65,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* RING 3 */}
        <motion.div
          className="absolute w-[260px] h-[260px] rounded-full"
          style={{
            boxShadow: "0 0 0 1px rgba(0,0,0,0.04)",
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 55,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* MAIN ORBIT DOT */}
        <motion.div
          className="absolute w-4 h-4"
          animate={{ rotate: 360 }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="translate-x-[300px]">

            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#004CFE] via-[#FFD200] to-[#FF9500]" />

            <div className="absolute inset-0 w-4 h-4 rounded-full blur-md opacity-60 bg-gradient-to-r from-[#004CFE] via-[#FFD200] to-[#FF9500]" />
          </div>
        </motion.div>

        {/* SECOND ORBIT DOT */}
        <motion.div
          className="absolute w-2 h-2"
          animate={{ rotate: -360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="translate-x-[200px]">
            <div className="w-2 h-2 rounded-full bg-[#004CFE]/60 blur-[0.5px]" />
          </div>
        </motion.div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="overflow-hidden rounded-2xl shadow-2xl">

            <img
              src="/images/gallery/2.jpg"
              alt="Conference"
              className="w-full h-[500px] object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-[#004CFE]/10" />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >

          <p className="text-sm tracking-[0.2em] text-[#004CFE] mb-4">
            ABOUT THE CONFERENCE
          </p>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-[#000028]">
            Rethinking Work.
            <br />
            <span className="bg-gradient-to-r from-[#004CFE] via-[#FFD200] to-[#FF9500] bg-clip-text text-transparent">
              Redefining Wealth.
            </span>
          </h2>

          <div className="mt-6 space-y-4 text-gray-600 text-lg leading-relaxed">

            <p>
              The Career Core Conference (TCC) 2026 is a powerful one-day experience designed to help professionals move beyond earning a salary and start building long-term wealth.
            </p>

            <p>
              For years, career advice has focused on getting a job, earning more, and climbing the ladder. But today’s reality is different.
              <strong className="text-[#000028]"> Income alone is no longer enough.</strong>
            </p>

            <p>
              Through insightful conversations, practical sessions, and meaningful connections, TCC 2026 helps you understand how to turn your career, skills, and opportunities into assets, income streams, and long-term value.
            </p>

            <p>
              This is where professionals come to rethink work, money, and what wealth truly means.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="https://tix.africa/discover/the-career-core-conference-2026"
              className="inline-block rounded-full bg-[#004CFE] px-7 py-3 text-white text-sm font-medium transition hover:scale-105 hover:bg-[#003ad6]"
            >
              Register Now
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}