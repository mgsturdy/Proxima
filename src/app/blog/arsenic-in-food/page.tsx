import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Arsenic in Food: Sources, Risks, and How to Protect Yourself",
  description:
    "Rice, apple juice, and chicken contain arsenic. Learn which foods have the most arsenic, how it affects your health, and what you can do to reduce exposure.",
};

export default function ArsenicInFoodPage() {
  return (
    <>
      <p className="font-mono text-xs text-tertiary uppercase tracking-wider mb-4">
        Published by Proxima Health | January 30, 2026
      </p>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 font-display">
        Arsenic in Food: What You&apos;re Eating, Why It Matters, and How to
        Lower Your Exposure
      </h1>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Most people hear &quot;arsenic&quot; and think of old mystery novels. A
        poison slipped into a drink. Something dramatic and deliberate. The
        reality is far more ordinary. You probably ate arsenic today. It was in
        your rice, your morning juice, maybe your chicken. Small amounts, sure.
        But those small amounts add up over years and decades.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Arsenic in food is one of the most common and least talked about sources
        of toxic exposure in the American diet. Here&apos;s what you need to
        know about where it hides, what it does to your body, and how to cut
        your intake starting today.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        How Arsenic Gets Into Your Food
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Arsenic is a naturally occurring element found in soil, water, and rock.
        It exists in two forms:{" "}
        <strong>organic arsenic</strong> and{" "}
        <strong>inorganic arsenic</strong>. Inorganic arsenic is the more
        dangerous form. It&apos;s classified as a Group 1 carcinogen by the
        World Health Organization, meaning there is sufficient evidence that it
        causes cancer in humans.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Plants absorb arsenic from the soil and water they grow in. Some plants
        are better at absorbing it than others. Rice is the biggest offender
        because it grows in flooded paddies, giving it prolonged contact with
        arsenic-contaminated water. Decades of arsenic-based pesticide use in
        the United States have left residues in agricultural soil that persist
        today.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Industrial activity, mining, and coal burning also release arsenic into
        groundwater. This contaminated water irrigates crops and enters the food
        supply at multiple points. The result is low-level arsenic exposure
        across a wide range of everyday foods.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Which Foods Have the Most Arsenic?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Not all foods carry the same risk. Research from the FDA, Consumer
        Reports, and academic studies consistently flag the same culprits.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Rice and rice products.</strong> Arsenic in rice is a well
        documented problem. Rice absorbs roughly 10 times more inorganic arsenic
        than other grains. Brown rice has more than white rice because arsenic
        concentrates in the outer bran layer. Rice cereal, rice milk, rice
        crackers, and rice syrup (used as a sweetener in many processed foods)
        all carry elevated levels. A single serving of rice can contain 2 to 7
        micrograms of inorganic arsenic.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Apple juice and fruit juice.</strong> The FDA has found
        measurable levels of inorganic arsenic in apple juice and grape juice.
        Arsenic gets into fruit juice through contaminated groundwater used to
        irrigate orchards. Children are especially vulnerable because they drink
        more juice relative to their body weight.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Chicken and poultry.</strong> Until 2013, arsenic-based drugs
        like roxarsone were routinely added to poultry feed to promote growth
        and prevent disease. The FDA withdrew approval, but residues persist in
        soil where poultry litter was used as fertilizer. Some imported poultry
        may still be raised with arsenic-containing feed additives.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Seafood.</strong> Fish and shellfish contain higher total arsenic
        levels, but most of it is organic arsenic, which is far less toxic.
        However, certain seaweed products, particularly hijiki, can contain
        significant inorganic arsenic.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Root vegetables and leafy greens.</strong> Carrots, sweet
        potatoes, and lettuce grown in contaminated soil can accumulate arsenic.
        The levels are generally lower than rice, but they contribute to your
        total daily intake.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Arsenic Health Effects: What Happens Inside Your Body
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Arsenic exposure from food is typically chronic, meaning low doses over
        long periods. This is different from acute poisoning, but it is not
        harmless. The{" "}
        <Link
          href="/science"
          className="text-accent underline hover:text-accent/80"
        >
          scientific evidence on arsenic health effects
        </Link>{" "}
        is extensive and concerning.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Cancer.</strong> Chronic inorganic arsenic exposure is linked to
        cancers of the bladder, lung, skin, kidney, and liver. The risk
        increases with cumulative lifetime exposure. Even levels previously
        considered &quot;safe&quot; in drinking water have been associated with
        elevated cancer rates in large population studies.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Cardiovascular disease.</strong> Arsenic damages blood vessels
        and promotes atherosclerosis. Studies show that people with higher
        arsenic exposure have increased rates of heart disease, hypertension,
        and stroke. A 2024 meta-analysis found a dose-response relationship
        between arsenic levels and cardiovascular mortality.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Diabetes.</strong> Multiple studies link arsenic exposure to
        insulin resistance and type 2 diabetes. Arsenic interferes with insulin
        signaling pathways and pancreatic beta-cell function. Even moderate
        exposure levels are associated with higher diabetes risk.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Neurological effects.</strong> In children, arsenic exposure is
        associated with lower IQ scores, learning difficulties, and impaired
        cognitive development. In adults, chronic exposure is linked to
        peripheral neuropathy, memory problems, and reduced cognitive function.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Immune suppression.</strong> Arsenic weakens immune function,
        making the body less effective at fighting infections and detecting
        abnormal cells. This may partly explain its connection to cancer.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        How Arsenic Accumulates Over Time
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Your body does process and excrete arsenic, primarily through urine. But
        the process isn&apos;t perfect. Inorganic arsenic and its metabolites
        bind to proteins and accumulate in tissues, particularly in the skin,
        hair, nails, and organs like the liver and kidneys.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The half-life of inorganic arsenic in the body is roughly 2 to 4 days
        for a single dose. But when you&apos;re exposed daily through food and
        water, your body never fully clears the backlog. You reach a steady
        state where arsenic is always present. Over years, this persistent
        low-level burden contributes to tissue damage and disease risk.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        This is why{" "}
        <Link
          href="/blog/heavy-metals-in-blood"
          className="text-accent underline hover:text-accent/80"
        >
          testing for heavy metals in blood
        </Link>{" "}
        matters. A single measurement can tell you whether your current
        exposure is within a safe range or whether you need to make changes.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        How to Reduce Arsenic in Your Diet
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        You can&apos;t eliminate arsenic from your diet completely. It&apos;s in
        too many foods and in the water supply itself. But you can significantly
        lower your intake with practical changes.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Rinse and cook rice differently.</strong> Washing rice
        thoroughly before cooking removes surface arsenic. Cooking rice in
        excess water (like pasta, then draining) reduces inorganic arsenic by up
        to 60% compared to the standard absorption method. Basmati rice from
        California, India, or Pakistan tends to have lower arsenic than rice
        grown in the southern United States.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Rotate your grains.</strong> Don&apos;t rely on rice as your
        only grain. Quinoa, millet, buckwheat, oats, and barley have
        significantly lower arsenic levels. Rotating grains spreads your
        exposure across multiple foods rather than concentrating it in one.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Limit fruit juice.</strong> The American Academy of Pediatrics
        recommends no juice for children under one year and limited amounts for
        older children. Adults should also be mindful. Whole fruits are a better
        choice because the fiber slows absorption and the arsenic levels are
        lower than in concentrated juice.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Filter your drinking water.</strong> Reverse osmosis systems
        remove up to 95% of arsenic from water. Activated alumina and ion
        exchange filters are also effective. If you use well water, get it
        tested. The EPA standard for arsenic in public water is 10 parts per
        billion, but some researchers argue this is still too high.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Choose food sources carefully.</strong> Buy rice products that
        have been tested for arsenic content. Look for brands that publish their
        testing results. Organic certification does not guarantee lower arsenic
        because the contamination comes from soil and water, not synthetic
        pesticides.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Why Testing for Arsenic Exposure Matters
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Dietary changes help, but without testing, you&apos;re guessing. You
        don&apos;t know your baseline level, and you can&apos;t measure
        improvement. Standard blood panels at your annual physical don&apos;t
        include arsenic or other{" "}
        <Link
          href="/diagnostics"
          className="text-accent underline hover:text-accent/80"
        >
          environmental toxin markers
        </Link>
        .
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Proxima Health tests for arsenic as part of our environmental toxin
        diagnostic panel. A simple blood draw can reveal whether your arsenic
        levels are elevated and help you track changes as you adjust your diet
        and water sources. Knowing your number turns vague concern into specific
        action.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Frequently Asked Questions
      </h2>

      <h3 className="font-bold text-lg mt-6 mb-2">
        What foods have the highest arsenic levels?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Rice and rice-based products consistently top the list. Brown rice has
        more inorganic arsenic than white rice. Apple juice, grape juice, and
        certain seaweed varieties (especially hijiki) also have elevated levels.
        Root vegetables and chicken can contribute smaller amounts depending on
        where they were grown or raised.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Is arsenic in rice dangerous?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        A single serving of rice won&apos;t harm you. The concern is chronic
        exposure. If you eat rice daily, especially as a dietary staple, your
        cumulative inorganic arsenic intake can reach levels associated with
        increased cancer and cardiovascular risk. Cooking rice in excess water
        and rotating grains significantly reduces your exposure.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        How can I test for arsenic in my body?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Arsenic can be measured through blood tests, urine tests, and hair or
        nail analysis. Blood and urine tests reflect recent exposure (days to
        weeks), while hair and nails show longer-term patterns. Proxima
        Health&apos;s{" "}
        <Link
          href="/diagnostics"
          className="text-accent underline hover:text-accent/80"
        >
          diagnostic panel
        </Link>{" "}
        includes arsenic testing as part of a comprehensive environmental toxin
        screen.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Does cooking remove arsenic from food?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Standard cooking does not remove arsenic from most foods. The exception
        is rice. Cooking rice in a large volume of water (6 to 10 parts water
        to 1 part rice) and draining the excess removes up to 60% of inorganic
        arsenic. Rinsing rice before cooking also helps. For other foods, the
        arsenic is bound within the plant tissue and is not reduced by heat.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Is organic food lower in arsenic?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Not necessarily. Arsenic contamination comes primarily from soil and
        groundwater, not synthetic pesticides. Organic rice grown in
        arsenic-rich soil will have similar levels to conventional rice from the
        same region. The origin and growing conditions of the food matter more
        than the organic label when it comes to arsenic content.
      </p>

      {/* CTA */}
      <div className="mt-16 p-8 rounded-2xl bg-surface border border-primary text-center">
        <h2 className="text-2xl font-bold mb-4 font-display">
          Find Out Your Arsenic Levels
        </h2>
        <p className="text-base leading-relaxed mb-6 font-sans max-w-xl mx-auto">
          Proxima Health tests for arsenic and other environmental toxins with a
          simple blood draw. Join the waitlist to get access to our diagnostic
          platform and take control of your exposure.
        </p>
        <Link
          href="/waitlist"
          className="inline-block bg-accent text-white font-bold px-8 py-3 rounded-full hover:bg-accent/90 transition-colors"
        >
          Join the Waitlist
        </Link>
      </div>
    </>
  );
}
