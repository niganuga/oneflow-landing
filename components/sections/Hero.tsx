"use client"

import { useState } from "react"

import { ArrowRight, RocketIcon } from "lucide-react"

import { joinWaitlist } from "@/app/actions/waitlist"
import { cn } from "@/lib/utils"

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const TEAL = "#3ee8c8"

// ---------------------------------------------------------------------------
// Email capture form
// ---------------------------------------------------------------------------

function EmailCaptureForm() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setHasError(false)
    setErrorMessage("")

    const trimmed = email.trim()
    if (!trimmed || !EMAIL_REGEX.test(trimmed)) return

    setIsLoading(true)
    try {
      const result = await joinWaitlist(trimmed)
      if (result.success) {
        setIsSubmitted(true)
      } else {
        setErrorMessage(result.error ?? "Something went wrong. Please try again.")
        setHasError(true)
      }
    } catch (err: unknown) {
      console.error("[waitlist] submission failed:", err)
      setHasError(true)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <p className="text-[18px] font-light text-white fade-in animate-in duration-300">
        You&apos;re on the list. We&apos;ll be in touch.
      </p>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-11 flex-1 rounded-full border border-white/15 bg-white/5 px-4 text-[15px] font-light text-white placeholder:text-white/35 outline-none transition-colors focus:border-white/30"
        aria-label="Email address"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex h-11 shrink-0 items-center justify-center gap-1.5 rounded-full px-6 text-[15px] font-medium text-black transition-colors disabled:opacity-50"
        style={{ background: TEAL }}
      >
        {isLoading ? "Sending..." : "Start Getting Time Back"}
        {!isLoading && <ArrowRight className="size-3.5" />}
      </button>
      {hasError && (
        <p className="mt-2 text-xs text-red-400 sm:col-span-2">
          {errorMessage || "Something went wrong. Please try again."}
        </p>
      )}
    </form>
  )
}

// ---------------------------------------------------------------------------
// Hero section
// ---------------------------------------------------------------------------

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black">
      {/* Top radial shade — subtle white glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 isolate hidden overflow-hidden contain-strict lg:block"
      >
        <div className="absolute inset-0 -top-14 isolate -z-10 bg-[radial-gradient(35%_80%_at_49%_0%,rgba(255,255,255,0.06),transparent)] contain-strict" />
      </div>

      {/* Outer faded vertical borders */}
      <div
        aria-hidden="true"
        className="absolute inset-0 mx-auto hidden min-h-screen w-full max-w-5xl lg:block"
      >
        <div className="mask-y-from-80% mask-y-to-100% absolute inset-y-0 left-0 z-10 h-full w-px bg-white/10" />
        <div className="mask-y-from-80% mask-y-to-100% absolute inset-y-0 right-0 z-10 h-full w-px bg-white/10" />
      </div>

      {/* Main content */}
      <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-center gap-5 pb-24 pt-24 md:pb-32 md:pt-28">
        {/* Inner faded vertical borders */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-1 size-full overflow-hidden"
        >
          <div className="absolute inset-y-0 left-4 w-px bg-linear-to-b from-transparent via-white/8 to-white/8 md:left-8" />
          <div className="absolute inset-y-0 right-4 w-px bg-linear-to-b from-transparent via-white/8 to-white/8 md:right-8" />
          <div className="absolute inset-y-0 left-8 w-px bg-linear-to-b from-transparent via-white/5 to-white/5 md:left-12" />
          <div className="absolute inset-y-0 right-8 w-px bg-linear-to-b from-transparent via-white/5 to-white/5 md:right-12" />
        </div>

        {/* Announcement badge */}
        <a
          className={cn(
            "group mx-auto flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-1",
            "fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards transition-all delay-500 duration-500 ease-out",
          )}
          href="#early-access"
        >
          <RocketIcon className="size-3 text-white/50" />
          <span className="text-xs font-light text-white/60">
            Founding access open
          </span>
          <span className="block h-5 border-l border-white/10" />
          <ArrowRight className="size-3 text-white/50 duration-150 ease-out group-hover:translate-x-1" />
        </a>

        {/* Headline — Geist 96px / weight 700 */}
        <h1
          className={cn(
            "fade-in slide-in-from-bottom-10 animate-in text-balance fill-mode-backwards text-center tracking-tight delay-100 duration-500 ease-out text-white",
            "text-[48px] leading-[1.05] sm:text-[64px] md:text-[80px] lg:text-[96px]",
          )}
          style={{ fontWeight: 700 }}
        >
          Run Lean. Win Time.
          <br />
          Stay a Team of One.
        </h1>

        {/* Subheadline — Geist 18px / weight 300 */}
        <p
          className="fade-in slide-in-from-bottom-10 mx-auto max-w-lg animate-in fill-mode-backwards text-center text-[18px] leading-relaxed text-white/50 delay-200 duration-500 ease-out"
          style={{ fontWeight: 300 }}
        >
          One Flow automates the operations drag that eats your day — so you
          can finally get time back instead of buying more of it.
        </p>

        {/* Email capture */}
        <div
          id="early-access"
          className="fade-in slide-in-from-bottom-10 flex animate-in flex-col items-center gap-3 fill-mode-backwards pt-2 delay-300 duration-500 ease-out"
        >
          <EmailCaptureForm />
          <p
            className="text-[13px] text-white/35"
            style={{ fontWeight: 300 }}
          >
            No credit card required. If it takes longer than a week to show
            value, it&apos;s not One Flow.
          </p>
        </div>
      </div>
    </section>
  )
}
