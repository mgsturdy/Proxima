import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mold Toxicity Symptoms: Signs You Shouldn't Ignore",
  description:
    "Learn the most common mold toxicity symptoms, how mycotoxins like Ochratoxin A affect your body, and what blood testing can reveal about mold illness.",
};

export default function MoldToxicitySymptomsPage() {
  return (
    <>
      <p className="font-mono text-xs text-tertiary uppercase tracking-wider mb-4">
        Published by Proxima Health | February 10, 2026
      </p>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 font-display">
        Mold Toxicity Symptoms: What Mycotoxin Exposure Does to Your Body
      </h1>

      <p className="text-base leading-relaxed mb-4 font-sans">
        You feel terrible. Brain fog, fatigue, headaches that won&apos;t quit.
        You&apos;ve been to three doctors. Your bloodwork comes back
        &quot;normal.&quot; You start to wonder if it&apos;s all in your head.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        It might not be. If you&apos;ve been exposed to mold, whether in your
        home, workplace, or a water-damaged building, the problem could be
        mycotoxins. These are toxic compounds produced by certain species of
        mold. They enter your body through inhalation, skin contact, and
        contaminated food. And they can circulate in your blood long after the
        initial exposure ends.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Mold toxicity is real. It is measurable. And conventional medicine often
        misses it entirely.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What Are Mycotoxins?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Mycotoxins are chemical byproducts of mold growth. Not all mold produces
        them, but the species that do are common in indoor environments.{" "}
        <em>Aspergillus</em>, <em>Penicillium</em>, <em>Stachybotrys</em>{" "}
        (black mold), and <em>Fusarium</em> are among the most frequent
        offenders.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The mycotoxins that matter most for human health include:
      </p>

      <ul className="list-disc pl-6 mb-4 space-y-2 text-base leading-relaxed font-sans">
        <li>
          <strong>Ochratoxin A (OTA)</strong> &mdash; produced by{" "}
          <em>Aspergillus</em> and <em>Penicillium</em> species. It targets the
          kidneys, immune system, and nervous system. OTA is one of the most
          studied mycotoxins and has been classified as a possible human
          carcinogen by the International Agency for Research on Cancer.
        </li>
        <li>
          <strong>Aflatoxins</strong> &mdash; produced primarily by{" "}
          <em>Aspergillus flavus</em> and <em>Aspergillus parasiticus</em>.
          Aflatoxin B1 is the most potent natural carcinogen known. Aflatoxin M1
          appears in the body as a metabolite and can be detected in blood and
          urine.
        </li>
        <li>
          <strong>Trichothecenes</strong> &mdash; produced by{" "}
          <em>Stachybotrys</em> and <em>Fusarium</em>. These suppress immune
          function and damage the gut lining.
        </li>
        <li>
          <strong>Gliotoxin</strong> &mdash; produced by <em>Aspergillus
          fumigatus</em>. It suppresses the immune system, making it harder for
          your body to fight off infections.
        </li>
      </ul>

      <p className="text-base leading-relaxed mb-4 font-sans">
        These compounds are lipophilic, meaning they dissolve in fat. They
        accumulate in fatty tissues and organs. They recirculate through bile.
        This is why mold toxicity symptoms can persist for months or years after
        the original exposure, even if you&apos;ve left the moldy environment.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Common Mold Toxicity Symptoms
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Mold illness is a multi-system condition. Mycotoxins don&apos;t attack
        just one organ. They trigger widespread inflammation, oxidative stress,
        and immune dysregulation. That&apos;s why the symptom list is long and
        often confusing to doctors who are looking for a single diagnosis.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Neurological symptoms.</strong> Brain fog is the hallmark
        complaint. Patients describe difficulty concentrating, poor short-term
        memory, word-finding problems, and a feeling of mental sluggishness.
        Headaches, dizziness, light sensitivity, and numbness or tingling in the
        extremities are also common. Ochratoxin A is neurotoxic and can cross
        the blood-brain barrier.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Fatigue.</strong> Not ordinary tiredness. The fatigue associated
        with mycotoxin exposure is deep and unrelenting. Sleep does not fix it.
        Coffee does not touch it. Many patients describe it as feeling like they
        are moving through wet concrete.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Respiratory issues.</strong> Chronic sinus congestion, shortness
        of breath, wheezing, and a persistent cough. These symptoms often get
        labeled as allergies or asthma. Standard allergy treatments provide
        little relief because the root cause is toxic, not allergic.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Digestive problems.</strong> Nausea, bloating, abdominal pain,
        diarrhea, and food sensitivities. Mycotoxins damage the intestinal
        lining and disrupt the gut microbiome. Some patients develop new food
        intolerances that seem to appear out of nowhere.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Musculoskeletal pain.</strong> Joint pain, muscle aches, and
        cramps without a clear orthopedic cause. The inflammatory response
        triggered by mycotoxins affects connective tissue throughout the body.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Mood and mental health changes.</strong> Anxiety, depression,
        irritability, and mood swings. These are not purely psychological. They
        are downstream effects of neuroinflammation and immune activation caused
        by mycotoxin exposure.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Immune dysfunction.</strong> Frequent infections, slow wound
        healing, and new or worsening autoimmune symptoms. Gliotoxin and
        trichothecenes directly suppress immune cell function. Some patients
        find they catch every cold that comes around, while others develop
        autoimmune flares.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Why Conventional Medicine Misses Mold Illness
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Standard blood panels do not test for mycotoxins. A complete blood count
        and metabolic panel will come back normal in most mold-exposed patients.
        Imaging is usually unremarkable. Doctors see a patient with vague,
        multi-system complaints and no obvious lab findings, and the conclusion
        is often stress, anxiety, or &quot;nothing wrong.&quot;
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The problem is not that the patient is imagining symptoms. The problem is
        that the standard tests are not looking for the right things. You
        wouldn&apos;t diagnose diabetes without checking blood sugar. You
        can&apos;t diagnose mycotoxin exposure without testing for mycotoxins.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        There is also a knowledge gap. Most medical schools spend very little
        time on environmental toxicology. Many physicians are simply not trained
        to consider mold as a cause of chronic illness. That is slowly changing
        as the{" "}
        <Link
          href="/science"
          className="text-accent underline hover:text-accent/80"
        >
          scientific research
        </Link>{" "}
        on mycotoxin health effects continues to grow.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Testing for Mold Toxicity: What a Mold in Blood Test Reveals
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The most direct way to assess mycotoxin exposure is to measure
        mycotoxin levels in blood or urine. These tests look for specific
        compounds like Ochratoxin A, Aflatoxin M1, trichothecenes, and
        gliotoxin. A positive result tells you that mycotoxins are present in
        your body, which means either ongoing exposure or stored toxins being
        released from tissues.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Proxima Health&apos;s{" "}
        <Link
          href="/diagnostics"
          className="text-accent underline hover:text-accent/80"
        >
          diagnostic panel
        </Link>{" "}
        tests for Ochratoxin A and Aflatoxin M1, two of the most clinically
        relevant mycotoxins found in human blood. These markers provide concrete
        data about what is circulating in your body, not just whether you were
        near mold at some point, but whether mycotoxins are actively present in
        your system right now.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Additional markers that can support a mold illness diagnosis include
        inflammatory markers (C-reactive protein, TGF-beta 1), immune markers
        (MSH, VIP), and genetic susceptibility testing (HLA-DR). A
        comprehensive approach looks at the full picture rather than any single
        lab value.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Treatment: What Works for Mold Illness
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Treatment for mold toxicity follows a clear sequence. Skip steps and
        recovery stalls.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Step 1: Remove yourself from the source.</strong> No treatment
        works if you are still being exposed. This means professional mold
        inspection and remediation of your home or workplace. If remediation is
        not possible, relocation may be necessary. This is the hardest step for
        most patients, but it is non-negotiable.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Step 2: Bind and eliminate mycotoxins.</strong> Practitioners
        experienced in mold illness often use binding agents like cholestyramine,
        activated charcoal, or clay-based binders. These bind to mycotoxins in
        the gut and prevent reabsorption through bile recycling. Binder protocols
        should be supervised by a healthcare provider.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Step 3: Reduce inflammation.</strong> Anti-inflammatory support
        through diet, targeted supplementation (omega-3 fatty acids, glutathione
        precursors, curcumin), and lifestyle changes. Addressing gut health is
        critical since the GI tract is often ground zero for mycotoxin damage.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Step 4: Support detoxification pathways.</strong> Adequate
        hydration, sweating (sauna therapy shows promise in some studies),
        liver support, and ensuring regular bowel movements. Your body has
        built-in detox systems. The goal is to make sure they are working
        efficiently.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Step 5: Retest.</strong> Follow-up testing is essential to
        confirm that mycotoxin levels are dropping. Without retesting, you are
        guessing. Objective data lets you and your provider adjust the plan
        based on what is actually happening in your body.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Preventing Mold Exposure
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Prevention comes down to controlling moisture. Mold needs water to grow.
        Keep indoor humidity below 50%. Fix leaks immediately. Ensure bathrooms,
        kitchens, and basements have adequate ventilation. Use HEPA air
        purifiers in rooms where you spend the most time.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Pay attention to food sources as well. Mycotoxins contaminate grains,
        coffee, nuts, dried fruits, and wine at measurable levels. Buying from
        reputable sources, storing food properly, and avoiding visibly damaged
        products reduces dietary mycotoxin intake.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        If you are moving into a new home or office, consider a professional
        mold inspection before signing. Water damage history is one of the
        strongest predictors of mold problems. Ask questions. Check basements,
        crawl spaces, and HVAC systems.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Frequently Asked Questions
      </h2>

      <h3 className="font-bold text-lg mt-6 mb-2">
        How long do mold toxicity symptoms last after exposure?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        It depends on the duration and intensity of exposure, your genetics, and
        whether you are still in a contaminated environment. Some people recover
        within weeks of leaving a moldy building. Others experience symptoms for
        months or years, especially if mycotoxins have accumulated in fatty
        tissues. Testing and treatment under a knowledgeable provider shorten
        recovery time significantly.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Can a blood test detect mold toxicity?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Yes. Specialized blood tests can measure specific mycotoxins like
        Ochratoxin A and Aflatoxin M1. These tests are different from standard
        blood panels, which do not screen for environmental toxins. Proxima
        Health&apos;s{" "}
        <Link
          href="/diagnostics"
          className="text-accent underline hover:text-accent/80"
        >
          diagnostic platform
        </Link>{" "}
        includes testing for these mycotoxins as part of a broader environmental
        toxin panel.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        What is the difference between mold allergy and mold toxicity?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        A mold allergy is an immune response to mold spores. It causes typical
        allergy symptoms: sneezing, runny nose, itchy eyes. Mold toxicity is
        caused by mycotoxins, the chemical poisons mold produces. Toxicity
        affects multiple organ systems and causes neurological, digestive, and
        immune symptoms that go far beyond allergies. You can have one without
        the other, or both at the same time.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Is black mold the only dangerous type of mold?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        No. <em>Stachybotrys chartarum</em> (black mold) gets the most media
        attention, but it is far from the only mycotoxin-producing species.{" "}
        <em>Aspergillus</em>, <em>Penicillium</em>, and <em>Fusarium</em> are
        extremely common indoors and produce potent mycotoxins including
        Ochratoxin A and aflatoxins. The color of mold is not a reliable
        indicator of danger.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Can mold toxicity cause autoimmune disease?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Research suggests a connection. Mycotoxin exposure triggers chronic
        inflammation and immune dysregulation, both of which are precursors to
        autoimmune conditions. Some studies have found higher rates of
        autoimmune markers in mold-exposed populations. While mycotoxins may
        not directly &quot;cause&quot; autoimmune disease, they can be a
        contributing trigger in genetically susceptible individuals.
      </p>

      {/* CTA */}
      <div className="mt-16 p-8 rounded-2xl bg-surface border border-primary text-center">
        <h2 className="text-2xl font-bold mb-4 font-display">
          Find Out What&apos;s in Your Blood
        </h2>
        <p className="text-base leading-relaxed mb-6 font-sans max-w-xl mx-auto">
          Proxima Health tests for Ochratoxin A, Aflatoxin M1, and other
          environmental toxins. Take our free assessment to understand your
          exposure risk and get personalized recommendations.
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
