"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, ShieldCheck, Truck, ArrowLeft } from "@phosphor-icons/react"
import { getProductBySlug } from "@/config/products"
import { useCart } from "@/hooks/use-cart-hook"
import { useLanguage } from "@/contexts/LanguageProvider"
import { formatCurrency } from "@/lib/formatters"
import Link from "next/link"
import { useState } from "react"

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  const { addItem } = useCart()
  const { language } = useLanguage()
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.priceInCents / 100,
      quantity: quantity,
      image: product.image,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="mx-auto max-w-7xl px-6 py-6">
        <Link 
          href="/shop" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          {language === 'de' ? 'Zurück zum Shop' : 'Back to Shop'}
        </Link>
      </div>

      {/* Product Section */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg bg-accent">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} weight="fill" className="text-primary" />
                ))}
                <span className="text-sm text-muted-foreground">(5.0)</span>
              </div>
              <p className="text-3xl font-bold text-primary">
                {formatCurrency(product.priceInCents / 100)}
              </p>
            </div>

            <div className="prose prose-sm">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === 'de' ? product.description.de : product.description.en}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3 py-6 border-y border-border">
              <div className="flex items-center gap-3 text-sm">
                <ShieldCheck size={20} className="text-primary" weight="duotone" />
                <span className="text-foreground">
                  {language === 'de' ? 'Dermatologisch getestet' : 'Dermatologically tested'}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Truck size={20} className="text-primary" weight="duotone" />
                <span className="text-foreground">
                  {language === 'de' ? 'Kostenloser Versand ab 50€' : 'Free shipping over €50'}
                </span>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
              <Button
                size="lg"
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={handleAddToCart}
              >
                {language === 'de' ? 'In den Warenkorb' : 'Add to Cart'}
              </Button>
            </div>

            {/* Additional Info */}
            <div className="bg-accent p-6 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">
                {language === 'de' ? 'Produktinformationen' : 'Product Information'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === 'de' 
                  ? 'Alle unsere Produkte sind mit pharmazeutischen Inhaltsstoffen formuliert und klinisch getestet für optimale Wirksamkeit.'
                  : 'All our products are formulated with pharmaceutical-grade ingredients and clinically tested for optimal efficacy.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
