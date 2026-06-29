import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PFAS Blood Test: What It Measures & Who Needs One",
  description:
    "Learn what a PFAS blood test measures, who should get tested for forever chemicals, and what your results mean. 97% of Americans have detectable PFAS.",
};

export default function PFASBloodTestPage() {
  return (
    <>
      <p className="font-mono text-xs text-tertiary uppercase tracking-wider mb-4">
        Published by Proxima Health | March 28, 2026
      </p>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 font-display">
        PFAS Blood Test: What It Measures, Who Needs One, and What Results Mean
      </h1>

      <p className="text-base leading-relaxed mb-4 font-sans text-secondary">
        You have probably heard that PFAS are everywhere. In your water, your
        cookware, your food packaging. You may have heard them called "forever
        chemicals" because they do not break down in the environment or in your
        body. What most people do not know is that you can actually measure them
        with a simple blood test.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        A PFAS blood test tells you exactly which forever chemicals are in your
        bloodstream and how much of each one you are carrying. According to
        the CDC&apos;s National Health and Nutrition Examination Survey (NHANES),{" "}
        <strong>97% of Americans have detectable levels of PFAS in their blood</strong>.
        That is nearly everyone. The question is not whether you have been
        exposed. The question is how much.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What Are PFAS and Why Should You Care?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        PFAS stands for per- and polyfluoroalkyl substances. They are a group of
        over 12,000 synthetic chemicals that have been used since the 1940s in
        products like nonstick pans, water-resistant clothing, stain-resistant
        fabrics, and firefighting foam. Their carbon-fluorine bonds are among
        the strongest in chemistry. That is why they persist in the environment
        for decades and accumulate in your body over time.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The health risks are well documented. The EPA, the National Academies of
        Sciences, and peer-reviewed research have linked PFAS exposure to:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-base leading-relaxed">
        <li>Increased cholesterol levels</li>
        <li>Thyroid disease</li>
        <li>Immune system suppression, including reduced vaccine response</li>
        <li>Kidney and testicular cancer</li>
        <li>Reproductive issues including decreased fertility</li>
        <li>Liver damage</li>
        <li>Developmental effects in children</li>
      </ul>

      <p className="text-base leading-relaxed mb-4 font-sans">
        In 2022, the National Academies of Sciences, Engineering, and Medicine
        published a landmark report recommending that clinicians test patients
        with known PFAS exposure and use results to guide medical decisions. That
        was a turning point. PFAS testing moved from research labs into clinical
        care.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What Does a PFAS Blood Test Measure?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        A forever chemicals blood test measures the concentration of specific
        PFAS compounds in your serum (the liquid part of your blood). Most
        clinical panels test for the most common and well-studied compounds:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-base leading-relaxed">
        <li>
          <strong>PFOS (perfluorooctane sulfonic acid)</strong> - The most
          commonly detected PFAS in blood. Historically used in stain
          repellents and firefighting foam.
        </li>
        <li>
          <strong>PFOA (perfluorooctanoic acid)</strong> - Used in nonstick
          coatings like Teflon. Phased out of production in the US but still
          found in most people tested.
        </li>
        <li>
          <strong>PFHxS (perfluorohexane sulfonic acid)</strong> - Common in
          firefighting foam and stain-resistant products.
        </li>
        <li>
          <strong>PFNA (perfluorononanoic acid)</strong> - Found in food
          packaging and industrial processes.
        </li>
        <li>
          <strong>PFDA (perfluorodecanoic acid)</strong> - Associated with
          industrial sources and contaminated water.
        </li>
        <li>
          <strong>MeFOSAA</strong> - A metabolite of older PFAS compounds,
          still detectable in blood years after the parent chemicals were
          banned.
        </li>
      </ul>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Results are reported in nanograms per milliliter (ng/mL). The National
        Academies report established clinical guidance levels: a total PFAS
        level of 2 ng/mL or higher warrants clinical attention, including
        additional blood work for thyroid function, cholesterol, and kidney
        markers. Levels above 20 ng/mL call for more intensive follow-up.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The{" "}
        <Link href="/diagnostics" className="underline font-medium hover:opacity-80">
          Proxima Health Baseline test
        </Link>{" "}
        measures a comprehensive panel of PFAS compounds alongside other
        environmental toxins, giving you a complete picture of your chemical
        body burden, not just one class of contaminants.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Who Should Get a PFAS Blood Test?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Given that 97% of Americans carry detectable PFAS, the short answer
        is: most adults could benefit from testing. But some groups face
        higher-than-average exposure:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-base leading-relaxed">
        <li>
          <strong>People who live or have lived near military bases or
          airports</strong> - AFFF firefighting foam used at these sites is a
          major source of PFAS contamination in groundwater.
        </li>
        <li>
          <strong>Communities with contaminated drinking water</strong> - Hundreds
          of water systems across the US have detected PFAS above EPA advisory
          levels. The EPA set enforceable limits of 4 parts per trillion for
          PFOS and PFOA in April 2024.
        </li>
        <li>
          <strong>Firefighters</strong> - Occupational exposure through AFFF foam
          and protective gear puts firefighters at significantly elevated risk.
        </li>
        <li>
          <strong>Industrial workers</strong> - Those who manufacture or work
          with PFAS-containing products.
        </li>
        <li>
          <strong>Parents and expecting mothers</strong> - PFAS can transfer
          through breast milk and cross the placenta. Knowing your levels before
          or during pregnancy can inform important health decisions.
        </li>
        <li>
          <strong>Anyone with unexplained thyroid issues, elevated cholesterol,
          or immune concerns</strong> - These are hallmark effects of PFAS
          exposure and testing can help identify a root cause.
        </li>
      </ul>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Even if you do not fall into a high-risk group, baseline testing gives
        you a reference point. You cannot manage what you do not measure. And
        with PFAS half-lives ranging from 2 to 8 years in the human body,
        understanding your starting point matters.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        How to Test for PFAS
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Getting a PFAS blood test used to require a doctor who specifically
        knew to order one and a lab equipped to run it. That is changing. Here
        are the current options:
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Through your doctor:</strong> You can ask your primary care
        physician to order a PFAS blood panel. Some labs, including Quest
        Diagnostics, now offer clinical PFAS panels. The challenge is that
        many doctors are still unfamiliar with PFAS testing and may not know
        how to interpret results.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Direct-to-consumer testing:</strong> Companies like Proxima
        Health are making PFAS testing accessible without needing a doctor to
        initiate the process. The{" "}
        <Link href="/diagnostics" className="underline font-medium hover:opacity-80">
          Proxima Health Baseline
        </Link>{" "}
        is a blood test that screens for PFAS along with heavy metals,
        pesticides, and other environmental toxins. One test. One blood draw.
        A full picture.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Research studies:</strong> Some universities and government
        agencies run PFAS testing programs in communities with known
        contamination. These are often free but may have limited availability.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        No special preparation is needed for a PFAS blood test. It is a
        standard blood draw. Results typically take one to three weeks depending
        on the lab.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What Do PFAS Blood Test Results Mean?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Interpreting PFAS results can be confusing because there is no single
        "safe" level. However, the 2022 National Academies report provides the
        most widely referenced clinical framework:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-base leading-relaxed">
        <li>
          <strong>Below 2 ng/mL total PFAS:</strong> Lower exposure. Continue
          monitoring and take steps to reduce future exposure.
        </li>
        <li>
          <strong>2 to 20 ng/mL total PFAS:</strong> Elevated exposure. The
          National Academies recommends thyroid testing, lipid panels, and
          cancer screening based on the specific compounds detected.
        </li>
        <li>
          <strong>Above 20 ng/mL total PFAS:</strong> High exposure. More
          frequent follow-up testing and clinical evaluation is recommended.
        </li>
      </ul>

      <p className="text-base leading-relaxed mb-4 font-sans">
        For context, the median PFOS level in the general US population is
        approximately 4.3 ng/mL, based on NHANES data. People in contaminated
        communities can have levels many times higher.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Your results are most useful when paired with context. That is why the
        Proxima Health Baseline includes guidance on what your levels mean and
        what steps to take. Our{" "}
        <Link href="/science" className="underline font-medium hover:opacity-80">
          science page
        </Link>{" "}
        explains the research behind our testing approach and the biomarkers
        we track.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Can You Lower Your PFAS Levels?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        There is no FDA-approved treatment to remove PFAS from your body. Your
        body does eliminate them, but slowly. PFOS has a half-life of about 5
        years. PFOA is around 3.5 years. That means if you stop all new
        exposure today, it could take a decade or more for your levels to drop
        significantly.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        What you can do is reduce ongoing exposure:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 font-sans text-base leading-relaxed">
        <li>Filter your drinking water with an NSF-certified activated carbon or reverse osmosis system</li>
        <li>Avoid nonstick cookware. Use stainless steel, cast iron, or ceramic</li>
        <li>Choose PFAS-free food packaging when possible</li>
        <li>Check whether your local water supply has been tested for PFAS (the EPA maintains a database)</li>
        <li>Avoid stain-resistant treatments on furniture and clothing</li>
      </ul>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Some early research has explored whether cholestyramine (a
        cholesterol-lowering drug) or blood/plasma donation may accelerate
        PFAS elimination, but these approaches are not yet standard clinical
        recommendations. Testing gives you a baseline so you can track whether
        your reduction strategies are working over time.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Frequently Asked Questions
      </h2>

      <h3 className="font-bold text-lg mt-6 mb-2">
        How much does a PFAS blood test cost?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Costs vary. A standalone PFAS panel through a lab like Quest can run
        $300 to $500 or more and is rarely covered by insurance. The Proxima
        Health Baseline bundles PFAS testing with a full environmental toxin
        panel, offering more value than a single-analyte test. Some community
        health programs offer free testing in areas with known contamination.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Is a PFAS blood test covered by insurance?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Most insurance plans do not currently cover PFAS testing. However,
        advocacy groups and some state legislatures are pushing for coverage,
        particularly in communities with documented PFAS contamination in their
        water supply. If your doctor orders the test based on a clinical
        indication like known contaminated water exposure, your insurer may be
        more likely to cover it.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        How long does it take to get PFAS blood test results?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Most labs return results in one to three weeks. PFAS testing requires
        specialized mass spectrometry equipment, so it takes longer than a
        standard blood panel. Proxima Health provides results with clear
        explanations and next-step recommendations so you are not left
        interpreting raw numbers on your own.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Can I test my children for PFAS?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Yes. The National Academies report specifically recommends PFAS testing
        for children in high-exposure communities. Children can be more
        vulnerable to the health effects of PFAS, including immune suppression
        that may reduce vaccine effectiveness. Talk to your pediatrician about
        testing if you live in an area with known PFAS contamination.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        What is the difference between PFAS testing and a standard blood panel?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        A standard blood panel (CBC, metabolic panel) measures things like blood
        cell counts, cholesterol, and organ function. It does not test for
        environmental chemicals. A PFAS blood test specifically measures the
        concentration of forever chemicals in your blood using liquid
        chromatography-tandem mass spectrometry (LC-MS/MS), a highly sensitive
        analytical method. You need both types of testing for a complete health
        picture.
      </p>

      {/* CTA Section */}
      <div className="mt-16 mb-4 p-8 border border-current/10 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4 font-display">
          Find Out What Is in Your Blood
        </h2>
        <p className="text-base leading-relaxed mb-6 font-sans">
          97% of Americans carry detectable PFAS. A blood test is the only way
          to know your levels. Take our free toxin exposure assessment to
          understand your risk and learn how the Proxima Health Baseline can
          give you answers.
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
