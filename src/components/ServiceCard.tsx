"use client";

import { Service } from "@/lib/types";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <div
      className="glass rounded-lg p-8 hover:bg-white/10 transition-all duration-300 group animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="text-5xl mb-6">{service.icon}</div>
      <h3 className="font-heading text-2xl font-semibold mb-4 group-hover:text-accent transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-foreground-secondary mb-6 leading-relaxed">
        {service.description}
      </p>
      <ul className="space-y-3 mb-8">
        {service.features.slice(0, 4).map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-foreground-secondary text-sm">
            <svg
              className="w-4 h-4 text-accent flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={`/services#${service.id}`}
        className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors duration-300 font-medium"
      >
        Learn More
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  );
}
