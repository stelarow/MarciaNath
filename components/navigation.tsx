"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center">
            <Image
              src="/marcia-nath-logo.png"
              alt="Marcia Nath Arquitetura"
              width={280}
              height={40}
              className="h-8 md:h-10 w-auto object-contain hover:opacity-80 transition-opacity"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#trabalhos" className="text-foreground hover:text-accent transition-colors font-medium">
              Trabalhos
            </a>
            <a href="#sobre" className="text-foreground hover:text-accent transition-colors font-medium">
              Sobre
            </a>
            <a href="#contato" className="text-foreground hover:text-accent transition-colors font-medium">
              Contato
            </a>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a
                href="#trabalhos"
                className="text-foreground hover:text-accent transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Trabalhos
              </a>
              <a
                href="#sobre"
                className="text-foreground hover:text-accent transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#contato"
                className="text-foreground hover:text-accent transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
