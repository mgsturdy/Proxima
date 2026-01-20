"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function InterventionsPage() {
  return (
    <div className="min-h-screen pt-24 bg-primary text-primary">
      {/* Therapeutic Filtration */}
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
          <Link href="/diagnostics" className="btn-gradient inline-flex items-center gap-3">
            Explore Diagnostics <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
