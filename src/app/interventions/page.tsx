"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/lib/theme";

export default function InterventionsPage() {
  const { theme } = useTheme();
  const iconSuffix = theme === "dark" ? "_OffWhite" : "_Black";

  const lifestyleItems = [
    {
      category: "Air Quality",
      title: "HEPA Filtration",
      content: "H13/H14 grade HEPA filtration reduces airborne particulate matter (PM2.5) and microplastics by 99.97%. For meaningful impact, filtration should cover sleeping areas at minimum. Consider whole-home systems for comprehensive coverage.",
      efficacy: "99.97% particle reduction",
      icon: `/assets/icon_blood-circulation${iconSuffix}.svg`
    },
    {
      category: "Water",
      title: "Reverse Osmosis",
      content: "RO filtration is the only validated method to remove PFAS 'forever chemicals' from drinking water. Standard activated carbon filters remove chlorine and improve taste but are ineffective against PFAS, heavy metals, and many pesticides.",
      efficacy: "95%+ PFAS removal",
      icon: `/assets/icon_capsule${iconSuffix}.svg`
    },
    {
      category: "Food Contact",
      title: "Polymer Reduction",
      content: "Transitioning to glass and stainless steel for food storage and preparation eliminates BPA and phthalate leaching. This is particularly critical for heated foods, as plastic leaching increases 55x at elevated temperatures.",
      efficacy: "Near-complete elimination",
      icon: `/assets/icon_digital-heart${iconSuffix}.svg`
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-primary text-primary">
      {/* Header */}
      <header className="py-16 border-b border-border-primary">
        <div className="section-container">
          <p className="section-label mb-4">Treatment Modalities</p>
          <h1 className="mb-6">Interventions</h1>
          <p className="text-xl text-secondary max-w-2xl leading-relaxed">
            A dual-track approach to environmental toxin management: reducing 
            ongoing exposure through validated lifestyle modifications, and 
            actively removing accumulated toxins through therapeutic filtration.
          </p>
        </div>
      </header>

      {/* Track 1: Lifestyle */}
      <section className="py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <span className="chapter-number">01</span>
                <h2 className="mt-4 mb-2">Lifestyle Mitigation</h2>
                <p className="section-label mb-6">Reducing Ongoing Exposure</p>
                <p className="text-secondary">
                  Evidence-based interventions that can reduce ongoing toxin 
                  exposure by 40-80% depending on the category.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-8">
                {lifestyleItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-secondary border border-border-primary p-8"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <p className="font-mono text-xs text-tertiary uppercase tracking-wider mb-1">{item.category}</p>
                        <h3>{item.title}</h3>
                      </div>
                      <Image src={item.icon} alt="" width={32} height={32} className="opacity-30" />
                    </div>
                    <p className="text-secondary mb-6">{item.content}</p>
                    <p className="font-mono text-sm text-proxima-red">{item.efficacy}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track 2: Therapeutics */}
      <section className="py-24 bg-inverse text-inverse">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="chapter-number text-inverse/5">02</span>
              <h2 className="text-inverse mt-4 mb-2">Therapeutic Filtration</h2>
              <p className="section-label text-inverse/40 mb-6">INUSpheresis®</p>
              
              <div className="prose-editorial text-inverse/70 mb-8">
                <p>
                  For accumulated lipophilic toxins that cannot be excreted through 
                  natural pathways, therapeutic blood filtration offers a direct 
                  removal mechanism.
                </p>
                <p>
                  INUSpheresis® is an apheresis-based treatment developed in Germany 
                  that selectively removes environmental toxins, heavy metals, and 
                  inflammatory markers from the blood.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  { label: "Mechanism", value: "Selective lipid apheresis" },
                  { label: "Duration", value: "2-3 hours per session" },
                  { label: "Availability", value: "Select European clinics" },
                  { label: "North America", value: "Coming 2027" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between border-b border-inverse/10 pb-3">
                    <span className="font-mono text-xs text-inverse/40 uppercase">{item.label}</span>
                    <span className="font-sans text-sm text-inverse/80">{item.value}</span>
                  </div>
                ))}
              </div>

              <Link href="/practitioners" className="inline-flex items-center gap-2 font-sans text-sm font-medium text-inverse/60 hover:text-inverse transition-colors">
                Practitioner partnerships <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3]">
                <Image 
                  src="/assets/siralexfrompt_aerial_cinematic_shot_of_a_man_lying_on_a_sleek_f_8b60267f-f3ea-43f5-9bb5-6be046ea054f.png"
                  alt="INUSpheresis Treatment"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 proxima-gradient" />
              </div>
              <p className="font-mono text-xs text-inverse/40 mt-4">
                INUSpheresis® treatment facility. Image for illustration only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="section-narrow text-center">
          <h2 className="mb-6">Intervention starts with measurement</h2>
          <p className="text-xl text-secondary mb-12 max-w-xl mx-auto">
            Before implementing any intervention protocol, establish your 
            baseline toxin levels through clinical diagnostics.
          </p>
          <Link href="/diagnostics" className="btn-primary inline-flex items-center gap-3">
            Explore Diagnostics <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
