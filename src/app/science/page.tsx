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
    id: "metals",
    number: "01",
    title: "Heavy Metals",
    subtitle: "Bioaccumulation & Chronic Toxicity",
    abstract: "Toxic elements that accumulate in blood and tissues and disrupt cellular function. Exposure to certain heavy metals can occur through water, food, air, or occupational environments. Once in the body, these elements may circulate in the bloodstream and deposit in tissues.",
    sections: [
      {
        heading: "Mechanisms of Toxicity",
        content: "Unlike many compounds, metals do not readily break down. Over time, accumulation may interfere with enzyme function, increase oxidative stress, impair mitochondrial energy production, and alter immune signaling."
      },
      {
        heading: "Lead",
        content: "Lead exposure has been associated with neurologic dysfunction, cardiovascular strain, kidney impairment and developmental effects in children. Even low levels may contribute to long-term systemic burden."
      },
      {
        heading: "Arsenic",
        content: "Arsenic is often encountered through contaminated water or certain foods and has been linked to vascular disease, metabolic dysfunction, immune imbalance and increased cancer risk with chronic exposure."
      },
      {
        heading: "Clinical Significance",
        content: "When metal burden persists, it can create cumulative stress across organ systems. For appropriate patients, identifying and reducing that burden may be an important step toward restoring physiologic balance."
      }
    ],
    keyData: [
      { metric: "400%", context: "increase in blood lead levels since industrialization" },
      { metric: "0.5 MG/DL", context: "level at which neurodevelopmental effects are measurable" }
    ],
    citations: ["Lanphear BP, et al. Lancet Public Health. 2018;3(4):e177-e184", "ATSDR Toxicological Profile for Lead. 2020"]
  },
  {
    id: "agricultural",
    number: "02",
    title: "Agricultural Chemicals",
    subtitle: "Pesticides & Herbicides",
    abstract: "Chemicals used in food production that can affect metabolic and neurologic pathways. Modern agriculture relies on chemical agents to protect crops and increase yield. While regulatory standards aim to limit exposure, trace amounts of certain compounds can enter the food and water supply. Some of these chemicals are biologically active. When present in the body, they may interact with metabolic enzymes, hormone signaling pathways and neurologic processes. Depending on the compound, residues can persist in tissues over time.",
    sections: [
      {
        heading: "Glyphosate",
        content: "Glyphosate is one of the most widely used herbicides in the world. While much of it is eliminated from the body relatively quickly, repeated exposure may contribute to cumulative burden. Research has explored how glyphosate may influence gut microbiome balance, increase oxidative stress, and interfere with certain cellular pathways involved in metabolism and immune regulation. Disruption in these systems has been associated with chronic inflammation, metabolic dysfunction, and broader long-term health concerns."
      },
      {
        heading: "Legacy Insecticides (p,p′-DDE)",
        content: "p,p′-DDE is a breakdown product of DDT, a pesticide that was banned decades ago but still lingers in soil, water, and the food supply because it breaks down very slowly. This compound is stored in body fat, which means it can remain in the body for years after exposure. Over time, studies have linked higher levels to disruptions in hormone balance and increased risk of certain long-term health conditions."
      }
    ],
    keyData: [
      { metric: "250M+", context: "pounds of glyphosate used annually in the U.S." }
    ],
    citations: ["USDA Pesticide Data Program Annual Summary", "IARC Monographs on Glyphosate"]
  },
  {
    id: "vocs",
    number: "03",
    title: "Volatile & Industrial Chemicals",
    subtitle: "Industrial & Airborne Compounds",
    abstract: "Airborne and solvent-based chemicals commonly found in indoor and occupational environments. Many everyday materials, including paints, cleaning products, fuels, adhesives and building materials release airborne chemicals. These compounds can be inhaled in small amounts over time, particularly in enclosed or poorly ventilated spaces. Some of these chemicals are rapidly processed by the body. Others, especially with repeated exposure, may contribute to cumulative strain on the nervous system, liver, or blood-forming systems.",
    sections: [
      {
        heading: "Toluene",
        content: "Toluene is a solvent found in products such as paint thinners, adhesives and gasoline. Short-term exposure at high levels can affect the nervous system. With ongoing exposure, research has explored potential impacts on cognitive function, liver health, and cellular stress pathways."
      },
      {
        heading: "Benzene",
        content: "Benzene is a widely studied industrial chemical present in fuels, tobacco smoke and some manufacturing environments. It is known to affect the bone marrow, where blood cells are produced. Chronic exposure has been associated with increased risk of certain blood disorders and cancers."
      }
    ],
    keyData: [
      { metric: "Indoor", context: "air often 2-5x more polluted than outdoor air" }
    ],
    citations: ["EPA Indoor Air Quality Guidelines", "OSHA Occupational Exposure Standards"]
  },
  {
    id: "pops",
    number: "04",
    title: "Persistent Pollutants",
    subtitle: "PFAS, PCBs & Flame Retardants",
    abstract: "Long-lasting synthetic chemicals that can accumulate in the body over time. Some industrial and consumer chemicals are designed to resist heat, water and degradation. That durability makes them useful in manufacturing, but it also means they break down slowly in the environment and in the human body. Because many of these compounds are fat-soluble, they can accumulate in tissues and remain present for years. Over time, ongoing exposure may contribute to immune disruption and increased inflammatory stress.",
    sections: [
      {
        heading: "PFAS / PFOS",
        content: "PFAS are a large group of chemicals used in non-stick cookware, stain-resistant fabrics, firefighting foams and food packaging. PFOS is one of the most studied compounds in this class. Research has linked long-term exposure to changes in immune response, cholesterol levels, thyroid function, and increased risk of certain chronic diseases."
      },
      {
        heading: "PCBs (PCB-153)",
        content: "Polychlorinated biphenyls (PCBs) were widely used in electrical equipment and industrial materials before being banned in many countries. PCB-153 is a commonly detected variant. Due to their persistence, PCBs remain present in soil, water, and food chains. Chronic exposure has been associated with metabolic dysfunction, endocrine disruption, and increased cancer risk."
      },
      {
        heading: "Flame Retardants (PBDE-47)",
        content: "PBDEs are flame-retardant chemicals used in furniture, electronics, and textiles. PBDE-47 is one of the most frequently detected forms in human tissue. Studies have explored potential links to hormone disruption, neurodevelopmental effects, and thyroid imbalance."
      }
    ],
    keyData: [
      { metric: "98%", context: "of Americans with detectable PFAS in blood" },
      { metric: "12,000+", context: "distinct PFAS compounds identified" }
    ],
    citations: ["Fenton SE, et al. Environmental Toxicology and Chemistry. 2021", "EPA PFAS Strategic Roadmap. 2021"]
  },
  {
    id: "edcs",
    number: "05",
    title: "Endocrine Disruptors",
    subtitle: "Hormone Signaling Interference",
    abstract: "Chemicals that can interfere with the body's hormone signaling, even at low levels of exposure. Hormones are the body's internal messengers. They regulate metabolism, reproduction, mood, growth and immune balance. Certain synthetic compounds are structurally similar to natural hormones. When present in the body, they may mimic, block, or alter normal signaling patterns. Over time, this interference can contribute to metabolic imbalance, reproductive changes, and chronic inflammatory stress.",
    sections: [
      {
        heading: "Bisphenol A (BPA)",
        content: "Commonly found in plastics, food containers and can linings, BPA has been studied for its ability to act like estrogen in the body. Higher cumulative exposure has been associated with shifts in metabolic health, cardiovascular markers and reproductive function."
      },
      {
        heading: "Phthalates (MEHP)",
        content: "Phthalates are used to soften plastics and stabilize fragrances in personal care products. MEHP is a marker of phthalate exposure in the body. Research suggests links between sustained exposure and altered hormone levels, fertility concerns and metabolic disruption."
      },
      {
        heading: "Parabens (Methylparaben)",
        content: "Parabens are preservatives used in cosmetics and pharmaceuticals. Methylparaben is among the most commonly detected forms in human tissue. Studies have explored potential effects on estrogen signaling and long-term endocrine balance."
      }
    ],
    keyData: [
      { metric: "93%", context: "of Americans testing positive for BPA" },
      { metric: "10⁻¹² M", context: "concentration at which some EDCs produce effects" }
    ],
    citations: ["Vandenberg LN, et al. Endocrine Reviews. 2012;33(3):378-455", "Gore AC, et al. Endocrine Reviews. 2015"]
  },
  {
    id: "biologics",
    number: "06",
    title: "Biologic Toxins",
    subtitle: "Mycotoxins & Natural Compounds",
    abstract: "Naturally occurring compounds produced by certain organisms that can enter the food chain. Not all biologic burden comes from synthetic chemicals. Some toxins are produced naturally by molds and fungi, particularly in conditions of moisture or improper storage. These compounds are biologically active. Depending on dose and duration, they may influence immune regulation, oxidative stress pathways and organ function.",
    sections: [
      {
        heading: "Mycotoxins: Ochratoxin A & Aflatoxin M1",
        content: "Mycotoxins are toxic substances produced by specific species of mold. Ochratoxin A has been studied for its potential effects on kidney health and immune signaling. Aflatoxin M1, a metabolite that can appear in dairy products when livestock consume contaminated feed, has been associated with liver stress and long-term cancer risk at sustained levels of exposure. Because these toxins can persist in the bloodstream, even low-level exposure over time may contribute to inflammatory strain. For some patients, understanding biologic toxin burden is part of restoring clearer immune balance and physiologic stability."
      }
    ],
    keyData: [
      { metric: "25%", context: "of global crops affected by mycotoxin contamination" }
    ],
    citations: ["WHO Food Safety Guidelines on Mycotoxins", "IARC Monographs on Aflatoxins"]
  },
  {
    id: "microplastics",
    number: "07",
    title: "Microplastics",
    subtitle: "Polymer Particles in Circulation",
    abstract: "Microscopic plastic particles that can circulate in the bloodstream and tissues. As larger plastic materials break down, they form particles small enough to enter air, water and food. In recent years, microplastics have been detected in human blood and other tissues, reflecting the scale of environmental exposure.",
    sections: [
      {
        heading: "Polyethylene Fragments",
        content: "Polyethylene is one of the most widely produced plastics worldwide. As products degrade, microscopic fragments can form and enter the environment. These particles have been identified in human biological samples, raising questions about cumulative exposure over time."
      },
      {
        heading: "Health Implications",
        content: "Because of their size, some particles may move beyond the digestive tract and into circulation. Early research suggests they may contribute to inflammatory signaling or act as carriers for other environmental chemicals. Scientific understanding is still evolving, particularly regarding long-term health implications. While definitive conclusions are still being studied, assessing microplastic presence may help provide a clearer picture of total environmental burden and its potential role in chronic inflammatory stress."
      }
    ],
    keyData: [
      { metric: "5g/week", context: "average adult plastic ingestion" },
      { metric: "80%", context: "of blood samples containing detectable microplastics" }
    ],
    citations: ["Leslie HA, et al. Environment International. 2022;163:107199", "Schwabl P, et al. Ann Intern Med. 2019"]
  },
  {
    id: "persistence",
    number: "08",
    title: "Biologic Persistence",
    subtitle: "Pathogens & Immune Activation",
    abstract: "Pathogens or pathogen-derived materials that may remain in the body and contribute to prolonged immune activation. In some individuals, the effects of an infection may extend beyond the initial illness. Even after acute symptoms improve, traces of the organism, or the immune response it triggered, can continue to influence the body. When immune activation remains elevated instead of returning to baseline, it may contribute to ongoing inflammation and physiologic strain.",
    sections: [
      {
        heading: "Borrelia burgdorferi (Lyme)",
        content: "Borrelia burgdorferi is the bacterium associated with Lyme disease. While many patients recover fully with appropriate treatment, some experience ongoing symptoms that may involve persistent immune activation or inflammatory signaling."
      },
      {
        heading: "Spike Protein Persistence",
        content: "Following viral exposure or vaccination, the body generates viral proteins as part of its immune response. In certain contexts, fragments of these proteins may remain detectable for a period of time. Ongoing research is examining how long such materials persist and whether they play a role in prolonged immune activation in select individuals."
      },
      {
        heading: "Chronic Viral Reactivation (EBV, CMV)",
        content: "Some viruses, including Epstein–Barr virus (EBV) and cytomegalovirus (CMV), remain dormant in the body after initial infection. Under conditions of stress or immune imbalance, they may reactivate. Persistent or repeated reactivation has been associated with chronic fatigue, immune dysregulation and inflammatory strain in some patients."
      }
    ],
    keyData: [
      { metric: "476K", context: "new Lyme disease cases annually in the U.S." }
    ],
    citations: ["CDC Lyme Disease Statistics", "NIH Research on Post-Acute Infection Syndromes"]
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
            The body is built to regulate and repair itself.<br />
            However, when environmental toxins accumulate<br />
            in the bloodstream, they can place sustained<br />
            demand on the immune system. Over time, that<br />
            can drive persistent inflammation, leading to<br />
            chronic diseases in the future. Understanding what<br />
            circulates in the blood is the first step in identifying<br />
            sources of inflammatory strain and reducing<br />
            long-term disease risk.
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
