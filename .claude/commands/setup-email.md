# /setup-email

Wire up the Resend email capture system end to end.

## Steps Claude Code follows
1. Verify `resend` is installed — if not: `npm install resend`
2. Check RESEND_API_KEY is in .env.local and .env.example
3. Create app/api/subscribe/route.ts:
   - POST only (return 405 for other methods)
   - Parse + validate email (format check, max 254 chars)
   - Call Resend contacts API to add subscriber
   - Return 200 on success
   - Catch errors server-side — never expose to client
4. Create components/sections/EmailCapture.tsx:
   - Controlled email input
   - Loading state during submission
   - Success state with confirmation message
   - Error state with friendly message (no internal details)
5. Use @security-engineer to review the route before wiring up
6. Test with a real email before deploying

## Resend setup reminder
- Create account at resend.com
- Verify your domain (DNS TXT record)
- Create an audience/contact list
- Copy API key → .env.local
