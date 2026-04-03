"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface Chapter {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  boldIntro?: string;
  bodyText?: string;
  subcategoryTitle?: string;
  abstract: string;
  sections: { heading: string; content: string }[];
  keyData: { metric: string; context: string }[];
  citations: string[];
}

const tabColors = [
  "#FF9E00", "#FFAD1E", "#FFBD3D", "#FFCC5B",
  "#FFDB7A", "#FFE598", "#FFEEB7", "#FFF3D6",
];

function ScienceWikiSection({ chapters }: { chapters: Chapter[] }) {
  const [activeTab, setActiveTab] = useState(0);
  const chapter = chapters[activeTab];

  return (
    <section className="bg-proxima-cream pt-16 md:pt-24 pb-16">
      <div className="section-container">
        {/* Duotang-style Tabs */}
        <div className="flex overflow-x-auto scrollbar-hide md:flex-wrap md:overflow-visible">
          {chapters.map((ch, idx) => (
            <button
              key={ch.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-3 md:px-4 py-2 font-mono text-xs uppercase tracking-tight border transition-colors shrink-0 ${
                activeTab === idx
                  ? "bg-proxima-black text-proxima-cream border-proxima-black"
                  : "bg-proxima-cream text-proxima-black border-proxima-black border-b-0"
              }`}
            >
              <span className="md:hidden">{ch.number}+</span>
              <span className="hidden md:inline">{ch.number} {ch.title}</span>
              <span className="hidden md:inline text-xs">+</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="border border-proxima-black p-4 md:p-8 lg:p-12 transition-colors duration-500" style={{ backgroundColor: tabColors[activeTab] }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-12">
            {/* Left Column */}
            <div className="lg:col-span-4">
              {/* Chapter Number */}
              <span className="block font-robit text-4xl md:text-8xl lg:text-[100px] leading-none tracking-tight text-proxima-black mb-4">
                {chapter.number}
              </span>

              {/* Chapter Title - stacked black pills */}
              <div className="flex flex-col items-start -space-y-px">
                {chapter.title.split(" ").length > 1 ? (
                  chapter.title.split(" ").map((word, i) => (
                    <span key={i} className="inline-block bg-proxima-black text-proxima-cream px-2 md:px-3 py-0.5 pb-1.5 md:py-1 md:pb-2 text-lg md:text-3xl lg:text-[42px] font-nb-international leading-none">
                      {word}
                    </span>
                  ))
                ) : (
                  <span className="inline-block bg-proxima-black text-proxima-cream px-2 md:px-3 py-0.5 pb-1.5 md:py-1 md:pb-2 text-lg md:text-3xl lg:text-[42px] font-nb-international leading-none">
                    {chapter.title}
                  </span>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-8 lg:border-l lg:border-proxima-black lg:pl-8">
              {/* Intro */}
              <div className="mb-8">
                {chapter.boldIntro ? (
                  <>
                    <p className="font-nb-international text-base md:text-lg leading-relaxed text-proxima-black font-bold mb-4">
                      {chapter.boldIntro}
                    </p>
                    <p className="font-nb-international text-sm md:text-base leading-relaxed text-proxima-black whitespace-pre-line">
                      {chapter.bodyText}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-mono text-xs uppercase tracking-tight text-proxima-black mb-4">
                      Abstract
                    </p>
                    <p className="font-nb-international text-base md:text-lg leading-relaxed text-proxima-black">
                      {chapter.abstract}
                    </p>
                  </>
                )}
              </div>

              {/* Subcategory Title */}
              {chapter.subcategoryTitle && (
                <p className="font-nb-international text-base md:text-lg font-bold text-proxima-black mb-6">
                  {chapter.subcategoryTitle}
                </p>
              )}

              {/* Sections */}
              <div className="space-y-6 mb-8">
                {chapter.sections.map((section, i) =>
                  section.heading.startsWith("__subcategory__") ? (
                    <p key={i} className="font-nb-international text-base md:text-lg font-bold text-proxima-black">
                      {section.heading.replace("__subcategory__", "")}
                    </p>
                  ) : (
                    <div key={i}>
                      <p className="font-mono text-xs uppercase tracking-tight text-proxima-black mb-2">
                        + {section.heading}
                      </p>
                      <p className="font-nb-international text-sm md:text-base leading-relaxed text-proxima-black whitespace-pre-line">
                        {section.content}
                      </p>
                    </div>
                  )
                )}
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
    subtitle: "",
    boldIntro: "Toxic elements that accumulate in blood and tissues and disrupt cellular function.",
    bodyText: "Exposure to certain heavy metals can occur through water, food, air, or occupational environments. Once in the body, these elements circulate in the bloodstream and deposit in tissues.\n\nUnlike many compounds, metals do not readily break down. Over time, accumulation interferes with enzyme function, increases oxidative stress, impairs mitochondrial energy production and alters immune signaling.",
    subcategoryTitle: "Heavy Metals",
    abstract: "",
    sections: [
      {
        heading: "Lead",
        content: "Lead exposure most commonly occurs through contaminated drinking water, aging infrastructure such as lead pipes, and older paint or dust in buildings. Elevated levels have been associated with neurologic dysfunction, cardiovascular strain, kidney impairment and developmental effects in children."
      },
      {
        heading: "Arsenic",
        content: "Arsenic exposure is often encountered through contaminated water or certain foods and has been linked to vascular disease, metabolic dysfunction, immune imbalance and increased cancer risk with chronic exposure.\n\nIdentifying and reducing the burden of heavy metals is an important step toward restoring physiologic balance."
      }
    ],
    keyData: [],
    citations: []
  },
  {
    id: "pops",
    number: "02",
    title: "Persistent Pollutants",
    subtitle: "",
    boldIntro: "Long-lasting synthetic chemicals found in packaging, consumer products and household goods.",
    bodyText: "Some industrial and consumer chemicals are designed to resist heat, water and degradation. That durability makes them useful in manufacturing, but it also means they break down slowly in the environment and in the human body. This is a concern as toxins such as PFAS are a known carcinogen, while others cause ongoing inflammation and hormone disruption, leading to chronic disease.",
    subcategoryTitle: "PFAS / Fluorinated Compounds",
    abstract: "",
    sections: [
      {
        heading: "PFOS",
        content: "PFAS are a large group of chemicals used in non-stick cookware, stain-resistant fabrics, firefighting foams and food packaging. Research has linked long-term exposure to changes in immune response, cholesterol levels, thyroid function and increased risk of certain chronic diseases like cancer."
      },
      {
        heading: "__subcategory__PCBs",
        content: ""
      },
      {
        heading: "PCB-153",
        content: "Polychlorinated biphenyls (PCBs) were widely used in electrical equipment and industrial materials before being banned in many countries. PCB-153 is a commonly detected variant. Due to their persistence, PCBs remain present in soil, water, and food chains. Chronic exposure has been associated with metabolic dysfunction, endocrine disruption, and increased cancer risk."
      },
      {
        heading: "__subcategory__Flame Retardants",
        content: ""
      },
      {
        heading: "PBDE-47",
        content: "PBDEs are flame-retardant chemicals used in furniture, electronics, and textiles. PBDE-47 is one of the most frequently detected forms in human tissue. Studies have explored potential links to hormone disruption, neurodevelopmental effects, and thyroid imbalance."
      }
    ],
    keyData: [],
    citations: []
  },
  {
    id: "microplastics",
    number: "03",
    title: "Microplastics",
    subtitle: "",
    boldIntro: "Microscopic plastic particles that cause disease and carry other toxic chemicals into the body.",
    bodyText: "As larger plastic materials degrade, they generate particles small enough to enter air, water and food. These microplastics have been found in our blood and every major organ.\n\nResearch has linked their presence to cancer, heart disease, dementia and infertility. While long-term outcomes continue to be studied, increased levels in our bodies raises important questions about cumulative inflammatory burden.",
    subcategoryTitle: "Plastic Polymers",
    abstract: "",
    sections: [
      {
        heading: "Polyethylene Fragments",
        content: "Polyethylene is one of the most widely produced plastics globally. As products break down, microscopic fragments enter the environment and increasingly the human body.\n\nDetection in biological samples shows their growing burden on our bodies. Plastic accumulation in the human brain increased 50% in the last 8 years alone."
      }
    ],
    keyData: [],
    citations: []
  },
  {
    id: "edcs",
    number: "04",
    title: "Endocrine Disruptors",
    subtitle: "",
    boldIntro: "Chemicals that can interfere with the body's hormone signaling, even at low levels of exposure.",
    bodyText: "Hormones are the body's internal messengers. They regulate metabolism, reproduction, mood, growth and immune balance. Certain synthetic compounds are structurally similar to natural hormones. When present in the body, they may mimic, block, or alter normal signaling patterns. Over time, this interference can contribute to metabolic imbalance, reproductive changes, and chronic inflammatory stress.",
    subcategoryTitle: "Phenols",
    abstract: "",
    sections: [
      {
        heading: "Bisphenol A (BPA)",
        content: "Commonly found in plastics, food containers and can linings, BPA has been studied for its ability to act like estrogen in the body. Higher cumulative exposure has been associated with shifts in metabolic health, cardiovascular markers and reproductive function."
      },
      {
        heading: "__subcategory__Phthalates",
        content: ""
      },
      {
        heading: "MEHP",
        content: "Phthalates are used to soften plastics and stabilize fragrances in personal care products. MEHP is a marker of phthalate exposure in the body. Research suggests links between sustained exposure and altered hormone levels, fertility concerns and metabolic disruption."
      },
      {
        heading: "__subcategory__Parabens",
        content: ""
      },
      {
        heading: "Methylparaben",
        content: "Parabens are preservatives used in cosmetics and pharmaceuticals. Methylparaben is among the most commonly detected forms in human tissue. Studies have explored potential effects on estrogen signaling and long-term endocrine balance."
      }
    ],
    keyData: [],
    citations: []
  },
  {
    id: "pesticides",
    number: "05",
    title: "Pesticides",
    subtitle: "",
    boldIntro: "Chemicals used in food production that can affect metabolic and neurological pathways.",
    bodyText: "Modern agriculture relies on chemical agents to protect crops and increase yield. While regulatory standards aim to limit exposure, certain compounds enter our food and water supply and find their way into our bodies.\n\nThese chemicals don\u2019t just kill pests, they impact humans too. When present in the body, they interact with metabolic enzymes, hormone signaling pathways and neurologic processes.",
    subcategoryTitle: "Pesticides",
    abstract: "",
    sections: [
      {
        heading: "Glyphosate",
        content: "Glyphosate is one of the most widely used herbicides in the world. While much of it is eliminated from the body relatively quickly, repeated exposure contributes to cumulative burden.\n\nResearch has explored how glyphosate may influence gut microbiome balance, increase oxidative stress and interfere with certain cellular pathways involved in metabolism and immune regulation. Disruption in these systems has been associated with chronic inflammation, metabolic dysfunction and broader long-term health concerns."
      },
      {
        heading: "Legacy Insecticides p,p\u2032-DDE (DDT)",
        content: "p,p\u2032-DDE is a breakdown product of DDT, a pesticide that was banned decades ago but still lingers in soil, water and the food supply because it breaks down very slowly.\n\nThis compound can remain in the body for years after exposure. Over time, studies have linked higher levels to disruptions in hormone balance and increased risk of certain long-term health conditions."
      }
    ],
    keyData: [],
    citations: []
  },
  {
    id: "vocs",
    number: "06",
    title: "Industrial Chemicals",
    subtitle: "",
    boldIntro: "Airborne and solvent-based chemicals commonly found in indoor and occupational environments.",
    bodyText: "Many everyday materials, including paints, cleaning products, fuels, adhesives and building materials release airborne chemicals. These compounds can be inhaled in small amounts over time, particularly in enclosed or poorly ventilated spaces.\n\nSome of these chemicals are rapidly processed by the body. Others, especially with repeated exposure, contribute to cumulative strain on the nervous system, liver, or blood-forming systems.",
    subcategoryTitle: "Volatile Organic Compounds (VOCs)",
    abstract: "",
    sections: [
      {
        heading: "Toluene",
        content: "Toluene is a solvent found in products such as paint thinners, adhesives and gasoline. Short-term exposure at high levels can affect the nervous system. With ongoing exposure, research shows impacts on cognitive function, liver health and cellular stress pathways."
      },
      {
        heading: "__subcategory__Aromatic Hydrocarbons",
        content: ""
      },
      {
        heading: "Benzene",
        content: "Benzene is an industrial chemical present in fuels, tobacco smoke and some manufacturing environments. It is known to affect the bone marrow, where blood cells are produced. Chronic exposure has been associated with increased risk of certain blood disorders and cancers."
      }
    ],
    keyData: [],
    citations: []
  },
  {
    id: "mold",
    number: "07",
    title: "Mold",
    subtitle: "",
    boldIntro: "Naturally occurring compounds produced by certain organisms that can enter the food chain.",
    bodyText: "Not all biologic burden comes from synthetic chemicals. Some toxins are produced naturally by molds and fungi, particularly in conditions of moisture or improper storage. These compounds are biologically active. Depending on dose and duration, they may influence immune regulation, oxidative stress pathways and organ function.",
    subcategoryTitle: "Mycotoxins",
    abstract: "",
    sections: [
      {
        heading: "Ochratoxin A. Aflatoxin M1.",
        content: "Mycotoxins are toxic substances produced by specific species of mold. Ochratoxin A has been studied for its potential effects on kidney health and immune signaling. Aflatoxin M1, a metabolite that can appear in dairy products when livestock consume contaminated feed, has been associated with liver stress and long-term cancer risk at sustained levels of exposure.\n\nBecause these toxins can persist in the bloodstream, even low-level exposure over time may contribute to inflammatory strain. For some patients, understanding biologic toxin burden is part of restoring clearer immune balance and physiologic stability."
      }
    ],
    keyData: [],
    citations: []
  },
  {
    id: "persistence",
    number: "08",
    title: "Persistent Pathogens",
    subtitle: "",
    boldIntro: "Pathogens or pathogen-derived materials that remain in the body and contribute to prolonged immune activation.",
    bodyText: "In some individuals, the effects of an infection can extend beyond the initial illness. Even after acute symptoms improve, traces of the organism, or the immune response it triggered, can continue to influence the body. When immune activation remains elevated instead of returning to baseline, it contributes to ongoing inflammation and physiologic strain.",
    subcategoryTitle: "Bacterial Pathogens",
    abstract: "",
    sections: [
      {
        heading: "Borrelia burgdorferi (Lyme disease)",
        content: "Lyme disease is caused by the bacterium Borrelia burgdorferi. While many patients recover fully with appropriate treatment, some experience ongoing symptoms that may involve persistent immune activation or inflammatory signaling."
      },
      {
        heading: "__subcategory__Persistent Pathogen-Associated Proteins",
        content: ""
      },
      {
        heading: "Covid Spike Protein",
        content: "Following viral exposure or vaccination, the body generates viral proteins as a central part of the immune response. However, for some individuals, these protein fragments do not clear; they persist in the bloodstream, acting as a continuous trigger for prolonged immune activation. This lingering biological presence is a primary driver of chronic inflammatory stress and systemic fatigue."
      }
    ],
    keyData: [],
    citations: []
  }
];

export default function SciencePage() {
  return (
    <div className="min-h-screen bg-primary text-primary">
      {/* Full Screen Hero Video */}
      <section className="relative min-h-screen flex flex-col pt-20 md:pt-24 bg-proxima-cream">
        {/* Video with flanking scroll prompts on desktop, below on mobile */}
        <div className="flex-grow flex flex-col lg:flex-row items-center justify-center px-4 gap-6 lg:gap-8">
          {/* Left scroll prompt - hidden on mobile, shown on desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="hidden lg:flex flex-col items-center gap-2"
          >
            <span className="font-mono text-xs uppercase tracking-wider text-proxima-black/50 [writing-mode:vertical-lr] rotate-180">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown size={16} className="text-proxima-black/40" />
            </motion.div>
          </motion.div>

          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-5xl h-auto"
          >
            <source src="/assets/toxic-load-animation.mp4" type="video/mp4" />
          </video>

          {/* Right scroll prompt - hidden on mobile, shown on desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="hidden lg:flex flex-col items-center gap-2"
          >
            <span className="font-mono text-xs uppercase tracking-wider text-proxima-black/50 [writing-mode:vertical-lr]">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown size={16} className="text-proxima-black/40" />
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile scroll prompt - shown below video on small screens */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex lg:hidden flex-col items-center pb-8"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-proxima-black/50 mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={20} className="text-proxima-black/40" />
          </motion.div>
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

          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Headline - centered in first column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="flex flex-col items-start -space-y-0.5">
                <span className="inline-block bg-proxima-black text-proxima-cream px-2 py-0.5 md:px-3 text-lg md:text-2xl lg:text-3xl font-nb-international leading-none">
                  From Theory
                </span>
                <span className="inline-block bg-proxima-black text-proxima-cream px-2 py-0.5 md:px-3 text-lg md:text-2xl lg:text-3xl font-nb-international leading-none">
                  to Measurement
                </span>
              </div>
            </motion.div>

            {/* Empty second column */}
            <div className="hidden md:block" />

            {/* Supporting copy - third column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <p className="text-proxima-black/80 font-nb-international text-sm md:text-base leading-relaxed mb-6">
                Understanding the science is step one.<br className="hidden md:inline" />
                Quantifying your personal exposure<br className="hidden md:inline" />
                requires clinical-grade diagnostics.
              </p>

              <Link
                href="/waitlist"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-proxima-black hover:text-proxima-black transition-colors"
              >
                <span className="relative">
                  Free Toxin Assessment
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
