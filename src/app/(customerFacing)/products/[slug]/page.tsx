"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, ShieldCheck, Truck, ArrowLeft } from "@phosphor-icons/react"
import { getProductBySlug, products } from "@/config/products"
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

      {/* Detailed Explanation Section */}
      <div className="bg-accent py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {language === 'de' ? 'Detaillierte Produktbeschreibung' : 'Detailed Product Description'}
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                {language === 'de' 
                  ? product.description.de
                  : product.description.en}
              </p>
              <div className="grid md:grid-cols-2 gap-6 pt-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">
                    {language === 'de' ? 'Hauptvorteile' : 'Key Benefits'}
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        {language === 'de' 
                          ? 'Klinisch getestete Formel'
                          : 'Clinically tested formula'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        {language === 'de' 
                          ? 'Dermatologisch zugelassen'
                          : 'Dermatologically approved'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        {language === 'de' 
                          ? 'Sichtbare Ergebnisse innerhalb von Wochen'
                          : 'Visible results within weeks'}
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">
                    {language === 'de' ? 'Anwendung' : 'How to Use'}
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">1.</span>
                      <span>
                        {language === 'de' 
                          ? 'Auf gereinigte Haut auftragen'
                          : 'Apply to cleansed skin'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">2.</span>
                      <span>
                        {language === 'de' 
                          ? 'Sanft einmassieren bis vollständig eingezogen'
                          : 'Gently massage until fully absorbed'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">3.</span>
                      <span>
                        {language === 'de' 
                          ? 'Morgens und abends verwenden für beste Ergebnisse'
                          : 'Use morning and evening for best results'}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {language === 'de' ? 'Das könnte Ihnen auch gefallen' : 'You May Also Like'}
            </h2>
            <p className="text-muted-foreground">
              {language === 'de' 
                ? 'Entdecken Sie weitere Produkte aus unserer Kollektion'
                : 'Discover more products from our collection'}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products
              .filter(p => p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link 
                  key={relatedProduct.id} 
                  href={`/products/${relatedProduct.slug}`}
                  className="group flex"
                >
                  <div className="overflow-hidden rounded-lg bg-card border border-border hover:shadow-lg transition-all flex flex-col w-full">
                    <div className="aspect-square overflow-hidden bg-accent">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} weight="fill" className="text-primary" />
                        ))}
                        <span className="text-xs text-muted-foreground ml-2">(5.0)</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                        {language === 'de' ? relatedProduct.shortDescription.de : relatedProduct.shortDescription.en}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-2xl font-bold text-primary">
                          {formatCurrency(relatedProduct.priceInCents / 100)}
                        </span>
                        <span className="text-sm text-primary font-medium group-hover:underline">
                          {language === 'de' ? 'Details ansehen →' : 'View Details →'}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
