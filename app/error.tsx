"use client"

import { useEffect } from "react"

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("[app-error]", error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#0a0a0b] px-6 text-center">
      <h2 className="text-2xl font-semibold text-white">
        Something went wrong
      </h2>
      <p className="max-w-md text-sm text-white/50">
        An unexpected error occurred. Please try again or refresh the page.
      </p>
      <button
        onClick={reset}
        className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black transition-opacity hover:opacity-90"
      >
        Try again
      </button>
    </div>
  )
}
