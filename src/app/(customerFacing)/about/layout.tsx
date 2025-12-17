import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über uns - PureBeauty ',
  description: 'Was steck dahinter - erfahren Sie mehr über PureBeauty.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
