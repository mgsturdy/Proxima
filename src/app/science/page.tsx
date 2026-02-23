"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Chapter {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  abstract: string;
  sections: { heading: string; content: string }[];
  keyData: { metric: string; context: string }[];
  citations: string[];
}

function ScienceWikiSection({ chapters }: { chapters: Chapter[] }) {
  const [activeTab, setActiveTab] = useState(0);
  const chapter = chapters[activeTab];

  return (
    <section className="bg-proxima-cream pt-16 md:pt-24 pb-16">
      <div className="section-container">
        {/* Duotang-style Tabs */}
        <div className="flex flex-wrap">
          {chapters.map((ch, idx) => (
            <button
              key={ch.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-tight border transition-colors ${
                activeTab === idx
                  ? "bg-proxima-black text-proxima-cream border-proxima-black"
                  : "bg-proxima-cream text-proxima-black border-proxima-black border-b-0"
              }`}
            >
              <span>{ch.number} {ch.title}</span>
              <span className="text-xs">+</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="border border-proxima-black bg-[rgba(255,157,0,0.1)] p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="lg:col-span-4">
              {/* Chapter Number */}
              <span className="block font-robit text-7xl md:text-8xl lg:text-[100px] leading-none tracking-tight text-proxima-black mb-4">
                {chapter.number}
              </span>

              {/* Chapter Title - stacked black pills */}
              <div className="flex flex-col items-start -space-y-0.5 mb-3">
                {chapter.title.split(" ").length > 1 ? (
                  chapter.title.split(" ").map((word, i) => (
                    <span key={i} className="inline-block bg-proxima-black text-proxima-cream px-3 py-0.5 text-2xl md:text-3xl lg:text-[42px] font-nb-international leading-none">
                      {word}
                    </span>
                  ))
                ) : (
                  <span className="inline-block bg-proxima-black text-proxima-cream px-3 py-0.5 text-2xl md:text-3xl lg:text-[42px] font-nb-international leading-none">
                    {chapter.title}
                  </span>
                )}
              </div>

              {/* Subtitle */}
              <p className="font-mono text-xs uppercase tracking-tight text-proxima-black mb-8">
                {chapter.subtitle}
              </p>

              {/* Key Data */}
              <div className="space-y-6">
                {chapter.keyData.map((data, i) => (
                  <div key={i}>
                    <span className="block font-robit text-3xl md:text-[42px] leading-none tracking-tight text-proxima-black">
                      {data.metric}
                    </span>
                    <p className="font-mono text-xs uppercase tracking-tight text-proxima-black mt-1">
                      {data.context}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-8 lg:border-l lg:border-proxima-black lg:pl-8">
              {/* Abstract */}
              <div className="mb-8">
                <p className="font-mono text-xs uppercase tracking-tight text-proxima-black mb-4">
                  Abstract
                </p>
                <p className="font-nb-international text-base md:text-lg leading-relaxed text-proxima-black">
                  {chapter.abstract}
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-6 mb-8">
                {chapter.sections.map((section, i) => (
                  <div key={i}>
                    <p className="font-mono text-xs uppercase tracking-tight text-proxima-black mb-2">
                      + {section.heading}
                    </p>
                    <p className="font-nb-international text-sm md:text-base leading-relaxed text-proxima-black">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* References */}
              <div>
                <p className="font-mono text-xs uppercase tracking-tight text-proxima-black mb-2">
                  References
                </p>
                <ul className="space-y-1">
                  {chapter.citations.map((citation, i) => (
                    <li key={i} className="font-mono text-xs tracking-tight text-proxima-black">
                      • {citation}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const chapters: Chapter[] = [
  {
    id: "heavy-metals",
    number: "01",
    title: "Heavy Metals",
    subtitle: "Bioaccumulation & Chronic Toxicity",
    abstract: "Heavy metal toxicity results from exposure to metals with no biological role in human physiology. Lead, mercury, cadmium, and arsenic are toxic even at low concentrations, accumulating in tissues over time.",
    sections: [
      {
        heading: "Mechanisms of Toxicity",
        content: "Heavy metals interfere with metabolic processes through three primary pathways: displacement of essential minerals from enzyme binding sites, generation of oxidative stress through reactive oxygen species (ROS), and direct disruption of protein function by binding to sulfur groups. These mechanisms operate simultaneously, creating compound effects that exceed the sum of individual exposures."
      },
      {
        heading: "Clinical Evidence",
        content: "Longitudinal studies from the CDC's NHANES program demonstrate that chronic low-level exposure is associated with neurodevelopmental deficits, cardiovascular disease progression, and renal dysfunction. Notably, modern diagnostic thresholds often fail to capture 'low-dose' chronic exposures by focusing on acute toxicity levels established decades ago."
      }
    ],
    keyData: [
      { metric: "400%", context: "increase in blood lead levels since industrialization" },
      { metric: "0.5µg/dL", context: "level at which neurodevelopmental effects are measurable" }
    ],
    citations: ["Lanphear BP, et al. Lancet Public Health. 2018;3(4):e177-e184", "ATSDR Toxicological Profile for Lead. 2020"]
  },
  {
    id: "microplastics",
    number: "02",
    title: "Microplastics",
    subtitle: "Polymer Particles in Human Biofluid",
    abstract: "Emerging research has confirmed the presence of microplastic particles in human blood, lungs, placenta, and breast milk. The long-term health implications remain under active investigation.",
    sections: [
      {
        heading: "Exposure Vectors",
        content: "Inhalation and ingestion constitute the primary exposure routes. Current estimates suggest the average adult ingests approximately 5 grams of plastic weekly—equivalent to the mass of a credit card—through contaminated food, water, and ambient air. Synthetic textiles, food packaging, and water supply infrastructure are leading sources."
      },
      {
        heading: "Cellular Interaction",
        content: "Once in circulation, microplastic particles interact with blood cell membranes and plasma proteins. Preliminary data indicates potential for chronic inflammatory response and endocrine disruption through plasticizer leaching. Particles smaller than 10µm can cross the blood-brain barrier; particles under 150µm can translocate across gut epithelium."
      }
    ],
    keyData: [
      { metric: "5g/week", context: "average adult plastic ingestion" },
      { metric: "80%", context: "of blood samples containing detectable microplastics" }
    ],
    citations: ["Leslie HA, et al. Environment International. 2022;163:107199", "Schwabl P, et al. Ann Intern Med. 2019;171(7):453-457"]
  },
  {
    id: "pfas",
    number: "03",
    title: "PFAS Compounds",
    subtitle: "The 'Forever Chemicals'",
    abstract: "Per- and polyfluoroalkyl substances (PFAS) are characterized by carbon-fluorine bonds—among the strongest in organic chemistry. These compounds do not degrade in the environment or human body.",
    sections: [
      {
        heading: "Environmental Persistence",
        content: "The carbon-fluorine bond resists biological, chemical, and thermal degradation. PFAS compounds introduced into water supplies, soil, or biological systems persist indefinitely. This has resulted in detectable PFAS levels in 98% of Americans tested, with measurable concentrations in drinking water serving over 110 million people."
      },
      {
        heading: "Health Associations",
        content: "Epidemiological studies have linked PFAS exposure to thyroid disease, immune suppression, reproductive abnormalities, and certain cancers (kidney, testicular). The EPA has progressively lowered 'safe' exposure thresholds as evidence accumulates, with the latest guidance recommending near-zero exposure for drinking water."
      }
    ],
    keyData: [
      { metric: "98%", context: "of Americans with detectable PFAS in blood" },
      { metric: "12,000+", context: "distinct PFAS compounds identified" }
    ],
    citations: ["Fenton SE, et al. Environmental Toxicology and Chemistry. 2021;40(1):24-42", "EPA PFAS Strategic Roadmap. 2021"]
  },
  {
    id: "edcs",
    number: "04",
    title: "Endocrine Disruptors",
    subtitle: "BPA, Phthalates & Hormonal Interference",
    abstract: "Endocrine-disrupting chemicals (EDCs) interfere with hormone synthesis, secretion, transport, binding, and elimination. Effects can manifest at concentrations far below those causing acute toxicity.",
    sections: [
      {
        heading: "Dose-Response Complexity",
        content: "Unlike classical toxicology where 'the dose makes the poison,' EDCs can exhibit non-monotonic dose-response curves—producing effects at very low doses that are not observed at higher doses. This fundamentally challenges traditional risk assessment frameworks and regulatory thresholds."
      },
      {
        heading: "Developmental Windows",
        content: "EDC exposure during critical developmental windows (fetal development, puberty) can produce permanent alterations in endocrine function. These effects may not manifest until years or decades after exposure, complicating epidemiological attribution."
      }
    ],
    keyData: [
      { metric: "93%", context: "of Americans testing positive for BPA" },
      { metric: "10⁻¹² M", context: "concentration at which some EDCs produce measurable effects" }
    ],
    citations: ["Vandenberg LN, et al. Endocrine Reviews. 2012;33(3):378-455", "Gore AC, et al. Endocrine Reviews. 2015;36(6):E1-E150"]
  }
];

export default function SciencePage() {
  return (
    <div className="min-h-screen bg-primary text-primary">
      {/* Full Screen Hero */}
      <section className="relative min-h-screen flex items-end pb-16 lg:pb-24 pt-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/9835757b-2794-42c4-b281-d166579ab765.png"
            alt="The Science"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* White vertical line for hero section - starts 15px above horizontal line to form + intersection */}
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
                  The science behind
                </span>
                <span className="inline-block bg-proxima-cream text-proxima-black px-4 py-2 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal font-nb-international leading-tight">
                  environmental toxins
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
            You deserve to understand exactly what<br />
            is happening in your body and what the<br />
            science says about it. We&apos;ve organized the<br />
            latest research on toxins into a verifiable,<br />
            accessible guide so you can make confident,<br />
            informed decisions about your journey<br />
            toward recovery and longevity.
          </p>
        </motion.div>
      </section>

      {/* Tabbed Wiki Section */}
      <ScienceWikiSection chapters={chapters} />

      {/* From Theory to Measurement */}
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
                  From Theory
                </span>
                <span className="inline-block bg-proxima-black text-proxima-cream px-3 py-0.5 text-xl md:text-2xl lg:text-3xl font-nb-international leading-none">
                  to Measurement
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
                Understanding the science is step one.<br />
                Quantifying your personal exposure<br />
                requires clinical-grade diagnostics.
              </p>

              {/* Learn more link with + and red gradient underline */}
              <Link
                href="/diagnostics"
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
