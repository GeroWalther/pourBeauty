'use client';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2, Eye, Edit } from 'lucide-react';
import { deleteProduct, type ProductType } from '../_actions/product';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Image from 'next/image';
import { formatCurrency } from '@/lib/formatters';

type Props = {
  products: ProductType[];
  onEdit?: (product: ProductType) => void;
  onDelete?: () => void;
};

export default function ProductList({ products, onEdit, onDelete }: Props) {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    if (!confirm('Möchtest du dieses Produkt wirklich löschen?')) return;

    const result = await deleteProduct(id);
    if (result.success) {
      toast.success('Produkt gelöscht');
      if (onDelete) onDelete();
      router.refresh();
    } else {
      toast.error('Fehler beim Löschen');
    }
  };

  if (products.length === 0) {
    return (
      <Card className='p-5'>
        <p className='text-gray-500 text-center'>
          Keine Produkte vorhanden. Erstelle ein neues Produkt oben.
        </p>
      </Card>
    );
  }

  return (
    <div className='space-y-3'>
      <h4 className='text-lg font-semibold ml-4'>Alle Produkte</h4>
      {products.map((product) => {
        const createdDate = new Date(product.createdAt);
        
        return (
          <Card key={product.id} className='p-4'>
            <div className='flex items-start gap-4'>
              <div className='relative w-32 h-24 flex-shrink-0'>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className='object-cover rounded-md'
                />
              </div>
              
              <div className='flex-1'>
                <div className='flex items-center gap-2 mb-2'>
                  <h5 className='font-semibold text-lg'>{product.name}</h5>
                  <span className='px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded'>
                    {product.isAvailableForPurchase ? '✓ Verfügbar' : '✗ Nicht verfügbar'}
                  </span>
                </div>
                <p className='text-sm text-gray-600 mb-2 line-clamp-2'>
                  {product.shortDescriptionDe}
                </p>
                <div className='flex items-center gap-4 text-sm text-gray-500'>
                  <p>
                    <span className='font-medium'>Preis:</span>{' '}
                    {formatCurrency(product.priceInCents / 100)}
                  </p>
                  <p>
                    <span className='font-medium'>Slug:</span> {product.slug}
                  </p>
                </div>
              </div>

              <div className='flex gap-2'>
                <Button
                  variant='outline'
                  size='sm'
                  onClick={() => router.push(`/products/${product.slug}`)}
                >
                  <Eye className='w-4 h-4' />
                </Button>
                {onEdit && (
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => onEdit(product)}
                  >
                    <Edit className='w-4 h-4' />
                  </Button>
                )}
                <Button
                  variant='destructive'
                  size='sm'
                  onClick={() => handleDelete(product.id)}
                >
                  <Trash2 className='w-4 h-4' />
                </Button>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
