"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Carlos Schuster",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "/assets/carlos.png"
  },
  {
    name: "Michael Petegorsky",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "/assets/michael.png"
  }
];

const principles = [
  {
    num: "01",
    title: "Objectivity",
    subtitle: "Data Over Dogma",
    desc: "Data over dogma. Every claim we make is backed by peer-reviewed research and verifiable through clinical measurement."
  },
  {
    num: "02",
    title: "Transparency",
    subtitle: "Open Access",
    desc: "Open-access methodology. We share our research, protocols, and laboratory practices with the scientific community."
  },
  {
    num: "03",
    title: "Intervention",
    subtitle: "Action Required",
    desc: "Information without action is insufficient. We provide clear, validated pathways from diagnosis to optimization."
  }
];

const collaborators = ["Stanford", "MIT", "Oxford", "ETH Zurich", "Johns Hopkins"];

function CorePrinciplesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-proxima-cream">
      <div className="absolute top-0 right-10 w-px h-full bg-proxima-black/60 hidden lg:block" />

      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {principles.map((item, i) => {
            const isHovered = hoveredIndex === i;
            const isAnyHovered = hoveredIndex !== null;
            const isFaded = isAnyHovered && !isHovered;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pt-4 transition-all duration-300 cursor-pointer"
                style={{
                  opacity: isFaded ? 0.35 : 1
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div 
                  className="absolute top-0 left-0 right-0 h-[2px] proxima-gradient transition-opacity duration-300"
                  style={{ opacity: isHovered ? 1 : 0 }}
                />

                <span 
                  className="block text-7xl md:text-8xl leading-none mb-4 font-robit transition-colors duration-300"
                  style={{ color: isHovered ? 'rgb(28, 28, 28)' : 'rgba(28, 28, 28, 0.15)' }}
                >
                  {item.num}
                </span>

                <h3 className="inline-block bg-proxima-black text-proxima-cream px-3 py-1 mb-3 font-nb-international text-xl md:text-2xl">
                  {item.title}
                </h3>

                <p className="font-mono text-xs uppercase tracking-[0.2em] text-proxima-black/60 mb-4">
                  {item.subtitle}
                </p>

                <p className="text-proxima-black/80 font-nb-international text-sm md:text-base mb-6 leading-relaxed">
                  {item.desc}
                </p>

                <Link
                  href="/science"
                  className="inline-flex items-center gap-2 font-nb-international text-xs uppercase tracking-wider text-proxima-black hover:text-proxima-black transition-colors group"
                >
                  <span className="relative">
                    Learn more
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] proxima-gradient" />
                  </span>
                  <span className="text-proxima-red">+</span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

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
          <div className="mb-12 text-3xl md:text-4xl font-display font-bold border-l-4 border-proxima-red pl-8">
            <span className="bg-proxima-black text-proxima-cream px-3 py-1 box-decoration-clone leading-relaxed">
              Our mission is to optimize health through the early detection and removal of environmental toxins.
            </span>
          </div>
          <div className="text-secondary space-y-6 font-sans text-lg leading-relaxed">
            <p>
              Environmental toxins are in nearly everyone. 97% of Americans have PFAS in 
              their bloodstream, along with microplastics, heavy metals and hundreds of 
              other synthetic compounds. Yet medicine rarely measures them and almost 
              never addresses them.
            </p>
            <p>
              That&apos;s the gap we exist to close.
            </p>
            <p>
              We provide the diagnostic precision to see what&apos;s actually in your blood 
              and the proven interventions to remove what doesn&apos;t belong. Not after 
              symptoms appear. Before they start. Because the best treatment for chronic 
              disease is preventing it in the first place.
            </p>
            <p className="font-semibold text-primary">
              Early detection. Evidence based removal. Real prevention.
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
                <div className="w-full md:w-48 aspect-square relative shrink-0 bg-tertiary/10">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div>
                  <h3 className="mb-4 font-display">{member.name}</h3>
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

      {/* Core Principles - with hover states */}
      <CorePrinciplesSection />

      {/* Research Collaborations */}
      <section className="relative py-16 md:py-24 bg-proxima-cream">
        <div className="section-container">
          {/* Top row of + signs */}
          <div className="grid grid-cols-3 mb-8">
            <span className="text-proxima-black text-2xl font-mono">+</span>
            <span className="text-proxima-black text-2xl font-mono">+</span>
            <span></span>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Empty first column */}
            <div className="hidden md:block" />

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-start -space-y-0.5">
                <span className="inline-block bg-proxima-black text-proxima-cream px-3 py-0.5 text-xl md:text-2xl lg:text-3xl font-nb-international leading-none">
                  Research
                </span>
                <span className="inline-block bg-proxima-black text-proxima-cream px-3 py-0.5 text-xl md:text-2xl lg:text-3xl font-nb-international leading-none">
                  Collaborations
                </span>
              </div>
            </motion.div>

            {/* Collaborators list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
                {collaborators.map((inst, i) => (
                  <span key={i} className="font-nb-international text-lg text-proxima-black/60">
                    {inst}
                  </span>
                ))}
              </div>
              <p className="font-mono text-xs uppercase tracking-tight text-proxima-black/40">
                Advisory relationships. Not institutional endorsements.
              </p>
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
