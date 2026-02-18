"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";

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

        {/* Main Content */}
        <div className="relative z-10 w-full section-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-24 items-end">
            {/* Left Column - Main Headline with corner + markers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Top-left corner marker */}
              <div className="absolute -top-8 -left-6 text-proxima-cream text-2xl font-mono">+</div>
              
              {/* Headline block - each line has its own fitted background */}
              <div className="relative inline-block">
                <div className="flex flex-col items-start">
                  <span className="inline-block bg-proxima-cream text-proxima-black px-4 py-2 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal font-sans leading-tight">
                    Better blood.
                  </span>
                  <span className="inline-block bg-proxima-cream text-proxima-black px-4 py-2 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal font-sans leading-tight">
                    Better life.
                  </span>
                </div>
                {/* Bottom-right marker - sticky to headline block width */}
                <div className="absolute -bottom-8 -right-6 text-proxima-cream text-2xl font-mono">+</div>
              </div>
              
              {/* Bottom-left corner marker */}
              <div className="absolute -bottom-8 -left-6 text-proxima-cream text-2xl font-mono">+</div>
            </motion.div>

            {/* Right Column - Subheadline & CTA - positioned 40px left of vertical line */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:mr-20 text-left max-w-md"
            >
              {/* Subheadline - single line */}
              <p className="text-proxima-cream text-sm md:text-base font-sans font-normal mb-4 whitespace-nowrap">
                Microplastics. PFAS. Heavy metals.
              </p>
              
              {/* Body text */}
              <p className="text-proxima-cream text-sm md:text-base font-sans font-normal mb-8 leading-relaxed">
                We help you understand what&apos;s in<br />
                your blood, then remove what doesn&apos;t belong.
              </p>

              {/* CTA Button - Black text on cream background */}
              <Link 
                href="/waitlist" 
                className="inline-flex items-center gap-3 bg-proxima-cream text-proxima-black px-6 py-3 font-mono font-medium text-xs tracking-wider uppercase hover:bg-white transition-colors whitespace-nowrap"
              >
                Free Toxin Assessment <Plus size={14} strokeWidth={2.5} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-proxima-cream py-24 lg:py-32">
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
                {/* Red + marker */}
                <span className="text-proxima-red text-2xl font-mono font-light mb-4 block">+</span>
                
                {/* Stat number */}
                <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-proxima-black leading-none font-display mb-4">
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
      <section className="py-32 bg-proxima-cream">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
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

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              {/* Section label */}
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-proxima-black/40 mb-4">The Invisible Crisis</p>
              {/* Heading */}
              <h2 className="mb-8 font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="bg-proxima-black text-proxima-cream px-3 py-1 box-decoration-clone leading-relaxed">
                  We are the first generation to carry environmental toxins in our blood from birth.
                </span>
              </h2>
              
              {/* Body text */}
              <div className="mb-12 space-y-6">
                <p className="text-proxima-black/70 font-sans text-lg leading-relaxed">
                  Since the 1950s, over 140,000 synthetic compounds have entered our world 
                  and our bloodstream. From microplastics to &quot;forever chemicals,&quot; these 
                  substances were never meant to be part of our biology.
                </p>
                <p className="text-proxima-black/70 font-sans text-lg leading-relaxed">
                  We believe you deserve a clean slate. Proxima Health provides the rigorous, 
                  peer-reviewed science to identify these toxins and the proven technology to 
                  remove them. We don&apos;t just believe in better days ahead; we have the science 
                  to make them happen.
                </p>
              </div>

              {/* Button */}
              <Link href="/diagnostics" className="btn-gradient inline-flex items-center gap-3">
                Order environmental toxin blood test <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-proxima-black">
        <div className="section-container">
          <div className="mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-proxima-cream/40 mb-4">Methodology</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight inline-block">
              <span className="bg-proxima-cream text-proxima-black px-3 py-1">
                Three Steps to Better Health
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                num: "01",
                title: "Measure",
                subtitle: "Diagnostics",
                desc: "Proxima Health Baseline blood test to identify and measure over 30 environmental toxins with clinical precision.",
                link: "/diagnostics"
              },
              {
                num: "02",
                title: "Optimize",
                subtitle: "Lifestyle",
                desc: "Evidence based protocols and lifestyle changes to reduce ongoing exposure.",
                link: "/interventions"
              },
              {
                num: "03",
                title: "Eliminate",
                subtitle: "Therapeutics",
                desc: "Advanced blood filtration to remove accumulated toxins from the body.",
                link: "/interventions"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <span className="block text-8xl font-bold text-proxima-cream/10 leading-none mb-4 font-display">{item.num}</span>
                <h3 className="mb-2 text-proxima-cream font-display">{item.title}</h3>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-proxima-cream/40 mb-6">{item.subtitle}</p>
                <p className="text-proxima-cream/70 font-sans mb-8">{item.desc}</p>
                <Link 
                  href={item.link} 
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-proxima-cream/50 hover:text-proxima-cream transition-colors group"
                >
                  Learn more 
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden bg-proxima-cream">
        <div className="absolute top-0 left-0 right-0 h-px proxima-gradient opacity-30" />
        <div className="section-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-1 proxima-gradient mx-auto mb-8" />
            <h2 className="mb-8 font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-proxima-black">
              Estimate your toxin exposure in two minutes
            </h2>
            <p className="text-xl text-proxima-black/60 font-sans mb-12 max-w-xl mx-auto">
              Answer a few lifestyle questions. Receive an estimated Toxin Load Score 
              based on your daily exposure.
            </p>
            <Link href="/waitlist" className="btn-gradient inline-flex items-center gap-3">
              Begin Assessment <ArrowRight size={18} />
            </Link>
            <p className="font-mono text-xs uppercase tracking-wider text-proxima-black/40 mt-8 text-center mx-auto">
              No signup required · Results delivered immediately
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px proxima-gradient-reverse opacity-30" />
      </section>
    </div>
  );
}
