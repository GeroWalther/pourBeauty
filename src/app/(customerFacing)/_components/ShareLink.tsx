'use client';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from '../../../components/ui/dialog';
import { Button } from '../../../components/ui/button';
import { Label } from '../../../components/ui/label';
import { Input } from '../../../components/ui/input';

import { CopyIcon } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageProvider';

export function ShareLink({ link }: { link: string }) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => setCopied(true))
      .then(() => {
        toast.success('Link copied to clipboard!');
      })
      .catch(() => setError('Failed to copy link to clipboard'));
  };

  return (
    <Dialog
      onOpenChange={(isOpen) => {
        if (!isOpen) setCopied(false);
      }}>
      <DialogTrigger asChild>
        <Button variant='outline'>
          {language == 'de' ? 'Teilen' : 'Share'}
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>
            {' '}
            {language == 'de' ? 'Link teilen' : 'Share link'}
          </DialogTitle>
          <DialogDescription>
            {language == 'de'
              ? 'Teile diesen Link mit deinen Freunden. Mit diesem Link kannst du ganz einfach dieses Produkt teilen.'
              : 'Share this link with your friends. With this link you can easily share this product.'}
          </DialogDescription>
        </DialogHeader>
        <div className='flex items-center space-x-2'>
          <div className='grid flex-1 gap-2'>
            <Label htmlFor='link' className='sr-only'>
              Link
            </Label>
            <Input id='link' defaultValue={link} readOnly />
          </div>
          <Button
            type='button'
            size='sm'
            className='px-3'
            onClick={copyToClipboard}>
            <span className='sr-only'>
              {language == 'de' ? 'Kopieren' : 'Copy'}
            </span>
            <CopyIcon className='h-4 w-4' />
          </Button>
        </div>
        <DialogFooter className='sm:justify-start'>
          <DialogClose asChild>
            <Button type='button' variant='secondary'>
              {language == 'de' ? 'Schließen' : 'Close'}
            </Button>
          </DialogClose>
        </DialogFooter>
        {copied && (
          <p className='text-sm text-green-500'>
            {language == 'de' ? 'Link kopiert!' : 'Link copied!'}
          </p>
        )}
        {error && <p className='text-sm text-red-500'>{error}</p>}
      </DialogContent>
    </Dialog>
  );
}
