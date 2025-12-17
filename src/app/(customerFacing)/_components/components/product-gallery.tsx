import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "@phosphor-icons/react/dist/ssr"

const products = [
  {
    name: "Revitalizing Serum",
    price: "$89.00",
    rating: 5.0,
    image: "/luxury-serum-bottle-on-white-background.jpg",
    description: "Advanced anti-aging formula that reduces fine lines and wrinkles by 64% within one month.",
  },
  {
    name: "Hydrating Day Cream",
    price: "$69.00",
    rating: 5.0,
    image: "/elegant-face-cream-jar-white-background.jpg",
    description: "Intense moisture with SPF protection for all-day hydration and sun defense.",
  },
  {
    name: "Brightening Eye Treatment",
    price: "$79.00",
    rating: 5.0,
    image: "/eye-cream-tube-minimalist-white-background.jpg",
    description: "Targets dark circles and puffiness while smoothing the delicate eye area.",
  },
  {
    name: "Purifying Night Mask",
    price: "$75.00",
    rating: 5.0,
    image: "/skincare-mask-jar-clean-white-background.jpg",
    description: "Overnight treatment that deeply cleanses and rejuvenates while you sleep.",
  },
]

export function ProductGallery() {
  return (
    <section className="py-20 md:py-28 bg-accent" id="products">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl mb-4 text-balance">
            Our Signature Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Premium formulations designed to address your unique skincare needs
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow border-0">
              <div className="aspect-square overflow-hidden bg-card">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 bg-card">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} weight="fill" className="text-primary" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">({product.rating})</span>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <Button variant="outline" size="sm">
                    Shop
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
