import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Forever Chemicals in Cookware: PFAS Risks",
  description:
    "Nonstick pans are a top source of PFAS exposure at home. Learn which cookware contains forever chemicals, health risks, and safer alternatives.",
};

export default function ForeverChemicalsCookwarePage() {
  return (
    <>
      <p className="font-mono text-xs text-tertiary uppercase tracking-wider">
        February 15, 2026
      </p>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 font-display mt-4">
        Forever Chemicals in Your Cookware: What You Need to Know About PFAS in Nonstick Pans
      </h1>

      <p className="text-base leading-relaxed mb-4 font-sans">
        You might be careful about what food you put in your body. But have you thought about what
        your food touches before it gets there? If you cook with nonstick pans, you could be
        exposing yourself and your family to PFAS, a group of synthetic chemicals linked to serious
        health problems. These &quot;forever chemicals&quot; in cookware are one of the most common
        sources of daily PFAS exposure, and most people have no idea.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        At{" "}
        <Link href="/science" className="underline hover:text-proxima-red">
          Proxima Health
        </Link>
        , we study how environmental toxins build up in the human body over time. PFAS from
        cookware is one of the exposure routes we see most often. This guide breaks down exactly
        which pans contain PFAS, why they matter for your health, and what to use instead.
      </p>

      {/* ---- Section: What Are PFAS ---- */}
      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What Are PFAS and Why Are They Called &quot;Forever Chemicals&quot;?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        PFAS stands for per- and polyfluoroalkyl substances. There are more than 12,000 chemicals
        in this family. They were first developed in the 1940s to make surfaces resistant to water,
        oil, and heat. That same chemistry is what makes them so dangerous: PFAS do not break down
        in the environment or in your body. Once they get in, they stay.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The two most studied PFAS compounds are PFOA and PFOS. Both have been linked to cancer,
        thyroid disease, immune system damage, and reproductive harm. While some manufacturers have
        phased out PFOA, they replaced it with other PFAS compounds that may be just as harmful.
        The science is still catching up.
      </p>

      {/* ---- Section: Which Cookware Contains PFAS ---- */}
      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Which Cookware Contains PFAS?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The biggest culprit is traditional nonstick cookware coated with polytetrafluoroethylene,
        better known by the brand name Teflon. When you see the word &quot;nonstick&quot; on a pan,
        there is a good chance it uses a PFAS-based coating. Here are the main types to watch for:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-base leading-relaxed font-sans">
        <li>
          <strong>Teflon and PTFE-coated pans.</strong> This includes most budget nonstick skillets,
          baking sheets, and muffin tins. PTFE itself is a fluoropolymer, and its production
          historically involved PFOA.
        </li>
        <li>
          <strong>&quot;PFOA-free&quot; nonstick pans.</strong> Many newer nonstick coatings dropped
          PFOA but still use other PFAS compounds like GenX. The label can be misleading.
        </li>
        <li>
          <strong>Coated aluminum and coated steel.</strong> If the cooking surface feels slippery
          and food slides off easily, the coating is almost certainly PFAS-based unless the
          manufacturer states otherwise.
        </li>
        <li>
          <strong>Some ceramic-coated pans.</strong> True ceramic coatings (sol-gel) are generally
          PFAS-free. But some products marketed as &quot;ceramic&quot; still contain fluoropolymer
          layers underneath. Always check the manufacturer&apos;s claims.
        </li>
      </ul>

      {/* ---- Section: Health Risks ---- */}
      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Teflon Health Risks: How Nonstick Pans Expose You to PFAS
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        PFAS can enter your body from nonstick cookware in two main ways. First, when coatings
        scratch or degrade, tiny particles and chemicals can leach into your food. Second, when
        nonstick pans are heated above 450 degrees Fahrenheit, the coating begins to break down and
        release toxic fumes. This is well documented: it can even kill pet birds, whose respiratory
        systems are extremely sensitive.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Over time, low-level PFAS exposure from cooking adds up. Studies have found that people who
        cook frequently with nonstick pans tend to have higher blood levels of PFAS. Those elevated
        levels are associated with:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-base leading-relaxed font-sans">
        <li>Increased cholesterol levels</li>
        <li>Thyroid hormone disruption</li>
        <li>Weakened immune response, including reduced vaccine effectiveness</li>
        <li>Higher risk of kidney and testicular cancer</li>
        <li>Reproductive issues including lower birth weight and fertility problems</li>
        <li>Liver damage at elevated exposure levels</li>
      </ul>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The challenge is that PFAS accumulate slowly. You will not feel sick after one meal cooked
        in a nonstick pan. But years of daily exposure create a body burden that your system
        struggles to clear. PFAS half-lives in the human body range from 2 to 8 years, meaning it
        takes that long just to eliminate half of what you have absorbed. Our{" "}
        <Link href="/diagnostics" className="underline hover:text-proxima-red">
          diagnostic testing
        </Link>{" "}
        can measure your current PFAS levels and help you understand your total exposure.
      </p>

      {/* ---- Section: Safer Alternatives ---- */}
      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        The Safest Cookware: PFAS-Free Alternatives
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Switching cookware is one of the simplest ways to reduce your daily PFAS intake. Here are
        the best options, ranked by safety and practicality:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-base leading-relaxed font-sans">
        <li>
          <strong>Cast iron.</strong> Naturally nonstick when seasoned properly. Lasts a lifetime.
          Adds a small amount of dietary iron, which is a benefit for most people. Requires some
          maintenance but is affordable and versatile.
        </li>
        <li>
          <strong>Stainless steel.</strong> Durable, non-reactive, and free of coatings. Works well
          for searing and deglazing. Food may stick more, but proper technique (preheating and using
          oil) solves this.
        </li>
        <li>
          <strong>Carbon steel.</strong> Similar to cast iron but lighter. Popular with professional
          chefs. Develops a natural nonstick surface with use.
        </li>
        <li>
          <strong>True ceramic (sol-gel).</strong> Look for brands that explicitly certify their
          products as PFAS-free and PTFE-free. Good nonstick performance, though the coating may
          wear faster than traditional options.
        </li>
        <li>
          <strong>Glass and enameled cast iron.</strong> Completely inert cooking surfaces. Great
          for baking, roasting, and slow cooking. Le Creuset and Staub are well-known examples.
        </li>
      </ul>

      <p className="text-base leading-relaxed mb-4 font-sans">
        You do not need to replace everything at once. Start with the pans you use most often. A
        single cast iron skillet and a stainless steel saucepan will cover most everyday cooking.
      </p>

      {/* ---- Section: Beyond Cookware ---- */}
      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        PFAS Exposure Goes Beyond Your Kitchen
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Cookware is just one piece of the puzzle. PFAS are also found in food packaging, stain-
        resistant fabrics, waterproof clothing, firefighting foam, and contaminated drinking water.
        For many people, the combination of these sources creates a significant total body burden.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        That is why testing matters. Swapping your pans is a great first step, but it does not tell
        you how much PFAS you have already accumulated. A{" "}
        <Link href="/blog/pfas-blood-test" className="underline hover:text-proxima-red">
          PFAS blood test
        </Link>{" "}
        can give you a clear picture of your current levels and help you make informed decisions
        about next steps.
      </p>

      {/* ---- Section: FAQ ---- */}
      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Frequently Asked Questions
      </h2>

      <h3 className="font-bold text-lg mt-6 mb-2 font-display">
        Is it safe to keep using my old nonstick pans?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        If the coating is scratched, flaking, or visibly worn, replace the pan immediately. Even
        intact nonstick coatings release more PFAS at high temperatures. If you must use nonstick,
        cook on low to medium heat and never preheat an empty pan.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2 font-display">
        Are &quot;PFOA-free&quot; nonstick pans actually safe?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Not necessarily. PFOA-free means the pan does not contain that specific PFAS compound. But
        manufacturers often substitute other PFAS chemicals like GenX, which early research
        suggests may carry similar risks. The safest choice is cookware with no fluoropolymer
        coating at all.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2 font-display">
        Can I get PFAS out of my body?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Your body does eliminate PFAS, but slowly. Half-lives range from about 2 to 8 years
        depending on the specific compound. Reducing new exposure is the most important step. Some
        research suggests that blood donation and certain dietary strategies may modestly speed
        clearance. Proxima is developing advanced{" "}
        <Link href="/science" className="underline hover:text-proxima-red">
          therapeutic approaches
        </Link>{" "}
        to help the body remove persistent toxins more effectively.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2 font-display">
        How do I know if my cookware contains PFAS?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Check the manufacturer&apos;s website or packaging for terms like PTFE, Teflon, or
        fluoropolymer. If the pan is labeled &quot;nonstick&quot; without specifying the coating
        material, assume it contains PFAS unless proven otherwise. Look for explicit &quot;PFAS-
        free&quot; and &quot;PTFE-free&quot; certifications from the manufacturer.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2 font-display">
        Should I get my PFAS levels tested?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Yes, especially if you have used nonstick cookware for years, live near industrial sites,
        or have concerns about contaminated water. Testing gives you a baseline and helps you
        track whether your efforts to reduce exposure are working. Learn more about{" "}
        <Link href="/blog/pfas-blood-test" className="underline hover:text-proxima-red">
          PFAS blood testing
        </Link>{" "}
        and what your results mean.
      </p>

      {/* ---- CTA ---- */}
      <div className="mt-16 border-t border-proxima-black/10 pt-10">
        <h2 className="text-2xl font-bold mb-4 font-display">
          Find Out What Is in Your Blood
        </h2>
        <p className="text-base leading-relaxed mb-6 font-sans">
          Changing your cookware is a smart move. But it only addresses future exposure. Proxima
          Health can help you understand what has already accumulated and what to do about it. Join
          our waitlist to get early access to advanced environmental toxin diagnostics.
        </p>
        <Link
          href="/waitlist"
          className="inline-block bg-proxima-black text-proxima-cream px-6 py-3 font-sans font-medium hover:opacity-90 transition-opacity"
        >
          Join the Waitlist
        </Link>
      </div>
    </>
  );
}
