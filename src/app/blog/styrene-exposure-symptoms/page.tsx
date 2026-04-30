import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Styrene Exposure Symptoms: What They Mean",
  description:
    "Styrene exposure symptoms can start with headaches, dizziness, and irritation. Learn the signs, sources, and when to test.",
};

export default function StyreneExposureSymptomsPage() {
  return (
    <>
      <p className="font-mono text-xs text-tertiary uppercase tracking-wider mb-4">
        Published by Proxima Health | April 30, 2026
      </p>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 font-display">
        Styrene Exposure Symptoms
      </h1>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Styrene can make people feel drunk, foggy, and nauseated before they realize they have been exposed, and a 2025 study found symptom rates rising from 19 percent to 71 percent across exposure quartiles in fiberglass workers (PLOS One, 2025).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Styrene shows up in fiberglass resins, plastics, boat repair, auto body work, insulation, cigarette smoke, traffic pollution, and some indoor air sources, which means you can pick up exposure at work, at home, or both (ATSDR, 2026; EPA, 2020).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        If you feel headaches, dizziness, eye irritation, brain fog, or nausea and nobody can explain why, styrene deserves a real look, not a shrug.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What styrene exposure feels like
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The most common acute symptoms line up with central nervous system irritation and mucous membrane irritation. OSHA lists skin, eye, and upper respiratory irritation, plus gastrointestinal effects after short-term exposure, and chronic exposure can bring headache, fatigue, weakness, depression, and kidney effects (OSHA, 2026).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        ATSDR describes the classic worker presentation as slowed reaction time, balance problems, concentration problems, tiredness, and a drunk feeling (ATSDR, 2026). That matters because people often blame stress, dehydration, or poor sleep when the pattern actually matches solvent exposure.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        In the 2025 PLOS One study of 85 fiberglass-reinforced plastic workers, symptom prevalence climbed with exposure, and the highest-exposure groups showed the sharpest burden (PLOS One, 2025). That is the kind of dose-response pattern that makes occupational medicine pay attention.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Where styrene exposure comes from
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Styrene is a building block for polystyrene, fiberglass resins, rubber, and many manufactured products. ATSDR says the highest exposure risk appears in reinforced-plastics work, where workers can inhale vapor and absorb liquid styrene through skin contact (ATSDR, 2026).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        For the general public, the biggest sources usually come from inhalation. The Gulf Coast resident study pointed to tobacco smoke, building materials, consumer products, and vehicle and industrial emissions as major exposure routes, and it estimated daily styrene exposure in the general population at 18 to 54 micrograms per person per day (University of North Carolina and EPA-supported analysis, 2019; cited in the study background).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Indoor air matters too. ATSDR reports indoor concentrations higher than outdoor concentrations, with styrene detected in indoor air, drinking water, and soils near releases, though air remains the main route for most people (ATSDR, 2026).
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Which symptoms should make you suspicious?
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The big clue is a pattern, not one isolated symptom. Think headaches plus eye irritation plus nausea after time in a garage, shop, boatyard, renovation site, or smoky indoor space. OSHA and ATSDR both connect styrene with eye, nose, throat, and gastrointestinal irritation, then CNS symptoms when exposure continues (OSHA, 2026; ATSDR, 2026).
      </p>
      <h3 className="text-xl font-bold mt-8 mb-3 font-display">
        Red flag symptom clusters
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Watch for brain fog, concentration problems, dizziness, feeling intoxicated, balance issues, nausea, fatigue, and headaches. ATSDR specifically names concentration problems, slowed reaction time, and balance problems, which gives you a clean clinical frame instead of vague wellness language (ATSDR, 2026).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        If your symptoms get worse during the workweek and ease on weekends or vacations, that pattern increases suspicion. The 2025 occupational study found higher exposure aligned with more symptoms even at roughly 10 ppm and below, which tells you lowish workplace levels can still matter when exposure repeats every day (PLOS One, 2025).
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What recent research says about styrene and symptoms
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The strongest recent paper came from Korea in 2025. Researchers followed 85 fiberglass-reinforced plastic workers and measured breathing-zone air, urinary mandelic acid and phenylglyoxylic acid, plus dermal tracer uptake. They found median air concentrations of 18.65 ppm in spray-up work, 12.42 ppm in hand lay-up, and 6.37 ppm in closed-mold work, with urinary markers tracking air levels closely (r = 0.78 and 0.77) (PLOS One, 2025).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        They also found dermal load correlated with urinary mandelic acid, which matters because styrene does not only enter through your nose. It also gets in through skin when resin handling and cleanup turn sloppy (PLOS One, 2025).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Their biomarker model reached an AUC of 0.93, and they proposed 0.38 mg/g creatinine mandelic acid as an early-warning threshold pending external validation (PLOS One, 2025). That does not replace clinical judgment, but it gives clinicians and employers a usable signal when symptoms show up before anyone labels the issue anxiety or burnout.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Earlier population research still matters. A 2019 Environmental Health Perspectives study of 21,962 Gulf Coast residents found the highest quartile of estimated ambient styrene tied to one or more neurologic symptoms, CNS symptoms, and peripheral nervous system symptoms, with prevalence ratios of 1.12, 1.17, and 1.16 respectively (Environmental Health Perspectives, 2019).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        That same study found one-third of participants reported at least one neurologic symptom, and blood styrene associated suggestively with nausea in a subset of 874 participants (Environmental Health Perspectives, 2019). In plain English, you do not need a dramatic industrial spill to see a signal.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Why top-ranking pages miss the real story
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The current top results for styrene mostly cover hazard summaries, workplace safety basics, and government fact sheets. CDC, OSHA, and EPA all do a solid job describing the chemical, but they stop short of showing how symptoms show up in real people, how dose-response looks in a modern worker cohort, or how urine and dermal exposure fit together (CDC, 2026; OSHA, 2026; EPA, 2020).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        That gap creates a real opportunity. Most pages tell you styrene can cause headache or irritation. Few explain that recent biomonitoring data show symptom burden rising across exposure quartiles, or that urinary mandelic acid may work as a practical early-warning marker when used carefully alongside exposure history and workplace controls (PLOS One, 2025).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Proxima can own the angle that matters most to health-conscious adults: styrene symptoms are not just an occupational issue for factory workers. They also matter for people with indoor exposures, hobby exposures, renovation exposures, or high daily contact with synthetic materials and smoke.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        How clinicians and patients should think about testing
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Testing works best when symptoms and exposure history point in the same direction. The 2025 FRP study used urinary mandelic acid and phenylglyoxylic acid after shift end, which makes sense because styrene metabolizes and clears quickly (PLOS One, 2025).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        That short half-life cuts both ways. You can miss exposure if you test too late, but you can also catch a meaningful pattern if you sample at the right time after a suspected exposure window. ATSDR notes that most styrene metabolites leave the body in urine within a few days, which is why timing matters (ATSDR, 2026).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        If someone keeps getting symptoms after work in a resin shop, body shop, boatyard, or smoke-heavy indoor environment, a targeted exposure assessment plus biomarker testing beats guesswork. That approach helps separate styrene from lookalikes like poor sleep, migraine, carbon monoxide, solvent mixtures, and anxiety.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What to do if styrene exposure seems likely
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Start with source control. OSHA and PLOS One both point toward engineering controls, better ventilation, and exposure reduction as the first move, not supplements or detox products (OSHA, 2026; PLOS One, 2025).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Then look at timing. Do symptoms start during a shift, after cleanup, or after a specific hobby or home project? Do they improve away from the source? Does anyone else in the same room feel off? Those clues matter because styrene often acts as a shared exposure, not a solo diagnosis.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        If you suspect exposure, ask for a workplace review, an industrial hygiene assessment, or a clinician familiar with environmental medicine. The goal is not to panic. The goal is to identify the source before repeated low-level exposure keeps hammering the nervous system.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        The bottom line
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Styrene exposure symptoms usually start as irritation, headache, nausea, dizziness, fatigue, and brain fog. In 2025, a real-world worker study tied those symptoms to measured air, urine, and dermal exposure, while earlier population research showed neurologic symptom signals even at environmental levels (PLOS One, 2025; Environmental Health Perspectives, 2019).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        If your body feels off and your environment includes fiberglass, resin, smoke, or solvent-heavy air, styrene belongs on the shortlist. The more specific your testing and exposure history, the faster you can get to the actual cause.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Want the clinical angle? See <Link href="/diagnostics" className="text-accent underline">Proxima diagnostics</Link> or read more on our <Link href="/science" className="text-accent underline">science page</Link>.
      </p>
    </>
  );
}
