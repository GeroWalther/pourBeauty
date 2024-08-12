import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutz - Miss Glow Beauty ',
  description: 'Unser Datenschutz auf einen Blick',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
