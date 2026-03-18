"use client"

import { motion } from "framer-motion"

import { EmailCaptureForm } from "@/components/forms/EmailCaptureForm"

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const TEAL = "#3ee8c8"

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
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
// Component
// ---------------------------------------------------------------------------

export function CallToActionSection() {
  return (
    <section
      id="cta"
      className="relative border-t border-white/8 py-24 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, rgba(62, 232, 200, 0.03) 0%, transparent 100%)",
      }}
    >
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Headline */}
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl tracking-tight text-white sm:text-4xl md:text-5xl"
            style={{ fontWeight: 700 }}
          >
            Stop Trading Hours for{" "}
            <span style={{ color: TEAL }}>Busy Work</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            variants={fadeUpVariants}
            className="mx-auto mt-4 max-w-lg text-base text-white/50 md:text-lg"
            style={{ fontWeight: 300 }}
          >
            Every week you wait is another week of admin you didn&apos;t have to
            do. Join the founding members getting their time back.
          </motion.p>

          {/* Email form */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-8 flex flex-col items-center gap-3"
          >
            <EmailCaptureForm />
            <p
              className="text-xs text-white/30"
              style={{ fontWeight: 300 }}
            >
              Free to start. Cancel anytime. Your hours are the product — we
              protect them.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
