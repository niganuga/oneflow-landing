# Session 2: Email Capture (Resend Integration)

## Goal
Wire up the email capture form in the hero to a real API endpoint using Resend. Replace the setTimeout stub with a working Server Action or Route Handler.

## Depends On
- Session 1 (env validation module must exist)

## Read First
- `/Users/makko/Code/oneflow-landing/components/sections/Hero.tsx` (lines 92-150 — EmailCaptureForm)
- `/Users/makko/Code/oneflow-landing/lib/env.ts` (created in Session 1)
- `/Users/makko/Code/oneflow-landing/package.json` (resend already installed)

## Do NOT Change
- Hero layout, copy, or animations
- Any UI component styling

## Tasks

### Task 1: Create waitlist Server Action
Create `app/actions/waitlist.ts` with a Server Action:

- Accept email string
- Validate with Zod (email format, max length)
- Call Resend API to add contact to an audience or send confirmation email
- Return `{ success: boolean; error?: string }`
- Rate limit: basic in-memory rate limiting (IP-based) for MVP
- Use `env` from `lib/env.ts` for API key

**Verify:** Can be imported in a client component. TypeScript compiles.

### Task 2: Connect Hero form to Server Action
In `Hero.tsx`, replace the setTimeout stub:

- Import the Server Action
- Call it in handleSubmit
- Handle success/error states (already wired up)
- Keep the loading state UX

**Verify:** `pnpm build` passes. Test with a real email in dev (requires RESEND_API_KEY in .env.local).

### Task 3: Create Resend audience (manual step)
Document the manual step: log into Resend dashboard, create an audience called "One Flow Waitlist", copy the audience ID into `.env.local` as `RESEND_AUDIENCE_ID`.

Add `RESEND_AUDIENCE_ID` to:
- `.env.example`
- `lib/env.ts` validation schema

**Verify:** Server Action successfully adds a contact to the audience.

## Expected Output
- Creates 1 file: `app/actions/waitlist.ts`
- Modifies 2 files: `Hero.tsx`, `lib/env.ts`
- Modifies 1 file: `.env.example`

## Commit Message
```
feat: wire email capture to Resend waitlist
```

## Add to context.md
```markdown
## After Session 2: Email Capture
- Server Action at `app/actions/waitlist.ts` — validates email, calls Resend
- Hero form connected to real endpoint
- Env vars needed: RESEND_API_KEY, RESEND_AUDIENCE_ID
- Rate limiting: basic in-memory for MVP
```
