# One Flow Design System

> Reference document for all One Flow pages, components, and features.
> Extracted from Current's homepage/auth patterns, adapted for One Flow's brand.

---

## 1. Reference Analysis (Current.com Patterns)

### Homepage
- **Accent background**: Full-bleed lime/accent color behind hero section
- **Headline**: Oversized serif (~72px), centered, high contrast on accent bg
- **Subtitle**: Sans-serif, muted tone, 1-2 lines max
- **CTA row**: Two pill buttons side by side — filled primary + outlined secondary
- **Reassurance**: Small text below CTAs ("No credit card required")
- **Floating icons**: Product/feature icons scattered around hero for visual interest
- **Product screenshot**: Below the fold, centered, slight shadow or perspective
- **Nav**: Logo left, nav links center-right, pill CTA button far-right, ~72px height

### Auth Pages (Sign In / Sign Up)
- **Background**: Pure white, no accent color
- **Logo**: Top-left corner only, no nav links
- **Form container**: Centered vertically and horizontally, max-width ~400px
- **OAuth button**: Full-width, outlined, Google icon left-aligned
- **Divider**: Horizontal rule with centered "Or" text
- **Inputs**: Light gray background (#F5F5F5), rounded, 44px height
- **Submit button**: Full-width, gray/dark background, rounded
- **SSO link**: Small text link below form ("Sign in with SAML SSO")
- **Legal footer**: Terms + Privacy links at page bottom, small muted text

---

## 2. One Flow Design Tokens

### Colors

| Token | Hex | Tailwind | Usage |
|---|---|---|---|
| Accent | `#06B6D4` | `cyan-500` | Hero bg, accent highlights, links |
| Accent hover | `#0891B2` | `cyan-600` | Hover states on accent elements |
| Accent light | `#ECFEFF` | `cyan-50` | Subtle accent backgrounds |
| Text on accent | `#0A0A0A` | `neutral-950` | Text placed on accent bg |
| Primary (buttons) | `#0A0A0A` | `neutral-950` | Primary button fill, headings |
| Background | `#FFFFFF` | `white` | Page background |
| Foreground | `#0A0A0A` | `neutral-950` | Body text |
| Muted text | `#6B7280` | `gray-500` | Subtitles, captions, helper text |
| Borders | `#E5E7EB` | `gray-200` | Input borders, dividers, cards |
| Input bg (auth) | `#F5F5F5` | `neutral-100` | Auth page input backgrounds |
| Surface | `#F9FAFB` | `gray-50` | Alternate section backgrounds |

### Typography

| Role | Font | Tailwind variable | Load via |
|---|---|---|---|
| Display / Headlines | DM Serif Display | `--font-display` | `next/font/google` |
| Body / UI | Geist Sans | `--font-geist-sans` | Already loaded |
| Mono / Code | Geist Mono | `--font-geist-mono` | Already loaded |

#### Type Scale

| Name | Size | Tailwind | Weight | Tracking | Usage |
|---|---|---|---|---|---|
| Display | 72px | `text-7xl` | 400 | `-0.02em` | Hero headlines |
| H1 | 48px | `text-5xl` | 400 | `-0.02em` | Page titles |
| H2 | 32px | `text-3xl` | 400 | `-0.02em` | Section headings |
| H3 | 24px | `text-2xl` | 500 | `-0.01em` | Subsection headings |
| Body | 17px | `text-[17px]` | 400 | `0` | Paragraphs, descriptions |
| Small | 14px | `text-sm` | 400 | `0` | Labels, helper text |
| Caption | 12px | `text-xs` | 400 | `0.01em` | Legal, footnotes |

#### Font Loading (layout.tsx)

```tsx
import { DM_Serif_Display } from "next/font/google";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

// Add to <body> className:
// `${dmSerifDisplay.variable} ${geistSans.variable} ${geistMono.variable} antialiased`
```

#### Tailwind Config Extension

```ts
// tailwind.config.ts (or extend in CSS)
fontFamily: {
  display: ["var(--font-display)", "Georgia", "serif"],
  sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
  mono: ["var(--font-geist-mono)", "monospace"],
}
```

---

## 3. Component Patterns

### Buttons

#### Primary (filled pill)
```
className="h-11 px-8 rounded-full bg-neutral-950 text-white font-medium text-sm
           hover:bg-neutral-800 transition-colors"
```

#### Secondary (outlined pill)
```
className="h-11 px-8 rounded-full border border-gray-300 bg-transparent text-neutral-950
           font-medium text-sm hover:bg-gray-50 transition-colors"
```

#### Ghost
```
className="h-11 px-6 rounded-full bg-transparent text-neutral-950 font-medium text-sm
           hover:bg-gray-100 transition-colors"
```

#### CTA on Accent Background
```
className="h-11 px-8 rounded-full bg-neutral-950 text-white font-medium text-sm
           hover:bg-neutral-800 transition-colors"
// Secondary on accent bg: use white border + white text
className="h-11 px-8 rounded-full border border-white/30 bg-transparent text-neutral-950
           font-medium text-sm hover:bg-white/10 transition-colors"
```

**Rules:**
- All interactive elements: minimum 44px touch target (h-11)
- Always `rounded-full` for CTAs, `rounded-lg` for form buttons
- Always include `transition-colors` for hover states
- Use `font-medium` — never bold on buttons

### Inputs

#### Standard Input
```
className="h-11 w-full rounded-lg border border-gray-200 bg-white px-4 text-sm
           placeholder:text-gray-400 focus:border-cyan-500 focus:ring-2
           focus:ring-cyan-500/20 focus:outline-none transition-colors"
```

#### Auth Page Input (gray background)
```
className="h-11 w-full rounded-lg border-0 bg-neutral-100 px-4 text-sm
           placeholder:text-gray-400 focus:ring-2 focus:ring-cyan-500/20
           focus:outline-none transition-colors"
```

### Cards
```
className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
```

### Badges / Pills
```
className="inline-flex items-center gap-1.5 rounded-full border border-gray-200
           px-3 py-1 text-xs font-medium text-gray-600"
// With status dot:
// Add <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" /> inside
```

### Divider with Text ("Or")
```html
<div className="flex items-center gap-4">
  <div className="h-px flex-1 bg-gray-200" />
  <span className="text-sm text-gray-400">Or</span>
  <div className="h-px flex-1 bg-gray-200" />
</div>
```

### OAuth Button (Google)
```
className="flex h-11 w-full items-center justify-center gap-3 rounded-lg border
           border-gray-200 bg-white text-sm font-medium text-neutral-950
           hover:bg-gray-50 transition-colors"
// Google icon (20x20) placed before label text
```

---

## 4. Layout Patterns

### Spacing System (8pt grid)

| Token | px | Tailwind | Usage |
|---|---|---|---|
| 1 | 4px | `1` | Tight gaps between inline elements |
| 2 | 8px | `2` | Icon padding, badge internal spacing |
| 4 | 16px | `4` | Input padding, small gaps |
| 6 | 24px | `6` | Card padding, medium gaps |
| 8 | 32px | `8` | Between form groups |
| 10 | 40px | `10` | Between content blocks |
| 12 | 48px | `12` | Section internal padding |
| 16 | 64px | `16` | Large section gaps |
| 20 | 80px | `20` | Between major sections (mobile) |
| 24 | 96px | `24` | Between major sections (desktop) |

### Container
```
className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16"
```

### Section Spacing
```
className="py-20 md:py-24"
```

### Nav Bar
```
className="fixed top-0 z-50 w-full h-[72px] flex items-center"
// Inner: container with logo left, links center, CTA right
```

### Hero Section
```
className="min-h-screen bg-cyan-500 flex items-center justify-center text-center"
// Inner: max-w-3xl, display headline, body subtitle, CTA row, reassurance text
```

---

## 5. Animation Patterns (Framer Motion)

### Fade Up on Scroll
```tsx
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Usage:
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
```

### Staggered Children
```tsx
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

// Wrap parent in staggerContainer, children in fadeUp
```

### Nav Entrance
```tsx
<motion.nav
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: "easeOut" }}
>
```

### Hover Scale (cards, interactive)
```tsx
<motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
```

**Rules:**
- Always use `viewport={{ once: true }}` — animations fire once
- Keep durations under 0.6s — snappy, not slow
- Use `easeOut` for entrances, `easeInOut` for hover
- No animations on auth pages — keep them instant and focused

---

## 6. Page Templates

### Homepage

```
┌─────────────────────────────────────────────┐
│  Nav: [Logo]    [Products] [Pricing]  [CTA] │  h-[72px], fixed
├─────────────────────────────────────────────┤
│                                             │
│              Hero Section                   │  min-h-screen
│           bg-cyan-500, centered             │
│                                             │
│     "Serif headline, 72px"                  │
│     Sans-serif subtitle, muted              │
│     [Get Started]  [See How It Works]       │
│     No credit card required.                │
│                                             │
├─────────────────────────────────────────────┤
│          Product Screenshot                 │  max-w-4xl, shadow
├─────────────────────────────────────────────┤
│                                             │
│     Social Proof / Logos / Stats            │  py-24, bg-white
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│     Features Grid                           │  py-24, bg-gray-50
│     3-col cards with icons                  │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│     How It Works                            │  py-24, bg-white
│     3-step numbered flow                    │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│     Testimonials                            │  py-24, bg-gray-50
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│     CTA Section                             │  py-24, bg-cyan-500
│     Serif headline + single CTA             │
│                                             │
├─────────────────────────────────────────────┤
│  Footer                                     │  py-16, bg-neutral-950
│  Logo, links, legal, social                 │  text-white
└─────────────────────────────────────────────┘
```

### Sign In Page

```
┌─────────────────────────────────────────────┐
│  [Logo]                              │      │  py-6 px-6, no nav links
├─────────────────────────────────────────────┤
│                                             │
│                                             │
│          ┌─────────────────┐                │
│          │  Sign in to      │                │  Centered, max-w-[400px]
│          │  One Flow         │                │
│          │                   │                │
│          │ [G] Continue with │                │  OAuth button, full-width
│          │     Google        │                │
│          │                   │                │
│          │ ──── Or ────      │                │  Divider
│          │                   │                │
│          │ [Email input   ]  │                │  bg-neutral-100
│          │ [Password input]  │                │
│          │                   │                │
│          │ [  Sign In     ]  │                │  Full-width, dark bg
│          │                   │                │
│          │ Don't have an     │                │
│          │ account? Sign up  │                │  Link to sign up
│          │                   │                │
│          │ Sign in with SSO  │                │  Small text link
│          └─────────────────┘                │
│                                             │
├─────────────────────────────────────────────┤
│  Terms · Privacy                            │  Fixed bottom, muted text
└─────────────────────────────────────────────┘
```

### Sign Up Page

```
┌─────────────────────────────────────────────┐
│  [Logo]                                     │  py-6 px-6
├─────────────────────────────────────────────┤
│                                             │
│          ┌─────────────────┐                │
│          │  Create your     │                │  Centered, max-w-[400px]
│          │  account          │                │
│          │                   │                │
│          │ [G] Continue with │                │  OAuth button
│          │     Google        │                │
│          │                   │                │
│          │ ──── Or ────      │                │  Divider
│          │                   │                │
│          │ [Name input    ]  │                │  bg-neutral-100
│          │ [Email input   ]  │                │
│          │ [Password input]  │                │
│          │                   │                │
│          │ [  Create       ] │                │  Full-width, dark bg
│          │  Account          │                │
│          │                   │                │
│          │ Already have an   │                │
│          │ account? Sign in  │                │  Link to sign in
│          └─────────────────┘                │
│                                             │
├─────────────────────────────────────────────┤
│  By creating an account, you agree to our   │  Fixed bottom
│  Terms and Privacy Policy.                  │
└─────────────────────────────────────────────┘
```

---

## 7. Brand Voice in UI

- **Headlines**: Serif (DM Serif Display). Short, outcome-focused. "Get your hours back." not "Streamline your workflow."
- **Body text**: Sans-serif (Geist). Direct, no jargon. Write for the shop owner, not the VC.
- **CTAs**: Action verbs. "Get Started" / "See How It Works" / "Try It Free" — never "Learn More" or "Submit"
- **Reassurance**: Always include a line that removes friction: "No credit card required" / "Free forever for solo operators" / "Set up in 2 minutes"
- **Error messages**: Human, not robotic. "That email doesn't look right" not "Invalid email format"
- **Empty states**: Helpful, not sad. Tell them what to do next, not what's missing.

---

## 8. Responsive Breakpoints

| Breakpoint | Width | Tailwind | Target |
|---|---|---|---|
| Base | 0px+ | (default) | Mobile phones |
| sm | 640px+ | `sm:` | Large phones |
| md | 768px+ | `md:` | Tablets |
| lg | 1024px+ | `lg:` | Laptops |
| xl | 1280px+ | `xl:` | Desktops |

**Mobile-first rules:**
- Start with single column, stack everything
- `md:` introduces 2-column layouts
- `lg:` introduces 3-column grids, wider spacing
- Nav collapses to hamburger below `md:`
- Hero headline: `text-4xl md:text-5xl lg:text-7xl`
- Section padding: `py-16 md:py-20 lg:py-24`

---

## 9. Do / Don't

| Do | Don't |
|---|---|
| Use cyan-500 as the accent | Use purple, gradient, or neon |
| Serif headlines, sans body | All-serif or all-sans |
| Pill buttons (rounded-full) | Sharp corners on CTAs |
| 44px minimum touch targets | Tiny buttons or links |
| White + one accent color | Multi-color rainbow sections |
| Direct, outcome-focused copy | Generic SaaS buzzwords |
| Mobile-first responsive | Desktop-only then squeeze |
| Fade-up on scroll (once) | Bouncing, spinning, looping |
| Light gray input backgrounds on auth | Bordered inputs on auth pages |
| Centered auth forms, max-w-[400px] | Full-width auth forms |
