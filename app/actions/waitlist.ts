"use server"

import { headers } from "next/headers"

import { Resend } from "resend"
import { z } from "zod"

import { env } from "@/lib/env"

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

const waitlistSchema = z.object({
  email: z.email().max(254),
})

// ---------------------------------------------------------------------------
// In-memory rate limiter (per-IP, MVP-only)
// ---------------------------------------------------------------------------

const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 5

const ipRequests = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = ipRequests.get(ip)

  if (!entry || now > entry.resetAt) {
    ipRequests.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  entry.count += 1
  return entry.count > RATE_LIMIT_MAX
}

// ---------------------------------------------------------------------------
// Server Action
// ---------------------------------------------------------------------------

interface WaitlistResult {
  success: boolean
  error?: string
}

export async function joinWaitlist(email: string): Promise<WaitlistResult> {
  // Validate input
  const parsed = waitlistSchema.safeParse({ email })
  if (!parsed.success) {
    return { success: false, error: "Please enter a valid email address." }
  }

  // Rate limit by IP
  const headerList = await headers()
  const ip = headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  if (isRateLimited(ip)) {
    return { success: false, error: "Too many requests. Please try again later." }
  }

  // Add contact to Resend
  try {
    const resend = new Resend(env.RESEND_API_KEY)
    const { error } = await resend.contacts.create({
      email: parsed.data.email,
    })

    if (error) {
      console.error("[waitlist] Resend API error:", error)
      return { success: false, error: "Something went wrong. Please try again." }
    }

    return { success: true }
  } catch (err: unknown) {
    console.error("[waitlist] Unexpected error:", err)
    return { success: false, error: "Something went wrong. Please try again." }
  }
}
