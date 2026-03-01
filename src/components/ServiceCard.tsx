"use client";

import { Service } from "@/lib/types";
import ScrollReveal from "./ScrollReveal";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <ScrollReveal animation="up" delay={index * 100}>
      <div className="glass rounded-lg p-10 hover-lift hover-glow group h-full">
        {/* Icon */}
        <div className="text-6xl mb-8 transform group-hover:scale-110 transition-transform duration-500">
          {service.icon}
        </div>
        
        {/* Title */}
        <h3 className="font-serif text-2xl font-light mb-4 group-hover:text-accent transition-colors duration-500">
          {service.title}
        </h3>
        
        {/* Description */}
        <p className="text-foreground-secondary mb-8 leading-relaxed">
          {service.description}
        </p>
        
        {/* Features */}
        <ul className="space-y-3 mb-8">
          {service.features.slice(0, 4).map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-foreground-secondary text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
              {feature}
            </li>
          ))}
        </ul>
        
        {/* Learn more link */}
        <a
          href={`/services#${service.id}`}
          className="inline-flex items-center gap-3 text-accent text-sm uppercase tracking-wider group/link"
        >
          Learn More
          <svg
            className="w-4 h-4 transform group-hover/link:translate-x-2 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </ScrollReveal>
  );
}
