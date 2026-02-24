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
    id: "exclusivity",
    number: "03",
    question: "Will there be territorial exclusivity?",
    answer: `We will not offer formal geographic exclusivity.

However, our economic model is aligned with practitioner success. A device can perform approximately 500 treatments per year at full utilization. We do not intend to oversaturate markets. Expansion will be based on utilization and clinical demand.`
  },
  {
    id: "loi",
    number: "04",
    question: "What does signing an LOI mean?",
    answer: `An LOI is not a binding contract and does not require a deposit. Contracts cannot be executed prior to FDA clearance.

The LOI signals mutual intent and places your clinic on the waitlist. Participants receive regulatory updates and early access to diagnostics and future products.`
  },
  {
    id: "availability",
    number: "05",
    question: "When will Inuspheresis™ be available in the U.S.?",
    answer: `FDA submission is underway. We anticipate U.S. clearance in 2027, pending approval.

We maintain an active dialogue with the FDA and are advised by experienced former regulatory leadership.`
  },
  {
    id: "early-access",
    number: "06",
    question: "Is early access possible prior to FDA clearance?",
    answer: `No.

Proxima is committed to full regulatory compliance. This technology is being developed as a long-term, evidence-driven platform and will not bypass U.S. regulatory standards.`
  },
  {
    id: "pricing",
    number: "07",
    question: "What is the anticipated pricing?",
    answer: `Preliminary projections (subject to change):
• Device: $50,000–$60,000
• Single-use filter kit: $2,000–$3,000 per treatment

Clinics typically project patient pricing in the $5,000–$6,000 range, consistent with lower-end TPE pricing in the U.S.

Long-term, our objective is cost reduction through scale and manufacturing efficiencies to improve accessibility.`
  },
  {
    id: "financing",
    number: "08",
    question: "Will financing or leasing be available?",
    answer: `Initial rollout will likely prioritize direct purchase. Financing and leasing options are expected to follow as adoption expands.`
  },
  {
    id: "how-treatment",
    number: "09",
    question: "How does the treatment work?",
    answer: `Blood is accessed peripherally and separated into plasma and cells.

The plasma passes through a second-stage membrane engineered to remove molecules larger than albumin. Filtered plasma is then returned to the patient. No donor plasma or albumin is required.

Essential components such as albumin, hormones, minerals and growth factors are preserved.`
  },
  {
    id: "what-remove",
    number: "10",
    question: "What does it remove?",
    answer: `On average, a single session reduces:
• ~50% of lipoproteins and immunoglobulins
• ~30–75% reduction of certain circulating toxicants (toxin-dependent)

Because many environmental toxicants are lipophilic and protein-bound, reducing carrier molecules significantly decreases circulating burden.

Ongoing research is evaluating longer-term tissue effects.`
  },
  {
    id: "protocol",
    number: "11",
    question: "What is the standard protocol?",
    answer: `Most patients receive:
• Day 1: Treatment
• Day 2: Rest
• Day 3: Treatment

More complex cases may require three sessions (Days 1, 3, and 5).

Annual maintenance protocols are under evaluation.`
  },
  {
    id: "duration",
    number: "12",
    question: "How long does treatment take?",
    answer: `Approximately 90–120 minutes, depending on plasma volume and access flow rate.`
  },
  {
    id: "safety",
    number: "13",
    question: "How safe is it?",
    answer: `In European use (>100,000 treatments), reported adverse events are <1%, typically mild and access-related.

No donor plasma is used, which reduces risks associated with replacement fluids seen in TPE.

Appropriate nursing experience (ER, ICU, nephrology) is strongly recommended.`
  },
  {
    id: "comparison",
    number: "14",
    question: "How does this compare to TPE, EBOO, chelation, or LDL apheresis?",
    answer: `TPE discards plasma and replaces it with donor fluid. Inuspheresis™ filters and returns the patient's own plasma.

EBOO exposes blood to ozone; it does not filter toxins and follows a different risk and regulatory profile.

Chelation primarily targets heavy metals.

LDL apheresis selectively removes LDL.

Inuspheresis™ removes molecules larger than albumin (~10 nm), capturing a broader range of carrier-bound toxicants.`
  },
  {
    id: "staffing",
    number: "15",
    question: "How many staff are required?",
    answer: `Typically one nurse per patient. One nurse may manage multiple patients depending on clinic workflow.`
  },
  {
    id: "training",
    number: "16",
    question: "What training is provided?",
    answer: `A five-day training program (centralized or onsite) covering:
• Apheresis fundamentals
• Device operation
• Supervised treatments

Certification is required. A licensed physician must be onsite. Certified nursing staff must operate the system.`
  },
  {
    id: "prerequisites",
    number: "17",
    question: "What are clinic prerequisites?",
    answer: `At minimum:
• Licensed physician onsite
• Qualified nursing staff

Additional site criteria will be shared prior to launch.`
  },
  {
    id: "insurance",
    number: "18",
    question: "Is this covered by insurance?",
    answer: `Initially, this will be cash-pay.

Longer-term, we plan to pursue reimbursement pathways by expanding existing CPT frameworks and generating the required clinical evidence.`
  },
  {
    id: "diagnostic-testing",
    number: "19",
    question: "Will you offer diagnostic testing?",
    answer: `Yes.

Pre- and post-treatment blood testing, as well as eluate analysis is planned.

Diagnostics will:
• Support patient education
• Strengthen clinical validation
• Generate publishable data
• Guide personalized protocols`
  },
  {
    id: "transparency",
    number: "20",
    question: "Why are you transparent about uncertainty?",
    answer: `Because credibility requires it.

We clearly distinguish between:
• What is established
• What is under investigation
• What requires further study

This approach builds durable trust and ensures Proxima remains science-first and evidence-driven.`
  }
];

