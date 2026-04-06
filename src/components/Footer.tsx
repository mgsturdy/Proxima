"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative" style={{ background: 'linear-gradient(to bottom, #FFFBEE 0%, #FFFBEE 5%, #F5A623 30%, #E53935 60%, #C62828 100%)' }}>
      <div className="section-container py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <p className="text-proxima-black/80 max-w-sm leading-relaxed mb-8 font-nb-international text-sm">
              Advancing human health through environmental toxin testing and blood filtration.
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
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="space-y-2">
              <Link href="/privacy" className="block text-sm font-sans text-proxima-black/60 hover:text-proxima-black transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="block text-sm font-sans text-proxima-black/60 hover:text-proxima-black transition-colors">Terms of Service</Link>
            </div>
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
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="font-mono text-xs text-proxima-black/60">
            © Proxima Health, Inc. 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
