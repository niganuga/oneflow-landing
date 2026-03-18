# Session 6 Output: Analytics, Polish & Deploy

## What Was Built

### Vercel Analytics (`app/layout.tsx`)
- Installed `@vercel/analytics` (v2.0.1)
- `<Analytics />` component added to layout body
- CSP updated: `va.vercel-scripts.com` added to script-src and connect-src

### Vercel Speed Insights (`app/layout.tsx`)
- Installed `@vercel/speed-insights` (v2.0.0)
- `<SpeedInsights />` component added to layout body
- CSP updated: `vitals.vercel-insights.com` added to connect-src

### Error Boundaries
- `app/error.tsx` — Client component, logs to console.error, "Try again" button, dark theme
- `app/global-error.tsx` — Root error boundary with inline styles (CSS may not load), wraps own `<html>/<body>`

### Hero Server Component Refactor (`components/ui/hero-1.tsx`)
- Removed `"use client"` directive — HeroSection is now a Server Component
- Still imports client components (EmailCaptureForm, InfiniteSlider) which retain their own `"use client"` boundaries
- Reduces client JS bundle and improves LCP

### Visual QA
- Tested at 320px (mobile), 768px (tablet), 1440px (desktop) via Playwright
- All sections render correctly at all breakpoints
- /privacy and /terms pages load with correct titles and content
- Zero console errors across all pages
- Vercel Analytics and Speed Insights confirmed active (debug mode logs visible)

### Deploy Check
- **Verdict: SHIP** (0 FAILs, 5 WARNs)
- WARNs (all acceptable for pre-launch):
  1. No `loading.tsx` — static pages don't need them
  2. No cookie consent banner — Vercel Analytics is cookie-less
  3. No Sentry error tracking — error boundaries exist, sufficient for pre-launch
  4. No health check endpoint — Vercel handles uptime monitoring
  5. `RESEND_AUDIENCE_ID` missing from `.env.example` — pre-existing gap from Session 2

## Files Created
- `app/error.tsx`
- `app/global-error.tsx`

## Files Modified
- `app/layout.tsx` (added Analytics + SpeedInsights imports and components)
- `components/ui/hero-1.tsx` (removed `"use client"` directive)
- `vercel.json` (CSP updated for analytics domains)
- `package.json` (2 new dependencies)

## Dependencies Added
- `@vercel/analytics` ^2.0.1
- `@vercel/speed-insights` ^2.0.0

## Verification
- `pnpm build` — passes clean
- `pnpm lint` — no new errors (5 pre-existing in other files)
- Visual QA via Playwright — all breakpoints pass
- Ship checklist — SHIP verdict
