import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VOC Exposure Symptoms: Signs You're Breathing Toxins",
  description:
    "Learn the most common VOC exposure symptoms, where volatile organic compounds hide in your home, and how to reduce indoor air toxins like toluene and benzene.",
};

export default function VOCExposureSymptomsPage() {
  return (
    <main className="min-h-screen bg-primary text-primary">
      <article className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        {/* Date line */}
        <p className="font-mono text-xs text-tertiary uppercase tracking-wider mb-4">
          Published by Proxima Health &middot; January 10, 2026
        </p>

        {/* H1 */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 font-display">
          VOC Exposure Symptoms: What Your Body Is Telling You About Indoor Air Toxins
        </h1>

        <p className="text-base leading-relaxed mb-4 font-sans">
          You painted your living room last month. You light a scented candle every evening. Your couch is less than a year old. None of this sounds dangerous. But each of these things can release volatile organic compounds (VOCs) into the air you breathe for hours, days, and sometimes years after purchase.
        </p>

        <p className="text-base leading-relaxed mb-4 font-sans">
          VOCs are a group of carbon-based chemicals that evaporate easily at room temperature. Some you can smell. Many you cannot. The EPA has found that indoor air often contains <strong>two to five times more VOCs than outdoor air</strong>, and during certain activities like painting or cleaning, levels can spike to 1,000 times above outdoor concentrations.
        </p>

        <p className="text-base leading-relaxed mb-4 font-sans">
          The problem is not a single product. It is the cumulative effect of dozens of low-level sources in an enclosed space. This article covers the most common VOCs in your home, the symptoms they cause, and what you can do about it. If you want to understand what environmental toxins are actually in your body,{" "}
          <Link href="/diagnostics" className="underline text-proxima-maroon hover:text-proxima-red">
            Proxima&apos;s diagnostic panel
          </Link>{" "}
          tests for key VOCs including toluene and benzene.
        </p>

        {/* Section: What Are VOCs */}
        <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
          What Are Volatile Organic Compounds?
        </h2>

        <p className="text-base leading-relaxed mb-4 font-sans">
          Volatile organic compounds are chemicals that turn into gas at normal room temperatures. They are used in manufacturing, cleaning, and preservation. When a product contains VOCs, those chemicals slowly release into the air through a process called off-gassing. New furniture, fresh paint, and cleaning sprays are all common off-gassing sources.
        </p>

        <p className="text-base leading-relaxed mb-4 font-sans">
          Some VOCs are relatively harmless. Others are classified as known or probable carcinogens. The health effects depend on which compounds you are exposed to, in what concentrations, and for how long. Short bursts of high exposure (like stripping paint in a closed room) can cause immediate symptoms. Chronic low-level exposure is harder to detect but can damage organs over time.
        </p>

        {/* Section: Common VOCs */}
        <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
          The Most Common VOCs in Your Home
        </h2>

        <p className="text-base leading-relaxed mb-4 font-sans">
          There are hundreds of VOCs, but a handful account for most indoor exposure. Knowing where they come from is the first step toward reducing them.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">Benzene</h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          Benzene is a known human carcinogen linked to leukemia and other blood cancers. It is found in tobacco smoke, gasoline fumes, vehicle exhaust, and certain paints and adhesives. Attached garages are a major entry point for benzene in homes. Even at low concentrations, long-term benzene exposure disrupts blood cell production in bone marrow. Proxima tests for benzene as part of its{" "}
          <Link href="/diagnostics" className="underline text-proxima-maroon hover:text-proxima-red">
            environmental toxin panel
          </Link>.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">Toluene</h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          Toluene is one of the most widely used industrial solvents. It shows up in paint, paint thinners, nail polish, lacquers, adhesives, and rubber. Chronic exposure affects the central nervous system, causing headaches, dizziness, and difficulty concentrating. In higher doses, it can damage the liver and kidneys. Toluene is another compound{" "}
          <Link href="/science" className="underline text-proxima-maroon hover:text-proxima-red">
            Proxima&apos;s science-backed platform
          </Link>{" "}
          screens for.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">Formaldehyde</h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          Formaldehyde is classified as a probable carcinogen by the EPA. It is released from pressed-wood products (plywood, particleboard, MDF), insulation, certain fabrics, and some cosmetics. New furniture and building materials can off-gas formaldehyde for months or even years. It irritates the eyes, nose, and throat at low concentrations and increases cancer risk at higher levels.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">Xylene</h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          Xylene is commonly found in paint, varnish, pesticides, and cleaning agents. It enters the body through inhalation and skin contact. Short-term exposure causes headaches, nausea, and dizziness. Chronic exposure can affect memory, reaction time, and balance.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">Ethylene Glycol</h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          Found in antifreeze, deicers, and certain paints, ethylene glycol vapors can irritate the respiratory tract. In liquid form it is highly toxic if ingested. As a VOC, it contributes to the overall chemical load in garages and utility spaces.
        </p>

        {/* Section: Symptoms */}
        <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
          VOC Exposure Symptoms: What to Watch For
        </h2>

        <p className="text-base leading-relaxed mb-4 font-sans">
          VOC exposure symptoms range from mild annoyances to serious health problems. The tricky part is that many of these symptoms mimic everyday complaints, so people rarely connect them to indoor air quality. Pay attention if several of these show up together, especially if they improve when you leave your home or office.
        </p>

        <p className="text-base leading-relaxed mb-4 font-sans">
          <strong>Short-term symptoms</strong> of VOC exposure include:
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-base leading-relaxed">
          <li>Eye, nose, and throat irritation</li>
          <li>Headaches that come and go without clear cause</li>
          <li>Dizziness or lightheadedness</li>
          <li>Nausea</li>
          <li>Skin irritation or rashes</li>
          <li>Difficulty breathing or a tight feeling in the chest</li>
          <li>Fatigue that does not improve with rest</li>
        </ul>

        <p className="text-base leading-relaxed mb-4 font-sans">
          <strong>Long-term symptoms</strong> from chronic low-level exposure are more concerning:
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-base leading-relaxed">
          <li>Persistent brain fog and memory problems</li>
          <li>Worsening asthma or new respiratory conditions</li>
          <li>Liver and kidney damage</li>
          <li>Immune system suppression</li>
          <li>Increased cancer risk (especially with benzene and formaldehyde)</li>
          <li>Hormonal disruption</li>
        </ul>

        <p className="text-base leading-relaxed mb-4 font-sans">
          A 2018 study published in <em>Environmental Health Perspectives</em> found that people living in homes with high VOC levels had measurably higher rates of respiratory symptoms and doctor visits. The authors noted that many participants had no idea their indoor air quality was poor.
        </p>

        {/* Section: Hidden Sources */}
        <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
          Surprising Places VOCs Hide in Your Home
        </h2>

        <p className="text-base leading-relaxed mb-4 font-sans">
          Most people think of paint fumes when they hear &quot;VOCs.&quot; The reality is much broader. Here are sources that catch people off guard:
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-base leading-relaxed">
          <li><strong>Air fresheners and scented candles.</strong> Fragrance products are among the top VOC sources in homes. Plug-in air fresheners release formaldehyde and benzene derivatives continuously.</li>
          <li><strong>New furniture and mattresses.</strong> Memory foam, particleboard, and flame retardant treatments off-gas for months. That &quot;new furniture smell&quot; is VOCs entering your lungs.</li>
          <li><strong>Cleaning products.</strong> Disinfectants, glass cleaners, and aerosol sprays contain solvents like ethanol, isopropanol, and glycol ethers. Using them in a small bathroom with no ventilation multiplies your exposure.</li>
          <li><strong>Dry-cleaned clothing.</strong> Perchloroethylene (perc), the solvent used in most dry cleaning, is a VOC linked to neurological damage and cancer. Freshly dry-cleaned clothes release it for days.</li>
          <li><strong>Craft and hobby supplies.</strong> Glues, markers, spray paints, and resin kits are concentrated VOC sources often used in poorly ventilated spaces.</li>
          <li><strong>Carpeting and vinyl flooring.</strong> New flooring materials release formaldehyde, toluene, and other compounds. Wall-to-wall carpet can trap VOCs in its fibers and release them slowly.</li>
        </ul>

        {/* Section: Reducing Exposure */}
        <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
          How to Reduce VOC Exposure at Home
        </h2>

        <p className="text-base leading-relaxed mb-4 font-sans">
          You cannot eliminate every VOC from your life, but you can significantly reduce your exposure with practical changes. None of this requires expensive equipment or a complete home renovation.
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-base leading-relaxed">
          <li><strong>Ventilate aggressively.</strong> Open windows when cleaning, painting, or bringing new furniture home. Run exhaust fans in kitchens and bathrooms. Cross-ventilation makes a real difference.</li>
          <li><strong>Choose low-VOC or zero-VOC products.</strong> Look for paints, stains, and adhesives labeled low-VOC or zero-VOC. These are now widely available at the same price points.</li>
          <li><strong>Skip synthetic fragrances.</strong> Replace plug-in air fresheners and scented candles with natural alternatives, or simply open a window. Fragrance-free cleaning products work just as well.</li>
          <li><strong>Let new items off-gas outside.</strong> If possible, unwrap new furniture, mattresses, or rugs in a garage or covered outdoor area and let them air out for at least 48 hours before bringing them inside.</li>
          <li><strong>Store chemicals properly.</strong> Keep paint cans, solvents, gasoline, and cleaning products in a detached shed or well-ventilated garage. Do not store them in a closet or basement.</li>
          <li><strong>Use an air purifier.</strong> HEPA filters alone will not remove VOCs, but purifiers with activated carbon filters can reduce airborne concentrations meaningfully.</li>
          <li><strong>Test your indoor air.</strong> Affordable VOC testing kits are available online. They give you a baseline reading so you know which rooms or sources are the biggest problems.</li>
        </ul>

        {/* Section: Testing Your Body */}
        <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
          Why Indoor Air Testing Is Not Enough
        </h2>

        <p className="text-base leading-relaxed mb-4 font-sans">
          Monitoring your indoor air quality is a good start. But air monitors tell you what is in the room, not what is in your body. Two people living in the same house can have very different blood levels of VOCs based on their genetics, metabolism, time spent indoors, and proximity to sources.
        </p>

        <p className="text-base leading-relaxed mb-4 font-sans">
          Blood-based testing measures what has actually entered your system. It is the difference between knowing there is lead in your water and knowing how much lead is in your blood. One is a potential hazard. The other is your actual exposure.{" "}
          <Link href="/science" className="underline text-proxima-maroon hover:text-proxima-red">
            Proxima&apos;s science
          </Link>{" "}
          is built around this principle: test what matters, which is what is inside you.
        </p>

        <p className="text-base leading-relaxed mb-4 font-sans">
          Proxima&apos;s diagnostic panel includes testing for toluene and benzene, two of the most common and harmful VOCs. Knowing your levels gives you a clear starting point for reducing exposure and tracking progress over time.
        </p>

        {/* FAQ Section */}
        <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
          Frequently Asked Questions
        </h2>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">
          How long do VOC symptoms take to appear?
        </h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          It depends on the concentration. High-level exposure (like painting a room with poor ventilation) can cause headaches, dizziness, and throat irritation within minutes. Low-level chronic exposure may take weeks or months before symptoms become noticeable. Many people attribute their fatigue or headaches to stress rather than indoor air quality.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">
          Are VOCs dangerous at low levels?
        </h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          Yes, some are. Benzene and formaldehyde have no established safe threshold for cancer risk. Even low levels, sustained over months or years, contribute to cumulative damage. The dose matters, but so does the duration. Living with slightly elevated VOC levels for years is not a minor concern.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">
          Can VOC exposure cause cancer?
        </h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          Certain VOCs are classified as known or probable carcinogens. Benzene is a known cause of leukemia. Formaldehyde is linked to nasopharyngeal cancer. Not all VOCs carry cancer risk, but the ones commonly found in homes (benzene, formaldehyde, and some chlorinated solvents) are among the most studied carcinogens in environmental health.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">
          Do air purifiers remove VOCs?
        </h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          Standard HEPA filters do not remove VOCs because these chemicals exist as gases, not particles. Air purifiers with activated carbon filters can adsorb many VOCs and reduce indoor concentrations. However, no purifier eliminates all VOCs. The best approach combines source reduction, ventilation, and filtration.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-2 font-display">
          Can a blood test detect VOC exposure?
        </h3>
        <p className="text-base leading-relaxed mb-4 font-sans">
          Yes. Blood tests can measure levels of specific VOCs like benzene and toluene. These tests show what has entered your bloodstream, giving a more accurate picture than air monitoring alone.{" "}
          <Link href="/diagnostics" className="underline text-proxima-maroon hover:text-proxima-red">
            Proxima&apos;s diagnostic platform
          </Link>{" "}
          includes VOC biomarker testing to help you understand your actual body burden.
        </p>

        {/* CTA */}
        <div className="mt-16 border-t border-[var(--border-primary)] pt-10">
          <h2 className="text-2xl font-bold mb-4 font-display">
            Find Out What You&apos;re Actually Breathing In
          </h2>
          <p className="text-base leading-relaxed mb-6 font-sans">
            The air in your home may look clean, but your blood tells a different story. Proxima&apos;s free toxin assessment takes a few minutes and helps you understand your potential exposure risk based on your environment and daily habits. No blood draw required to start.
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
