"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const chapters = [
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
                <span className="inline-block bg-proxima-cream text-proxima-black px-4 py-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal font-nb-international leading-tight">
                  The science behind
                </span>
                <span className="inline-block bg-proxima-cream text-proxima-black px-4 py-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal font-nb-international leading-tight">
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
          className="relative z-10 mt-12 px-6 lg:absolute lg:bottom-16 lg:right-20 lg:mt-0 lg:px-0 text-left max-w-md"
        >
          {/* Body text */}
          <p className="text-proxima-cream text-sm md:text-base font-nb-international font-normal leading-relaxed">
            You deserve to understand exactly what is happening in your body and what the science says about it. We&apos;ve organized the latest research on toxins into a verifiable, accessible guide so you can make confident, informed decisions about your journey toward recovery and longevity.
          </p>
        </motion.div>
      </section>

      {/* Table of Contents */}
      <nav className="py-12 bg-secondary border-b border-border-primary">
        <div className="section-container">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-tertiary mb-6">Contents</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {chapters.map((chapter) => (
              <a 
                key={chapter.id}
                href={`#${chapter.id}`}
                className="toc-item group flex justify-between items-center p-4 border border-border-primary hover:border-proxima-red transition-colors"
              >
                <div>
                  <span className="font-mono text-tertiary text-sm">{chapter.number}</span>
                  <span className="ml-3 font-display font-bold group-hover:text-proxima-red transition-colors">{chapter.title}</span>
                </div>
                <ArrowUpRight size={14} className="text-tertiary group-hover:text-proxima-red transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Chapters */}
      <div className="py-16">
        {chapters.map((chapter, idx) => (
          <article 
            key={chapter.id} 
            id={chapter.id}
            className={`py-24 ${idx % 2 === 1 ? 'bg-secondary' : ''}`}
          >
            <div className="section-container">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16"
              >
                {/* Chapter Header */}
                <div className="lg:col-span-4">
                  <div className="sticky top-32">
                    <span className="font-display text-8xl md:text-9xl font-bold text-primary/10 leading-none">{chapter.number}</span>
                    <h2 className="mt-4 mb-2 font-display text-2xl md:text-3xl font-bold">
                      <span className="bg-proxima-black text-proxima-cream px-2 py-1">{chapter.title}</span>
                    </h2>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-tertiary">{chapter.subtitle}</p>
                    
                    {/* Key Data */}
                    <div className="mt-12 space-y-6">
                      {chapter.keyData.map((data, i) => (
                        <div key={i} className="border-l-2 border-proxima-red pl-4">
                          <span className="font-display text-3xl font-bold">{data.metric}</span>
                          <p className="text-sm text-secondary font-sans mt-1">{data.context}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-8">
                  {/* Abstract */}
                  <div className="mb-12 pb-12 border-b border-border-primary">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-tertiary mb-4">Abstract</p>
                    <p className="text-xl leading-relaxed text-secondary font-sans">{chapter.abstract}</p>
                  </div>

                  {/* Sections */}
                  <div className="space-y-12">
                    {chapter.sections.map((section, i) => (
                      <div key={i}>
                        <h3 className="font-display text-xl font-bold mb-4">{section.heading}</h3>
                        <p className="text-secondary font-sans">{section.content}</p>
                      </div>
                    ))}
                  </div>

                  {/* Citations */}
                  <div className="mt-12 pt-8 border-t border-border-primary">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-tertiary mb-4">References</p>
                    <ul className="space-y-2">
                      {chapter.citations.map((citation, i) => (
                        <li key={i} className="font-mono text-sm text-tertiary">{citation}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <section className="py-24 bg-inverse text-inverse">
        <div className="section-narrow text-center">
          <Image 
            src="/assets/icon_blood-circulation_OffWhite.svg"
            alt="Diagnostics"
            width={48}
            height={48}
            className="mx-auto mb-8 opacity-40"
          />
          <h2 className="mb-6 font-display text-3xl md:text-4xl font-bold text-proxima-cream">
            From Theory to Measurement
          </h2>
          <p className="text-xl text-inverse/60 mb-12 max-w-xl mx-auto font-sans">
            Understanding the science is step one. Quantifying your personal 
            exposure requires clinical-grade diagnostics.
          </p>
          <Link href="/diagnostics" className="btn-gradient inline-flex items-center gap-2">
            Explore Diagnostics
          </Link>
        </div>
      </section>
    </div>
  );
}
