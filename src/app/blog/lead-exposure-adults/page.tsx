import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lead Exposure in Adults: Sources, Symptoms & Testing",
  description:
    "Lead exposure isn't just a childhood problem. Learn about sources of lead exposure in adults, symptoms of lead poisoning, and how a blood test can reveal your levels.",
};

export default function LeadExposureAdultsPage() {
  return (
    <>
      <p className="font-mono text-xs text-tertiary uppercase tracking-wider mb-4">
        Published by Proxima Health &middot; February 5, 2026
      </p>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 font-display">
        Lead Exposure in Adults: Why It Still Matters and What You Can Do About It
      </h1>

      <p className="text-base leading-relaxed mb-4 font-sans text-secondary">
        When most people think about lead poisoning, they picture peeling paint
        in old houses and children putting things in their mouths. That picture
        is incomplete. Lead exposure is a serious health risk for adults too.
        Millions of Americans are exposed to lead every day through aging water
        pipes, contaminated soil, imported goods, and certain jobs. The effects
        are real, measurable, and often overlooked.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The CDC estimates that over{" "}
        <strong>one million American workers are exposed to lead on the job</strong>.
        Outside the workplace, the sources are just as widespread. Old plumbing.
        Garden soil near highways. Certain spices and cosmetics imported from
        abroad. Even low levels of lead in the blood can raise blood pressure,
        damage kidneys, and impair memory and concentration.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        A{" "}
        <Link href="/diagnostics" className="underline font-medium hover:opacity-80">
          lead in blood test
        </Link>{" "}
        is the only reliable way to know your exposure level. This guide covers
        where adult lead exposure comes from, what symptoms to watch for, and
        what your test results mean.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Where Does Lead Exposure in Adults Come From?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Lead was banned from household paint in 1978 and from gasoline in 1996.
        But it did not disappear. Decades of lead use left behind a legacy that
        still affects us. Here are the most common sources of lead exposure for
        adults today.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2 font-display">
        Drinking Water and Old Pipes
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The EPA estimates that there are still{" "}
        <strong>6 to 10 million lead service lines</strong> in the United States.
        These are the pipes that connect water mains to homes. When the
        protective coating inside these pipes breaks down, lead leaches
        directly into your tap water. The crisis in Flint, Michigan brought
        national attention to this problem, but it is not unique to Flint.
        Hundreds of cities across the country have elevated lead levels in
        their water systems.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2 font-display">
        Soil Contamination
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Soil near busy roads, old industrial sites, and homes with exterior
        lead paint often contains high lead concentrations. Gardening, yard
        work, and even walking through contaminated dirt can create exposure
        through skin contact or breathing in dust. If you grow vegetables in
        urban soil, lead can enter the food you eat.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2 font-display">
        Occupational Hazards
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Adults who work in construction, battery manufacturing, auto repair,
        painting, plumbing, and renovation face elevated lead exposure. Sanding
        or scraping old paint, cutting or welding metal coated with lead-based
        primers, and handling lead-acid batteries are all high-risk activities.
        Workers can also bring lead dust home on their clothing and shoes,
        exposing their families.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2 font-display">
        Imported Goods and Consumer Products
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Certain imported spices (particularly turmeric), traditional medicines,
        cosmetics like kohl and sindoor, and glazed pottery from countries with
        weaker safety regulations can contain dangerous levels of lead. The FDA
        does not test every imported product. Some contaminated goods reach
        store shelves and kitchen cabinets without anyone knowing.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2 font-display">
        Hobbies and Recreational Activities
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Shooting firearms at indoor ranges exposes you to lead from ammunition
        and primers. Stained glass work, ceramic glazing, and fishing with lead
        sinkers are other common hobby-related sources. These exposures add up,
        especially over years of regular activity.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Lead Poisoning Symptoms in Adults
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Lead poisoning in adults is tricky because the symptoms are vague. They
        overlap with stress, aging, poor sleep, and dozens of other conditions.
        Many adults carry elevated lead levels for years without connecting their
        symptoms to an environmental cause. Common signs include:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-base leading-relaxed">
        <li>High blood pressure that does not respond well to medication</li>
        <li>Persistent headaches and difficulty concentrating</li>
        <li>Memory problems and brain fog</li>
        <li>Joint and muscle pain</li>
        <li>Fatigue that rest does not fix</li>
        <li>Abdominal pain, nausea, or constipation</li>
        <li>Mood changes, including irritability and depression</li>
        <li>Reduced kidney function</li>
        <li>Tingling or numbness in hands and feet</li>
      </ul>

      <p className="text-base leading-relaxed mb-4 font-sans">
        At higher levels, lead can cause severe abdominal cramping, anemia,
        and neurological damage. But even low-level, chronic exposure matters.
        Research published in <em>The Lancet Public Health</em> found that low
        blood lead levels were associated with increased cardiovascular
        mortality in US adults. There is no safe threshold.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        How a Lead in Blood Test Works
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        A blood lead level (BLL) test is a simple blood draw. It measures the
        concentration of lead in your blood, reported in micrograms per
        deciliter (mcg/dL). This is the standard clinical method for
        assessing recent lead exposure.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Blood lead levels reflect exposure over the past 30 to 45 days. Lead
        also accumulates in bones over a lifetime, and bone stores can release
        lead back into the blood during periods of stress, illness, pregnancy,
        or aging. That means a blood test can sometimes reveal exposure from
        years ago.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Here is how to interpret common results:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-base leading-relaxed">
        <li>
          <strong>Below 3.5 mcg/dL:</strong> Below the CDC reference value.
          Lower risk, but no level is considered completely safe.
        </li>
        <li>
          <strong>3.5 to 10 mcg/dL:</strong> Elevated. Source identification
          and reduction strategies are recommended. Additional monitoring of
          blood pressure and kidney function is warranted.
        </li>
        <li>
          <strong>10 to 25 mcg/dL:</strong> High. Medical evaluation and
          intervention are needed. Occupational exposure should be investigated.
        </li>
        <li>
          <strong>Above 25 mcg/dL:</strong> Very high. Chelation therapy may
          be considered. Immediate source removal is critical.
        </li>
      </ul>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Proxima tests for lead as part of its{" "}
        <Link href="/blog/heavy-metals-in-blood" className="underline font-medium hover:opacity-80">
          heavy metals panel
        </Link>
        , alongside mercury, arsenic, and cadmium. Testing for multiple metals
        at once gives a more complete picture. Learn more about{" "}
        <Link href="/science" className="underline font-medium hover:opacity-80">
          the science behind our approach
        </Link>.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Who Is at Highest Risk?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Some adults face greater lead exposure than others. You should strongly
        consider testing if you:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-base leading-relaxed">
        <li>Live in a home built before 1978, especially if it has not been renovated</li>
        <li>Drink water from a system with known or suspected lead pipes</li>
        <li>Work in construction, renovation, painting, plumbing, auto repair, or battery recycling</li>
        <li>Use imported spices, cosmetics, or traditional medicines regularly</li>
        <li>Spend time at indoor shooting ranges</li>
        <li>Are pregnant or planning to become pregnant (lead crosses the placenta)</li>
        <li>Have unexplained high blood pressure, kidney problems, or cognitive symptoms</li>
      </ul>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Even if you do not fall into a high-risk category, lead exposure is
        cumulative. It builds up over years of low-level contact. A baseline
        test tells you where you stand right now.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        How to Reduce Your Lead Exposure
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        There is no supplement, smoothie, or detox tea that removes lead from
        your body. For severe poisoning, chelation therapy is the medical
        treatment. For most adults, the best strategy is reducing ongoing
        exposure and letting your body clear lead naturally over time.
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-base leading-relaxed">
        <li>
          <strong>Test your water.</strong> Contact your local water utility
          for a free or low-cost lead test. If levels are elevated, use an
          NSF-certified filter rated for lead removal.
        </li>
        <li>
          <strong>Run the tap before drinking.</strong> If you have older
          plumbing, let cold water run for 30 seconds to 2 minutes before
          using it for drinking or cooking. Lead concentrations are highest
          in standing water.
        </li>
        <li>
          <strong>Be careful during renovation.</strong> Sanding, scraping, or
          demolishing surfaces with old paint creates lead dust. Use proper
          containment and respiratory protection, or hire an EPA-certified
          lead-safe contractor.
        </li>
        <li>
          <strong>Wash your hands.</strong> After gardening, shooting, or
          working with potentially contaminated materials, wash thoroughly
          before eating.
        </li>
        <li>
          <strong>Eat well.</strong> Diets rich in calcium, iron, and vitamin
          C can reduce lead absorption. Your body is less likely to absorb
          lead when these nutrients are adequate.
        </li>
        <li>
          <strong>Check imported products.</strong> Be cautious with spices,
          cosmetics, and cookware from countries without strict lead
          regulations.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Frequently Asked Questions
      </h2>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Can adults get lead poisoning from old paint?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Yes. When lead paint deteriorates, it creates dust and chips that can
        be inhaled or ingested. Renovation activities like sanding and scraping
        are especially dangerous. Adults living in or working on pre-1978
        buildings should be aware of the risk and take precautions.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        How long does lead stay in your body?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Lead in the blood has a half-life of about 30 days. But lead stored in
        bones can remain for decades. During pregnancy, menopause, illness, or
        periods of bone loss, stored lead can re-enter the bloodstream. That
        is why a single blood test captures only part of the picture, and why
        ongoing monitoring matters.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Is there a safe level of lead in blood?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        No. The CDC, WHO, and EPA all agree that there is no identified safe
        blood lead level. The CDC uses 3.5 mcg/dL as a reference value for
        adults and children, not as a safety threshold. Any detectable lead
        in blood indicates exposure, and research links even low levels to
        health effects including elevated blood pressure and kidney damage.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Can a regular blood test detect lead?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        No. A standard blood panel (CBC, metabolic panel) does not measure
        lead. You need a specific blood lead level test ordered by your doctor
        or included in a specialized panel. The{" "}
        <Link href="/diagnostics" className="underline font-medium hover:opacity-80">
          Proxima Health Baseline
        </Link>{" "}
        includes lead testing as part of a comprehensive environmental toxin
        screen.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Does boiling water remove lead?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        No. Boiling water actually concentrates lead because some water
        evaporates while the lead stays behind. To reduce lead in drinking
        water, use a filter certified by NSF International for lead reduction
        (NSF/ANSI Standard 53). Reverse osmosis systems are also effective.
      </p>

      {/* CTA Section */}
      <div className="mt-16 mb-4 p-8 border border-current/10 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4 font-display">
          Know What You Are Carrying
        </h2>
        <p className="text-base leading-relaxed mb-6 font-sans">
          Lead exposure adds up over a lifetime. A blood test is the only way
          to know your level. Take our free toxin exposure assessment to
          understand your risk and learn how Proxima can help you get answers.
        </p>
        <Link
          href="/waitlist"
          className="inline-block bg-accent text-primary-inverted font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity"
        >
          Take the Free Assessment
        </Link>
      </div>
    </>
  );
}
