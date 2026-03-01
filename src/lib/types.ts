export interface PortfolioItem {
  id: string;
  title: string;
  category: "Wedding" | "Fashion" | "Travel" | "Product";
  imageUrl: string;
  thumbnailUrl: string;
  description?: string;
}

export type Category = "All" | "Wedding" | "Fashion" | "Travel" | "Product";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  pricing: PricingTier[];
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  imageUrl: string;
  content: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}
