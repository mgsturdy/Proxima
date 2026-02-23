"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const panels = [
  { name: "Heavy Metals", count: 8, markers: ["Lead (Pb)", "Mercury (Hg)", "Cadmium (Cd)", "Arsenic (As)", "Aluminum (Al)", "Thallium (Tl)", "Uranium (U)", "Nickel (Ni)"] },
  { name: "Microplastics", count: 12, markers: ["PET", "Polystyrene", "Polyethylene", "HDPE", "PVC", "PP", "PMMA", "Nylon"] },
  { name: "PFAS/PFOA", count: 24, markers: ["PFOS", "PFOA", "GenX", "PFNA", "PFHxS", "PFDA", "PFUnDA", "PFDoDA"] },
  { name: "Phthalates", count: 15, markers: ["DEHP", "DBP", "BBP", "DINP", "DIDP", "DEP", "DMP", "DnOP"] },
  { name: "BPA & Analogues", count: 8, markers: ["BPA", "BPS", "BPF", "BPAF", "BPB", "BPE", "BPP", "BPZ"] },
  { name: "Pesticides", count: 20, markers: ["Glyphosate", "Atrazine", "Chlorpyrifos", "DDT/DDE", "Permethrin", "Malathion"] },
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
              <div className="absolute top-6 left-6 bg-proxima-red px-3 py-1">
                <span className="font-mono text-xs text-proxima-cream uppercase tracking-wider">Early Access</span>
              </div>
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
              <div className="text-secondary mb-8 font-sans text-lg leading-relaxed">
                <p>
                  Proxima Health Baseline™ provides an honest assessment of the 
                  environmental toxins currently in your bloodstream. By quantifying 
                  your exposure to PFAS, heavy metals and further critical toxin markers, 
                  we establish the scientific foundation required to begin your journey 
                  toward recovery and longevity.
                </p>
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

          {/* Grid with + markers */}
          <div className="relative">
            {/* Row 1 of + signs */}
            <div className="grid grid-cols-3 mb-4">
              <span className="text-proxima-black text-xl font-mono">+</span>
              <span className="text-proxima-black text-xl font-mono">+</span>
              <span className="text-proxima-black text-xl font-mono">+</span>
            </div>

            {/* Row 1 of panels */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
              {panels.slice(0, 3).map((panel, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="relative aspect-[2/1] bg-proxima-black/5 border border-proxima-black overflow-hidden"
                >
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <h4 className="font-nb-international text-lg text-proxima-black mb-1">{panel.name}</h4>
                    <span className="font-mono text-xs uppercase tracking-tight text-proxima-black/60">{panel.count} markers</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 2 of + signs */}
            <div className="grid grid-cols-3 mb-4">
              <span className="text-proxima-black text-xl font-mono">+</span>
              <span className="text-proxima-black text-xl font-mono">+</span>
              <span className="text-proxima-black text-xl font-mono">+</span>
            </div>

            {/* Row 2 of panels */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
              {panels.slice(3, 6).map((panel, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i + 3) * 0.05 }}
                  className="relative aspect-[2/1] bg-proxima-black/5 border border-proxima-black overflow-hidden"
                >
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <h4 className="font-nb-international text-lg text-proxima-black mb-1">{panel.name}</h4>
                    <span className="font-mono text-xs uppercase tracking-tight text-proxima-black/60">{panel.count} markers</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 3 of + signs */}
            <div className="grid grid-cols-3">
              <span className="text-proxima-black text-xl font-mono">+</span>
              <span className="text-proxima-black text-xl font-mono">+</span>
              <span className="text-proxima-black text-xl font-mono">+</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-primary">
        <div className="section-container">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-tertiary mb-4">Process</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {[
              { 
                num: "01", 
                title: "Collect", 
                desc: "Simple finger-prick collection in the comfort of your home. Collection device included in kit." 
              },
              { 
                num: "02", 
                title: "Ship", 
                desc: "Pre-paid return envelope included. Sample reaches our lab within 48 hours via priority mail." 
              },
              { 
                num: "03", 
                title: "Results", 
                desc: "Comprehensive 40-page report with your Toxin Load Score, benchmarks, and action plan." 
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <span className="font-display text-6xl font-bold text-primary/10">{step.num}</span>
                <h3 className="mt-4 mb-4 font-display">{step.title}</h3>
                <p className="text-secondary font-sans">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Validity */}
      <section className="py-24 bg-inverse text-inverse">
        <div className="section-narrow">
          <div className="text-center">
            <Image 
              src="/assets/icon_heartbeat-monitor_OffWhite.svg"
              alt="Clinical"
              width={48}
              height={48}
              className="mx-auto mb-8 opacity-40"
            />
            <h2 className="mb-6 font-display text-3xl md:text-4xl font-bold text-proxima-cream">
              Results You Can Trust
            </h2>
            <p className="text-xl text-inverse/60 font-sans">
              Our diagnostics are processed in CLIA-certified laboratories using 
              the same mass spectrometry techniques employed by research institutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
