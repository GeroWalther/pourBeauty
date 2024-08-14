import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Magic Lips - Miss Glow Beauty ',
  description:
    'Magic Lips - Entdecke Magic Lips Serum von Miss Glow Beauty – ein revolutionäres Anti-Aging-Produkt für pralle, volle Lippen. Mit hochwirksamen, natürlichen Inhaltsstoffen für sichtbar definierte Lippen und ein jugendliches Aussehen.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
