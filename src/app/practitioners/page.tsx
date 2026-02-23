"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const practitionerFaqs = [
  {
    id: "what-is-proxima",
    number: "01",
    question: "What is Proxima Health?",
    answer: `Proxima Health is focused on reducing environmental and biologic burden through advanced blood filtration technology and diagnostics.

Our mission is to help patients live with less inflammatory strain and greater physiologic resilience, grounded in science, transparency and regulatory rigor.

We hold the exclusive U.S. license to bring Inuspheresis™ through FDA approval and into clinical practice.`
  },
  {
    id: "inus-relationship",
    number: "02",
    question: "How is Proxima related to INUS / Ayus?",
    answer: `Inuspheresis™ technology is developed by INUS in Europe.

Proxima Health holds a 20-year exclusive U.S. license to:
• Lead FDA approval
• Commercialize the system
• Provide practitioner training and support

We will serve as the exclusive U.S. distributor.`
  },
  {
    id: "loi",
    number: "03",
    question: "What does signing an LOI mean?",
    answer: `An LOI is not a binding contract and does not require a deposit. Contracts cannot be executed prior to FDA clearance.

The LOI signals mutual intent and places your clinic on the waitlist. Participants receive regulatory updates and early access to diagnostics and future products.`
  },
  {
    id: "availability",
    number: "04",
    question: "When will Inuspheresis™ be available?",
    answer: `FDA submission is underway. We anticipate U.S. clearance in 2027, pending approval.

We maintain an active dialogue with the FDA and are advised by experienced former regulatory leadership.

No early access is possible prior to FDA clearance. Proxima is committed to full regulatory compliance.`
  },
  {
    id: "pricing",
    number: "05",
    question: "What is the anticipated pricing?",
    answer: `Preliminary projections (subject to change):
• Device: $50,000–$60,000
• Single-use filter kit: $2,000–$3,000 per treatment

Clinics typically project patient pricing in the $5,000–$6,000 range, consistent with lower-end TPE pricing in the U.S.

Long-term, our objective is cost reduction through scale and manufacturing efficiencies to improve accessibility.`
  },
  {
    id: "treatment",
    number: "06",
    question: "How does the treatment work?",
    answer: `Blood is accessed peripherally and separated into plasma and cells.

The plasma passes through a second-stage membrane engineered to remove molecules larger than albumin. Filtered plasma is then returned to the patient. No donor plasma or albumin is required.

Essential components such as albumin, hormones, minerals and growth factors are preserved.

Treatment takes approximately 90–120 minutes, depending on plasma volume and access flow rate.`
  },
  {
    id: "protocol",
    number: "07",
    question: "What is the standard protocol?",
    answer: `Most patients receive:
• Day 1: Treatment
• Day 2: Rest
• Day 3: Treatment

More complex cases may require three sessions (Days 1, 3, and 5).

Annual maintenance protocols are under evaluation.`
  },
  {
    id: "safety",
    number: "08",
    question: "How safe is it?",
    answer: `In European use (>100,000 treatments), reported adverse events are <1%, typically mild and access-related.

No donor plasma is used, which reduces risks associated with replacement fluids seen in TPE.

Appropriate nursing experience (ER, ICU, nephrology) is strongly recommended.`
  },
  {
    id: "staff",
    number: "09",
    question: "What are the staffing requirements?",
    answer: `Typically one nurse per patient. One nurse may manage multiple patients depending on clinic workflow.

A five-day training program (centralized or onsite) covers:
• Apheresis fundamentals
• Device operation
• Supervised treatments

Certification is required. A licensed physician must be onsite. Certified nursing staff must operate the system.`
  },
  {
    id: "insurance",
    number: "10",
    question: "Is this covered by insurance?",
    answer: `Initially, this will be cash-pay.

Longer-term, we plan to pursue reimbursement pathways by expanding existing CPT frameworks and generating the required clinical evidence.`
  }
];

