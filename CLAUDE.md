# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 portfolio website for "Marcia Nath Arquitetura" - an architecture and interior design firm. The site is built with TypeScript, React 19, and uses the App Router with a single-page application (SPA) structure featuring smooth scroll animations.

## Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## Architecture

### Framework & Routing
- **Next.js 14** with App Router
- Single-page application structure with hash-based anchor navigation (`#trabalhos`, `#sobre`, `#contato`)
- All components are client-side rendered (`"use client"` directive)
- TypeScript strict mode enabled
- Images are unoptimized (`next.config.mjs:7`)
- TypeScript build errors are ignored in production (`next.config.mjs:4`)

### UI Component System
The project uses **shadcn/ui** with extensive Radix UI primitives:
- Configuration in `components.json` uses "new-york" style
- Path aliases configured: `@/components`, `@/lib`, `@/hooks`, `@/ui`
- Components are in `components/ui/` directory
- Styling with Tailwind CSS 4.1.9 and custom CSS variables

### Styling Architecture
- **Design tokens** defined in `app/globals.css` using OKLCH color space
- Minimalist off-white/beige and gray palette
- Dark mode support (though not actively used in components)
- Custom CSS variables for colors: `--background`, `--foreground`, `--accent`, etc.
- Three Google Fonts configured in `app/layout.tsx:8-25`:
  - Inter (primary sans-serif)
  - JetBrains Mono (monospace)
  - Montserrat (signature font, weight 300)

### Page Structure
The homepage (`app/page.tsx`) is composed of five main sections rendered in sequence:
1. `Navigation` - Fixed header with logo and navigation links
2. `HeroSection` - Full-screen hero with text and floating sketch image
3. `ProjectGrid` - 6 projects in a 3-column grid with lightbox functionality
4. `AboutSection` - Information about the firm
5. `ContactSection` - Contact form/information
6. Footer - Logo and copyright

### Animation System
Two custom hooks in `hooks/use-scroll-animation.tsx`:

1. **`useScrollAnimation`** - Intersection Observer-based visibility detection
   - Used for fade-in effects when elements enter viewport
   - Options: `threshold`, `rootMargin`, `triggerOnce`
   - Returns: `{ ref, isVisible }`

2. **`useStaggeredAnimation`** - Sequential item animations
   - Used in `ProjectGrid` to animate cards one after another
   - Takes `itemCount` and `delay` (default 150ms)
   - Returns: `{ ref, visibleItems }` array

### Component Details

**Navigation** (`components/navigation.tsx`)
- Fixed position with backdrop blur
- Responsive with mobile hamburger menu
- Logo image: `/marcia-nath-logo.png`

**HeroSection** (`components/hero-section.tsx`)
- Two-column layout (text + image)
- Staggered entrance animations with increasing delays (0ms, 300ms, 500ms, 700ms)
- Hero sketch image: `/hero-sketch.png`
- Call-to-action buttons (non-functional)

**ProjectGrid** (`components/project-grid.tsx`)
- Hardcoded array of 6 projects with images from `/public/`
- Lightbox modal with keyboard navigation (Escape, Arrow keys)
- Previous/Next navigation within lightbox
- Grid: 1 column mobile, 2 tablet, 3 desktop

## Key Technical Patterns

### Image Handling
- Uses Next.js `Image` component with `priority` flag for above-fold images
- Most project images use standard `<img>` tags
- Images stored in `/public/` directory (22 files including logos and project photos)

### Form Validation
- React Hook Form with Zod resolvers available (but not yet implemented in visible components)
- `@hookform/resolvers` + `zod` dependencies installed

### State Management
- Local React state (`useState`) for UI interactions
- No global state management library

### Analytics
- Vercel Analytics integrated in root layout (`app/layout.tsx:42`)

## Important Constraints

1. **TypeScript errors are ignored in build** - The `next.config.mjs` has `ignoreBuildErrors: true`, so type safety is not enforced at build time
2. **No git repository** - This directory is not initialized as a git repo
3. **Client-side only** - All page components use `"use client"`, no server components utilized
4. **Hash navigation** - Uses anchor links (`#trabalhos`) rather than Next.js routing

## Path Aliases

All imports use the `@/*` alias pattern:
- `@/components` → `/components`
- `@/lib` → `/lib`
- `@/hooks` → `/hooks`
- `@/components/ui` → `/components/ui`
