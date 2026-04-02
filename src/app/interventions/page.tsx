"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function InterventionsPage() {
  return (
    <div className="min-h-screen bg-primary text-primary">
      {/* Full Screen Hero */}
      <section className="relative min-h-screen flex items-end pb-12 lg:pb-24 pt-20 md:pt-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/hero-medical-intervention.png"
            alt="Intervention"
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
            
            {/* Headline block */}
            <div className="relative inline-block">
              {/* Top-right marker */}
              <div className="absolute -top-10 -right-8 text-proxima-cream text-2xl font-mono">+</div>
              <div className="flex flex-col items-start">
                <span className="inline-block bg-proxima-cream text-proxima-black px-3 py-1.5 md:px-4 md:py-2 text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-normal font-nb-international leading-tight">
                  Inuspheresis
                </span>
              </div>
              {/* Bottom-right marker */}
              <div className="absolute -bottom-10 -right-8 text-proxima-cream text-2xl font-mono">+</div>
            </div>
            
            {/* Bottom-left corner marker */}
            <div className="absolute -bottom-10 left-0 text-proxima-cream text-2xl font-mono">+</div>
          </motion.div>
        </div>

        {/* Right Column - Body text */}
        <div className="hidden lg:block absolute bottom-16 right-20 z-10 text-left max-w-xs">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-proxima-cream text-base font-nb-international font-normal leading-relaxed">
              For decades, therapeutic blood filtration has been used in European clinical settings to help physicians reduce circulating environmental toxins and support the body&apos;s natural recovery processes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Inuspheresis Description */}
      <section className="py-24 bg-proxima-cream">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-proxima-black/80 font-nb-international text-base md:text-lg leading-relaxed">
              Inuspheresis is an advanced protocol designed to remove toxins from the body and treat chronic illness. The technology was developed in Europe and has been used to help tens of thousands of people. Proxima Health is exclusively bringing Inuspheresis to the United States.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Practitioner Partnerships */}
      <section className="py-24 bg-proxima-cream">
        <div className="section-container">
          {/* Top row of + signs */}
          <div className="grid grid-cols-3 mb-8">
            <span className="text-proxima-black text-2xl font-mono">+</span>
            <span className="text-proxima-black text-2xl font-mono">+</span>
            <span className="text-proxima-black text-2xl font-mono">+</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="flex flex-col items-start -space-y-0.5">
                <span className="inline-block bg-proxima-black text-proxima-cream px-2 py-0.5 md:px-3 text-lg md:text-2xl lg:text-3xl font-nb-international leading-none">
                  Practitioner
                </span>
                <span className="inline-block bg-proxima-black text-proxima-cream px-2 py-0.5 md:px-3 text-lg md:text-2xl lg:text-3xl font-nb-international leading-none">
                  Partnerships
                </span>
              </div>
            </motion.div>

            {/* Supporting copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <p className="text-proxima-black/80 font-nb-international text-sm md:text-base leading-relaxed">
                Interested in bringing Inuspheresis to your practice? Contact us to learn more about certification, implementation, and how to join the practitioner waitlist.
              </p>
            </motion.div>

            {/* CTA */}
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
                  Practitioner Partnerships
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
    </div>
  );
}