function PractitionerFAQSection() {
  const [activeTab, setActiveTab] = useState(0);
  const faq = practitionerFaqs[activeTab];

  return (
    <section className="bg-proxima-cream pt-16 md:pt-24 pb-16">
      <div className="section-container">
        {/* Duotang-style Tabs */}
        <div className="flex flex-wrap">
          {practitionerFaqs.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-3 py-2 font-mono text-[10px] uppercase tracking-tight border transition-colors ${
                activeTab === idx
                  ? "bg-proxima-black text-proxima-cream border-proxima-black"
                  : "bg-proxima-cream text-proxima-black border-proxima-black border-b-0"
              }`}
            >
              <span>{item.number}</span>
              <span className="text-[10px]">+</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="border border-proxima-black bg-[rgba(255,157,0,0.1)] p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="lg:col-span-4">
              <span className="block font-robit text-7xl md:text-8xl lg:text-[100px] leading-none tracking-tight text-proxima-black mb-4">
                {faq.number}
              </span>

              <div className="flex flex-col items-start -space-y-0.5 mb-3">
                <span className="inline-block bg-proxima-black text-proxima-cream px-3 py-0.5 text-xl md:text-2xl lg:text-3xl font-nb-international leading-none">
                  FAQ
                </span>
              </div>

              <p className="font-mono text-xs uppercase tracking-tight text-proxima-black mb-8">
                For Practitioners
              </p>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-8 lg:border-l lg:border-proxima-black lg:pl-8">
              <div className="mb-8">
                <p className="font-mono text-xs uppercase tracking-tight text-proxima-black mb-4">
                  Question
                </p>
                <p className="font-nb-international text-xl md:text-2xl leading-tight text-proxima-black">
                  {faq.question}
                </p>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-tight text-proxima-black mb-4">
                  + Answer
                </p>
                <div className="font-nb-international text-sm md:text-base leading-relaxed text-proxima-black whitespace-pre-line">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PractitionersPage() {
  return (
    <div className="min-h-screen bg-primary text-primary">
      {/* Full Screen Hero */}
      <section className="relative min-h-screen flex items-end pb-16 lg:pb-24 pt-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/freepik__the-patient-is-looking-to-the-doctor-and-smiling__36846.png"
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
                  Practitioner
                </span>
                <span className="inline-block bg-proxima-cream text-proxima-black px-4 py-2 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal font-nb-international leading-tight">
                  Partnerships
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
            We provide advanced diagnostics and<br />
            evidence-based clinical protocols. You bring<br />
            medical oversight and patient care. Together,<br />
            we help patients better understand and treat<br />
            environmental toxin exposure.
          </p>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <PractitionerFAQSection />

      {/* Main Content */}
      <section className="py-24 bg-proxima-cream">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="mb-8 font-display text-2xl md:text-3xl font-bold">Partnership Inquiry</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-xs text-tertiary uppercase tracking-[0.2em] block mb-2">
                      First Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full border border-border-primary px-4 py-3 bg-primary text-primary font-sans focus:outline-none focus:border-proxima-red" 
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-tertiary uppercase tracking-[0.2em] block mb-2">
                      Last Name
                    </label>
                    <input 
                      type="text" 
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
                    className="w-full border border-border-primary px-4 py-3 bg-primary text-primary font-sans focus:outline-none focus:border-proxima-red" 
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-tertiary uppercase tracking-[0.2em] block mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full border border-border-primary px-4 py-3 bg-primary text-primary font-sans focus:outline-none focus:border-proxima-red" 
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-tertiary uppercase tracking-[0.2em] block mb-2">
                    Specialty
                  </label>
                  <select className="w-full border border-border-primary px-4 py-3 bg-primary text-primary font-sans focus:outline-none focus:border-proxima-red">
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
                  <label className="font-mono text-xs text-tertiary uppercase tracking-[0.2em] block mb-2">
                    Partnership Interest
                  </label>
                  <div className="space-y-3">
                    {[
                      "Diagnostics Partnership (offer Baseline™ to patients)",
                      "Therapeutic Referrals (INUSpheresis availability)",
                      "Clinical Research Collaboration",
                    ].map((item, i) => (
                      <label key={i} className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" className="mt-1 accent-proxima-red" />
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
                    className="w-full border border-border-primary px-4 py-3 bg-primary text-primary font-sans focus:outline-none focus:border-proxima-red resize-none"
                  />
                </div>

                <button className="btn-gradient w-full">
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Quote */}
            <div className="lg:pl-8 flex items-center">
              <div className="border-l-2 border-proxima-red pl-6 py-4">
                <p className="text-xl font-nb-international text-secondary mb-4">
                  &quot;Much of what drives chronic disease has lived in the background — unseen, unmeasured, and untreated. Environmental toxins are one of those forces. Proxima was created to bring them into focus, and to give people the chance to act before illness becomes inevitable.&quot;
                </p>
                <p className="font-mono text-xs uppercase tracking-wider text-tertiary">
                  — Carlos Schuster<br />
                  Co-Founder & CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
