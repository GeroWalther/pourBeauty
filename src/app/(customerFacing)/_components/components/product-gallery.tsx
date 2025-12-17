"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "@phosphor-icons/react"
import { products } from "@/config/products"
import { useCart } from "@/hooks/use-cart-hook"
import { useLanguage } from "@/contexts/LanguageProvider"
import { formatCurrency } from "@/lib/formatters"

export function ProductGallery() {
  const { addItem } = useCart()
  const { language } = useLanguage()

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.priceInCents / 100,
      quantity: 1,
      image: product.image,
    })
  }
  
  return (
    <section className="py-20 md:py-28 bg-accent" id="products">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl mb-4 text-balance">
            {language === 'de' ? 'Unsere Signature Collection' : 'Our Signature Collection'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {language === 'de' 
              ? 'Premium-Formulierungen zur Behandlung Ihrer individuellen Hautpflegebedürfnisse'
              : 'Premium formulations designed to address your unique skincare needs'}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-shadow border-0">
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
                  <span className="text-sm text-muted-foreground ml-2">(5.0)</span>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {language === 'de' ? product.shortDescription.de : product.shortDescription.en}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{formatCurrency(product.priceInCents / 100)}</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                  >
                    {language === 'de' ? 'In den Warenkorb' : 'Add to Cart'}
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
