"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const assessmentQuestions = [
  {
    id: 1,
    question: "Do you drink from plastic water bottles regularly?",
    options: ["Never", "Sometimes", "Often", "Daily"]
  },
  {
    id: 2,
    question: "Do you eat food from plastic containers or use non-stick cookware?",
    options: ["Never", "Sometimes", "Often", "Daily"]
  },
  {
    id: 3,
    question: "Are you exposed to urban air pollution or traffic regularly?",
    options: ["Never", "Sometimes", "Often", "Daily"]
  },
  {
    id: 4,
    question: "Do you consume seafood more than twice per week?",
    options: ["Never", "Sometimes", "Often", "Daily"]
  },
  {
    id: 5,
    question: "Have you ever worked in manufacturing, construction, or agriculture?",
    options: ["Never", "Previously", "Currently", "Long-term"]
  }
];

export default function AlternativePage() {
  const [showAssessment, setShowAssessment] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);
  const [riskScore, setRiskScore] = useState(0);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    // Check if user already completed assessment
    const access = localStorage.getItem("proxima-access");
    if (access === "granted") {
      setHasAccess(true);
    }
  }, []);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate risk score
      const score = newAnswers.reduce((acc, val) => acc + val, 0);
      const maxScore = assessmentQuestions.length * 3;
      const percentage = Math.round((score / maxScore) * 100);
      setRiskScore(percentage);
      setCompleted(true);
    }
  };

  const grantAccess = () => {
    localStorage.setItem("proxima-access", "granted");
    setHasAccess(true);
  };

  // Full site access after assessment
  if (hasAccess) {
    return (
      <div className="min-h-screen bg-proxima-black">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-proxima-maroon via-proxima-red to-proxima-orange opacity-90" />
          
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/assets/siralexfrompt_adult_male-presenting_figure_with_short_light_cur_c5431ccb-00b8-4bfd-8bfa-5aea84fd235b.png"
              alt="Proxima Health"
              fill
              className="object-cover mix-blend-overlay opacity-60"
              priority
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-8 left-8 text-proxima-cream/40 text-xl font-light">+</div>
          <div className="absolute top-8 right-8 text-proxima-cream/40 text-xl font-light">+</div>
          <div className="absolute bottom-8 left-8 text-proxima-cream/40 text-xl font-light">+</div>
          <div className="absolute bottom-8 right-8 text-proxima-cream/40 text-xl font-light">+</div>

          {/* Vertical Text */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
            <span className="text-proxima-cream/60 text-sm tracking-[0.3em] uppercase writing-mode-vertical rotate-180" style={{ writingMode: 'vertical-rl' }}>
              Proxima Health
            </span>
          </div>

          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
            <span className="text-proxima-cream/60 text-sm tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl' }}>
              Better Blood. Better Life.
            </span>
          </div>

          {/* Main Content */}
          <div className="relative z-10 section-container py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              {/* Mini Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-px bg-proxima-cream/40" />
                <span className="text-proxima-cream/80 text-sm tracking-[0.2em] uppercase font-sans">
                  Environmental Toxin Specialists
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-proxima-cream text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8">
                Better blood.<br />
                <span className="text-proxima-orange">Better life.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-proxima-cream/80 text-xl md:text-2xl max-w-2xl mb-12 font-sans font-light leading-relaxed">
                Microplastics. PFAS. Heavy metals. We help you understand what's in your blood, then remove what doesn't belong.
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-12 mb-12">
                <div className="text-center">
                  <div className="text-5xl font-bold text-proxima-cream mb-2 font-sans">97%</div>
                  <div className="text-proxima-cream/60 text-sm">Americans with PFAS</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-proxima-cream mb-2 font-sans">287</div>
                  <div className="text-proxima-cream/60 text-sm">Chemicals in cord blood</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-proxima-cream mb-2 font-sans">80%</div>
                  <div className="text-proxima-cream/60 text-sm">Have microplastics</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="/diagnostics" className="bg-proxima-cream text-proxima-black px-8 py-4 font-sans font-semibold text-sm tracking-wide hover:bg-white transition-colors inline-flex items-center gap-3">
                  FREE TOXIN ASSESSMENT <ArrowRight size={16} />
                </Link>
                <Link href="/science" className="border border-proxima-cream/40 text-proxima-cream px-8 py-4 font-sans font-medium text-sm tracking-wide hover:bg-proxima-cream/10 transition-colors">
                  View Research
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Bottom Gradient Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 proxima-gradient-reverse" />
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-proxima-black relative">
          <div className="absolute top-12 left-1/4 text-proxima-cream/20 text-lg">+</div>
          <div className="absolute top-12 right-1/4 text-proxima-cream/20 text-lg">+</div>
          
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { num: "01", title: "Measure", desc: "Baseline blood test identifying 30+ environmental toxins with clinical precision." },
                { num: "02", title: "Optimize", desc: "Evidence-based protocols and lifestyle changes to reduce ongoing exposure." },
                { num: "03", title: "Eliminate", desc: "Advanced blood filtration to remove accumulated toxins from the body." }
              ].map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="border border-proxima-cream/10 p-8 group hover:border-proxima-orange/40 transition-colors"
                >
                  <div className="text-proxima-orange text-sm font-mono mb-4">{step.num}</div>
                  <h3 className="text-proxima-cream text-2xl font-bold mb-4 font-sans">{step.title}</h3>
                  <p className="text-proxima-cream/60 font-sans">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="relative h-[70vh]">
          <Image
            src="/assets/siralexfrompt_adult_male-presenting_figure_with_short_light_cur_c5431ccb-00b8-4bfd-8bfa-5aea84fd235b.png"
            alt="Treatment"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-proxima-black via-transparent to-proxima-black" />
          
          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="section-container">
              <div className="max-w-xl">
                <div className="bg-proxima-cream text-proxima-black px-6 py-4 mb-6 inline-block">
                  <span className="font-sans font-bold text-lg">Predictable Sessions</span><br />
                  <span className="font-sans font-bold text-lg">Documented Safety</span>
                </div>
                <p className="text-proxima-cream/80 font-sans text-lg leading-relaxed">
                  For decades, therapeutic blood filtration has been used in European clinical settings. Proxima Health is bringing this science to the United States.
                </p>
              </div>
            </div>
          </div>

          {/* Corner Markers */}
          <div className="absolute top-8 right-8 text-proxima-cream/40">+</div>
          <div className="absolute bottom-8 right-8 text-proxima-cream/40">+</div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24 bg-gradient-to-r from-proxima-maroon via-proxima-red to-proxima-orange">
          <div className="section-container text-center">
            <h2 className="text-proxima-cream text-4xl md:text-5xl font-bold mb-6 font-sans">
              Your blood tells a story.
            </h2>
            <p className="text-proxima-cream/80 text-xl mb-8 max-w-2xl mx-auto font-sans">
              Discover what's really in your bloodstream with our clinically validated environmental toxin panel.
            </p>
            <Link href="/diagnostics" className="bg-proxima-cream text-proxima-black px-10 py-5 font-sans font-bold text-sm tracking-wide hover:bg-white transition-colors inline-flex items-center gap-3">
              ORDER YOUR TEST <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* Footer Branding */}
        <section className="py-16 bg-proxima-black border-t border-proxima-cream/10">
          <div className="section-container flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image src="/assets/blood-offwhite.svg" alt="Proxima" width={24} height={32} />
              <span className="text-proxima-cream font-sans font-bold text-xl">Proxima<span className="font-light">Health</span></span>
            </div>
            <span className="text-proxima-cream/40 text-sm font-sans">Better Blood. Better Life.</span>
          </div>
        </section>
      </div>
    );
  }

  // Assessment Gate
  return (
    <div className="min-h-screen bg-proxima-black flex items-center justify-center relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-proxima-maroon/30 via-proxima-red/20 to-proxima-orange/30" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-proxima-orange/20 to-transparent" />
      </div>

      {/* Corner Markers */}
      <div className="absolute top-8 left-8 text-proxima-cream/30 text-2xl font-light">+</div>
      <div className="absolute top-8 right-8 text-proxima-cream/30 text-2xl font-light">+</div>
      <div className="absolute bottom-8 left-8 text-proxima-cream/30 text-2xl font-light">+</div>
      <div className="absolute bottom-8 right-8 text-proxima-cream/30 text-2xl font-light">+</div>

      {/* Vertical Side Text */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <span className="text-proxima-cream/40 text-xs tracking-[0.4em] uppercase font-sans" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          Proxima Health
        </span>
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <span className="text-proxima-cream/40 text-xs tracking-[0.4em] uppercase font-sans" style={{ writingMode: 'vertical-rl' }}>
          Better Blood Better Life
        </span>
      </div>

      <AnimatePresence mode="wait">
        {!showAssessment && !completed && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative z-10 text-center px-6 max-w-2xl"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <Image src="/assets/blood-offwhite.svg" alt="Proxima" width={48} height={64} className="mx-auto mb-6" />
              <h1 className="text-proxima-cream font-sans font-bold text-4xl md:text-5xl">
                Proxima<span className="font-light">Health</span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="h-1 w-32 proxima-gradient mx-auto mb-8" />
              <h2 className="text-proxima-cream text-2xl md:text-3xl font-sans font-light mb-4">
                Better blood. <span className="text-proxima-orange font-semibold">Better life.</span>
              </h2>
              <p className="text-proxima-cream/60 text-lg mb-12 font-sans">
                Take a 60-second assessment to understand your environmental toxin exposure.
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              onClick={() => setShowAssessment(true)}
              className="bg-gradient-to-r from-proxima-maroon via-proxima-red to-proxima-orange text-white px-10 py-5 font-sans font-bold text-sm tracking-wide hover:opacity-90 transition-opacity inline-flex items-center gap-3"
            >
              START TOXIN ASSESSMENT <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        )}

        {showAssessment && !completed && (
          <motion.div
            key="assessment"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="relative z-10 px-6 max-w-xl w-full"
          >
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between text-proxima-cream/40 text-sm font-sans mb-2">
                <span>Question {currentQuestion + 1} of {assessmentQuestions.length}</span>
                <span>{Math.round(((currentQuestion) / assessmentQuestions.length) * 100)}%</span>
              </div>
              <div className="h-1 bg-proxima-cream/10 overflow-hidden">
                <motion.div
                  className="h-full proxima-gradient"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion) / assessmentQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h2 className="text-proxima-cream text-2xl md:text-3xl font-sans font-semibold mb-8">
                {assessmentQuestions[currentQuestion].question}
              </h2>

              <div className="space-y-3">
                {assessmentQuestions[currentQuestion].options.map((option, i) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(i)}
                    className="w-full text-left px-6 py-4 border border-proxima-cream/20 text-proxima-cream font-sans hover:border-proxima-orange hover:bg-proxima-orange/10 transition-all group"
                  >
                    <span className="text-proxima-orange/60 mr-4 group-hover:text-proxima-orange">0{i + 1}</span>
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {completed && (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 text-center px-6 max-w-xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="w-24 h-24 rounded-full border-4 border-proxima-orange flex items-center justify-center mx-auto mb-8"
            >
              <Check size={40} className="text-proxima-orange" />
            </motion.div>

            <h2 className="text-proxima-cream text-3xl md:text-4xl font-sans font-bold mb-4">
              Assessment Complete
            </h2>

            <div className="mb-8">
              <div className="text-6xl font-bold text-proxima-orange font-sans mb-2">{riskScore}%</div>
              <p className="text-proxima-cream/60 font-sans">Estimated Toxin Exposure Risk</p>
            </div>

            <p className="text-proxima-cream/70 text-lg mb-8 font-sans">
              {riskScore > 50 
                ? "Based on your answers, you may have elevated environmental toxin exposure. Our baseline blood test can provide precise measurements."
                : "Your lifestyle suggests moderate toxin exposure. A baseline test can confirm your exact levels and help maintain optimal health."
              }
            </p>

            <div className="h-1 w-full proxima-gradient mb-8" />

            <button
              onClick={grantAccess}
              className="bg-proxima-cream text-proxima-black px-10 py-5 font-sans font-bold text-sm tracking-wide hover:bg-white transition-colors inline-flex items-center gap-3"
            >
              ENTER PROXIMA HEALTH <ArrowRight size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
