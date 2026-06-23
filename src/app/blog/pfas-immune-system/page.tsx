import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PFAS and the Immune System: What the Research Shows",
  description:
    "PFAS and the immune system are linked to weaker vaccine response, altered T cells, and exposure that shows up in blood.",
};

export default function PFASImmuneSystemPage() {
  return (
    <>
      <p className="font-mono text-xs text-tertiary uppercase tracking-wider mb-4">
        Published by Proxima Health | June 23, 2026
      </p>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 font-display">
        PFAS and the Immune System: What the Research Shows
      </h1>

      <p className="text-base leading-relaxed mb-4 font-sans">
        PFAS show up in more than <strong>99% of U.S. blood samples</strong>, and newer studies keep tying them to weaker vaccine response, altered T cells, and higher immune dysfunction risk (CDC/ATSDR, 2025; NIH/NCATS, 2025).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        That should worry anyone who keeps getting sick, never seems to bounce back after infections, or has autoimmune symptoms that do not fit a tidy diagnosis. PFAS do not need to trigger dramatic poisoning to matter. They can sit in the body for years and quietly change how the immune system responds to threats (EPA, 2025; CDC/ATSDR, 2025).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Most people search for PFAS because they want to know whether the chemicals in their water, cookware, food packaging, or work environment might be doing something real inside the body. The immune system is one of the clearest places to look.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Why PFAS can disrupt immunity
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The immune system depends on timing, signaling, and balance. It needs to make antibodies when a virus shows up, build memory after vaccination, and calm down when a threat passes. PFAS can interfere with those steps by changing cell signaling, lipid metabolism, and inflammatory pathways, which helps explain why researchers keep seeing immune effects across different study designs (PNAS, 2021; Toxicological Sciences, 2024).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        That matters because people usually expect a toxin to cause one obvious illness. PFAS work more like a slow pressure change. They may not create one dramatic symptom, but they can make the immune response less efficient, less predictable, or more reactive than it should be.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The most consistent human signal still comes from vaccine response. That does not mean PFAS only affect vaccines. It means vaccines give researchers a clean, measurable way to see whether the immune system reacts normally or not.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What the newest studies found
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        In a 2023 prospective cohort published in <strong>Journal of Exposure Science &amp; Environmental Epidemiology</strong>, researchers followed <strong>226 participants ages 12 to 90</strong> who had a history of PFAS exposure through drinking water. They measured 39 PFAS compounds before mRNA COVID-19 vaccination and tracked antibody response afterward (Journal of Exposure Science &amp; Environmental Epidemiology, 2023).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        That adult study did not produce a simple one-size-fits-all answer, which is exactly why the topic needs better explanation. The participants had detectable exposure, with <strong>PFOS at a mean 10.49 micrograms per liter</strong> and <strong>PFOA at 3.9 micrograms per liter</strong>, yet the relationship between PFAS and antibody response varied by compound and model. Real-world immune biology rarely behaves like a clean yes-or-no switch (Journal of Exposure Science &amp; Environmental Epidemiology, 2023).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        A 2024 study in <strong>Environmental Research</strong> gave the clearest child data yet. Researchers analyzed <strong>880 children for diphtheria and tetanus</strong> and <strong>841 children for measles, mumps, and rubella</strong>. They found that each doubling of child PFNA exposure correlated with a <strong>9.2% lower mumps antibody concentration</strong>, while PFHxS and PFOS also tracked with lower mumps antibodies by <strong>8.3%</strong> and <strong>7.9%</strong> respectively (Environmental Research, 2024).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        In 2025, NIH-supported researchers followed <strong>200 healthy mother-baby pairs</strong> and found that higher prenatal PFAS exposure lined up with lower levels of certain T cells in infants. The same study found more of other T cells that have been linked to allergies and autoimmune disorders when they overreact. That is not a trivial signal. It points to immune development, not just infection response, and it suggests the effect can begin before birth (NIH/NCATS, 2025).
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What symptoms should make you pay attention
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        PFAS do not cause one unique symptom pattern. People usually notice the fallout in the way their body handles everyday stress. That can look like catching every cold in the office, taking forever to recover after a virus, getting repeated sinus infections, or feeling wiped out after mild illness.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Others notice immune-related patterns instead: eczema that keeps flaring, allergic symptoms that worsen without a clear trigger, joint pain that comes and goes, or an autoimmune diagnosis that never seems to fit the full story. PFAS exposure will not explain every case, but it can add an exposure layer that clinicians often miss.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Parents often ask whether a child needs a special test if vaccines did not seem to "take" or if infections keep piling up. The answer depends on context. The research does not support panic, but it does support closer attention when infection history, vaccine response, and environmental exposure line up.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Who faces the highest PFAS exposure
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The biggest exposure source still comes from water, especially in communities near industrial sites, airports, military bases, and places that used firefighting foam. People who manufacture or handle stain-resistant, grease-resistant, or water-resistant products also face higher risk. So do families who rely on private wells that never got tested.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The CDC/ATSDR says blood PFOS levels dropped by <strong>more than 85%</strong> and PFOA by <strong>more than 70%</strong> between 1999-2000 and 2018-2019. That sounds like progress, and it is. But CDC data also show that <strong>at least one PFAS still appears in more than 99% of blood samples</strong>. The exposure problem changed shape. It did not disappear (CDC/ATSDR, 2025).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        That is the part most readers miss. They think PFAS belong to a past era of industrial pollution. In reality, they still show up in water, food contact materials, stain-resistant products, cosmetics, and dust. That makes immune effects relevant for ordinary households, not just factory workers.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What top-ranking pages cover, and what they miss
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The live search results for PFAS and immune function usually surface the same five types of pages: a broad review of PFAS immunotoxicity, a mechanistic PNAS paper, a university news summary of the 2026 mother-baby study, a PFAS advocacy explainer, and an EPA or CDC overview. Those pages all help, but each one stops short of the practical question readers actually ask.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        They explain that PFAS can affect immunity. They rarely explain how the evidence differs in adults versus children, why vaccine studies matter so much, when a blood test makes sense, or how to connect exposure history to symptoms. They also tend to flatten PFAS into one problem, even though individual compounds and mixtures can behave differently (Journal of Exposure Science &amp; Environmental Epidemiology, 2023; Environmental Research, 2024; CDC/ATSDR, 2025).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Proxima can own the middle ground. We can translate the science without dumbing it down, and we can move the reader from vague concern to a concrete next step.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        When testing actually helps
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Blood testing helps when you need to know whether PFAS exposure is part of the picture. It cannot tell you everything about immune health, but it can document body burden and help you decide whether you should keep looking at water, work, food packaging, or a known contamination source.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        That matters for people with repeated infections, unexplained autoimmune symptoms, fertility concerns, pregnancy planning, or a known exposure history. It also matters when you want a baseline before you change filtration, reduce product exposure, or move away from a contaminated source.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        CDC and ATSDR also note that PFAS blood levels can show the amount in the body, but they do not predict every future outcome on their own. That is not a reason to ignore the test. It is a reason to use it the right way, alongside symptoms, environment, and follow-up care (CDC/ATSDR, 2025).
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What to do next
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        If your immune system keeps acting tired, reactive, or unreliable, do not stop at a generic "toxic exposure" label. Check the actual exposure history. Look at your water source, the products you use every day, the work you do, and whether symptoms line up with a longer pattern of PFAS contact.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The research keeps pointing in the same direction. PFAS remain widespread, the immune system responds to them, and the strongest human evidence keeps showing up where researchers can measure antibody and T-cell changes directly (CDC/ATSDR, 2025; Journal of Exposure Science &amp; Environmental Epidemiology, 2023; Environmental Research, 2024; NIH/NCATS, 2025).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        If you want the exposure side of the story, start with <Link href="/diagnostics" className="underline">diagnostics</Link>. If you want the science behind Proxima&apos;s approach, read <Link href="/science" className="underline">science</Link>.
      </p>
    </>
  );
}
