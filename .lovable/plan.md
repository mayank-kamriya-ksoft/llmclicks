

## Problem

The hero section uses a single-column left-aligned layout (`max-w-2xl`), leaving the entire right half of the screen empty on desktop. The dashboard mockup sits below the fold, making the above-the-fold area feel sparse.

## Solution: Two-Column Hero with Right-Side Visual

Convert the hero to a **two-column grid layout** on desktop, placing the text/CTA on the left and an animated visual element on the right.

### Right-Side Visual: Animated AI Response Preview

Instead of a static image, build a **live animated "AI response" card** showing a simulated LLM conversation about the user's brand. This reinforces the product's value proposition visually.

The right column will contain:
1. **Floating AI chat cards** -- 2-3 stacked cards showing mock LLM responses (e.g., "ChatGPT mentions your brand as #1...", "Perplexity cites your site...") with staggered entrance animations
2. **Animated metric badges** -- Small floating pill badges showing stats like "87% Positive Sentiment", "Cited in 4/5 LLMs" with gentle float animations
3. **LLM provider icons** -- Small animated logos/badges for GPT, Perplexity, Claude, Gemini orbiting or floating around the cards

### Layout Changes

- `HeroSection.tsx`: Change inner container from single `max-w-2xl` div to a `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center` layout
- Left column: existing text, input, badges (keep as-is)
- Right column: new `HeroVisual` component with the animated cards
- `DashboardMockup` stays below as a full-width element (pushed further down but still visible on scroll)

### Technical Details

**New file: `src/components/home/HeroVisual.tsx`**
- 2-3 `motion.div` cards styled as chat bubbles with shimmer effects
- Each card has an LLM icon (text badges like "GPT-4", "Claude", "Perplexity"), a mock response snippet, and a sentiment indicator
- Cards animate in with staggered delays using `framer-motion` variants
- Floating metric pills positioned absolutely with `animate-float` classes
- Subtle parallax via `useScroll`/`useTransform` for depth

**Edit: `src/components/home/HeroSection.tsx`**
- Wrap content in 2-column grid
- Import and render `HeroVisual` in the right column
- Keep mobile layout stacked (single column, visual hidden or shown below text)

