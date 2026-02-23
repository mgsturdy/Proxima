"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function InterventionsPage() {
  return (
    <div className="min-h-screen bg-primary text-primary">
      {/* Full Screen Hero */}
      <section className="relative min-h-screen flex items-end pb-16 lg:pb-24 pt-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/freepik__-metadata-confidencescore-high-imagetype-photograp__36853.png"
            alt="Treatment"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* White vertical line for hero section */}
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
                  INUSpheresis®
                </span>
              </div>
              {/* Bottom-right marker */}
              <div className="absolute -bottom-10 -right-8 text-proxima-cream text-2xl font-mono">+</div>
            </div>
            
            {/* Bottom-left corner marker */}
            <div className="absolute -bottom-10 left-0 text-proxima-cream text-2xl font-mono">+</div>
          </motion.div>
        </div>

        {/* Right Column - Body text - positioned 40px left of vertical line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 mt-12 px-6 lg:absolute lg:bottom-16 lg:right-20 lg:mt-0 lg:px-0 text-left"
        >
          {/* Body text */}
          <p className="text-proxima-cream text-sm md:text-base font-nb-international font-normal leading-relaxed">
            For decades, therapeutic blood filtration<br />
            has been used in European clinical settings<br />
            to help physicians reduce circulating<br />
            environmental toxins and support the body&apos;s<br />
            natural recovery processes.
          </p>
        </motion.div>
      </section>

      {/* Therapeutic Filtration Content */}
      <section className="py-24 bg-proxima-cream">
        <div className="section-container">
          {/* Top row of + signs */}
          <div className="grid grid-cols-3 mb-8">
            <span className="text-proxima-black text-2xl font-mono">+</span>
            <span className="text-proxima-black text-2xl font-mono">+</span>
            <span className="text-proxima-black text-2xl font-mono">+</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Column 1 - Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-start -space-y-0.5 mb-6">
                <span className="inline-block bg-proxima-black text-proxima-cream px-3 py-0.5 text-xl md:text-2xl lg:text-3xl font-nb-international leading-none">
                  Therapeutic
                </span>
                <span className="inline-block bg-proxima-black text-proxima-cream px-3 py-0.5 text-xl md:text-2xl lg:text-3xl font-nb-international leading-none">
                  Blood Filtration
                </span>
              </div>
              <p className="font-mono text-xs uppercase tracking-tight text-proxima-black/60">
                Coming 2027
              </p>
            </motion.div>

            {/* Column 2 - Main content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-proxima-black/80 font-nb-international text-sm md:text-base leading-relaxed mb-6">
                Proxima Health is bringing this science to<br />
                the United States carefully, responsibly<br />
                and grounded in evidence. Our work is<br />
                underway. Availability is expected in 2027.
              </p>
            </motion.div>

            {/* Column 3 - CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <Link
                href="/practitioners"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-proxima-black hover:text-proxima-black transition-colors"
              >
                <span className="relative">
                  Practitioner partnerships
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
            <span className="text-proxima-black text-2xl font-mono">+</span>
          </div>
        </div>
      </section>

      {/* CTA Section - matching Estimate Your Toxin style */}
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
                  Intervention starts
                </span>
                <span className="inline-block bg-proxima-black text-proxima-cream px-3 py-0.5 text-xl md:text-2xl lg:text-3xl font-nb-international leading-none">
                  with measurement
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
                Before implementing any intervention<br />
                protocol, establish your baseline toxin<br />
                levels through clinical diagnostics.
              </p>

              {/* Learn more link with + and red gradient underline */}
              <Link
                href="/diagnostics"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-proxima-black hover:text-proxima-black transition-colors"
              >
                <span className="relative">
                  Explore Diagnostics
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
