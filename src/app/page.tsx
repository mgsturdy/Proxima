"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-proxima-black">
      {/* Full Screen Hero */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/siralexfrompt_adult_male-presenting_figure_with_short_light_cur_c5431ccb-00b8-4bfd-8bfa-5aea84fd235b.png"
            alt="Proxima Health"
            fill
            className="object-cover object-left"
            priority
          />
          {/* Subtle gradient overlay for text readability - darkens right side */}
          <div className="absolute inset-0 bg-gradient-to-l from-proxima-black/80 via-proxima-black/40 to-transparent" />
        </div>

        {/* Corner Markers */}
        <div className="absolute top-8 left-8 text-proxima-cream/50 text-xl font-light font-mono">+</div>
        <div className="absolute top-8 right-8 text-proxima-cream/50 text-xl font-light font-mono">+</div>
        <div className="absolute bottom-8 left-8 text-proxima-cream/50 text-xl font-light font-mono">+</div>
        <div className="absolute bottom-8 right-8 text-proxima-cream/50 text-xl font-light font-mono">+</div>

        {/* Vertical Side Text - DM Mono uppercase */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <span 
            className="text-proxima-cream/60 text-xs tracking-[0.4em] uppercase font-mono"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Proxima Health
          </span>
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <span 
            className="text-proxima-cream/60 text-xs tracking-[0.4em] uppercase font-mono"
            style={{ writingMode: 'vertical-rl' }}
          >
            Better Blood Better Life
          </span>
        </div>

        {/* Main Content - Right aligned */}
        <div className="relative z-10 w-full py-32 flex justify-end pr-8 md:pr-16 lg:pr-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg lg:max-w-2xl text-right"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-12 justify-end"
            >
              <Image 
                src="/assets/Main_logo_OffWhite.svg" 
                alt="Proxima Health" 
                width={200} 
                height={40}
                className="h-10 w-auto"
              />
            </motion.div>

            {/* Main Headline - Darker Grotesque */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8 flex flex-col items-end gap-3"
            >
              <span className="inline-block bg-proxima-black text-proxima-cream px-4 py-2 text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-none whitespace-nowrap">
                Better blood.
              </span>
              <span className="inline-block bg-proxima-black text-proxima-cream px-4 py-2 text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-none whitespace-nowrap">
                Better life.
              </span>
            </motion.div>

            {/* Gradient Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 160 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="h-1 proxima-gradient mb-8 ml-auto"
            />

            {/* Subheadline - DM Mono uppercase */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-proxima-cream/80 text-sm md:text-base mb-12 font-mono uppercase tracking-wider leading-relaxed ml-auto"
            >
              Microplastics. PFAS. Heavy metals.<br /><br />
              We help you understand what&apos;s in your blood,<br />
              then remove what doesn&apos;t belong.
            </motion.p>

            {/* CTA Button - DM Mono uppercase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-end"
            >
              <Link 
                href="/diagnostics" 
                className="bg-proxima-cream text-proxima-black px-10 py-5 font-mono font-medium text-sm tracking-wider uppercase hover:bg-white transition-colors inline-flex items-center gap-3"
              >
                Free Toxin Assessment <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Gradient Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 proxima-gradient" />
      </section>

      {/* Stats Section */}
      <section className="relative overflow-hidden">
        {/* Gradient background bar at top */}
        <div className="h-2 proxima-gradient" />
        
        <div className="bg-proxima-black py-28 relative">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          
          <div className="section-container relative">
            <div className="relative">
              {/* Decorative + signs in corners of the grid */}
              <span className="absolute -top-8 -left-4 text-2xl font-mono font-light" style={{ color: '#BA000E' }}>+</span>
              <span className="absolute -top-8 -right-4 text-2xl font-mono font-light" style={{ color: '#FE091B' }}>+</span>
              <span className="absolute -bottom-8 -left-4 text-2xl font-mono font-light" style={{ color: '#FF9D00' }}>+</span>
              <span className="absolute -bottom-8 -right-4 text-2xl font-mono font-light" style={{ color: '#FFFBEE' }}>+</span>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
              {[
                { 
                  stat: "97%", 
                  desc: "of Americans have detectable PFAS (forever chemicals) in their bloodstream",
                  accent: "#BA000E"
                },
                { 
                  stat: "287", 
                  desc: "industrial chemicals found in newborn umbilical cord blood",
                  accent: "#FE091B"
                },
                { 
                  stat: "80%", 
                  desc: "of Americans have detectable microplastics in their bloodstream",
                  accent: "#FF9D00"
                },
                { 
                  stat: "49%", 
                  desc: "of Americans have lead, cadmium, mercury and arsenic at or above median levels in their blood",
                  accent: "#FFFBEE"
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="text-center relative group"
                >
                  {/* Accent line */}
                  <div 
                    className="w-12 h-1 mx-auto mb-8 transition-all duration-300 group-hover:w-20"
                    style={{ backgroundColor: item.accent }}
                  />
                  
                  {/* Stat number - Darker Grotesque */}
                  <span className="block text-5xl md:text-6xl lg:text-7xl font-bold text-proxima-cream leading-none font-display mb-6">
                    {item.stat}
                  </span>
                  {/* Description - Archivo */}
                  <p className="text-proxima-cream/70 text-base max-w-xs mx-auto font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Gradient background bar at bottom */}
        <div className="h-2 proxima-gradient-reverse" />
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
              {/* Section label - DM Mono uppercase */}
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-proxima-black/40 mb-4">The Invisible Crisis</p>
              {/* Heading - Darker Grotesque with black bg */}
              <h2 className="mb-8 font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="bg-proxima-black text-proxima-cream px-3 py-1 box-decoration-clone leading-relaxed">
                  We are the first generation to carry environmental toxins in our blood from birth.
                </span>
              </h2>
              
              {/* Body text - Archivo */}
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

              {/* Button - DM Mono uppercase */}
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
            {/* Section label - DM Mono uppercase */}
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-proxima-cream/40 mb-4">Methodology</p>
            {/* Heading - Darker Grotesque with cream bg */}
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
                {/* Number - Darker Grotesque */}
                <span className="block text-8xl font-bold text-proxima-cream/10 leading-none mb-4 font-display">{item.num}</span>
                {/* Title - Darker Grotesque */}
                <h3 className="mb-2 text-proxima-cream font-display">{item.title}</h3>
                {/* Subtitle - DM Mono uppercase */}
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-proxima-cream/40 mb-6">{item.subtitle}</p>
                {/* Description - Archivo */}
                <p className="text-proxima-cream/70 font-sans mb-8">{item.desc}</p>
                {/* Link - DM Mono */}
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
        {/* Background gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-px proxima-gradient opacity-30" />
        <div className="section-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-1 proxima-gradient mx-auto mb-8" />
            {/* Heading - Darker Grotesque with black bg */}
            <h2 className="mb-8 font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight inline-block">
              <span className="bg-proxima-black text-proxima-cream px-4 py-2">
                Estimate your toxin exposure in two minutes
              </span>
            </h2>
            {/* Body - Archivo */}
            <p className="text-xl text-proxima-black/60 font-sans mb-12 max-w-xl mx-auto">
              Answer a few lifestyle questions. Receive an estimated Toxin Load Score 
              based on your daily exposure.
            </p>
            {/* Button - DM Mono uppercase */}
            <Link href="/waitlist" className="btn-gradient inline-flex items-center gap-3">
              Begin Assessment <ArrowRight size={18} />
            </Link>
            {/* Small text - DM Mono */}
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
