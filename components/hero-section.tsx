"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-0 pb-20 md:pb-0">
      <div className="absolute inset-0 z-0 bg-background" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <h1
              className={`font-sans text-5xl md:text-7xl lg:text-8xl font-bold text-foreground text-balance transition-all duration-1000 ease-out ${
                isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              Arquitetura de
              <span
                className={`block text-accent transition-all duration-1000 ease-out delay-300 ${
                  isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                Interiores
              </span>
            </h1>

            <p
              className={`text-xl md:text-2xl text-muted-foreground max-w-xl text-pretty leading-relaxed transition-all duration-1000 ease-out delay-500 ${
                isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              Criando espaços inspiradores
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out delay-700 ${
                isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <Button size="lg" className="text-lg px-8 py-6">
                Ver Trabalhos
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Sobre Nós
              </Button>
            </div>
          </div>

          {/* Right side - Floating sketch image */}
          <div
            className={`relative transition-all duration-1000 ease-out delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative aspect-square w-full max-w-xs md:max-w-lg mx-auto lg:ml-auto">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 hover:-translate-y-2 transform transition-transform">
                <Image
                  src="/hero-sketch.png"
                  alt="Sketch de arquitetura de interiores por Márcia Nath"
                  fill
                  className="object-contain p-4 bg-[#f5f3ed]"
                  priority
                />
              </div>
              {/* Decorative shadow element for floating effect */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-accent/10 blur-2xl rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 ease-out delay-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
