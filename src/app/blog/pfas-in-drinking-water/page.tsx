import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PFAS in Drinking Water: Risks & Solutions",
  description:
    "PFAS contamination affects thousands of US water systems. Learn about EPA limits, health risks of forever chemicals in water, and which filters actually remove PFAS.",
};

export default function PFASInDrinkingWaterPage() {
  return (
    <>
      <header className="mb-10">
        <p className="font-mono text-xs text-tertiary uppercase tracking-wider mb-4">
          February 25, 2026
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 font-display">
          PFAS in Drinking Water: What You Need to Know About Forever Chemicals
        </h1>
        <p className="text-base leading-relaxed mb-4 font-sans text-tertiary">
          10 min read
        </p>
      </header>

      <section>
        <p className="text-base leading-relaxed mb-4 font-sans">
          Turn on the tap. Fill a glass. Drink. It should be that simple. But for
          tens of millions of Americans, that glass of water contains something
          invisible and persistent: PFAS. These synthetic chemicals, known as
          &ldquo;forever chemicals,&rdquo; have been found in drinking water systems serving
          over 200 million people across the United States.
        </p>
        <p className="text-base leading-relaxed mb-4 font-sans">
          PFAS (per- and polyfluoroalkyl substances) earned their nickname because
          they do not break down in the environment. They do not break down in your
          body either. They accumulate in your blood, your organs, and your tissues
          over years and decades. And here is the stat that puts it in perspective:{" "}
          <strong>97% of Americans have detectable PFAS in their bloodstream</strong>.
        </p>
        <p className="text-base leading-relaxed mb-4 font-sans">
          The EPA finally set enforceable limits on PFAS in drinking water in 2024.
          That was a landmark moment. But the gap between setting a rule and
          enforcing it is wide. Most water utilities have years before they must
          comply, and many lack the funding to do so. In the meantime, you are still
          drinking the water.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
          What Are PFAS and Why Are They in Your Water?
        </h2>
        <p className="text-base leading-relaxed mb-4 font-sans">
          PFAS are a family of over 14,000 synthetic chemicals. They were first
          developed in the 1940s for their ability to repel water, oil, and heat.
          You will find them in nonstick cookware, food packaging, stain-resistant
          fabrics, firefighting foam, and dozens of industrial products.
        </p>
        <p className="text-base leading-relaxed mb-4 font-sans">
          The problem: PFAS do not stay where we put them. Manufacturing plants
          release them into rivers. Military bases and airports contaminate
          groundwater through firefighting foam. Landfills leach them into soil.
          Wastewater treatment plants cannot fully remove them. The chemicals cycle
          through water, soil, and air, eventually making their way back into the
          water supply you rely on every day.
        </p>
        <p className="text-base leading-relaxed mb-4 font-sans">
          The carbon-fluorine bond that makes PFAS so useful in products also makes
          them nearly indestructible. Once in the environment, they persist for
          thousands of years. Once in your body, some PFAS variants take four to
          eight years to clear just half their concentration from your blood.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
          Health Risks of PFAS Water Contamination
        </h2>
        <p className="text-base leading-relaxed mb-4 font-sans">
          Decades of research have linked PFAS exposure to serious health problems.
          The science is clearest on a handful of outcomes, but the list keeps
          growing as researchers dig deeper.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-base leading-relaxed">
          <li>
            <strong>Cancer.</strong> PFOA and PFOS (two of the most studied PFAS)
            are linked to kidney and testicular cancer. The EPA now classifies PFOA
            as a likely human carcinogen.
          </li>
          <li>
            <strong>Immune suppression.</strong> PFAS reduce the effectiveness of
            vaccines and weaken the body&rsquo;s ability to fight infection. Studies in
            children show lower antibody responses after routine vaccinations.
          </li>
          <li>
            <strong>Thyroid disease.</strong> PFAS interfere with thyroid hormones,
            which regulate metabolism, energy, and brain development. This is
            especially concerning for pregnant women and infants.
          </li>
          <li>
            <strong>Liver damage.</strong> Elevated PFAS levels are associated with
            changes in liver enzymes and increased cholesterol, which raises
            cardiovascular risk.
          </li>
          <li>
            <strong>Reproductive harm.</strong> Research links PFAS to reduced
            fertility, pregnancy complications, and developmental effects in
            children exposed in utero.
          </li>
        </ul>
        <p className="text-base leading-relaxed mb-4 font-sans">
          These are not effects that show up overnight. PFAS accumulate slowly, and
          the damage compounds over time. That is what makes them so dangerous and
          why{" "}
          <Link href="/science" className="underline hover:text-proxima-red transition-colors">
            understanding the science behind environmental toxin exposure
          </Link>{" "}
          matters more than ever.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
          The 2024 EPA Limits: Progress, but Not Protection
        </h2>
        <p className="text-base leading-relaxed mb-4 font-sans">
          In April 2024, the EPA finalized the first-ever national drinking water
          standards for PFAS. The rule set maximum contaminant levels (MCLs) at 4
          parts per trillion (ppt) for PFOA and PFOS individually. It also set
          limits on three additional PFAS compounds and a hazard index for mixtures.
        </p>
        <p className="text-base leading-relaxed mb-4 font-sans">
          This was a significant step. Previous guidance was non-binding and set at
          70 ppt, a level many scientists argued was far too high. The new limits
          are among the strictest in the world.
        </p>
        <p className="text-base leading-relaxed mb-4 font-sans">
          But there is a catch. Public water systems have until 2029 to comply. Many
          systems, especially in smaller or underfunded communities, face billions
          in infrastructure costs to install the treatment technology needed. Legal
          challenges from industry groups have also slowed implementation. And the
          rule only covers public water systems. If you rely on a private well, you
          are on your own.
        </p>
        <p className="text-base leading-relaxed mb-4 font-sans">
          Enforcement remains the weakest link. The rule exists on paper, but
          millions of people are still drinking water that exceeds these new limits
          every day.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
          Is Your Water Affected?
        </h2>
        <p className="text-base leading-relaxed mb-4 font-sans">
          PFAS contamination is not limited to a few unlucky towns. Studies from the
          USGS and the Environmental Working Group (EWG) show that PFAS have been
          detected in water systems across all 50 states. Communities near military
          bases, airports, industrial facilities, and landfills tend to have the
          highest levels. But contamination has been found in suburban and rural
          areas too.
        </p>
        <p className="text-base leading-relaxed mb-4 font-sans">
          To check your local water, start with the{" "}
          <a
            href="https://www.ewg.org/interactive-maps/pfas_contamination/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-proxima-red transition-colors"
          >
            EWG PFAS contamination map
          </a>
          . You can also request your water utility&rsquo;s Consumer Confidence Report,
          which must now include PFAS testing data where available.
        </p>
        <p className="text-base leading-relaxed mb-4 font-sans">
          For private well owners, the only option is independent testing. Several
          certified labs offer PFAS water testing kits for $200 to $400. Given that
          wells are not covered by federal regulations, testing is the only way to
          know what you are drinking.
        </p>
        <p className="text-base leading-relaxed mb-4 font-sans">
          But water testing only tells you what is coming out of the tap. It does
          not tell you what has already accumulated in your body. That is where{" "}
          <Link href="/diagnostics" className="underline hover:text-proxima-red transition-colors">
            diagnostic blood testing for environmental toxins
          </Link>{" "}
          becomes valuable. Knowing your personal PFAS levels gives you a clearer
          picture of your actual exposure and helps you make informed decisions about
          filtration, diet, and medical follow-up.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
          Which Water Filters Actually Remove PFAS?
        </h2>
        <p className="text-base leading-relaxed mb-4 font-sans">
          Not all water filters are created equal when it comes to PFAS. Many
          popular pitcher filters and basic faucet attachments do little to reduce
          forever chemicals in water. If you are shopping for a PFAS water filter,
          here is what the research shows works.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">
          Reverse Osmosis (RO)
        </h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          Reverse osmosis systems are the gold standard for PFAS removal. They push
          water through a semipermeable membrane that blocks contaminants at the
          molecular level. Studies show RO systems remove 90% or more of PFAS
          compounds. Under-sink RO units cost $150 to $500 and are the most
          effective option for home use.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">
          Activated Carbon (Granular and Block)
        </h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          High-quality activated carbon block filters can reduce PFAS levels
          significantly, though performance varies by brand and filter age.
          Granular activated carbon (found in most pitcher filters) is less
          effective, particularly for short-chain PFAS. Look for NSF 53-certified
          carbon block filters for the best results in this category.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">
          Ion Exchange Resins
        </h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          Ion exchange systems are highly effective at removing PFAS, especially
          PFOA and PFOS. They work by swapping PFAS molecules for harmless ions.
          These are more commonly used in whole-house or municipal treatment systems
          but are available for residential point-of-use installations as well.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">
          What Does Not Work
        </h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          Standard pitcher filters, UV treatment, and basic sediment filters do not
          meaningfully reduce PFAS. Boiling water does not help either. In fact,
          boiling can concentrate PFAS by evaporating the water while the chemicals
          remain behind.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
          Beyond the Water: Why Total Exposure Matters
        </h2>
        <p className="text-base leading-relaxed mb-4 font-sans">
          Filtering your water is an important step, but PFAS exposure does not come
          from drinking water alone. You absorb PFAS through food (especially
          fast-food packaging and microwave popcorn bags), personal care products,
          nonstick cookware, and even household dust. Your total PFAS body burden is
          the sum of all these sources over your lifetime.
        </p>
        <p className="text-base leading-relaxed mb-4 font-sans">
          This is why water testing alone gives an incomplete picture. A
          comprehensive approach means understanding both your environmental
          exposure and your biological levels. Blood-based diagnostics can measure
          specific PFAS compounds in your system and track changes over time as you
          reduce exposure.
        </p>
        <p className="text-base leading-relaxed mb-4 font-sans">
          At Proxima Health, we are building{" "}
          <Link href="/diagnostics" className="underline hover:text-proxima-red transition-colors">
            diagnostic tools
          </Link>{" "}
          designed to give you that complete picture. Our approach focuses on
          measuring environmental toxins in your blood so you can take targeted
          action rather than guessing.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
          Frequently Asked Questions
        </h2>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">
          How do PFAS get into drinking water?
        </h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          PFAS enter water supplies through industrial discharge, firefighting foam
          runoff (especially near military bases and airports), landfill leachate,
          and wastewater treatment plants that cannot fully remove them. Once in
          groundwater or surface water, they persist indefinitely and cycle through
          the water system.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">
          What level of PFAS in water is safe?
        </h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          The EPA set maximum contaminant levels at 4 parts per trillion for PFOA
          and PFOS in 2024. Some researchers argue there is no truly safe level of
          exposure given how PFAS accumulate in the body. The lower your exposure,
          the better.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">
          Can you remove PFAS from water by boiling it?
        </h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          No. Boiling water does not remove PFAS. These chemicals have extremely
          high boiling points and will remain in the water. Boiling actually
          concentrates PFAS by reducing the water volume. Use a reverse osmosis or
          high-quality activated carbon block filter instead.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">
          How can I test my body for PFAS exposure?
        </h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          Blood tests can measure specific PFAS compounds in your system. Given that
          97% of Americans have detectable PFAS levels, the question is not whether
          you have been exposed but how much has accumulated. Diagnostic testing
          helps you understand your personal body burden and track reductions over
          time. Learn more about{" "}
          <Link
            href="/blog/pfas-blood-test"
            className="underline hover:text-proxima-red transition-colors"
          >
            PFAS blood testing
          </Link>{" "}
          and what your results mean.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">
          Do Brita or pitcher filters remove PFAS?
        </h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          Most standard pitcher filters provide minimal PFAS reduction. Some newer
          models with activated carbon block technology perform better, but they are
          not as effective as reverse osmosis systems. Always check for NSF 53 or
          NSF 58 certification, which indicates the filter has been independently
          tested for contaminant reduction.
        </p>
      </section>

      <section className="mt-16 mb-8 border-t border-current/10 pt-12">
        <h2 className="text-2xl font-bold mb-4 font-display">
          Take the First Step
        </h2>
        <p className="text-base leading-relaxed mb-6 font-sans">
          Filtering your water is a smart move. But knowing what is already in your
          body is the step most people skip. Proxima Health is building advanced
          diagnostics for environmental toxin exposure, starting with the substances
          that matter most: PFAS, heavy metals, and endocrine disruptors.
        </p>
        <p className="text-base leading-relaxed mb-8 font-sans">
          We are not available everywhere yet, but we are expanding quickly. Join
          the waitlist to be the first to access testing in your area.
        </p>
        <Link
          href="/quiz"
          className="inline-block bg-proxima-black text-proxima-offwhite font-sans font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          Join the Waitlist
        </Link>
      </section>
    </>
  );
}
