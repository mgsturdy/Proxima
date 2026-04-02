import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BPA Exposure: Why BPA-Free Isn't Enough",
  description:
    "BPA is in receipts, cans, and water bottles. BPA-free alternatives like BPS and BPF are just as harmful. Learn what BPA does to your hormones and how to test for it.",
};

export default function BPAExposurePage() {
  return (
    <>
      <p className="font-mono text-xs text-tertiary uppercase tracking-wider mb-4">
        Published by Proxima Health | March 1, 2026
      </p>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 font-display">
        BPA Exposure: The Chemical That Was Supposed to Be Gone
      </h1>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Bisphenol A was first synthesized in 1891. By the 1960s it was
        everywhere: lining cans, hardening plastics, coating receipts. When
        the health concerns hit mainstream awareness around 2008, the market
        responded with &quot;BPA-free&quot; labels on everything from water
        bottles to baby toys. Problem solved, right?
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Not even close. BPA is still in widespread use. And the replacements
        manufacturers chose are, in many cases, just as harmful. Here&apos;s
        what the science actually says about BPA exposure, what it does to
        your body, and what you can do about it.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        BPA Is Still Everywhere
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Despite the consumer backlash, BPA remains one of the most
        produced chemicals on the planet. Global production exceeds 10
        million metric tons per year. The CDC&apos;s National Health and
        Nutrition Examination Survey (NHANES) has consistently found{" "}
        <strong>detectable BPA in over 90% of Americans tested</strong>.
        That number hasn&apos;t budged much in a decade.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Where is it coming from? Thermal receipt paper is one of the
        largest sources of dermal BPA exposure. The coating on the inside of
        canned foods leaches BPA directly into what you eat. Polycarbonate
        plastics, especially older ones, release BPA when heated or
        scratched. Even some dental sealants and medical devices contain it.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The FDA banned BPA from baby bottles and sippy cups in 2012. But for
        adults, there are no federal restrictions on BPA in food packaging in
        the United States. Europe has moved faster. The EU adopted a
        near-total ban on BPA in food contact materials in 2024, citing
        evidence that safe exposure levels are far lower than previously
        assumed.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What BPA Does to Your Hormones
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        BPA is an endocrine disruptor. That means it interferes with your
        hormone system. Specifically, BPA mimics estrogen. It binds to
        estrogen receptors and triggers biological responses that your body
        didn&apos;t ask for.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The bisphenol A health effects documented in peer-reviewed research
        are extensive. Studies have linked BPA exposure to:
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Reproductive problems.</strong> BPA disrupts estrogen and
        androgen signaling. In women, this has been associated with polycystic
        ovary syndrome (PCOS), reduced egg quality, and implantation failure
        during IVF. In men, higher urinary BPA levels correlate with lower
        sperm count, reduced motility, and increased DNA damage in sperm.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Metabolic disruption.</strong> BPA promotes fat cell
        formation and insulin resistance. Multiple epidemiological studies
        have found associations between BPA exposure and higher rates of
        type 2 diabetes, obesity, and metabolic syndrome. A 2023 meta-analysis
        in Environmental Health Perspectives confirmed a dose-response
        relationship between urinary BPA and diabetes risk.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Thyroid interference.</strong> BPA competes with thyroid
        hormones at the receptor level. Even low-dose exposure has been shown
        to alter TSH and T4 levels, which can affect energy, weight, mood,
        and cognitive function.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Developmental effects.</strong> Prenatal BPA exposure is
        linked to behavioral changes in children, including increased
        anxiety, hyperactivity, and aggression. Animal studies show effects
        on brain development at doses well below what regulators once
        considered safe.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The{" "}
        <Link
          href="/science"
          className="text-accent underline hover:text-accent/80"
        >
          scientific evidence
        </Link>{" "}
        is strong enough that the Endocrine Society, the world&apos;s
        largest organization of hormone researchers, has called BPA a
        &quot;clear health hazard.&quot;
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        The &quot;BPA-Free&quot; Problem
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        When companies removed BPA from their products, they needed a
        replacement. Most turned to structurally similar chemicals:
        bisphenol S (BPS) and bisphenol F (BPF). These are the compounds
        hiding behind that reassuring &quot;BPA-free&quot; sticker.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The problem is that BPS and BPF behave almost identically to BPA in
        the body.{" "}
        <strong>
          They bind to the same estrogen receptors, disrupt the same
          hormonal pathways, and show up at similar concentrations in human
          urine and blood
        </strong>
        . A 2020 study published in Current Opinion in Toxicology concluded
        that BPS is &quot;at least as hormonally active as BPA.&quot;
        Research on BPF tells a similar story.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        In some ways, the substitutes may be worse. BPS is more resistant to
        environmental degradation, meaning it persists longer in your body
        and in the environment. And because consumers assume
        &quot;BPA-free&quot; means safe, they may actually increase their
        exposure by trusting the label.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        This is a pattern called &quot;regrettable substitution.&quot;
        Replace one harmful chemical with a structurally similar one that
        hasn&apos;t been studied as much. By the time research catches up,
        the replacement is already in billions of products.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Your Biggest Sources of BPA Exposure
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Understanding where BPA in plastic and other materials enters your
        life is the first step toward reducing exposure. These are the
        primary sources, ranked by the research:
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Thermal receipt paper.</strong> Cash register receipts are
        coated with BPA or BPS as a print developer. The chemical transfers
        through your skin on contact. One study found that handling receipts
        for just five seconds transferred measurable BPA to fingers, and
        using hand sanitizer beforehand increased absorption by up to 100x.
        If you handle receipts regularly for work, this is your biggest
        exposure route.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Canned food and beverages.</strong> The epoxy resin lining
        inside most metal cans contains BPA. Acidic foods like tomatoes,
        soups, and sodas leach more BPA from the lining. Studies show that
        eating canned soup for five consecutive days increases urinary BPA
        levels by over 1,000% compared to eating fresh soup.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Polycarbonate plastic containers.</strong> Hard, clear
        plastic containers marked with recycling code #7 may contain BPA.
        Heat accelerates leaching. Microwaving food in these containers or
        putting them through the dishwasher dramatically increases BPA
        release.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Water supply.</strong> BPA has been detected in municipal
        water systems, leaching from aging PVC pipes and industrial runoff.
        Concentrations are generally low but contribute to chronic, low-dose
        exposure over time.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        How to Actually Reduce Your BPA Exposure
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        You cannot eliminate BPA exposure entirely. It is too pervasive in
        the built environment. But you can cut your intake significantly
        with practical changes:
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Decline receipts or go digital.</strong> This single change
        eliminates one of the highest-concentration exposure sources.
        If you must handle receipts, wash your hands afterward and never use
        hand sanitizer before touching one.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Reduce canned food consumption.</strong> Choose fresh, frozen,
        or foods in glass jars instead. When you do use canned goods, look
        for brands that specifically use BPA-free and bisphenol-free linings.
        Some manufacturers have switched to oleoresin or acrylic-based
        coatings.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Switch to glass and stainless steel.</strong> For food
        storage and water bottles, glass and steel are inert. They don&apos;t
        leach chemicals regardless of temperature. Avoid &quot;BPA-free&quot;
        plastic, which often just means BPS or BPF instead.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Never heat food in plastic.</strong> This includes
        &quot;microwave-safe&quot; containers. The label means the container
        won&apos;t melt, not that it won&apos;t release chemicals. Transfer
        food to glass or ceramic before microwaving.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Filter your water.</strong> Activated carbon and reverse
        osmosis systems reduce BPA levels in drinking water. Standard
        pitcher filters provide some benefit but are less effective than
        under-sink systems.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Why Testing for BPA Matters
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        BPA has a half-life of about six hours in the human body. That
        sounds reassuring until you realize that most people are exposed
        continuously throughout the day. Your body never fully clears it
        because the next dose arrives before the last one is gone.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Standard blood panels don&apos;t test for BPA or other endocrine
        disruptors. Your doctor likely has no idea what your BPA levels are.
        That gap is exactly what Proxima Health&apos;s{" "}
        <Link
          href="/diagnostics"
          className="text-accent underline hover:text-accent/80"
        >
          endocrine disruptors panel
        </Link>{" "}
        is designed to fill. We test for BPA alongside other bisphenols,
        phthalates, and environmental estrogens to give you a complete
        picture of your endocrine toxin load.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Knowing your levels lets you prioritize. If your BPA is high, you
        can identify the most likely sources in your routine, make targeted
        changes, and retest to confirm they worked. Without data, you&apos;re
        guessing.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        The Regulatory Gap
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        In 2023, the European Food Safety Authority (EFSA) reduced its
        tolerable daily intake for BPA by a factor of 20,000. That is not a
        typo. They determined that the previous safe level was 20,000 times
        too high based on new immunotoxicity data.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The U.S. FDA has not followed suit. The agency last updated its BPA
        assessment in 2014 and has maintained that current exposure levels
        are safe. This leaves American consumers with far less protection
        than their European counterparts, and it means that individual
        awareness and testing are more important than ever.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Frequently Asked Questions
      </h2>

      <h3 className="font-bold text-lg mt-6 mb-2">
        What is BPA and why is it harmful?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Bisphenol A (BPA) is an industrial chemical used to make
        polycarbonate plastics and epoxy resins. It is harmful because it
        mimics estrogen in the body, binding to hormone receptors and
        disrupting normal endocrine function. Research links BPA exposure
        to reproductive problems, metabolic disorders, thyroid disruption,
        and developmental effects in children.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Is BPA-free plastic actually safe?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Not necessarily. Most BPA-free plastics use replacement chemicals
        like bisphenol S (BPS) or bisphenol F (BPF), which have similar
        chemical structures and similar hormonal activity. Current research
        suggests these BPA free alternatives are not significantly safer
        than BPA itself. Glass and stainless steel remain the safest
        options for food and drink containers.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        How can I test my BPA levels?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Standard medical tests do not screen for BPA. Specialized
        environmental health panels can measure BPA and other bisphenols in
        urine or blood. Proxima Health&apos;s{" "}
        <Link
          href="/diagnostics"
          className="text-accent underline hover:text-accent/80"
        >
          diagnostics platform
        </Link>{" "}
        includes BPA as part of a comprehensive endocrine disruptors panel
        that measures your total bisphenol and environmental estrogen
        exposure.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        What foods have the most BPA?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Canned foods are the largest dietary source of BPA, especially
        acidic foods like canned tomatoes, soups, and sodas. The BPA in the
        epoxy can lining leaches into the food over time. Studies show that
        eating canned food daily can increase urinary BPA by over 1,000%
        compared to eating fresh or frozen alternatives.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Does BPA leave your body?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        BPA has a biological half-life of roughly six hours and is
        primarily metabolized by the liver and excreted through urine.
        However, because most people are exposed continuously through food,
        receipts, and other sources, the body rarely fully clears it.
        Reducing exposure sources leads to measurably lower levels within
        days.
      </p>

      {/* CTA */}
      <div className="mt-16 p-8 rounded-2xl bg-surface border border-primary text-center">
        <h2 className="text-2xl font-bold mb-4 font-display">
          Find Out What&apos;s Disrupting Your Hormones
        </h2>
        <p className="text-base leading-relaxed mb-6 font-sans max-w-xl mx-auto">
          Proxima Health tests for BPA and other endocrine disruptors that
          standard blood work misses. Take our free toxin exposure assessment
          to understand your risk.
        </p>
        <Link
          href="/waitlist"
          className="inline-block bg-accent text-white font-bold px-8 py-3 rounded-full hover:bg-accent/90 transition-colors"
        >
          Take the Free Assessment
        </Link>
      </div>
    </>
  );
}
