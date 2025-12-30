"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import { useCart } from "@/hooks/use-cart-hook"
import Cart from "../Cart"
import LanguageSwitcher from "../SwitchLang"
import { useLanguage } from "@/contexts/LanguageProvider"
import { List, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.product.quantity, 0)
  const { language } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <div className="text-2xl font-bold tracking-tight text-primary">PURE BEAUTY DermaSkin</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/shop" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            {language === 'de' ? 'Produkte' : 'Products'}
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            {language === 'de' ? 'Über uns' : 'About'}
          </Link>
          <Link href="/blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Blog
          </Link>
          <Link href="/imprint" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            {language === 'de' ? 'Kontakt' : 'Contact'}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Cart />
          <Link href="/shop">
            <Button className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90">
              {language === 'de' ? 'Jetzt kaufen' : 'Shop Now'}
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="mx-auto max-w-7xl flex flex-col gap-4 px-6 py-6">
            <Link  onClick={() => setMobileMenuOpen(false)} href="/shop" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              {language === 'de' ? 'Produkte' : 'Products'}
            </Link>
            <Link  onClick={() => setMobileMenuOpen(false)} href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              {language === 'de' ? 'Über uns' : 'About'}
            </Link>
            <Link  onClick={() => setMobileMenuOpen(false)} href="/blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/imprint" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              {language === 'de' ? 'Kontakt' : 'Contact'}
            </Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/shop">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                {language === 'de' ? 'Jetzt kaufen' : 'Shop Now'}
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
