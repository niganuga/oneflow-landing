# Session 5: SEO & Legal

## Goal
Add OG image, privacy policy, terms of service, and full SEO metadata. Fixes the remaining FAIL items from deploy check.

## Depends On
- Session 4 (footer with legal links must exist, all sections must exist for OG image context)

## Read First
- `/Users/makko/Code/oneflow-landing/app/layout.tsx`
- `/Users/makko/Code/oneflow-landing/app/sitemap.ts` (from Session 1)
- `/Users/makko/Code/oneflow-landing/components/sections/Footer.tsx` (from Session 4)
- `/Users/makko/Code/oneflow-landing/public/robots.txt` (from Session 1)

## Do NOT Change
- Any section component content
- Email capture functionality

## Tasks

### Task 1: Create OG image
Create `app/opengraph-image.tsx` using Next.js built-in OG image generation (next/og ImageResponse):

- 1200x630px
- "One Flow" branding
- Headline: "Run Lean. Win Time. Stay a Team of One."
- Subtext: "Simple automation for small business owners"
- Dark background, clean typography using Geist font
- No external images — pure CSS/text layout

Also create `app/twitter-image.tsx` (same approach, optimized for Twitter card).

**Verify:** `pnpm build` passes. Check `.next/server/app/opengraph-image` exists.

### Task 2: Expand metadata in layout.tsx
Update the metadata export with full SEO coverage:

- `title.template` and `title.default`
- `description`
- `metadataBase` using NEXT_PUBLIC_SITE_URL
- `openGraph` config (type, siteName, locale)
- `twitter` config (card: "summary_large_image")
- `robots` config
- `keywords` (optional, low SEO value but doesn't hurt)

Use @seo-setup agent for best practices.

**Verify:** `pnpm build` passes. View source in dev to confirm meta tags render.

### Task 3: Create Privacy Policy page
Create `app/privacy/page.tsx`:

Use @legal-advisor agent for content.

- Covers: what data is collected (email), why (waitlist), how it's stored (Resend), how to unsubscribe, contact info
- Plain, readable language — not legalese
- Server Component (static page)
- Minimal styling matching site design

**Verify:** `pnpm dev` — navigate to /privacy, page renders.

### Task 4: Create Terms of Service page
Create `app/terms/page.tsx`:

Use @legal-advisor agent for content.

- Basic terms for a pre-launch landing page
- Server Component
- Matching styling

**Verify:** `pnpm dev` — navigate to /terms, page renders.

### Task 5: Add legal link to email form
Add a small text line near the email capture form (in the shared EmailCaptureForm or adjacent to it):
"By signing up you agree to our [Privacy Policy](/privacy)."

**Verify:** Link works and navigates correctly.

### Task 6: Update sitemap
Update `app/sitemap.ts` to include /privacy and /terms pages.

**Verify:** `pnpm build` — check sitemap output includes all 3 URLs.

## Expected Output
- Creates 4 files: `app/opengraph-image.tsx`, `app/twitter-image.tsx`, `app/privacy/page.tsx`, `app/terms/page.tsx`
- Modifies 3 files: `app/layout.tsx`, `app/sitemap.ts`, email form component (legal link)

## Commit Message
```
feat: add OG image, SEO metadata, privacy policy, and terms of service
```

## Add to context.md
```markdown
## After Session 5: SEO & Legal
- OG image: `app/opengraph-image.tsx` (auto-generated, 1200x630)
- Twitter image: `app/twitter-image.tsx`
- Full metadata in layout.tsx with openGraph and twitter configs
- Privacy Policy at /privacy
- Terms of Service at /terms
- Legal consent link added near email form
- Sitemap updated with all pages
```
