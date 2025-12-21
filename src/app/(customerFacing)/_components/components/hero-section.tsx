"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"
import { useLanguage } from "@/contexts/LanguageProvider"
import Link from "next/link"

export function HeroSection() {
  const { language } = useLanguage()
  
  return (
    <section className="relative overflow-hidden bg-accent">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              <span className="h-px w-8 bg-primary"></span>
              {language === 'de' ? 'Professionelle Dermatologie' : 'Professional Dermatology'}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance">
              {language === 'de' ? 'Verwandeln Sie Ihre Haut mit moderner Hautwissenschaft' : 'Transform Your Skin with Science-Backed Skincare'}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              {language === 'de' 
                ? 'Erleben Sie Hautpflege in pharmazeutischer Qualität, die auf dermatologischer Wissenschaft basiert. Unsere fortschrittlichen Formulierungen liefern sichtbare Ergebnisse für gesündere, strahlende Haut.'
                : 'Experience pharmaceutical-grade skincare backed by dermatological science. Our advanced formulations deliver visible results for healthier, radiant skin.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  {language === 'de' ? 'Produkte erkunden' : 'Explore Products'}
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  {language === 'de' ? 'Mehr erfahren' : 'Learn More'}
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px]">
            <img src="/elegant-dermatology-skincare-products-on-clean-whi.jpg" alt="PureBeauty Products" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
