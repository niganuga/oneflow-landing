import { cn } from "@/lib/utils"
import { RocketIcon, ArrowRightIcon } from "lucide-react"
import { InfiniteSlider } from "@/components/ui/infinite-slider"

import { EmailCaptureForm } from "@/components/forms/EmailCaptureForm"

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export function HeroSection() {
    return (
        <section className="mx-auto w-full max-w-5xl">
            {/* Top radial glow — subtle light down the center */}
            <div
                aria-hidden="true"
                className="absolute inset-0 isolate overflow-hidden contain-strict"
            >
                <div className="absolute inset-0 -top-14 isolate -z-10 bg-[radial-gradient(40%_60%_at_50%_30%,rgba(255,255,255,0.07),transparent)] contain-strict" />
            </div>

            {/* X Bold Faded Borders */}
            <div
                aria-hidden="true"
                className="absolute inset-0 mx-auto hidden min-h-screen w-full max-w-5xl lg:block"
            >
                <div className="mask-y-from-80% mask-y-to-100% absolute inset-y-0 left-0 z-10 h-full w-px bg-white/10" />
                <div className="mask-y-from-80% mask-y-to-100% absolute inset-y-0 right-0 z-10 h-full w-px bg-white/10" />
            </div>

            {/* main content */}

            <div className="relative flex flex-col items-center justify-center gap-5 pt-32 pb-30">
                {/* X Content Faded Borders */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-1 size-full overflow-hidden"
                >
                    <div className="absolute inset-y-0 left-4 w-px bg-linear-to-b from-transparent via-white/8 to-white/8 md:left-8" />
                    <div className="absolute inset-y-0 right-4 w-px bg-linear-to-b from-transparent via-white/8 to-white/8 md:right-8" />
                    <div className="absolute inset-y-0 left-8 w-px bg-linear-to-b from-transparent via-white/5 to-white/5 md:left-12" />
                    <div className="absolute inset-y-0 right-8 w-px bg-linear-to-b from-transparent via-white/5 to-white/5 md:right-12" />
                </div>

                <a
                    className={cn(
                        "group mx-auto flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-1",
                        "fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards transition-all delay-500 duration-500 ease-out"
                    )}
                    href="#early-access"
                >
                    <RocketIcon className="size-3 text-white/50" />
                    <span className="text-xs text-white/60">Founding access open</span>
                    <span className="block h-5 border-l border-white/10" />
                    <ArrowRightIcon className="size-3 text-white/50 duration-150 ease-out group-hover:translate-x-1" />
                </a>

                <h1
                    className={cn(
                        "fade-in slide-in-from-bottom-10 animate-in text-balance fill-mode-backwards text-center text-4xl tracking-tight delay-100 duration-500 ease-out text-white md:text-5xl lg:text-6xl",
                        "text-shadow-[0_0px_50px_rgba(255,255,255,0.15)]"
                    )}
                    style={{ fontWeight: 700 }}
                >
                    Your Hours Are the Product. <br /> We Protect Them.
                </h1>

                <p
                    className="fade-in slide-in-from-bottom-10 mx-auto max-w-lg animate-in fill-mode-backwards text-center text-base text-white/50 tracking-wider delay-200 duration-500 ease-out sm:text-lg md:text-xl"
                    style={{ fontWeight: 300 }}
                >
                    One Flow automates the operations drag that eats your day — so you
                    can finally get time back instead of buying more of it.
                </p>

                <div className="fade-in slide-in-from-bottom-10 flex animate-in flex-col items-center gap-3 fill-mode-backwards pt-2 delay-300 duration-500 ease-out">
                    <EmailCaptureForm />
                    <p className="text-xs text-white/30" style={{ fontWeight: 300 }}>
                        No credit card required. If it takes longer than a week to show value, it&apos;s not One Flow.
                    </p>
                </div>
            </div>
        </section>
    );
}

// ---------------------------------------------------------------------------
// Logos section
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Audience ticker
// ---------------------------------------------------------------------------

const AUDIENCES = [
    "Solo Founders",
    "Parents Who Side Hustle",
    "Print Shop Owners",
    "Mobile Detailers",
    "Lawn Care Operators",
    "Teachers",
    "Accountants",
    "Lawyers",
    "Dental Practices",
    "Real Estate Agents",
    "Freelance Designers",
    "Small Biz of Los Angeles",
    "Photographers",
    "Personal Trainers",
    "Etsy Sellers",
    "Consultants",
    "Bookkeepers",
    "Trades & Contractors",
] as const

export function AudienceTicker() {
    return (
        <section className="relative border-t border-white/8 pt-6 pb-8">
            <h2
                className="mb-4 text-center text-sm tracking-widest uppercase text-white/30"
                style={{ fontWeight: 500 }}
            >
                Built for <span className="text-white/60">operators like you</span>
            </h2>
            <div className="relative mx-auto max-w-5xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <InfiniteSlider gap={32} reverse duration={30}>
                    {AUDIENCES.map((name) => (
                        <span
                            key={name}
                            className="whitespace-nowrap text-sm text-white/25"
                            style={{ fontWeight: 600 }}
                        >
                            {name}
                        </span>
                    ))}
                </InfiniteSlider>
            </div>
        </section>
    )
}
