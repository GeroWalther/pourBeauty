'use client';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { deleteSalePromotion, type SalePromotionType } from '../_actions/getSalePromotion';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

type Props = {
  salePromotions: SalePromotionType[];
};

export default function SalePromotionList({ salePromotions }: Props) {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    if (!confirm('Möchtest du diese Rabattaktion wirklich löschen?')) return;

    const result = await deleteSalePromotion(id);
    if (result.success) {
      toast.success('Rabattaktion gelöscht');
      router.refresh();
    } else {
      toast.error('Fehler beim Löschen');
    }
  };

  if (salePromotions.length === 0) {
    return (
      <Card className='p-5'>
        <p className='text-gray-500 text-center'>
          Keine Rabattaktionen vorhanden. Erstelle eine neue Aktion oben.
        </p>
      </Card>
    );
  }

  return (
    <div className='space-y-3'>
      <h4 className='text-lg font-semibold'>Alle Rabattaktionen</h4>
      {salePromotions.map((promo) => {
        const now = new Date();
        const start = new Date(promo.saleStartDate);
        const end = new Date(promo.saleUntil);
        const isCurrentlyActive = now >= start && now <= end;
        const isFuture = now < start;
        const isExpired = now > end;

        return (
          <Card key={promo.id} className='p-4'>
            <div className='flex items-center justify-between'>
              <div className='flex-1'>
                <div className='flex items-center gap-3 mb-2'>
                  <h5 className='font-semibold text-lg'>{promo.saleName}</h5>
                  <span className='text-2xl font-bold text-orange-600'>
                    -{promo.salePercentage}%
                  </span>
                  {isCurrentlyActive && (
                    <span className='px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded'>
                      🟢 AKTIV
                    </span>
                  )}
                  {isFuture && (
                    <span className='px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded'>
                      🔵 GEPLANT
                    </span>
                  )}
                  {isExpired && (
                    <span className='px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded'>
                      ⚫ ABGELAUFEN
                    </span>
                  )}
                </div>
                <div className='text-sm text-gray-600'>
                  <p>
                    <span className='font-medium'>Start:</span>{' '}
                    {start.toLocaleDateString('de-DE', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    })}
                  </p>
                  <p>
                    <span className='font-medium'>Ende:</span>{' '}
                    {end.toLocaleDateString('de-DE', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>
              <Button
                variant='destructive'
                size='sm'
                onClick={() => handleDelete(promo.id)}
              >
                <Trash2 className='w-4 h-4' />
              </Button>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
