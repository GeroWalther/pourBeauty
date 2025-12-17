import { Button } from "@/components/ui/button"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl mb-6 text-balance">
            Ready to Transform Your Skin?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Join thousands of satisfied customers and experience the PureBeauty difference. Professional results, backed
            by science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              Shop Collection
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
