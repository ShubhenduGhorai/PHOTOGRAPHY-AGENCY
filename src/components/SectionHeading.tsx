"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  alignment?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  alignment = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${alignment === "center" ? "text-center" : ""} ${className}`}>
      <ScrollReveal animation="up" delay={0}>
        {subtitle && (
          <span className="accent-text text-accent text-lg md:text-xl uppercase tracking-[0.3em] mb-4 inline-block">
            {subtitle}
          </span>
        )}
      </ScrollReveal>
      
      <ScrollReveal animation="up" delay={100}>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6">
          {title}
        </h2>
      </ScrollReveal>
      
      {description && (
        <ScrollReveal animation="up" delay={200}>
          <p className="text-foreground-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
