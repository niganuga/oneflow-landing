import { HeroSection, AudienceTicker } from "@/components/ui/hero-1"
import { Header } from "@/components/ui/header-1"
import { ProductsSection } from "@/components/sections/Products"
import { HowItWorksSection } from "@/components/sections/HowItWorks"
import { SocialProofSection } from "@/components/sections/SocialProof"
import { CallToActionSection } from "@/components/sections/CallToAction"
import { FooterSection } from "@/components/sections/Footer"

export default function Home() {
  return (
    <div className="flex w-full flex-col bg-[#0a0a0b] min-h-screen">
      <Header />
      <main className="grow">
        <HeroSection />
        <AudienceTicker />
        <ProductsSection />
        <HowItWorksSection />
        <SocialProofSection />
        <CallToActionSection />
      </main>
      <FooterSection />
    </div>
  )
}
