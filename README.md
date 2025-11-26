# 🎥 Daniekeys Studios - Premium Video-Driven Website

A world-class, cinematic website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features full-screen video backgrounds, premium black-and-white minimalism, and elegant motion design.

## 🎨 Brand Guidelines

### Colors

- **Primary**: `#111111` (Deep Black)
- **Secondary**: `#818181` (Charcoal Grey)
- **Primary White**: `#F9F9F9` (Off White)
- **Off White**: `#F0F0F0` (Light Grey)
- **Accent Blues**:
  - `#2B6BFF` (Primary Blue)
  - `#5F8EFB` (Light Blue)
  - `#9DBAFF` (Lighter Blue)

### Typography

- **Font Family**: Neue Montreal
- **Weights**: Light (300), Regular (400), Medium (500), Semibold (600), Bold (700)
- **Usage**: Bold for headings, Light/Regular for body text

## 🏛 Website Structure

### 1. Hero Section (`HeroSection.tsx`)

- Full-screen cinematic video background
- Large headline with fade-in animation
- Two CTAs: "Work With Us" and "Watch Showreel"
- Parallax scroll indicator

### 2. Mini Showreel Strip (`ShowreelStrip.tsx`)

- Horizontal scrolling grid of video clips
- Auto-play on viewport entry
- Categories: Motion Graphics, Branding, Web Development, Digital Campaigns
- Hover effects and smooth animations

### 3. About Section (`AboutSection.tsx`)

- Two-column layout with studio BTS video
- Company stats with animated counters
- Premium spacing and typography
- Decorative accent elements

### 4. Services Section (`ServicesSection.tsx`)

- Full-height sections with video backgrounds
- Four main services with alternating layouts
- Service features lists
- Hover animations and video effects

### 5. Portfolio Section (`PortfolioSection.tsx`)

- Masonry grid layout
- Video preview on hover
- Category filtering
- Project metadata overlays

### 6. Process Section (`ProcessSection.tsx`)

- Four-step methodology visualization
- Video overlay backgrounds
- Animated step indicators
- Feature lists and icons

### 7. Weekly Content Section (`WeeklyContentSection.tsx`)

- Grid layout of content types
- Vertical video previews
- Newsletter subscription
- View statistics

### 8. Testimonials Section (`TestimonialsSection.tsx`)

- Client testimonial cards
- Star ratings and quotes
- Avatar placeholders
- Animated decorative elements

### 9. CTA Section (`CTASection.tsx`)

- Full-width video underlay
- Large call-to-action
- Contact information grid
- Atmospheric background effects

### 10. Footer (`Footer.tsx`)

- Comprehensive site navigation
- Contact details and social links
- Service listings
- Legal links

### 11. Navigation (`Navigation.tsx`)

- Fixed header with scroll effects
- Mobile-responsive menu
- Smooth scroll anchors
- Backdrop blur effects

## 🎬 Video Integration

### Video Files Required

All video files should be placed in `/public/videos/`:

- `hero-video.mp4` - Main hero background
- `studio-bts.mp4` - Behind-the-scenes footage
- `motion-service.mp4` - Motion graphics showcase
- `website-service.mp4` - Web development showcase
- `branding-service.mp4` - Branding work showcase
- `marketing-service.mp4` - Marketing campaigns showcase
- `motion1.mp4`, `branding1.mp4`, `website1.mp4`, `ads1.mp4` - Showreel clips
- `work1.mp4`, `work2.mp4`, `work3.mp4` - Portfolio previews
- `mg-weekly.mp4`, `review-weekly.mp4`, `brand-weekly.mp4`, `marketing-weekly.mp4` - Content samples
- `community.mp4` - Community/CTA background

### Video Specifications

- **Format**: MP4 (H.264)
- **Quality**: 1080p minimum
- **Duration**: 6-15 seconds for loops, 30-60s for hero
- **Optimization**: Web-optimized compression
- **Autoplay**: Muted for browser compatibility

## 🖼 Image Assets

### Required Images

Place in `/public/images/`:

- `daniekeys-favicon.png` - Site favicon
- `daniekeys-og.png` - Social sharing image
- `hero-poster.jpg` - Video poster/fallback
- `work-1.jpg` to `work-6.jpg` - Portfolio thumbnails
- `testimonial-1.jpg` to `testimonial-4.jpg` - Client avatars

## 🛠 Technical Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Font**: Neue Montreal (loaded locally)

## 🎯 Key Features

### Performance Optimizations

- Intersection Observer for video autoplay
- Lazy loading for images and videos
- Optimized Tailwind CSS
- Web-optimized video compression

### Animations & Interactions

- Smooth scroll behavior
- Fade-up text reveals
- Hover zoom effects
- Parallax elements
- Masonry grid layouts
- Horizontal scroll containers

### Responsive Design

- Mobile-first approach
- Breakpoint-specific layouts
- Touch-optimized interactions
- Responsive typography scales

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
