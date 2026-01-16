"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, RotateCcw, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/lib/theme";

const questions = [
  {
    question: "How would you describe the air quality in your primary residence?",
    options: [
      { text: "Urban/High-Density Area", impact: 8 },
      { text: "Suburban", impact: 5 },
      { text: "Rural", impact: 2 },
      { text: "I use HEPA filtration", impact: 0 },
    ]
  },
  {
    question: "How often do you consume water from municipal sources without secondary filtration?",
    options: [
      { text: "Daily", impact: 10 },
      { text: "Occasionally", impact: 6 },
      { text: "Rarely", impact: 3 },
      { text: "Never (RO filtered)", impact: 0 },
    ]
  },
  {
    question: "Do you regularly consume foods stored or heated in plastic containers?",
    options: [
      { text: "Multiple times daily", impact: 12 },
      { text: "Once daily", impact: 8 },
      { text: "Occasionally", impact: 4 },
      { text: "Never", impact: 0 },
    ]
  },
  {
    question: "How often do you consume high-mercury seafood (Tuna, Swordfish, King Mackerel)?",
    options: [
      { text: "2+ times weekly", impact: 15 },
      { text: "Weekly", impact: 10 },
      { text: "Monthly", impact: 5 },
      { text: "Rarely/Never", impact: 0 },
    ]
  }
];

export default function QuizPage() {
  const { theme } = useTheme();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [email, setEmail] = useState("");

  const handleStart = () => setStep(1);
  
  const handleAnswer = (impact: number) => {
    const newAnswers = [...answers, impact];
    setAnswers(newAnswers);
    
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      setIsCalculating(true);
      setTimeout(() => {
        setIsCalculating(false);
        setStep(questions.length + 1);
      }, 2000);
    }
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers([]);
  };

  const totalScore = answers.reduce((acc, curr) => acc + curr, 0);
  const maxScore = questions.reduce((acc, q) => acc + Math.max(...q.options.map(o => o.impact)), 0);
  const percentage = Math.round((totalScore / maxScore) * 100);
  const riskLevel = percentage > 60 ? "Elevated" : percentage > 30 ? "Moderate" : "Low";

  return (
    <div className="min-h-screen pt-24 pb-24 bg-primary text-primary">
      <div className="section-narrow">
        <AnimatePresence mode="wait">
          {/* Intro */}
          {step === 0 && (
            <motion.div 
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-16"
            >
              <p className="section-label mb-4">Assessment Tool</p>
              <h1 className="mb-6">Toxin Load Estimator</h1>
              <p className="text-xl text-secondary max-w-xl leading-relaxed mb-8">
                This 2-minute assessment estimates your environmental toxin 
                exposure based on lifestyle factors. For clinical verification, 
                we recommend our Baseline™ diagnostic panel.
              </p>
              
              <div className="bg-secondary border border-border-primary p-6 mb-12">
                <p className="font-mono text-xs text-tertiary uppercase tracking-wider mb-2">Disclaimer</p>
                <p className="text-sm text-secondary">
                  This assessment provides an estimate based on self-reported lifestyle factors. 
                  It is not a medical diagnosis. Actual toxin levels can only be determined 
                  through clinical blood analysis.
                </p>
              </div>

              <button 
                onClick={handleStart}
                className="btn-primary inline-flex items-center gap-3"
              >
                Begin Assessment <ArrowRight size={18} />
              </button>
            </motion.div>
          )}

          {/* Questions */}
          {step > 0 && step <= questions.length && !isCalculating && (
            <motion.div 
              key={`q-${step}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="py-16"
            >
              {/* Progress */}
              <div className="flex items-center gap-4 mb-12">
                <span className="font-mono text-sm text-tertiary">
                  {step} of {questions.length}
                </span>
                <div className="flex-1 h-px bg-border-primary">
                  <div 
                    className="h-full bg-proxima-red transition-all duration-500" 
                    style={{ width: `${(step / questions.length) * 100}%` }} 
                  />
                </div>
              </div>

              <h2 className="mb-12 max-w-2xl">{questions[step - 1].question}</h2>

              <div className="space-y-3">
                {questions[step - 1].options.map((option, i) => (
                  <button 
                    key={i}
                    onClick={() => handleAnswer(option.impact)}
                    className="w-full text-left p-6 border border-border-primary hover:border-proxima-red hover:bg-secondary transition-all flex justify-between items-center group"
                  >
                    <span className="font-sans">{option.text}</span>
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-proxima-red" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Calculating */}
          {isCalculating && (
            <motion.div 
              key="calculating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-32 text-center"
            >
              <div className="inline-block animate-spin mb-8">
                <RotateCcw size={48} className="text-tertiary" />
              </div>
              <h3>Analyzing responses...</h3>
              <p className="text-tertiary mt-2">Calculating estimated exposure</p>
            </motion.div>
          )}

          {/* Results */}
          {step > questions.length && !isCalculating && (
            <motion.div 
              key="results"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16"
            >
              <p className="section-label mb-4">Assessment Complete</p>
              <h1 className="mb-12">Your Results</h1>

              {/* Score Card */}
              <div className="bg-secondary border border-border-primary p-8 md:p-12 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <p className="font-mono text-xs text-tertiary uppercase tracking-wider mb-2">
                      Estimated Exposure Score
                    </p>
                    <span className="font-sans text-8xl font-semibold">{percentage}</span>
                    <span className="font-mono text-2xl text-tertiary">/100</span>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-tertiary uppercase tracking-wider mb-2">
                      Risk Classification
                    </p>
                    <span className={`font-sans text-3xl font-semibold ${
                      riskLevel === "Elevated" ? "text-proxima-red" : 
                      riskLevel === "Moderate" ? "text-proxima-orange" : "text-green-600"
                    }`}>
                      {riskLevel}
                    </span>
                    <p className="text-secondary mt-4 text-sm">
                      {riskLevel === "Elevated" 
                        ? "Your lifestyle factors suggest above-average exposure to environmental toxins."
                        : riskLevel === "Moderate"
                        ? "Your lifestyle factors suggest moderate exposure to environmental toxins."
                        : "Your lifestyle factors suggest below-average exposure to environmental toxins."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Capture */}
              <div className="bg-tertiary/10 p-8 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <Mail size={20} className="text-tertiary mt-1" />
                  <div>
                    <h4 className="font-sans font-medium mb-2">Get Your Detailed Report</h4>
                    <p className="text-sm text-secondary">
                      Receive a breakdown of your score by category and preliminary 
                      mitigation recommendations.
                    </p>
                  </div>
                </div>
                <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address" 
                    className="flex-grow border border-border-primary px-4 py-3 bg-primary text-primary focus:outline-none focus:border-proxima-red" 
                  />
                  <button className="btn-primary whitespace-nowrap">Send Report</button>
                </form>
              </div>

              {/* CTA */}
              <div className="border-t border-border-primary pt-8">
                <p className="text-secondary mb-6">
                  This estimate is based on self-reported lifestyle factors. 
                  For clinical verification, consider our diagnostic panel.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/diagnostics" className="btn-primary inline-flex items-center gap-2">
                    Learn About Diagnostics <ArrowRight size={18} />
                  </Link>
                  <button 
                    onClick={resetQuiz}
                    className="btn-outline inline-flex items-center gap-2"
                  >
                    <RotateCcw size={16} /> Retake Assessment
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
