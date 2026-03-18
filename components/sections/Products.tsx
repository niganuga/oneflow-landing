"use client"

import { motion } from "framer-motion"
import {
  LayoutDashboard,
  MapPin,
  Package,
  Printer,
  type LucideIcon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const TEAL = "#3ee8c8"

interface Product {
  name: string
  description: string
  icon: LucideIcon
  bullets: readonly string[]
  badge: "Join Waitlist" | "Coming Soon"
}

const PRODUCTS: readonly Product[] = [
  {
    name: "PrintReady Flow",
    description: "Print management on autopilot.",
    icon: Printer,
    bullets: [
      "Automate job routing from order to production",
      "Real-time tracking your clients can see",
      "No more double-entry between systems",
    ],
    badge: "Join Waitlist",
  },
  {
    name: "MobileRoutes",
    description: "Smarter routes for businesses on the move.",
    icon: MapPin,
    bullets: [
      "AI-optimized schedules that save fuel and hours",
      "Automated client notifications — no manual texts",
      "Built for detailers, cleaners, and field crews",
    ],
    badge: "Coming Soon",
  },
  {
    name: "Flow Kits",
    description: "Pre-built automation for everyday ops.",
    icon: Package,
    bullets: [
      "Drop-in workflows for invoicing, follow-ups, and scheduling",
      "Five-minute setup, no code required",
      "Works with the tools you already use",
    ],
    badge: "Coming Soon",
  },
  {
    name: "Operator OS",
    description: "Your entire business. One screen.",
    icon: LayoutDashboard,
    bullets: [
      "CRM, scheduling, invoicing — all connected",
      "Real-time dashboards that actually make sense",
      "The operating system for teams of one",
    ],
    badge: "Coming Soon",
  },
] as const

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function ProductsSection() {
  return (
    <section id="products" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        {/* Section headline */}
        <div className="mb-16 text-center">
          <h2
            className="text-3xl tracking-tight text-white sm:text-4xl md:text-5xl"
            style={{ fontWeight: 700 }}
          >
            Four Tools. One Mission.{" "}
            <span style={{ color: TEAL }}>Your Time Back.</span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-lg text-base text-white/50 md:text-lg"
            style={{ fontWeight: 300 }}
          >
            Each one built to kill a specific kind of busy work.
          </p>
        </div>

        {/* Product cards */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {PRODUCTS.map((product) => {
            const Icon = product.icon
            return (
              <motion.div key={product.name} variants={cardVariants}>
                <Card className="h-full border-0 bg-white/[0.03] text-white ring-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <div
                      className="mb-2 flex size-10 items-center justify-center rounded-lg"
                      style={{ background: `${TEAL}15` }}
                    >
                      <Icon className="size-5" style={{ color: TEAL }} />
                    </div>
                    <CardTitle className="text-white">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-white/50">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      {product.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2 text-sm text-white/40"
                        >
                          <span
                            className="mt-1.5 block size-1.5 shrink-0 rounded-full"
                            style={{ background: TEAL }}
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="px-4 pb-4">
                    <Badge
                      variant="outline"
                      className="border-white/10 text-white/50"
                    >
                      {product.badge}
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
