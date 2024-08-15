import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'MISS GLOW BEAUTZ',
  description:
    'Willkommen zu deiner neuen Lieblingsmarke, Hol dir deinen GLOW LOOK!.',
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
  // authors: ['Miss Glow Team']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='de'>
      <body
        className={cn(
          'bg-background min-h-screen font-sans antialiased',
          inter.variable
        )}>
        {children}
      </body>
    </html>
  );
}
