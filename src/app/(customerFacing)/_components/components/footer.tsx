import { FacebookLogo, InstagramLogo, TwitterLogo, EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react/dist/ssr"

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
              <a href="#" className="hover:text-primary transition-colors">
                <FacebookLogo size={24} weight="fill" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <InstagramLogo size={24} weight="fill" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <TwitterLogo size={24} weight="fill" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Shop</h4>
            <ul className="space-y-3 text-secondary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Serums
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Moisturizers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Eye Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Treatments
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-3 text-secondary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Our Science
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3 text-secondary-foreground/80">
              <li className="flex items-start gap-3">
                <EnvelopeSimple size={20} className="mt-1 flex-shrink-0" />
                <span>support@purebeauty.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>123 Beauty Avenue, New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/80">© 2025 PureBeauty. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-secondary-foreground/80">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
