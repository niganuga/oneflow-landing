"use client"

import { motion } from "framer-motion"

// ---------------------------------------------------------------------------
// Logos — text-based for now, replace with SVGs later
// ---------------------------------------------------------------------------

const LOGOS = [
  "Shopify",
  "Stripe",
  "Vercel",
  "Supabase",
  "Resend",
  "OpenAI",
  "Claude",
  "GitHub",
] as const

function LogoItem({ name }: { name: string }) {
  return (
    <span
      className="whitespace-nowrap text-[14px] tracking-wide text-white/25"
      style={{ fontWeight: 500 }}
    >
      {name}
    </span>
  )
}

// ---------------------------------------------------------------------------
// Logo ticker
// ---------------------------------------------------------------------------

export function LogoTicker() {
  return (
    <section className="relative border-t border-white/8 bg-black py-8">
      <h2
        className="mb-6 text-center text-[16px] text-white/40"
        style={{ fontWeight: 400 }}
      >
        Trusted by <span className="text-white/70" style={{ fontWeight: 500 }}>operators</span>
      </h2>
      <div className="relative mx-auto max-w-4xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <motion.div
          className="flex w-max gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* Double the logos for seamless loop */}
          {[...LOGOS, ...LOGOS].map((name, i) => (
            <LogoItem key={`${name}-${i}`} name={name} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
