"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import ThreeStepsSection from "@/components/ThreeStepsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Full Screen Hero */}
      <section className="relative min-h-screen flex items-end pb-16 lg:pb-24 pt-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/siralexfrompt_adult_male-presenting_figure_with_short_light_cur_c5431ccb-00b8-4bfd-8bfa-5aea84fd235b.png"
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
                <span className="inline-block bg-proxima-cream text-proxima-black px-4 py-2 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal font-nb-international leading-tight">
                  Better blood.
                </span>
                <span className="inline-block bg-proxima-cream text-proxima-black px-4 py-2 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal font-nb-international leading-tight">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 mt-12 px-6 lg:absolute lg:bottom-16 lg:right-20 lg:mt-0 lg:px-0 text-left"
        >
          {/* Subheadline - single line */}
          <p className="text-proxima-cream text-sm md:text-base font-nb-international font-normal mb-4 whitespace-nowrap">
            Microplastics. PFAS. Heavy metals.
          </p>
          
          {/* Body text */}
          <p className="text-proxima-cream text-sm md:text-base font-nb-international font-normal mb-8 leading-relaxed">
            We help you understand what&apos;s in<br />
            your blood, then remove what<br />
            doesn&apos;t belong.
          </p>

          {/* CTA Button - Black text on cream background */}
          <Link 
            href="/waitlist" 
            className="inline-flex items-center gap-3 bg-proxima-cream text-proxima-black px-6 py-3 font-mono font-medium text-xs tracking-wider uppercase hover:bg-white transition-colors whitespace-nowrap"
          >
            Free Toxin Assessment <Plus size={14} strokeWidth={2.5} />
          </Link>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-proxima-cream py-24 lg:py-32">
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { 
                stat: "97%", 
                desc: "OF AMERICANS HAVE DETECTABLE PFAS (FOREVER CHEMICALS) IN THEIR BLOODSTREAM"
              },
              { 
                stat: "287", 
                desc: "INDUSTRIAL CHEMICALS FOUND IN NEWBORN UMBILICAL CORD BLOOD"
              },
              { 
                stat: "80%", 
                desc: "OF AMERICANS HAVE DETECTABLE MICROPLASTICS IN THEIR BLOODSTREAM"
              },
              { 
                stat: "49%", 
                desc: "OF AMERICANS HAVE LEAD, CADMIUM, MERCURY AND ARSENIC AT OR ABOVE MEDIAN LEVELS IN THEIR BLOOD"
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
                {/* Stat number */}
                <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-proxima-black leading-none font-robit mb-4">
                  {item.stat}
                </span>
                
                {/* Description - uppercase */}
                <p className="text-proxima-black/80 text-xs md:text-sm font-mono uppercase tracking-wide leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Invisible Crisis */}
      <section className="relative bg-proxima-cream">
        {/* Vertical line continuing from hero - now black */}
        <div className="absolute top-0 right-10 w-px h-full bg-proxima-black/60" />
        
        <div className="section-container">
          {/* Top row of + signs */}
          <div className="flex items-center py-6">
            {/* Left + aligned with image left edge */}
            <span className="text-proxima-black text-2xl font-mono">+</span>
            {/* Second + aligned with image right edge / divider */}
            <span className="text-proxima-black text-2xl font-mono ml-[calc(50%-3rem)]">+</span>
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
              className="relative pr-8 lg:pr-12"
            >
              <div className="aspect-[4/3] relative">
                <Image 
                  src="/assets/freepik__muda-a-farda-para-off-white__36851.png"
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
              className="relative pl-8 lg:pl-12 border-l border-proxima-black/20 flex flex-col"
            >
              {/* Section label - aligned with + row */}
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-proxima-black/60 mb-8">The Invisible Crisis</p>
              
              {/* Heading - white on black, each line fitted */}
              <div className="mb-8">
                <div className="flex flex-col items-start -space-y-0.5">
                  <span className="inline-block bg-proxima-black text-proxima-cream px-3 py-0.5 text-2xl md:text-3xl lg:text-4xl font-nb-international leading-none">
                    We are the first
                  </span>
                  <span className="inline-block bg-proxima-black text-proxima-cream px-3 py-0.5 text-2xl md:text-3xl lg:text-4xl font-nb-international leading-none">
                    generation to carry
                  </span>
                  <span className="inline-block bg-proxima-black text-proxima-cream px-3 py-0.5 text-2xl md:text-3xl lg:text-4xl font-nb-international leading-none">
                    environmental toxins
                  </span>
                  <span className="inline-block bg-proxima-black text-proxima-cream px-3 py-0.5 text-2xl md:text-3xl lg:text-4xl font-nb-international leading-none">
                    in our blood from birth.
                  </span>
                </div>
              </div>
              
              {/* Body text */}
              <div className="mb-8 space-y-4 flex-grow">
                <p className="text-proxima-black/80 font-nb-international text-sm md:text-base leading-relaxed">
                  Since the 1950s, over 140,000 synthetic compounds have entered our world 
                  and our bloodstream. From microplastics to &quot;forever chemicals,&quot; these 
                  substances were never meant to be part of our biology.
                </p>
                <p className="text-proxima-black/80 font-nb-international text-sm md:text-base leading-relaxed">
                  We believe you deserve a clean slate. Proxima Health provides the rigorous, 
                  peer-reviewed science to identify these toxins and the proven technology to 
                  remove them. We don&apos;t just believe in better days ahead; we have the science 
                  to make them happen.
                </p>
              </div>

              {/* CTA Button - bottom aligned with image */}
              <div className="mt-auto pb-6">
                <Link href="/diagnostics" className="bg-proxima-red text-proxima-cream px-6 py-3 font-mono text-xs uppercase tracking-wider inline-block hover:bg-proxima-red/90 transition-colors">
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
                  Estimate your
                </span>
                <span className="inline-block bg-proxima-black text-proxima-cream px-3 py-0.5 text-xl md:text-2xl lg:text-3xl font-nb-international leading-none">
                  toxin exposure
                </span>
                <span className="inline-block bg-proxima-black text-proxima-cream px-3 py-0.5 text-xl md:text-2xl lg:text-3xl font-nb-international leading-none">
                  in two minutes
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
                Answer a few lifestyle questions.<br />
                Receive an estimated Toxin Load<br />
                Score based on your daily exposure.
              </p>

              {/* Learn more link with + and red gradient underline */}
              <Link
                href="/waitlist"
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
