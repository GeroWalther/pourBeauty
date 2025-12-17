import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BETOX SERUM - PureBeauty',
  description:
    'Entdecken Sie die verjüngende Wirkung des BETOX SERUM von PureBeauty. Ausgezeichnete Wirkstoffe für sichtbare Faltenreduzierung, Lifting und Straffung der empfindlichen Augenpartie. Geeignet für alle Frauen, die sich verjüngen oder ein jugendliches Aussehen bewahren möchten.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
