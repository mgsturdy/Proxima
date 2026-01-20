"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-inverse">
      <div className="h-1 proxima-gradient" />
      
      <div className="section-container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Image 
              src="/assets/Main_logo_OffWhite.svg"
              alt="Proxima" 
              width={160} 
              height={32}
              className="mb-8"
            />
            <p className="text-proxima-cream/60 max-w-sm leading-relaxed mb-8 font-serif">
              Advancing human health through clinical-grade environmental 
              diagnostics and evidence-based therapeutic interventions.
            </p>
            <div className="flex items-center gap-4">
              <Image 
                src="/assets/cross_offwhite.svg"
                alt="Proxima Cross"
                width={24}
                height={24}
                className="opacity-40"
              />
              <span className="font-mono text-xs text-proxima-cream/30 uppercase tracking-wider">
                Better Blood. Better Life.
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <p className="font-sans text-xs uppercase tracking-wider text-proxima-cream/40 mb-6">Company</p>
            <ul className="space-y-3">
              <li><Link href="/science" className="text-proxima-cream/60 hover:text-proxima-cream transition-colors text-sm font-sans">The Science</Link></li>
              <li><Link href="/diagnostics" className="text-proxima-cream/60 hover:text-proxima-cream transition-colors text-sm font-sans">Diagnostics</Link></li>
              <li><Link href="/interventions" className="text-proxima-cream/60 hover:text-proxima-cream transition-colors text-sm font-sans">Interventions</Link></li>
              <li><Link href="/about" className="text-proxima-cream/60 hover:text-proxima-cream transition-colors text-sm font-sans">About</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="font-sans text-xs uppercase tracking-wider text-proxima-cream/40 mb-6">Resources</p>
            <ul className="space-y-3">
              <li><Link href="/practitioners" className="text-proxima-cream/60 hover:text-proxima-cream transition-colors text-sm font-sans">For Practitioners</Link></li>
              <li><Link href="/waitlist" className="text-proxima-cream/60 hover:text-proxima-cream transition-colors text-sm font-sans">Toxin Assessment</Link></li>
              <li><span className="text-proxima-cream/30 text-sm font-sans">Research Library</span></li>
              <li><span className="text-proxima-cream/30 text-sm font-sans">Clinical Studies</span></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="font-sans text-xs uppercase tracking-wider text-proxima-cream/40 mb-6">Legal</p>
            <ul className="space-y-3">
              <li><span className="text-proxima-cream/30 text-sm font-sans">Privacy Policy</span></li>
              <li><span className="text-proxima-cream/30 text-sm font-sans">Terms of Service</span></li>
              <li><span className="text-proxima-cream/30 text-sm font-sans">Clinical Disclosures</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-proxima-cream/10">
          <p className="font-mono text-xs text-proxima-cream/30">
            © 2026 Proxima Health, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
