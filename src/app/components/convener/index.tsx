"use client";

import { motion } from "framer-motion";

export default function ConvenerStory() {
  return (
    <section className="relative bg-white py-32 px-6 md:px-16 overflow-hidden">

      {/* ================= ROTATING SQUARE BACKGROUND ================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        {/* BIG ROTATING SQUARE */}
        <motion.div
          className="absolute w-[500px] h-[500px] border border-black/5"
          animate={{ rotate: 360 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* INNER SQUARE */}
        <motion.div
          className="absolute w-[300px] h-[300px] border border-black/5"
          animate={{ rotate: -360 }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* SOFT GLOW */}
        <div className="absolute w-[600px] h-[600px] bg-[#004CFE]/5 blur-3xl rounded-full" />
      </div>

      {/* ================= SECTION 1 ================= */}
      <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

        {/* IMAGE LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/images/gallery/mayowa1.png"
              alt="Mayowa Agbelese"
              className=""
            />
          </div>
        </motion.div>

        {/* TEXT RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-xl"
        >
          <p className="text-sm tracking-[0.2em] text-[#004CFE] mb-6">
            A NOTE FROM THE CONVENER
          </p>

          <div className="space-y-5 text-gray-700 text-lg leading-relaxed">

            <p>
              For a long time, we were taught that building a successful career meant getting a good job, earning more, and climbing the ladder.
              But today, that’s no longer enough.
            </p>

            <p>
              We’re seeing more professionals earning well but still feeling financially stuck.
              More people working hard but not building long-term security.
            </p>

            <p className="font-medium text-[#000028]">
              TCC was created to change that.
            </p>

            <p>
              The goal is simple: to help you understand how your career can become a platform for wealth, ownership, and long-term impact.
            </p>

            <p>
              This is not about abandoning your job. It’s about thinking differently about how your work translates into value.
            </p>

            <p>
              If you’re ready to move beyond just earning and start building, then you’re in the right place.
            </p>

            <p>I look forward to welcoming you.</p>
          </div>

          {/* SIGNATURE */}
          <div className="mt-10">
            <p className="text-[#000028] font-medium">
              — Mayowa Agbelese
            </p>
            <div className="mt-2 w-16 h-[2px] bg-gradient-to-r from-[#004CFE] to-[#FF9500]" />
          </div>
        </motion.div>
      </div>

      {/* ================= SECTION 2 ================= */}
      <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto mt-32">

        {/* TEXT LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-xl"
        >
          <p className="text-sm tracking-[0.2em] text-[#004CFE] mb-6">
            CONVENER BIO
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-[#000028] mb-2">
            Mayowa Agbelese
          </h3>

          <p className="text-sm text-gray-500 mb-6">
            Convener, The Career Core Conference • Leadership & Business Consultant
          </p>

          <p className="text-gray-600 leading-relaxed">
            As a Senior Consultant at KPMG Nigeria, Mayowa specializes in helping organizations unlock strategic alignment,
            operational efficiency, and leadership effectiveness. His work is rooted in understanding each organization’s
            unique context and delivering tailored solutions that drive measurable impact.
            <br /><br />
            He is passionate about equipping leaders and organizations to scale sustainably, believing that strong leadership
            drives not just business success, but meaningful impact in people’s lives.
          </p>
        </motion.div>

        {/* IMAGE RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/images/gallery/mayowa2.jpeg"
              alt="Mayowa Agbelese"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}