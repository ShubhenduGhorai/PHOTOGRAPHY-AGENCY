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
      className="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl flex items-center justify-center animate-reveal-scale"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-foreground-secondary hover:text-foreground transition-smooth z-10"
        onClick={onClose}
        aria-label="Close"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Navigation arrows */}
      <button
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center text-foreground-secondary hover:text-accent transition-smooth z-10 group"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex - 1 + items.length) % items.length);
        }}
        aria-label="Previous"
      >
        <svg className="w-8 h-8 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center text-foreground-secondary hover:text-accent transition-smooth z-10 group"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex + 1) % items.length);
        }}
        aria-label="Next"
      >
        <svg className="w-8 h-8 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Image container */}
      <div
        key={currentIndex}
        className="max-w-6xl max-h-[80vh] px-16 animate-reveal-scale"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/10] rounded-lg overflow-hidden shadow-2xl">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-contain"
            priority
          />
        </div>
        
        {/* Caption */}
        <div className="text-center mt-8">
          <h3 className="font-serif text-2xl md:text-3xl mb-2">{item.title}</h3>
          <span className="text-accent text-sm uppercase tracking-[0.2em]">{item.category}</span>
          {item.description && (
            <p className="text-foreground-secondary mt-3 max-w-lg mx-auto">{item.description}</p>
          )}
        </div>
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(index);
            }}
            className={`h-0.5 rounded-full transition-all duration-500 ${
              index === currentIndex ? "w-8 bg-accent" : "w-2 bg-foreground/30 hover:bg-foreground/50"
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
      <div className={`grid ${gridCols[columns]} gap-6 md:gap-8`}>
        {items.map((item, index) => (
          <div
            key={item.id}
            className="group cursor-pointer"
            style={{
              animationDelay: `${index * 75}ms`,
            }}
            onClick={() => {
              setCurrentIndex(index);
              setLightboxOpen(true);
            }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm img-zoom">
              <Image
                src={item.thumbnailUrl}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-slow" />
              
              {/* View indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-slow">
                <div className="w-16 h-16 rounded-full border border-accent/50 flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            </div>
            
            {showCategory && (
              <div className="mt-4">
                <h3 className="font-serif text-lg group-hover:text-accent transition-smooth">
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
