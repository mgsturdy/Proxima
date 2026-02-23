"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const panels = [
  { name: "Heavy Metals", markers: ["Lead", "Mercury"] },
  { name: "Agricultural Chemicals", markers: ["Glyphosate", "p,p'-DDE"] },
  { name: "Solvents", markers: ["Benzene"] },
  { name: "Persistent Organic Pollutants", markers: ["PFAS", "PFOA", "PCB-126", "PBDE-47"] },
  { name: "Industrial Chemicals", markers: ["Phenol (BPA)", "Phthalates (MEHP)", "Parabens (Methylparaben)"] },
  { name: "Biological Toxins", markers: ["Mycotoxins (Ochratoxin A)", "Spike Proteins"] },
];

const addOns = [
  { name: "Microplastics", markers: ["Polyethylene"] },
  { name: "Bacterial Pathogens", markers: ["Lyme Disease"] },
];

export default function DiagnosticsPage() {
  return (
    <div className="min-h-screen bg-primary text-primary">
      {/* Full Screen Hero */}
      <section className="relative min-h-screen flex items-end pb-16 lg:pb-24 pt-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/freepik__melhora-a-luz-da-img1-para-ficar-com-um-estilo-mai__36854.png"
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
                <span className="inline-block bg-proxima-cream text-proxima-black px-4 py-2 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal font-nb-international leading-tight">
                  Proxima Health
                </span>
                <span className="inline-block bg-proxima-cream text-proxima-black px-4 py-2 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal font-nb-international leading-tight">
                  Baseline™
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 mt-12 px-6 lg:absolute lg:bottom-16 lg:right-20 lg:mt-0 lg:px-0 text-left"
        >
          {/* Body text */}
          <p className="text-proxima-cream text-sm md:text-base font-nb-international font-normal leading-relaxed">
            A clinically validated at-home test designed<br />
            to measure environmental toxin load with<br />
            precision. Built on proven science, so you<br />
            can understand what&apos;s in your blood and<br />
            move forward informed.
          </p>
        </motion.div>
      </section>

      {/* Product Section */}
      <section className="py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
                className="object-contain p-16"
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
                Every reset begins with the truth
              </h2>
              <div className="text-secondary mb-6 font-sans text-lg leading-relaxed">
                <p>
                  Proxima Health Baseline™ provides an honest assessment of the 
                  environmental toxins currently in your bloodstream. By quantifying 
                  your exposure to critical toxin markers, we establish the scientific 
                  foundation required to begin your journey toward recovery and longevity.
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

              {/* Pricing */}
              <div className="bg-secondary border border-border-primary p-8 mb-8">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-display text-5xl font-bold">$349</span>
                  <span className="font-mono text-tertiary line-through">$499</span>
                  <span className="font-mono text-xs text-proxima-red uppercase tracking-wider">30% off pre-order</span>
                </div>
                <p className="font-mono text-xs uppercase tracking-wider text-tertiary mb-6">
                  Pre-order pricing. Expected shipping Q3 2026.
                </p>
                <Link href="/waitlist" className="btn-gradient w-full flex items-center justify-center gap-2">
                  Reserve Your Kit <ArrowRight size={18} />
                </Link>
              </div>

              <div className="flex gap-8 text-sm">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-tertiary mb-1">Shipping</p>
                  <p className="font-sans font-medium">Free (US)</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-tertiary mb-1">Results</p>
                  <p className="font-sans font-medium">14 business days</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-tertiary mb-1">Collection</p>
                  <p className="font-sans font-medium">5 drops blood</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Measure */}
      <section className="py-24 bg-proxima-cream">
        <div className="section-container">
          {/* Header */}
          <div className="mb-12">
            <span className="inline-block bg-proxima-black text-proxima-cream px-4 py-2 text-2xl md:text-3xl lg:text-[42px] font-nb-international leading-none">
              What we Measure
            </span>
          </div>

          {/* Grid with + markers as corners */}
          <div className="relative">
            {/* Row 1 of + signs */}
            <div className="grid grid-cols-3 mb-6">
              <span className="text-proxima-black text-xl font-mono">+</span>
              <span className="text-proxima-black text-xl font-mono">+</span>
              <span className="text-proxima-black text-xl font-mono">+</span>
            </div>

            {/* Row 1 of panels */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
              {panels.slice(0, 3).map((panel, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="py-4"
                >
                  <h4 className="font-nb-international text-lg text-proxima-black mb-3">{panel.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {panel.markers.map((marker, j) => (
                      <span key={j} className="font-mono text-xs text-proxima-black/70 bg-proxima-black/5 px-2 py-1">
                        {marker}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 2 of + signs */}
            <div className="grid grid-cols-3 mb-6">
              <span className="text-proxima-black text-xl font-mono">+</span>
              <span className="text-proxima-black text-xl font-mono">+</span>
              <span className="text-proxima-black text-xl font-mono">+</span>
            </div>

            {/* Row 2 of panels */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
              {panels.slice(3, 6).map((panel, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i + 3) * 0.05 }}
                  className="py-4"
                >
                  <h4 className="font-nb-international text-lg text-proxima-black mb-3">{panel.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {panel.markers.map((marker, j) => (
                      <span key={j} className="font-mono text-xs text-proxima-black/70 bg-proxima-black/5 px-2 py-1">
                        {marker}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 3 of + signs */}
            <div className="grid grid-cols-3 mb-6">
              <span className="text-proxima-black text-xl font-mono">+</span>
              <span className="text-proxima-black text-xl font-mono">+</span>
              <span className="text-proxima-black text-xl font-mono">+</span>
            </div>

            {/* Add-ons section */}
            <div className="mb-6">
              <p className="font-mono text-xs uppercase tracking-wider text-proxima-black/60 mb-4">Add-ons</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {addOns.map((panel, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="py-4"
                  >
                    <h4 className="font-nb-international text-lg text-proxima-black mb-3">{panel.name}</h4>
                    <div className="flex flex-wrap gap-2">
                      {panel.markers.map((marker, j) => (
                        <span key={j} className="font-mono text-xs text-proxima-black/70 bg-proxima-black/5 px-2 py-1">
                          {marker}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Row 4 of + signs */}
            <div className="grid grid-cols-3">
              <span className="text-proxima-black text-xl font-mono">+</span>
              <span className="text-proxima-black text-xl font-mono">+</span>
              <span className="text-proxima-black text-xl font-mono">+</span>
            </div>
          </div>
        </div>
      </section>

      {/* Results You Can Trust */}
      <section className="relative py-16 md:py-24 bg-proxima-cream">
        <div className="section-container">
          {/* Top row of + signs */}
          <div className="grid grid-cols-3 mb-8">
            <span className="text-proxima-black text-2xl font-mono">+</span>
            <span className="text-proxima-black text-2xl font-mono">+</span>
            <span></span>
          </div>

          {/* Main content - 2 column aligned with 02 and 03 grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Empty first column (aligns with 01) */}
            <div className="hidden md:block" />

            {/* Left block - Headline (aligns with 02 column) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-start -space-y-0.5">
                <span className="inline-block bg-proxima-black text-proxima-cream px-3 py-0.5 text-xl md:text-2xl lg:text-3xl font-nb-international leading-none">
                  Results You
                </span>
                <span className="inline-block bg-proxima-black text-proxima-cream px-3 py-0.5 text-xl md:text-2xl lg:text-3xl font-nb-international leading-none">
                  Can Trust
                </span>
              </div>
            </motion.div>

            {/* Right block - Supporting copy (aligns with 03 column) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <p className="text-proxima-black/80 font-nb-international text-sm md:text-base leading-relaxed mb-6">
                Our diagnostics are processed in<br />
                CLIA-certified laboratories using the same<br />
                mass spectrometry techniques employed<br />
                by research institutions.
              </p>

              {/* Learn more link with + and red gradient underline */}
              <Link
                href="/science"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-proxima-black hover:text-proxima-black transition-colors"
              >
                <span className="relative">
                  Learn more
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] proxima-gradient" />
                </span>
                <span className="text-proxima-red">+</span>
              </Link>
            </motion.div>
          </div>

          {/* Bottom row of + signs */}
          <div className="grid grid-cols-3 mt-8">
            <span className="text-proxima-black text-2xl font-mono">+</span>
            <span className="text-proxima-black text-2xl font-mono">+</span>
            <span></span>
          </div>
        </div>
      </section>
    </div>
  );
}
