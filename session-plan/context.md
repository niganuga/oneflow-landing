# One Flow Landing Page — Session Context

## Project State (as of 2026-03-15)

### What Exists
- Next.js 16 + TypeScript strict + Tailwind v4 + Framer Motion + shadcn/ui + Resend
- `app/page.tsx` — renders HeroSection only
- `app/layout.tsx` — Geist font, DEFAULT metadata (needs replacing)
- `components/sections/Hero.tsx` — full hero with nav, headline, email capture form (stub)
- `components/ui/` — button, input, badge, card
- `lib/utils.ts` — cn() utility
- `vercel.json` — security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy)
- `.env.example` — RESEND_API_KEY, NEXT_PUBLIC_SITE_URL
- `public/` — only default Next.js SVGs (file, next, vercel, window, globe)

### What's Missing (from deploy check)
**FAILs:** metadata, OG image, privacy policy, error tracking + analytics
**WARNs:** email endpoint stub, no CSP header, no env validation, hero is all client-side, touch targets 40px not 44px, catch block swallows errors, no robots.txt/sitemap

### Remaining Sections to Build
- Products section (PrintReady Flow, MobileRoutes, Flow Kits, Operator OS)
- How It Works section (3-step process)
- Social Proof section (stats, testimonials)
- CTA section (final email capture)
- Footer (links, socials, legal)

### Brand
- Mission: "We build simple, powerful tools for the everyday business owner"
- Tagline: "Simplicity and Time Back"
- Audience: small business owners, solopreneurs, side hustlers
- Hero copy: "Run Lean. Win Time. Stay a Team of One."

---

## After Session 1: Infrastructure & Fixes
- Metadata set in layout.tsx: "One Flow — Run Lean. Win Time. Stay a Team of One."
- Env validation: `lib/env.ts` exports typed `env` object (use instead of process.env)
- CSP header added to vercel.json
- robots.txt and sitemap.ts created
- Touch targets bumped to h-11 (44px)
- console.error added to Hero catch block (fixed in post-audit patch)
- Zod added as dependency

## After Session 2: Email Capture
- Server Action at `app/actions/waitlist.ts` — validates email, calls Resend
- Hero form connected to real endpoint (replaced setTimeout stub)
- Env vars needed: RESEND_API_KEY, RESEND_AUDIENCE_ID, NEXT_PUBLIC_SITE_URL
- Rate limiting: basic in-memory IP-based (5 req/60s) for MVP

## After Session 3: Content Sections (Wave 1)

- Products section at `components/sections/Products.tsx` — 4 product cards
- How It Works at `components/sections/HowItWorks.tsx` — 3-step process
- Both added to page.tsx below Hero
- Nav links #products and #how-it-works now have targets

## After Session 4: Content Sections (Wave 2)
- Social Proof at `components/sections/SocialProof.tsx` — stats + testimonials with scroll animations
- CTA at `components/sections/CallToAction.tsx` — reuses extracted EmailCaptureForm
- Footer at `components/sections/Footer.tsx` — Server Component, links to /privacy, /terms
- EmailCaptureForm extracted to `components/forms/EmailCaptureForm.tsx` (real server action)
- `hero-1.tsx` updated to import from shared form component (mock replaced)
- Full page scroll complete: Hero → AudienceTicker → Products → How It Works → Social Proof → CTA → Footer
- `sections/Hero.tsx` still exists but is unused — candidate for cleanup

## After Session 5: SEO & Legal

- OG image: `app/opengraph-image.tsx` (auto-generated, 1200x630)
- Twitter image: `app/twitter-image.tsx`
- Full metadata in layout.tsx with openGraph and twitter configs
- Privacy Policy at /privacy
- Terms of Service at /terms
- Legal consent link added near email form
- Sitemap updated with all pages

## After Session 6: Polish & Deploy
<!-- Pending — depends on all previous -->
