import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop - PURE BEAUTY BIOLOGICAL Beauty ',
  description: 'Shop - Entdecke alle unsere Produkte',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
