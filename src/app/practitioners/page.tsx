"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PractitionersPage() {
  const benefits = [
    {
      title: "Quantified Data",
      desc: "Mass spectrometry data that provides objective biomarkers for treatment planning and outcome tracking.",
      icon: "/assets/icon_heartbeat-monitor_Black.svg"
    },
    {
      title: "Clinical Resources",
      desc: "Access to our repository of peer-reviewed research, protocols, and continuing education materials.",
      icon: "/assets/icon_blood-circulation_Black.svg"
    },
    {
      title: "Patient Pipeline",
      desc: "Referrals from patients seeking medical oversight for their environmental health optimization.",
      icon: "/assets/icon_digital-heart_Black.svg"
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-primary text-primary">
      {/* Header */}
      <header className="py-16 border-b border-border-primary relative">
        <div className="absolute top-0 left-0 right-0 h-1 proxima-gradient" />
        <div className="section-container">
          <div className="w-16 h-1 proxima-gradient mb-6" />
          <p className="section-label mb-4">B2B Partnership</p>
          <h1 className="mb-6">For <span className="text-gradient">Practitioners</span></h1>
          <p className="text-xl text-secondary max-w-2xl leading-relaxed">
            We provide the diagnostics and clinical protocols. You provide the 
            medical oversight and patient relationships. Together, we advance 
            environmental medicine.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="mb-8">Partnership Inquiry</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-xs text-tertiary uppercase tracking-wider block mb-2">
                      First Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full border border-border-primary px-4 py-3 bg-primary text-primary focus:outline-none focus:border-proxima-red" 
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-tertiary uppercase tracking-wider block mb-2">
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full border border-border-primary px-4 py-3 bg-primary text-primary focus:outline-none focus:border-proxima-red" 
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-tertiary uppercase tracking-wider block mb-2">
                    Practice / Institution
                  </label>
                  <input 
                    type="text" 
                    className="w-full border border-border-primary px-4 py-3 bg-primary text-primary focus:outline-none focus:border-proxima-red" 
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-tertiary uppercase tracking-wider block mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full border border-border-primary px-4 py-3 bg-primary text-primary focus:outline-none focus:border-proxima-red" 
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-tertiary uppercase tracking-wider block mb-2">
                    Specialty
                  </label>
                  <select className="w-full border border-border-primary px-4 py-3 bg-primary text-primary focus:outline-none focus:border-proxima-red">
                    <option>Select specialty...</option>
                    <option>Functional Medicine</option>
                    <option>Integrative Medicine</option>
                    <option>Internal Medicine</option>
                    <option>Longevity / Anti-Aging</option>
                    <option>Naturopathic Medicine</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono text-xs text-tertiary uppercase tracking-wider block mb-2">
                    Partnership Interest
                  </label>
                  <div className="space-y-3">
                    {[
                      "Diagnostics Partnership (offer Baseline™ to patients)",
                      "Therapeutic Referrals (INUSpheresis availability)",
                      "Clinical Research Collaboration",
                      "Medical Advisory Board",
                    ].map((item, i) => (
                      <label key={i} className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" className="mt-1 accent-proxima-red" />
                        <span className="text-sm">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-tertiary uppercase tracking-wider block mb-2">
                    Additional Notes
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full border border-border-primary px-4 py-3 bg-primary text-primary focus:outline-none focus:border-proxima-red resize-none"
                  />
                </div>

                <button className="btn-gradient w-full">
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Benefits */}
            <div className="lg:pl-8">
              <p className="section-label mb-8">Partnership Benefits</p>
              
              <div className="space-y-8 mb-12">
                {benefits.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6"
                  >
                    <Image src={item.icon} alt="" width={32} height={32} className="opacity-30 shrink-0" />
                    <div>
                      <h4 className="font-sans font-medium mb-2">{item.title}</h4>
                      <p className="text-secondary text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="border-l-2 border-proxima-red pl-6 py-4">
                <p className="text-xl font-serif italic text-secondary mb-4">
                  "Environmental diagnostics is the next frontier of preventive 
                  medicine. We finally have tools to measure what we've long suspected."
                </p>
                <p className="font-mono text-xs text-tertiary">
                  — Dr. Elena Rostova, MD<br />
                  Founding Medical Advisor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
