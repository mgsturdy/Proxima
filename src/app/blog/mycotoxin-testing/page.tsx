import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mycotoxin Testing: What the Results Actually Mean",
  description:
    "Mycotoxin testing can mislead. Learn what urine panels show, what they miss, and when mold exposure deserves a real workup.",
};

export default function MycotoxinTestingPage() {
  return (
    <>
      <p className="font-mono text-xs text-tertiary uppercase tracking-wider mb-4">
        Published by Proxima Health | May 26, 2026
      </p>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 font-display">
        Mycotoxin Testing: What the Results Actually Mean
      </h1>
      <p className="text-base leading-relaxed mb-4 font-sans">
        CDC documented a patient who got a positive urine mycotoxin report, was diagnosed with "mold toxicity," and received antifungals even though the office showed no meaningful mold damage and the test itself was not FDA approved (CDC, 2015).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        That story still matters in 2026 because people keep paying for mycotoxin testing as if one urine panel can prove illness, pinpoint a building, or tell you what to fix next.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The truth is narrower and more useful: mycotoxin testing can sometimes support exposure research, but it cannot, by itself, diagnose a mold related illness, separate food exposure from indoor exposure, or replace a real environmental and clinical workup (CDC, 2015; CDC, 2025).
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What are mycotoxins, really?
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Mycotoxins are toxic compounds made by certain fungi. The fungi themselves are not "toxic" in the way many marketing pages imply. CDC says some molds can produce mycotoxins, but the presence of mold in a building means moisture damage, not proof of poisoning (CDC, 2025).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        That distinction matters because many people search for a single lab value when the real problem is broader. Mold exposure can trigger allergic, respiratory, and sometimes neurologic symptoms, but the symptom pattern does not map cleanly to one chemical marker (NTP, 2025).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        NTP says it is actively studying biomarkers of exposure and effects because the field still lacks a clean, validated clinical signal for indoor mold disease (NTP, 2025).
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Why do urine mycotoxin tests get so much attention?
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Because they feel concrete. A number looks more reassuring than a story about a damp basement, a musty HVAC system, or vague brain fog. But convenience does not equal clinical validity.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        CDC has said for years that urine mycotoxin tests are not FDA approved for clinical use and that CDC does not recommend biologic testing of people who work or live in water damaged buildings (CDC, 2015).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Navy Medicine echoed that position in 2024, stating there is no FDA approved test for mycotoxins in human urine and that evidence based medical care should rely on validated diagnostics, not direct to consumer toxin panels (Navy Medicine, 2024).
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What do the top ranking pages miss?
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The pages ranking for mycotoxin testing mostly fall into three camps. Some sell testing. Some warn about testing. Some explain basics without showing readers what to do next.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The gap is not another generic overview. The gap is decision support. People want to know whether the test result actually changes care, how to interpret a positive result in light of diet and background exposure, and what objective steps come next if their home or body really is the source of the problem.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Proxima can own the middle ground: science first, no fear mongering, no blanket dismissal. That means explaining what mycotoxin testing can measure, what it cannot, and which confirmed exposure signals deserve further workup.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What does the research actually show?
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        A 2022 study using LC-QTOF mass spectrometry found at least one mycotoxin in 55% of 56 human urine samples, but the authors also said only a few samples were contaminated and that more data were needed about excretion rates and benchmark doses before risk assessment could become reliable (PMC, 2022).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        That is a good example of the problem. Detection does not equal disease. Detection does not even prove the source. A positive urine marker can reflect diet, background environmental exposure, or recent contact with contaminated food, and the study itself warned that interpretation still needs more data (PMC, 2022).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Another 2025 review on human biomonitoring of mycotoxins said the field still faces major challenges and pitfalls, including the need for better standardization and reliable interpretation across matrices such as urine, serum, plasma, whole blood, and breast milk (Springer, 2025).
      </p>

      <h3 className="text-xl font-bold mt-8 mb-3 font-display">
        The big problem is background exposure
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Mycotoxins are not some rare marker that appears only after a toxic apartment or office. Humans encounter them through food all the time. That is why urine can reflect exposure without telling you whether the source came from a kitchen cabinet, a cereal bowl, or a building leak.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        This is also why the most important clinical question is not "Do I have a positive mycotoxin test?" It is "Do I have a credible exposure history, matching symptoms, and objective signs of water damage or inflammatory burden?"
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Which symptoms should make you take mold exposure seriously?
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Mold exposure can show up as cough, wheeze, asthma flares, sinus symptoms, eye irritation, skin irritation, and sometimes broader fatigue or cognitive complaints. NTP notes that mold exposure has been connected to allergic, respiratory, and neurological problems, but that does not mean one test can capture the whole story (NTP, 2025).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        If symptoms worsen at home, improve away from the building, and track with visible dampness, leaks, or a musty smell, that pattern deserves real investigation. CDC says visual inspection and moisture control outperform routine air sampling for practical building assessment (CDC, 2025).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        CDC also says there are no health based standards for mold in indoor air and that short term sampling can miss actual exposure. In other words, a clean swab or air test does not prove safety, and a urine panel does not prove indoor mold disease (CDC, 2025).
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        How should a positive mycotoxin test be interpreted?
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        First, do not treat it like a diagnosis. A positive result only means the lab detected a target compound or metabolite. It does not tell you where it came from or whether it explains your symptoms.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Second, check the exposure context. If you eat grains, coffee, dried fruit, nuts, or other foods where mycotoxins can appear, the result may reflect dietary exposure rather than a hidden toxic house (PMC, 2022; Springer, 2025).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Third, ask whether the test changes the plan. If the answer is no, the test mainly adds cost and confusion. If the answer is yes, the next step should still be a proper clinical evaluation, not a rush to unvalidated detox protocols.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What testing actually helps if you suspect mold exposure?
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The best starting point is the boring one: history, symptoms, and exposure pattern. Then look for objective evidence of water damage, leaks, condensation, visible growth, or occupant reports that line up with the timing of symptoms (CDC, 2025).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        In a medical workup, the right tests depend on the complaint. If someone has asthma symptoms, allergy assessment may help. If someone has fatigue, headaches, or brain fog, clinicians need to rule out iron issues, thyroid dysfunction, sleep disruption, infections, medication effects, and other common causes before blaming mold.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        If you want toxin focused testing, Proxima's diagnostics are designed to help you choose a cleaner, more evidence grounded path instead of chasing a single misleading marker. Start with <Link href="/diagnostics" className="underline">diagnostics</Link> and, if you want the scientific rationale, read <Link href="/science" className="underline">our science page</Link>.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        The bottom line
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Mycotoxin testing can detect exposure signals, but it cannot diagnose mold illness on its own. CDC, NTP, and Navy Medicine all point in the same direction: build the diagnosis around exposure history, symptoms, and validated assessment, not around a standalone urine number (CDC, 2015; CDC, 2025; NTP, 2025; Navy Medicine, 2024).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        If you suspect mold, focus on the source of moisture first. Fix the building. Reassess the symptoms. Then decide whether any lab test meaningfully adds information. That order saves money, reduces confusion, and gets you closer to the actual problem.
      </p>
    </>
  );
}
