import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PFAS and Fertility: What the Research Shows",
  description:
    "PFAS and fertility are linked to lower conception odds. See the studies, symptoms, and testing gap most pages miss.",
};

export default function PfasAndFertilityPage() {
  return (
    <>
      <p className="font-mono text-xs text-tertiary uppercase tracking-wider mb-4">
        Published by Proxima Health | June 9, 2026
      </p>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 font-display">
        PFAS and Fertility: What the Research Shows
      </h1>
      <p className="text-base leading-relaxed mb-4 font-sans">
        A 2023 Mount Sinai cohort found that women with higher PFAS exposure
        were 30 percent to 40 percent less likely to conceive and deliver a
        live birth within a year (Mount Sinai, 2023).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        That matters because PFAS show up in drinking water, food packaging,
        stain-resistant coatings, and the blood of nearly all Americans (EPA,
        2026; Mount Sinai, 2023). If you are trying to conceive, the real
        question is not whether PFAS sound alarming. The real question is
        whether they quietly lower your odds before you ever get a diagnosis.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The best current answer is yes, they can. Human studies keep linking
        PFAS to lower fecundability, worse live-birth outcomes, altered
        reproductive hormones, and pregnancy complications, but most ranking
        pages stop at a broad warning instead of telling you what the research
        actually means (Mount Sinai, 2023; ASRM, 2026; EPA, 2026).
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What makes PFAS a fertility problem?
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        PFAS are synthetic compounds built around carbon-fluorine bonds, which
        makes them extremely stable in the environment and in the body. ASRM
        notes that they cross critical physiological barriers and collect in
        reproductive tissues, including follicular fluid, amniotic fluid,
        placental tissue, and breast milk (ASRM, 2026).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        That biology helps explain why fertility researchers keep paying
        attention. PFAS do not have to cause obvious poisoning to matter. They
        can nudge hormones, egg development, sperm function, and the uterine
        environment in ways that lower the odds of conception and pregnancy
        success over time (ASRM, 2026; EPA, 2026).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Nearly all current exposure happens through ordinary life. EPA lists
        contaminated drinking water, certain foods, dust, air, work in
        manufacturing or firefighting, and consumer products as common sources
        (EPA, 2026). That is why PFAS fertility risk affects people who feel
        perfectly normal. Exposure does not need to come from a disaster site.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What do human studies show about women&apos;s fertility?
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The clearest human signal comes from the Singapore Preconception Study.
        Mount Sinai researchers followed 1,032 women ages 18 to 45 who were
        trying to conceive and measured PFAS in plasma collected between 2015
        and 2017. When they looked at seven PFAS as a mixture, they found 30
        percent to 40 percent lower odds of attaining a clinical pregnancy
        within one year and delivering a live birth (Mount Sinai, 2023).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The strongest individual signal in that cohort came from
        perfluorodecanoic acid, and the team also saw associations with
        perfluorooctanesulfonic acid, perfluorooctanoic acid, and
        perfluoroheptanoic acid (Mount Sinai, 2023). That matters because the
        result does not hinge on one chemical alone. The mixture effect tells a
        more realistic story about how people actually encounter PFAS.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        A 2023 systematic review and meta-analysis sharpened that picture. It
        reviewed 5,468 records and included 13 studies. It found that PFOA
        exposure tracked with a fecundability odds ratio of 0.88 and an odds
        ratio for infertility of 1.33, while PFOS exposure tracked with a
        fecundability odds ratio of 0.94 (HERO EPA, 2023). In plain English,
        higher exposure lined up with fewer chances to conceive and a higher
        chance of infertility.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        A 2024 U.S. study in Toxics added another useful number. In 745 women
        of reproductive age, a one-quartile increase in mixed PFAS exposure
        linked to 0.09 fewer pregnancies and 0.12 fewer live births. The same
        paper found PFNA as the strongest negative contributor in the mixture
        models (Huang et al., 2024). That result gives readers something most
        articles never mention: repeated, lower-level exposure can still move
        the fertility needle.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Do PFAS affect male fertility too?
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Yes, and that is another place where most search results stay too
        narrow. A 2024 review in Seminars in Reproductive Medicine concluded
        that PFAS disrupt endocrine function and impair sperm motility,
        quality, and viability (Maxwell et al., 2024). That review also notes
        inconsistent but concerning links with semen parameters and sperm DNA
        methylation.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        A 2025 review in PubMed reached the same general conclusion about male
        reproductive health. It described PFAS as persistent contaminants that
        alter reproductive hormones and contribute to sperm dysfunction (NIH,
        2025). So if a couple searches for a fertility answer, the answer
        should include both partners, not just the woman.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        This is one reason PFAS feels different from a classic single-exposure
        toxin. The chemical burden can show up in female hormone patterns,
        ovulation timing, sperm quality, and pregnancy maintenance at the same
        time (ASRM, 2026; Maxwell et al., 2024). Fertility does not fail in
        only one sex.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What about miscarriage and pregnancy outcomes?
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Fertility and pregnancy are not the same endpoint, but readers usually
        search them together. ASRM&apos;s 2026 review linked PFAS exposure to
        preeclampsia, fetal growth restriction, preterm birth, diminished
        ovarian reserve, hormonal disruption, and poorer outcomes in assisted
        reproductive technology (ASRM, 2026). That does not prove every PFAS
        exposure causes every complication. It does show the risk picture gets
        wider once conception happens.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        At the same time, not every reproductive endpoint moves in the same
        direction. A 2025 study in the Japan Environment and Children&apos;s
        Study tracked 24,412 pairs of maternal PFAS measurements and documented
        66 miscarriages, or 0.3 percent. The investigators found no significant
        difference in PFAS detection or concentration between the miscarriage
        group and the live-birth group, and they reported no association with
        late miscarriage (Tatsuta et al., 2025).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        That negative result does not erase the fertility signal. It makes the
        point that PFAS do not behave like a blunt hammer across every outcome.
        Some datasets show lower conception odds or poorer live-birth numbers.
        Others do not show the same miscarriage signal. Good writing should
        hold both truths at once instead of turning PFAS into a one-size-fits-all
        villain.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What symptoms or clues should make you suspicious?
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        PFAS do not produce one neat fertility symptom. They usually show up as
        a pattern: trouble conceiving, cycle changes, unexplained low-normal
        reproductive hormones, recurrent IVF disappointment, or fertility that
        drops off faster than expected for age (ASRM, 2026; Mount Sinai, 2023).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The same pattern can also include thyroid stress, cholesterol changes,
        immune changes, or pregnancy issues, because PFAS hit multiple hormone
        pathways at once (EPA, 2026). That is why a person can have good general
        health, normal weight, and still carry a reproductive exposure problem.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        If you are searching because conception stalled, the most useful clue is
        not one symptom. It is the combination of timing, exposure history, and
        reproductive pattern. That is the signal a basic wellness article will
        miss and a good diagnostics workup should capture.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Why the top-ranking pages miss the real angle
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The current leaders for this keyword are solid but broad. NIEHS and EPA
        explain that PFAS can reduce fertility or disrupt hormones. ASRM adds a
        better reproductive lens. Mount Sinai gives the strongest headline
        study. The gap is not information. The gap is interpretation.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Most top pages do not answer the questions patients actually ask: Which
        exposure sources matter most? Which fertility outcomes move first?
        Should both partners be considered? Does a blood test help, or does it
        only create more noise? Those are the questions that turn search intent
        into action.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Proxima can own that middle ground. The site can take the research,
        translate it into a clear fertility story, and then point readers toward
        the next sensible step instead of leaving them with a generic warning.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What should you do if this sounds like your story?
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Start with exposure reduction. EPA lists contaminated drinking water,
        certain foods, dust, air, and PFAS-containing products as common
        pathways (EPA, 2026). If your home uses a private well, if you live near
        a known contamination site, or if you work around firefighting foam,
        industrial chemicals, or manufacturing, your exposure history deserves
        real attention.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Then think about measurement. That is an inference, but it follows the
        evidence: if PFAS build up over time, affect mixtures, and show up in
        reproductive tissues, then a baseline exposure test can give you a more
        honest starting point than guesswork alone (ASRM, 2026; Mount Sinai,
        2023; Huang et al., 2024). Testing will not answer every fertility
        question. It can still tell you whether PFAS belong on the list.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        A good fertility workup should also look at the mix, not just one
        chemical. The strongest studies keep showing that PFAS act as mixtures,
        and different compounds contribute differently to the result. PFOA,
        PFOS, PFNA, and perfluorodecanoic acid do not carry the exact same
        weight in every dataset, which means a narrow single-marker mindset can
        miss the bigger exposure picture (Mount Sinai, 2023; HERO EPA, 2023;
        Huang et al., 2024).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        If you want to see whether your exposure picture lines up with your
        fertility concerns, start with <Link href="/diagnostics" className="text-accent underline">diagnostics</Link> and then read the
        underlying <Link href="/science" className="text-accent underline">science</Link>. If you want a practical
        next step, that is the one.
      </p>
    </>
  );
}
