"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="py-20 md:py-28 bg-accent" id="contact">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl mb-4 text-balance">
              Get Exclusive Offers & Skincare Tips
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Subscribe to our newsletter and receive:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>15% off your first order</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>Early access to new product launches</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>Expert skincare advice from dermatologists</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>Exclusive promotions and special offers</span>
              </li>
            </ul>
          </div>
          <div className="bg-card p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <Input id="name" type="text" placeholder="Enter your name" className="w-full" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Subscribe Now
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
