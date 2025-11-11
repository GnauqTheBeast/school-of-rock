"use client"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ClassesGrid from "@/components/classes-grid"
import InstructorsSection from "@/components/instructors-section"
import YouTubeSection from "@/components/youtube-section"
import FeaturesSection from "@/components/features-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <ClassesGrid />
      <InstructorsSection />
      <YouTubeSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
