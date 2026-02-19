"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Measure",
    subtitle: "Diagnostics",
    desc: "Proxima Health Baseline blood test to identify and measure over 30 environmental toxins with clinical precision.",
    link: "/diagnostics"
  },
  {
    num: "02",
    title: "Optimize",
    subtitle: "Lifestyle",
    desc: "Evidence based protocols and lifestyle changes to reduce ongoing exposure.",
    link: "/interventions"
  },
  {
    num: "03",
    title: "Eliminate",
    subtitle: "Therapeutics",
    desc: "Advanced blood filtration to remove accumulated toxins from the body.",
    link: "/interventions"
  }
];

export default function ThreeStepsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-proxima-cream">
      {/* Vertical line on right - continues from hero */}
      <div className="absolute top-0 right-10 w-px h-full bg-proxima-black/60 hidden lg:block" />

      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pt-4 transition-opacity duration-300"
              style={{
                opacity: hoveredIndex === null ? 1 : hoveredIndex === i ? 1 : 0.4
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient top line - shows on hover */}
              <div 
                className="absolute top-0 left-0 right-0 h-[2px] proxima-gradient transition-opacity duration-300"
                style={{ opacity: hoveredIndex === i ? 1 : 0 }}
              />

              {/* Step number */}
              <span className="block text-7xl md:text-8xl font-bold text-proxima-black/20 leading-none mb-4 font-display">
                {item.num}
              </span>

              {/* Step title - white on black pill */}
              <h3 className="inline-block bg-proxima-black text-proxima-cream px-3 py-1 mb-3 font-display text-xl md:text-2xl">
                {item.title}
              </h3>

              {/* Subtitle */}
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-proxima-black/60 mb-4">
                {item.subtitle}
              </p>

              {/* Description */}
              <p className="text-proxima-black/70 font-sans text-sm md:text-base mb-6 leading-relaxed">
                {item.desc}
              </p>

              {/* Learn more link with + and red gradient underline */}
              <Link
                href={item.link}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-proxima-black/80 hover:text-proxima-black transition-colors group"
              >
                <span className="relative">
                  Learn more
                  {/* Red gradient underline */}
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] proxima-gradient" />
                </span>
                <span className="text-proxima-red">+</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
