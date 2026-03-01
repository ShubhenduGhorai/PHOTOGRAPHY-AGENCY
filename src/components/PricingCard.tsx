"use client";

import { PricingTier } from "@/lib/types";
import Button from "@/components/Button";

interface PricingCardProps {
  tier: PricingTier;
  index: number;
}

export default function PricingCard({ tier, index }: PricingCardProps) {
  return (
    <div
      className={`relative glass rounded-lg p-8 animate-fade-in-up ${
        tier.popular ? "border-2 border-accent" : ""
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {tier.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-accent text-background px-4 py-1 text-xs font-medium uppercase tracking-wider rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="font-heading text-xl font-semibold mb-2">{tier.name}</h3>
        <div className="flex items-baseline justify-center gap-1 mb-2">
          <span className="font-heading text-4xl font-semibold">{tier.price}</span>
        </div>
        <p className="text-foreground-secondary text-sm">{tier.description}</p>
      </div>

      <ul className="space-y-4 mb-8">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-foreground-secondary text-sm">
            <svg
              className="w-5 h-5 text-accent flex-shrink-0"
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

      <Button
        href="/contact"
        variant={tier.popular ? "primary" : "secondary"}
        className="w-full"
      >
        Get Started
      </Button>
    </div>
  );
}
