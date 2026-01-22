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
            <p className="text-proxima-cream/60 max-w-sm leading-relaxed mb-8 font-mono text-sm uppercase tracking-wider">
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
            <p className="font-mono text-xs uppercase tracking-wider text-proxima-cream/40 mb-6">Company</p>
            <ul className="space-y-3">
              <li><Link href="/science" className="text-proxima-cream/60 hover:text-proxima-cream transition-colors text-xs font-mono uppercase tracking-wider">The Science</Link></li>
              <li><Link href="/diagnostics" className="text-proxima-cream/60 hover:text-proxima-cream transition-colors text-xs font-mono uppercase tracking-wider">Diagnostics</Link></li>
              <li><Link href="/interventions" className="text-proxima-cream/60 hover:text-proxima-cream transition-colors text-xs font-mono uppercase tracking-wider">Interventions</Link></li>
              <li><Link href="/about" className="text-proxima-cream/60 hover:text-proxima-cream transition-colors text-xs font-mono uppercase tracking-wider">About</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="font-mono text-xs uppercase tracking-wider text-proxima-cream/40 mb-6">Resources</p>
            <ul className="space-y-3">
              <li><Link href="/practitioners" className="text-proxima-cream/60 hover:text-proxima-cream transition-colors text-xs font-mono uppercase tracking-wider">For Practitioners</Link></li>
              <li><Link href="/waitlist" className="text-proxima-cream/60 hover:text-proxima-cream transition-colors text-xs font-mono uppercase tracking-wider">Toxin Assessment</Link></li>
              <li><span className="text-proxima-cream/30 text-xs font-mono uppercase tracking-wider">Research Library</span></li>
              <li><span className="text-proxima-cream/30 text-xs font-mono uppercase tracking-wider">Clinical Studies</span></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-wider text-proxima-cream/40 mb-6">Legal</p>
            <ul className="space-y-3">
              <li><span className="text-proxima-cream/30 text-xs font-mono uppercase tracking-wider">Privacy Policy</span></li>
              <li><span className="text-proxima-cream/30 text-xs font-mono uppercase tracking-wider">Terms of Service</span></li>
              <li><span className="text-proxima-cream/30 text-xs font-mono uppercase tracking-wider">Clinical Disclosures</span></li>
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
