import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PCB Exposure: Risks, Sources & Why It Still Matters",
  description:
    "PCBs were banned in 1979 but persist in fish, soil, and old buildings. Learn where polychlorinated biphenyls come from, how they accumulate, and how to test.",
};

export default function PCBExposurePage() {
  return (
    <>
      <p className="font-mono text-xs text-tertiary uppercase tracking-wider mb-4">
        Published by Proxima Health | January 5, 2026
      </p>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 font-display">
        PCB Exposure: Where Polychlorinated Biphenyls Come From and Why They
        Still Threaten Your Health
      </h1>

      <p className="text-base leading-relaxed mb-4 font-sans text-secondary">
        Polychlorinated biphenyls, better known as PCBs, were banned in the
        United States in 1979. That was nearly fifty years ago. You might assume
        the problem is solved. It is not. PCBs are still in the fish you eat,
        the buildings where you work, and the soil beneath your feet. They are
        in your blood right now.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        PCBs belong to a class of persistent organic pollutants that do not
        break down easily. They accumulate in fat tissue, concentrate as they
        move up the food chain, and stay in the human body for years. The CDC
        estimates that{" "}
        <strong>
          nearly all Americans have measurable levels of PCBs in their blood
        </strong>
        . Despite being banned for decades, PCB exposure remains a real and
        ongoing health concern.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What Are PCBs?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        PCBs are a group of 209 synthetic chemicals made up of carbon, hydrogen,
        and chlorine atoms. They were manufactured from 1929 until 1979 under
        trade names like Aroclor. Companies valued them for their chemical
        stability, heat resistance, and insulating properties. They were used in:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-base leading-relaxed">
        <li>Electrical transformers and capacitors</li>
        <li>Hydraulic fluids and lubricants</li>
        <li>Caulking, sealants, and paint in buildings</li>
        <li>Carbonless copy paper</li>
        <li>Plasticizers in rubber and plastic products</li>
        <li>Fluorescent light ballasts manufactured before 1979</li>
      </ul>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Over 1.5 billion pounds of PCBs were produced in the United States
        before the EPA banned their manufacture under the Toxic Substances
        Control Act. But banning production did not remove the PCBs already
        released into the environment. Much of that 1.5 billion pounds is still
        out there.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Where PCB Contamination Persists Today
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        PCBs are everywhere. They have spread across every continent, including
        Antarctica. Here are the most common routes of human exposure today.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Fish and seafood.</strong> This is the primary source of PCB
        exposure for most Americans. PCBs settle into lake and river sediments
        where they are absorbed by small organisms. Small fish eat those
        organisms. Larger fish eat the small fish. At each step, PCB
        concentrations increase. This process, called bioaccumulation, means
        that predatory fish like salmon, trout, bluefish, and striped bass can
        carry PCB levels thousands of times higher than the surrounding water.
        The EPA and most state health departments publish fish consumption
        advisories for PCB-contaminated waterways.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Old buildings.</strong> Schools, office buildings, and homes
        built or renovated before 1979 may contain PCBs in caulking, window
        glazing, floor finishes, and fluorescent light ballasts. When these
        materials degrade, PCBs can leach into indoor air and dust. The EPA has
        found elevated PCB levels in the air of buildings with PCB-containing
        caulk, particularly in older schools. If you work or study in a
        pre-1980 building, you may be exposed without knowing it.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Contaminated soil and water.</strong> Industrial sites,
        landfills, and areas near former manufacturing plants often have PCBs
        in the soil and groundwater. The Hudson River in New York, the Fox
        River in Wisconsin, and hundreds of other waterways are Superfund sites
        due to PCB contamination. People living near these sites face higher
        exposure through contaminated drinking water, garden soil, and local
        food sources.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Food chain beyond fish.</strong> PCBs are also found in meat,
        dairy products, and eggs because animals accumulate them from
        contaminated feed and soil. While concentrations are generally lower
        than in fish, these foods contribute to your overall body burden because
        most people eat them daily.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        How PCBs Accumulate in Your Body
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        When you eat contaminated food, breathe contaminated air, or absorb
        PCBs through your skin, the chemicals enter your bloodstream and
        distribute throughout your body. Because PCBs are lipophilic (they
        dissolve in fat), they concentrate in fatty tissues, including your
        liver, brain, and adipose tissue.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Your body does metabolize some PCBs, but the process is slow. The
        half-life of PCBs in the human body ranges from roughly 2 to 15 years,
        depending on the specific compound. The more heavily chlorinated forms
        persist the longest. That means even after exposure stops, it can take
        decades for your levels to drop significantly.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        PCBs also cross the placenta and pass through breast milk. Mothers
        transfer their accumulated PCB burden to their children before and
        after birth. This is one reason why{" "}
        <Link
          href="/science"
          className="underline font-medium hover:opacity-80"
        >
          understanding your toxic body burden
        </Link>{" "}
        matters, especially for women of childbearing age.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Polychlorinated Biphenyls Health Effects
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The International Agency for Research on Cancer (IARC) classifies PCBs
        as Group 1 carcinogens, meaning there is sufficient evidence they cause
        cancer in humans. But cancer is not the only concern. Decades of
        research have linked PCB exposure to a wide range of health effects:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-base leading-relaxed">
        <li>
          <strong>Cancer:</strong> Liver cancer, bile duct cancer, and melanoma
          have the strongest associations with PCB exposure. Some studies also
          link PCBs to non-Hodgkin lymphoma and breast cancer.
        </li>
        <li>
          <strong>Immune suppression:</strong> PCBs reduce antibody production
          and alter immune cell function. Studies in children exposed before
          birth show weaker responses to childhood vaccines.
        </li>
        <li>
          <strong>Endocrine disruption:</strong> PCBs interfere with thyroid
          hormones, estrogen, and other hormonal pathways. This can affect
          metabolism, reproduction, and development.
        </li>
        <li>
          <strong>Neurological effects:</strong> Prenatal PCB exposure is linked
          to lower IQ, impaired memory, and attention problems in children.
          In adults, higher PCB levels are associated with cognitive decline.
        </li>
        <li>
          <strong>Cardiovascular disease:</strong> Emerging research connects
          PCB exposure to high blood pressure, atherosclerosis, and increased
          risk of stroke.
        </li>
        <li>
          <strong>Liver damage:</strong> PCBs are hepatotoxic. Elevated liver
          enzymes and fatty liver disease have been observed in populations
          with higher PCB exposure.
        </li>
        <li>
          <strong>Skin conditions:</strong> Chloracne, a severe form of acne
          caused by chlorinated chemicals, is a hallmark of high-level PCB
          exposure.
        </li>
      </ul>

      <p className="text-base leading-relaxed mb-4 font-sans">
        These are not just risks for people with extreme occupational exposure.
        Research published in <em>Environmental Health Perspectives</em> has
        found health associations at the low levels typical of the general
        population. The dose matters, but there is no established safe threshold.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        How to Test for PCB Exposure
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        PCB exposure is measured through a blood test that detects specific PCB
        compounds, called congeners, in your serum. There are 209 possible
        congeners, but laboratories typically measure a subset of the most
        common and toxicologically significant ones. PCB-153 is one of the most
        frequently measured because it is abundant, persistent, and serves as a
        reliable marker of overall PCB body burden.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The{" "}
        <Link
          href="/diagnostics"
          className="underline font-medium hover:opacity-80"
        >
          Proxima Health Baseline
        </Link>{" "}
        tests for PCB-153 as part of a comprehensive environmental toxin panel.
        Rather than testing for a single chemical class, the Baseline measures
        PCBs alongside PFAS, heavy metals, pesticides, and other persistent
        pollutants. This gives you a complete picture of your chemical body
        burden in a single blood draw.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Results are reported in nanograms per gram of lipid (ng/g lipid) or
        nanograms per milliliter of serum (ng/mL). Because PCBs concentrate in
        fat, lipid-adjusted values give the most accurate representation of your
        tissue levels. The CDC&apos;s NHANES data provides population reference
        ranges so you can see how your levels compare to the general population.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Reducing Your PCB Exposure
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        You cannot eliminate PCBs from your body quickly. But you can reduce
        ongoing exposure and slow accumulation:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-base leading-relaxed">
        <li>
          Check state fish advisories before eating locally caught fish.
          Trim fat and skin from fish before cooking, as PCBs concentrate in
          fatty tissue.
        </li>
        <li>
          If you live or work in a building constructed before 1979, be aware
          of potential PCB-containing materials. Avoid disturbing old caulk or
          sealants without proper precautions.
        </li>
        <li>
          Wash hands regularly, especially before eating, if you spend time in
          older buildings. PCBs in dust are a real exposure route.
        </li>
        <li>
          Filter your drinking water if you live near a known contaminated
          site. Granular activated carbon filters can reduce PCB levels in water.
        </li>
        <li>
          Choose a varied diet. Relying heavily on a single protein source,
          particularly fatty fish from contaminated waters, increases your risk.
        </li>
      </ul>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The first step is knowing your levels. A baseline measurement tells you
        where you stand and lets you track whether your reduction strategies
        are working over time.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Frequently Asked Questions
      </h2>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Are PCBs still being produced?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        No. The EPA banned the manufacture of PCBs in the United States in
        1979, and the Stockholm Convention on Persistent Organic Pollutants has
        led to bans or restrictions in most countries worldwide. However, PCBs
        can still be generated as unintentional byproducts of certain industrial
        processes, including pigment manufacturing. The main source of current
        human exposure is legacy contamination that remains in the environment,
        food chain, and older buildings.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        What level of PCBs in blood is dangerous?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        There is no universally agreed-upon "safe" level. The Agency for Toxic
        Substances and Disease Registry (ATSDR) has established minimal risk
        levels for PCB exposure, and the CDC tracks population reference ranges
        through NHANES. Generally, levels above the 95th percentile for the
        general population warrant clinical attention. Your results are most
        meaningful when interpreted alongside your health history, diet, and
        potential exposure sources.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        How are PCBs in food different from PCBs in buildings?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The chemicals are the same, but the exposure route differs. PCBs in
        food are ingested and absorbed through your gut, which is the most
        efficient route of absorption. PCBs in building materials primarily
        expose you through inhalation of contaminated air or ingestion of
        contaminated dust. Both routes contribute to your total body burden,
        but dietary intake, particularly from fish, accounts for the largest
        share of PCB exposure for most people.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Can PCB exposure affect my children?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Yes. PCBs cross the placenta during pregnancy and pass through breast
        milk after birth. Studies of children with prenatal PCB exposure have
        found associations with lower birth weight, reduced cognitive function,
        weakened immune response, and altered thyroid function. The developing
        brain is particularly sensitive to PCBs. If you are pregnant or planning
        to become pregnant, knowing your PCB levels can help you and your
        doctor make informed decisions.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Why does Proxima test for PCB-153 specifically?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        PCB-153 is the most abundant PCB congener found in human blood and is
        one of the most persistent. Because it correlates strongly with total
        PCB body burden, it serves as an effective biomarker for overall
        exposure. Measuring PCB-153 gives a reliable snapshot of your PCB
        accumulation without requiring a full 209-congener panel. It is the
        same marker used in large epidemiological studies, including NHANES,
        making your results comparable to published population data.
      </p>

      {/* CTA Section */}
      <div className="mt-16 mb-4 p-8 border border-current/10 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4 font-display">
          Measure What Matters
        </h2>
        <p className="text-base leading-relaxed mb-6 font-sans">
          PCBs were banned decades ago, but they are still in your body. A
          blood test is the only way to know your levels. Take our free toxin
          exposure assessment to understand your risk and learn how the Proxima
          Health Baseline can give you a clear picture of your chemical body
          burden.
        </p>
        <Link
          href="/quiz"
          className="inline-block bg-accent text-primary-inverted font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity"
        >
          Take the Free Assessment
        </Link>
      </div>
    </>
  );
}
