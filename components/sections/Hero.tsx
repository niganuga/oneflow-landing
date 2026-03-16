"use client"

import { useState } from "react"

import { motion, type Variants } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const CONTAINER: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const NAV_FADE: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

const MOBILE_PANEL: Variants = {
  closed: { opacity: 0, height: 0 },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.25, ease: "easeOut" },
  },
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
] as const

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

function NavLink({ href, children, className, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
        className,
      )}
    >
      {children}
    </a>
  )
}

// ---------------------------------------------------------------------------
// Email capture form
// ---------------------------------------------------------------------------

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function EmailCaptureForm() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setHasError(false)

    const trimmed = email.trim()
    if (!trimmed || !EMAIL_REGEX.test(trimmed)) return

    setIsLoading(true)
    try {
      // TODO: Wire to /api/waitlist or Resend Server Action
      await new Promise<void>((resolve) => setTimeout(resolve, 600))
      setIsSubmitted(true)
    } catch {
      setHasError(true)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-sm font-medium text-foreground"
      >
        You&apos;re on the list. We&apos;ll be in touch.
      </motion.p>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm flex-col gap-3 sm:flex-row"
    >
      <Input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-10 flex-1 bg-background text-sm"
        aria-label="Email address"
      />
      <Button
        type="submit"
        size="lg"
        disabled={isLoading}
        className="h-10 shrink-0 gap-1.5 px-5 text-sm"
      >
        {isLoading ? "Sending..." : "Start Getting Time Back"}
        {!isLoading && <ArrowRight className="size-3.5" />}
      </Button>
      {hasError && (
        <p className="mt-2 text-xs text-destructive sm:col-span-2">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}

// ---------------------------------------------------------------------------
// Hero section
// ---------------------------------------------------------------------------

export function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  function closeMobileMenu() {
    setIsMobileMenuOpen(false)
  }

  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden bg-background">
      {/* Background texture — editorial grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 select-none"
      >
        <div className="absolute -right-32 -top-32 size-[480px] rounded-full bg-foreground/[0.03]" />
        <div className="absolute -bottom-40 -left-24 size-[360px] rounded-full bg-foreground/[0.025]" />
        <div className="absolute left-0 top-[72px] h-px w-full bg-border" />
      </div>

      {/* Navigation */}
      <motion.header
        variants={NAV_FADE}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex h-[72px] items-center justify-between px-6 md:px-10 lg:px-16"
      >
        <a
          href="/"
          className="text-base font-bold tracking-tight text-foreground"
        >
          One Flow
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="outline" size="sm" asChild>
            <a href="#early-access">Get Early Access</a>
          </Button>
        </div>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="inline-flex size-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted md:hidden"
        >
          {isMobileMenuOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>
      </motion.header>

      {/* Mobile menu panel */}
      <motion.div
        variants={MOBILE_PANEL}
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
        className="relative z-10 overflow-hidden border-b border-border bg-background md:hidden"
      >
        <nav
          aria-label="Mobile primary"
          className="flex flex-col gap-1 px-6 pb-5 pt-2"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className="py-2 text-base"
            >
              {link.label}
            </NavLink>
          ))}
          <div className="mt-3 border-t border-border pt-4">
            <Button
              variant="default"
              size="sm"
              className="w-full"
              asChild
            >
              <a href="#early-access" onClick={closeMobileMenu}>
                Get Early Access
              </a>
            </Button>
          </div>
        </nav>
      </motion.div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-20 pt-16 text-center md:px-10 lg:px-16">
        <motion.div
          variants={CONTAINER}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6 md:gap-8"
        >
          {/* Announcement badge */}
          <motion.div
            variants={FADE_UP}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Badge
              variant="outline"
              className="gap-1.5 border-border px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-foreground"
              />
              Founding access open — built for operators who are done winging it
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={FADE_UP}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="max-w-3xl text-balance text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Run Lean. Win Time.
            <br />
            Stay a Team of One.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={FADE_UP}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-xl text-balance text-base text-muted-foreground sm:text-lg"
          >
            One Flow automates the operations drag that eats your day — so the
            detailer, the print shop owner, and the solo founder can finally get
            time back instead of buying more of it.
          </motion.p>

          {/* Email capture */}
          <motion.div
            id="early-access"
            variants={FADE_UP}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-sm sm:max-w-md"
          >
            <EmailCaptureForm />
            <p className="mt-3 text-xs text-muted-foreground">
              No credit card required. If it takes longer than a week to show value, it&apos;s not One Flow.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom edge rule */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 h-px w-full bg-border"
      />
    </section>
  )
}
