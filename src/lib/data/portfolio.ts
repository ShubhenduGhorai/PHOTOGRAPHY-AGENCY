import { PortfolioItem } from "@/lib/types";

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Golden Hour Wedding",
    category: "Wedding",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    description: "A beautiful sunset wedding ceremony captured in golden hour light.",
  },
  {
    id: "2",
    title: "Urban Fashion Editorial",
    category: "Fashion",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    description: "High fashion editorial shoot in urban settings.",
  },
  {
    id: "3",
    title: "Santorini Dreams",
    category: "Travel",
    imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80",
    description: "Breathtaking views of Santorini's iconic blue domes.",
  },
  {
    id: "4",
    title: "Luxury Watch Campaign",
    category: "Product",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    description: "Premium watch photography for luxury brand campaign.",
  },
  {
    id: "5",
    title: "Intimate Moments",
    category: "Wedding",
    imageUrl: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80",
    description: "Capturing the tender moments between newlyweds.",
  },
  {
    id: "6",
    title: "Street Style Collection",
    category: "Fashion",
    imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
    description: "Contemporary street fashion photography.",
  },
  {
    id: "7",
    title: "Alpine Adventure",
    category: "Travel",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    description: "Stunning mountain landscapes in the Swiss Alps.",
  },
  {
    id: "8",
    title: "Perfume Bottle Art",
    category: "Product",
    imageUrl: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80",
    description: "Elegant perfume bottle product photography.",
  },
  {
    id: "9",
    title: "Vineyard Wedding",
    category: "Wedding",
    imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80",
    description: "Romantic wedding in a Tuscan vineyard setting.",
  },
  {
    id: "10",
    title: "Haute Couture Show",
    category: "Fashion",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    description: "Backstage and runway moments from Paris Fashion Week.",
  },
  {
    id: "11",
    title: "Tokyo Nights",
    category: "Travel",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80",
    description: "Neon-lit streets of Tokyo at night.",
  },
  {
    id: "12",
    title: "Jewelry Collection",
    category: "Product",
    imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
    description: "Exquisite jewelry pieces captured in studio lighting.",
  },
];

export const categories = ["All", "Wedding", "Fashion", "Travel", "Product"] as const;
export type Category = (typeof categories)[number];

export const heroImages = [
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80",
  "https://images.unsplash.com/photo-1520483691742-bdea60be3c3e?w=1920&q=80",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
];

export const featuredPortfolio = portfolioItems.slice(0, 6);
