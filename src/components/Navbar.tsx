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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    handleScroll(); // Check initial position
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use transparent/cream style only on homepage when not scrolled
  const isTransparent = isHomePage && !scrolled;

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        isTransparent ? "bg-transparent" : "bg-proxima-cream"
      )}>
        <div className="section-container py-5 flex items-center justify-between gap-8">
          {/* Logo - White when transparent, black when scrolled */}
          <Link href="/" className="relative shrink-0">
            <Image 
              src={isTransparent ? "/assets/Main_Logo+Icon_OffWhite.svg" : "/assets/Main_Logo+Icon_Black.svg"}
              alt="Proxima" 
              width={180} 
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "group font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-colors relative",
                  isTransparent 
                    ? "text-proxima-cream hover:text-white" 
                    : "text-proxima-black/70 hover:text-proxima-black"
                )}
              >
                {/* Plus sign - appears on hover */}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -left-4">+</span>
                <span className="relative">
                  {link.name}
                  {/* Underline on hover */}
                  <span className={cn(
                    "absolute left-0 -bottom-1 w-0 h-px group-hover:w-full transition-all duration-300",
                    isTransparent ? "bg-proxima-cream" : "bg-proxima-black"
                  )} />
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} className={isTransparent ? "text-proxima-cream" : "text-proxima-black"} />
            ) : (
              <Menu size={24} className={isTransparent ? "text-proxima-cream" : "text-proxima-black"} />
            )}
          </button>
        </div>

        {/* Horizontal line under navbar - only when transparent */}
        {isTransparent && (
          <div className="absolute left-6 md:left-12 lg:left-16 right-[25px] top-[76px] h-px bg-proxima-cream/60" />
        )}

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className={cn(
            "absolute top-full left-0 right-0 p-6 flex flex-col gap-4 lg:hidden",
            isTransparent ? "bg-proxima-black/90 backdrop-blur-sm" : "bg-proxima-cream"
          )}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-mono text-sm uppercase tracking-wider py-2 transition-colors",
                  isTransparent 
                    ? "text-proxima-cream hover:text-white" 
                    : "text-proxima-black/70 hover:text-proxima-black"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Vertical line on right side - only when transparent, 40px from right */}
      {isTransparent && (
        <div className="fixed top-[61px] right-10 w-px h-[calc(100vh-61px)] bg-proxima-cream/60 z-40 hidden lg:block" />
      )}
    </>
  );
}
