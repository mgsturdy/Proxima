import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flame Retardants in Blood: Risks and Testing",
  description:
    "Flame retardants like PBDEs accumulate in your blood from household dust. Learn the health risks of PBDE exposure and how to test for brominated flame retardants.",
};

export default function FlameRetardantsInBloodPage() {
  return (
    <>
      <p className="font-mono text-xs text-tertiary uppercase tracking-wider mb-4">
        Published by Proxima Health | December 30, 2025
      </p>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 font-display">
        Flame Retardants in Blood: What They Are, How They Get There, and Why
        You Should Test
      </h1>

      <p className="text-base leading-relaxed mb-4 font-sans text-secondary">
        Your couch is quietly poisoning you. So is your mattress, your carpet,
        and the electronics on your desk. They all contain flame retardant
        chemicals designed to slow the spread of fire. The problem is that these
        chemicals do not stay put. They leach out of products, bind to household
        dust, and enter your body every time you breathe, eat, or touch your
        face. Once inside, they accumulate in your blood and tissues for years.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The most well-studied group of these chemicals is called{" "}
        <strong>polybrominated diphenyl ethers, or PBDEs</strong>. Researchers
        have detected PBDEs in the blood of virtually every person tested in the
        United States. Studies from the CDC and the Environmental Working Group
        show that Americans carry some of the highest PBDE levels in the world,
        often 10 to 100 times higher than people in Europe, where many of these
        chemicals were banned earlier.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        This is not a theoretical problem. Decades of{" "}
        <Link href="/science" className="underline font-medium hover:opacity-80">
          peer-reviewed research
        </Link>{" "}
        link PBDE exposure to thyroid disruption, hormone interference, cancer
        risk, and developmental problems in children. If you have not tested for
        flame retardants in blood, you have no idea what your exposure looks
        like.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What Are Flame Retardant Chemicals?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Flame retardants are a broad class of chemicals added to consumer
        products to meet fire safety standards. They are found in furniture foam,
        mattresses, carpets, curtains, car interiors, televisions, computers,
        and children&apos;s products. The idea was simple: slow down ignition and
        give people more time to escape a fire.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The most common types include:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-base leading-relaxed">
        <li>
          <strong>PBDEs (polybrominated diphenyl ethers)</strong> - Brominated
          flame retardants used heavily from the 1970s through the 2000s. Three
          major commercial mixtures existed: pentaBDE, octaBDE, and decaBDE.
          PentaBDE and octaBDE were phased out in the US in 2004, but decaBDE
          remained in use until 2013.
        </li>
        <li>
          <strong>HBCD (hexabromocyclododecane)</strong> - Used in polystyrene
          foam insulation and some textiles. Listed under the Stockholm
          Convention as a persistent organic pollutant.
        </li>
        <li>
          <strong>Organophosphate flame retardants</strong> - Newer replacements
          for PBDEs. Early research suggests many of them carry their own health
          risks, including endocrine disruption and neurotoxicity.
        </li>
        <li>
          <strong>TBBPA (tetrabromobisphenol A)</strong> - The most widely
          produced brominated flame retardant today, used primarily in circuit
          boards and electronics housings.
        </li>
      </ul>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The key issue with brominated flame retardants like PBDEs is that they
        are additive, not reactive. That means they are physically mixed into
        materials rather than chemically bonded. Over time, they migrate out of
        products and into your environment. Every time you sit on your couch,
        walk on your carpet, or use your laptop, tiny amounts of flame retardant
        chemicals escape into the air and settle into household dust.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        How PBDEs Get Into Your Blood
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The primary route of PBDE exposure for most people is household dust.
        Studies published in <em>Environmental Science &amp; Technology</em>{" "}
        have found that indoor dust is the single largest source of PBDE
        exposure, especially for young children who crawl on floors and put
        their hands in their mouths.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Here is how the exposure cycle works:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-base leading-relaxed">
        <li>
          Flame retardants slowly escape from furniture, electronics, and
          building materials
        </li>
        <li>They attach to dust particles that settle on floors and surfaces</li>
        <li>
          You inhale the dust or ingest it through hand-to-mouth contact
        </li>
        <li>
          PBDEs are lipophilic (fat-loving), so they accumulate in fatty tissues
          and blood
        </li>
        <li>
          Biological half-lives range from 2 to 12 years depending on the
          specific PBDE congener
        </li>
      </ul>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Diet is another route. PBDEs have entered the food chain through
        contaminated soil and water. Studies have detected them in meat, fish,
        dairy, and eggs. People who eat large amounts of fatty fish or
        animal products from contaminated regions may have higher levels.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The result is that PBDE exposure is essentially universal in the United
        States. A 2017 study in <em>Environmental Health Perspectives</em>{" "}
        found detectable levels of multiple PBDE congeners in over 97% of
        participants. The congener found at the highest levels was{" "}
        <strong>PBDE-47 (2,2&apos;,4,4&apos;-tetrabromodiphenyl ether)</strong>,
        which is also the compound that Proxima tests for in our{" "}
        <Link href="/diagnostics" className="underline font-medium hover:opacity-80">
          Baseline diagnostic panel
        </Link>.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Health Effects of Flame Retardants in Blood
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The health risks of PBDE exposure are supported by hundreds of studies
        across animal models, epidemiological data, and in vitro research. The
        evidence is strongest for the following effects:
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Thyroid disruption.</strong> PBDEs are structurally similar to
        thyroid hormones. They interfere with thyroid hormone production,
        transport, and metabolism. A 2019 meta-analysis in{" "}
        <em>Environment International</em> found a significant association
        between PBDE blood levels and altered thyroid function, including
        reduced T4 and elevated TSH. Your thyroid controls metabolism, energy,
        and brain development. Even small disruptions can have widespread
        effects.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Cancer risk.</strong> The EPA classifies PBDE-47 and PBDE-99 as
        possible human carcinogens. Animal studies have demonstrated liver
        tumors, and epidemiological research has found associations between
        higher PBDE levels and increased risk of papillary thyroid cancer.
        A 2017 study in <em>JAMA</em> linked flame retardant exposure to a
        higher incidence of thyroid cancer, the fastest-growing cancer
        diagnosis in the US.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Developmental and neurological effects.</strong> This is where
        the research is most concerning. Studies consistently find that children
        born to mothers with higher PBDE levels score lower on tests of
        cognitive function, attention, and motor skills. A landmark UC Berkeley
        study tracked children from birth and found that every tenfold increase
        in maternal PBDE levels at pregnancy was associated with a 4.5-point
        decrease in IQ at age 7.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Reproductive harm.</strong> PBDE exposure has been linked to
        reduced fertility in both men and women. Research published in{" "}
        <em>Environmental Health Perspectives</em> found associations between
        PBDE levels and longer time to pregnancy, decreased sperm quality, and
        disrupted hormone levels.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Immune suppression.</strong> Emerging research suggests PBDEs
        may impair immune function, similar to the well-documented effects of
        PFAS. Animal studies show reduced antibody production and altered
        immune cell activity at exposure levels relevant to the general
        population.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Who Is Most at Risk?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Everyone in the US has some level of PBDE exposure. But certain groups
        carry disproportionately higher burdens:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-base leading-relaxed">
        <li>
          <strong>Young children and toddlers</strong> - Their hand-to-mouth
          behavior and time spent on floors leads to dust ingestion rates 2 to
          5 times higher than adults.
        </li>
        <li>
          <strong>Pregnant and breastfeeding women</strong> - PBDEs cross the
          placenta and are excreted in breast milk, exposing infants during
          critical developmental windows.
        </li>
        <li>
          <strong>People with older furniture or electronics</strong> -
          Products manufactured before 2005 are more likely to contain
          pentaBDE, the most bioaccumulative commercial mixture.
        </li>
        <li>
          <strong>Low-income communities</strong> - Older housing with
          deteriorating furniture and poor ventilation increases dust exposure.
          Studies show significant disparities in PBDE body burden by
          socioeconomic status.
        </li>
        <li>
          <strong>Workers in recycling, electronics repair, and
          firefighting</strong> - Occupational exposure through handling treated
          materials or breathing contaminated air.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        How to Reduce Your Exposure
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        You cannot eliminate PBDEs already in your body overnight. With
        half-lives of up to 12 years for some congeners, reducing your blood
        levels is a long-term project. But you can cut ongoing exposure
        significantly:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-base leading-relaxed">
        <li>
          <strong>Control dust.</strong> Vacuum frequently with a HEPA-filter
          vacuum. Wet-mop hard floors. Dust with a damp cloth rather than dry
          dusting, which just moves particles into the air.
        </li>
        <li>
          <strong>Replace old furniture carefully.</strong> If your couch or
          mattress was made before 2005, the foam likely contains PBDEs.
          When replacing, look for products labeled TB117-2013 compliant
          (California&apos;s updated flammability standard that does not require
          chemical flame retardants).
        </li>
        <li>
          <strong>Wash hands frequently.</strong> This is especially important
          for children. Hand washing before meals reduces ingestion of
          contaminated dust.
        </li>
        <li>
          <strong>Ventilate your home.</strong> Open windows when weather
          permits. Use exhaust fans. Better air circulation reduces indoor dust
          accumulation.
        </li>
        <li>
          <strong>Choose electronics wisely.</strong> Some manufacturers now
          produce electronics without brominated flame retardants. Check product
          specifications or look for GreenScreen certified products.
        </li>
      </ul>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Reduction strategies work best when you know your starting point. A
        blood test for flame retardants gives you a baseline number so you can
        track changes over time and know whether your efforts are making a
        difference.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Testing for Flame Retardants in Blood
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Until recently, testing for PBDEs in blood was limited to research
        settings. Clinical labs rarely offered it, and most doctors had never
        heard of it. That is changing as awareness of environmental toxin
        exposure grows and testing technology becomes more accessible.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        PBDE blood tests use gas chromatography-mass spectrometry (GC-MS) or
        liquid chromatography-tandem mass spectrometry (LC-MS/MS) to measure
        the concentration of specific PBDE congeners in your blood serum.
        Results are reported in nanograms per gram of lipid (ng/g lipid) or
        nanograms per milliliter of serum (ng/mL).
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The{" "}
        <Link href="/diagnostics" className="underline font-medium hover:opacity-80">
          Proxima Health Baseline
        </Link>{" "}
        includes PBDE-47, the most prevalent and well-studied PBDE congener,
        as part of a comprehensive environmental toxin panel. Rather than
        testing for one chemical class at a time, you get a full picture of
        your chemical body burden: flame retardants, PFAS, heavy metals,
        pesticides, and more. One blood draw. One report.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Frequently Asked Questions
      </h2>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Are flame retardants still used in furniture?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Yes, but regulations have shifted. California updated its flammability
        standard (TB117-2013) in 2013 so that furniture can meet fire safety
        requirements without chemical flame retardants. Many manufacturers have
        moved away from brominated flame retardants. However, older furniture
        still in use is a significant source of ongoing exposure. Newer
        products may contain organophosphate flame retardants, which are
        themselves under scrutiny for health effects.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        How long do PBDEs stay in the body?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        It depends on the specific congener. PBDE-47, the most common one found
        in human blood, has an estimated half-life of 1.8 to 6.5 years. PBDE-153
        can persist for up to 12 years. This means that even after exposure stops,
        it takes years for your body to eliminate these chemicals. That is why
        baseline testing matters. You need to know your starting point.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Can flame retardants cause thyroid problems?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Research strongly suggests yes. PBDEs have a molecular structure similar
        to thyroid hormones (T3 and T4). They can bind to thyroid transport
        proteins, disrupt hormone synthesis, and accelerate thyroid hormone
        metabolism. Multiple epidemiological studies have found associations
        between higher PBDE blood levels and altered thyroid function,
        including subclinical hypothyroidism. If you have unexplained thyroid
        issues, environmental toxin testing may help identify a contributing
        factor.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Are children more affected by flame retardant exposure?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Yes. Children face higher exposure because they ingest more dust
        relative to their body weight. They are also more vulnerable to health
        effects because their brains and bodies are still developing. Studies
        have linked prenatal and early childhood PBDE exposure to lower IQ
        scores, attention problems, and reduced motor skills. The developing
        thyroid system in children is particularly sensitive to PBDE
        interference.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        What is the difference between PBDEs and PFAS?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        PBDEs and PFAS are both persistent environmental chemicals found in
        human blood, but they are chemically distinct. PBDEs are brominated
        compounds used as flame retardants in furniture, electronics, and
        textiles. PFAS are fluorinated compounds used for water and stain
        resistance in cookware, clothing, and food packaging. Both accumulate
        in the body and are linked to thyroid disruption, cancer, and
        developmental effects. A comprehensive blood test like the{" "}
        <Link href="/diagnostics" className="underline font-medium hover:opacity-80">
          Proxima Health Baseline
        </Link>{" "}
        screens for both.
      </p>

      {/* CTA Section */}
      <div className="mt-16 mb-4 p-8 border border-current/10 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4 font-display">
          Find Out What You Are Carrying
        </h2>
        <p className="text-base leading-relaxed mb-6 font-sans">
          Flame retardants do not show up on a standard blood test. The only
          way to know your PBDE levels is to test for them directly. Take our
          free toxin exposure assessment to understand your risk and learn how
          the Proxima Health Baseline can measure what matters.
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
