"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "The Science", href: "/science", hasPlus: true },
  { name: "Diagnostics", href: "/diagnostics", hasPlus: false },
  { name: "Treatment", href: "/interventions", hasPlus: false },
  { name: "Practitioners", href: "/practitioners", hasPlus: false },
  { name: "About", href: "/about", hasPlus: false },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-proxima-cream"
      )}
    >
      <div className="section-container py-5 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="relative shrink-0">
          <Image 
            src="/assets/Main_Logo+Icon_Black.svg"
            alt="Proxima" 
            width={180} 
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wider text-proxima-red hover:text-proxima-black transition-colors whitespace-nowrap"
            >
              {link.hasPlus && <span className="text-proxima-red mr-1">+</span>}
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={24} className="text-proxima-black" />
          ) : (
            <Menu size={24} className="text-proxima-black" />
          )}
        </button>
      </div>

      {/* Gradient bar at bottom of navbar */}
      <div className="h-0.5 proxima-gradient" />

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-proxima-cream p-6 flex flex-col gap-4 lg:hidden border-t border-proxima-black/10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-mono text-sm uppercase tracking-wider py-2 text-proxima-red hover:text-proxima-black transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.hasPlus && <span className="text-proxima-red mr-1">+</span>}
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
