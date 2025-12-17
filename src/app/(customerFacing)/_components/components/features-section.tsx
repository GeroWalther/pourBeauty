"use client"

import { Sparkle, ShieldCheck, Flask, Heart } from "@phosphor-icons/react/dist/ssr"
import { useLanguage } from "@/contexts/LanguageProvider"

export function FeaturesSection() {
  const { language } = useLanguage()
  
  const features = [
    {
      icon: Flask,
      title: language === 'de' ? 'Klinische Formel' : 'Clinical Formula',
      description: language === 'de' 
        ? 'Von Dermatologen mit pharmazeutischen Inhaltsstoffen für maximale Wirksamkeit entwickelt.'
        : 'Developed by dermatologists using pharmaceutical-grade ingredients for maximum efficacy.',
    },
    {
      icon: ShieldCheck,
      title: language === 'de' ? 'Dermatologisch getestet' : 'Dermatologically Tested',
      description: language === 'de'
        ? 'Alle Produkte werden streng getestet und sind für alle Hauttypen, einschließlich empfindlicher Haut, sicher.'
        : 'All products are rigorously tested and proven safe for all skin types, including sensitive skin.',
    },
    {
      icon: Sparkle,
      title: language === 'de' ? 'Sichtbare Ergebnisse' : 'Visible Results',
      description: language === 'de'
        ? 'Erleben Sie spürbare Verbesserungen der Hauttextur, des Hauttons und der Ausstrahlung innerhalb von Wochen.'
        : 'Experience noticeable improvements in skin texture, tone, and radiance within weeks.',
    },
    {
      icon: Heart,
      title: language === 'de' ? 'Sauber & Ethisch' : 'Clean & Ethical',
      description: language === 'de'
        ? 'Tierversuchsfreie, vegane Formulierungen ohne schädliche Chemikalien oder künstliche Duftstoffe.'
        : 'Cruelty-free, vegan-friendly formulations without harmful chemicals or artificial fragrances.',
    },
  ]
  
  return (
    <section className="py-20 md:py-28 bg-background" id="about">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl mb-4 text-balance">
            {language === 'de' ? 'Warum DermaSkin wählen' : 'Why Choose DermaSkin'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {language === 'de'
              ? 'Professionelle Hautpflege, die wissenschaftliche Innovation mit natürlichen Inhaltsstoffen kombiniert'
              : 'Professional-grade skincare that combines scientific innovation with natural ingredients'}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-4 p-6">
              <div className="flex h-16 w-16 items-center justify-center bg-primary/10 text-primary">
                <feature.icon size={32} weight="duotone" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
