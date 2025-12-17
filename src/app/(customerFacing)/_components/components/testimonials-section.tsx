import { Card, CardContent } from "@/components/ui/card"
import { Star } from "@phosphor-icons/react/dist/ssr"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Verified Customer",
    content:
      "PureBeauty transformed my skin completely! After years of struggling with dryness and fine lines, the Revitalizing Serum gave me visible results in just three weeks. My skin has never looked better.",
  },
  {
    name: "Emily Rodriguez",
    role: "Verified Customer",
    content:
      "I have extremely sensitive skin and most products irritate it. PureBeauty products are gentle yet effective. The Hydrating Day Cream is now a staple in my daily routine.",
  },
  {
    name: "Jessica Chen",
    role: "Verified Customer",
    content:
      "The quality is outstanding! These are professional-grade products that actually deliver on their promises. My dermatologist even noticed the improvement in my skin texture.",
  },
  {
    name: "Amanda Thompson",
    role: "Verified Customer",
    content:
      "Best skincare investment I've ever made. The Brightening Eye Treatment reduced my dark circles significantly. I look more refreshed and youthful every day!",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-background" id="testimonials">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl mb-4 text-balance">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real results from real customers who transformed their skin with PureBeauty
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
                <p className="text-card-foreground leading-relaxed mb-6">{testimonial.content}</p>
                <div>
                  <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
