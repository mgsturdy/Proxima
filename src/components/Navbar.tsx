"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "The Science", href: "/science" },
  { name: "Diagnostics", href: "/diagnostics" },
  { name: "Treatment", href: "/interventions" },
  { name: "Practitioners", href: "/practitioners" },
  { name: "About", href: "/about" },
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

  // On homepage, hide navbar until scroll
  if (isHomePage && !isScrolled) {
    return null;
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isHomePage 
          ? "bg-primary animate-slideDown" 
          : isScrolled 
            ? "bg-primary backdrop-blur-sm" 
            : "bg-primary"
      )}
    >
      <div className="section-container py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative">
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
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="nav-link-gradient font-mono text-xs uppercase tracking-wider text-secondary hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link href="/waitlist" className="btn-gradient">
            FREE TOXIN ASSESSMENT
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={24} className="text-primary" />
          ) : (
            <Menu size={24} className="text-primary" />
          )}
        </button>
      </div>

      {/* Gradient bar at bottom of navbar */}
      <div className="h-0.5 proxima-gradient" />

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-primary p-6 flex flex-col gap-4 lg:hidden">
          <div className="h-0.5 proxima-gradient mb-4" />
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-mono text-sm uppercase tracking-wider py-2 text-secondary hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/waitlist"
            className="btn-gradient text-center mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            FREE TOXIN ASSESSMENT
          </Link>
        </div>
      )}
    </nav>
  );
}
