"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ContactSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="contato" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" ref={titleRef}>
          <h2
            className={`font-sans text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance transition-all duration-800 ease-out ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Vamos Criar Juntos
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-2xl mx-auto text-pretty transition-all duration-800 ease-out delay-200 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Pronto para transformar sua ideia em realidade? Entre em contato e vamos conversar sobre seu próximo projeto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12" ref={contentRef}>
          <div
            className={`transition-all duration-800 ease-out ${
              contentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h3 className="font-sans text-2xl font-bold text-foreground mb-6">Informações de Contato</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Email</div>
                  <div className="text-muted-foreground">contato@projetos.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Telefone</div>
                  <div className="text-muted-foreground">+55 (11) 9999-9999</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Localização</div>
                  <div className="text-muted-foreground">São Paulo, Brasil</div>
                </div>
              </div>
            </div>
          </div>

          <Card
            className={`p-8 bg-card border-border transition-all duration-800 ease-out delay-300 ${
              contentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Nome</label>
                  <Input placeholder="Seu nome" className="bg-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Email</label>
                  <Input type="email" placeholder="seu@email.com" className="bg-background" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Assunto</label>
                <Input placeholder="Assunto da mensagem" className="bg-background" />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Mensagem</label>
                <Textarea placeholder="Conte-nos sobre seu projeto..." rows={5} className="bg-background" />
              </div>

              <Button size="lg" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
