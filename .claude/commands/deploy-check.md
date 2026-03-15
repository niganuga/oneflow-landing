# /deploy-check

Run the full pre-deployment checklist before any push to main or Vercel.

## Steps Claude Code follows
1. Run `npm run build` — flag any errors
2. Run `npx tsc --noEmit` — flag any type errors
3. Run `grep -r "console.log" app/ components/` — flag any found
4. Invoke @deploy-checker to run full 6-category checklist
5. Output SHIP / HOLD / BLOCK verdict with exact fixes needed

## Verdict
- SHIP — 0 FAILs, fewer than 3 WARNs → safe to push
- HOLD — 0 FAILs, 3+ WARNs → review before pushing
- BLOCK — 1+ FAILs → fix everything flagged first
