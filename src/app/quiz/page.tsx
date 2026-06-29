"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, ChevronDown, RotateCcw } from "lucide-react";
import Link from "next/link";
import { track } from "@vercel/analytics";
import { getUtmParams } from "@/lib/utm";

const DISCLAIMER =
  "This assessment is for educational purposes only based on statistical risk factors. It is not a medical diagnosis. The 'Toxin Load Score' is an evaluation of potential environmental exposure, not a measurement of current blood levels.";

const QUIZ_QUESTIONS = [
  {
    id: 1,
    category: "Heavy Metals",
    question:
      "How often do you consume large predatory fish (e.g., swordfish, tuna, shark, king mackerel)?",
    whyWeAsk:
      "Larger fish accumulate higher levels of methylmercury over time. Regular consumption is one of the strongest predictors of elevated mercury levels in humans.",
    answers: [
      { text: "0–3 times per month", points: 0 },
      { text: "Weekly", points: 5 },
      { text: "Multiple times per week", points: 15 },
    ],
  },
  {
    id: 2,
    category: "PFAS",
    question: "What is your primary source of drinking water?",
    whyWeAsk:
      'Water can be a source of PFAS ("forever chemicals"), heavy metals such as lead and arsenic, and microplastic particles. Filtration significantly reduces many of these exposures.',
    answers: [
      { text: "Filtered tap water (reverse osmosis or carbon filtration)", points: 0 },
      { text: "Bottled water", points: 5 },
      { text: "Unfiltered tap water", points: 15 },
    ],
  },
  {
    id: 3,
    category: "Microplastics",
    question: "How do you typically store and reheat food?",
    whyWeAsk:
      "Heating food in plastic can increase the migration of certain compounds — including microplastics, phthalates, and bisphenols — into food.",
    answers: [
      { text: "Glass, stainless steel, or ceramic", points: 0 },
      { text: "Plastic containers (no microwave use)", points: 5 },
      { text: "Plastic containers heated in microwave", points: 15 },
    ],
  },
  {
    id: 4,
    category: "PFAS",
    question: "What type of cookware do you primarily use?",
    whyWeAsk:
      "Non-stick cookware may release fluorinated compounds when overheated or degraded.",
    answers: [
      { text: "Cast iron, stainless steel, or ceramic", points: 0 },
      { text: "Non-stick in good condition", points: 5 },
      { text: "Scratched or older non-stick cookware", points: 15 },
    ],
  },
  {
    id: 5,
    category: "Heavy Metals",
    question: "How would you describe the air quality where you live?",
    whyWeAsk:
      "Fine particulate matter (PM2.5) can carry metals and combustion byproducts into the bloodstream via the lungs. Long-term exposure is strongly associated with cardiovascular and respiratory disease.",
    answers: [
      { text: "Rural / low industrial activity", points: 0 },
      { text: "Suburban / moderate urban exposure", points: 5 },
      { text: "Major city / industrial area", points: 15 },
    ],
  },
  {
    id: 6,
    category: "VOCs",
    question:
      "Do you regularly use scented products indoors (candles, air fresheners, personal care products)?",
    whyWeAsk:
      '"Fragrance" can include mixtures of volatile organic compounds (VOCs), phthalates, and other chemicals that may influence respiratory and endocrine health.',
    answers: [
      { text: "No", points: 0 },
      { text: "Yes, but primarily certified low-toxicity brands", points: 0 },
      { text: "Sometimes / unsure", points: 5 },
      { text: "Yes, conventional products regularly", points: 15 },
    ],
  },
  {
    id: 7,
    category: "Microplastics",
    question:
      "How often do you consume food packaged in plastic, cans, or fast-food wrappers?",
    whyWeAsk:
      "Certain food packaging materials can contain PFAS, phthalates, or bisphenols that migrate into food.",
    answers: [
      { text: "Once per week or less", points: 0 },
      { text: "2–4 times per week", points: 5 },
      { text: "5+ times per week", points: 15 },
    ],
  },
  {
    id: 8,
    category: "Pesticides",
    question:
      "How often do you vacuum with a HEPA filter or wet-mop floors?",
    whyWeAsk:
      "Household dust can concentrate flame retardants, pesticides, heavy metals, and other environmental residues, which are then inhaled.",
    answers: [
      { text: "Weekly", points: 0 },
      { text: "Every 2–3 weeks", points: 5 },
      { text: "Monthly or less", points: 15 },
    ],
  },
  {
    id: 9,
    category: "Industrial Chemicals",
    question:
      "Do you work with — or have hobbies involving — solvents, fuels, metals, or industrial materials?",
    whyWeAsk:
      "Occupational and hobby exposures are among the most documented sources of higher-dose chemical exposure.",
    answers: [
      { text: "No exposure", points: 0 },
      { text: "Occasional exposure", points: 5 },
      { text: "Regular exposure", points: 15 },
    ],
  },
  {
    id: 10,
    category: "Pesticides",
    question:
      "How often are you exposed to pesticides in your home, yard, pets, or workplace?",
    whyWeAsk:
      "Pesticides are biologically active compounds designed to affect living organisms. Repeated exposure may influence neurologic and endocrine systems.",
    answers: [
      { text: "Rarely or never", points: 0 },
      { text: "Occasional (seasonal or monthly use)", points: 5 },
      { text: "Regular (weekly or frequent use)", points: 15 },
    ],
  },
];

