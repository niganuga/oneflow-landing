# /write-copy

Generate One Flow brand-voice copy for a specific section.

## Usage
/write-copy [section-name]

## Steps Claude Code follows
1. Invoke @copy-writer with the section name and context
2. Output: 3 headline options, subheadline, optional body, CTA
3. Check against brand voice rules before returning

## Brand voice gate (auto-checked)
- Leads with outcome, not feature
- No banned words: leverage, streamline, empower, game-changing, seamless
- CTA starts with an action verb
- Sounds like a founder, not a marketing team
- Mentions time saved or value delivered
