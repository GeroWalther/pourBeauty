import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rückgaberecht - Miss Glow Beauty ',
  description: 'Rückgaberecht auf den Punkt gebracht.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