type ResultTier = {
  headline: string;
  body: (category: string) => string;
  ctaText: string;
};

const RESULTS: Record<"low" | "moderate" | "high", ResultTier> = {
  low: {
    headline: "Your Environmental Defense is Strong.",
    body: (_category: string) =>
      "Your routine minimizes major exposure pathways. However, bio-accumulation happens over decades.",
    ctaText: "Reserve your kit",
  },
  moderate: {
    headline: "Moderate Exposure Detected.",
    body: (category) =>
      `While you make some good choices, your answers indicate likely exposure to ${category}. These toxins have a half-life of years in the body.`,
    ctaText: "Reserve your kit",
  },
  high: {
    headline: "High Potential for Toxin Accumulation.",
    body: (category) =>
      `Your exposure to ${category} is statistically higher than average. Standard detox teas do not remove these compounds. Clinical filtration may be required.`,
    ctaText: "Priority Access: Reserve your kit",
  },
};

function getHighestCategory(selectedAnswers: (number | null)[]): string {
  const categoryScores: Record<string, number> = {};
  const categoryOrder: string[] = [];

  QUIZ_QUESTIONS.forEach((q, i) => {
    const answerIndex = selectedAnswers[i];
    if (answerIndex === null || answerIndex === undefined) return;
    const points = q.answers[answerIndex].points;
    if (!(q.category in categoryScores)) {
      categoryOrder.push(q.category);
    }
    categoryScores[q.category] = (categoryScores[q.category] || 0) + points;
  });

  let highest = categoryOrder[0] || "environmental toxins";
  let highestScore = 0;
  for (const cat of categoryOrder) {
    if (categoryScores[cat] > highestScore) {
      highestScore = categoryScores[cat];
      highest = cat;
    }
  }
  return highest;
}

function getTopContributors(
  selectedAnswers: (number | null)[]
): { question: string; answer: string; points: number }[] {
  const contributions: { question: string; answer: string; points: number }[] = [];

  QUIZ_QUESTIONS.forEach((q, i) => {
    const answerIndex = selectedAnswers[i];
    if (answerIndex === null || answerIndex === undefined) return;
    const answer = q.answers[answerIndex];
    if (answer.points > 0) {
      contributions.push({ question: q.question, answer: answer.text, points: answer.points });
    }
  });

  contributions.sort((a, b) => b.points - a.points);
  return contributions.slice(0, 2);
}

function getTier(score: number): "low" | "moderate" | "high" {
  if (score <= 25) return "low";
  if (score <= 60) return "moderate";
  return "high";
}

