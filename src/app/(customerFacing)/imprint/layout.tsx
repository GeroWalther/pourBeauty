import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum - Miss Glow Beauty ',
  description: 'Impressum',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
