import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Microplastics in Blood: What the Research Shows",
  description:
    "80% of Americans have microplastics in blood. Learn what microplastics health effects mean for you and how to reduce your exposure.",
};

export default function MicroplasticsInBloodPage() {
  return (
    <>
      <p className="font-mono text-xs text-tertiary uppercase tracking-wider mb-4">
        Published by Proxima Health | March 25, 2026
      </p>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 font-display">
        Microplastics in Blood: What We Know, What We Don&apos;t, and What You
        Can Do
      </h1>

      <p className="text-base leading-relaxed mb-4 font-sans">
        You&apos;ve probably seen the headlines. Microplastics in human blood.
        Plastic in your brain. Tiny fragments of polymers showing up in places
        they have no business being. The research is real. The question is what
        it means for your health, and whether you can do anything about it.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Here&apos;s what the science actually says.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Yes, There Are Microplastics in Your Blood
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        In 2022, researchers at Vrije Universiteit Amsterdam published a
        landmark study. They found microplastics in 77% of blood samples from
        healthy volunteers. Since then, the numbers have only gone up. Current
        estimates suggest that{" "}
        <strong>
          80% of Americans have detectable microplastics in their bloodstream
        </strong>
        .
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        These aren&apos;t visible chunks of plastic. They&apos;re particles
        smaller than 5 millimeters, often microscopic. The most common types
        found in blood are PET (the plastic in water bottles), polystyrene (foam
        containers), and polyethylene (plastic bags and packaging).
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        They enter your body through food, water, and air. Every week, you
        ingest roughly a credit card&apos;s worth of plastic. That estimate
        comes from a 2019 WWF study and has been supported by subsequent
        research. Once inside you, these particles are small enough to cross
        from your gut into your bloodstream.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Microplastics Are Reaching Your Brain
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The blood findings were alarming enough. Then came the brain data.
        Research published in 2024 and 2025 found that{" "}
        <strong>
          plastic accumulation in the human brain increased 50% in the last 8
          years
        </strong>
        . The particles are crossing the blood-brain barrier, a filter that
        blocks most foreign substances.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Scientists also found microplastics in the placenta, in lung tissue, in
        liver samples, and in arterial plaque. A 2024 study in the New England
        Journal of Medicine linked microplastics in carotid artery plaque to a
        higher risk of heart attack and stroke. The particles were associated
        with a 4.5x increase in cardiovascular events.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        This is no longer a theoretical concern. Microplastics are inside us,
        and the{" "}
        <Link
          href="/science"
          className="text-accent underline hover:text-accent/80"
        >
          growing body of scientific evidence
        </Link>{" "}
        points to real health consequences.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Microplastics Health Effects: What the Research Shows
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The honest answer is that we&apos;re still learning. But the early
        evidence is concerning. Here are the microplastics health effects that
        researchers are investigating:
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Inflammation.</strong> Microplastics trigger inflammatory
        responses in cells and tissues. Chronic low-grade inflammation is linked
        to heart disease, diabetes, autoimmune conditions, and cancer. Multiple
        animal and in-vitro studies show that plastic particles activate
        inflammatory pathways.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Endocrine disruption.</strong> Many plastics contain or leach
        chemicals like BPA, phthalates, and PFAS. These are known endocrine
        disruptors. They mimic or block hormones in your body. Effects include
        reduced fertility, thyroid dysfunction, and developmental problems in
        children.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Cardiovascular risk.</strong> The New England Journal of Medicine
        study mentioned above is one of the strongest links. Patients with
        microplastics in their arterial plaque had significantly worse outcomes
        after surgery. The mechanism likely involves inflammation and oxidative
        stress in blood vessel walls.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Gut health.</strong> Your gastrointestinal tract is the first
        point of contact for ingested microplastics. Studies show they can
        disrupt the gut microbiome, damage the intestinal lining, and increase
        permeability, sometimes called &quot;leaky gut.&quot;
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Neurological concerns.</strong> The brain accumulation data is
        newer, and we don&apos;t yet have clear evidence linking brain
        microplastics to specific diseases. But researchers are actively studying
        connections to neuroinflammation, cognitive decline, and
        neurodegenerative conditions.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Who Is Most at Risk?
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Everyone is exposed. But some people accumulate more plastic than
        others. Risk factors include:
      </p>

      <ul className="list-disc pl-6 mb-4 space-y-2 text-base leading-relaxed font-sans">
        <li>
          Drinking primarily from plastic bottles (especially when heated or
          left in the sun)
        </li>
        <li>Frequent consumption of highly processed, plastic-packaged food</li>
        <li>
          Occupational exposure in manufacturing, waste management, or textile
          industries
        </li>
        <li>Living near high-traffic roads (tire wear is a major source of microplastics)</li>
        <li>
          Regular use of synthetic clothing, which sheds microfibers during
          washing
        </li>
      </ul>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Infants and young children may face higher exposure relative to their
        body weight. A 2021 study found that baby bottles release millions of
        microplastic particles per liter when formula is prepared with hot water.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        How to Remove Microplastics From Your Body
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Let&apos;s be direct: there is currently no proven medical treatment that
        removes microplastics from your body. Anyone selling a &quot;plastic
        detox&quot; supplement is getting ahead of the science. Your body does
        have natural clearance mechanisms, primarily through the liver, kidneys,
        and immune system, but we don&apos;t fully understand how efficient they
        are at eliminating these particles.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        What you <em>can</em> do is reduce your ongoing exposure. Think of it
        like turning off the faucet before mopping the floor. Here are
        evidence-backed steps:
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Switch to glass or stainless steel.</strong> Stop drinking from
        plastic bottles. Use glass or steel containers for water and food
        storage. Never microwave food in plastic containers.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Filter your water.</strong> Reverse osmosis and activated carbon
        filters remove most microplastics from tap water. Standard pitcher
        filters help but are less effective.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Eat fresh, whole foods.</strong> Processed foods wrapped in
        plastic have higher microplastic content. Cooking at home with fresh
        ingredients reduces exposure.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Ventilate your home.</strong> Indoor air contains microplastic
        particles from synthetic carpets, furniture, and textiles. Opening
        windows and using HEPA air purifiers reduces airborne plastic
        particles.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Wash synthetic clothes carefully.</strong> Use a microfiber
        catching laundry bag or filter. Wash synthetic fabrics less frequently
        and on cooler settings to reduce fiber shedding.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        <strong>Support your body&apos;s natural detox systems.</strong> This
        isn&apos;t about juice cleanses. It&apos;s about the basics: adequate
        hydration, fiber-rich diet, regular exercise, and quality sleep. These
        support liver function and immune health, which are your body&apos;s
        primary tools for handling foreign particles.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Why Testing Matters
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        You can&apos;t manage what you can&apos;t measure. Right now, most
        people have no idea what&apos;s circulating in their blood. Standard
        blood tests don&apos;t look for environmental toxins, microplastics, or
        the chemicals that leach from them.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        That&apos;s the problem Proxima Health is working to solve. Our{" "}
        <Link
          href="/diagnostics"
          className="text-accent underline hover:text-accent/80"
        >
          diagnostic platform
        </Link>{" "}
        is designed to detect environmental toxins in your blood, including
        markers associated with plastic exposure. Knowing your baseline gives
        you the information you need to take targeted action and track whether
        your changes are working.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The science is moving fast. Between 2024 and 2026, more studies on
        microplastics in human blood have been published than in the entire
        previous decade combined. We&apos;re building the tools to help you keep
        up and take control of your exposure.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        The Bottom Line
      </h2>

      <p className="text-base leading-relaxed mb-4 font-sans">
        Microplastics are in your blood. Probably in your brain. The health
        effects are still being studied, but the early evidence points to
        inflammation, cardiovascular risk, and endocrine disruption. You
        can&apos;t remove what&apos;s already there, but you can significantly
        reduce new exposure through straightforward lifestyle changes.
      </p>

      <p className="text-base leading-relaxed mb-4 font-sans">
        The most important step? Know where you stand.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4 font-display">
        Frequently Asked Questions
      </h2>

      <h3 className="font-bold text-lg mt-6 mb-2">
        How do microplastics get into your blood?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Microplastics enter your body through food, water, and air. Once
        ingested or inhaled, particles smaller than 10 micrometers can cross the
        intestinal wall or lung tissue into your bloodstream. From there, they
        circulate throughout your body and can accumulate in organs including the
        liver, kidneys, and brain.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Can you test for microplastics in your blood?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Research labs can detect microplastics in blood using techniques like
        pyrolysis-gas chromatography mass spectrometry. Clinical testing for
        individuals is still emerging. Proxima Health is developing accessible{" "}
        <Link
          href="/diagnostics"
          className="text-accent underline hover:text-accent/80"
        >
          diagnostic tools
        </Link>{" "}
        that screen for environmental toxins, including markers related to
        plastic exposure.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        Are microplastics in blood dangerous?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The full picture is still developing, but studies link microplastics to
        increased inflammation, cardiovascular risk, endocrine disruption, and
        gut damage. A 2024 study found that people with microplastics in their
        arterial plaque had 4.5 times the risk of heart attack or stroke. The
        research is strong enough that leading health organizations are calling
        for more study and precautionary action.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        How can I reduce microplastics in my body?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        Focus on reducing new exposure. Switch from plastic to glass or steel
        containers. Filter your drinking water with reverse osmosis or activated
        carbon. Eat whole foods instead of plastic-packaged processed foods.
        Ventilate your home and use HEPA filters. There is no proven supplement
        or treatment that removes existing microplastics from your body.
      </p>

      <h3 className="font-bold text-lg mt-6 mb-2">
        What types of microplastics are found in human blood?
      </h3>
      <p className="text-base leading-relaxed mb-4 font-sans">
        The most commonly detected plastics in human blood are PET
        (polyethylene terephthalate), polystyrene, and polyethylene. These come
        from everyday sources: water bottles, food packaging, foam containers,
        and plastic bags. Researchers have also found polypropylene and
        polymethyl methacrylate in smaller quantities.
      </p>

      {/* CTA */}
      <div className="mt-16 p-8 rounded-2xl bg-surface border border-primary text-center">
        <h2 className="text-2xl font-bold mb-4 font-display">
          Find Out What&apos;s in Your Blood
        </h2>
        <p className="text-base leading-relaxed mb-6 font-sans max-w-xl mx-auto">
          Proxima Health is building the first accessible diagnostic platform for
          environmental toxins. Take our free toxin exposure assessment to
          understand your risk.
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
