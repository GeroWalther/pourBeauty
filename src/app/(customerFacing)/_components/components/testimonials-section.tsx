"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "@phosphor-icons/react/dist/ssr"
import { useLanguage } from '@/contexts/LanguageProvider'

const testimonials = [
  {
    name: "Sarah Baier",
    role: { de: "Verifizierter Kunde", en: "Verified Customer" },
    content: {
      de: "DERMA SKIN hat meine Haut komplett verwandelt! Nach Jahren des Kampfes mit Trockenheit und feinen Linien gab mir das Revitalisierende Serum in nur drei Wochen sichtbare Ergebnisse. Meine Haut hat noch nie besser ausgesehen.",
      en: "DERMA SKIN transformed my skin completely! After years of struggling with dryness and fine lines, the Revitalizing Serum gave me visible results in just three weeks. My skin has never looked better."
    },
  },
  {
    name: "Emily Rodriguez",
    role: { de: "Verifizierter Kunde", en: "Verified Customer" },
    content: {
      de: "Ich habe extrem empfindliche Haut und die meisten Produkte reizen sie. DERMA SKIN Produkte sind sanft und dennoch wirksam. Die Hydrierende Tagescreme ist jetzt ein fester Bestandteil meiner täglichen Routine.",
      en: "I have extremely sensitive skin and most products irritate it. DERMA SKIN products are gentle yet effective. The Hydrating Day Cream is now a staple in my daily routine."
    },
  },
  {
    name: "Christine Müller",
    role: { de: "Verifizierter Kunde", en: "Verified Customer" },
    content: {
      de: "Die Qualität ist herausragend! Dies sind professionelle Produkte, die ihre Versprechen tatsächlich einhalten. Meine Dermatologin hat sogar die Verbesserung meiner Hauttextur bemerkt.",
      en: "The quality is outstanding! These are professional-grade products that actually deliver on their promises. My dermatologist even noticed the improvement in my skin texture."
    },
  },
  {
    name: "Amanda Thompson",
    role: { de: "Verifizierter Kunde", en: "Verified Customer" },
    content: {
      de: "Die beste Hautpflege-Investition, die ich je gemacht habe. Die Aufhellende Augenbehandlung reduzierte meine dunklen Augenringe erheblich. Ich sehe jeden Tag erfrischter und jugendlicher aus!",
      en: "Best skincare investment I've ever made. The Brightening Eye Treatment reduced my dark circles significantly. I look more refreshed and youthful every day!"
    },
  },
]

export function TestimonialsSection() {
  const { language } = useLanguage()
  return (
    <section className="py-20 md:py-28 bg-background" id="testimonials">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl mb-4 text-balance">
            {language === 'de' ? 'Vertraut. Bewährt. Wirksam.' : 'Trusted. Proven. Effective.'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {language === 'de'
              ? 'Echte Ergebnisse von echten Kunden, die ihre Haut mit DERMA SKIN verwandelt haben'
              : 'Real results from real customers who transformed their skin with DERMA SKIN'}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} weight="fill" className="text-primary" />
                  ))}
                </div>
                <p className="text-card-foreground leading-relaxed mb-6">
                  {language === 'de' ? testimonial.content.de : testimonial.content.en}
                </p>
                <div>
                  <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {language === 'de' ? testimonial.role.de : testimonial.role.en}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
