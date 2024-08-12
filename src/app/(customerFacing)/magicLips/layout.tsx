import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Magic Lips - Miss Glow Beauty ',
  description: 'Magic Lips',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
