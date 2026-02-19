"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 1500; // 1.5 seconds
    const interval = 15; // Update every 15ms
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsComplete(true), 100);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-proxima-cream flex items-center justify-center"
        >
          <div className="w-full max-w-2xl px-8">
            {/* Gradient progress bar */}
            <div className="relative h-[2px] bg-proxima-black/10 mb-4">
              <motion.div
                className="absolute top-0 left-0 h-full"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(to right, #E53935, #F5A623, #FAF9F6)',
                }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.05 }}
              />
              
              {/* Cross marker at progress point */}
              <motion.div
                className="absolute -top-2 text-proxima-black text-sm font-mono"
                style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
              >
                +
              </motion.div>
            </div>

            {/* Text and percentage */}
            <div className="flex justify-between items-center">
              <motion.p
                className="font-mono text-xs uppercase tracking-wider text-proxima-black/60"
                style={{ marginLeft: `${Math.min(progress, 85)}%` }}
              >
                Better Blood. Better Life.
              </motion.p>
              <span className="font-mono text-xs text-proxima-black/40">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
