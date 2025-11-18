"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Espaço Gourmet Moderno",
    image: "/modern-dining-kitchen.jpeg",
  },
  {
    id: 2,
    title: "Design de Interiores Corporativo",
    image: "/office-workspace-shelving.jpeg",
  },
  {
    id: 3,
    title: "Recepção Empresarial",
    image: "/office-reception-desk.jpeg",
  },
  {
    id: 4,
    title: "Ambiente Corporativo Integrado",
    image: "/office-reception-full.jpeg",
  },
  {
    id: 5,
    title: "Portal Imobiliário",
    image: "/modern-real-estate-web-platform.jpg",
  },
  {
    id: 6,
    title: "Smart Home Interface",
    image: "/smart-home-control-interface.png",
  },
]

export function ProjectGrid() {
  const { ref, visibleItems } = useStaggeredAnimation(projects.length, 150)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + projects.length) % projects.length)
    }
  }

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % projects.length)
    }
  }

  const handleClose = () => {
    setSelectedImageIndex(null)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") handleClose()
    if (e.key === "ArrowLeft") handlePrevious()
    if (e.key === "ArrowRight") handleNext()
  }

  return (
    <>
      <section id="trabalhos" className="py-20 px-6 lg:px-8" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Onde a Inspiração Ganha Forma
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`group overflow-hidden border-border hover:shadow-xl transition-all duration-500 bg-card cursor-pointer ${
                  visibleItems[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                  transitionDelay: visibleItems[index] ? "0ms" : "0ms",
                }}
                onClick={() => setSelectedImageIndex(index)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-sans text-xl font-bold text-card-foreground text-balance">{project.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={handleClose}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada da imagem"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              handlePrevious()
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image container */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={projects[selectedImageIndex].image || "/placeholder.svg"}
              alt={projects[selectedImageIndex].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{projects[selectedImageIndex].title}</h3>
              <p className="text-white/70">
                {selectedImageIndex + 1} / {projects.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
