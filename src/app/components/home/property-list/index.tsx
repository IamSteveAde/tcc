"use client";

import { motion } from "framer-motion";

/* ============================= */
/* DATA */
/* ============================= */

const audience = [
  {
    title: "Young Professionals",
    desc: "Early in your career and looking to build a strong foundation, increase your earning power, and make smarter financial decisions.",
    gradient: "from-[#004CFE]/10 to-[#004CFE]/5",
  },
  {
    title: "Mid-Career Professionals",
    desc: "You’ve gained experience but need clarity on how to grow, earn more, and transition into wealth-building opportunities.",
    gradient: "from-[#FFD200]/20 to-[#FF9500]/10",
  },
  {
    title: "Creatives & Knowledge Workers",
    desc: "Turn your skills, ideas, and expertise into sustainable income streams and long-term financial value.",
    gradient: "from-[#FF9500]/15 to-[#E23C2E]/10",
  },
  {
    title: "Tech & Digital Professionals",
    desc: "Leverage high-income skills, global opportunities, and digital leverage to accelerate your wealth journey.",
    gradient: "from-[#004CFE]/15 to-[#00C2FF]/10",
  },
  {
    title: "Final-Year Students & NYSC",
    desc: "Start your career with clarity, direction, and a real understanding of how money and opportunities work.",
    gradient: "from-[#FFD200]/15 to-[#004CFE]/10",
  },
  {
    title: "Career Pivoters & Founders",
    desc: "Transition into new paths, build businesses, and create income streams beyond traditional employment.",
    gradient: "from-[#E23C2E]/15 to-[#FF9500]/10",
  },
  {
    title: "Future Wealth Builders",
    desc: "Anyone ready to stop just earning and start intentionally building long-term wealth and financial freedom.",
    gradient: "from-[#004CFE]/10 to-[#FFD200]/10",
  },
];

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function WhoShouldAttend() {
  return (
    <section className="relative bg-white py-24 px-6 md:px-16 overflow-hidden">

      {/* ================= BACKGROUND SHAPE ================= */}
      <div className="absolute inset-0 pointer-events-none">

        {/* FLOWING SHAPE */}
        <motion.div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl"
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

        <motion.div
          className="absolute bottom-[-150px] right-[-100px] w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,210,0,0.15), rgba(0,76,254,0.1))",
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* ================= HEADER ================= */}
      <div className="relative z-10 max-w-3xl mb-16">

        <p className="text-sm tracking-[0.2em] text-[#004CFE] mb-4">
          WHO SHOULD ATTEND
        </p>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#000028]">
          Designed for people who are
          <br />
          <span className="bg-gradient-to-r from-[#004CFE] via-[#FFD200] to-[#FF9500] bg-clip-text text-transparent">
            ready for more.
          </span>
        </h2>
      </div>

      {/* ================= GRID ================= */}
      <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {audience.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="group relative"
          >

            {/* CARD */}
            <div
              className={`h-full rounded-2xl p-8 border border-black/5 bg-gradient-to-br ${item.gradient} backdrop-blur-md transition duration-500 group-hover:scale-[1.02] group-hover:shadow-xl`}
            >

              {/* TOP LINE */}
              <div className="w-10 h-[2px] bg-gradient-to-r from-[#004CFE] to-[#FF9500] mb-6" />

              <h3 className="text-xl font-semibold text-[#000028] mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= CTA ================= */}
      <div className="relative z-10 mt-20 text-center">
        <a
          href="https://tix.africa/discover/the-career-core-conference-2026"
          className="inline-block rounded-full bg-[#004CFE] px-8 py-4 text-white text-sm font-medium transition hover:scale-105 hover:bg-[#003ad6]"
        >
          Secure Your Spot
        </a>
      </div>
    </section>
  );
}