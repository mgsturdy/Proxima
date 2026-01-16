"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Dr. Jonathan Vance",
    role: "Co-Founder & Chief Scientist",
    bio: "Former Head of Environmental Toxicology at MIT. 15+ years researching the bioaccumulation of synthetic chemicals in human tissue.",
    image: "/assets/siralexfrompt_adult_male-presenting_figure_with_short_light_cur_c5431ccb-00b8-4bfd-8bfa-5aea84fd235b.png"
  },
  {
    name: "Sarah Chen",
    role: "Co-Founder & CEO",
    bio: "Serial biotech entrepreneur with three successful exits. Dedicated to translating cutting-edge research into accessible clinical applications.",
    image: "/assets/siralexfrompt_serene_woman_laying_in_a_modern_bed_center_of_ima_613d7696-613c-458b-9158-ca79733f01cf.png"
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
    <div className="min-h-screen pt-24">
      {/* Mission */}
      <header className="py-16 border-b border-proxima-black/10">
        <div className="section-container">
          <p className="section-label mb-4">Company</p>
          <h1 className="mb-8">About Proxima</h1>
        </div>
      </header>

      {/* Mission Statement */}
      <section className="py-24">
        <div className="section-narrow">
          <div className="pull-quote mb-12">
            To make the invisible impossible to ignore.
          </div>
          <div className="prose-editorial text-proxima-black/70">
            <p>
              Environmental health is the most significant overlooked variable in 
              modern medicine. For decades, we've focused on genetics and lifestyle 
              while ignoring the chemical environment we inhabit.
            </p>
            <p>
              Since 1950, over 140,000 synthetic chemicals have been introduced into 
              commerce. The vast majority have never been tested for long-term safety 
              in humans. They are now ubiquitous—in our water, air, food, and bodies.
            </p>
            <p>
              Proxima exists to bridge the gap between academic research and clinical 
              application. We are scientists, engineers, and practitioners dedicated 
              to quantifying environmental risk and providing validated intervention pathways.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="mb-16">
            <p className="section-label mb-4">Leadership</p>
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
                <div className="w-full md:w-48 aspect-square relative shrink-0 bg-proxima-black/5">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div>
                  <h3 className="mb-1">{member.name}</h3>
                  <p className="section-label mb-4">{member.role}</p>
                  <p className="text-proxima-black/60 text-sm mb-4">{member.bio}</p>
                  <div className="flex gap-4">
                    <Linkedin size={18} className="text-proxima-black/30 hover:text-proxima-black cursor-pointer transition-colors" />
                    <Mail size={18} className="text-proxima-black/30 hover:text-proxima-black cursor-pointer transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24">
        <div className="section-container">
          <div className="mb-16">
            <p className="section-label mb-4">Philosophy</p>
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
                <span className="font-mono text-5xl text-proxima-black/10">{principle.num}</span>
                <h3 className="mt-4 mb-4">{principle.title}</h3>
                <p className="text-proxima-black/60">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory */}
      <section className="py-24 bg-proxima-black text-proxima-offwhite">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="section-label text-proxima-offwhite/40 mb-4">Scientific Advisory Board</p>
            <h2 className="text-proxima-offwhite">Research Collaborations</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
            {["Stanford", "MIT", "Oxford", "ETH Zurich", "Johns Hopkins"].map((inst, i) => (
              <span key={i} className="font-sans text-2xl font-semibold text-proxima-offwhite/20">
                {inst}
              </span>
            ))}
          </div>
          
          <p className="font-mono text-xs text-proxima-offwhite/30 text-center mt-12">
            Advisory relationships. Not institutional endorsements.
          </p>
        </div>
      </section>

    </div>
  );
}
