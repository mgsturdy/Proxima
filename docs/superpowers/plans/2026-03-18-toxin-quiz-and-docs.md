# Toxin Load Quiz & Site Documentation — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing 4-question `/waitlist` assessment with a full 10-question Toxin Load Quiz engine, and create developer + site documentation.

**Architecture:** Single-file page component (`src/app/waitlist/page.tsx`) with a 5-screen state machine (intro → questions → email → calculating → results). Quiz data, scoring logic, and results config all live as constants at the top of the file. No new dependencies — uses existing framer-motion, lucide-react, and Tailwind theme classes.

**Tech Stack:** Next.js 15, React 18, TypeScript, Tailwind CSS, framer-motion, lucide-react

**Spec:** `docs/superpowers/specs/2026-03-18-toxin-quiz-and-docs-design.md`

---

## File Structure

| File | Action | Responsibility |
|------|--------|---------------|
| `src/app/waitlist/page.tsx` | Replace | Full Toxin Load Quiz — data, state machine, all 5 screens, scoring |
| `README.md` | Create | Developer setup & project structure documentation |
| `SITE_OVERVIEW.md` | Create | Site content, pages, design system, CTA funnel documentation |

---

## Task 1: Quiz Data Constants

**Files:**
- Modify: `src/app/waitlist/page.tsx` (full replacement — lines 1-272)

- [ ] **Step 1: Write the quiz data constants**

Replace the entire file. Start with imports and the `QUIZ_QUESTIONS` array containing all 10 questions from the technical brief, plus the `RESULTS` config and `DISCLAIMER` constant.

```tsx
"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, ChevronDown, RotateCcw } from "lucide-react";
import Link from "next/link";

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
      {
        text: "Filtered tap water (reverse osmosis or carbon filtration)",
        points: 0,
      },
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
      {
        text: "Yes, but primarily certified low-toxicity brands",
        points: 0,
      },
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
```

- [ ] **Step 2: Verify the file has no syntax errors**

Run: `npx tsc --noEmit src/app/waitlist/page.tsx 2>&1 || true`

This will fail because there's no default export yet — that's expected. Just verify no syntax errors in the constants.

- [ ] **Step 3: Commit**

```bash
git add src/app/waitlist/page.tsx
git commit -m "feat(quiz): add quiz data constants — 10 questions, results tiers, disclaimer"
```

---

## Task 2: Scoring Helper & State Machine

**Files:**
- Modify: `src/app/waitlist/page.tsx` (append after constants)

- [ ] **Step 1: Add the scoring helper function and main component with state**

Append after the `RESULTS` constant, before the end of the file:

```tsx
function getHighestCategory(answers: (number | null)[]): string {
  const categoryScores: Record<string, number> = {};
  const categoryOrder: string[] = [];

  QUIZ_QUESTIONS.forEach((q, i) => {
    const answerIndex = answers[i];
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

function getTier(score: number): "low" | "moderate" | "high" {
  if (score <= 25) return "low";
  if (score <= 60) return "moderate";
  return "high";
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
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = back
  const [showWhyWeAsk, setShowWhyWeAsk] = useState(false);
  const answersContainerRef = useRef<HTMLDivElement>(null);

  // Auto-focus first answer option on question change
  useEffect(() => {
    if (step === "questions" && answersContainerRef.current) {
      const firstButton = answersContainerRef.current.querySelector("button");
      firstButton?.focus();
    }
  }, [step, currentQuestion]);

  const totalScore = answers.reduce((sum, answerIndex, i) => {
    if (answerIndex === null) return sum;
    return sum + QUIZ_QUESTIONS[i].answers[answerIndex].points;
  }, 0);

  const highestCategory = getHighestCategory(answers);
  const tier = getTier(totalScore);
  const result = RESULTS[tier];

  const handleAnswer = useCallback(
    (answerIndex: number) => {
      if (isAdvancing) return; // block rapid taps during 500ms delay
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = answerIndex;
      setAnswers(newAnswers);
      setIsAdvancing(true);
      setShowWhyWeAsk(false);

      const timer = setTimeout(() => {
        if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
          setDirection(1);
          setCurrentQuestion((prev) => prev + 1);
        } else {
          setStep("email");
        }
        setIsAdvancing(false);
      }, 500);
      return () => clearTimeout(timer);
    },
    [isAdvancing, answers, currentQuestion]
  );

  const handleBack = useCallback(() => {
    if (currentQuestion > 0) {
      setDirection(-1);
      setShowWhyWeAsk(false);
      setCurrentQuestion((prev) => prev - 1);
    }
  }, [currentQuestion]);

  const handleEmailSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError("Please enter a valid email address");
        return;
      }
      setEmailError("");
      // TODO: send to CRM, include score and segment
      // TODO: tag high_risk segment in CRM for score 61+
      setStep("calculating");
      setTimeout(() => setStep("results"), 2000);
    },
    [email]
  );

  const handleRetake = useCallback(() => {
    setStep("intro");
    setCurrentQuestion(0);
    setAnswers(new Array(QUIZ_QUESTIONS.length).fill(null));
    setEmail("");
    setEmailError("");
    setShowWhyWeAsk(false);
    setDirection(1);
  }, []);

  // Render screens below (Task 3-6)
  return (
    <div className="min-h-screen pt-24 pb-24 bg-primary text-primary">
      <div className="section-narrow">
        <AnimatePresence mode="wait">
          {/* Screens will be added in Tasks 3-6 */}
        </AnimatePresence>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit 2>&1 | head -20`

