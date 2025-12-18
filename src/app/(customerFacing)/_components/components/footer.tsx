import { FacebookLogo, InstagramLogo, TwitterLogo, EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold mb-4">PureBeauty</h3>
            <p className="text-secondary-foreground/80 leading-relaxed mb-6">
              Professional dermatological skincare backed by science and trusted by experts worldwide.
            </p>
            <div className="flex gap-4">
              {/* <a href="#" className="hover:text-primary transition-colors">
                <FacebookLogo size={24} weight="fill" />
              </a> */}
              <a href="https://www.instagram.com/purebeauty_biological?igsh=MWs4bjUwMWc1MW5oZg%3D%3D&utm_source=qr" className="hover:text-primary transition-colors">
                <InstagramLogo size={24} weight="fill" />
              </a>
              {/* <a href="#" className="hover:text-primary transition-colors">
                <TwitterLogo size={24} weight="fill" />
              </a> */}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Shop</h4>
            <ul className="space-y-3 text-secondary-foreground/80">
              <li>
                <Link href="/shop" className="hover:text-primary transition-colors">
                  All Products
                </Link>
              </li>
           
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-3 text-secondary-foreground/80">
             <Link href="/about" className="hover:text-primary transition-colors">
              About Us
            </Link>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3 text-secondary-foreground/80">
              <li className="flex items-start gap-3">
                <EnvelopeSimple size={20} className="mt-1 flex-shrink-0" />
                <span>{process.env.NEXT_PUBLIC_ADMINEMAIL}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <span>+49 91736699940</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>An der Leiten 38,
91177 Thalmässing
Germany</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/80">© 2025 PureBeauty. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-secondary-foreground/80">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/imprint" className="hover:text-primary transition-colors">
             Imprint
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
