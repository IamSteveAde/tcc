"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

/* ============================= */
/* DATA */
/* ============================= */

const faqs = [
  {
    q: "What is TCC 2026 about?",
    a: "TCC 2026 helps professionals understand how to turn their careers into long-term wealth through better financial decisions and career strategy.",
  },
  {
    q: "Who can attend?",
    a: "Anyone looking to grow their career and build wealth intentionally.",
  },
  {
    q: "Will there be networking opportunities?",
    a: "Yes. Networking is a core part of the experience.",
  },
  {
    q: "What’s included in each ticket?",
    a: "All tickets include access to sessions, with premium tiers offering additional benefits.",
  },
  {
    q: "Can organizations partner with the conference?",
    a: "Yes. Partnership opportunities are available.",
  },
];

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="bg-white py-28 px-6 md:px-16">

      {/* ================= HEADER ================= */}
      <div className="max-w-3xl mb-16">

        <p className="text-sm tracking-[0.2em] text-[#004CFE] mb-4">
          FREQUENTLY ASKED QUESTIONS
        </p>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#000028]">
          Everything you need to know
          <br />
          <span className="bg-gradient-to-r from-[#004CFE] via-[#FFD200] to-[#FF9500] bg-clip-text text-transparent">
            before you attend.
          </span>
        </h2>
      </div>

      {/* ================= FAQ LIST ================= */}
      <div className="max-w-3xl space-y-4">

        {faqs.map((faq, i) => {
          const isOpen = active === i;

          return (
            <div
              key={i}
              className="border-b border-black/10 pb-4"
            >

              {/* QUESTION */}
              <button
                onClick={() => setActive(isOpen ? null : i)}
                className="w-full flex items-center justify-between text-left py-4"
              >
                <span className="text-lg font-medium text-[#000028]">
                  {faq.q}
                </span>

                <span className="ml-4 text-[#004CFE]">
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              {/* ANSWER */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 pb-4 pr-6 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          );
        })}
      </div>

      {/* ================= CTA ================= */}
      <div className="mt-16">
        <a
          href="https://tix.africa/discover/the-career-core-conference-2026"
          className="inline-block rounded-full bg-[#004CFE] px-8 py-4 text-white font-medium transition hover:scale-105 hover:bg-[#003ad6]"
        >
          Get Your Ticket
        </a>
      </div>

    </section>
  );
}