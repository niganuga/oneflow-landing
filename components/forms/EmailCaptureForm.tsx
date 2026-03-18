"use client"

import { useState } from "react"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { joinWaitlist } from "@/app/actions/waitlist"

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const TEAL = "#3ee8c8"

// ---------------------------------------------------------------------------
// Email capture form
// ---------------------------------------------------------------------------

export function EmailCaptureForm() {
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
      <p className="text-sm font-medium text-white fade-in animate-in duration-300">
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
        className="h-11 flex-1 rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-white/30"
        aria-label="Email address"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium text-black transition-colors hover:opacity-90 disabled:opacity-50"
        style={{ background: TEAL }}
      >
        {isLoading ? "Sending..." : "Get Early Access"}
        {!isLoading && <ArrowRight className="size-3.5" />}
      </button>
      {hasError && (
        <p className="mt-2 text-xs text-red-400">
          {errorMessage || "Something went wrong. Please try again."}
        </p>
      )}
      <p className="mt-2 text-xs text-white/30" style={{ fontWeight: 300 }}>
        By signing up you agree to our{" "}
        <Link
          href="/privacy"
          className="underline underline-offset-2 transition-colors hover:text-white/50"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  )
}
