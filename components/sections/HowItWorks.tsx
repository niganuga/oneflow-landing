"use client"

import { motion } from "framer-motion"
import { Clock, MousePointerClick, Plug, type LucideIcon } from "lucide-react"

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const TEAL = "#3ee8c8"

interface Step {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

const STEPS: readonly Step[] = [
  {
    number: "01",
    title: "Pick Your Tools",
    description:
      "Choose what fits. No bundles, no bloat. Start with one, add more when you're ready.",
    icon: MousePointerClick,
  },
  {
    number: "02",
    title: "Connect Your Business",
    description:
      "We plug into what you already use. Setup takes minutes, not days.",
    icon: Plug,
  },
  {
    number: "03",
    title: "Get Time Back",
    description:
      "The busy work disappears. Your hours come back. That's the whole point.",
    icon: Clock,
  },
] as const

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

const stepVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        {/* Section headline */}
        <div className="mb-16 text-center">
          <h2
            className="text-3xl tracking-tight text-white sm:text-4xl md:text-5xl"
            style={{ fontWeight: 700 }}
          >
            Three Steps to Less Busy Work
          </h2>
          <p
            className="mx-auto mt-4 max-w-lg text-base text-white/50 md:text-lg"
            style={{ fontWeight: 300 }}
          >
            No complex onboarding. No week-long setup. Just tools that work.
          </p>
        </div>

        {/* Steps */}
        <motion.div
          className="relative grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Connector line — desktop only */}
          <div
            aria-hidden="true"
            className="absolute top-6 hidden h-px md:block"
            style={{
              left: "calc(16.67% + 1.5rem)",
              right: "calc(16.67% + 1.5rem)",
              borderTop: `1px dashed rgba(255,255,255,0.12)`,
            }}
          />

          {STEPS.map((step) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step number circle */}
                <div
                  className="relative z-10 mb-6 flex size-12 items-center justify-center rounded-full text-lg font-semibold text-black"
                  style={{ background: TEAL }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <Icon className="mb-3 size-6 text-white/30" />

                {/* Title */}
                <h3
                  className="mb-2 text-lg text-white"
                  style={{ fontWeight: 600 }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="max-w-xs text-sm text-white/40"
                  style={{ fontWeight: 300 }}
                >
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
