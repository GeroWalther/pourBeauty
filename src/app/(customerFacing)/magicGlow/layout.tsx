import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Magic Glow Creme - PURE BEAUTY BIOLOGICAL Beauty',
  description:
    'Entdecken Sie die verjüngende Wirkung der Magic Glow Creme von PURE BEAUTY BIOLOGICAL Beauty. Mit natürlichen OLIGOpeptiden und Centella asiatica verlangsamt sie die Hautalterung, reduziert Falten und sorgt für intensive Hautstraffung. Ideal für alle, die sich eine jugendliche Haut wünschen.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
