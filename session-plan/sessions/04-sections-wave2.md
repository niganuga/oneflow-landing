# Session 4: Content Sections — Wave 2 (Social Proof + CTA + Footer)

## Goal
Build the remaining page sections: social proof, final CTA, and footer. These complete the full landing page scroll.

## Depends On
- Session 2 (email capture — CTA section reuses the email form)
- Session 3 (Products + How It Works should exist for page flow)

## Read First
- `/Users/makko/Code/oneflow-landing/components/sections/Hero.tsx` (style patterns, EmailCaptureForm)
- `/Users/makko/Code/oneflow-landing/components/sections/Products.tsx` (from Session 3)
- `/Users/makko/Code/oneflow-landing/components/sections/HowItWorks.tsx` (from Session 3)
- `/Users/makko/Code/oneflow-landing/app/page.tsx`

## Do NOT Change
- Hero, Products, or How It Works sections
- EmailCaptureForm internals (reuse it, don't rewrite)

## Tasks

### Task 1: Build Social Proof section
Create `components/sections/SocialProof.tsx`:

Use @copy-writer for stats and testimonial copy.

- Section headline (e.g., "Operators are already getting time back")
- 3-4 stat counters (e.g., "10+ hours saved/week", "500+ founding members", "3 min avg setup")
- 2-3 testimonial quotes with name, role, business type (can be placeholder/aspirational for pre-launch)
- Framer Motion: counter animation on scroll, fade-in testimonials
- Responsive: stats in a row on desktop, stacked on mobile

**Note:** For pre-launch, stats can be aspirational/target metrics with a qualifier like "target" or "beta results". Don't fabricate testimonials as real — label them as "What we're building toward" or use founding member feedback if available.

**Verify:** `pnpm build` passes.

### Task 2: Build CTA section
Create `components/sections/CallToAction.tsx`:

Use @copy-writer for the final push copy.

- Full-width section with distinct background (subtle contrast from rest of page)
- Headline: final conversion push, different angle than hero
- Subheadline: reinforce the "time back" promise
- Reuse `EmailCaptureForm` from Hero.tsx — extract it to `components/forms/EmailCaptureForm.tsx` first so both sections can import it
- Trust line under form

**Important:** When extracting EmailCaptureForm, keep `"use client"` on the form file and consider removing it from Hero.tsx if the remaining Hero content can be a Server Component.

**Verify:** `pnpm build` passes. Both hero and CTA forms work independently.

### Task 3: Build Footer
Create `components/sections/Footer.tsx`:

- Company info: "One Flow" + one-line mission
- Nav columns: Products, Company (About, Blog placeholder), Legal (Privacy Policy, Terms — link to /privacy, /terms)
- Social links: placeholder hrefs for Twitter/X, LinkedIn
- Copyright line: "(c) 2026 One Flow. All rights reserved."
- Minimal, editorial design matching the hero's horizontal-rule aesthetic
- Server Component (no interactivity needed)

**Verify:** `pnpm build` passes.

### Task 4: Add all sections to page.tsx
Update `app/page.tsx` with full page order:
1. Hero
2. Products
3. How It Works
4. Social Proof
5. CTA
6. Footer

**Verify:** `pnpm dev` — full page scroll works. All nav links scroll to correct sections.

## Expected Output
- Creates 3 files: `components/sections/SocialProof.tsx`, `components/sections/CallToAction.tsx`, `components/sections/Footer.tsx`
- Creates 1 file: `components/forms/EmailCaptureForm.tsx` (extracted from Hero)
- Modifies 2 files: `Hero.tsx` (imports extracted form), `app/page.tsx`

## Commit Message
```
feat: add Social Proof, CTA, and Footer sections — complete page
```

## Add to context.md
```markdown
## After Session 4: Content Sections (Wave 2)
- Social Proof at `components/sections/SocialProof.tsx`
- CTA at `components/sections/CallToAction.tsx` — reuses extracted EmailCaptureForm
- Footer at `components/sections/Footer.tsx` — links to /privacy, /terms
- EmailCaptureForm extracted to `components/forms/EmailCaptureForm.tsx`
- Hero.tsx updated to import from shared form component
- Full page scroll complete: Hero → Products → How It Works → Social Proof → CTA → Footer
```
