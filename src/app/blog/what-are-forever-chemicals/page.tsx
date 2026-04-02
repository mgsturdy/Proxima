import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Are Forever Chemicals? PFAS Explained",
  description:
    "Learn what PFAS forever chemicals are, why they don't break down, where they hide in daily life, and what the health risks mean for you and your family.",
};

export default function WhatAreForeverChemicalsPage() {
  return (
    <>
      <p className="font-mono text-xs text-tertiary uppercase tracking-wider mb-4">
        Published by Proxima Health | January 25, 2026
      </p>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 font-display">
        What Are Forever Chemicals? A Plain-Language Guide to PFAS
      </h1>

      <p className="text-base leading-relaxed mb-4 font-sans text-secondary">
        You have probably seen the term "forever chemicals" in the news. Maybe
        in a headline about contaminated drinking water or a warning about
        nonstick pans. The name sounds dramatic, but it is accurate. Forever
        chemicals are synthetic substances that do not break down in the
        environment, in your water, or in your body. They persist for decades.
        And right now,{" "}
        <strong>97% of Americans have detectable levels of these chemicals in
        their blood</strong>.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        This guide explains what forever chemicals actually are, where they come
        from, why scientists are concerned about them, and what you can do about
        your own exposure. No chemistry degree required.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What Does PFAS Stand For?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        PFAS stands for per- and polyfluoroalkyl substances. That is a mouthful,
        which is why most people just say "PFAS" (pronounced "pee-fass"). PFAS
        is a family of over 12,000 man-made chemicals that have been manufactured
        since the 1940s. They were designed to resist heat, water, oil, and
        stains. That made them incredibly useful in industry. It also made them
        nearly impossible to destroy.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        You will sometimes hear PFAS called "forever chemicals." The two terms
        refer to the same thing. PFAS is the scientific name for the chemical
        family. "Forever chemicals" is the common name that describes their
        defining trait: they last practically forever.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Why Are They Called Forever Chemicals?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The nickname comes from their molecular structure. Every PFAS molecule
        contains chains of carbon atoms bonded to fluorine atoms. The
        carbon-fluorine bond is one of the strongest bonds in all of chemistry.
        It is so strong that natural processes cannot break it. Sunlight does not
        break it. Water does not break it. The bacteria that decompose other
        pollutants cannot break it. Even your liver, which is remarkably good at
        processing foreign substances, cannot break it.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        That is why PFAS accumulate. Once they enter the environment, they stay.
        Once they enter your body, they linger for years. The half-life of PFOS,
        one of the most common PFAS compounds, is roughly five years in the
        human body. That means if you absorbed a dose of PFOS today and never
        encountered another molecule of it, half of that original dose would
        still be circulating in your blood five years from now.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Our{" "}
        <Link href="/science" className="underline font-medium hover:opacity-80">
          science page
        </Link>{" "}
        goes deeper into the bioaccumulation research and what it means for
        long-term health.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Where Do Forever Chemicals Hide in Daily Life?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        PFAS are not hiding in one place. They are everywhere. Decades of
        manufacturing spread them across the products you use, the water you
        drink, and the food you eat. Here are the most common sources of
        everyday exposure:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-base leading-relaxed">
        <li>
          <strong>Drinking water</strong> - PFAS have been detected in the water
          supplies of thousands of communities across the United States. They
          leach into groundwater from industrial sites, landfills, and military
          bases that used PFAS-containing firefighting foam. Learn more in our
          guide to{" "}
          <Link href="/blog/pfas-in-drinking-water" className="underline font-medium hover:opacity-80">
            PFAS in drinking water
          </Link>.
        </li>
        <li>
          <strong>Nonstick cookware</strong> - Teflon and similar nonstick
          coatings are made with PFAS. When heated, these coatings can release
          PFAS into your food and your kitchen air. We cover safer alternatives
          in our post on{" "}
          <Link href="/blog/forever-chemicals-cookware" className="underline font-medium hover:opacity-80">
            forever chemicals in cookware
          </Link>.
        </li>
        <li>
          <strong>Food packaging</strong> - Grease-resistant wrappers, microwave
          popcorn bags, fast food containers, and pizza boxes often contain PFAS
          coatings that can migrate into your food.
        </li>
        <li>
          <strong>Stain-resistant fabrics</strong> - Carpets, upholstery, and
          clothing marketed as stain-proof or water-resistant frequently use PFAS
          treatments.
        </li>
        <li>
          <strong>Personal care products</strong> - Some cosmetics, dental
          floss, and waterproof mascaras contain PFAS. Studies have found PFAS
          in over half of cosmetic products tested in North America.
        </li>
        <li>
          <strong>Firefighting foam (AFFF)</strong> - Aqueous film-forming foam
          has been used for decades at airports, military bases, and fire
          training facilities. It is one of the largest point sources of PFAS
          contamination in groundwater.
        </li>
      </ul>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The challenge is that PFAS exposure is cumulative. Each individual source
        may contribute a small amount, but over years and decades, those small
        amounts add up. That is why testing your blood for PFAS gives you the
        clearest picture of your total exposure. It accounts for every source at
        once.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Why Can&apos;t Your Body Break Down PFAS?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Your body has an impressive detoxification system. Your liver, kidneys,
        and gut work together to process and eliminate foreign chemicals every
        day. Most pollutants get broken down into smaller molecules, packaged up
        by the liver, and excreted through urine or bile.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        PFAS bypass that system. The carbon-fluorine bond is too strong for your
        enzymes to cleave. Your body treats PFAS molecules almost like nutrients,
        binding them to proteins in your blood and recycling them through your
        kidneys instead of filtering them out. Some PFAS compounds bind to
        proteins in your liver and accumulate there. Others circulate in your
        bloodstream for years.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        This is why PFAS are measured through a blood test. They are in your
        blood because your body has no efficient way to get rid of them. A{" "}
        <Link href="/blog/pfas-blood-test" className="underline font-medium hover:opacity-80">
          PFAS blood test
        </Link>{" "}
        measures the exact concentration of specific PFAS compounds in your
        serum, giving you a number you can track over time.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Forever Chemicals Health Risks: What the Research Shows
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Decades of research have connected PFAS exposure to a range of serious
        health effects. The evidence is strong enough that in 2022, the National
        Academies of Sciences, Engineering, and Medicine published a consensus
        report recommending clinical testing and follow-up for people with
        elevated PFAS levels.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Here is what the science links to PFAS exposure:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-base leading-relaxed">
        <li>
          <strong>Cancer</strong> - PFOA has been classified as a possible human
          carcinogen. Studies have found elevated rates of kidney cancer and
          testicular cancer in communities with high PFAS exposure.
        </li>
        <li>
          <strong>Thyroid disease</strong> - PFAS can interfere with thyroid
          hormone production. Research has linked PFAS to both hypothyroidism
          and thyroid cancer.
        </li>
        <li>
          <strong>Elevated cholesterol</strong> - One of the most consistent
          findings across studies. Even moderate PFAS levels are associated with
          higher LDL cholesterol.
        </li>
        <li>
          <strong>Immune suppression</strong> - PFAS can weaken immune response,
          including reducing the effectiveness of vaccines. This is especially
          concerning for children.
        </li>
        <li>
          <strong>Reproductive harm</strong> - Studies have linked PFAS to
          decreased fertility, pregnancy complications, and lower birth weight.
        </li>
        <li>
          <strong>Liver damage</strong> - PFAS accumulate in the liver and have
          been associated with elevated liver enzymes and non-alcoholic fatty
          liver disease.
        </li>
      </ul>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Not everyone with PFAS in their blood will develop these conditions.
        Dose, duration of exposure, genetics, and other environmental factors
        all play a role. But the research is clear that higher levels carry
        higher risk. That is why{" "}
        <Link href="/diagnostics" className="underline font-medium hover:opacity-80">
          measuring your levels
        </Link>{" "}
        is the essential first step.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        How to Reduce Your Exposure to Forever Chemicals
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        You cannot eliminate PFAS exposure entirely. They are too widespread for
        that. But you can take practical steps to reduce how much you take in
        going forward:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-base leading-relaxed">
        <li>
          Filter your drinking water with an activated carbon or reverse osmosis
          filter certified to remove PFAS.
        </li>
        <li>
          Replace nonstick cookware with stainless steel, cast iron, or ceramic
          alternatives.
        </li>
        <li>
          Avoid grease-resistant food packaging. Choose uncoated paper or glass
          containers when possible.
        </li>
        <li>
          Skip stain-resistant treatments on furniture, carpets, and clothing.
        </li>
        <li>
          Check your local water quality reports for PFAS testing results. The
          EPA maintains a public database.
        </li>
      </ul>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Reducing exposure is important, but it only addresses the future. It
        does not tell you what has already accumulated in your body. That is
        where testing comes in.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Frequently Asked Questions About Forever Chemicals
      </h2>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Are PFAS and forever chemicals the same thing?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Yes. PFAS is the scientific abbreviation for per- and polyfluoroalkyl
        substances. "Forever chemicals" is the common nickname used in the media
        and public health discussions. Both terms refer to the same family of
        over 12,000 synthetic chemicals that resist breakdown in the environment
        and in the human body.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        How do I know if I have been exposed to PFAS?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Given that 97% of Americans have detectable PFAS in their blood, you
        have almost certainly been exposed. PFAS enter your body through
        drinking water, food, consumer products, and indoor air. You cannot feel
        PFAS accumulating. The only way to know your exposure level is through
        a{" "}
        <Link href="/blog/pfas-blood-test" className="underline font-medium hover:opacity-80">
          PFAS blood test
        </Link>{" "}
        that measures specific compounds in your serum.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Can you remove forever chemicals from your body?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        There is no approved medical treatment to remove PFAS from your body.
        Your body does eliminate them, but very slowly. Different PFAS compounds
        have half-lives ranging from about two to eight years. The most effective
        strategy is to reduce ongoing exposure so your body can gradually clear
        what has already accumulated. Testing gives you a baseline so you can
        track your progress over time.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Are PFAS regulated in the United States?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Regulation is catching up but still limited. In April 2024, the EPA
        established the first-ever enforceable limits for PFOS and PFOA in
        drinking water at 4 parts per trillion. Several states have enacted
        their own PFAS restrictions on products and water supplies. However,
        the vast majority of the 12,000-plus PFAS compounds remain unregulated.
        That gap is one reason why personal testing is so valuable. You cannot
        rely on regulations alone to protect you.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Should I be worried about forever chemicals?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Concern is reasonable. Panic is not useful. PFAS are a genuine public
        health issue supported by decades of peer-reviewed research. But
        knowledge is the best response. When you know your levels, you can make
        informed decisions about water filtration, cookware, food choices, and
        medical follow-up. The people who should be most proactive are those in
        high-exposure groups: communities near military bases or industrial
        sites, firefighters, and parents of young children.
      </p>

      {/* CTA Section */}
      <div className="mt-16 mb-4 p-8 border border-current/10 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4 font-display">
          Measure What Matters
        </h2>
        <p className="text-base leading-relaxed mb-6 font-sans">
          97% of Americans carry PFAS in their blood. The only way to know your
          levels is to test. Take our free toxin exposure assessment to
          understand your risk and learn how the Proxima Health Baseline can give
          you a clear picture of your chemical body burden.
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
