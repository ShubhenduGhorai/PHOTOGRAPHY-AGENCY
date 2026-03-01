"use client";

import { useEffect, useRef, useState } from "react";

interface ParallaxOptions {
  speed?: number;
  direction?: "vertical" | "horizontal";
}

export function useParallax(options: ParallaxOptions = {}) {
  const { speed = 0.5, direction = "vertical" } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight && rect.bottom > 0) {
        const centerPosition = rect.top + rect.height / 2 - windowHeight / 2;
        const calculatedOffset = centerPosition * speed;
        setOffset(calculatedOffset);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  const transform = direction === "vertical" 
    ? `translateY(${offset}px)` 
    : `translateX(${offset}px)`;

  return { ref, transform };
}

export function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isRevealed };
}

export function useSmoothScroll() {
  useEffect(() => {
    const html = document.documentElement;
    html.style.scrollBehavior = "smooth";
    
    return () => {
      html.style.scrollBehavior = "auto";
    };
  }, []);
}