Expected: No errors (or only unrelated warnings)

- [ ] **Step 3: Commit**

```bash
git add src/app/waitlist/page.tsx
git commit -m "feat(quiz): add scoring logic, state machine, and event handlers"
```

---

## Task 3: Intro Screen

**Files:**
- Modify: `src/app/waitlist/page.tsx`

- [ ] **Step 1: Add the intro screen inside the AnimatePresence**

Replace the `{/* Screens will be added in Tasks 3-6 */}` comment with the intro screen. All subsequent screens will be added after this block.

```tsx
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
                onClick={() => setStep("questions")}
                className="btn-gradient inline-flex items-center gap-3 mb-12"
              >
                Start Assessment <ArrowRight size={18} />
              </button>

              <p className="text-xs text-tertiary font-mono leading-relaxed max-w-lg">
                {DISCLAIMER}
              </p>
            </motion.div>
          )}
```

- [ ] **Step 2: Verify it renders**

Run: `npm run dev` and navigate to `http://localhost:3000/waitlist`

Expected: Intro screen with gradient bar, black pill headline, body text, CTA button, and disclaimer.

- [ ] **Step 3: Commit**

```bash
git add src/app/waitlist/page.tsx
git commit -m "feat(quiz): add intro screen with headline, CTA, and disclaimer"
```

---

## Task 4: Questions Screen

**Files:**
- Modify: `src/app/waitlist/page.tsx`

- [ ] **Step 1: Add the questions screen after the intro block**

Insert after the closing `)}` of the intro screen:

```tsx
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
                <span className="font-mono text-sm text-tertiary uppercase tracking-wider" aria-live="polite">
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
                onClick={() => setShowWhyWeAsk(!showWhyWeAsk)}
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
```

- [ ] **Step 2: Verify questions flow works**

Run dev server, click "Start Assessment". Verify:
- Progress bar updates
- Questions slide in from right
- Selecting an answer highlights it, then auto-advances after 500ms
- Back button works and slides in from left
- "Why we ask" expands/collapses
- After Q10, advances to email screen (blank for now)

- [ ] **Step 3: Commit**

```bash
git add src/app/waitlist/page.tsx
git commit -m "feat(quiz): add questions screen with progress, back nav, why-we-ask toggle"
```

---

## Task 5: Email Capture & Calculating Screens

**Files:**
- Modify: `src/app/waitlist/page.tsx`

- [ ] **Step 1: Add the email and calculating screens after the questions block**

Insert after the closing `)}` of the questions screen:

```tsx
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
                      Where should we send
                    </span>
                    <span className="inline-block bg-proxima-black text-proxima-cream px-3 py-0.5 text-xl md:text-2xl lg:text-3xl font-nb-international leading-none">
                      your Toxin Analysis?
                    </span>
                  </div>
                </div>
                <p className="text-secondary font-sans text-sm mb-8">
                  Enter your email to calculate and receive your personalized
                  results.
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
                Calculating Your Toxic Load...
              </p>
              <p className="text-tertiary mt-2 font-mono text-xs uppercase tracking-wider">
                Analyzing your responses
              </p>
            </motion.div>
          )}
```

- [ ] **Step 2: Verify email and calculating flow**

Run dev server, complete all 10 questions. Verify:
- Email screen appears with centered form
- Submit disabled when empty (reduced opacity)
- Invalid email shows error message in red mono
- Valid email submission triggers calculating screen
- Pulsing red dots animate
- Auto-advances to results after ~2s (results screen blank for now)

