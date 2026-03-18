# Session 6: Analytics, Polish & Deploy

## Goal
Add error tracking and analytics (last FAIL item), polish the full page, and pass a final deploy check. Ship it.

## Depends On
- All previous sessions (1-5)

## Read First
- `/Users/makko/Code/oneflow-landing/app/layout.tsx`
- `/Users/makko/Code/oneflow-landing/app/page.tsx`
- `/Users/makko/Code/oneflow-landing/package.json`
- `/Users/makko/Code/oneflow-landing/vercel.json`
- All components in `components/sections/`

## Do NOT Change
- Copy content (unless fixing typos)
- Core component structure

## Tasks

### Task 1: Add Vercel Analytics
Install `@vercel/analytics`:
```bash
pnpm add @vercel/analytics
```

Add `<Analytics />` to `app/layout.tsx` body.

**Verify:** `pnpm build` passes. Analytics component renders in dev (check network tab for analytics script).

### Task 2: Add Vercel Speed Insights
Install `@vercel/speed-insights`:
```bash
pnpm add @vercel/speed-insights
```

Add `<SpeedInsights />` to `app/layout.tsx` body.

**Verify:** `pnpm build` passes.

### Task 3: Add basic error tracking
For MVP, use Vercel's built-in error reporting. If more granular tracking is needed later, add Sentry.

Create `app/error.tsx` (App Router error boundary):
- Client component
- Displays user-friendly error message
- Logs error to console.error
- "Try again" button

Create `app/global-error.tsx` (root error boundary):
- Catches errors in layout
- Minimal fallback UI

**Verify:** `pnpm build` passes.

### Task 4: Hero Server Component refactor
If EmailCaptureForm was extracted to a shared component in Session 4:
- Remove `"use client"` from Hero.tsx if no other client state remains (mobile menu still needs it)
- If mobile menu is the only client state, consider extracting `MobileNav` to its own client component and making Hero a Server Component

This reduces client JS bundle and improves LCP.

**Verify:** `pnpm build` passes. Page still works correctly.

### Task 5: Full-page visual QA
Run `pnpm dev` and check:
- [ ] Hero renders correctly at 320px, 768px, 1024px, 1440px
- [ ] All sections visible and styled
- [ ] Nav links scroll to correct sections
- [ ] Mobile menu opens/closes
- [ ] Email form submits (if RESEND_API_KEY is set)
- [ ] Email form shows error state on failure
- [ ] Footer links to /privacy and /terms work
- [ ] No console errors
- [ ] No layout shift on load

### Task 6: Run final deploy check
Run `/deploy-check` — must get SHIP verdict.

If any FAILs remain, fix them in this session.
If only WARNs remain (< 3), document them and ship.

### Task 7: Create feature branch and commit
```bash
git checkout -b feat/landing-page
git add -A
git commit -m "feat: complete One Flow landing page — hero, products, how-it-works, social proof, CTA, footer, SEO, legal, analytics"
```

Push and create PR if ready.

## Expected Output
- Installs 2 dependencies: `@vercel/analytics`, `@vercel/speed-insights`
- Creates 2 files: `app/error.tsx`, `app/global-error.tsx`
- Modifies 2 files: `app/layout.tsx`, possibly `Hero.tsx`
- Deploy check: SHIP verdict

## Commit Message
```
feat: add analytics, error boundaries, and polish for production deploy
```

## After This Session

Save build summary to `outputs/session-6-output.md`.

### Add to context.md
```markdown
## After Session 6: Polish & Deploy
- Vercel Analytics and Speed Insights added
- Error boundaries: app/error.tsx, app/global-error.tsx
- Hero refactored (if applicable) for smaller client bundle
- Full visual QA completed
- Deploy check: SHIP
- Ready for Vercel production deploy
```
