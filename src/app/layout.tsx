import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
})
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'PureBeauty - Professional Dermatology Skincare',
  description:
    'Premium pharmaceutical-grade skincare products for radiant, healthy skin',
  keywords: [
    'cosmetics',
    'beauty products',
    'skincare',
    'makeup',
    'beauty trends',
    'self-care',
    'beauty tips',
    'women empowerment',
    'organic beauty',
    'cruelty-free cosmetics',
    'vegan beauty',
    'natural skincare',
    'anti-aging',
    'facial care',
    'beauty routines',
    'glowing skin',
    'luxury beauty',
    'beauty influencer',
    'eco-friendly beauty',
    'clean beauty',
    'beauty tutorials',
    'makeup tutorials',
    'skincare routines',
    'beauty hacks',
    'dermatologist-recommended',
    'moisturizers',
    'serums',
    'lip care',
    'eye care',
    'beauty reviews',
    'beauty community',
    'healthy skin',
    'sustainable beauty',
    'personal care',
    'fragrance-free cosmetics',
    'paraben-free',
    'beauty for all skin types',
    'beauty tips for women',
    'Kosmetik',
    'Beauty-Produkte',
    'Make-up',
    'Beauty-Trends',
    'Selbstpflege',
    'Haarpflege',
    'Beauty-Tipps',
    'Frauenpower',
    'Naturkosmetik',
    'tierversuchsfreie Kosmetik',
    'vegane Kosmetik',
    'natürliche Hautpflege',
    'Anti-Aging',
    'Gesichtspflege',
    'Beauty-Routinen',
    'strahlende Haut',
    'Beauty-Blog',
    'Luxus-Beauty',
    'Beauty-Influencer',
    'umweltfreundliche Kosmetik',
    'saubere Kosmetik',
    'Beauty-Tutorials',
    'Make-up-Tutorials',
    'Hautpflegeroutinen',
    'Haarstyling',
    'Beauty-Hacks',
    'dermatologisch empfohlen',
    'Feuchtigkeitscremes',
    'Seren',
    'Gesichtsmasken',
    'Lippenpflege',
    'Augenpflege',
    'Beauty-Bewertungen',
    'Beauty-Community',
    'gesunde Haut',
    'nachhaltige Kosmetik',
    'Körperpflege',
    'duftfreie Kosmetik',
    'ohne Parabene',
    'Beauty für alle Hauttypen',
    'Beauty-Tipps für Frauen',
  ],
  // authors: ['PureBeauty Team'],
  openGraph: {
    title: 'PureBeauty - Professional Dermatology Skincare',
    description:
      'Premium pharmaceutical-grade skincare products for radiant, healthy skin',
    url: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
    images: [
      {
        url: `/MagicGlowCreme.JPG`,
        width: 1200,
        height: 630,
        alt: 'PureBeauty - Logo',
      },
    ],
    siteName: 'PureBeauty',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='de'>
      <body
         className={`${nunitoSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
