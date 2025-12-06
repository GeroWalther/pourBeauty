'use client';
import { createContext, useContext, useEffect, useState } from 'react';

type SaleData = {
  isActive: boolean;
  salePercentage: number;
  saleName: string;
  saleUntil: string;
};

const SaleContext = createContext<SaleData>({
  isActive: false,
  salePercentage: 0,
  saleName: '',
  saleUntil: '',
});

export function SaleProvider({ children }: { children: React.ReactNode }) {
  const [saleData, setSaleData] = useState<SaleData>({
    isActive: false,
    salePercentage: 0,
    saleName: '',
    saleUntil: '',
  });

  useEffect(() => {
    fetch('/api/salepromotion')
      .then((res) => res.json())
      .then((data) => setSaleData(data))
      .catch((error) => {
        console.error('Error fetching sale data:', error);
      });
  }, []);

  return <SaleContext.Provider value={saleData}>{children}</SaleContext.Provider>;
}

export function useSale() {
  return useContext(SaleContext);
}

export function getSalePrice(originalPrice: number, salePercentage: number): number {
  if (salePercentage <= 0) return originalPrice;
  return Math.round(originalPrice * (1 - salePercentage / 100));
}
