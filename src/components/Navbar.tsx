"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navItems } from "@/lib/data/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-2xl md:text-3xl font-semibold tracking-wide">
              Lens<span className="text-accent">Craft</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground-secondary hover:text-accent transition-colors duration-300 text-sm font-medium uppercase tracking-wider"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="hidden md:inline-flex px-6 py-3 bg-accent hover:bg-accent-hover text-background font-medium text-sm uppercase tracking-wider transition-all duration-300"
          >
            Book Now
          </Link>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>
      </div>

      <div
        className={`md:hidden bg-background-secondary border-t border-border overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-custom py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground-secondary hover:text-accent transition-colors duration-300 text-lg font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex justify-center px-6 py-3 bg-accent hover:bg-accent-hover text-background font-medium text-sm uppercase tracking-wider transition-all duration-300 mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
