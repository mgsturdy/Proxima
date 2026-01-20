"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero - Cinematic Split */}
      <section className="min-h-screen relative flex pt-20">
        {/* Left - Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Gradient accent */}
            <div className="w-24 h-1.5 proxima-gradient mb-12" />
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-8 tracking-tight">
              Better blood.<br />
              <span className="text-gradient">Better life.</span>
            </h1>
            
            <p className="text-xl md:text-2xl max-w-lg leading-relaxed mb-12 text-secondary">
              Microplastics. PFAS. Heavy metals. We help you understand what's in your blood, then remove what doesn't belong.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/waitlist" className="btn-gradient inline-flex items-center gap-3">
                FREE TOXIN ASSESSMENT <ArrowRight size={18} />
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
        <div className="lg:hidden absolute inset-0 top-20 -z-10">
          <Image 
            src="/assets/freepik__f4b551c0e94b4cecbc46024fad0f4b60assistant-2-img1-t__36844.png"
            alt=""
            fill
            className="object-cover opacity-20"
          />
        </div>
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
              <span className="absolute -top-8 -left-4 text-2xl font-sans font-light" style={{ color: '#BA000E' }}>+</span>
              <span className="absolute -top-8 -right-4 text-2xl font-sans font-light" style={{ color: '#FE091B' }}>+</span>
              <span className="absolute -bottom-8 -left-4 text-2xl font-sans font-light" style={{ color: '#FF9D00' }}>+</span>
              <span className="absolute -bottom-8 -right-4 text-2xl font-sans font-light" style={{ color: '#FFFBEE' }}>+</span>
              
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
                  
                  <span className="block text-5xl md:text-6xl lg:text-7xl font-bold text-proxima-offwhite leading-none font-sans mb-6">
                    {item.stat}
                  </span>
                  <p className="text-proxima-offwhite/70 text-base max-w-xs mx-auto font-serif leading-relaxed">
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
              <p className="section-label mb-4">The Invisible Crisis</p>
              <h2 className="mb-8">We are the first generation to carry environmental toxins in our blood from birth.</h2>
              
              <div className="prose-editorial mb-12">
                <p>
                  Since the 1950s, over 140,000 synthetic compounds have entered our world 
                  and our bloodstream. From microplastics to "forever chemicals," these 
                  substances were never meant to be part of our biology.
                </p>
                <p>
                  We believe you deserve a clean slate. Proxima Health provides the rigorous, 
                  peer-reviewed science to identify these toxins and the proven technology to 
                  remove them. We don't just believe in better days ahead; we have the science 
                  to make them happen.
                </p>
              </div>

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
            <p className="section-label text-proxima-offwhite/40 mb-4">Methodology</p>
            <h2 className="text-proxima-offwhite">Three Steps to Better Health</h2>
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
                <span className="block text-8xl font-bold text-proxima-offwhite/10 leading-none mb-4 font-sans">{item.num}</span>
                <h3 className="mb-2 text-proxima-offwhite">{item.title}</h3>
                <p className="section-label text-proxima-offwhite/40 mb-6">{item.subtitle}</p>
                <p className="text-proxima-offwhite/70 mb-8">{item.desc}</p>
                <Link 
                  href={item.link} 
                  className="inline-flex items-center gap-2 font-sans text-sm font-medium text-proxima-offwhite/50 hover:text-proxima-offwhite transition-colors group"
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
            <h2 className="mb-8">Estimate your toxin exposure in <span className="text-gradient">two minutes</span></h2>
            <p className="text-xl text-secondary mb-12 max-w-xl mx-auto">
              Answer a few lifestyle questions. Receive an estimated Toxin Load Score 
              based on your daily exposure.
            </p>
            <Link href="/waitlist" className="btn-gradient inline-flex items-center gap-3">
              Begin Assessment <ArrowRight size={18} />
            </Link>
            <p className="font-mono text-xs text-tertiary mt-8 text-center mx-auto">
              No signup required · Results delivered immediately
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px proxima-gradient-reverse opacity-30" />
      </section>
    </div>
  );
}
