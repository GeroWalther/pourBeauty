import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über uns - PURE BEAUTY BIOLOGICAL ',
  description:
    'Was steck dahinter - erfahren Sie mehr über PURE BEAUTY BIOLOGICAL.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
