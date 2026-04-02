import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Endocrine Disruptors: Hidden Hormone Threats",
  description:
    "Learn how endocrine disruptors in plastics, cosmetics, and food packaging affect your hormones. Discover the most common ones and how to reduce exposure.",
};

export default function EndocrineDisruptorsPage() {
  return (
    <>
      <p className="font-mono text-xs text-tertiary uppercase tracking-wider mb-4">
        Published by Proxima Health | February 20, 2026
      </p>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 font-display">
        Endocrine Disruptors: The Chemicals Hijacking Your Hormones
      </h1>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Your endocrine system runs on chemical signals. Hormones tell your
        thyroid to speed up or slow down. They tell your reproductive system
        when to ovulate. They regulate your metabolism, your mood, and your
        sleep. The system works well when nothing interferes with it.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The problem is that hundreds of synthetic chemicals can interfere with
        it. They&apos;re called <strong>endocrine disruptors</strong>, and
        they&apos;re in products you use every day. Plastics. Cosmetics. Food
        packaging. Pesticides on your produce. They mimic your hormones, block
        them, or scramble the signals your body depends on.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Here&apos;s what they are, where they hide, and what you can do about
        them.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What Are Endocrine Disrupting Chemicals?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Endocrine disrupting chemicals (EDCs) are substances that interfere
        with hormone production, release, transport, or action. Some mimic
        estrogen so closely that your body can&apos;t tell the difference.
        Others block testosterone or disrupt thyroid signaling. The result is a
        hormonal environment your body never evolved to handle.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The Endocrine Society, the world&apos;s largest organization of
        hormone researchers, has called EDCs a &quot;significant concern to
        public health.&quot; The WHO estimates that endocrine disrupting
        chemicals cost the EU over 150 billion euros per year in health-related
        expenses.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        What makes them dangerous is that they work at extremely low doses.
        Your hormones operate in parts per billion or even parts per trillion.
        Endocrine disruptors work at those same concentrations. Traditional
        toxicology says &quot;the dose makes the poison,&quot; but EDCs break
        that rule. Sometimes a lower dose causes more disruption than a higher
        one.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        The Most Common Endocrine Disruptors
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        There are over 1,000 known or suspected endocrine disrupting chemicals.
        These are the ones you encounter most often.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>BPA (Bisphenol A).</strong> Found in polycarbonate plastics,
        can linings, thermal receipt paper, and some dental sealants. BPA is a
        xenoestrogen, meaning it mimics estrogen in your body. It binds to
        estrogen receptors and can trigger estrogenic effects even at very low
        levels. Over 90% of Americans have detectable BPA in their urine.
        &quot;BPA-free&quot; products often use BPS or BPF, which early
        research suggests may be just as disruptive.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Phthalates.</strong> Used to make plastics soft and flexible.
        You&apos;ll find them in vinyl flooring, shower curtains, food
        packaging, and personal care products like shampoo and lotion. DEHP is
        the most studied phthalate, and its metabolite MEHP has been linked to
        reduced testosterone and altered reproductive development. Phthalates
        are anti-androgenic, meaning they block or reduce the effects of male
        hormones.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Parabens.</strong> Preservatives used in cosmetics, lotions,
        shampoos, and some processed foods. Methylparaben, ethylparaben, and
        propylparaben are the most common. They have weak estrogenic activity
        and have been detected in breast tumor tissue. While the direct
        cancer link is still debated, their hormone-mimicking behavior is well
        established.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>PFAS (Per- and Polyfluoroalkyl Substances).</strong> Called
        &quot;forever chemicals&quot; because they don&apos;t break down in the
        environment. Found in nonstick cookware, waterproof clothing,
        stain-resistant fabrics, and food packaging. PFAS interfere with
        thyroid function and have been linked to immune suppression, liver
        damage, and several cancers.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Pesticides (Atrazine, Glyphosate, Chlorpyrifos).</strong> Many
        agricultural pesticides have endocrine disrupting properties. Atrazine,
        one of the most widely used herbicides in the US, has been shown to
        turn male frogs into females at concentrations found in drinking water.
        These chemicals reach you through food, water, and air.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Xenoestrogens: The Estrogen Mimics
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Among endocrine disruptors, xenoestrogens deserve special attention.
        These are synthetic chemicals that mimic estrogen closely enough to
        activate estrogen receptors in your cells. BPA, some phthalates,
        parabens, and certain pesticides all fall into this category.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The concern with xenoestrogens is cumulative exposure. You might
        encounter BPA from a can lining at lunch, parabens from your shampoo
        in the morning, and phthalates from food packaging at dinner. Each
        individual exposure might be small. But your body is dealing with all
        of them at once, and they all push in the same direction: excess
        estrogenic activity.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        This cumulative burden is what researchers call the &quot;cocktail
        effect.&quot; The{" "}
        <Link
          href="/science"
          className="text-accent underline hover:text-accent/80"
        >
          science behind environmental toxin exposure
        </Link>{" "}
        makes clear that studying one chemical at a time misses the real-world
        picture. Your body is always dealing with a mixture.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        How Endocrine Disruptors Affect Your Health
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Hormone disruptors in everyday products don&apos;t cause one single
        disease. They shift your hormonal balance in ways that ripple across
        multiple systems. Here are the areas where the evidence is strongest.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Fertility and reproduction.</strong> EDCs are a leading
        suspect in declining sperm counts worldwide. A 2023 meta-analysis
        found that sperm counts have dropped over 50% since 1973, with the
        decline accelerating. In women, EDC exposure has been linked to
        endometriosis, polycystic ovary syndrome (PCOS), and earlier puberty.
        BPA and phthalates are particularly associated with reduced fertility
        in both men and women.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Thyroid function.</strong> Your thyroid regulates metabolism,
        energy, and body temperature. PFAS, PCBs, and certain flame retardants
        can block thyroid hormone receptors or reduce circulating thyroid
        hormone levels. Even small disruptions to thyroid function can cause
        fatigue, weight gain, brain fog, and depression. During pregnancy,
        thyroid disruption can impair fetal brain development.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Metabolism and weight.</strong> Some endocrine disruptors are
        classified as &quot;obesogens&quot; because they promote fat storage.
        Tributyltin, BPA, and certain phthalates can reprogram fat cells to
        store more fat, alter appetite regulation, and shift how your body
        processes glucose. Research suggests that EDC exposure in the womb may
        predispose children to obesity later in life.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Hormone-sensitive cancers.</strong> Breast cancer, prostate
        cancer, and testicular cancer all have hormonal components. Long-term
        exposure to xenoestrogens may increase risk for these cancers by
        promoting abnormal cell growth in hormone-sensitive tissues. The
        research is still establishing direct causation, but the biological
        mechanism is plausible and the epidemiological data is concerning.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        How to Reduce Your Exposure
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        You cannot eliminate all exposure to endocrine disruptors. They are
        too widespread. But you can dramatically reduce your daily intake with
        practical changes.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Rethink food storage.</strong> Stop storing food in plastic
        containers. Never heat food in plastic. Use glass, stainless steel, or
        ceramic instead. Avoid canned foods when possible, or choose brands
        that use BPA-free linings.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Read personal care labels.</strong> Avoid products listing
        parabens (methylparaben, propylparaben, butylparaben) or
        &quot;fragrance,&quot; which often contains phthalates. The EWG Skin
        Deep database is a good resource for checking product safety.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Filter your water.</strong> Activated carbon filters remove
        many pesticides and some PFAS. Reverse osmosis systems are more
        thorough. At minimum, filter your drinking and cooking water.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Choose organic when it matters.</strong> You don&apos;t need
        to buy everything organic. Focus on the &quot;Dirty Dozen&quot;
        produce list from EWG, which identifies fruits and vegetables with the
        highest pesticide residues.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Ditch nonstick cookware.</strong> Traditional nonstick pans use
        PFAS coatings. Switch to cast iron, stainless steel, or ceramic
        cookware.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Ventilate and dust.</strong> Flame retardants and phthalates
        accumulate in household dust. Regular dusting with a damp cloth and
        good ventilation reduce inhalation exposure.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        For more detail on BPA specifically, see our guide on{" "}
        <Link
          href="/blog/bpa-exposure"
          className="text-accent underline hover:text-accent/80"
        >
          BPA exposure and how to avoid it
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Why Testing for Endocrine Disruptors Matters
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Reducing exposure is important, but you need a baseline to know where
        you stand. Standard blood panels don&apos;t screen for environmental
        toxins. That means most people have no idea how much BPA, phthalates,
        or parabens are circulating in their bodies.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Proxima Health&apos;s{" "}
        <Link
          href="/diagnostics"
          className="text-accent underline hover:text-accent/80"
        >
          diagnostic platform
        </Link>{" "}
        tests for key endocrine disrupting chemicals, including BPA, MEHP (a
        primary phthalate metabolite), and Methylparaben. These biomarkers give
        you a concrete picture of your exposure level, not a guess based on
        lifestyle questionnaires.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Knowing your levels lets you make targeted changes and track whether
        those changes are working. It turns &quot;I should probably use less
        plastic&quot; into measurable progress.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Frequently Asked Questions
      </h2>

      <h3 className="font-bold text-lg mt-6 mb-2">
        What are endocrine disruptors and where are they found?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Endocrine disruptors are chemicals that interfere with your
        body&apos;s hormone system. They are found in plastics (BPA,
        phthalates), personal care products (parabens, phthalates), nonstick
        cookware (PFAS), pesticides, canned food linings, and household dust.
        Most people encounter multiple endocrine disrupting chemicals every
        day through food, water, air, and skin contact.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Can endocrine disruptors affect fertility?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Yes. Research consistently links EDC exposure to reduced fertility in
        both men and women. In men, BPA and phthalate exposure is associated
        with lower sperm count, reduced sperm quality, and decreased
        testosterone. In women, EDCs are linked to endometriosis, PCOS,
        irregular cycles, and reduced egg quality. Couples trying to conceive
        are often advised to reduce EDC exposure as part of their plan.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Are &quot;BPA-free&quot; products safe?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Not necessarily. Many BPA-free products replace BPA with structurally
        similar chemicals like BPS or BPF. Early research suggests these
        substitutes may have similar endocrine disrupting effects. The safest
        approach is to minimize contact with plastic altogether by choosing
        glass, stainless steel, or ceramic alternatives for food and drink
        storage.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        How do I know if endocrine disruptors are affecting my health?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Symptoms of endocrine disruption are often vague and overlap with many
        conditions: fatigue, weight changes, irregular periods, brain fog, low
        libido, and mood changes. The only way to know your actual exposure
        level is through testing. Proxima Health tests for BPA, MEHP, and
        Methylparaben to give you a clear picture of your endocrine disruptor
        burden.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Do endocrine disruptors affect children differently than adults?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Children and developing fetuses are more vulnerable to endocrine
        disruption. Their hormonal systems are still forming, and small
        disruptions can have lasting effects on growth, brain development,
        puberty timing, and reproductive health. Prenatal exposure to EDCs has
        been linked to behavioral changes, lower IQ scores, and increased
        obesity risk later in life. Reducing exposure during pregnancy and
        early childhood is especially important.
      </p>

      {/* CTA */}
      <div className="mt-16 p-8 rounded-2xl bg-surface border border-primary text-center">
        <h2 className="text-2xl font-bold mb-4 font-display">
          Measure Your Exposure to Endocrine Disruptors
        </h2>
        <p className="text-base leading-relaxed mb-6 font-sans max-w-xl mx-auto">
          Proxima Health tests for BPA, phthalate metabolites, and parabens
          so you know exactly what&apos;s in your body. Take our free toxin
          exposure assessment to understand your risk and get personalized
          recommendations.
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
