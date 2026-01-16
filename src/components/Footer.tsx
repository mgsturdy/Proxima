"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/lib/theme";

export default function Footer() {
  const { theme } = useTheme();
  
  // In light mode: footer is dark (black bg) → need light text (offwhite)
  // In dark mode: footer is light (offwhite bg) → need dark text (black)
  const logoSrc = theme === "dark" 
    ? "/assets/Main_logo_Black.svg" 
    : "/assets/Main_logo_OffWhite.svg";
    
  const crossSrc = theme === "dark"
    ? "/assets/cross_black.svg"
    : "/assets/cross_offwhite.svg";

  // Text colors based on theme
  const textColor = theme === "dark" ? "text-proxima-black" : "text-proxima-offwhite";
  const textMuted = theme === "dark" ? "text-proxima-black/60" : "text-proxima-offwhite/60";
  const textFaint = theme === "dark" ? "text-proxima-black/40" : "text-proxima-offwhite/40";
  const textVeryFaint = theme === "dark" ? "text-proxima-black/30" : "text-proxima-offwhite/30";
  const borderColor = theme === "dark" ? "border-proxima-black/10" : "border-proxima-offwhite/10";

  return (
    <footer className="bg-inverse">
      <div className="h-1 proxima-gradient" />
      
      <div className="section-container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Image 
              src={logoSrc}
              alt="Proxima" 
              width={160} 
              height={32}
              className="mb-8"
            />
            <p className={`${textMuted} max-w-sm leading-relaxed mb-8 font-serif`}>
              Advancing human health through clinical-grade environmental 
              diagnostics and evidence-based therapeutic interventions.
            </p>
            <div className="flex items-center gap-4">
              <Image 
                src={crossSrc}
                alt="Proxima Cross"
                width={24}
                height={24}
                className="opacity-40"
              />
              <span className={`font-mono text-xs ${textVeryFaint} uppercase tracking-wider`}>
                Better Blood. Better Life.
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <p className={`font-sans text-xs uppercase tracking-wider ${textFaint} mb-6`}>Company</p>
            <ul className="space-y-3">
              <li><Link href="/science" className={`${textMuted} hover:${textColor} transition-colors text-sm font-sans`}>The Science</Link></li>
              <li><Link href="/diagnostics" className={`${textMuted} hover:${textColor} transition-colors text-sm font-sans`}>Diagnostics</Link></li>
              <li><Link href="/interventions" className={`${textMuted} hover:${textColor} transition-colors text-sm font-sans`}>Interventions</Link></li>
              <li><Link href="/about" className={`${textMuted} hover:${textColor} transition-colors text-sm font-sans`}>About</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className={`font-sans text-xs uppercase tracking-wider ${textFaint} mb-6`}>Resources</p>
            <ul className="space-y-3">
              <li><Link href="/practitioners" className={`${textMuted} hover:${textColor} transition-colors text-sm font-sans`}>For Practitioners</Link></li>
              <li><Link href="/waitlist" className={`${textMuted} hover:${textColor} transition-colors text-sm font-sans`}>Toxin Assessment</Link></li>
              <li><span className={`${textVeryFaint} text-sm font-sans`}>Research Library</span></li>
              <li><span className={`${textVeryFaint} text-sm font-sans`}>Clinical Studies</span></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className={`font-sans text-xs uppercase tracking-wider ${textFaint} mb-6`}>Legal</p>
            <ul className="space-y-3">
              <li><span className={`${textVeryFaint} text-sm font-sans`}>Privacy Policy</span></li>
              <li><span className={`${textVeryFaint} text-sm font-sans`}>Terms of Service</span></li>
              <li><span className={`${textVeryFaint} text-sm font-sans`}>Clinical Disclosures</span></li>
            </ul>
          </div>
        </div>

        <div className={`pt-8 border-t ${borderColor}`}>
          <p className={`font-mono text-xs ${textVeryFaint}`}>
            © 2026 Proxima Health, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
