import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über uns - POUR BEAUTY BIOLOGICAL ',
  description:
    'Was steck dahinter - erfahren Sie mehr über POUR BEAUTY BIOLOGICAL.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
