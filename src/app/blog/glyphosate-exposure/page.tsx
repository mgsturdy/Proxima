import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glyphosate Exposure: What's in Your Food?",
  description:
    "81% of Americans have glyphosate in their urine. Learn where glyphosate exposure comes from, its health effects, and how to reduce your risk.",
};

export default function GlyphosateExposurePage() {
  return (
    <>
      <p className="font-mono text-xs text-tertiary uppercase tracking-wider">
        Published by Proxima Health &middot; March 5, 2026
      </p>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 font-display mt-4">
        Glyphosate Exposure: It&rsquo;s in Your Cereal, Your Bread, and Your Body
      </h1>

      <p className="text-base leading-relaxed mb-4 font-sans">
        A 2022 CDC study found that 81% of Americans have detectable levels of glyphosate in their urine. That means 4 out of every 5 people tested are carrying the world&rsquo;s most widely used herbicide inside their bodies. If you eat food, you are almost certainly exposed.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Glyphosate is the active ingredient in Roundup. It was designed to kill weeds. Today it shows up in cereal, bread, oats, crackers, hummus, wine, and tap water. The question is no longer whether you are exposed. The question is how much, and what it&rsquo;s doing to your health.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        What Is Glyphosate?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Glyphosate is a broad-spectrum herbicide patented by Monsanto in 1974. It kills plants by blocking an enzyme called EPSP synthase, which plants need to make essential amino acids. Humans do not have this enzyme, which is why regulators initially considered it safe.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        But glyphosate does not just affect plant cells. It disrupts the gut microbiome, which relies on the same enzyme pathway. It chelates minerals like manganese, zinc, and iron, making them less available to your body. And it may interfere with your endocrine system at very low doses.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Since the introduction of Roundup Ready genetically modified crops in 1996, glyphosate use in the U.S. has increased roughly 15-fold. More than 300 million pounds are applied to American farmland every year.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Where Glyphosate in Food Comes From
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        There are two main ways glyphosate ends up in your food. The first is through Roundup Ready crops. Soybeans, corn, canola, cotton, and sugar beets have been genetically engineered to survive glyphosate application. The herbicide is sprayed directly on these crops throughout the growing season.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The second route is a practice called desiccation. Farmers spray glyphosate on wheat, oats, barley, and other grains right before harvest to dry them out and speed up harvesting. This means the chemical is applied just days before these grains are collected and processed into food.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Independent lab testing has found Roundup in food products Americans eat every day. Oat-based cereals and granola bars consistently test positive. So do many breads, crackers, and pasta products. Even some organic products show trace amounts, likely from spray drift or contaminated water.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Glyphosate also shows up in drinking water. It is the most commonly detected pesticide in U.S. waterways. Municipal water treatment reduces levels, but does not eliminate them entirely.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Glyphosate Health Effects: What the Research Shows
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The health effects of glyphosate exposure are a subject of active research and growing concern. Here is what scientists have found so far.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Gut microbiome disruption.</strong> Glyphosate targets the shikimate pathway, which is present in gut bacteria. Animal studies show it reduces beneficial bacteria like Lactobacillus and Bifidobacterium while allowing harmful bacteria to thrive. A disrupted microbiome is linked to inflammation, immune dysfunction, and metabolic problems.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Endocrine disruption.</strong> Multiple studies suggest glyphosate acts as an endocrine disruptor at concentrations well below regulatory limits. Research published in <em>Chemosphere</em> found it can interfere with estrogen and androgen receptors. This is particularly concerning for children and pregnant women.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Cancer classification.</strong> In 2015, the International Agency for Research on Cancer (IARC), part of the World Health Organization, classified glyphosate as &ldquo;probably carcinogenic to humans.&rdquo; This assessment was based on evidence linking it to non-Hodgkin lymphoma in agricultural workers. Bayer (which acquired Monsanto) has paid over $10 billion to settle Roundup cancer lawsuits.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Kidney and liver stress.</strong> Animal studies show that chronic low-dose glyphosate exposure can cause changes in kidney and liver tissue. A 2017 study in <em>Scientific Reports</em> found that rats exposed to very low levels of Roundup over two years developed signs of non-alcoholic fatty liver disease.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Mineral chelation.</strong> Glyphosate binds to essential minerals including manganese, cobalt, iron, and zinc. This may reduce your body&rsquo;s ability to absorb these nutrients from food, contributing to deficiencies even in people with otherwise healthy diets.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The full picture of glyphosate health effects is still emerging. But the pattern across multiple studies points to a chemical that interacts with human biology in ways that were not anticipated when it was first approved. To understand how environmental toxins like glyphosate affect human biology, visit our{" "}
        <Link href="/science" className="underline text-accent hover:text-accent/80">
          science page
        </Link>.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Who Is Most at Risk?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Everyone eating a standard American diet has some level of glyphosate exposure. But certain groups face higher risk.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Children</strong> are more vulnerable because they eat more food relative to their body weight. Their developing organs and nervous systems are also more sensitive to chemical disruption. Oat-based cereals and snack bars, common in children&rsquo;s diets, are among the most contaminated products.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Pregnant women</strong> face additional concern. Glyphosate has been detected in breast milk and umbilical cord blood, meaning exposure begins before birth. Animal studies show potential effects on fetal development, though human data is still limited.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Agricultural workers</strong> and people living near farms have the highest exposure levels. They inhale glyphosate droplets during and after spraying, and the chemical can be tracked indoors on clothing and shoes.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>People with gut health issues</strong> may be particularly susceptible. If your microbiome is already compromised, the additional stress from glyphosate could worsen symptoms related to digestion, immunity, and inflammation.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        How to Reduce Your Glyphosate Exposure
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        You cannot eliminate glyphosate exposure entirely. It is too pervasive in the food supply and environment. But you can take meaningful steps to reduce it.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Choose organic when possible.</strong> Organic farming standards prohibit glyphosate use. While trace contamination can occur from neighboring farms, organic products consistently show far lower levels. Prioritize organic oats, wheat, and soy products.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Filter your water.</strong> Activated carbon filters and reverse osmosis systems can remove glyphosate from drinking water. Standard pitcher filters are less effective, but better than nothing.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Diversify your grains.</strong> If you eat oatmeal every morning, you are getting a daily dose of glyphosate. Rotating between rice, quinoa, millet, and buckwheat spreads out your exposure across different grains with different contamination profiles.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Support your gut.</strong> Fermented foods, prebiotic fiber, and a diverse plant-based diet help maintain a resilient microbiome that can better withstand environmental stressors.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Get tested.</strong> You cannot manage what you cannot measure. Glyphosate testing through urine analysis can tell you your current exposure level and help you track whether your dietary changes are working. Learn more about{" "}
        <Link href="/diagnostics" className="underline text-accent hover:text-accent/80">
          environmental toxin testing
        </Link>{" "}
        and what it can reveal.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Why Testing Matters
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Most people have no idea what their glyphosate levels are. Standard blood work does not test for it. Your doctor probably has not mentioned it. But knowing your baseline is the first step toward reducing your body burden.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        At Proxima Health, we believe that understanding your toxic exposure is as fundamental as knowing your cholesterol or blood sugar. Our{" "}
        <Link href="/diagnostics" className="underline text-accent hover:text-accent/80">
          diagnostic panels
        </Link>{" "}
        measure pesticide levels, including glyphosate, alongside other environmental toxins that accumulate in the body over time.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        With 81% of Americans carrying detectable glyphosate, this is not a niche concern. It is a mainstream health issue hiding in plain sight.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Frequently Asked Questions
      </h2>

      <h3 className="font-bold text-lg mt-6 mb-2 font-display">
        How does glyphosate get into food?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Glyphosate enters the food supply through two main routes. It is sprayed on Roundup Ready GMO crops throughout the growing season. It is also sprayed on conventional wheat, oats, and barley just before harvest to dry the crops out. This pre-harvest application, called desiccation, is why grain-based products often contain the highest residues.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2 font-display">
        Is glyphosate in organic food?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Organic standards prohibit the use of glyphosate. However, trace amounts can appear in organic products due to spray drift from nearby conventional farms, contaminated irrigation water, or shared processing equipment. These levels are typically far lower than what is found in conventional products.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2 font-display">
        Can you test for glyphosate in your body?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Yes. Glyphosate testing is done through urine analysis. This measures your recent exposure levels and provides a concrete number you can track over time. It is not part of standard medical panels, which is why most people have never been tested.{" "}
        <Link href="/diagnostics" className="underline text-accent hover:text-accent/80">
          Learn about our testing approach
        </Link>.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2 font-display">
        What foods have the most glyphosate?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Oat-based products consistently test highest, including oatmeal, granola, and oat-based cereals. Wheat products like bread, crackers, and pasta also show significant levels. Soy-based products, chickpeas (used in hummus), and lentils are other common sources. Non-organic versions of these foods carry the greatest risk.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2 font-display">
        Does washing produce remove glyphosate?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Washing helps reduce surface residues on fruits and vegetables. However, glyphosate is systemic, meaning it is absorbed into the plant tissue itself, not just sitting on the surface. For crops like grains and legumes that are sprayed directly, washing has limited effect. Choosing organic is a more reliable strategy.
      </p>

      {/* CTA */}
      <div className="mt-16 p-8 rounded-2xl bg-surface border border-default text-center">
        <h2 className="text-2xl font-bold mb-4 font-display">
          Find Out What&rsquo;s in Your Body
        </h2>
        <p className="text-base leading-relaxed mb-6 font-sans max-w-xl mx-auto">
          81% of Americans have detectable glyphosate. Do you know your level? Take our free toxin exposure assessment to understand your risk and get personalized recommendations.
        </p>
        <Link
          href="/waitlist"
          className="inline-block px-8 py-3 bg-accent text-white font-bold rounded-full hover:bg-accent/90 transition-colors"
        >
          Take the Free Assessment
        </Link>
      </div>
    </>
  );
}
