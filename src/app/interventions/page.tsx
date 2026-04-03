"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const papers = [
  {
    category: "Inuspheresis",
    items: [
      { title: "Precision Medicine Approach for Cardiometabolic Risk Factors in Therapeutic Apheresis", journal: "Thieme - Hormone & Metabolic Research", url: "https://www.thieme-connect.com/products/ejournals/abstract/10.1055/a-2137-4425" },
      { title: "Clinical improvement of Long-COVID is associated with reduction in autoantibodies, lipids, and inflammation following therapeutic apheresis", journal: "Nature - Molecular Psychiatry", url: "https://www.nature.com/articles/s41380-023-02084-1" },
      { title: "Changes in Water Properties in Human Tissue after Double Filtration Plasmapheresis — A Case Study", journal: "MDPI - Molecules", url: "https://www.mdpi.com/1420-3049/28/6/2652" },
      { title: "Lipid Profiles in Lyme Borreliosis: A Potential Role for Apheresis?", journal: "Thieme - Hormone & Metabolic Research", url: "https://www.thieme-connect.com/products/ejournals/abstract/10.1055/a-2137-4437" },
      { title: "Chronic post-COVID-19 syndrome and chronic fatigue syndrome: Is there a role for extracorporeal apheresis?", journal: "Nature - Molecular Psychiatry", url: "https://www.nature.com/articles/s41380-022-01794-6" },
      { title: "Particles in the Eluate from Double Filtration Plasmapheresis: A Case Study Using Field Emission Scanning Electron Microscopy/Energy-Dispersive X-ray Spectroscopy (FE-SEM/EDX)", journal: "MDPI - Compounds", url: "https://www.mdpi.com/2673-6918/3/1/10" },
      { title: "Extracorporeal apheresis therapy for Alzheimer disease — targeting lipids, stress, and inflammation", journal: "Nature - Molecular Psychiatry", url: "https://www.nature.com/articles/s41380-024-02645-6" },
      { title: "Is There a Role for Environmental and Metabolic Factors Predisposing to Severe COVID-19?", journal: "Thieme - Hormone & Metabolic Research", url: "https://www.thieme-connect.com/products/ejournals/abstract/10.1055/a-1342-7149" },
      { title: "A multimodal approach for treating post-acute infectious syndrome", journal: "Genomic Press - Brain Medicine", url: "https://brainmedicine.org/index.php/bm/article/view/15" },
      { title: "Double Filtration Plasmapheresis for Environmental Toxin Removal: A Case Series of Patients With Hyperlipoproteinemia(a)", journal: "Wiley - Journal of Clinical Apheresis", url: "https://onlinelibrary.wiley.com/doi/10.1002/jca.22082" },
      { title: "Therapeutic apheresis: A promising method to remove microplastics?", journal: "Genomic Press - Brain Medicine", url: "https://brainmedicine.org/index.php/bm/article/view/25" },
      { title: "Single-Center Study of Therapeutic Apheresis in 24 Male Patients from the MENA Region", journal: "Thieme - Hormone & Metabolic Research", url: "https://www.thieme-connect.com/products/ejournals/abstract/10.1055/a-2294-6671" },
      { title: "Plasma Separation Efficiency in Double Filtration Plasmapheresis: A Retrospective Study of Patients With Hyperlipidemia", journal: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/38711187/" },
      { title: "Modulating Systemic Immune-Inflammatory Indices via Double Filtration Plasmapheresis: Implications for Aging and Low-Grade Inflammation", journal: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/39004612/" },
      { title: "Post COVID and Apheresis - Where are we Standing?", journal: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/36599349/" },
      { title: "Metabolic and Non-Metabolic Peripheral Neuropathy: Is there a Place for Therapeutic Apheresis?", journal: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/36599350/" },
    ]
  },
  {
    category: "Inuspheresis +",
    items: [
      { title: "Neutrophil Extracellular Traps (NETs) as a Potential Target for Anti-Aging: Role of Therapeutic Apheresis", journal: "Thieme - Hormone & Metabolic Research", url: "https://www.thieme-connect.com/products/ejournals/abstract/10.1055/a-2294-6684" },
    ]
  },
  {
    category: "Inuspheresis (Animals)",
    items: [
      { title: "Selective Removal of Plasma Proteins by Double-Filtration Plasmapheresis in Canine Blood: An Ex Vivo Study and Retrospective Report of In Vivo Clinical Treatments in Three Dogs", journal: "PMC", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10974461/" },
    ]
  }
];

export default function InterventionsPage() {
  const [papersOpen, setPapersOpen] = useState(false);

  return (
    <div className="min-h-screen bg-primary text-primary">
      {/* Full Screen Hero */}
      <section className="relative min-h-screen flex items-end pb-12 lg:pb-24 pt-20 md:pt-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/hero-medical-intervention.png"
            alt="Intervention"
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
            
            {/* Headline block */}
            <div className="relative inline-block">
              {/* Top-right marker */}
              <div className="absolute -top-10 -right-8 text-proxima-cream text-2xl font-mono">+</div>
              <div className="flex flex-col items-start">
                <span className="inline-block bg-proxima-cream text-proxima-black px-3 py-1.5 md:px-4 md:py-2 text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-normal font-nb-international leading-tight">
                  Inuspheresis
                </span>
              </div>
              {/* Bottom-right marker */}
              <div className="absolute -bottom-10 -right-8 text-proxima-cream text-2xl font-mono">+</div>
            </div>
            
            {/* Bottom-left corner marker */}
            <div className="absolute -bottom-10 left-0 text-proxima-cream text-2xl font-mono">+</div>
          </motion.div>
        </div>

        {/* Right Column - Body text */}
        <div className="hidden lg:block absolute bottom-16 right-20 z-10 text-left max-w-xs">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-proxima-cream text-base font-nb-international font-normal leading-relaxed">
              Advanced blood filtration to remove toxins from your body and support natural recovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Inuspheresis Description */}
      <section className="py-24 bg-proxima-cream">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-proxima-black/80 font-nb-international text-base md:text-lg leading-relaxed">
              Inuspheresis is an advanced protocol designed to remove toxins from the body and treat chronic illness. The technology was developed in Europe and has been used to help tens of thousands of people. Proxima Health is exclusively bringing Inuspheresis to the United States.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Practitioner Partnerships */}
      <section className="py-24 bg-proxima-cream">
        <div className="section-container">
          {/* Top row of + signs */}
          <div className="grid grid-cols-3 mb-8">
            <span className="text-proxima-black text-2xl font-mono">+</span>
            <span className="text-proxima-black text-2xl font-mono">+</span>
            <span className="text-proxima-black text-2xl font-mono">+</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="flex flex-col items-start -space-y-0.5">
                <span className="inline-block bg-proxima-black text-proxima-cream px-2 py-0.5 md:px-3 text-lg md:text-2xl lg:text-3xl font-nb-international leading-none">
                  Practitioner
                </span>
                <span className="inline-block bg-proxima-black text-proxima-cream px-2 py-0.5 md:px-3 text-lg md:text-2xl lg:text-3xl font-nb-international leading-none">
                  Partnerships
                </span>
              </div>
            </motion.div>

            {/* Supporting copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <p className="text-proxima-black/80 font-nb-international text-sm md:text-base leading-relaxed">
                Interested in bringing Inuspheresis to your practice? Contact us to learn more and join our waitlist.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <Link
                href="/practitioners"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-proxima-black hover:text-proxima-black transition-colors"
              >
                <span className="relative">
                  Practitioner Partnerships
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
            <span className="text-proxima-black text-2xl font-mono">+</span>
          </div>
        </div>
      </section>

      {/* Papers Section */}
      <section className="py-16 md:py-24 bg-proxima-cream">
        <div className="section-container">
          <button
            onClick={() => setPapersOpen(!papersOpen)}
            className="flex items-center gap-3 w-full text-left group"
          >
            <span className="inline-block bg-proxima-black text-proxima-cream px-3 py-1 text-lg md:text-xl font-nb-international leading-none">
              Papers supporting effectiveness of Inuspheresis
            </span>
            <span className={`text-proxima-black text-2xl font-mono transition-transform duration-300 ${papersOpen ? "rotate-45" : ""}`}>
              +
            </span>
          </button>

          {papersOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-8 space-y-8"
            >
              {papers.map((group, i) => (
                <div key={i}>
                  <p className="font-mono text-xs uppercase tracking-wider text-proxima-black/50 mb-4">
                    {group.category}
                  </p>
                  <ul className="space-y-3">
                    {group.items.map((paper, j) => (
                      <li key={j}>
                        <a
                          href={paper.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2"
                        >
                          <span className="font-nb-international text-sm text-proxima-black group-hover/link:text-proxima-red transition-colors">
                            {paper.title}
                          </span>
                          <span className="font-mono text-[10px] text-proxima-black/40 uppercase tracking-wider shrink-0">
                            | {paper.journal}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
