import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Magic Lips - PURE BEAUTY BIOLOGICAL Beauty ',
  description:
    'Magic Lips - Entdecke Magic Lips Serum von PURE BEAUTY BIOLOGICAL – ein revolutionäres Anti-Aging-Produkt für pralle, volle Lippen. Mit hochwirksamen, natürlichen Inhaltsstoffen für sichtbar definierte Lippen und ein jugendliches Aussehen.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