- [ ] **Step 3: Commit**

```bash
git add src/app/waitlist/page.tsx
git commit -m "feat(quiz): add email capture with validation and calculating animation"
```

---

## Task 6: Results Screen

**Files:**
- Modify: `src/app/waitlist/page.tsx`

- [ ] **Step 1: Add the results screen after the calculating block**

Insert after the closing `)}` of the calculating screen:

```tsx
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
              <div className="mb-8">
                <span className="font-robit text-6xl md:text-8xl text-primary leading-none">
                  {totalScore}
                </span>
                <span className="font-mono text-lg text-tertiary ml-1">
                  pts
                </span>
              </div>

              {/* Score bar */}
              <div className="w-full h-2 bg-border-primary rounded-full overflow-hidden mb-8">
                <motion.div
                  className="h-full proxima-gradient"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${Math.min((totalScore / 150) * 100, 100)}%`,
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>

              {/* Result headline */}
              <div className="mb-6">
                <div className="flex flex-col items-start -space-y-0.5">
                  {result.headline.split(/(?<=\.)\s*/).filter(Boolean).map((line, i) => (
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
              <p className="text-secondary font-sans text-sm md:text-base leading-relaxed mb-8 max-w-xl">
                {result.body(highestCategory)}
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/diagnostics"
                  className="btn-gradient inline-flex items-center gap-2 justify-center"
                >
                  {result.ctaText} <ArrowRight size={18} />
                </Link>
                <button
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
```

- [ ] **Step 2: Full end-to-end test**

Run dev server, complete the full quiz flow:

1. Intro → click "Start Assessment"
2. Answer all 10 questions (try different combinations for different tiers)
3. Email capture → enter valid email → submit
4. Calculating animation plays for ~2s
5. Results show with correct tier, score, headline, body text with category, CTA
6. "Retake Assessment" resets everything back to intro
7. Test on mobile viewport (Chrome DevTools → iPhone 14 Pro)

Verify:
- Low risk (answer all lowest): score 0, "Your Environmental Defense is Strong."
- High risk (answer all highest): score 150, "High Potential for Toxin Accumulation."
- Moderate (mix): score 26-60, "Moderate Exposure Detected." with correct category
- Touch targets are 56px+ on mobile
- All animations are smooth

- [ ] **Step 3: Commit**

```bash
git add src/app/waitlist/page.tsx
git commit -m "feat(quiz): add results screen with dynamic tier display and retake"
```

---

## Task 7: Build Verification

**Files:**
- None (verification only)

- [ ] **Step 1: Run production build**

Run: `npm run build`

Expected: Build succeeds with no errors.

- [ ] **Step 2: Run lint**

Run: `npm run lint`

Expected: No errors (warnings acceptable).

- [ ] **Step 3: Commit any lint fixes if needed**

```bash
git add -A
git commit -m "fix(quiz): lint fixes"
```

---

## Task 8: README.md

**Files:**
- Create: `README.md`

- [ ] **Step 1: Write the developer README**

```markdown
# Proxima Health

Environmental toxin diagnostics and therapeutic blood filtration. Built with Next.js 15, React 18, and Tailwind CSS.

## Prerequisites

- Node.js 18+
- npm 9+

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site is behind a password gate — enter `foryourreview` to access.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/                    # Pages (Next.js App Router)
│   ├── layout.tsx         # Root layout — Navbar, Footer, PasswordGate
│   ├── page.tsx           # Homepage
│   ├── about/             # About / team page
│   ├── diagnostics/       # Diagnostics service page
│   ├── interventions/     # INUSpheresis treatment page
│   ├── practitioners/     # Practitioner partnerships
│   ├── science/           # Science wiki with tabbed sections
│   ├── waitlist/          # Toxin Load Quiz & email capture
│   └── proposal/          # Internal web dev proposal
├── components/
│   ├── Navbar.tsx         # Fixed navbar, transparent on hero pages
│   ├── Footer.tsx         # Gradient footer with site links
│   ├── ThreeStepsSection.tsx  # Interactive 3-step overview
│   ├── PasswordGate.tsx   # Session-based password protection
│   └── LoadingScreen.tsx  # Animated loading bar on first visit
└── lib/
    └── utils.ts           # cn() utility (clsx + tailwind-merge)

public/
├── assets/                # Images, logos, hero backgrounds
└── fonts/                 # Local fonts (Robit, NB International, DM Sans)
```

## Key Dependencies

| Package | Purpose |
|---------|---------|
| `next` | React framework (App Router) |
| `framer-motion` | Animations and page transitions |
| `lucide-react` | Icon library |
| `tailwindcss` | Utility-first CSS |
| `clsx` + `tailwind-merge` | Conditional class merging |

## Deployment

Standard Next.js deployment. Compatible with Vercel, Netlify, or any Node.js hosting.

```bash
npm run build
npm start
```
```

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "docs: add developer README"
```

---

## Task 9: SITE_OVERVIEW.md

**Files:**
- Create: `SITE_OVERVIEW.md`

- [ ] **Step 1: Write the site overview document**

```markdown
# Proxima Health — Site Overview

## Brand

Proxima Health provides diagnostic precision to identify environmental toxins in blood and proven interventions (INUSpheresis) to remove them. The brand positions itself at the intersection of clinical science and modern health optimization.

**Tagline:** Better blood. Better life.

## Pages

### Home (`/`)
Full-screen hero with "Better blood. Better life." headline. Stats section (97% PFAS, 287 chemicals in cord blood, etc.), "The Invisible Crisis" editorial section, Three Steps overview (Test → Understand → Remove), and toxin exposure CTA.

### The Science (`/science`)
Tabbed wiki covering core topics: Microplastics, PFAS, Heavy Metals, and Environmental Toxins. Each tab has structured sections with clinical data, key statistics, and source citations.

### Diagnostics (`/diagnostics`)
Details on the Environmental Toxin Panel — what it tests for, how it works, what patients receive. Primary conversion page for the diagnostic product.

### Interventions (`/interventions`)
Explains INUSpheresis therapeutic blood filtration. Covers how the procedure works, what it removes, and clinical context.

### Practitioners (`/practitioners`)
Partnership page for healthcare practitioners. Covers the referral model, integration with existing practices, and the practitioner onboarding process.

### About (`/about`)
Founding story, team bios (Alex Ford, Matthew Sturdy), mission statement. Focuses on why Proxima exists and the personal motivation behind it.

### Toxin Load Quiz (`/waitlist`)
Interactive 10-question assessment that estimates environmental toxin exposure. Captures email before revealing results. Scores users into Low (0-25), Moderate (26-60), or High (61+) risk tiers with dynamic content based on their highest exposure category. Primary lead generation and email capture tool.

## Design System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `proxima-black` | #0A0A0A | Primary text, inverse backgrounds |
| `proxima-cream` | #FFFBEE | Primary background |
| `proxima-red` | #FE091B | Accents, CTAs |
| `proxima-orange` | #FF9D00 | Gradient midpoint |
| `proxima-maroon` | #BA000E | Gradient start, footer |

### Typography
| Font | Class | Usage |
|------|-------|-------|
| Archivo | `font-sans` | Body text (site default) |
| DM Mono | `font-mono` | Labels, navigation, technical text |
| NB International | `font-nb-international` | Branded headlines, pill labels |
| Robit | `font-robit` | Large stat numbers |
| Darker Grotesque | `font-display` | Page headings (h1-h6) |

### Component Patterns
- **Black pill headlines:** `inline-block bg-proxima-black text-proxima-cream px-3 py-0.5 font-nb-international` — stacked per line
- **+ corner markers:** Decorative positioning elements framing sections
- **Gradient bar:** `proxima-gradient` — maroon → red → orange → cream
- **Section container:** `section-container` (max-w-7xl) or `section-narrow` (max-w-4xl)
- **Buttons:** `btn-gradient` (primary CTA), `btn-outline` (secondary), `btn-primary` (solid black)

## Navigation

**Navbar:** The Science, Diagnostics, Interventions, Practitioners, About

**Footer:** Same as navbar plus "Toxin Assessment" link to `/waitlist`

## CTA Funnel

Most pages drive users toward two actions:
1. **Free Toxin Assessment** → `/waitlist` (quiz for email capture)
2. **Reserve your kit** → `/diagnostics` (product page)

The quiz results page links to `/diagnostics`, completing the funnel: awareness → quiz → email capture → diagnostics conversion.
```

- [ ] **Step 2: Commit**

```bash
git add SITE_OVERVIEW.md
git commit -m "docs: add site overview with pages, design system, and CTA funnel"
```

---

## Task 10: Final Push

- [ ] **Step 1: Run final build check**

Run: `npm run build && npm run lint`

Expected: Clean build, no lint errors.

- [ ] **Step 2: Push all commits to main**

```bash
git push origin main
```
