import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research & Insights | Proxima Health",
  description:
    "Evidence-based articles on environmental toxins, PFAS, microplastics, heavy metals, and how to protect your health. From the Proxima Health research team.",
};

const posts = [
  { slug: "n-hexane-exposure-symptoms", title: "n-Hexane Exposure Symptoms: What to Watch For", date: "August 13, 2026", category: "Industrial Chemicals" },
  { slug: "cadmium-poisoning-symptoms", title: "Cadmium Poisoning Symptoms: What to Watch For", date: "August 11, 2026", category: "Heavy Metals" },
  { slug: "phthalates-and-fertility", title: "Phthalates and Fertility: What the Research Shows", date: "August 6, 2026", category: "Endocrine Disruptors" },
  { slug: "lead-poisoning-symptoms-in-adults", title: "Lead Poisoning Symptoms in Adults", date: "August 4, 2026", category: "Heavy Metals" },
  { slug: "naphthalene-exposure-symptoms", title: "Naphthalene Exposure Symptoms: What to Know", date: "July 30, 2026", category: "Industrial Chemicals" },
  { slug: "formaldehyde-exposure-symptoms", title: "Formaldehyde Exposure Symptoms: What to Know", date: "July 28, 2026", category: "Industrial Chemicals" },
  { slug: "microplastics-in-the-body-inflammation", title: "Microplastics in the Body: Why Inflammation Matters", date: "July 23, 2026", category: "Microplastics" },
  { slug: "pfas-and-autoimmune-disease-testing-misses", title: "PFAS and Autoimmune Disease: What Testing Misses", date: "July 21, 2026", category: "Diagnostics" },
  { slug: "perchloroethylene-exposure-symptoms", title: "Perchloroethylene Exposure Symptoms: What to Know", date: "July 16, 2026", category: "Industrial Chemicals" },
  { slug: "benzene-exposure-at-home", title: "Benzene Exposure at Home: Hidden Sources and Risks", date: "July 14, 2026", category: "Industrial Chemicals" },
  { slug: "microplastics-and-fertility", title: "Microplastics and Fertility: What the Research Shows", date: "July 9, 2026", category: "Microplastics" },
  { slug: "ethylbenzene-exposure-symptoms", title: "Ethylbenzene Exposure Symptoms: What to Know", date: "July 7, 2026", category: "Industrial Chemicals" },
  { slug: "pfas-and-liver-disease", title: "PFAS and Liver Disease: What Testing Misses", date: "July 2, 2026", category: "Diagnostics" },
  { slug: "pfas-and-kidney-disease", title: "PFAS and Kidney Disease: What Testing Misses", date: "June 30, 2026", category: "PFAS" },
  { slug: "pfas-and-cholesterol", title: "PFAS and Cholesterol: What Your Lipid Panel Misses", date: "June 25, 2026", category: "Diagnostics" },
  { slug: "pfas-immune-system", title: "PFAS and the Immune System: What the Research Shows", date: "June 23, 2026", category: "PFAS" },
  { slug: "cadmium-toxicity", title: "Cadmium Toxicity: Signs, Sources, and Testing", date: "June 18, 2026", category: "Heavy Metals" },
  { slug: "mold-toxicity-testing", title: "Mold Toxicity Testing: What Actually Helps", date: "June 16, 2026", category: "Diagnostics" },
  { slug: "arsenic-exposure-symptoms", title: "Arsenic Exposure Symptoms: What to Watch For", date: "June 11, 2026", category: "Heavy Metals" },
  { slug: "pfas-and-fertility", title: "PFAS and Fertility: What the Research Shows", date: "June 9, 2026", category: "PFAS" },
  { slug: "dioxin-exposure-symptoms", title: "Dioxin Exposure Symptoms: Early Signs and Long-Term Risks", date: "June 4, 2026", category: "Industrial Chemicals" },
  { slug: "hexavalent-chromium-exposure-symptoms", title: "Hexavalent Chromium Exposure Symptoms: What to Know", date: "June 2, 2026", category: "Industrial Chemicals" },
  { slug: "nickel-exposure-symptoms", title: "Nickel Exposure Symptoms: Skin, Lungs, and Heart", date: "May 28, 2026", category: "Industrial Chemicals" },
  { slug: "mycotoxin-testing", title: "Mycotoxin Testing: What the Results Actually Mean", date: "May 26, 2026", category: "Mold" },
  { slug: "pfas-thyroid-function", title: "PFAS and Thyroid Function: What the Research Shows", date: "May 21, 2026", category: "PFAS" },
  { slug: "manganese-toxicity-symptoms", title: "Manganese Toxicity Symptoms: What to Watch For", date: "May 19, 2026", category: "Heavy Metals" },
  { slug: "toluene-exposure-symptoms", title: "Toluene Exposure Symptoms: What to Watch For", date: "May 14, 2026", category: "Industrial Chemicals" },
  { slug: "methylene-chloride-exposure-symptoms", title: "Methylene Chloride Exposure Symptoms: What They Mean", date: "May 12, 2026", category: "Industrial Chemicals" },
  { slug: "manganese-exposure-symptoms", title: "Manganese Exposure Symptoms: What to Watch For", date: "May 7, 2026", category: "Heavy Metals" },
  { slug: "xylene-exposure-symptoms", title: "Xylene Exposure Symptoms: What They Mean", date: "May 5, 2026", category: "Industrial Chemicals" },
  { slug: "styrene-exposure-symptoms", title: "Styrene Exposure Symptoms: What They Mean", date: "Apr 30, 2026", category: "Industrial Chemicals" },
  { slug: "radon-exposure-health-effects", title: "Radon Exposure Health Effects: What to Know", date: "Apr 28, 2026", category: "Industrial Chemicals" },
  { slug: "copper-toxicity-symptoms", title: "Copper Toxicity Symptoms: Signs of Overexposure", date: "Apr 23, 2026", category: "Heavy Metals" },
  { slug: "aluminum-toxicity-symptoms", title: "Aluminum Toxicity Symptoms: Signs of Overexposure", date: "Apr 21, 2026", category: "Heavy Metals" },
  { slug: "trichloroethylene-exposure-symptoms", title: "Trichloroethylene Exposure Symptoms: What TCE Does to Your Body", date: "Apr 16, 2026", category: "Industrial Chemicals" },
  { slug: "formaldehyde-exposure-at-home", title: "Formaldehyde Exposure at Home: Symptoms and Risks", date: "Apr 14, 2026", category: "Industrial Chemicals" },
  { slug: "benzene-exposure-symptoms", title: "Benzene Exposure Symptoms: Signs You've Been Exposed", date: "Apr 9, 2026", category: "Industrial Chemicals" },
  { slug: "cadmium-toxicity-symptoms", title: "Cadmium Toxicity Symptoms: Signs of Exposure", date: "Apr 7, 2026", category: "Heavy Metals" },
  { slug: "mercury-exposure-symptoms", title: "Mercury Exposure Symptoms: Signs You've Been Poisoned", date: "Apr 4, 2026", category: "Heavy Metals" },
  { slug: "pfas-blood-test", title: "PFAS Blood Test: What It Measures and Who Needs One", date: "Mar 28, 2026", category: "PFAS" },
  { slug: "microplastics-in-blood", title: "Microplastics in Blood: What We Know So Far", date: "Mar 25, 2026", category: "Microplastics" },
  { slug: "heavy-metals-in-blood", title: "Heavy Metals in Blood: Sources, Symptoms and Testing", date: "Mar 20, 2026", category: "Heavy Metals" },
  { slug: "environmental-toxin-testing", title: "Environmental Toxin Testing: What You Need to Know", date: "Mar 15, 2026", category: "Diagnostics" },
  { slug: "therapeutic-apheresis-toxin-removal", title: "Therapeutic Apheresis: How Blood Filtration Removes Toxins", date: "Mar 10, 2026", category: "Interventions" },
  { slug: "glyphosate-exposure", title: "Glyphosate Exposure: What's in Your Food", date: "Mar 5, 2026", category: "Pesticides" },
  { slug: "bpa-exposure", title: "BPA Exposure: Why BPA-Free Isn't Enough", date: "Mar 1, 2026", category: "Endocrine Disruptors" },
  { slug: "pfas-in-drinking-water", title: "PFAS in Drinking Water: Risks and Solutions", date: "Feb 25, 2026", category: "PFAS" },
  { slug: "endocrine-disruptors", title: "Endocrine Disruptors: The Chemicals Hijacking Your Hormones", date: "Feb 20, 2026", category: "Endocrine Disruptors" },
  { slug: "forever-chemicals-cookware", title: "Forever Chemicals in Cookware: What to Know", date: "Feb 15, 2026", category: "PFAS" },
  { slug: "mold-toxicity-symptoms", title: "Mold Toxicity Symptoms: Signs You Shouldn't Ignore", date: "Feb 10, 2026", category: "Mold" },
  { slug: "lead-exposure-adults", title: "Lead Exposure in Adults: Sources, Symptoms and Testing", date: "Feb 5, 2026", category: "Heavy Metals" },
  { slug: "arsenic-in-food", title: "Arsenic in Food: Hidden Sources and Health Risks", date: "Jan 30, 2026", category: "Heavy Metals" },
  { slug: "what-are-forever-chemicals", title: "What Are Forever Chemicals? PFAS Explained", date: "Jan 25, 2026", category: "PFAS" },
  { slug: "toxins-in-newborn-blood", title: "Toxins in Newborn Blood: 287 Chemicals Found", date: "Jan 20, 2026", category: "Research" },
  { slug: "microplastics-in-brain", title: "Microplastics in the Brain: What New Research Reveals", date: "Jan 15, 2026", category: "Microplastics" },
  { slug: "voc-exposure-symptoms", title: "VOC Exposure Symptoms: Signs You're Breathing Toxins", date: "Jan 10, 2026", category: "Industrial Chemicals" },
  { slug: "pcb-exposure", title: "PCB Exposure: Why Banned Chemicals Still Matter", date: "Jan 5, 2026", category: "Industrial Chemicals" },
  { slug: "flame-retardants-in-blood", title: "Flame Retardants in Blood: Risks and Testing", date: "Dec 30, 2025", category: "Industrial Chemicals" },
  { slug: "phthalates-exposure", title: "Phthalates Exposure: The Plasticizer in Everything", date: "Dec 25, 2025", category: "Endocrine Disruptors" },
  { slug: "chronic-inflammation-environmental-toxins", title: "Chronic Inflammation and Environmental Toxins", date: "Dec 20, 2025", category: "Research" },
  { slug: "functional-medicine-toxin-testing", title: "Functional Medicine Toxin Testing Explained", date: "Dec 15, 2025", category: "Diagnostics" },
  { slug: "pfas-cancer-risk", title: "PFAS Cancer Risk: What the Research Shows", date: "Dec 10, 2025", category: "PFAS" },
  { slug: "pesticide-exposure-symptoms", title: "Pesticide Exposure Symptoms: Signs to Watch For", date: "Dec 5, 2025", category: "Pesticides" },
  { slug: "detox-myths-vs-science", title: "Detox Myths Debunked: What Actually Removes Toxins", date: "Nov 30, 2025", category: "Research" },
];

export default function BlogIndexPage() {
  return (
    <>
      <p className="font-mono text-xs text-tertiary uppercase tracking-wider mb-4">
        Research &amp; Insights
      </p>
      <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
        The science of what&apos;s in your blood.
      </h1>
      <p className="text-base leading-relaxed font-sans text-secondary mb-12 max-w-xl">
        Evidence-based articles on environmental toxins, diagnostics, and what you can do about it. From the Proxima Health research team.
      </p>

      <div className="space-y-0 border-t border-border-primary">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block py-6 border-b border-border-primary group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <p className="font-mono text-xs text-tertiary uppercase tracking-wider mb-2">
                  {post.category}
                </p>
                <h2 className="font-display text-lg font-bold group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
              </div>
              <p className="font-mono text-xs text-tertiary whitespace-nowrap mt-1">
                {post.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
