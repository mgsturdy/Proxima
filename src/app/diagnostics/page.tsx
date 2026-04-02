"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


export default function DiagnosticsPage() {
  return (
    <div className="min-h-screen bg-primary text-primary">
      {/* Full Screen Hero */}
      <section className="relative min-h-screen flex items-end pb-12 lg:pb-24 pt-20 md:pt-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/hero-diagnostics-lab.webp"
            alt="Diagnostics"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* White vertical line for hero section */}
        <div className="absolute top-[61px] right-10 w-px h-[calc(100%-61px)] bg-proxima-cream/60 hidden lg:block" />

        {/* Main Content */}
        <div className="relative z-10 w-full section-container">
          {/* Left Column - Main Headline with corner + markers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative pl-8"
          >
            {/* Top-left corner marker */}
            <div className="absolute -top-10 left-0 text-proxima-cream text-2xl font-mono">+</div>
            
            {/* Headline block - each line has its own fitted background */}
            <div className="relative inline-block">
              {/* Top-right marker */}
              <div className="absolute -top-10 -right-8 text-proxima-cream text-2xl font-mono">+</div>
              <div className="flex flex-col items-start">
                <span className="inline-block bg-proxima-cream text-proxima-black px-3 py-1.5 md:px-4 md:py-2 text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-normal font-nb-international leading-tight">
                  Proxima Health
                </span>
                <span className="inline-block bg-proxima-cream text-proxima-black px-3 py-1.5 md:px-4 md:py-2 text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-normal font-nb-international leading-tight">
                  Baseline
                </span>
              </div>
              {/* Bottom-right marker */}
              <div className="absolute -bottom-10 -right-8 text-proxima-cream text-2xl font-mono">+</div>
            </div>
            
            {/* Bottom-left corner marker */}
            <div className="absolute -bottom-10 left-0 text-proxima-cream text-2xl font-mono">+</div>
          </motion.div>
        </div>

        {/* Right Column - Body text - positioned 40px left of vertical line */}
        <div className="hidden lg:block absolute bottom-16 right-20 z-10 text-left max-w-xs">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-proxima-cream text-base font-nb-international font-normal leading-relaxed">
              Measure your environmental toxin load with precision so you can understand what&apos;s circulating in your blood and act with clarity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Product Visual */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <Image 
                src="/assets/diagnostic.png"
                alt="Proxima Baseline Kit"
                fill
                className="object-contain p-8 md:p-16"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 proxima-gradient" />
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="mb-6 font-display text-3xl md:text-4xl font-bold leading-tight">
                Better health starts with better answers
              </h2>
              <div className="text-secondary mb-6 font-sans text-lg leading-relaxed">
                <p>
                  Proxima Health Baseline provides a precise measurement of the environmental toxins currently in your bloodstream. By quantifying your exposure to critical toxin markers, we establish the scientific foundation required to begin your journey toward recovery and longevity.
                </p>
              </div>
              
              {/* What we test for */}
              <div className="mb-8">
                <p className="font-mono text-xs uppercase tracking-wider text-tertiary mb-3">What we test for:</p>
                <div className="flex flex-wrap gap-2">
                  {["Heavy metals", "PFAS", "Microplastics", "Pesticides", "BPA", "Endocrine disruptors", "Mold", "Solvents"].map((item, i) => (
                    <span key={i} className="font-mono text-xs text-proxima-black/70 bg-proxima-black/5 px-2 py-1">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-secondary font-sans text-sm md:text-base leading-relaxed mb-8">
                We are launching Proxima Health Baseline initially with select practitioners to uphold the highest standards of clinical oversight and data integrity. In time, individuals will be able to order testing directly through Proxima Health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/practitioners"
                  className="inline-flex items-center justify-center gap-2 bg-proxima-black text-proxima-cream px-6 py-3 font-mono text-xs uppercase tracking-wider hover:bg-proxima-black/90 transition-colors"
                >
                  Practitioners: Offer this at your clinic
                </Link>
                <Link
                  href="/waitlist"
                  className="inline-flex items-center justify-center gap-2 border border-proxima-black text-proxima-black px-6 py-3 font-mono text-xs uppercase tracking-wider hover:bg-proxima-black hover:text-proxima-cream transition-colors"
                >
                  Get notified at launch
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Measure */}
      <section className="py-24 bg-proxima-cream">
        <div className="section-container">
          <div className="mb-12">
            <span className="inline-block bg-proxima-black text-proxima-cream px-3 py-1.5 md:px-4 md:py-2 text-xl md:text-3xl lg:text-[42px] font-nb-international leading-none">
              What We Measure
            </span>
          </div>

          <div className="relative">
            <div className="grid grid-cols-3 mb-6">
              <span className="text-proxima-black text-xl font-mono">+</span>
              <span className="text-proxima-black text-xl font-mono">+</span>
              <span className="text-proxima-black text-xl font-mono">+</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="py-4">
                <h4 className="font-nb-international text-lg font-bold text-proxima-black mb-3">Heavy Metals</h4>
                <div className="flex flex-wrap gap-2">
                  {["Lead", "Arsenic"].map((m, j) => (
                    <span key={j} className="font-mono text-xs text-proxima-black/70 bg-proxima-black/5 px-2 py-1">{m}</span>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="py-4">
                <h4 className="font-nb-international text-lg font-bold text-proxima-black mb-3">Persistent Pollutants</h4>
                <div className="flex flex-wrap gap-2">
                  {["PFOS", "PCB-153", "PBDE-47"].map((m, j) => (
                    <span key={j} className="font-mono text-xs text-proxima-black/70 bg-proxima-black/5 px-2 py-1">{m}</span>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="py-4">
                <h4 className="font-nb-international text-lg font-bold text-proxima-black mb-3">Microplastics</h4>
                <div className="flex flex-wrap gap-2">
                  {["Polyethylene Fragments"].map((m, j) => (
                    <span key={j} className="font-mono text-xs text-proxima-black/70 bg-proxima-black/5 px-2 py-1">{m}</span>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-3 mb-6">
              <span className="text-proxima-black text-xl font-mono">+</span>
              <span className="text-proxima-black text-xl font-mono">+</span>
              <span className="text-proxima-black text-xl font-mono">+</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="py-4">
                <h4 className="font-nb-international text-lg font-bold text-proxima-black mb-3">Endocrine Disruptors</h4>
                <div className="flex flex-wrap gap-2">
                  {["Bisphenol A (BPA)", "MEHP", "Methylparaben"].map((m, j) => (
                    <span key={j} className="font-mono text-xs text-proxima-black/70 bg-proxima-black/5 px-2 py-1">{m}</span>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="py-4">
                <h4 className="font-nb-international text-lg font-bold text-proxima-black mb-3">Pesticides</h4>
                <div className="flex flex-wrap gap-2">
                  {["Glyphosate", "p,p′-DDE (DDT)"].map((m, j) => (
                    <span key={j} className="font-mono text-xs text-proxima-black/70 bg-proxima-black/5 px-2 py-1">{m}</span>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="py-4">
                <h4 className="font-nb-international text-lg font-bold text-proxima-black mb-3">Industrial Chemicals</h4>
                <div className="flex flex-wrap gap-2">
                  {["Toluene", "Benzene"].map((m, j) => (
                    <span key={j} className="font-mono text-xs text-proxima-black/70 bg-proxima-black/5 px-2 py-1">{m}</span>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-3 mb-6">
              <span className="text-proxima-black text-xl font-mono">+</span>
              <span className="text-proxima-black text-xl font-mono">+</span>
              <span className="text-proxima-black text-xl font-mono">+</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="py-4">
                <h4 className="font-nb-international text-lg font-bold text-proxima-black mb-3">Mold</h4>
                <div className="flex flex-wrap gap-2">
                  {["Ochratoxin A", "Aflatoxin M1"].map((m, j) => (
                    <span key={j} className="font-mono text-xs text-proxima-black/70 bg-proxima-black/5 px-2 py-1">{m}</span>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="py-4">
                <h4 className="font-nb-international text-lg font-bold text-proxima-black mb-3">Persistent Pathogens</h4>
                <div className="flex flex-wrap gap-2">
                  {["Borrelia burgdorferi (Lyme disease)", "Covid Spike Protein"].map((m, j) => (
                    <span key={j} className="font-mono text-xs text-proxima-black/70 bg-proxima-black/5 px-2 py-1">{m}</span>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-3">
              <span className="text-proxima-black text-xl font-mono">+</span>
              <span className="text-proxima-black text-xl font-mono">+</span>
              <span className="text-proxima-black text-xl font-mono">+</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
