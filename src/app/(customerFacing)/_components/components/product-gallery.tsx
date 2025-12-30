"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "@phosphor-icons/react"
import { useCart } from "@/hooks/use-cart-hook"
import { useLanguage } from "@/contexts/LanguageProvider"
import { formatCurrency } from "@/lib/formatters"
import Link from "next/link"
import { useState, useEffect } from "react"
import type { Product } from "@/config/products"
import { getAllProducts } from "@/app/admin/_actions/product"
import { transformDbProduct } from "@/config/products"

export function ProductGallery() {
  const { addItem } = useCart()
  const { language } = useLanguage()
  const [products, setProducts] = useState<Product[]>([])
  
  useEffect(() => {
    getAllProducts().then(dbProducts => {
      setProducts(dbProducts.map(transformDbProduct))
    })
  }, [])

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
            <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-shadow border-0 flex flex-col">
              <Link href={`/products/${product.slug}`}>
                <div className="aspect-square overflow-hidden bg-card cursor-pointer">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              <CardContent className="p-6 bg-card flex flex-col h-full">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} weight="fill" className="text-primary" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">(5.0)</span>
                </div>
                <Link href={`/products/${product.slug}`}>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2 hover:text-primary transition-colors cursor-pointer">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                  {language === 'de' ? product.shortDescription.de : product.shortDescription.en}
                </p>
                <div className="mt-auto space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{formatCurrency(product.priceInCents / 100)}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="default" 
                      size="sm"
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={() => handleAddToCart(product)}
                    >
                      {language === 'de' ? 'In den Warenkorb' : 'Add to Cart'}
                    </Button>
                    <Link href={`/products/${product.slug}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        {language === 'de' ? 'Details' : 'Details'}
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
