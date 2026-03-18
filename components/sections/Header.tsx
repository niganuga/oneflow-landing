"use client"

import { useState, useEffect, useCallback } from "react"

import { cn } from "@/lib/utils"

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const TEAL = "#3ee8c8"

const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
] as const

// ---------------------------------------------------------------------------
// Header
// ---------------------------------------------------------------------------

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const onScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [onScroll])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isMenuOpen])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent",
        isScrolled &&
          "border-white/10 bg-black/80 backdrop-blur-lg supports-[backdrop-filter]:bg-black/60",
      )}
    >
      <nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
        {/* Logo */}
        <a
          href="/"
          className="text-[15px] text-white hover:opacity-80 transition-opacity"
          style={{ fontWeight: 700 }}
        >
          One Flow
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-white"
              style={{ fontWeight: 400 }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#early-access"
            className="ml-2 rounded-full border border-white/15 px-4 py-1.5 text-sm text-white transition-colors hover:bg-white/5"
            style={{ fontWeight: 400 }}
          >
            Sign In
          </a>
          <a
            href="#early-access"
            className="ml-1 rounded-full px-4 py-1.5 text-sm text-black transition-colors hover:opacity-90"
            style={{ fontWeight: 500, background: TEAL }}
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex size-10 items-center justify-center rounded-md border border-white/15 text-white md:hidden"
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            className="size-5"
          >
            {isMenuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-14 bottom-0 z-40 flex flex-col overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-1 flex-col justify-between p-4">
            <div className="grid gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="#early-access"
                className="flex h-10 items-center justify-center rounded-full border border-white/15 text-sm text-white"
              >
                Sign In
              </a>
              <a
                href="#early-access"
                className="flex h-10 items-center justify-center rounded-full text-sm text-black"
                style={{ background: TEAL }}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
