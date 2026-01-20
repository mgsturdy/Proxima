"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AlternativePage() {
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
            className="object-cover"
            priority
          />
          {/* Subtle gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-proxima-black/70 via-proxima-black/30 to-transparent" />
        </div>

        {/* Corner Markers */}
        <div className="absolute top-8 left-8 text-proxima-cream/50 text-xl font-light">+</div>
        <div className="absolute top-8 right-8 text-proxima-cream/50 text-xl font-light">+</div>
        <div className="absolute bottom-8 left-8 text-proxima-cream/50 text-xl font-light">+</div>
        <div className="absolute bottom-8 right-8 text-proxima-cream/50 text-xl font-light">+</div>

        {/* Vertical Side Text */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <span 
            className="text-proxima-cream/60 text-xs tracking-[0.4em] uppercase font-sans"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Proxima Health
          </span>
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <span 
            className="text-proxima-cream/60 text-xs tracking-[0.4em] uppercase font-sans"
            style={{ writingMode: 'vertical-rl' }}
          >
            Better Blood Better Life
          </span>
        </div>

        {/* Main Content */}
        <div className="relative z-10 section-container py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-12"
            >
              <Image src="/assets/icon_blood-circulation_OffWhite.svg" alt="Proxima" width={28} height={36} />
              <span className="text-proxima-cream font-sans text-2xl">
                <span className="font-bold">Proxima</span><span className="font-light">Health</span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-proxima-cream text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 font-sans"
            >
              Better blood.<br />
              Better life.
            </motion.h1>

            {/* Gradient Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 160 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="h-1 proxima-gradient mb-8"
            />

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-proxima-cream/80 text-xl md:text-2xl max-w-xl mb-12 font-sans font-light leading-relaxed"
            >
              Microplastics. PFAS. Heavy metals. We help you understand what's in your blood, then remove what doesn't belong.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link 
                href="/diagnostics" 
                className="bg-proxima-cream text-proxima-black px-10 py-5 font-sans font-bold text-sm tracking-wide hover:bg-white transition-colors inline-flex items-center gap-3"
              >
                FREE TOXIN ASSESSMENT <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Gradient Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 proxima-gradient" />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-proxima-black relative">
        <div className="absolute top-8 left-1/4 text-proxima-cream/20 text-lg">+</div>
        <div className="absolute top-8 right-1/4 text-proxima-cream/20 text-lg">+</div>
        <div className="absolute bottom-8 left-1/3 text-proxima-cream/20 text-lg">+</div>
        <div className="absolute bottom-8 right-1/3 text-proxima-cream/20 text-lg">+</div>

        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "97%", label: "of Americans have PFAS in their blood" },
              { stat: "287", label: "chemicals found in newborn cord blood" },
              { stat: "80%", label: "of Americans have microplastics" },
              { stat: "49%", label: "have heavy metals at median levels" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-proxima-cream font-sans mb-2">{item.stat}</div>
                <div className="text-proxima-cream/50 text-sm font-sans">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Image Section */}
      <section className="relative h-[80vh]">
        <Image
          src="/assets/siralexfrompt_serene_woman_laying_in_a_modern_bed_center_of_ima_613d7696-613c-458b-9158-ca79733f01cf.png"
          alt="Treatment"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-proxima-black via-transparent to-transparent" />
        
        {/* Corner Markers */}
        <div className="absolute top-8 left-8 text-proxima-cream/50 text-xl">+</div>
        <div className="absolute top-8 right-8 text-proxima-cream/50 text-xl">+</div>

        {/* Overlay Content */}
        <div className="absolute bottom-0 left-0 right-0 p-12 md:p-16">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <div className="inline-block bg-proxima-cream text-proxima-black px-6 py-4 mb-6">
                <span className="font-sans font-bold text-lg block">Predictable Sessions</span>
                <span className="font-sans font-bold text-lg">Documented Safety</span>
              </div>
              <p className="text-proxima-cream/90 font-sans text-xl leading-relaxed max-w-xl">
                For decades, therapeutic blood filtration has been used in European clinical settings. 
                Proxima Health is bringing this science to the United States.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Steps */}
      <section className="py-24 bg-proxima-black">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-proxima-cream text-4xl md:text-5xl font-bold font-sans mb-16 text-center"
          >
            Three steps to better health
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-proxima-cream/10">
            {[
              { num: "01", title: "Measure", desc: "Baseline blood test identifying 30+ environmental toxins with clinical precision." },
              { num: "02", title: "Optimize", desc: "Evidence-based protocols and lifestyle changes to reduce ongoing exposure." },
              { num: "03", title: "Eliminate", desc: "Advanced blood filtration to remove accumulated toxins from the body." }
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-proxima-black p-10 group"
              >
                <div className="text-proxima-orange text-sm font-mono mb-6">{step.num}</div>
                <h3 className="text-proxima-cream text-3xl font-bold mb-4 font-sans">{step.title}</h3>
                <p className="text-proxima-cream/60 font-sans text-lg leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient */}
      <section className="py-24 bg-gradient-to-r from-proxima-maroon via-proxima-red to-proxima-orange relative overflow-hidden">
        {/* Corner Markers */}
        <div className="absolute top-8 left-8 text-proxima-cream/40 text-xl">+</div>
        <div className="absolute top-8 right-8 text-proxima-cream/40 text-xl">+</div>
        <div className="absolute bottom-8 left-8 text-proxima-cream/40 text-xl">+</div>
        <div className="absolute bottom-8 right-8 text-proxima-cream/40 text-xl">+</div>

        <div className="section-container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-proxima-cream text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sans">
              Your blood tells a story.
            </h2>
            <p className="text-proxima-cream/80 text-xl mb-10 max-w-2xl mx-auto font-sans">
              Discover what's really in your bloodstream with our clinically validated environmental toxin panel.
            </p>
            <Link 
              href="/diagnostics" 
              className="bg-proxima-cream text-proxima-black px-10 py-5 font-sans font-bold text-sm tracking-wide hover:bg-white transition-colors inline-flex items-center gap-3"
            >
              ORDER YOUR TEST <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 bg-proxima-black border-t border-proxima-cream/10">
        <div className="section-container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Image src="/assets/icon_blood-circulation_OffWhite.svg" alt="Proxima" width={24} height={32} />
            <span className="text-proxima-cream font-sans text-xl">
              <span className="font-bold">Proxima</span><span className="font-light">Health</span>
            </span>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/science" className="text-proxima-cream/60 hover:text-proxima-cream font-sans text-sm transition-colors">Science</Link>
            <Link href="/diagnostics" className="text-proxima-cream/60 hover:text-proxima-cream font-sans text-sm transition-colors">Diagnostics</Link>
            <Link href="/interventions" className="text-proxima-cream/60 hover:text-proxima-cream font-sans text-sm transition-colors">Treatment</Link>
            <Link href="/practitioners" className="text-proxima-cream/60 hover:text-proxima-cream font-sans text-sm transition-colors">Practitioners</Link>
            <Link href="/about" className="text-proxima-cream/60 hover:text-proxima-cream font-sans text-sm transition-colors">About</Link>
          </div>
          <span className="text-proxima-cream/40 text-sm font-sans">Better Blood. Better Life.</span>
        </div>
      </section>
    </div>
  );
}
