"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const INTEREST_OPTIONS = [
  "Diagnostics Partnership (offer Proxima Health Baseline to patients)",
  "Inuspheresis Availability",
  "Clinical Research Collaboration",
];


export default function PractitionersPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [practice, setPractice] = useState("");
  const [email, setEmail] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [notes, setNotes] = useState("");

  const toggleInterest = (item: string) => {
    setInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!firstName || !email) return;
    setFormState("submitting");
    try {
      const res = await fetch("/api/practitioner-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, practice, email, specialty, interests, notes }),
      });
      setFormState(res.ok ? "success" : "error");
    } catch {
      setFormState("error");
    }
  };

  return (
    <div className="min-h-screen bg-primary text-primary">
      {/* Full Screen Hero */}
      <section className="relative min-h-screen flex items-end pb-12 lg:pb-24 pt-20 md:pt-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/hero-practitioner-patient.png"
            alt="Practitioners"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* White vertical line for hero section */}
        <div className="absolute top-[61px] right-10 w-px h-[calc(100%-61px)] bg-proxima-cream/60 hidden lg:block" />

        {/* Main Content */}
        <div className="relative z-10 w-full section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative pl-8"
          >
            <div className="absolute -top-10 left-0 text-proxima-cream text-2xl font-mono">+</div>
            <div className="relative inline-block">
              <div className="absolute -top-10 -right-8 text-proxima-cream text-2xl font-mono">+</div>
              <div className="flex flex-col items-start">
                <span className="inline-block bg-proxima-cream text-proxima-black px-3 py-1.5 md:px-4 md:py-2 text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-normal font-nb-international leading-tight">
                  Practitioner
                </span>
                <span className="inline-block bg-proxima-cream text-proxima-black px-3 py-1.5 md:px-4 md:py-2 text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-normal font-nb-international leading-tight">
                  Partnerships
                </span>
              </div>
              <div className="absolute -bottom-10 -right-8 text-proxima-cream text-2xl font-mono">+</div>
            </div>
            <div className="absolute -bottom-10 left-0 text-proxima-cream text-2xl font-mono">+</div>
          </motion.div>
        </div>

        <div className="hidden lg:block absolute bottom-16 right-20 z-10 text-left max-w-xs">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-proxima-cream text-base font-nb-international font-normal leading-relaxed">
              We provide advanced diagnostics and evidence-based interventions. You bring medical oversight and patient care. Together, we help patients better understand and treat environmental toxin exposure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Carlos Quote */}
      <section className="py-16 md:py-24 bg-proxima-cream">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="border-l-2 border-proxima-red pl-6 py-4">
              <p className="text-xl font-nb-international text-secondary mb-4">
                &quot;Much of what drives chronic disease has lived in the background — unseen, unmeasured, and untreated. Environmental toxins are one of those forces. Proxima was created to bring them into focus, and to give people the chance to act before illness becomes inevitable.&quot;
              </p>
              <p className="font-mono text-xs uppercase tracking-wider text-tertiary">
                — Carlos Schuster<br className="hidden md:inline" />
                Co-Founder &amp; CEO
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Inquiry Form */}
      <section className="py-24 bg-proxima-cream">
        <div className="section-container">
          <div className="max-w-2xl">
            <h2 className="mb-8 font-display text-2xl md:text-3xl font-bold">Partnership Inquiry</h2>
            {formState === "success" ? (
              <div className="py-12 text-center">
                <p className="font-display text-2xl font-bold mb-4">Thank you for your interest.</p>
                <p className="font-sans text-secondary">We&apos;ll be in touch within 48 hours to discuss partnership opportunities.</p>
              </div>
            ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-xs text-tertiary uppercase tracking-[0.2em] block mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full border border-border-primary px-4 py-3 bg-primary text-primary font-sans focus:outline-none focus:border-proxima-red"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-tertiary uppercase tracking-[0.2em] block mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full border border-border-primary px-4 py-3 bg-primary text-primary font-sans focus:outline-none focus:border-proxima-red"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-xs text-tertiary uppercase tracking-[0.2em] block mb-2">
                  Practice / Institution
                </label>
                <input
                  type="text"
                  value={practice}
                  onChange={(e) => setPractice(e.target.value)}
                  className="w-full border border-border-primary px-4 py-3 bg-primary text-primary font-sans focus:outline-none focus:border-proxima-red"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-tertiary uppercase tracking-[0.2em] block mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-border-primary px-4 py-3 bg-primary text-primary font-sans focus:outline-none focus:border-proxima-red"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-tertiary uppercase tracking-[0.2em] block mb-2">
                  Specialty
                </label>
                <select
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full border border-border-primary px-4 py-3 bg-primary text-primary font-sans focus:outline-none focus:border-proxima-red"
                >
                  <option value="">Select specialty...</option>
                  <option>Functional Medicine</option>
                  <option>Integrative Medicine</option>
                  <option>Internal Medicine</option>
                  <option>Longevity / Anti-Aging</option>
                  <option>Naturopathic Medicine</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-xs text-tertiary uppercase tracking-[0.2em] block mb-2">
                  Partnership Interest
                </label>
                <div className="space-y-3">
                  {INTEREST_OPTIONS.map((item, i) => (
                    <label key={i} className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={interests.includes(item)}
                        onChange={() => toggleInterest(item)}
                        className="mt-1 accent-proxima-red"
                      />
                      <span className="text-sm font-sans">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-mono text-xs text-tertiary uppercase tracking-[0.2em] block mb-2">
                  Additional Notes
                </label>
                <textarea
                  rows={4}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full border border-border-primary px-4 py-3 bg-primary text-primary font-sans focus:outline-none focus:border-proxima-red resize-none"
                />
              </div>

              {formState === "error" && (
                <p className="text-proxima-red text-sm font-mono">Something went wrong. Please try again.</p>
              )}

              <button className="btn-gradient w-full" disabled={formState === "submitting"}>
                {formState === "submitting" ? "Submitting..." : "Submit Inquiry"}
              </button>
            </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
