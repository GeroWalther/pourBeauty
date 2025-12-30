'use client';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { FormEvent, useState, useRef, useEffect } from 'react';
import { createProduct, updateProduct, type ProductType } from '../_actions/product';
import { toast } from 'sonner';
import { X } from 'lucide-react';

interface ProductFormProps {
  editProduct?: ProductType;
  onCancel?: () => void;
  onSuccess?: () => void;
}

export default function ProductForm({ editProduct, onCancel, onSuccess }: ProductFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const [allImages, setAllImages] = useState<string[]>(() => {
    if (editProduct) {
      // Combine main image and additional images
      return [editProduct.image, ...editProduct.images.filter(img => img !== editProduct.image)];
    }
    return [];
  });
  const [keyBenefitsEn, setKeyBenefitsEn] = useState<string[]>(editProduct?.keyBenefitsEn || ['']);
  const [keyBenefitsDe, setKeyBenefitsDe] = useState<string[]>(editProduct?.keyBenefitsDe || ['']);
  const [howToUseEn, setHowToUseEn] = useState<string[]>(editProduct?.howToUseEn || ['']);
  const [howToUseDe, setHowToUseDe] = useState<string[]>(editProduct?.howToUseDe || ['']);

  // Update form when editProduct changes (when clicking Edit button)
  useEffect(() => {
    if (editProduct) {
      // Load images from edit product
      const productImages = [editProduct.image, ...editProduct.images.filter(img => img !== editProduct.image)];
      setAllImages(productImages);
      
      // Load other fields
      setKeyBenefitsEn(editProduct.keyBenefitsEn.length > 0 ? editProduct.keyBenefitsEn : ['']);
      setKeyBenefitsDe(editProduct.keyBenefitsDe.length > 0 ? editProduct.keyBenefitsDe : ['']);
      setHowToUseEn(editProduct.howToUseEn.length > 0 ? editProduct.howToUseEn : ['']);
      setHowToUseDe(editProduct.howToUseDe.length > 0 ? editProduct.howToUseDe : ['']);
    }
  }, [editProduct]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploadingImage(true);

    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        const response = await fetch(
          `/api/upload-product-image?filename=${encodeURIComponent(file.name)}`,
          {
            method: 'POST',
            body: file,
          }
        );
        const blob = await response.json();
        return blob.url;
      });

      const uploadedUrls = await Promise.all(uploadPromises);
      setAllImages([...allImages, ...uploadedUrls]);
      toast.success(`${uploadedUrls.length} Bild(er) hochgeladen`);
    } catch (error) {
      toast.error('Fehler beim Hochladen');
    } finally {
      setUploadingImage(false);
      // Reset file input
      e.target.value = '';
    }
  };

  const moveImage = (index: number, direction: 'up' | 'down') => {
    const newImages = [...allImages];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newImages.length) return;
    
    [newImages[index], newImages[targetIndex]] = [newImages[targetIndex], newImages[index]];
    setAllImages(newImages);
  };

  const removeImage = (index: number) => {
    if (allImages.length === 1) {
      toast.error('Mindestens ein Bild ist erforderlich');
      return;
    }
    setAllImages(allImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (allImages.length === 0) {
      toast.error('Mindestens ein Bild ist erforderlich');
      setIsLoading(false);
      return;
    }

    const formData = new FormData(e.currentTarget);

    const productData = {
      name: formData.get('name') as string,
      slug: formData.get('slug') as string,
      priceInCents: parseInt(formData.get('priceInCents') as string),
      image: allImages[0], // First image is the main image
      images: allImages,
      descriptionEn: formData.get('descriptionEn') as string,
      descriptionDe: formData.get('descriptionDe') as string,
      shortDescriptionEn: formData.get('shortDescriptionEn') as string,
      shortDescriptionDe: formData.get('shortDescriptionDe') as string,
      keyBenefitsEn: keyBenefitsEn.filter((b) => b.trim() !== ''),
      keyBenefitsDe: keyBenefitsDe.filter((b) => b.trim() !== ''),
      howToUseEn: howToUseEn.filter((h) => h.trim() !== ''),
      howToUseDe: howToUseDe.filter((h) => h.trim() !== ''),
      isAvailableForPurchase: formData.get('isAvailableForPurchase') === 'on',
    };

    const result = editProduct
      ? await updateProduct(editProduct.id, productData)
      : await createProduct(productData);

    setIsLoading(false);

    if (result.success) {
      toast.success(editProduct ? 'Produkt aktualisiert' : 'Produkt erstellt');
      if (!editProduct) {
        formRef.current?.reset();
        setAllImages([]);
        setKeyBenefitsEn(['']);
        setKeyBenefitsDe(['']);
        setHowToUseEn(['']);
        setHowToUseDe(['']);
        setFormKey(prev => prev + 1); // Force complete re-render
      }
      if (onSuccess) onSuccess();
    } else {
      toast.error('Fehler beim Speichern');
    }
  };

  return (
    <form key={formKey} ref={formRef} onSubmit={handleSubmit} className='space-y-4'>
      <div className='mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md'>
        <p className='text-sm text-blue-800'>
          💡 {editProduct ? 'Bearbeite' : 'Erstelle'} ein Produkt. Alle Felder mit * sind erforderlich.
        </p>
      </div>

      {/* Product Preview Card */}
      {allImages.length > 0 && (
        <div className='mb-4 p-4 bg-gray-50 border border-gray-200 rounded-md'>
          <h4 className='text-sm font-semibold mb-3 text-gray-700'>Vorschau (Erstes Bild = Hauptbild)</h4>
          <div className='max-w-sm'>
            <div className='overflow-hidden rounded-lg bg-white border border-gray-200 shadow-sm'>
              <div className='aspect-square overflow-hidden bg-gray-100'>
                <img
                  src={allImages[0]}
                  alt='Preview'
                  className='object-cover w-full h-full'
                />
              </div>
              <div className='p-4'>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  {editProduct?.name || 'Produktname'}
                </h3>
                <p className='text-xl font-bold text-teal-600'>
                  {editProduct?.priceInCents ? `€${(editProduct.priceInCents / 100).toFixed(2)}` : '€0.00'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div>
          <Label htmlFor='name'>Name *</Label>
          <input
            type='text'
            name='name'
            id='name'
            defaultValue={editProduct?.name}
            className='rounded-md border shadow p-2 w-full'
            required
          />
        </div>

        <div>
          <Label htmlFor='slug'>Slug * (URL-freundlich)</Label>
          <input
            type='text'
            name='slug'
            id='slug'
            defaultValue={editProduct?.slug}
            placeholder='z.B: revitalizing-serum'
            className='rounded-md border shadow p-2 w-full'
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor='priceInCents'>Preis in Cents * (z.B. 8900 für €89.00)</Label>
        <input
          type='number'
          name='priceInCents'
          id='priceInCents'
          defaultValue={editProduct?.priceInCents}
          className='rounded-md border shadow p-2 w-full'
          required
        />
      </div>

      <div>
        <div className='flex justify-between items-center mb-2'>
          <Label>Produktbilder * (Erstes Bild = Hauptbild)</Label>
          <Button
            type='button'
            size='sm'
            variant='outline'
            onClick={() => document.getElementById('imageUpload')?.click()}
            disabled={uploadingImage}
          >
            {uploadingImage ? 'Hochladen...' : '+ Bilder hochladen'}
          </Button>
        </div>
        <input
          type='file'
          id='imageUpload'
          accept='image/*'
          multiple
          onChange={handleImageUpload}
          className='hidden'
        />
        
        {allImages.length === 0 ? (
          <div className='p-8 border-2 border-dashed border-gray-300 rounded-md text-center'>
            <p className='text-gray-500 mb-2'>Keine Bilder hochgeladen</p>
            <Button
              type='button'
              size='sm'
              variant='outline'
              onClick={() => document.getElementById('imageUpload')?.click()}
            >
              Bilder auswählen
            </Button>
          </div>
        ) : (
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {allImages.map((img, index) => (
              <div key={index} className='relative group'>
                <div className='aspect-square rounded-md overflow-hidden bg-gray-100 border-2 border-gray-300'>
                  <img
                    src={img}
                    alt={`Product ${index + 1}`}
                    className='object-cover w-full h-full'
                  />
                </div>
                <div className='absolute top-1 right-1 flex gap-1'>
                  {index > 0 && (
                    <Button
                      type='button'
                      size='sm'
                      variant='secondary'
                      className='h-6 w-6 p-0'
                      onClick={() => moveImage(index, 'up')}
                    >
                      ↑
                    </Button>
                  )}
                  {index < allImages.length - 1 && (
                    <Button
                      type='button'
                      size='sm'
                      variant='secondary'
                      className='h-6 w-6 p-0'
                      onClick={() => moveImage(index, 'down')}
                    >
                      ↓
                    </Button>
                  )}
                  <Button
                    type='button'
                    size='sm'
                    variant='destructive'
                    className='h-6 w-6 p-0'
                    onClick={() => removeImage(index)}
                  >
                    <X className='w-3 h-3' />
                  </Button>
                </div>
                {index === 0 && (
                  <div className='absolute bottom-1 left-1 bg-teal-600 text-white text-xs px-2 py-1 rounded'>
                    Hauptbild
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        <p className='text-xs text-gray-500 mt-2'>
          💡 Tipp: Das erste Bild wird als Hauptbild verwendet. Verwende die Pfeile um die Reihenfolge zu ändern.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div>
          <Label htmlFor='descriptionEn'>Beschreibung EN *</Label>
          <textarea
            name='descriptionEn'
            id='descriptionEn'
            defaultValue={editProduct?.descriptionEn}
            className='rounded-md border shadow p-2 w-full min-h-[100px]'
            required
          />
        </div>

        <div>
          <Label htmlFor='descriptionDe'>Beschreibung DE *</Label>
          <textarea
            name='descriptionDe'
            id='descriptionDe'
            defaultValue={editProduct?.descriptionDe}
            className='rounded-md border shadow p-2 w-full min-h-[100px]'
            required
          />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div>
          <Label htmlFor='shortDescriptionEn'>Kurzbeschreibung EN *</Label>
          <textarea
            name='shortDescriptionEn'
            id='shortDescriptionEn'
            defaultValue={editProduct?.shortDescriptionEn}
            className='rounded-md border shadow p-2 w-full'
            required
          />
        </div>

        <div>
          <Label htmlFor='shortDescriptionDe'>Kurzbeschreibung DE *</Label>
          <textarea
            name='shortDescriptionDe'
            id='shortDescriptionDe'
            defaultValue={editProduct?.shortDescriptionDe}
            className='rounded-md border shadow p-2 w-full'
            required
          />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div>
          <div className='flex justify-between items-center mb-2'>
            <Label>Key Benefits EN</Label>
            <Button
              type='button'
              size='sm'
              variant='outline'
              onClick={() => setKeyBenefitsEn([...keyBenefitsEn, ''])}
            >
              +
            </Button>
          </div>
          {keyBenefitsEn.map((benefit, index) => (
            <div key={index} className='flex gap-2 mb-2'>
              <input
                type='text'
                value={benefit}
                onChange={(e) => {
                  const newBenefits = [...keyBenefitsEn];
                  newBenefits[index] = e.target.value;
                  setKeyBenefitsEn(newBenefits);
                }}
                className='rounded-md border shadow p-2 w-full'
              />
              {keyBenefitsEn.length > 1 && (
                <Button
                  type='button'
                  size='sm'
                  variant='ghost'
                  onClick={() =>
                    setKeyBenefitsEn(keyBenefitsEn.filter((_, i) => i !== index))
                  }
                >
                  <X className='w-4 h-4' />
                </Button>
              )}
            </div>
          ))}
        </div>

        <div>
          <div className='flex justify-between items-center mb-2'>
            <Label>Key Benefits DE</Label>
            <Button
              type='button'
              size='sm'
              variant='outline'
              onClick={() => setKeyBenefitsDe([...keyBenefitsDe, ''])}
            >
              +
            </Button>
          </div>
          {keyBenefitsDe.map((benefit, index) => (
            <div key={index} className='flex gap-2 mb-2'>
              <input
                type='text'
                value={benefit}
                onChange={(e) => {
                  const newBenefits = [...keyBenefitsDe];
                  newBenefits[index] = e.target.value;
                  setKeyBenefitsDe(newBenefits);
                }}
                className='rounded-md border shadow p-2 w-full'
              />
              {keyBenefitsDe.length > 1 && (
                <Button
                  type='button'
                  size='sm'
                  variant='ghost'
                  onClick={() =>
                    setKeyBenefitsDe(keyBenefitsDe.filter((_, i) => i !== index))
                  }
                >
                  <X className='w-4 h-4' />
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div>
          <div className='flex justify-between items-center mb-2'>
            <Label>How To Use EN</Label>
            <Button
              type='button'
              size='sm'
              variant='outline'
              onClick={() => setHowToUseEn([...howToUseEn, ''])}
            >
              +
            </Button>
          </div>
          {howToUseEn.map((step, index) => (
            <div key={index} className='flex gap-2 mb-2'>
              <input
                type='text'
                value={step}
                onChange={(e) => {
                  const newSteps = [...howToUseEn];
                  newSteps[index] = e.target.value;
                  setHowToUseEn(newSteps);
                }}
                className='rounded-md border shadow p-2 w-full'
              />
              {howToUseEn.length > 1 && (
                <Button
                  type='button'
                  size='sm'
                  variant='ghost'
                  onClick={() => setHowToUseEn(howToUseEn.filter((_, i) => i !== index))}
                >
                  <X className='w-4 h-4' />
                </Button>
              )}
            </div>
          ))}
        </div>

        <div>
          <div className='flex justify-between items-center mb-2'>
            <Label>How To Use DE</Label>
            <Button
              type='button'
              size='sm'
              variant='outline'
              onClick={() => setHowToUseDe([...howToUseDe, ''])}
            >
              +
            </Button>
          </div>
          {howToUseDe.map((step, index) => (
            <div key={index} className='flex gap-2 mb-2'>
              <input
                type='text'
                value={step}
                onChange={(e) => {
                  const newSteps = [...howToUseDe];
                  newSteps[index] = e.target.value;
                  setHowToUseDe(newSteps);
                }}
                className='rounded-md border shadow p-2 w-full'
              />
              {howToUseDe.length > 1 && (
                <Button
                  type='button'
                  size='sm'
                  variant='ghost'
                  onClick={() => setHowToUseDe(howToUseDe.filter((_, i) => i !== index))}
                >
                  <X className='w-4 h-4' />
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className='flex items-center gap-2'>
        <input
          type='checkbox'
          name='isAvailableForPurchase'
          id='isAvailableForPurchase'
          defaultChecked={editProduct?.isAvailableForPurchase ?? true}
          className='rounded border shadow'
        />
        <Label htmlFor='isAvailableForPurchase'>Verfügbar zum Kauf</Label>
      </div>

      <div className='flex gap-3 pt-4'>
        <Button type='submit' className='flex-1' disabled={isLoading}>
          {isLoading
            ? editProduct
              ? 'Wird aktualisiert...'
              : 'Wird erstellt...'
            : editProduct
            ? 'Produkt aktualisieren'
            : 'Produkt erstellen'}
        </Button>
        {onCancel && (
          <Button type='button' variant='outline' onClick={onCancel}>
            Abbrechen
          </Button>
        )}
      </div>
    </form>
  );
}
