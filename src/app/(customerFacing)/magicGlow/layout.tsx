import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Magic Glow Creme - Miss Glow Beauty',
  description:
    'Entdecken Sie die verjüngende Wirkung der Magic Glow Creme von Miss Glow Beauty. Mit natürlichen OLIGOpeptiden und Centella asiatica verlangsamt sie die Hautalterung, reduziert Falten und sorgt für intensive Hautstraffung. Ideal für alle, die sich eine jugendliche Haut wünschen.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
