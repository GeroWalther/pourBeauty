'use client'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"
import { useLanguage } from "@/contexts/LanguageProvider"
import Link from "next/link"

export function CTASection() {
  const { language } = useLanguage()
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl mb-6 text-balance">
            Ready to Transform Your Skin?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            {language === 'de' ?
            "Schließen Sie sich Tausenden zufriedener Kunden an und erleben Sie den Unterschied mit Pure Beauty Biological. Professionelle Ergebnisse, unterstützt durch Wissenschaft."
            :
            "Join thousands of satisfied customers and experience the Pure Beauty Biological difference. Professional results, backed by science."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/shop">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90 text-2xl font-semibold">
              Shop 
              <ArrowRight size={20} className="ml-2" />
            </Button>
        </Link>
        <a href="mailto:info@purebeautybiological.com">
            <Button
          size="lg"
          variant="outline"
          className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent text-xl font-semibold"
          >
              Book Consultation
            </Button>
              </a>
          </div>
        </div>
      </div>
    </section>
  )
}
