# Session 1: Infrastructure & Fixes

## Goal
Fix all deploy-check WARNs that don't require new sections to exist. Establish the foundation everything else builds on.

## Read First
- `/Users/makko/Code/oneflow-landing/app/layout.tsx`
- `/Users/makko/Code/oneflow-landing/app/page.tsx`
- `/Users/makko/Code/oneflow-landing/components/sections/Hero.tsx`
- `/Users/makko/Code/oneflow-landing/vercel.json`
- `/Users/makko/Code/oneflow-landing/package.json`
- `/Users/makko/Code/oneflow-landing/.env.example`

## Do NOT Change
- Hero copy (headline, subheadline, CTA, badge text)
- Hero layout/structure
- Existing shadcn/ui components

## Tasks

### Task 1: Replace default metadata in layout.tsx
Replace the "Create Next App" title and description with real One Flow metadata.

```ts
export const metadata: Metadata = {
  title: "One Flow — Run Lean. Win Time. Stay a Team of One.",
  description: "Simple automation tools for small business owners, solopreneurs, and side hustlers. One Flow gives you your time back. From day one.",
}
```

**Verify:** `pnpm build` — check no errors. Open browser tab and confirm title shows correctly.

### Task 2: Create env validation module
Create `lib/env.ts` using Zod to validate all env vars at startup.

- Validate `RESEND_API_KEY` (server-side, required in production, optional in dev)
- Validate `NEXT_PUBLIC_SITE_URL` (required)
- Export typed `env` object
- Import and use in any file that needs env vars (not `process.env` directly)

Install zod: `pnpm add zod`

**Verify:** `pnpm build` passes. Import `env` in a test file and confirm types.

### Task 3: Add console.error to Hero catch block
In `Hero.tsx` line 110-111, the `catch` block sets `hasError` but swallows the error. Add `console.error`.

```ts
catch (err: unknown) {
  console.error("[waitlist] submission failed:", err)
  setHasError(true)
}
```

**Verify:** `pnpm build` passes.

### Task 4: Fix touch target sizes
In `Hero.tsx`, bump email Input and Button from `h-10` (40px) to `h-11` (44px) for WCAG 2.5.5 compliance.

**Verify:** Visual check on mobile viewport in dev tools.

### Task 5: Add Content Security Policy header
Add a CSP header to `vercel.json`. Keep it permissive enough for Framer Motion, Google Fonts (via next/font), and inline styles from Tailwind.

```json
{
  "key": "Content-Security-Policy",
  "value": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self' https://*.resend.com"
}
```

**Verify:** `pnpm dev` — open browser console, confirm no CSP violations.

### Task 6: Add robots.txt and sitemap.xml
Create `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://oneflow.com/sitemap.xml
```

Create `app/sitemap.ts` using Next.js built-in sitemap generation:
```ts
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://oneflow.com", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
  ]
}
```

**Verify:** `pnpm build` passes. Check `.next/server/app/sitemap.xml` exists.

## Expected Output
- Modifies 3 files: `layout.tsx`, `Hero.tsx`, `vercel.json`
- Creates 3 files: `lib/env.ts`, `public/robots.txt`, `app/sitemap.ts`
- Installs 1 dependency: `zod`

## Commit Message
```
feat: infrastructure fixes — metadata, env validation, CSP, robots.txt, touch targets
```

## After This Session

Save build summary to `outputs/session-1-output.md`.

### Add to context.md
```markdown
## After Session 1: Infrastructure & Fixes
- Metadata set in layout.tsx: "One Flow — Run Lean. Win Time. Stay a Team of One."
- Env validation: `lib/env.ts` exports typed `env` object (use instead of process.env)
- CSP header added to vercel.json
- robots.txt and sitemap.ts created
- Touch targets bumped to h-11 (44px)
- Zod added as dependency
```
