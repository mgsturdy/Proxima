"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { useEffect } from "react";
import ThreeStepsSection from "@/components/ThreeStepsSection";

export default function Home() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Full Screen Hero */}
      <section className="relative min-h-[70vh] md:min-h-screen flex items-end pb-12 lg:pb-24 pt-20 md:pt-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/hero-patient-wellness.png"
            alt="Proxima Health"
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
                <span className="inline-block bg-proxima-cream text-proxima-black px-3 py-1.5 md:px-4 md:py-2 text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-normal font-nb-international leading-tight">
                  Better blood.
                </span>
                <span className="inline-block bg-proxima-cream text-proxima-black px-3 py-1.5 md:px-4 md:py-2 text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-normal font-nb-international leading-tight">
                  Better life.
                </span>
              </div>
              {/* Bottom-right marker */}
              <div className="absolute -bottom-10 -right-8 text-proxima-cream text-2xl font-mono">+</div>
            </div>
            
            {/* Bottom-left corner marker */}
            <div className="absolute -bottom-10 left-0 text-proxima-cream text-2xl font-mono">+</div>
          </motion.div>
        </div>

        {/* Right Column - Subheadline & CTA - positioned 40px left of vertical line (which is at right-10) */}
        <div className="hidden lg:block absolute bottom-16 right-20 z-10 text-left max-w-xs">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-proxima-cream text-base font-nb-international font-normal mb-4">
              Microplastics. PFAS. Heavy metals.
            </p>
            
            <p className="text-proxima-cream text-base font-nb-international font-normal mb-8 leading-relaxed">
              We help you understand what&apos;s in your blood, then remove what doesn&apos;t belong.
            </p>

            <Link 
              href="/waitlist" 
              className="inline-flex items-center gap-3 bg-proxima-cream text-proxima-black px-6 py-3 font-mono font-medium text-xs tracking-wider uppercase hover:bg-white transition-colors whitespace-nowrap"
            >
              Free Toxin Assessment <Plus size={14} strokeWidth={2.5} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-proxima-cream py-16 md:py-24 lg:py-32">
        {/* Vertical line continuing from hero - now black */}
        <div className="absolute top-0 right-10 w-px h-full bg-proxima-black/60 hidden lg:block" />
        
        {/* Top row of + signs */}
        <div className="section-container relative mb-16">
          <div className="flex justify-between items-center">
            {/* Left + */}
            <span className="text-proxima-black text-2xl font-mono">+</span>
            {/* Center + */}
            <span className="text-proxima-black text-2xl font-mono">+</span>
            {/* Right + - offset from vertical line */}
            <span className="text-proxima-black text-2xl font-mono lg:mr-14">+</span>
          </div>
        </div>

        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {[
              { 
                stat: "97%", 
                desc: "OF AMERICANS HAVE DETECTABLE PFAS (FOREVER CHEMICALS) IN THEIR BLOOD",
                source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12082571/"
              },
              { 
                stat: "287", 
                desc: "INDUSTRIAL CHEMICALS FOUND IN NEWBORN UMBILICAL CORD BLOOD",
                source: "https://www.ewg.org/news-insights/news/industrial-pollution-doesnt-have-begin-womb"
              },
              { 
                stat: "77%",
                desc: "OF PEOPLE HAVE DETECTABLE MICROPLASTICS IN THEIR BLOOD",
                source: "https://pubmed.ncbi.nlm.nih.gov/35367073/"
              },
              { 
                stat: "81%", 
                desc: "OF AMERICANS HAVE DETECTABLE GLYPHOSATE IN THEIR URINE",
                source: "https://www.cdc.gov/biomonitoring/featured-work/diet-is-a-factor-in-contact-with-glyphosate.html"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-left"
              >
                <span className="block text-3xl md:text-6xl lg:text-7xl xl:text-8xl text-proxima-black leading-none font-robit mb-3 md:mb-4">
                  {item.stat}
                </span>
                
                <p className="text-proxima-black/80 text-xs md:text-sm font-mono uppercase tracking-wide leading-relaxed mb-2">
                  {item.desc}
                </p>
                <a href={item.source} target="_blank" rel="noopener noreferrer" className="text-proxima-black/40 hover:text-proxima-black/70 text-[10px] font-mono uppercase tracking-wider transition-colors">
                  Source
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Invisible Crisis */}
      <section className="relative bg-proxima-cream">
        {/* Vertical line continuing from hero - now black */}
        <div className="absolute top-0 right-10 w-px h-full bg-proxima-black/60 hidden lg:block" />
        
        <div className="section-container">
          {/* Top row of + signs */}
          <div className="flex items-center py-6">
            {/* Left + aligned with image left edge */}
            <span className="text-proxima-black text-2xl font-mono">+</span>
            {/* Second + aligned with image right edge / divider */}
            <span className="text-proxima-black text-2xl font-mono ml-[calc(50%-1.5rem)] md:ml-[calc(50%-3rem)]">+</span>
            {/* Right + near vertical line */}
            <span className="text-proxima-black text-2xl font-mono ml-auto mr-6">+</span>
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pr-0 md:pr-8 lg:pr-12"
            >
              <div className="aspect-[4/3] relative">
                <Image 
                  src="/assets/healthcare-professional.png"
                  alt="Clinical Care"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Content Column with left border */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-0 md:pl-8 lg:pl-12 border-l-0 md:border-l border-proxima-black/20 flex flex-col pt-6 md:pt-0"
            >
              {/* Section label - aligned with + row */}
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-proxima-black/60 mb-8">The Invisible Crisis</p>
              
              {/* Heading - white on black, each line fitted */}
              <div className="mb-8">
                <div className="flex flex-col items-start -space-y-0.5">
                  <span className="inline-block bg-proxima-black text-proxima-cream px-2 py-0.5 md:px-3 text-xl md:text-3xl lg:text-4xl font-nb-international leading-none">
                    We are the first
                  </span>
                  <span className="inline-block bg-proxima-black text-proxima-cream px-2 py-0.5 md:px-3 text-xl md:text-3xl lg:text-4xl font-nb-international leading-none">
                    generation to carry
                  </span>
                  <span className="inline-block bg-proxima-black text-proxima-cream px-2 py-0.5 md:px-3 text-xl md:text-3xl lg:text-4xl font-nb-international leading-none">
                    environmental toxins
                  </span>
                  <span className="inline-block bg-proxima-black text-proxima-cream px-2 py-0.5 md:px-3 text-xl md:text-3xl lg:text-4xl font-nb-international leading-none">
                    in our blood from birth.
                  </span>
                </div>
              </div>
              
              {/* Body text */}
              <div className="mb-8 space-y-4 flex-grow">
                <p className="text-proxima-black/80 font-nb-international text-sm md:text-base leading-relaxed">
                  Since the 1950s, over 140,000 synthetic compounds have entered our world and our bloodstream. From microplastics to &quot;forever chemicals,&quot; these substances were never meant to be part of our biology.
                </p>
                <p className="text-proxima-black/80 font-nb-international text-sm md:text-base leading-relaxed">
                  We believe you deserve a clean slate. Proxima Health provides diagnostics to identify environmental toxins in your blood and the proven technology to remove them.
                </p>
                <p className="text-proxima-black/80 font-nb-international text-sm md:text-base leading-relaxed">
                  Take our free 2-minute toxin assessment to get a first look at your potential toxin exposure.
                </p>
              </div>

              {/* CTA Button - bottom aligned with image */}
              <div className="mt-auto pb-6">
                <Link href="/waitlist" className="bg-proxima-red text-proxima-cream px-6 py-3 font-mono text-xs uppercase tracking-wider inline-block hover:bg-proxima-red/90 transition-colors">
                  Free Toxin Assessment
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Steps Section */}
      <ThreeStepsSection />

      {/* Estimate Your Toxin Exposure */}
      <section className="relative py-16 md:py-24 bg-proxima-cream">

        <div className="section-container">
          {/* Top row of + signs - framing crosses (wider on mobile) */}
          <div className="flex justify-between mb-8 md:grid md:grid-cols-3">
            <span className="text-proxima-black text-2xl font-mono">+</span>
            <span className="text-proxima-black text-2xl font-mono">+</span>
            <span className="hidden md:block"></span>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Headline - left-aligned on mobile, centered column on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-start md:items-center justify-start md:justify-center"
            >
              <div className="flex flex-col items-start -space-y-0.5">
                <span className="inline-block bg-proxima-black text-proxima-cream px-2 py-0.5 md:px-3 text-lg md:text-2xl lg:text-3xl font-nb-international leading-none">
                  Estimate your
                </span>
                <span className="inline-block bg-proxima-black text-proxima-cream px-2 py-0.5 md:px-3 text-lg md:text-2xl lg:text-3xl font-nb-international leading-none">
                  toxin exposure
                </span>
                <span className="inline-block bg-proxima-black text-proxima-cream px-2 py-0.5 md:px-3 text-lg md:text-2xl lg:text-3xl font-nb-international leading-none">
                  in two minutes
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
                Answer a few lifestyle questions to receive your Toxin Load Score.
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

          {/* Bottom row of + signs - framing crosses (wider on mobile) */}
          <div className="flex justify-between mt-8 md:grid md:grid-cols-3">
            <span className="text-proxima-black text-2xl font-mono">+</span>
            <span className="text-proxima-black text-2xl font-mono">+</span>
            <span className="hidden md:block"></span>
          </div>
        </div>
      </section>
    </div>
  );
}
