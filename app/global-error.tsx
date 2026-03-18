"use client"

import { useEffect } from "react"

interface GlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("[global-error]", error)
  }, [error])

  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: "#0a0a0b" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            gap: "1.5rem",
            padding: "1.5rem",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#fff" }}>
            Something went wrong
          </h2>
          <p style={{ maxWidth: "28rem", fontSize: "0.875rem", color: "rgba(255,255,255,0.5)" }}>
            A critical error occurred. Please try again.
          </p>
          <button
            onClick={reset}
            style={{
              height: "2.75rem",
              padding: "0 1.5rem",
              borderRadius: "9999px",
              border: "none",
              backgroundColor: "#fff",
              color: "#000",
              fontSize: "0.875rem",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
