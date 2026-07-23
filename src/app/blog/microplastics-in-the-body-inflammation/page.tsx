import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Microplastics in the Body: Why Inflammation Matters",
  description:
    "Microplastics in the body may drive inflammation. See the latest studies, what testing misses, and how to reduce exposure.",
};

export default function MicroplasticsInTheBodyInflammationPage() {
  return (
    <>
      <p className="font-mono text-xs text-tertiary uppercase tracking-wider mb-4">
        Published by Proxima Health | July 23, 2026
      </p>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 font-display">
        Microplastics in the Body: Why Inflammation Matters
      </h1>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Microplastics showed up in carotid plaque in 58.4% of patients in a
        2024 New England Journal of Medicine study, and the plaque-positive
        group faced a 4.5-fold higher risk of heart attack, stroke, or death
        over the next three years.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        That is the fact most search results do not lead with when people look
        up <strong>microplastics in the body</strong>. They usually start with
        a broad explainer, a methods critique, or a safety roundup that says
        the science is still young. Those pages matter, but they stop at
        presence. They do not answer the question that actually matters to a
        patient or clinician: if the particles are in the body, what is the
        body doing with them?
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Proxima can own the missing angle. Not just whether microplastics show
        up in blood, stool, plaque, or tissue, but how the best 2024 to 2025
        studies connect them to inflammation, how the data differ by organ, and
        why testing still lags behind the biology.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What the top search results cover, and what they miss
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The current top results for this keyword lean toward five themes: an
        NIH scoping review on microplastics in human tissues and organs, an
        AAMC explainer on health implications, a Guardian piece about a
        methods controversy, a new GAO spotlight on microplastics in the body
        and environment, and a clinician blog that translates the topic into
        symptom language (NIH, 2024; AAMC, 2025; Guardian, 2026; GAO, 2026).
        They all do one thing well. They agree that microplastics now appear in
        human biology, not just in oceans and packaging.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        They also miss the same thing. They rarely explain which findings in
        humans look strongest, how inflammation shows up in blood and stool
        studies, or why a positive microplastics result does not automatically
        tell you what to do next. That gap matters because a lot of readers do
        not want a philosophy lesson about plastics. They want to know whether
        the particles could be driving fatigue, gut symptoms, or vascular
        risk.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        How microplastics get into the body
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The entry routes are boring, ordinary, and hard to avoid. The FDA says
        people may be exposed through air, food, water, and skin contact from
        personal care products, and it notes that microplastics and
        nanoplastics have been found in urine, stool, blood, and organs. The
        agency also says the current evidence does not prove that levels found
        in food pose a human health risk, but it highlights a major problem:
        methods for detecting and characterizing these particles still vary too
        much to support clean comparisons across studies (FDA, 2024).
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Size matters too. WHO&apos;s 2019 drinking-water review says particles
        larger than 150 µm are likely to pass through the gut and leave in
        feces, while uptake of smaller particles should stay limited, although
        very small particles, including nanoplastics, may absorb more readily
        (WHO, 2019). That does not mean big particles are harmless. It means
        the smaller the particle, the more seriously you have to think about
        absorption, tissue access, and biological persistence.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What the research says about inflammation
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The strongest human signal right now is not a symptom list. It is an
        inflammatory pattern. A 2024 review in PMC found that current human
        evidence suggests associative links between microplastic exposure and
        biological markers of inflammation, oxidative stress, and endocrine
        disruption. The review does not claim proof of causation, but it shows
        that inflammation keeps showing up when researchers measure actual
        human samples.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        A 2024 Scientific Reports study made that pattern more concrete. In 36
        blood samples, microplastics appeared in 88.9% of participants, with a
        mean concentration of 4.2 particles per mL. When the load reached 3
        particles per mL or higher, the researchers saw higher activated
        partial thromboplastin time, C-reactive protein, and fibrinogen
        (Scientific Reports, 2024). That does not prove microplastics caused
        the inflammation, but it does show that blood burden and inflammatory
        markers can move together.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Gut data tell a similar story. In a 2021 ACS study, people with
        inflammatory bowel disease had more microplastics in stool than healthy
        controls, 41.8 items per gram of dry matter versus 28.0 items per gram,
        and fecal microplastic concentration rose with disease severity. The
        same study also pointed to drinking-water packaging and dust exposure
        as important sources of human exposure. That makes the gut a plausible
        early site of interaction, especially for people who already have
        digestive inflammation.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Mechanistic studies add another layer. In 2025, Frontiers in Immunology
        reported that commercial and environmental micro- and nanoplastics,
        especially PET, triggered strong inflammatory responses in human cells.
        At 1 mg/mL they drove IL-1β and IL-6 secretion, and environmental PET
        samples induced IL-1β even at 100 ng/mL. A 2025 AAMC explainer
        summarized a related mouse study by noting that even clean plastic
        particles can provoke negative effects because the immune system reads
        them as a foreign invader and responds with inflammation (Frontiers,
        2025; AAMC, 2025).
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Why the cardiovascular data changed the conversation
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The NEJM plaque study changed the conversation because it moved beyond
        general exposure and into tissue. Researchers found polyethylene in
        58.4% of carotid plaques from 150 patients, and polyvinyl chloride in
        12.1%. They also reported a mean polyethylene level of 21.7 µg per mg
        of plaque. In follow-up, plaque-positive patients had a 4.5-fold higher
        risk of myocardial infarction, stroke, or death. That does not prove
        the plastics caused the events, but it does show that microplastics in
        the body can show up where vascular disease actually happens (NEJM,
        2024).
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Can symptoms tell you if microplastics are the problem?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Not by themselves. Fatigue, brain fog, digestive upset, rashes, and
        generalized inflammation can point to a lot of different problems. They
        can also show up in people with no measurable microplastic burden at
        all. That is why symptom-only content tends to disappoint readers. It
        promises clarity, then hands them a list that fits half the internet.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        What does help is pattern recognition. If someone has gut symptoms and
        elevated inflammatory markers, or vascular disease plus a significant
        exposure history, or an IBD flare alongside a high stool particle load,
        the microplastics question becomes more relevant. The point is not to
        blame every tired afternoon on plastic. The point is to decide whether
        the exposure story deserves a seat at the diagnostic table.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What testing can and cannot tell you
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Current testing can tell you that exposure exists. It can sometimes show
        whether a blood or stool burden tracks with inflammation. It can also
        help you connect a symptom pattern to a real source, especially when
        the exposure still continues at home or at work. But current testing
        cannot give you a neat disease label or a universal threshold that says
        microplastics crossed from background noise into illness.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        That limitation is not a reason to dismiss the data. It is a reason to
        use it carefully. If a test comes back positive, that result means the
        particles are present, not that they caused every symptom you feel. If
        a test comes back low, that does not erase the possibility of a past
        exposure, a localized tissue burden, or a different toxin that better
        explains the clinical picture. The best use of testing is to narrow the
        search, not to replace clinical judgment.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        How to lower exposure without pretending you can avoid everything
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The FDA and WHO both make the same practical point. The science is
        incomplete, and there is no clean way to eliminate exposure entirely.
        That means exposure reduction has to stay realistic. Use glass or
        stainless steel for hot food and drinks when you can. Avoid heating
        food in plastic. Filter water when that meaningfully lowers local
        exposure. Reduce dust with regular cleaning. Choose less packaged food
        when the tradeoff makes sense. These steps do not remove every particle,
        but they can lower the load that enters the body every day (FDA, 2024;
        WHO, 2019).
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        The Proxima angle
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Most pages about microplastics in the body tell readers the particles
        are everywhere, then stop there. Proxima can own the next step. We can
        show which human studies actually found inflammation markers, which
        findings still look associative, where stool and blood testing add value
        and where they do not, and how patients should think about tissue
        burden instead of symptom guessing.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        That is the useful story. Not fear. Not denial. A clear map of what the
        body shows us, what the research can support today, and what you should
        test next if microplastics look like part of the problem.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        If you want the testing logic behind that approach, start with our{" "}
        <Link href="/diagnostics" className="underline underline-offset-4">
          diagnostics
        </Link>{" "}
        page. If you want the broader research framework, read our{" "}
        <Link href="/science" className="underline underline-offset-4">
          science
        </Link>{" "}
        page.
      </p>
    </>
  );
}
