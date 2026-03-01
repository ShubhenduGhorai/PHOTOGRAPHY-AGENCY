# LensCraft Studio - Photography Agency Website

## 1. Project Overview

**Project Name:** LensCraft Studio  
**Type:** Photography Agency Website (Next.js 14 App Router)  
**Core Functionality:** A premium, dark-themed photography portfolio showcasing wedding, fashion, travel, and product photography with booking capabilities  
**Target Users:** Couples, brands, businesses, and individuals seeking professional photography services

---

## 2. UI/UX Specification

### Layout Structure

**Global Layout:**
- Sticky navbar (height: 80px desktop, 64px mobile)
- Main content area with 1200px max-width container
- Footer with social links and contact info
- Smooth scroll behavior

**Responsive Breakpoints:**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Visual Design

**Color Palette:**
```css
--background: #0f0f0f
--background-secondary: #1a1a1a
--background-tertiary: #252525
--foreground: #ffffff
--foreground-secondary: #a3a3a3
--foreground-muted: #737373
--accent: #d4af37 (gold)
--accent-hover: #b8962e
--border: #333333
--glass: rgba(255, 255, 255, 0.05)
```

**Typography:**
- Headings: "Playfair Display", serif (h1: 72px, h2: 48px, h3: 32px)
- Body: "Inter", sans-serif (16px base, line-height: 1.6)
- Accent text: "Cormorant Garamond", serif

**Spacing System:**
- Section padding: 120px vertical (desktop), 80px (mobile)
- Container padding: 24px
- Grid gap: 24px (desktop), 16px (mobile)

**Visual Effects:**
- Glassmorphism cards: backdrop-blur(12px), bg-opacity-5
- Hover zoom: scale(1.05) over 0.4s ease
- Fade-in animations: opacity 0-1 over 0.6s
- Smooth transitions: all 0.3s ease

### Components

1. **Navbar**
   - Logo (left), Navigation links (center), CTA button (right)
   - Mobile: Hamburger menu with slide-in drawer
   - Scroll effect: background becomes solid on scroll

2. **Hero Section**
   - Fullscreen background slideshow (5 images)
   - Overlay gradient for text readability
   - Animated headline and subtitle
   - Two CTA buttons

3. **Portfolio Grid**
   - Masonry layout (3 columns desktop, 2 tablet, 1 mobile)
   - Category filter tabs
   - Lightbox modal on click
   - Lazy loading with skeleton

4. **Service Cards**
   - Icon, title, description, price
   - Hover: lift effect with shadow
   - Three pricing tiers layout

5. **Contact Form**
   - Floating labels
   - Validation states (error/success)
   - Submit button with loading state

6. **Footer**
   - 4-column layout (desktop), stacked (mobile)
   - Social media icons
   - Quick links
   - Newsletter signup

---

## 3. Functionality Specification

### Core Features

**Home Page:**
- Hero slideshow with Ken Burns effect
- Featured portfolio (6 images)
- Services preview (4 services)
- Testimonials carousel
- Instagram-style gallery
- CTA section

**Portfolio Page:**
- Category filtering (Wedding, Fashion, Travel, Product)
- Masonry grid with 12 images
- Lightbox modal with navigation
- Infinite scroll or load more

**About Page:**
- Founder story with image
- Mission statement
- Timeline (4-5 milestones)
- Team section (4 members)

**Services Page:**
- 4 main services with details
- 3 pricing tiers per service
- Feature comparison table
- FAQ accordion

**Contact Page:**
- Contact form with validation
- Phone, email, address info
- Google Map embed
- WhatsApp floating button

**Blog Page:**
- Blog listing with featured image
- Individual blog posts
- Category tags

### User Interactions

- Smooth scroll to sections
- Navbar scroll effect
- Mobile menu toggle
- Portfolio filter by category
- Lightbox open/close/navigate
- Form validation on blur and submit
- Button hover effects
- Image hover zoom

### Data Handling

- Static data files for portfolio, services, team, testimonials
- Form submission to API route (placeholder)
- Client-side form validation

### Edge Cases

- Empty portfolio category
- Form submission errors
- Image load failures (fallback)
- Mobile menu state management

---

## 4. Acceptance Criteria

### Visual Checkpoints

- [ ] Dark theme (#0f0f0f background) applied consistently
- [ ] Typography uses Playfair Display for headings, Inter for body
- [ ] All sections have proper spacing (120px desktop)
- [ ] Responsive layout works on mobile, tablet, desktop
- [ ] Animations are smooth (fade-in, hover effects)
- [ ] Glassmorphism cards visible on services section

### Functional Checkpoints

- [ ] Navigation links work correctly
- [ ] Mobile menu opens/closes properly
- [ ] Portfolio filters work
- [ ] Lightbox opens and navigates
- [ ] Contact form validates inputs
- [ ] Form shows success/error states
- [ ] All pages render without errors

### Performance Checkpoints

- [ ] Images use next/image optimization
- [ ] No layout shift on load
- [ ] Build completes without errors
- [ ] No TypeScript errors

### SEO Checkpoints

- [ ] Metadata configured for all pages
- [ ] Open Graph tags present
- [ ] Semantic HTML structure
- [ ] robots.txt and sitemap.xml present
