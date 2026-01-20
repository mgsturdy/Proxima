"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
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
    <div className="min-h-screen pt-24 bg-primary text-primary">
      {/* Header */}
      <header className="py-16 border-b border-border-primary relative">
        <div className="absolute top-0 left-0 right-0 h-1 proxima-gradient" />
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div className="w-16 h-1 proxima-gradient mb-6" />
              <p className="section-label mb-4">Product</p>
              <h1 className="mb-6">Proxima <span className="text-gradient">Baseline</span>™</h1>
              <p className="text-xl text-secondary max-w-xl leading-relaxed">
                The first comprehensive at-home diagnostic tool designed to 
                quantify environmental toxin load with clinical-grade precision.
              </p>
            </div>
            <div className="lg:col-span-5 flex items-end">
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-proxima-red" />
                  <span className="font-mono text-secondary">Mass Spectrometry</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-proxima-red" />
                  <span className="font-mono text-secondary">CLIA Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-proxima-red" />
                  <span className="font-mono text-secondary">150+ Biomarkers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Product Section */}
      <section className="py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Visual */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-inverse"
            >
              <Image 
                src="/assets/freepik__isola-a-maquina-para-criar-uma-foto-de-produto-man__41342.png"
                alt="Proxima Baseline Kit"
                fill
                className="object-contain p-16 opacity-80"
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
              <h2 className="mb-6">Complete Toxin Panel</h2>
              <div className="prose-editorial text-secondary mb-8">
                <p>
                  A simple finger-prick collection at home. Ship to our 
                  mass-spectrometry facility. Receive your comprehensive 
                  40-page clinical report with quantified measurements and 
                  specific mitigation protocols.
                </p>
              </div>

              {/* Pricing */}
              <div className="bg-secondary border border-border-primary p-8 mb-8">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-sans text-5xl font-semibold">$349</span>
                  <span className="font-mono text-tertiary line-through">$499</span>
                  <span className="font-mono text-xs text-proxima-red uppercase">30% off pre-order</span>
                </div>
                <p className="font-mono text-xs text-tertiary mb-6">
                  Pre-order pricing. Expected shipping Q3 2026.
                </p>
                <Link href="/waitlist" className="btn-gradient w-full flex items-center justify-center gap-2">
                  Reserve Your Kit <ArrowRight size={18} />
                </Link>
              </div>

              <div className="flex gap-8 text-sm">
                <div>
                  <p className="font-mono text-tertiary text-xs mb-1">Shipping</p>
                  <p className="font-sans font-medium">Free (US)</p>
                </div>
                <div>
                  <p className="font-mono text-tertiary text-xs mb-1">Results</p>
                  <p className="font-sans font-medium">14 business days</p>
                </div>
                <div>
                  <p className="font-mono text-tertiary text-xs mb-1">Collection</p>
                  <p className="font-sans font-medium">5 drops blood</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Measure */}
      <section className="py-24 bg-secondary">
        <div className="section-container">
          <div className="mb-16">
            <p className="section-label mb-4">Methodology</p>
            <h2>What We Measure</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {panels.map((panel, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-border-primary p-6 bg-primary"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-sans font-medium">{panel.name}</h4>
                  <span className="font-mono text-xs text-tertiary">{panel.count} markers</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {panel.markers.slice(0, 6).map((marker, j) => (
                    <span key={j} className="font-mono text-xs text-secondary bg-tertiary/10 px-2 py-1">
                      {marker}
                    </span>
                  ))}
                  {panel.markers.length > 6 && (
                    <span className="font-mono text-xs text-tertiary px-2 py-1">
                      +{panel.markers.length - 6} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-primary">
        <div className="section-container">
          <div className="mb-16 text-center">
            <p className="section-label mb-4">Process</p>
            <h2>How It Works</h2>
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
                <span className="font-mono text-6xl text-primary/10">{step.num}</span>
                <h3 className="mt-4 mb-4">{step.title}</h3>
                <p className="text-secondary">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Validity */}
      <section className="py-24 bg-inverse text-inverse">
        <div className="section-narrow">
          <div className="text-center mb-16">
            <Image 
              src="/assets/icon_heartbeat-monitor_OffWhite.svg"
              alt="Clinical"
              width={48}
              height={48}
              className="mx-auto mb-8 opacity-40"
            />
            <h2 className="text-inverse mb-6">Clinical-Grade Precision</h2>
            <p className="text-xl text-inverse/60">
              Our diagnostics are processed in CLIA-certified laboratories using 
              the same mass spectrometry techniques employed by research institutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "99.2%", label: "Accuracy Rate" },
              { stat: "150+", label: "Biomarkers" },
              { stat: "LOD", label: "Industry-Leading" },
              { stat: "ISO 15189", label: "Certified" },
            ].map((item, i) => (
              <div key={i}>
                <span className="font-sans text-3xl font-semibold text-inverse">{item.stat}</span>
                <p className="font-mono text-xs text-inverse/40 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
