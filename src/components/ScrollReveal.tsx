"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "up" | "down" | "left" | "right" | "scale" | "fade";
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = "up",
  delay = 0,
  duration = 800,
  threshold = 0.1,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsRevealed(true);
          }, delay);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    
    return () => observer.disconnect();
  }, [delay, threshold]);

  const animations = {
    up: { opacity: isRevealed ? 1 : 0, transform: isRevealed ? "translateY(0)" : "translateY(40px)" },
    down: { opacity: isRevealed ? 1 : 0, transform: isRevealed ? "translateY(0)" : "translateY(-40px)" },
    left: { opacity: isRevealed ? 1 : 0, transform: isRevealed ? "translateX(0)" : "translateX(-50px)" },
    right: { opacity: isRevealed ? 1 : 0, transform: isRevealed ? "translateX(0)" : "translateX(50px)" },
    scale: { opacity: isRevealed ? 1 : 0, transform: isRevealed ? "scale(1)" : "scale(0.95)" },
    fade: { opacity: isRevealed ? 1 : 0 },
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...animations[animation],
        transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}
