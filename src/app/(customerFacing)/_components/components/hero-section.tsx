import { Button } from "@/components/ui/button"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-accent">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              <span className="h-px w-8 bg-primary"></span>
              Professional Dermatology
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
              Transform Your Skin with Clinical Excellence
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Experience pharmaceutical-grade skincare backed by dermatological science. Our advanced formulations
              deliver visible results for healthier, radiant skin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Explore Products
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px]">
            <img src="/elegant-dermatology-skincare-products-on-clean-whi.jpg" alt="DermaSkin Products" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