const practitionerTabColors = (() => {
  const start = { r: 0xFF, g: 0x9E, b: 0x00 };
  const end = { r: 0xFF, g: 0xF3, b: 0xD6 };
  const steps = 20;
  return Array.from({ length: steps }, (_, i) => {
    const t = i / (steps - 1);
    const r = Math.round(start.r + (end.r - start.r) * t);
    const g = Math.round(start.g + (end.g - start.g) * t);
    const b = Math.round(start.b + (end.b - start.b) * t);
    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  });
})();

function PractitionerFAQSection() {
  const [activeTab, setActiveTab] = useState(0);
  const faq = practitionerFaqs[activeTab];

  return (
    <section className="bg-proxima-cream pt-16 md:pt-24 pb-16">
      <div className="section-container">
        {/* Duotang-style Tabs */}
        <div className="flex overflow-x-auto scrollbar-hide md:flex-wrap md:overflow-visible">
          {practitionerFaqs.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-3 py-2 font-mono text-[10px] md:text-xs uppercase tracking-tight border transition-colors shrink-0 ${
                activeTab === idx
                  ? "bg-proxima-black text-proxima-cream border-proxima-black"
                  : "bg-proxima-cream text-proxima-black border-proxima-black border-b-0"
              }`}
            >
              <span>{item.number}+</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="border border-proxima-black p-5 md:p-8 lg:p-12 transition-colors duration-500" style={{ backgroundColor: practitionerTabColors[activeTab] }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
            {/* Left Column - Number & Question */}
            <div className="lg:col-span-4">
              <span className="block font-robit text-5xl md:text-8xl lg:text-[100px] leading-none tracking-tight text-proxima-black mb-4">
                {faq.number}
              </span>

              <div className="flex flex-col items-start -space-y-0.5 mb-3">
                <span className="inline-block bg-proxima-black text-proxima-cream px-3 py-0.5 text-xl md:text-2xl lg:text-3xl font-nb-international leading-none">
                  FAQ
                </span>
              </div>

              <p className="font-mono text-xs uppercase tracking-tight text-proxima-black mb-6">
                For Practitioners
              </p>

              <p className="font-nb-international text-xl md:text-2xl leading-tight text-proxima-black">
                {faq.question}
              </p>
            </div>

            {/* Right Column - Answer */}
            <div className="lg:col-span-8 lg:border-l lg:border-proxima-black lg:pl-8">
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
          className="hidden lg:block relative z-10 lg:absolute lg:bottom-16 lg:right-20 lg:px-0 text-left"
        >
          {/* Body text */}
          <p className="text-proxima-cream text-sm md:text-base font-nb-international font-normal leading-relaxed">
            We provide advanced diagnostics and<br className="hidden md:inline" />
            evidence-based clinical protocols. You bring<br className="hidden md:inline" />
            medical oversight and patient care. Together,<br className="hidden md:inline" />
            we help patients better understand and treat<br className="hidden md:inline" />
            environmental toxin exposure.
          </p>
        </motion.div>
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

      {/* FAQ Section */}
      <PractitionerFAQSection />

      {/* Main Content */}
      <section className="py-24 bg-proxima-cream">
        <div className="section-container">
          <div className="max-w-2xl">
            {/* Form */}
            <div>
              <h2 className="mb-8 font-display text-2xl md:text-3xl font-bold">Partnership Inquiry</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

          </div>
        </div>
      </section>
    </div>
  );
}
