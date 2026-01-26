'use client';

import { motion } from 'framer-motion';
import { Check, Clock, Zap, Settings, BarChart3, Headphones } from 'lucide-react';
import Image from 'next/image';

export default function ProposalPage() {
  const deliverables = [
    { icon: Settings, title: 'Site Revisions', description: 'Complete refinement of design, content, and functionality to match your vision' },
    { icon: Zap, title: 'Deployment', description: 'Production-ready deployment with custom domain, SSL, and optimized performance' },
    { icon: BarChart3, title: 'Analytics Setup', description: 'Full analytics integration to track visitor behavior, conversions, and engagement' },
    { icon: Headphones, title: 'CRM Integration', description: 'Backend CRM setup for lead capture, email flows, and customer management' },
  ];

  const timeline = [
    { week: 'Week 1-2', title: 'First Delivery', description: 'Deploy current site version to production. Integrate analytics tracking for visitor insights and conversion monitoring. Set up CRM backend for lead capture and email automation. Configure custom domain and SSL certificates.' },
    { week: 'Week 3', title: 'Revision Round 1', description: 'First round of refinements based on your feedback' },
    { week: 'Week 4', title: 'Revision Round 2', description: 'Final polish and sign-off ready' },
  ];

  return (
    <main className="min-h-screen bg-proxima-cream">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px]">
        <Image
          src="/assets/siralexfrompt_aerial_cinematic_shot_of_a_man_lying_on_a_sleek_f_8b60267f-f3ea-43f5-9bb5-6be046ea054f.png"
          alt="Proposal"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-proxima-black/70 via-proxima-black/50 to-proxima-black/80" />
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-proxima-cream/70 mb-6">
                Web Development Proposal
              </p>
              <h1 className="font-display text-5xl md:text-7xl text-proxima-cream mb-6 leading-[0.95]">
                <span className="inline-block bg-proxima-black px-3 py-1 whitespace-nowrap">Proxima Health</span>
              </h1>
              <p className="font-sans text-xl text-proxima-cream/90 max-w-xl">
                A complete digital presence built to convert visitors into patients and partners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-24 bg-proxima-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-proxima-cream/60 mb-4">
                Your Investment
              </p>
              <div className="mb-8">
                <span className="font-display text-7xl md:text-8xl text-proxima-cream">$10,000</span>
                <span className="font-mono text-proxima-cream/60 ml-4 uppercase tracking-wider">USD</span>
              </div>
              <p className="font-sans text-lg text-proxima-cream/80 mb-8">
                A flat fee that covers everything: revisions, deployment, analytics, and CRM setup. 
                No hidden costs. No hourly surprises. Just results.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-[#FF6B35] via-[#E91E63] to-[#4ECDC4]" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-proxima-cream/5 border border-proxima-cream/10 p-8 rounded-sm"
            >
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-proxima-cream/60 mb-6">
                Ongoing Support
              </p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display text-5xl text-proxima-cream">$60</span>
                <span className="font-mono text-proxima-cream/60 uppercase tracking-wider">/month</span>
              </div>
              <p className="font-sans text-proxima-cream/70 mb-6">
                Monthly maintenance to keep your site secure, updated, and performing at its best.
              </p>
              <ul className="space-y-3">
                {['Security updates', 'Content updates', 'Performance monitoring', 'Priority support'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-proxima-cream/80">
                    <Check size={18} className="text-[#4ECDC4]" />
                    <span className="font-sans">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary/60 mb-4 text-center">
              What's Included
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-proxima-black text-center">
              Everything You Need
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {deliverables.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-proxima-black/10 p-8 group hover:bg-proxima-black/5 transition-colors"
              >
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-proxima-black/10 rounded-sm">
                    <item.icon size={24} className="text-proxima-black" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-proxima-black mb-2">{item.title}</h3>
                    <p className="font-sans text-proxima-black/70">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-proxima-black">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-proxima-cream/60 mb-4 text-center">
              Timeline
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-proxima-cream text-center">
              4 Weeks to Launch
            </h2>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((phase, i) => (
              <motion.div
                key={phase.week}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-proxima-cream/5 border border-proxima-cream/10 p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="flex w-14 h-14 bg-proxima-cream rounded-sm items-center justify-center shrink-0">
                    <Clock size={22} className="text-proxima-black" />
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#4ECDC4] mb-2">
                      {phase.week}
                    </p>
                    <h3 className="font-display text-2xl text-proxima-cream mb-2">{phase.title}</h3>
                    <p className="font-sans text-proxima-cream/70">{phase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl mb-6 text-proxima-black text-center">
              Ready to Begin?
            </h2>
            <p className="font-sans text-lg text-primary/70 max-w-2xl mx-auto text-center">
              Let's build something exceptional together. Upon acceptance, 
              we'll begin immediately and have your first delivery within two weeks.
            </p>

            <div className="mt-16 pt-16 border-t border-primary/10 text-center">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary/40 mb-4 text-center">
                Proposal Valid For
              </p>
              <p className="font-display text-2xl text-primary/80 text-center">30 Days</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-mono text-sm uppercase tracking-wider text-primary/50 mb-2 text-center">
            Prepared with care for Proxima Health
          </p>
          <p className="font-mono text-xs uppercase tracking-wider text-primary/40 text-center">
            Prepared by{' '}
            <a 
              href="https://mattgoulet.ca" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary/70 transition-colors underline underline-offset-2"
            >
              mattgoulet.ca
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
