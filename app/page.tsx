"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProjectGrid } from "@/components/project-grid"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

export default function Home() {
  const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation()

  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProjectGrid />
      <AboutSection />
      <ContactSection />

      <footer className="bg-primary text-primary-foreground py-12 px-6 lg:px-8" ref={footerRef}>
        <div
          className={`max-w-7xl mx-auto text-center transition-all duration-800 ease-out ${
            footerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center mb-6">
            <Image
              src="/marcia-nath-logo-clean.png"
              alt="Marcia Nath Arquitetura"
              width={200}
              height={200}
              className="w-32 md:w-40 h-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="text-sm text-primary-foreground/60">
            © 2025 Marcia Nath Arquitetura. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </main>
  )
}
