import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cadmium Toxicity: Signs, Sources, and Testing",
  description:
    "Cadmium toxicity can harm kidneys, bones, and lungs. Learn the signs, sources, and which test helps most.",
};

export default function CadmiumToxicityPage() {
  return (
    <>
      <p className="font-mono text-xs text-tertiary uppercase tracking-wider mb-4">
        Published by Proxima Health | June 18, 2026
      </p>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 font-display">
        Cadmium Toxicity: Signs, Sources, and Testing
      </h1>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Cadmium does not just leave the body after exposure, a 2025 Frontiers
        meta-analysis found that every 1 microgram per liter rise in urinary
        cadmium tracked with a 7 percent higher risk of kidney stones.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Search results for cadmium toxicity usually split into two camps. One
        camp talks about acute poisoning and factory exposure. The other camp
        talks about organs, labs, and risk factors. What most pages miss is the
        modern adult exposure story, especially smoking, secondhand smoke, food
        contamination, and the difference between a blood test and a urine test.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        That gap matters because cadmium builds up slowly. StatPearls (2023)
        says cadmium can stay in the body for at least 10 years. CDC&apos;s
        NHANES lab documentation also says blood cadmium reflects both recent
        and cumulative exposure, while food becomes the largest source for
        nonsmokers without workplace exposure.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What the Top Search Results Leave Out
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The top cadmium pages cover important basics, but they each stop short
        in different places. StatPearls (2023) explains etiology, pathophysiology,
        and treatment. Dartmouth Toxic Metals explains acute respiratory injury,
        the old Itai-Itai story, and general testing. WHO and OSHA cover the
        organ systems cadmium targets and the industries that still use it.
        ATSDR explains which lab test fits which exposure window.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Together, those pages answer, "What does cadmium do?" They do not fully
        answer, "How do I know if cadmium is part of my day-to-day health
        problem?" That is the angle Proxima can own. The right question for many
        adults is not whether cadmium can poison the lungs in a refinery. The
        question is whether smoking, secondhand smoke, food, or a hidden work
        exposure has pushed body burden high enough to matter.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What Does Cadmium Toxicity Do To the Body?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        WHO says cadmium damages the kidneys, skeleton, and respiratory system
        and classifies it as a human carcinogen. OSHA adds that cadmium can
        affect the cardiovascular, renal, gastrointestinal, neurological,
        reproductive, and respiratory systems. That broad footprint explains why
        people with chronic exposure can look well on the outside while their
        kidney, bone, or lung markers quietly drift the wrong way.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        StatPearls (2023) explains why cadmium sticks around so long. After
        exposure, cadmium binds to proteins, concentrates in the liver and
        kidneys, and then slowly clears. Once it reaches the kidney, it
        collects in the proximal tubule, which helps explain the classic pattern
        of proteinuria and renal injury that shows up with chronic exposure.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Acute exposure looks different. StatPearls (2023) says inhaled cadmium
        fumes can trigger fever, chills, cough, and respiratory distress within
        about 6 hours, and severe cases can progress to acute respiratory
        distress syndrome. The CDC&apos;s older ATSDR case materials describe the
        same delayed onset pattern after high inhalation exposures. That is why
        cadmium fumes from welding, soldering, or alloy work count as a real
        emergency, not just a bad cold.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Ingested cadmium also causes trouble fast when contamination runs high.
        Dartmouth Toxic Metals notes that contaminated food or water can trigger
        severe digestive irritation, vomiting, diarrhea, kidney failure, liver
        injury, and shock. Acute and chronic cadmium exposure do not look the
        same, but both can start with generic symptoms that people dismiss until
        the exposure history comes into focus.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Where Does Cadmium Exposure Come From Now?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        CDC&apos;s NHANES lab guide says smokers have blood cadmium levels about
        twice as high as nonsmokers, and for nonsmokers without occupational
        exposure, food is the largest source. WHO adds that cadmium exposure
        comes mainly from contaminated food, active and passive tobacco smoke,
        and inhalation in a range of industries.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        That means cadmium exposure is not just a refinery problem. The 2026
        Texas A&amp;M study on secondhand smoke found that adults with heavy
        secondhand smoke exposure had 1.55 times higher blood cadmium levels
        than people with no exposure, while active smokers had 3.20 times
        higher levels. Smoke exposure still matters, even when the person with
        the exposure never lights a cigarette.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        OSHA lists manufacturing, construction, metal smelting, battery work,
        electroplating, welding, painting, recycling, landfill operations, and
        plastic or solar-cell work as common exposure settings. StatPearls also
        notes hobby exposures, especially welders, solderers, and jewelry
        workers. In other words, this can show up in a jobsite, a basement
        workshop, or a house where someone smokes indoors.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What Recent Research Says About Risk
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The 2024 Frontiers study on 2,146 U.S. adults found that blood cadmium
        levels were negatively associated with femoral bone mineral density.
        The association showed up at the total femur, femoral neck, trochanter,
        and intertrochanteric sites, and it looked stronger in women, adults
        with diabetes, and adults with chronic kidney disease. That matters
        because cadmium does not just threaten lungs. It can weaken the bone
        framework that keeps people moving.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The 2025 Frontiers meta-analysis on kidney stones adds another useful
        signal. Across 4,425 people, blood cadmium exposure linked to a 49
        percent higher kidney stone risk, and people in cadmium-contaminated
        areas had a 69 percent higher risk than comparators. The same paper
        found a dose-response pattern, with each additional 1 microgram per
        liter of urinary cadmium adding 7 percent to kidney stone risk.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        CDC&apos;s ATSDR public health statement gives the exposure context that
        makes those studies easier to interpret. The national geometric mean
        blood cadmium level for U.S. adults is 0.376 micrograms per liter, and
        heavy smokers have been reported as high as 1.58 micrograms per liter.
        ATSDR&apos;s laboratory guidance also gives a 95 percent confidence
        limit of 0.4 micrograms per liter for healthy, nonexposed nonsmokers in
        the United States. That is not a toxicity threshold by itself, but it
        gives you a sense of how tobacco and other exposures can move the needle.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Put those findings together and the pattern is hard to miss. Cadmium
        exposure can affect bones, kidneys, and lungs long before a person sees
        a dramatic poisoning event. The practical problem is not just "Can
        cadmium hurt me?" The practical problem is "How much is in my body, how
        did it get there, and is it still coming in?"
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What Symptoms Should Make You Think About Cadmium?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Acute inhalation exposure can start with fever, chills, cough, chest
        pain, and shortness of breath a few hours after fumes. If someone gets
        those symptoms after welding, soldering, metal finishing, or a similar
        exposure, they should seek urgent care. This pattern can look like metal
        fume fever at first, but cadmium can cause much more serious lung injury.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Chronic exposure usually looks quieter. Think of fatigue, kidney
        abnormalities, protein in the urine, worsening bone density, back pain,
        or unexplained fractures. Dartmouth Toxic Metals describes bone pain,
        weak bones, and kidney damage in the classic Itai-Itai pattern, while
        WHO and OSHA both emphasize kidney and skeletal injury as core chronic
        effects.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        If you smoke, live with a smoker, work in a cadmium-linked trade, or
        have kidney disease or osteoporosis, take the symptoms more seriously.
        The 2024 bone study and the 2025 kidney stone meta-analysis both point
        toward the same idea: low-level exposure can still show up in common
        chronic conditions, not just in acute poisoning case reports.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Blood Or Urine: Which Cadmium Test Helps More?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Public Health Ontario (2024) says urine testing more accurately reflects
        body burden and helps assess long-term historical exposure. It also says
        blood cadmium can help identify whether recent exposure has happened
        over the last several months. Hair testing does not work well as a valid
        biomarker, and provoked urine testing should be avoided.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        ATSDR says the same thing in more direct language. Urinary cadmium
        reflects integrated exposure over time and total body burden, but it
        does not rise much after acute exposure. That means a fresh inhalation
        event can produce a normal urine cadmium result even when the exposure
        was real. Blood and urine answer different questions, so the best test
        depends on the exposure window you want to understand.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        For a health-conscious adult, that distinction matters. If you want to
        know whether exposure happened recently, blood usually helps more. If
        you want to know whether cadmium has accumulated over time, urine gives
        the better signal. That is why a sensible workup does not start with a
        supplement list. It starts with exposure history, then the right
        biomarker, then follow-up testing if the first result looks high.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Who Should Get Checked?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Cadmium testing makes the most sense when symptoms, exposures, and risk
        factors line up. That includes smokers, people exposed to heavy
        secondhand smoke, workers in metal, battery, recycling, welding, or
        paint-related jobs, and people who live near contaminated soil or dust.
        It also includes adults with unexplained kidney issues, bone loss, or
        recurrent kidney stones.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        WHO says cadmium from food matters most for nonsmokers, and CDC says
        food becomes the dominant source when workplace exposure does not
        explain the result. That is why diet still belongs in the history. High
        exposure can come from contaminated crops, cereals, vegetables, nuts,
        pulses, and starchy roots, not just from obvious industrial accidents.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        If a test comes back elevated, the next move should focus on the source.
        Stop the exposure first, then repeat the right test in the right time
        frame. That is more useful than guessing based on symptoms alone, and it
        fits the way CDC, ATSDR, WHO, and Public Health Ontario all frame
        cadmium assessment.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What Proxima Thinks Cadmium Toxicity Means In Practice
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Proxima&apos;s edge is not a dramatic toxin story. It is a useful one.
        Cadmium toxicity becomes easier to understand when you separate the
        exposure route from the biomarker and the outcome. Smoking and
        secondhand smoke can raise blood cadmium. Food can drive chronic
        exposure in nonsmokers. Urine tells you about long-term burden. Blood
        tells you more about recent exposure.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        That framework helps you avoid two common mistakes. The first mistake is
        dismissing cadmium because you do not work in a factory. The second
        mistake is overreacting to a single test without asking whether the
        exposure is still active. A good workup asks both questions at once.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        If you want to see whether cadmium fits your symptom pattern, start
        with <Link href="/diagnostics" className="underline">
          diagnostics
        </Link>{" "}
        and then read the supporting evidence on{" "}
        <Link href="/science" className="underline">
          science
        </Link>
        . That is the fastest way to move from worry to a real answer.
      </p>
    </>
  );
}
