"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { heroImages } from "@/lib/data/portfolio";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background slides */}
      <div className="absolute inset-0">
        {heroImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${
              index === currentSlide 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={src}
              alt="LensCraft Studio - Premium Photography"
              fill
              className={`object-cover ${index === currentSlide ? "ken-burns" : ""}`}
              priority={index === 0}
              quality={90}
            />
          </div>
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 gradient-overlay" />
      <div className="absolute inset-0 gradient-radial" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-accent/30 to-transparent animate-float hidden lg:block" />
      <div className="absolute bottom-1/4 right-10 w-px h-32 bg-gradient-to-b from-transparent via-accent/30 to-transparent animate-float hidden lg:block" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Top accent line */}
        <div className={`absolute top-32 left-1/2 -translate-x-1/2 w-24 h-px bg-accent/50 transition-all duration-1000 delay-300 ${isLoaded ? 'w-24 opacity-100' : 'w-0 opacity-0'}`} />

        <div className={`max-w-5xl transition-all duration-1000 delay-150 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="accent-text text-accent text-lg md:text-xl uppercase tracking-[0.4em] mb-8 block animate-reveal-up">
            Award-Winning Studio
          </span>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-8 leading-[1.1] tracking-wide">
            Capturing
            <br />
            <span className="text-gradient">Timeless</span> Moments
          </h1>
          
          <p className="text-foreground-secondary/80 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Where Every Frame Tells a Story of Elegance & Grace
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button href="/portfolio" variant="primary" size="lg">
              View Portfolio
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Book a Session
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center gap-3">
            <span className="text-accent/60 text-xs uppercase tracking-[0.3em]">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-accent/60 to-transparent" />
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-8 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative h-px transition-all duration-500 ${
              index === currentSlide 
                ? "w-12 bg-accent" 
                : "w-4 bg-foreground/20 hover:bg-foreground/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 bg-accent animate-shimmer" />
            )}
          </button>
        ))}
      </div>

      {/* Side decorations */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
        <div className="w-px h-20 bg-accent/20" />
        <span className="text-accent/40 text-xs uppercase tracking-[0.2em] writing-vertical transform rotate-180">
          Est. 2012
        </span>
      </div>
    </section>
  );
}
