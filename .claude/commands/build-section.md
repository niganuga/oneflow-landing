# /build-section

Build a new section for the One Flow landing page — copy + component together.

## Usage
/build-section [section-name]

## Sections
- `hero` — headline, subheadline, CTA, email capture, visual
- `products` — product cards: PrintReady Flow, MobileRoutes, Flow Kits, Operator OS
- `how-it-works` — 3-step process showing how One Flow works
- `social-proof` — stats, testimonials, logos
- `cta` — final email capture section
- `nav` — top navigation with logo and CTA button
- `footer` — links, socials, legal

## Steps Claude Code follows
1. Use @copy-writer to generate copy for this section
2. Use @frontend-developer to build the React component
3. Place file at: components/sections/[SectionName].tsx
4. Import and add to app/page.tsx
5. Run `npm run dev` to verify it renders
6. Use @code-reviewer to check the component before moving on
