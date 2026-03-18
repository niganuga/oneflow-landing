import { z } from "zod"

const isProduction = process.env.NODE_ENV === "production"

const serverSchema = z.object({
  RESEND_API_KEY: isProduction
    ? z.string().min(1, "RESEND_API_KEY is required in production")
    : z.string().optional().default(""),
})

const clientSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().min(1, "NEXT_PUBLIC_SITE_URL is required"),
})

const serverResult = serverSchema.safeParse(process.env)
const clientResult = clientSchema.safeParse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
})

if (!serverResult.success) {
  console.error("Server env validation failed:", serverResult.error.format())
  throw new Error("Invalid server environment variables")
}

if (!clientResult.success) {
  console.error("Client env validation failed:", clientResult.error.format())
  throw new Error("Invalid client environment variables")
}

export const env = {
  ...serverResult.data,
  ...clientResult.data,
} as const
