"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative" style={{ background: 'linear-gradient(to bottom, #FAF9F6 0%, #FAF9F6 5%, #F5A623 30%, #E53935 60%, #C62828 100%)' }}>
      <div className="section-container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <p className="text-proxima-black/80 max-w-sm leading-relaxed mb-8 font-nb-international text-sm">
              Advancing human health through clinical-grade environmental 
              diagnostics and evidence-based therapeutic interventions.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="font-mono text-xs text-proxima-black uppercase tracking-wider">Better</span>
                <span className="font-mono text-xs text-proxima-black uppercase tracking-wider">Blood +</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs text-proxima-black uppercase tracking-wider">Better</span>
                <span className="font-mono text-xs text-proxima-black uppercase tracking-wider">Life +</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <p className="font-mono text-xs uppercase tracking-wider text-proxima-black/50 mb-4">Company</p>
            <ul className="space-y-1.5">
              <li><Link href="/science" className="text-proxima-black/80 hover:text-proxima-black transition-colors text-xs font-mono uppercase tracking-wider">The Science</Link></li>
              <li><Link href="/diagnostics" className="text-proxima-black/80 hover:text-proxima-black transition-colors text-xs font-mono uppercase tracking-wider">Diagnostics</Link></li>
              <li><Link href="/interventions" className="text-proxima-black/80 hover:text-proxima-black transition-colors text-xs font-mono uppercase tracking-wider">Interventions</Link></li>
              <li><Link href="/about" className="text-proxima-black/80 hover:text-proxima-black transition-colors text-xs font-mono uppercase tracking-wider">About</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-wider text-proxima-black/50 mb-4">Resources</p>
            <ul className="space-y-1.5">
              <li><Link href="/practitioners" className="text-proxima-black/80 hover:text-proxima-black transition-colors text-xs font-mono uppercase tracking-wider">For Practitioners</Link></li>
              <li><Link href="/waitlist" className="text-proxima-black/80 hover:text-proxima-black transition-colors text-xs font-mono uppercase tracking-wider">Toxin Assessment</Link></li>
              <li><span className="text-proxima-black/50 text-xs font-mono uppercase tracking-wider">Research Library</span></li>
              <li><span className="text-proxima-black/50 text-xs font-mono uppercase tracking-wider">Clinical Studies</span></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-wider text-proxima-black/50 mb-4">Legal</p>
            <ul className="space-y-1.5">
              <li><span className="text-proxima-black/50 text-xs font-mono uppercase tracking-wider">Privacy Policy</span></li>
              <li><span className="text-proxima-black/50 text-xs font-mono uppercase tracking-wider">Terms of Service</span></li>
              <li><span className="text-proxima-black/50 text-xs font-mono uppercase tracking-wider">Clinical Disclosures</span></li>
            </ul>
          </div>
        </div>

        {/* Full-width Proxima Health logo */}
        <div className="mb-8">
          <Image 
            src="/assets/Main_logo_Black.svg"
            alt="Proxima Health" 
            width={1200} 
            height={120}
            className="w-full h-auto"
          />
        </div>

        {/* Copyright */}
        <div className="flex justify-between items-center">
          <p className="font-mono text-xs text-proxima-black/60">
            info@proximahealth.com © Proxima Health, Inc.
          </p>
          <p className="font-mono text-xs text-proxima-black/60">
            © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
