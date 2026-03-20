"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Insightful Keynote",
    desc: "Learn from a professional who has turned career into wealth and long-term influence.",
  },
  {
    title: "Real Money Conversations",
    desc: "Understand how income, investing, and financial decisions actually work in today’s world.",
  },
  {
    title: "Practical Sessions",
    desc: "Gain frameworks for negotiation, income growth, and building multiple streams.",
  },
  {
    title: "Networking that Matters",
    desc: "Connect with ambitious professionals, founders, and operators.",
  },
  {
    title: "Executive Experience",
    desc: "A premium experience with priority seating and curated networking access.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative py-32 px-6 md:px-16 text-white overflow-hidden" id="experience">

      {/* ================= FIXED BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed scale-110"
          style={{
            backgroundImage: "url('/images/gallery/5.jpg')",
          }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#000028]/85" />

        {/* GRADIENT LIGHT */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#004CFE]/20 via-transparent to-[#FF9500]/10" />
      </div>

      {/* ================= INTRO TEXT ================= */}
      <div className="max-w-4xl mx-auto text-center mb-20">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.2em] text-white/60 mb-4"
        >
          WHAT TO EXPECT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl text-white/70 font-bold leading-tight"
        >
          If you’ve ever felt ready for more
          <br />
          but unsure how to get there,
          <br />
          <span className="bg-gradient-to-r from-[#004CFE] via-[#FFD200] to-[#FF9500] bg-clip-text text-transparent">
            this is where your journey starts.
          </span>
        </motion.h2>
      </div>

      {/* ================= CARDS ================= */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >

            {/* GLOW */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#004CFE]/40 via-transparent to-[#FF9500]/30 opacity-0 group-hover:opacity-100 blur transition duration-500" />

            {/* CARD */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 h-full transition duration-500 group-hover:translate-y-[-6px] group-hover:bg-white/10">

              {/* TOP ACCENT LINE */}
              <div className="w-10 h-[2px] bg-gradient-to-r from-[#004CFE] to-[#FF9500] mb-6" />

              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-white/70 leading-relaxed text-sm">
                {item.desc}
              </p>

            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= CTA BLOCK ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-20 text-center"
      >
        <a
          href="https://tix.africa/discover/the-career-core-conference-2026"
          className="inline-block rounded-full bg-[#004CFE] px-8 py-4 text-sm font-medium transition hover:scale-105 hover:bg-[#003ad6]"
        >
          Register Now
        </a>
      </motion.div>

    </section>
  );
}