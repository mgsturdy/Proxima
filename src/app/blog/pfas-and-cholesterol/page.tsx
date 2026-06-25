import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PFAS and Cholesterol: What Your Lipid Panel Misses",
  description:
    "PFAS and cholesterol are linked in newer studies. Learn what the research shows, what top pages miss, and when testing helps.",
};

export default function PFASAndCholesterolPage() {
  return (
    <>
      <p className="font-mono text-xs text-tertiary uppercase tracking-wider mb-4">
        Published by Proxima Health | June 25, 2026
      </p>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 font-display">
        PFAS and Cholesterol: What Your Lipid Panel Misses
      </h1>

      <p className="text-base leading-relaxed mb-4 font-sans">
        PFAS can nudge cholesterol up in a measurable way: a 2023 meta-analysis of 29 adult studies found that every interquartile-range increase in PFOA tracked with 2.1 mg/dL higher total cholesterol and 1.4 mg/dL higher LDL-C, while PFOS tracked with 2.6 mg/dL higher total cholesterol and 1.9 mg/dL higher LDL-C (Harvard T.H. Chan School of Public Health, 2023).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        That matters because high cholesterol usually gets treated like a diet problem or a genetics problem. Sometimes it is both. Sometimes it is also an exposure problem. If your numbers stay stubborn, PFAS deserve a look, especially if you live near contaminated water, work around industrial chemicals, or have a history of firefighting foam, stain-resistant products, or high dust exposure (CDC/ATSDR, 2025).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The bigger surprise is how common the exposure is. CDC/ATSDR says nearly all people in the United States have measurable PFAS in their blood, while blood levels of PFOS and PFOA dropped by more than 85% and more than 70% between 1999 to 2000 and 2018 to 2019 as production changed (CDC/ATSDR, 2025). The exposure problem did not disappear. It just shifted toward different compounds and different sources.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Why PFAS and cholesterol show up together
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Cholesterol does not travel through the body by itself. The liver packages it into lipoproteins, then moves it through the bloodstream in particles like LDL, HDL, and IDL. PFAS seem to interfere with that transport system rather than simply acting like a generic toxin. That is why the signal keeps showing up in cholesterol, not just in a vague "something is off" pattern (Nature, 2023).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        A 2023 lipoprotein-subfraction study found that PFOS, PFOA, and PFDA were consistently linked to cholesterol in IDL, across all LDL subfractions, and in small HDL particles, while the triglyceride signal stayed weak or close to null (Journal of Exposure Science &amp; Environmental Epidemiology, 2023). That is a more interesting pattern than a simple bump in total cholesterol. It suggests PFAS shift the way the body handles atherogenic particles.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        A 2026 mouse study pushed that idea further. In hyperlipidemic LDLr-/- mice, PFAS mixture exposure raised total circulating cholesterol by 10%, lifted the IDL fraction by 25%, and increased the densest LDL subfraction, LDL7, by 206% (Toxicology and Applied Pharmacology, 2026). That is not a human screening result, but it helps explain why PFAS exposure can look like a cardiovascular risk signal instead of a classic poisoning event.
      </p>
      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What the recent human studies actually found
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The strongest human evidence still points in the same direction. In a 2023 meta-analysis from Harvard T.H. Chan School of Public Health, researchers pooled 29 publications and found that every IQR increase in PFOA corresponded to a 2.1 mg/dL increase in total cholesterol, a 1.3 mg/dL increase in triglycerides, and a 1.4 mg/dL increase in LDL-C. PFOS tracked with a 2.6 mg/dL increase in total cholesterol and a 1.9 mg/dL increase in LDL-C (Harvard T.H. Chan School of Public Health, 2023).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        A second human study, the GenX Exposure Study from North Carolina State University, looked at 326 people ages 6 to 86 in Wilmington, North Carolina. Eight PFAS appeared in more than half the participants. For PFOS and PFNA, each quartile increase linked to about 4.9 to 5.3 mg/dL higher non-HDL cholesterol and about 5.7 to 5.9 mg/dL higher total cholesterol. The effect got stronger with age and showed up most clearly in people 63 and older (NC State, 2022).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        That age pattern matters. It suggests PFAS exposure can stack with the rest of aging biology instead of acting in isolation. The same study also found that the newer fluoroether compounds did not behave exactly like PFOS and PFNA, which reinforces the point that "PFAS" is not one thing, and older and newer compounds may not produce the same lipid profile (NC State, 2022).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        A 2023 long-term cohort study from the Study of Women’s Health Across the Nation followed lipid trajectories for an average of 14.8 years. Researchers identified low, middle, and high trajectories for total, LDL, and HDL cholesterol, plus low and high triglyceride trajectories. PFAS mixtures showed positive associations with the high total cholesterol trajectory and the high LDL trajectory, with odds ratios of 1.69 and 1.79, respectively (Environmental Health Perspectives, 2023).
      </p>
      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Why persistence makes PFAS harder to ignore
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        PFAS stay in the body for years, which means the exposure window is long and the signal can outlast the source. A 2023 review and meta-analysis estimated mean half-lives of 1.48 to 5.1 years for PFOA, 3.4 to 5.7 years for total PFOS, and 2.84 to 8.5 years for PFHxS (Elsevier, 2023).
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        That helps explain why people often miss the connection. They look at cholesterol and think about what they ate this week. PFAS ask a different question. What did you drink, breathe, or handle over the last several years? If the answer includes contaminated water, industrial work, firefighting, or repeated contact with water-repellent materials, the exposure history suddenly looks much more relevant.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        CDC/ATSDR also notes that PFAS blood tests reflect body burden, not a diagnosis. That limitation makes sense, because a blood level cannot tell you whether PFAS caused your cholesterol pattern on its own. But it can tell you whether the exposure exists and whether it still sits in your system (CDC/ATSDR, 2025).
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What top pages cover, and what they miss
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The current search results for PFAS and cholesterol mostly surface institutional summaries and abstracts. You see Harvard’s meta-analysis explainer, NC State’s GenX summary, EPA’s broad PFAS overview, and a few journal papers that confirm the association. They do a good job proving the signal exists. They do a weaker job answering the question a real person asks next.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Most of those pages stop at "PFAS are linked to higher cholesterol." They rarely explain why lipoprotein subfractions matter, why age changes the signal, when a lipid panel should trigger PFAS testing, or how to tell whether a stubborn cholesterol result looks exposure-driven instead of purely diet-driven. That gap is the opportunity.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Proxima can own the practical middle ground. We can take the research and turn it into a decision path: identify the likely exposure source, interpret the cholesterol pattern, and decide whether PFAS testing belongs in the workup.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        When cholesterol should make you think about PFAS
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Start with the obvious cases. If you live or work near contaminated water, a military site, an airport, a textile facility, a chemical plant, or a fire station, PFAS belong on the list. So do people who have used a lot of stain-resistant, water-resistant, or grease-resistant products, or who have spent years in dust-heavy indoor environments with treated materials.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Then look at the lab pattern. If total cholesterol, LDL-C, or non-HDL cholesterol keeps drifting up even when diet, exercise, weight change, or medication do not fully explain the shift, PFAS become a plausible contributor. That is a clinical inference, not proof. But the recent studies make it a reasonable one.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The best reason to test is not panic. It is clarity. CDC/ATSDR says blood testing can help when clinicians and patients need to understand exposure history, while the National Academies’ 2022 guidance supports PFAS testing as part of decisions about clinical care and surveillance. In other words, testing has a role when you need to connect a real exposure to a real body burden, not when you want a generic wellness score (CDC/ATSDR, 2025; National Academies, 2022).
      </p>
      <h3 className="text-xl font-bold mt-8 mb-3 font-display">
        What PFAS testing can tell you
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        It can show whether your blood carries measurable PFAS and whether the level fits a known exposure story. That helps you decide whether the next move should focus on water, workplace, product use, or follow-up care. The CDC/ATSDR estimation tool exists for exactly that kind of conversation, especially for people with drinking-water exposure (CDC/ATSDR, 2025).
      </p>
      <h3 className="text-xl font-bold mt-8 mb-3 font-display">
        What it cannot tell you
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        It cannot prove that PFAS caused your cholesterol problem. It cannot replace a clinician’s judgment. And it cannot tell you that every exposure source matters equally. But it can move the conversation from speculation to measurement, which is the whole point.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        The Proxima angle
      </h2>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The article most people need is not "PFAS can raise cholesterol." They already have that headline. They need to know whether the cholesterol result they just got should change how they think about exposure, testing, and next steps. That is where Proxima can be useful.
      </p>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Our angle is simple. PFAS are not just another vague environmental risk. They leave a blood signature, and that signature often shows up in cholesterol transport before it shows up anywhere else. If you want to investigate that signal, start with <Link href="/diagnostics" className="underline">diagnostics</Link>. If you want the underlying evidence on exposure, persistence, and lipid metabolism, read more on our <Link href="/science" className="underline">science</Link> page.
      </p>
    </>
  );
}
