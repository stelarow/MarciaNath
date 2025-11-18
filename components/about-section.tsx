"use client"

import { Card } from "@/components/ui/card"
import { Users, Lightbulb, Target, Award } from "lucide-react"
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

const values = [
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Sempre buscamos soluções criativas e tecnologias emergentes para criar experiências únicas",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Trabalhamos em parceria próxima com nossos clientes para entender e superar suas expectativas",
  },
  {
    icon: Target,
    title: "Precisão",
    description: "Cada detalhe importa. Focamos na execução perfeita de cada elemento do projeto",
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Comprometidos com a qualidade superior em todos os aspectos do nosso trabalho",
  },
]

export function AboutSection() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()
  const { ref: valuesRef, visibleItems } = useStaggeredAnimation(values.length, 200)
  const { ref: photoRef, isVisible: photoVisible } = useScrollAnimation()

  return (
    <section
      id="sobre"
      className="py-20 px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: "url('/butterfly-dragonfly-pattern.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              ref={photoRef}
              className={`transition-all duration-800 ease-out ${
                photoVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/architect-photo.png"
                  alt="Arquiteta Márcia"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </div>

            <div
              className={`transition-all duration-800 ease-out delay-200 ${
                photoVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Conheça a Arquiteta
              </h2>
              <p className="text-xl text-muted-foreground mb-6 text-pretty leading-relaxed">
                Com mais de 8 anos de experiência em arquitetura e design, Márcia lidera projetos que transformam
                espaços em experiências memoráveis.
              </p>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Sua abordagem combina sensibilidade estética com funcionalidade prática, criando ambientes que refletem
                a personalidade e necessidades de cada cliente.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            ref={contentRef}
            className={`transition-all duration-800 ease-out ${
              contentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Criamos o Futuro do Design
            </h2>

            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Somos um estúdio de design focado em projetos que transformam ideias em realidades vibrantes. Nossa paixão
              é criar experiências digitais e físicas que conectam pessoas e marcas de forma autêntica e impactante.
            </p>

            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              Com uma abordagem multidisciplinar, combinamos arquitetura, design digital, branding e tecnologia para
              entregar soluções completas e inovadoras.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-muted-foreground">Projetos Concluídos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">8</div>
                <div className="text-muted-foreground">Anos de Experiência</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" ref={valuesRef}>
            {values.map((value, index) => (
              <Card
                key={index}
                className={`p-6 bg-card/95 backdrop-blur-sm border-border hover:shadow-lg transition-all duration-600 ease-out ${
                  visibleItems[index] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
                }`}
              >
                <value.icon className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-sans text-lg font-bold text-card-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm text-pretty leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
