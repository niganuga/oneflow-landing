# Session 3: Content Sections — Wave 1 (Products + How It Works)

## Goal
Build the Products and How It Works sections. These are the two sections directly below the hero that explain what One Flow is and how it works.

## Depends On
- Session 1 (infrastructure)

## Read First
- `/Users/makko/Code/oneflow-landing/components/sections/Hero.tsx` (for style patterns, animation variants, design tokens)
- `/Users/makko/Code/oneflow-landing/components/ui/card.tsx` (for product cards)
- `/Users/makko/Code/oneflow-landing/components/ui/badge.tsx`
- `/Users/makko/Code/oneflow-landing/app/page.tsx`

## Do NOT Change
- Hero section
- Existing UI components
- Layout structure

## Tasks

### Task 1: Generate copy for Products section
Use @copy-writer. Context:

Products to feature:
- **PrintReady Flow** — Print management automation. For print shops.
- **MobileRoutes** — Route optimization. For mobile service businesses (detailers, cleaners, etc.)
- **Flow Kits** — Ready-made business automation kits. Low friction entry product.
- **Operator OS** — The full business operating system. Flagship product.

Each product needs: name, one-line description, 2-3 bullet points of value.
Section headline needed. Brand voice rules apply.

### Task 2: Build Products section component
Create `components/sections/Products.tsx`:

- Section with ID `#products` (nav link target)
- Section headline + optional subheadline
- 4 product cards in a responsive grid (1 col mobile, 2 col tablet, 4 col desktop)
- Use Card component from shadcn/ui
- Each card: product name, description, value bullets, "Coming Soon" or "Join Waitlist" badge
- Framer Motion: staggered fade-up on scroll (use `whileInView`, not `animate`)
- Use lucide-react icons for each product
- Server Component if possible (no interactivity needed) — or minimal client boundary

**Verify:** `pnpm build` passes. Visual check at all breakpoints.

### Task 3: Generate copy for How It Works section
Use @copy-writer. 3-step process:

- Step 1: Sign up / pick your tools
- Step 2: Connect your business (setup)
- Step 3: Get time back (results)

Section headline needed. Keep it concrete, not abstract.

### Task 4: Build How It Works section component
Create `components/sections/HowItWorks.tsx`:

- Section with ID `#how-it-works` (nav link target)
- Section headline
- 3-step horizontal layout (stacked on mobile)
- Each step: number, title, description, optional icon
- Visual connector between steps (line or arrow, CSS only)
- Framer Motion: staggered entrance on scroll

**Verify:** `pnpm build` passes. Visual check at all breakpoints.

### Task 5: Add sections to page.tsx
Import and render both sections below the Hero in `app/page.tsx`.

**Verify:** `pnpm dev` — scroll down from hero, both sections visible.

## Expected Output
- Creates 2 files: `components/sections/Products.tsx`, `components/sections/HowItWorks.tsx`
- Modifies 1 file: `app/page.tsx`

## Commit Message
```
feat: add Products and How It Works sections
```

## Add to context.md
```markdown
## After Session 3: Content Sections (Wave 1)
- Products section at `components/sections/Products.tsx` — 4 product cards
- How It Works at `components/sections/HowItWorks.tsx` — 3-step process
- Both added to page.tsx below Hero
- Nav links #products and #how-it-works now have targets
```