function CountUp({ target, duration }: { target: number; duration: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      start = Math.round(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return <>{count}</>;
}

export default function QuizPage() {
  const [step, setStep] = useState<
    "intro" | "questions" | "email" | "calculating" | "results"
  >("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(QUIZ_QUESTIONS.length).fill(null)
  );
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isAdvancing, setIsAdvancing] = useState(false);
  const [direction, setDirection] = useState(1);
  const [showWhyWeAsk, setShowWhyWeAsk] = useState(false);
  const answersContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to top on step/question change so content is visible on mobile
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step, currentQuestion]);

  const totalScore = answers.reduce<number>((sum, answerIndex, i) => {
    if (answerIndex === null) return sum;
    return sum + QUIZ_QUESTIONS[i].answers[answerIndex].points;
  }, 0);

  const highestCategory = getHighestCategory(answers);
  const tier = getTier(totalScore);
  const result = RESULTS[tier];
  const topContributors = getTopContributors(answers);
  const tierLabel = tier === "low" ? "Low" : tier === "moderate" ? "Moderate" : "High";
  const normalizedScore = Math.round((totalScore / 150) * 100);

  const handleAnswer = useCallback(
    (answerIndex: number) => {
      if (isAdvancing) return;
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = answerIndex;
      setAnswers(newAnswers);
      setIsAdvancing(true);
      setShowWhyWeAsk(false);

      const answered = QUIZ_QUESTIONS[currentQuestion];
      track("quiz_question_answered", {
        question_number: currentQuestion + 1,
        question_id: answered.id,
        category: answered.category,
        points: answered.answers[answerIndex].points,
      });

      setTimeout(() => {
        if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
          setDirection(1);
          setCurrentQuestion((prev) => prev + 1);
        } else {
          track("quiz_completed");
          setStep("email");
        }
        setIsAdvancing(false);
      }, 500);
    },
    [isAdvancing, answers, currentQuestion]
  );

  const handleBack = useCallback(() => {
    if (isAdvancing || currentQuestion <= 0) return;
    track("quiz_question_back", { from_question: currentQuestion + 1 });
    setDirection(-1);
    setShowWhyWeAsk(false);
    setCurrentQuestion((prev) => prev - 1);
  }, [isAdvancing, currentQuestion]);

  const handleEmailSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError("Please enter a valid email address");
        return;
      }
      setEmailError("");
      track("quiz_email_submitted", { tier, score: normalizedScore });
      setStep("calculating");

      fetch("/api/quiz-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          // Send the same 0-100 value shown on screen, not the raw 0-150 sum,
          // so the site, Google Sheet, and HubSpot Toxin Load Score all agree.
          score: normalizedScore,
          tier,
          topCategory: highestCategory,
          ...getUtmParams(),
          answers: answers.map((answerIndex, i) => ({
            question: QUIZ_QUESTIONS[i].question,
            category: QUIZ_QUESTIONS[i].category,
            answer:
              answerIndex !== null
                ? QUIZ_QUESTIONS[i].answers[answerIndex].text
                : null,
            points:
              answerIndex !== null
                ? QUIZ_QUESTIONS[i].answers[answerIndex].points
                : 0,
          })),
        }),
      }).catch(() => {});

      setTimeout(() => setStep("results"), 2000);
    },
    [email, normalizedScore, tier, highestCategory, answers]
  );

  const handleSkipEmail = useCallback(() => {
    setEmailError("");
    track("quiz_email_skipped", { tier, score: normalizedScore });
    setStep("calculating");
    setTimeout(() => setStep("results"), 2000);
  }, [tier, normalizedScore]);

  const handleRetake = useCallback(() => {
    setStep("intro");
    setCurrentQuestion(0);
    setAnswers(new Array(QUIZ_QUESTIONS.length).fill(null));
    setEmail("");
    setEmailError("");
    setShowWhyWeAsk(false);
    setDirection(1);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-24 bg-primary text-primary">
      <div className="section-narrow">
        <AnimatePresence mode="wait">
          {step === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-16"
            >
              <div className="w-16 h-1 proxima-gradient mb-6" />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-tertiary mb-4">
                Free Toxin Assessment
              </p>
              <div className="mb-6">
                <div className="flex flex-col items-start -space-y-0.5">
                  <span className="inline-block bg-proxima-black text-proxima-cream px-3 py-0.5 text-2xl md:text-4xl lg:text-5xl font-nb-international leading-none">
                    Estimate your
                  </span>
                  <span className="inline-block bg-proxima-black text-proxima-cream px-3 py-0.5 text-2xl md:text-4xl lg:text-5xl font-nb-international leading-none">
                    toxin exposure
                  </span>
                </div>
              </div>
              <p className="text-secondary max-w-xl leading-relaxed mb-8 font-sans text-sm md:text-base">
                Answer 10 lifestyle questions to receive your personal Toxin
                Load Score. Takes about 2 minutes.
              </p>

              <button
                type="button"
                onClick={() => {
                  track("quiz_started");
                  setStep("questions");
                }}
                className="btn-gradient inline-flex items-center gap-3 mb-12"
              >
                Start Assessment <ArrowRight size={18} />
              </button>

              <p className="text-xs text-tertiary font-mono leading-relaxed max-w-lg">
                {DISCLAIMER}
              </p>
            </motion.div>
          )}

          {step === "questions" && (
            <motion.div
              key={`q-${currentQuestion}`}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.3 }}
              className="py-16"
            >
              {/* Progress */}
              <div className="flex items-center gap-4 mb-8">
                <span
                  className="font-mono text-sm text-tertiary uppercase tracking-wider"
                  aria-live="polite"
                >
                  {currentQuestion + 1} / {QUIZ_QUESTIONS.length}
                </span>
                <div className="flex-1 h-1 bg-border-primary rounded-full overflow-hidden">
                  <div
                    className="h-full proxima-gradient transition-all duration-500"
                    style={{
                      width: `${((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Back button */}
              {currentQuestion > 0 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-tertiary hover:text-primary transition-colors mb-6"
                >
                  <ArrowLeft size={14} /> Back
                </button>
              )}

              {/* Question */}
              <h2 className="mb-4 max-w-2xl font-nb-international text-xl md:text-2xl lg:text-3xl leading-snug">
                {QUIZ_QUESTIONS[currentQuestion].question}
              </h2>

              {/* Why we ask */}
              <button
                type="button"
                onClick={() => {
                  if (!showWhyWeAsk) {
                    track("quiz_why_we_ask_opened", {
                      question_number: currentQuestion + 1,
                      question_id: QUIZ_QUESTIONS[currentQuestion].id,
                    });
                  }
                  setShowWhyWeAsk(!showWhyWeAsk);
                }}
                className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-tertiary hover:text-secondary transition-colors mb-8"
                aria-expanded={showWhyWeAsk}
              >
                Why we ask{" "}
                <ChevronDown
                  size={12}
                  className={`transition-transform ${showWhyWeAsk ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {showWhyWeAsk && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-sm text-tertiary font-sans leading-relaxed mb-8 max-w-xl overflow-hidden"
                  >
                    {QUIZ_QUESTIONS[currentQuestion].whyWeAsk}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Answer options */}
              <div
                ref={answersContainerRef}
                className="space-y-3"
                role="radiogroup"
                aria-label={`Question ${currentQuestion + 1}`}
              >
                {QUIZ_QUESTIONS[currentQuestion].answers.map((answer, i) => {
                  const isSelected = answers[currentQuestion] === i;
                  return (
                    <button
                      key={i}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => handleAnswer(i)}
                      disabled={isAdvancing}
                      className={`w-full text-left p-5 md:p-6 min-h-[56px] border transition-all flex justify-between items-center ${
                        isSelected
                          ? "bg-proxima-black text-proxima-cream border-proxima-black"
                          : "border-border-primary hover:bg-proxima-black hover:text-proxima-cream hover:border-proxima-black"
                      } ${isAdvancing ? "pointer-events-none" : ""}`}
                    >
                      <span className="font-sans text-sm md:text-base">
                        {answer.text}
                      </span>
                      <ArrowRight
                        size={16}
                        className={`flex-shrink-0 ml-4 transition-opacity ${isSelected ? "opacity-100" : "opacity-0"}`}
                      />
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {step === "email" && (
            <motion.div
              key="email"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-16"
            >
              <div className="max-w-md mx-auto text-center">
                <div className="w-16 h-1 proxima-gradient mb-6 mx-auto" />
                <div className="mb-6">
                  <div className="flex flex-col items-center -space-y-0.5">
                    <span className="inline-block bg-proxima-black text-proxima-cream px-3 py-0.5 text-xl md:text-2xl lg:text-3xl font-nb-international leading-none">
                      Can we contact you
                    </span>
                    <span className="inline-block bg-proxima-black text-proxima-cream px-3 py-0.5 text-xl md:text-2xl lg:text-3xl font-nb-international leading-none">
                      about your results?
                    </span>
                  </div>
                </div>
                <p className="text-secondary font-sans text-sm mb-8">
                  Leave your email and we&apos;ll follow up with personalized insights.
                </p>

                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError("");
                      }}
                      placeholder="Your email address"
                      autoComplete="email"
                      inputMode="email"
                      autoCapitalize="off"
                      autoCorrect="off"
                      spellCheck={false}
                      className="w-full border border-border-primary px-4 py-4 bg-primary text-primary font-sans focus:outline-none focus:border-proxima-red text-center"
                      aria-label="Email address"
                    />
                    {emailError && (
                      <p className="text-proxima-red text-xs font-mono mt-2">
                        {emailError}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={!email.trim()}
                    className={`btn-gradient inline-flex items-center gap-3 w-full justify-center ${
                      !email.trim() ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    Calculate My Results <ArrowRight size={18} />
                  </button>
                </form>

                <button
                  type="button"
                  onClick={handleSkipEmail}
                  className="mt-4 font-sans text-xs text-proxima-black/40 hover:text-proxima-black/70 transition-colors underline underline-offset-4"
                >
                  No thanks, just show my results
                </button>
              </div>
            </motion.div>
          )}

          {step === "calculating" && (
            <motion.div
              key="calculating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-32 text-center"
            >
              <div className="flex justify-center gap-2 mb-8">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 rounded-full bg-proxima-red"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
              <p className="font-nb-international text-xl md:text-2xl text-primary">
                Analyzing your responses...
              </p>
            </motion.div>
          )}

          {step === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-16"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-tertiary mb-4">
                Assessment Complete
              </p>

              {/* Score display */}
              <div className="mb-2">
                <motion.span
                  className="font-robit text-6xl md:text-8xl text-primary leading-none inline-block"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <CountUp target={normalizedScore} duration={1.2} />
                </motion.span>
                <motion.span
                  className="font-robit text-3xl md:text-5xl text-tertiary ml-1 inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.4 }}
                >
                  / 100
                </motion.span>
              </div>

              {/* Tier label */}
              <motion.p
                className="font-mono text-sm uppercase tracking-wider text-proxima-red mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
              >
                {tierLabel} Exposure Risk
              </motion.p>

              {/* Score bar with range labels */}
              <div className="mb-2">
                <div className="w-full h-3 bg-border-primary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full proxima-gradient"
                    initial={{ width: 0 }}
                    animate={{
                      width: `${Math.min(normalizedScore, 100)}%`,
                    }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-tertiary">Low</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-tertiary">Moderate</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-tertiary">High</span>
              </div>
              <p className="font-mono text-xs text-tertiary mb-8">Lower scores indicate lower exposure risk.</p>

              {/* Result headline */}
              <div className="mb-6">
                <div className="flex flex-col items-start -space-y-0.5">
                  {result.headline
                    .split(/(?<=\.)\s*/)
                    .filter(Boolean)
                    .map((line, i) => (
                      <span
                        key={i}
                        className="inline-block bg-proxima-black text-proxima-cream px-3 py-0.5 text-lg md:text-2xl lg:text-3xl font-nb-international leading-none"
                      >
                        {line.trim()}
                      </span>
                    ))}
                </div>
              </div>

              {/* Result body */}
              <p className="text-secondary font-sans text-sm md:text-base leading-relaxed mb-6 max-w-xl">
                {result.body(highestCategory)}
              </p>

              {/* Top contributing factors */}
              {topContributors.length > 0 && (
                <div className="mb-8">
                  <p className="font-mono text-xs uppercase tracking-wider text-tertiary mb-3">Top contributing factors</p>
                  <div className="flex flex-col gap-2">
                    {topContributors.map((factor, i) => (
                      <div key={i} className="bg-proxima-black/5 px-3 py-2">
                        <p className="font-sans text-xs text-proxima-black/60 mb-0.5">{factor.question}</p>
                        <p className="font-mono text-xs text-proxima-black/80">{factor.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Test kit explainer */}
              <p className="text-secondary font-sans text-sm leading-relaxed mb-6 max-w-xl">
                For a more detailed assessment, get our at-home test kit that measures your actual toxin levels. It ships to your door and results are reviewed by clinicians.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/diagnostics"
                  className="btn-gradient inline-flex items-center gap-2 justify-center"
                >
                  Get Early Access to At-Home Test Kits <ArrowRight size={18} />
                </Link>
                <button
                  type="button"
                  onClick={handleRetake}
                  className="btn-outline inline-flex items-center gap-2 justify-center"
                >
                  <RotateCcw size={16} /> Retake Assessment
                </button>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-tertiary font-mono leading-relaxed max-w-lg mt-12">
                {DISCLAIMER}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
