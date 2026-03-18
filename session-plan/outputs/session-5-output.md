# Session 5 Output: SEO & Legal

## What Was Built

### OG Image (`app/opengraph-image.tsx`)
- 1200x630px auto-generated via `next/og` ImageResponse
- Dark background (#0a0a0b), "One Flow" branding with teal accent
- Headline: "Run Lean. Win Time. Stay a Team of One."
- Subtext: "Simple automation for small business owners"
- Edge runtime, pure CSS/text layout — no external images

### Twitter Image (`app/twitter-image.tsx`)
- Same design as OG image, optimized for `summary_large_image` Twitter card
- Edge runtime, 1200x630px

### Expanded Metadata (`app/layout.tsx`)
- `metadataBase` using NEXT_PUBLIC_SITE_URL (with protocol normalization)
- `title.template`: `"%s | One Flow"` for child pages
- `title.default`: "One Flow — Run Lean. Win Time. Stay a Team of One."
- `openGraph`: type website, siteName, locale en_US
- `twitter`: card summary_large_image
- `robots`: index + follow for all crawlers
- `keywords`: 6 relevant terms

### Privacy Policy (`app/privacy/page.tsx`)
- Server Component, static page at /privacy
- Plain language covering: data collected (email only), purpose (waitlist), storage (Resend), third parties, cookies, user rights (GDPR/CCPA/LGPD/PIPEDA), unsubscribe methods, children's privacy
- Styled to match site design: dark bg, white text, teal accent on contact email
- Back-to-home link, "Last updated: March 2026"
- Page metadata: "Privacy Policy | One Flow"

### Terms of Service (`app/terms/page.tsx`)
- Server Component, static page at /terms
- Covers: description of service, waitlist signup, IP, accuracy, acceptable use, limitation of liability, third-party links, changes to terms, contact
- Cross-links to Privacy Policy
- Matching design with back-to-home link
- Page metadata: "Terms of Service | One Flow"

### Legal Link on Email Form
- Added "By signing up you agree to our Privacy Policy." below email form
- Link navigates to /privacy
- Added to shared `EmailCaptureForm` so it appears in Hero and CTA sections

### Sitemap Update (`app/sitemap.ts`)
- Added /privacy (monthly, priority 0.3) and /terms (monthly, priority 0.3)
- Uses NEXT_PUBLIC_SITE_URL for base URL (matches metadata pattern)

## Files Created
- `app/opengraph-image.tsx`
- `app/twitter-image.tsx`
- `app/privacy/page.tsx`
- `app/terms/page.tsx`

## Files Modified
- `app/layout.tsx` (full metadata expansion + protocol normalization)
- `app/sitemap.ts` (added /privacy and /terms)
- `components/forms/EmailCaptureForm.tsx` (added privacy link + Link import)

## Verification
- `pnpm build` — passes clean
- `pnpm lint` — no new errors (5 pre-existing errors in other files)
- Build output confirms all routes: /, /privacy, /terms, /opengraph-image, /twitter-image, /sitemap.xml

## Notes
- NEXT_PUBLIC_SITE_URL env var was `getoneflow.com` (no protocol) — added protocol normalization in layout.tsx to handle this gracefully
- OG and Twitter images use edge runtime, which disables static generation for those routes (expected)
- Legal content written in plain language for small business owners, not legalese
