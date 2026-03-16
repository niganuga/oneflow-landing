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
<!-- Pending -->

## After Session 2: Email Capture
<!-- Pending — depends on Session 1 -->

## After Session 3: Content Sections (Wave 1)
<!-- Pending — depends on Session 1 -->

## After Session 4: Content Sections (Wave 2)
<!-- Pending — depends on Sessions 2 + 3 -->

## After Session 5: SEO & Legal
<!-- Pending — depends on Session 4 -->

## After Session 6: Polish & Deploy
<!-- Pending — depends on all previous -->
