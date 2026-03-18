"use client"

import { useEffect, useRef, useState } from "react"

import { motion, useInView } from "framer-motion"
import { Quote } from "lucide-react"

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const TEAL = "#3ee8c8"

interface Stat {
  value: number
  suffix: string
  label: string
}

const STATS: readonly Stat[] = [
  { value: 10, suffix: "+", label: "Hours saved per week" },
  { value: 3, suffix: " min", label: "Average setup time" },
  { value: 500, suffix: "+", label: "Founding members" },
  { value: 1, suffix: "", label: "Platform. Every tool." },
] as const

interface Testimonial {
  quote: string
  name: string
  role: string
  business: string
}

const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote:
      "I used to spend my Sundays doing admin. Now I spend them with my kids. That's what 'time back' actually means.",
    name: "Sarah M.",
    role: "Owner",
    business: "Print Shop",
  },
  {
    quote:
      "Setup took five minutes. Within a week, my invoicing was fully automated. No joke.",
    name: "Marcus T.",
    role: "Solo Operator",
    business: "Mobile Detailing",
  },
  {
    quote:
      "I was drowning in spreadsheets and double-entry. One Flow just... made it go away.",
    name: "Priya K.",
    role: "Founder",
    business: "Freelance Design Studio",
  },
] as const

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

// ---------------------------------------------------------------------------
// Counter component
// ---------------------------------------------------------------------------

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 1200
    const start = performance.now()

    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function SocialProofSection() {
  return (
    <section id="social-proof" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        {/* Section headline */}
        <div className="mb-16 text-center">
          <h2
            className="text-3xl tracking-tight text-white sm:text-4xl md:text-5xl"
            style={{ fontWeight: 700 }}
          >
            Operators Are Already Getting{" "}
            <span style={{ color: TEAL }}>Time Back</span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-lg text-base text-white/50 md:text-lg"
            style={{ fontWeight: 300 }}
          >
            Early results from our founding members.
          </p>
        </div>

        {/* Stat counters */}
        <motion.div
          className="mb-20 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUpVariants}
              className="flex flex-col items-center text-center"
            >
              <span
                className="text-4xl tracking-tight md:text-5xl"
                style={{ fontWeight: 700, color: TEAL }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span
                className="mt-2 text-sm text-white/40"
                style={{ fontWeight: 300 }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {TESTIMONIALS.map((t) => (
            <motion.blockquote
              key={t.name}
              variants={fadeUpVariants}
              className="flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] p-6 backdrop-blur-sm"
            >
              <Quote className="mb-3 size-5 text-white/15" />
              <p
                className="flex-1 text-sm leading-relaxed text-white/60"
                style={{ fontWeight: 300 }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 border-t border-white/8 pt-4">
                <p className="text-sm font-medium text-white">{t.name}</p>
                <p
                  className="text-xs text-white/35"
                  style={{ fontWeight: 300 }}
                >
                  {t.role}, {t.business}
                </p>
              </div>
            </motion.blockquote>
          ))}
        </motion.div>

        {/* Pre-launch qualifier */}
        <p
          className="mt-8 text-center text-xs text-white/25"
          style={{ fontWeight: 300 }}
        >
          Stats reflect targets based on early beta results. Testimonials from
          founding members.
        </p>
      </div>
    </section>
  )
}
