"use client";

import { useState } from "react";
import Image from "next/image";
import { PortfolioItem } from "@/lib/types";

interface PortfolioGridProps {
  items: PortfolioItem[];
  columns?: 2 | 3 | 4;
  showCategory?: boolean;
}

interface LightboxProps {
  items: PortfolioItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

function Lightbox({ items, currentIndex, onClose, onNavigate }: LightboxProps) {
  const item = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-background/98 flex items-center justify-center animate-fade-in"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-foreground-secondary hover:text-foreground p-2"
        onClick={onClose}
        aria-label="Close"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <button
        className="absolute left-4 md:left-8 text-foreground-secondary hover:text-foreground p-2"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex - 1 + items.length) % items.length);
        }}
        aria-label="Previous"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        className="absolute right-4 md:right-8 text-foreground-secondary hover:text-foreground p-2"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex + 1) % items.length);
        }}
        aria-label="Next"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div
        className="max-w-5xl max-h-[85vh] px-16 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[4/3] md:aspect-[16/10]">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="text-center mt-6">
          <h3 className="font-heading text-2xl mb-2">{item.title}</h3>
          <span className="text-accent text-sm uppercase tracking-wider">{item.category}</span>
          {item.description && (
            <p className="text-foreground-secondary mt-2">{item.description}</p>
          )}
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-accent w-8" : "bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function PortfolioGrid({ items, columns = 3, showCategory = false }: PortfolioGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  };

  return (
    <>
      <div className={`grid ${gridCols[columns]} gap-4 md:gap-6`}>
        {items.map((item, index) => (
          <div
            key={item.id}
            className="group cursor-pointer animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => {
              setCurrentIndex(index);
              setLightboxOpen(true);
            }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src={item.thumbnailUrl}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-accent text-background px-4 py-2 text-sm font-medium uppercase tracking-wider">
                  View
                </span>
              </div>
            </div>
            {showCategory && (
              <div className="mt-3">
                <h3 className="font-heading text-lg group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <span className="text-foreground-muted text-sm">{item.category}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          items={items}
          currentIndex={currentIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setCurrentIndex}
        />
      )}
    </>
  );
}
