import Link from "next/link"

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const TEAL = "#3ee8c8"

const FOOTER_NAV = {
  Products: [
    { label: "PrintReady Flow", href: "#products" },
    { label: "MobileRoutes", href: "#products" },
    { label: "Flow Kits", href: "#products" },
    { label: "Operator OS", href: "#products" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const

const SOCIAL_LINKS = [
  { label: "X / Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
] as const

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function FooterSection() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <p
              className="text-lg text-white"
              style={{ fontWeight: 700 }}
            >
              One{" "}
              <span style={{ color: TEAL }}>Flow</span>
            </p>
            <p
              className="mt-2 max-w-xs text-sm text-white/40"
              style={{ fontWeight: 300 }}
            >
              Simple tools that give everyday business owners their time back.
            </p>

            {/* Social links */}
            <div className="mt-4 flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-white/30 transition-colors hover:text-white/60"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(FOOTER_NAV).map(([heading, links]) => (
            <div key={heading}>
              <h3
                className="mb-3 text-xs uppercase tracking-widest text-white/50"
                style={{ fontWeight: 600 }}
              >
                {heading}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/30 transition-colors hover:text-white/60"
                      style={{ fontWeight: 300 }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/8 pt-6">
          <p
            className="text-xs text-white/20"
            style={{ fontWeight: 300 }}
          >
            &copy; 2026 One Flow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
