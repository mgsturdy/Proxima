"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
    desc: "Data over dogma. Every claim we make is backed by peer-reviewed research and verifiable through clinical measurement."
  },
  {
    num: "02",
    title: "Transparency",
    desc: "Open-access methodology. We share our research, protocols, and laboratory practices with the scientific community."
  },
  {
    num: "03",
    title: "Intervention",
    desc: "Information without action is insufficient. We provide clear, validated pathways from diagnosis to optimization."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 bg-primary text-primary">
      {/* Header */}
      <header className="py-16 border-b border-border-primary relative">
        <div className="section-container">
          <div className="w-16 h-1 proxima-gradient mb-6" />
          <h1 className="mb-8">Proxima <span className="text-gradient">Health</span></h1>
        </div>
      </header>

      {/* Mission Statement */}
      <section className="py-24">
        <div className="section-narrow">
          <div className="pull-quote mb-12 text-3xl md:text-4xl font-serif italic border-l-4 border-proxima-red pl-8">
            Our mission is to optimize health through the early detection and removal of environmental toxins.
          </div>
          <div className="prose-editorial text-secondary space-y-6">
            <p>
              Environmental toxins are in nearly everyone. 97% of Americans have PFAS in 
              their bloodstream, along with microplastics, heavy metals and hundreds of 
              other synthetic compounds. Yet medicine rarely measures them and almost 
              never addresses them.
            </p>
            <p>
              That's the gap we exist to close.
            </p>
            <p>
              We provide the diagnostic precision to see what's actually in your blood 
              and the proven interventions to remove what doesn't belong. Not after 
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
            <h2>Founding Team</h2>
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
                  <h3 className="mb-4">{member.name}</h3>
                  <p className="text-secondary text-sm mb-4">{member.bio}</p>
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

      {/* Principles */}
      <section className="py-24 bg-primary">
        <div className="section-container">
          <div className="mb-16">
            <h2>Core Principles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {principles.map((principle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="font-mono text-5xl text-primary/10">{principle.num}</span>
                <h3 className="mt-4 mb-4">{principle.title}</h3>
                <p className="text-secondary">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory */}
      <section className="py-24 bg-inverse text-inverse">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-inverse">Research Collaborations</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
            {["Stanford", "MIT", "Oxford", "ETH Zurich", "Johns Hopkins"].map((inst, i) => (
              <span key={i} className="font-sans text-2xl font-semibold text-inverse/20">
                {inst}
              </span>
            ))}
          </div>
          
          <p className="font-mono text-xs text-inverse/30 text-center mt-12">
            Advisory relationships. Not institutional endorsements.
          </p>
        </div>
      </section>

    </div>
  );
}
