import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum - POUR BEAUTY BIOLOGICAL ',
  description: 'Impressum',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
