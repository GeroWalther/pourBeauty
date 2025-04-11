import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fresh Eyes - PURE BEAUTY BIOLOGICAL Beauty',
  description:
    'Entdecken Sie die verjüngende Wirkung des Fresh Eyes Serums von PURE BEAUTY BIOLOGICAL. Ausgezeichnete Wirkstoffe für sichtbare Faltenreduzierung, Lifting und Straffung der empfindlichen Augenpartie. Geeignet für alle Frauen, die sich verjüngen oder ein jugendliches Aussehen bewahren möchten.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
