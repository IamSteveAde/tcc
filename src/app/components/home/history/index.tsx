"use client";

import { motion } from "framer-motion";

/* ============================= */
/* SAMPLE IMAGES (REPLACE WITH YOURS) */
/* ============================= */

const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/7.jpg",
];

/* ============================= */
/* SPEAKERS */
/* ============================= */

const speakers = [
  {
    name: "Temitope Oladokun",
    role: "Director, Customer Management, Coca-Cola",
    img: "/images/speakers/temi.jpeg",
  },
  {
    name: "Emmanuel Faith",
    role: "Founder, HR Clinic",
    img: "/images/speakers/emma.jpg",
  },
  {
    name: "Topsy Kola-Oyeneyin",
    role: "Industry Leader",
    img: "/images/speakers/topsy.jpg",
  },
  {
    name: "Olayinka Oyetunji",
    role: "CFA, Charterholder CFA Institute",
    img: "/images/speakers/yinka.jfif",
  },
  {
    name: "Dr Joshua Ademuwagun",
    role: "HR Director, Pernod Ricard Nigeria",
    img: "/images/speakers/josh.jpg",
  },
  {
    name: "Oyinda Akinyemi",
    role: "Head, Equity Capital Market for Africa Regions, Standard Chartered Bank",
    img: "/images/speakers/oyinda.jpg",
  },
   {
    name: "Omolara Dada",
    role: "Product Marketing & Growth Leader",
    img: "/images/speakers/dada.jpg",
  },
  {
    name: "Adewumi Alphonso",
    role: "Professional Coach & HR Leader",
    img: "/images/speakers/alphonso.jpeg",
  },
   {
    name: "Kema Oyih",
    role: "Artist Manager",
    img: "/images/speakers/kema.jpg",
  },
  {
    name: "Adetowun Adekoya",
    role: "Business Performance Manager, Asharami Energy Limited (Sahara Group Company)",
    img: "/images/speakers/koya.jfif",
  },
  {
    name: "KEMI SOPE-AGBEBI",
    role: "Head, Partnerships and Commercial Excellence (NG, GH, Kenya), PBR Life sciences.",
    img: "/images/speakers/kemi.jpeg",
  },
  {
    name: "Oreoluwa Adekoya",
    role: "Head of Customer Supply Chain, Nestlé Central & West Africa Region",
    img: "/images/speakers/ore.jfif",
  },
  {
    name: "Busayo Durojaye",
    role: "Co-founder, Loopify",
    img: "/images/speakers/busayo.jfif",
  },
];

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function GallerySection() {
  return (
    <section className="bg-[#000028] text-white py-28 px-6 md:px-16" id="speakers">

      {/* ================= HEADER ================= */}
      <div className="max-w-5xl mx-auto text-center mb-20">

        <p className="text-sm tracking-[0.2em] text-white/60 mb-4">
          TCC 2025 IN PICTURES
        </p>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          A glimpse into the
          <br />
          <span className="bg-gradient-to-r from-[#004CFE] via-[#FFD200] to-[#FF9500] bg-clip-text text-transparent">
            experience, energy, and moments.
          </span>
        </h2>
      </div>

      {/* ================= GALLERY ================= */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">

        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden rounded-xl group ${
              i % 3 === 0 ? "row-span-2" : ""
            }`}
          >

            <img
              src={src}
              alt=""
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
          </motion.div>
        ))}
      </div>

      {/* VIEW MORE */}
      <div className="text-center mt-10">
        <a
          href="https://drive.google.com/drive/folders/1r0Cc1muKe5YtG1U75Bn4zSeAHTT6EZRw?usp=drive_link"
          target="_blank"
          className="text-white/70 hover:text-white underline"
        >
          View Full Gallery →
        </a>
      </div>

      {/* ================= SPEAKERS ================= */}
      <div className="mt-32">

        <div className="max-w-5xl mx-auto text-center mb-16">
          <p className="text-sm tracking-[0.2em] text-white/60 mb-4">
            PAST SPEAKERS
          </p>

          <h3 className="text-2xl md:text-4xl font-semibold">
            Learn from people who are
            <span className="block bg-gradient-to-r from-[#004CFE] via-[#FFD200] to-[#FF9500] bg-clip-text text-transparent">
              building, leading, and influencing.
            </span>
          </h3>
        </div>

        {/* SPEAKER GRID */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

          {speakers.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group"
            >

              <div className="relative overflow-hidden rounded-xl bg-[#0a0a3a]">

  <img
    src={s.img}
    alt={s.name}
    className="w-full h-[260px] object-contain object-top transition duration-700 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

  {/* TEXT */}
  <div className="absolute bottom-4 left-4 right-4">
    <h4 className="text-sm text-[#FF9500] font-semibold">
      {s.name}
    </h4>
    <p className="text-xs text-white/70">
      {s.role}
    </p>
  </div>

</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <a
          href="https://tix.africa/discover/the-career-core-conference-2026"
          className="inline-block rounded-full bg-[#004CFE] px-10 py-4 text-white font-medium transition hover:scale-105 hover:bg-[#003ad6]"
        >
          Join Us in 2026
        </a>
      </div>

    </section>
  );
}