"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function InterventionsPage() {
  return (
    <div className="min-h-screen pt-24 bg-primary text-primary">
      {/* Therapeutic Filtration */}
      <section className="py-24 bg-proxima-cream">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="mb-6 font-display text-4xl md:text-5xl font-bold leading-tight">
                <span className="bg-proxima-black text-proxima-cream px-3 py-1">INUSpheresis®</span>
              </h2>
              
              <div className="mb-8 space-y-4">
                <p className="text-proxima-black/80 text-lg leading-relaxed font-sans">
                  For decades, therapeutic blood filtration has been used in European 
                  clinical settings to help physicians reduce circulating environmental 
                  toxins and support the body&apos;s natural recovery processes. Proxima Health 
                  is bringing this science to the United States carefully, responsibly 
                  and grounded in evidence.
                </p>
                <p className="text-proxima-black/80 text-lg leading-relaxed font-sans">
                  Our work is underway. Availability is expected in 2027.
                </p>
              </div>

              <Link href="/practitioners" className="btn-gradient inline-flex items-center gap-2">
                Practitioner partnerships <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3]">
                <Image 
                  src="/assets/freepik__-metadata-confidencescore-high-imagetype-photograp__36853.png"
                  alt="INUSpheresis Treatment"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 proxima-gradient" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="section-narrow text-center">
          <h2 className="mb-6 font-display text-3xl md:text-4xl font-bold inline-block">
            <span className="bg-proxima-black text-proxima-cream px-3 py-1">Intervention starts with measurement</span>
          </h2>
          <p className="text-xl text-secondary mb-12 max-w-xl mx-auto font-sans">
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
