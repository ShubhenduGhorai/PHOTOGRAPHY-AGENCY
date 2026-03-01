"use client";

import { useState } from "react";
import Image from "next/image";
import { Testimonial } from "@/lib/types";
import ScrollReveal from "./ScrollReveal";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <ScrollReveal>
        <div className="text-center">
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-10">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-accent"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="font-accent text-2xl md:text-3xl lg:text-4xl italic text-foreground leading-relaxed mb-12">
            &quot;{testimonials[currentIndex].content}&quot;
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-accent/30">
              <Image
                src={testimonials[currentIndex].imageUrl}
                alt={testimonials[currentIndex].name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <div className="font-serif text-lg">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-foreground-secondary text-sm">
                {testimonials[currentIndex].role}
                {testimonials[currentIndex].company && (
                  <span> • {testimonials[currentIndex].company}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Navigation */}
      <div className="flex justify-center gap-4 mt-12">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground-secondary hover:text-accent hover:border-accent/50 transition-all duration-500"
          aria-label="Previous"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground-secondary hover:text-accent hover:border-accent/50 transition-all duration-500"
          aria-label="Next"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-px rounded-full transition-all duration-500 ${
              index === currentIndex 
                ? "w-12 bg-accent" 
                : "w-3 bg-foreground/20 hover:bg-foreground/40"
            }`}
            aria-label={`Go to ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
