import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über uns - Miss Glow Beauty ',
  description: 'Was steck dahinter - erfahren Sie mehr über Miss Glow Beauty.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
