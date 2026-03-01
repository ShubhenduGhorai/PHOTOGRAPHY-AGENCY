"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { heroImages } from "@/lib/data/portfolio";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        {heroImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt="Hero background"
              fill
              className={`object-cover ${index === currentSlide ? "ken-burns" : ""}`}
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 gradient-overlay" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl animate-fade-in-up delay-300">
          <span className="accent-text text-accent text-lg md:text-xl uppercase tracking-[0.3em] mb-6 block">
            Award-Winning Photography
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-6 md:mb-8 leading-tight">
            We Capture Stories
            <br />
            That Last Forever
          </h1>
          <p className="text-foreground-secondary text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-10 md:mb-12">
            Transforming your precious moments into timeless visual narratives
            that you&apos;ll cherish for generations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/portfolio" variant="primary" size="lg">
              View Portfolio
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Book a Session
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1.5s" }}>
        <div className="flex flex-col items-center gap-2 text-foreground-secondary animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden md:flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-accent w-8"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
