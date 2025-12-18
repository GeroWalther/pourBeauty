"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "@phosphor-icons/react"
import Link from "next/link"
import Image from "next/image"
import { products } from "@/config/products"
import { formatCurrency } from "@/lib/formatters"
import { useLanguage } from "@/contexts/LanguageProvider"

export default function ShopPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl mb-4 text-balance">
              {language === 'de' ? 'Alle Produkte' : 'All Products'}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {language === 'de'
                ? 'Entdecken Sie unsere komplette Kollektion pharmazeutischer Hautpflege'
                : 'Explore our complete collection of pharmaceutical-grade skincare'}
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-shadow border-border">
                <Link href={`/${product.slug}`}>
                  <div className="aspect-square overflow-hidden bg-card relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
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
                    <span className="text-2xl font-bold text-primary">
                      {formatCurrency(product.priceInCents / 100)}
                    </span>
                    <Link href={`/products/${product.slug}`}>
                      <Button variant="outline" size="sm">
                        {language === 'de' ? 'Details' : 'View Details'}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
