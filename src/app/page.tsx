"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero - Cinematic Split */}
      <section className="min-h-screen relative flex">
        {/* Left - Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-32 pt-40 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Gradient accent */}
            <div className="w-24 h-1.5 proxima-gradient mb-12" />
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-8 tracking-tight">
              What's in<br />
              <span className="italic font-normal text-gradient">your</span> blood?
            </h1>
            
            <p className="text-xl md:text-2xl max-w-md leading-relaxed mb-12 text-secondary">
              140,000 synthetic chemicals. Zero long-term testing. 
              Now measurable in every human on Earth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/science" className="btn-gradient inline-flex items-center gap-3">
                The Evidence <ArrowRight size={18} />
              </Link>
              <Link href="/diagnostics" className="btn-outline inline-flex items-center gap-3">
                Get Tested
              </Link>
            </div>

            {/* Scroll indicator */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="hidden lg:flex items-center gap-3 text-tertiary"
            >
              <ArrowDown size={16} />
              <span className="font-mono text-xs uppercase tracking-wider">Scroll to explore</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Right - Hero Image */}
        <div className="hidden lg:block w-1/2 relative">
          <Image 
            src="/assets/freepik__f4b551c0e94b4cecbc46024fad0f4b60assistant-2-img1-t__36844.png"
            alt="Close-up clinical"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay from left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)] via-transparent to-transparent w-1/3" />
        </div>

        {/* Mobile background */}
        <div className="lg:hidden absolute inset-0 -z-10">
          <Image 
            src="/assets/freepik__f4b551c0e94b4cecbc46024fad0f4b60assistant-2-img1-t__36844.png"
            alt=""
            fill
            className="object-cover opacity-20"
          />
        </div>
      </section>

      {/* Stats - Redesigned with more visual interest */}
      <section className="relative overflow-hidden">
        {/* Gradient background bar at top */}
        <div className="h-2 proxima-gradient" />
        
        <div className="bg-proxima-black py-28 relative">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          
          <div className="section-container relative">
            {/* Section label */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-proxima-offwhite/40 font-mono text-xs uppercase tracking-[0.3em] mb-16 text-center"
            >
              The Evidence
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {[
                { 
                  stat: "93%", 
                  desc: "of Americans carry detectable BPA in their bloodstream", 
                  src: "CDC NHANES Study",
                  accent: "#FE091B"
                },
                { 
                  stat: "287", 
                  desc: "industrial chemicals found in newborn umbilical cord blood", 
                  src: "Environmental Working Group",
                  accent: "#FF9D00"
                },
                { 
                  stat: "5g", 
                  desc: "of microplastic particles consumed weekly by the average adult", 
                  src: "WWF International",
                  accent: "#FFFBEE"
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="text-center relative group"
                >
                  {/* Accent line */}
                  <div 
                    className="w-12 h-1 mx-auto mb-8 transition-all duration-300 group-hover:w-20"
                    style={{ backgroundColor: item.accent }}
                  />
                  
                  <span className="block text-6xl md:text-7xl lg:text-8xl font-bold text-proxima-offwhite leading-none font-sans mb-6">
                    {item.stat}
                  </span>
                  <p className="text-proxima-offwhite/70 text-lg max-w-xs mx-auto mb-4 font-serif leading-relaxed">
                    {item.desc}
                  </p>
                  <p className="font-mono text-xs text-proxima-offwhite/30 uppercase tracking-wider">
                    {item.src}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Gradient background bar at bottom */}
        <div className="h-2 proxima-gradient-reverse" />
      </section>

      {/* The Thesis - Magazine Editorial Layout */}
      <section className="py-32">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[3/4] relative">
                <Image 
                  src="/assets/freepik__muda-a-farda-pra-off-white__36850.png"
                  alt="Clinical Practitioner"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating caption */}
              <div className="absolute -bottom-8 -right-8 bg-inverse p-6 max-w-xs hidden md:block">
                <p className="font-mono text-xs text-inverse opacity-60">
                  "The body was never designed to process synthetic polymers."
                </p>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <p className="section-label mb-4">The Invisible Crisis</p>
              <h2 className="mb-8">We are the first generation to carry synthetic chemicals in our blood from birth.</h2>
              
              <div className="prose-editorial mb-12">
                <p>
                  Since the chemical revolution of the 1950s, we've introduced over 
                  140,000 synthetic compounds into our environment. Plastics. Pesticides. 
                  Flame retardants. "Forever chemicals."
                </p>
                <p>
                  The vast majority have never been tested for long-term safety. 
                  They're now ubiquitous—in our water, food, air, and bodies. 
                  This is not conjecture. This is peer-reviewed data from the 
                  CDC, EPA, and leading research institutions.
                </p>
              </div>

              <Link href="/science" className="inline-flex items-center gap-3 font-sans text-sm font-medium group">
                Read the full evidence base 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Toxin Categories - Grid with fixed alignment */}
      <section className="py-24 bg-secondary">
        <div className="section-container">
          <div className="mb-16 max-w-2xl">
            <p className="section-label mb-4">What We Measure</p>
            <h2>Four categories of environmental burden</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border-primary)]">
            {[
              { 
                title: "Heavy Metals", 
                examples: "Lead · Mercury · Cadmium · Arsenic",
                icon: "icon_blood-circulation"
              },
              { 
                title: "Microplastics", 
                examples: "PET · HDPE · Polystyrene · PVC",
                icon: "icon_capsule"
              },
              { 
                title: "PFAS", 
                examples: "PFOA · PFOS · GenX · PFNA",
                icon: "icon_digital-syringe"
              },
              { 
                title: "Endocrine Disruptors", 
                examples: "BPA · Phthalates · Parabens",
                icon: "icon_heartbeat-monitor"
              },
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-primary p-8 md:p-10 flex flex-col h-full"
              >
                {/* Icon - fixed height area */}
                <div className="h-16 mb-6">
                  <Image 
                    src={`/assets/${cat.icon}_Black.svg`}
                    alt={cat.title}
                    width={48}
                    height={48}
                    className="opacity-40"
                  />
                </div>
                {/* Title - grows to fill space */}
                <div className="flex-grow">
                  <h4 className="font-sans text-lg font-semibold">{cat.title}</h4>
                </div>
                {/* Examples - always at bottom */}
                <p className="font-mono text-xs text-tertiary pt-4">{cat.examples}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Better Blood Feature */}
      <section className="py-32 overflow-hidden">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <Image 
                src="/assets/better-blood-stacked-black.svg"
                alt="Better Blood +"
                width={320}
                height={160}
                className="mb-8"
              />
              <p className="text-secondary text-lg leading-relaxed mb-8">
                Our mission is singular: give people the tools to see what's 
                in their blood—and the pathways to change it.
              </p>
              <p className="text-secondary text-lg leading-relaxed">
                Better blood means better cellular function. Better energy. 
                Better longevity. Better life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 relative"
            >
              <div className="aspect-[16/10] relative">
                <Image 
                  src="/assets/freepik__muda-a-farda-para-off-white__36851.png"
                  alt="Clinical Care"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1.5 proxima-gradient" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-secondary">
        <div className="section-container">
          <div className="mb-16">
            <p className="section-label mb-4">Methodology</p>
            <h2>Three steps to optimization</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                num: "01",
                title: "Quantify",
                subtitle: "Diagnostics",
                desc: "Mass spectrometry analysis to identify and measure over 150 environmental toxins with clinical precision.",
                link: "/diagnostics"
              },
              {
                num: "02",
                title: "Mitigate",
                subtitle: "Lifestyle",
                desc: "Evidence-based protocols to reduce ongoing exposure through water, air, and product changes.",
                link: "/interventions"
              },
              {
                num: "03",
                title: "Eliminate",
                subtitle: "Therapeutics",
                desc: "Advanced blood filtration to actively remove accumulated lipophilic toxins from the body.",
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
                <span className="block text-8xl font-bold opacity-[0.08] leading-none mb-4 font-sans">{item.num}</span>
                <h3 className="mb-2">{item.title}</h3>
                <p className="section-label mb-6">{item.subtitle}</p>
                <p className="text-secondary mb-8">{item.desc}</p>
                <Link 
                  href={item.link} 
                  className="inline-flex items-center gap-2 font-sans text-sm font-medium text-tertiary hover:text-primary transition-colors group"
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
      <section className="py-32 relative overflow-hidden">
        {/* Background gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-px proxima-gradient opacity-30" />
        <div className="section-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-1 proxima-gradient mx-auto mb-8" />
            <p className="section-label mb-6">Assessment</p>
            <h2 className="mb-8">Estimate your exposure in <span className="text-gradient">2 minutes</span></h2>
            <p className="text-xl text-secondary mb-12 max-w-xl mx-auto">
              Answer a few lifestyle questions. Receive an estimated Toxin Load Score 
              based on your daily exposure vectors.
            </p>
            <Link href="/waitlist" className="btn-gradient inline-flex items-center gap-3">
              Begin Assessment <ArrowRight size={18} />
            </Link>
            <p className="font-mono text-xs text-tertiary mt-8">
              No signup required · Results delivered immediately
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px proxima-gradient-reverse opacity-30" />
      </section>
    </div>
  );
}
