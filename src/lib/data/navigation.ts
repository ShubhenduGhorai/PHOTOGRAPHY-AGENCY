import { NavItem, SocialLink } from "@/lib/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { name: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { name: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { name: "Pinterest", href: "https://pinterest.com", icon: "pinterest" },
];

export const footerLinks = {
  services: [
    { label: "Wedding Photography", href: "/services#wedding" },
    { label: "Event Photography", href: "/services#event" },
    { label: "Commercial Photography", href: "/services#commercial" },
    { label: "Brand Photography", href: "/services#brand" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
  ],
  support: [
    { label: "Contact", href: "/contact" },
    { label: "FAQs", href: "/contact#faq" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export const contactInfo = {
  address: "Paris 7*****",
  email: "hello@lenscraftstudio.com",
  phone: "+XX 1234567891",
  hours: "Mon - Sat: 9:00 AM - 6:00 PM",
};
