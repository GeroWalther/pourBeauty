'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { formatCurrency } from '@/lib/formatters';
import { useState } from 'react';
import { addProduct } from '../../_actions/products';

export default function ProductForm() {
  const [priceInCents, setPriceInCents] = useState<number>();
  const [images, setImages] = useState<File[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileList = Array.from(files);
      setImages(fileList);
    }
  };

  return (
    <form action={addProduct} className='space-y-8'>
      <div className='space-y-2'>
        <Label htmlFor='name'>Name</Label>
        <Input type='text' id='name' name='name' required />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='priceInCents'>Preis in Cent</Label>
        <Input
          type='number'
          id='priceInCents'
          name='priceInCents'
          required
          value={priceInCents}
          onChange={(e) => setPriceInCents(Number(e.target.value) || undefined)}
        />
        <div className='text-muted-foreground'>
          {formatCurrency((priceInCents || 0) / 100)}
        </div>
      </div>
      <div className='space-y-2'>
        <Label htmlFor='description'>Beschreibung</Label>
        <Textarea id='description' name='description' required />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='images'>Bilder</Label>
        <Input
          type='file'
          id='images'
          name='images'
          required
          multiple
          onChange={handleImageChange}
        />
      </div>
      <Button type='submit'>Speichern</Button>
    </form>
  );
}
