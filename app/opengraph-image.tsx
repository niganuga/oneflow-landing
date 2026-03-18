import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "One Flow — Run Lean. Win Time. Stay a Team of One."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const TEAL = "#3ee8c8"
const BG = "#0a0a0b"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          background: BG,
          padding: "60px 80px",
          fontFamily: "Geist, sans-serif",
        }}
      >
        {/* Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 32,
            fontWeight: 700,
            color: "white",
            marginBottom: 40,
          }}
        >
          <span>One </span>
          <span style={{ color: TEAL }}>Flow</span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "white",
              lineHeight: 1.2,
              maxWidth: 900,
            }}
          >
            Run Lean. Win Time.
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "white",
              lineHeight: 1.2,
            }}
          >
            Stay a Team of{" "}
            <span style={{ color: TEAL }}>One.</span>
          </div>
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: 24,
            fontWeight: 300,
            color: "rgba(255, 255, 255, 0.5)",
            marginTop: 32,
            textAlign: "center",
          }}
        >
          Simple automation for small business owners
        </div>

        {/* Accent line */}
        <div
          style={{
            width: 80,
            height: 4,
            background: TEAL,
            borderRadius: 2,
            marginTop: 40,
          }}
        />
      </div>
    ),
    { ...size },
  )
}
