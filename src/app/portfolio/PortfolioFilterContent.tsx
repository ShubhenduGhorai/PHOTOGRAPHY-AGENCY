"use client";

import { useState, useMemo } from "react";
import SectionHeading from "@/components/SectionHeading";
import PortfolioGrid from "@/components/PortfolioGrid";
import { portfolioItems, categories } from "@/lib/data/portfolio";
import { Category } from "@/lib/types";

export default function PortfolioFilterContent() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return portfolioItems;
    }
    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-custom">
          <div className="animate-fade-in-up">
            <SectionHeading
              subtitle="Our Work"
              title="Portfolio"
              description="A curated collection of our finest photography work."
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up delay-100">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-accent text-background"
                    : "bg-background-secondary text-foreground-secondary hover:text-foreground hover:border-accent border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-30">
        <div className="container-custom">
          {filteredItems.length > 0 ? (
            <PortfolioGrid items={filteredItems} columns={3} showCategory />
          ) : (
            <div className="text-center py-20">
              <p className="text-foreground-secondary">
                No photos in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 md:py-30 bg-background-secondary">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Like What You See?
          </h2>
          <p className="text-foreground-secondary text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s create something beautiful together. Get in touch to discuss your project.
          </p>
          <a
            href="/contact"
            className="inline-flex px-8 py-4 bg-accent hover:bg-accent-hover text-background font-medium uppercase tracking-wider transition-all duration-300"
          >
            Start a Project
          </a>
        </div>
      </section>
    </>
  );
}
