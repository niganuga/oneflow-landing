# One Flow

## Mission
Be the operating system for the everyday business owner. Simple tools, real automation, immediate value — so the person doing everything alone can finally punch above their weight.
Tagline: "Simplicity and Time Back"

## Project
Marketing landing page → email signups → product/app trials.
Stack: Next.js 15, TypeScript (strict), Tailwind CSS, Framer Motion, shadcn/ui, Resend, Vercel.
Site: oneflow.com

## Target Audience
small business owners, soloprenuers and side hustlers

## Design Direction
- Aesthetic: Bold, editorial, brand-specific. NOT generic purple gradient SaaS.
- Tone: Direct, clear, written for small business owners, soloprenuers and side hustlers.
- Feel: Built by someone who understands the problem firsthand.

## Agents

| Agent | When to use |
|---|---|
| `@frontend-developer` | Build sections, components, animations |
| `@copy-writer` | All copy — headlines, CTAs, descriptions |
| `@code-reviewer` | After every meaningful code change |
| `@deploy-checker` | Before every push to main / Vercel |
| `@seo-setup` | Metadata, OG images, schema, sitemap |
| `@security-engineer` | API routes, env vars, Vercel headers |
| `@web-vitals-optimizer` | Performance issues, bundle size, LCP/CLS |

## Commands

| Command | Does |
|---|---|
| `/build-section [name]` | Copy + component for a page section |
| `/write-copy [section]` | Brand-voice copy only |
| `/deploy-check` | SHIP / HOLD / BLOCK verdict |
| `/setup-email` | Wire up Resend email capture |

## Code Standards
- TypeScript strict — no `any`
- App Router, Server Components by default
- `next/image` for all images, `next/font` for fonts
- Tailwind only — no CSS modules, no inline styles
- Named exports only — no default exports from components
- No `console.log` in commits
- No `.env.local` in commits

## Env Vars
```
RESEND_API_KEY=          # server-side only
NEXT_PUBLIC_SITE_URL=    # safe to expose
```
