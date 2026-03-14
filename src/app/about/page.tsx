"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Carlos Schuster",
    title: "Co-Founder & CEO",
    bio: "Carlos Schuster is Co-Founder and CEO of Proxima Health. His work is rooted in a personal experience: after his sister was diagnosed with cancer at a young age, clinicians suspected early toxic exposure may have played a role. That question, whether harmful exposures could be identified and reduced before disease develops, shaped his path to founding Proxima Health to focus on preventing chronic disease by measuring and reducing environmental burden at its source. Carlos earned degrees in materials science from Imperial College London and a PhD in tissue engineering from the University of Cambridge before building and scaling teams in early-stage growth environments.",
    image: "/assets/carlos.png"
  },
  {
    name: "Mike Petegorsky",
    title: "Co-Founder & COO",
    bio: "Michael's path to Proxima started when his wife was pregnant and he began researching non-obvious threats to his daughter's health. His research pointed toward environmental toxins, leading him to a harder question: if we can't fully prevent exposure, can we remove these toxins from our bodies? That inquiry led him to bringing clinically proven blood purification technology to the forefront of chronic disease prevention and treatment. Before Proxima, Mike led legal, communications, research and strategy at the leading provider of psychedelic medicine. He previously practiced as an intellectual property litigator at a top law firm.",
    image: "/assets/michael.png"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary text-primary">
      {/* Full Screen Hero */}
      <section className="relative min-h-screen flex items-end pb-16 lg:pb-24 pt-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/freepik__coloca-uma-expresso-mais-feliz-e-sorridente__36848.png"
            alt="About Proxima Health"
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
                  About Proxima
                </span>
                <span className="inline-block bg-proxima-cream text-proxima-black px-4 py-2 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal font-nb-international leading-tight">
                  Health
                </span>
              </div>
              {/* Bottom-right marker */}
              <div className="absolute -bottom-10 -right-8 text-proxima-cream text-2xl font-mono">+</div>
            </div>
            
            {/* Bottom-left corner marker */}
            <div className="absolute -bottom-10 left-0 text-proxima-cream text-2xl font-mono">+</div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24">
        <div className="section-narrow">
          <div className="mb-12 text-2xl md:text-3xl lg:text-4xl font-display font-bold border-l-4 border-proxima-red pl-6 md:pl-8">
            <span className="bg-proxima-black text-proxima-cream px-3 py-1 box-decoration-clone leading-relaxed">
              Our mission is to optimize health through the early detection and removal of environmental toxins.
            </span>
          </div>
          <div className="text-secondary space-y-6 font-sans text-base md:text-lg leading-relaxed">
            <p>
              Environmental toxins are in all of us. PFAS, microplastics, heavy metals and hundreds of other synthetic compounds have been found in our bloodstreams. Yet medicine rarely measures them and almost never addresses them.
            </p>
            <p>
              That&apos;s the gap we exist to close.
            </p>
            <p>
              We provide the diagnostic precision to see what&apos;s actually in your blood and proven interventions to remove what doesn&apos;t belong. Whether you&apos;re looking to get ahead of future risk or already dealing with the effects of long-term exposure, it&apos;s never too late to give your body the reset it has been fighting for.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-secondary">
        <div className="section-container">
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Founding Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8"
              >
                <div className="w-48 md:w-48 aspect-square relative shrink-0 bg-tertiary/10">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div>
                  <h3 className="mb-1 font-display">{member.name}</h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-tertiary mb-4">{member.title}</p>
                  <p className="text-secondary text-sm font-sans mb-4">{member.bio}</p>
                  <div className="flex gap-4">
                    <Linkedin size={18} className="text-tertiary hover:text-primary cursor-pointer transition-colors" />
                    <Mail size={18} className="text-tertiary hover:text-primary cursor-pointer transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
