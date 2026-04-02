import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Heavy Metals in Blood: Sources, Symptoms & Testing",
  description:
    "Learn about heavy metals in blood, including lead and arsenic exposure, common symptoms, everyday sources, and how heavy metal blood testing works.",
};

export default function HeavyMetalsInBloodPage() {
  return (
    <main className="min-h-screen bg-primary text-primary">
      <article className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        {/* Date line */}
        <p className="font-mono text-xs text-tertiary uppercase tracking-wider mb-4">
          Published by Proxima Health &middot; March 20, 2026
        </p>

        {/* H1 */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 font-display">
          Heavy Metals in Blood: What They Are, Where They Come From, and Why Testing Matters
        </h1>

        <p className="text-base leading-relaxed mb-4 font-sans">
          Most people assume heavy metal exposure is rare. Something that happens in factories or contaminated war zones. The truth is far less comfortable. Heavy metals like lead, arsenic, mercury, and cadmium are in our food, water, air, and household products. They accumulate in the body over time, often without obvious warning signs.
        </p>

        <p className="text-base leading-relaxed mb-4 font-sans">
          A 2009 study by the Environmental Working Group found <strong>287 industrial chemicals in the umbilical cord blood of newborns</strong>. These babies hadn&apos;t eaten a meal, taken a breath of city air, or touched a plastic toy. They were exposed before birth. If newborns carry this burden, what does that say about the rest of us?
        </p>

        <p className="text-base leading-relaxed mb-4 font-sans">
          This guide explains which heavy metals are most commonly found in blood, where everyday exposure happens, what symptoms to watch for, and how a{" "}
          <Link href="/diagnostics" className="underline text-proxima-maroon hover:text-proxima-red">
            heavy metal blood test
          </Link>{" "}
          can give you real answers.
        </p>

        {/* Section: What Are Heavy Metals? */}
        <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
          What Are Heavy Metals?
        </h2>

        <p className="text-base leading-relaxed mb-4 font-sans">
          Heavy metals are naturally occurring elements with high atomic weight and density. Some, like iron and zinc, your body needs in small amounts. Others have no safe level of exposure. Lead, arsenic, mercury, and cadmium fall into this second category. Even tiny concentrations can interfere with organ function, brain development, and the immune system.
        </p>

        <p className="text-base leading-relaxed mb-4 font-sans">
          When these metals enter your body through food, water, or air, they bind to proteins and accumulate in your blood, bones, and soft tissue. Your body is not efficient at removing them. Without intervention, they can stay for months or years.
        </p>

        {/* Section: Common Heavy Metals Found in Blood */}
        <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
          The Most Common Heavy Metals Found in Blood
        </h2>

        <p className="text-base leading-relaxed mb-4 font-sans">
          Heavy metal testing typically screens for a handful of metals that pose the greatest risk to human health. Here are the ones that show up most often.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">Lead</h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          Lead is one of the most studied toxic metals. Despite being banned from gasoline and paint decades ago, it persists in older homes, contaminated soil, certain imported goods, and municipal water systems. The CDC has stated there is no safe blood lead level in children. In adults, even low-level lead exposure is linked to high blood pressure, kidney damage, and cognitive decline. Proxima tests for lead as part of its{" "}
          <Link href="/diagnostics" className="underline text-proxima-maroon hover:text-proxima-red">
            diagnostic panel
          </Link>.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">Arsenic</h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          Arsenic is found in rice, drinking water (especially from private wells), apple juice, and some seafood. Chronic arsenic exposure raises the risk of skin lesions, cardiovascular disease, and several types of cancer. It is odorless and tasteless, which makes it impossible to detect without testing. Arsenic is another key target in{" "}
          <Link href="/science" className="underline text-proxima-maroon hover:text-proxima-red">
            Proxima&apos;s science-backed testing approach
          </Link>.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">Mercury</h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          Mercury exposure comes primarily from eating fish high on the food chain (tuna, swordfish, king mackerel), dental amalgam fillings, and certain industrial emissions. Methylmercury, the organic form, is a potent neurotoxin. It crosses the blood-brain barrier and can impair memory, motor function, and vision.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">Cadmium</h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          Cadmium enters the body through cigarette smoke, contaminated food (leafy greens, grains, root vegetables grown in polluted soil), and occupational exposure. It targets the kidneys and bones. Long-term exposure weakens bone density and damages kidney filtration.
        </p>

        {/* Section: Everyday Sources */}
        <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
          Where Does Heavy Metal Exposure Come From?
        </h2>

        <p className="text-base leading-relaxed mb-4 font-sans">
          You do not need to work in a mine or live near a Superfund site to be exposed. Common sources include:
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-base leading-relaxed">
          <li><strong>Drinking water.</strong> Aging pipes and contaminated groundwater deliver lead and arsenic directly to your tap.</li>
          <li><strong>Food.</strong> Rice absorbs arsenic from soil. Leafy greens concentrate cadmium. Large predatory fish carry mercury.</li>
          <li><strong>Air.</strong> Industrial facilities, coal-burning power plants, and wildfire smoke release heavy metals into the atmosphere.</li>
          <li><strong>Consumer products.</strong> Certain cosmetics, herbal supplements, imported spices, and older cookware contain detectable levels of lead or arsenic.</li>
          <li><strong>Older homes.</strong> Lead paint (in homes built before 1978) and deteriorating plumbing remain major exposure pathways, especially for children.</li>
        </ul>

        <p className="text-base leading-relaxed mb-4 font-sans">
          The challenge is that no single source may seem dangerous on its own. But exposure from multiple sources adds up. This cumulative burden is what heavy metal testing is designed to measure.
        </p>

        {/* Section: Symptoms */}
        <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
          Symptoms of Heavy Metal Exposure
        </h2>

        <p className="text-base leading-relaxed mb-4 font-sans">
          Heavy metal toxicity is often called the &quot;great mimicker&quot; because its symptoms overlap with dozens of other conditions. Many people go years without a correct diagnosis. Symptoms depend on which metal is involved and how long exposure has lasted, but common signs include:
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-base leading-relaxed">
          <li>Chronic fatigue and brain fog</li>
          <li>Headaches and muscle aches</li>
          <li>Digestive problems (nausea, cramping, diarrhea)</li>
          <li>Numbness or tingling in hands and feet</li>
          <li>Mood changes, irritability, or difficulty concentrating</li>
          <li>Skin rashes or discoloration</li>
          <li>High blood pressure with no clear cause</li>
        </ul>

        <p className="text-base leading-relaxed mb-4 font-sans">
          If you have several of these symptoms and your doctor hasn&apos;t found an explanation, a heavy metal blood test is worth considering. The only way to know your levels is to test.
        </p>

        {/* Section: How Testing Works */}
        <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
          How Heavy Metal Blood Testing Works
        </h2>

        <p className="text-base leading-relaxed mb-4 font-sans">
          A heavy metal blood test measures the concentration of specific metals in your bloodstream. It is a straightforward blood draw, similar to a routine lab visit. Results are typically reported in micrograms per liter (mcg/L) or micrograms per deciliter (mcg/dL) and compared against established reference ranges.
        </p>

        <p className="text-base leading-relaxed mb-4 font-sans">
          Blood testing captures recent and ongoing exposure. For metals like lead and mercury, blood levels reflect exposure over the past few weeks to months. For longer-term accumulation, some practitioners also test urine or hair, but blood remains the clinical standard for acute screening.
        </p>

        <p className="text-base leading-relaxed mb-4 font-sans">
          Proxima&apos;s approach goes beyond a single snapshot.{" "}
          <Link href="/science" className="underline text-proxima-maroon hover:text-proxima-red">
            Our diagnostic platform
          </Link>{" "}
          is built to track environmental toxin levels over time, helping you understand not just where you stand today but how your exposure changes as you take action.
        </p>

        {/* Section: Detox */}
        <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
          Can You Detox Heavy Metals From Your Body?
        </h2>

        <p className="text-base leading-relaxed mb-4 font-sans">
          The internet is full of heavy metal detox protocols: special diets, supplements, clay baths, chelation therapy. Some have a basis in medicine. Many do not. Here is what the evidence supports:
        </p>

        <p className="text-base leading-relaxed mb-4 font-sans">
          <strong>Chelation therapy</strong> is an FDA-approved treatment for severe lead and mercury poisoning. It uses drugs that bind to metals so your kidneys can excrete them. It is effective but carries risks and should only be done under medical supervision.
        </p>

        <p className="text-base leading-relaxed mb-4 font-sans">
          <strong>Source reduction</strong> is the single most effective strategy for most people. Filter your water. Vary your diet. Test your home for lead. Avoid high-mercury fish. These steps lower your ongoing intake and give your body a chance to clear existing stores naturally.
        </p>

        <p className="text-base leading-relaxed mb-4 font-sans">
          <strong>Nutritional support</strong> can help. Adequate calcium, iron, and vitamin C intake can reduce the absorption of lead and other metals. A diet rich in fiber and antioxidants supports your body&apos;s natural detoxification pathways.
        </p>

        <p className="text-base leading-relaxed mb-4 font-sans">
          The first step in any detox plan should be testing. Without baseline numbers, you are guessing. With data, you can target the right sources and track real progress.
        </p>

        {/* Section: Who Should Get Tested */}
        <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
          Who Should Get a Heavy Metal Blood Test?
        </h2>

        <p className="text-base leading-relaxed mb-4 font-sans">
          Heavy metal testing is not just for people who feel sick. You should consider testing if you:
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-base leading-relaxed">
          <li>Live in a home built before 1978</li>
          <li>Drink water from a private well</li>
          <li>Eat fish more than twice a week</li>
          <li>Work in construction, manufacturing, mining, or agriculture</li>
          <li>Have unexplained symptoms like fatigue, brain fog, or GI issues</li>
          <li>Are pregnant or planning to become pregnant</li>
          <li>Want a baseline understanding of your environmental exposure</li>
        </ul>

        {/* FAQ Section */}
        <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
          Frequently Asked Questions
        </h2>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">
          How much does a heavy metal blood test cost?
        </h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          Costs vary widely. Through a traditional lab, heavy metal panels can range from $100 to $400 depending on which metals are included and whether insurance covers the test. Proxima is building an accessible testing platform designed to lower that barrier.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">
          What levels of heavy metals in blood are dangerous?
        </h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          It depends on the metal. For lead, the CDC uses a reference value of 3.5 mcg/dL in children, but there is no confirmed safe level. For mercury, levels above 5 mcg/L may warrant attention. Arsenic levels above 50 mcg/L in urine are considered elevated. Your results should always be interpreted by a healthcare provider familiar with environmental medicine.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">
          Can heavy metals cause autoimmune disease?
        </h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          Research suggests a connection. Mercury and lead exposure have been linked to immune system dysregulation in multiple studies. While heavy metals may not directly cause autoimmune conditions, they can act as environmental triggers that push a susceptible immune system toward dysfunction.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">
          How long does it take to lower heavy metal levels?
        </h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          It depends on the metal and the severity of exposure. Mercury&apos;s half-life in blood is about 50 days. Lead stored in bones can take years to clear. With source reduction and proper support, most people see meaningful improvement in blood levels within three to six months. Ongoing testing helps you track that progress.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">
          Is hair or urine testing better than blood testing?
        </h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          Each method captures different information. Blood testing reflects recent exposure and is the clinical standard for screening. Urine testing (especially provoked urine) can show stored body burden. Hair testing captures exposure over months but can be affected by external contamination. For most people, a blood test is the best starting point.
        </p>

        {/* CTA */}
        <div className="mt-16 border-t border-[var(--border-primary)] pt-10">
          <h2 className="text-2xl font-bold mb-4 font-display">
            Find Out What&apos;s in Your Blood
          </h2>
          <p className="text-base leading-relaxed mb-6 font-sans">
            You can&apos;t fix what you can&apos;t see. Proxima&apos;s free toxin assessment takes a few minutes and helps you understand your potential exposure risk based on your lifestyle and environment. No blood draw required to start.
          </p>
          <Link
            href="/waitlist"
            className="inline-block bg-proxima-black text-proxima-cream px-8 py-3 font-mono text-sm uppercase tracking-wider hover:bg-proxima-maroon transition-colors"
          >
            Take the Free Toxin Assessment
          </Link>
        </div>
      </article>
    </main>
  );
}
