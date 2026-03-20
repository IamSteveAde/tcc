"use client";

import { motion } from "framer-motion";

/* ============================= */
/* DATA */
/* ============================= */

const tickets = [
  {
    name: "Early Access Pass",
    subtitle: "One Day",
    price: "₦20,000",
    highlight: "Best Value",
    features: [
      "Full access to all sessions and panels",
      "Networking opportunities",
      "Conference materials",
      "Limited tickets available",
    ],
    gradient: "from-[#004CFE]/10 to-[#004CFE]/5",
  },
  {
    name: "Team Bundle (4 Seats)",
    subtitle: "One Day",
    price: "₦72,000",
    highlight: "For Teams",
    features: [
      "Full access for 4 attendees",
      "Discounted group rate",
      "Access to all sessions",
      "Networking opportunities",
    ],
    gradient: "from-[#FFD200]/20 to-[#FF9500]/10",
  },
  {
    name: "Executive Pass",
    subtitle: "One Day",
    price: "₦85,000",
    highlight: "Premium Experience",
    features: [
      "Priority seating close to the stage",
      "VIP check-in lane",
      "Exclusive networking access",
      "Light refreshments",
      "Full access to all sessions",
    ],
    gradient: "from-[#000028] to-[#004CFE]/20",
    dark: true,
  },
];

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function TicketSection() {
  return (
    <section className="relative bg-white py-28 px-6 md:px-16 overflow-hidden"id="tickets">

      {/* ================= HEADER ================= */}
      <div className="max-w-4xl mx-auto text-center mb-20">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-sm tracking-[0.2em] text-[#004CFE] mb-4"
        >
          TICKETS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold leading-tight text-[#000028]"
        >
          Tickets are limited.
          <br />
          <span className="bg-gradient-to-r from-[#004CFE] via-[#FFD200] to-[#FF9500] bg-clip-text text-transparent">
            Designed for a high-quality experience.
          </span>
        </motion.h2>

        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
          If you’ve been looking for a sign to take your career and finances seriously, this is it.
          Your future deserves more than a paycheck.
        </p>
      </div>

      {/* ================= PRICING GRID ================= */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {tickets.map((ticket, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group relative"
          >

            {/* GLOW EFFECT */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#004CFE]/30 via-transparent to-[#FF9500]/30 opacity-0 group-hover:opacity-100 blur transition duration-500" />

            {/* CARD */}
            <div
              className={`relative h-full rounded-2xl p-8 border ${
                ticket.dark
                  ? "bg-[#000028] text-white border-white/10"
                  : "bg-gradient-to-br " + ticket.gradient + " border-black/5"
              } backdrop-blur-xl transition duration-500 group-hover:translate-y-[-8px]`}
            >

              {/* BADGE */}
              <div className="mb-6 inline-block text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">
                {ticket.highlight}
              </div>

              {/* TITLE */}
              <h3 className="text-xl text-[#004CFE] font-semibold mb-1">
                {ticket.name}
              </h3>

              <p className="text-sm opacity-70 mb-6">
                {ticket.subtitle}
              </p>

              {/* PRICE */}
              <div className="text-3xl font-bold mb-6">
                {ticket.price}
              </div>

              {/* FEATURES */}
              <ul className="space-y-3 mb-8">
                {ticket.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="text-sm opacity-80 flex items-start gap-2"
                  >
                    <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#004CFE]" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://tix.africa/discover/the-career-core-conference-2026"
                className={`block text-center rounded-full py-3 text-sm font-medium transition ${
                  ticket.dark
                    ? "bg-white text-[#000028] hover:bg-gray-200"
                    : "bg-[#004CFE] text-white hover:bg-[#003ad6]"
                }`}
              >
                Register
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= PARTNERSHIP ================= */}
      <div className="max-w-4xl mx-auto mt-24 text-center">

        <h3 className="text-2xl font-semibold text-[#000028] mb-4">
          Partnerships & Sponsorships
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Every partnership is an opportunity to shape how professionals think about careers,
          money, and wealth. Partnering with TCC 2026 positions your brand at the center of
          conversations that influence the next generation of professionals and leaders.
        </p>

        <p className="mt-4 text-gray-600">
          This is more than visibility, it’s impact.
        </p>

        <a
          href="mailto:thecareercoreconference@gmail.com"
          className="inline-block mt-6 text-[#004CFE] font-medium hover:underline"
        >
          thecareercoreconference@gmail.com
        </a>
      </div>

      {/* ================= FINAL CTA ================= */}
      <div className="mt-16 text-center">
        <a
          href="https://tix.africa/discover/the-career-core-conference-2026"
          className="inline-block rounded-full bg-[#004CFE] px-10 py-4 text-white font-medium transition hover:scale-105 hover:bg-[#003ad6]"
        >
          Grab Your Ticket Now
        </a>
      </div>

    </section>
  );
}