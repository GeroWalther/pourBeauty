'use client';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { FormEvent, useState, useRef } from 'react';
import { createBlogPost } from '../_actions/blogPost';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function BlogPostForm() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadedImagePath, setUploadedImagePath] = useState<string>('');

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Show preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Upload image to Vercel Blob
    try {
      const response = await fetch(
        `/api/upload-blog-image?filename=${encodeURIComponent(file.name)}`,
        {
          method: 'POST',
          body: file,
        }
      );

      const blob = await response.json();
      if (blob.url) {
        setUploadedImagePath(blob.url);
        toast.success('Bild hochgeladen');
      } else {
        toast.error('Fehler beim Hochladen des Bildes');
      }
    } catch (error) {
      toast.error('Fehler beim Hochladen des Bildes');
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const title = formData.get('title') as string;
    const language = formData.get('language') as string;
    const headerImage = uploadedImagePath || (formData.get('headerImage') as string);
    const mainContent1 = formData.get('mainContent1') as string;
    const mainContent2 = formData.get('mainContent2') as string;
    const mainContent3 = formData.get('mainContent3') as string;
    const mainContent4 = formData.get('mainContent4') as string;
    const mainContent5 = formData.get('mainContent5') as string;
    const mainContent6 = formData.get('mainContent6') as string;

    if (!title || !headerImage || !mainContent1) {
      toast.error('Bitte fülle mindestens Titel, Headerbild und ersten Absatz aus');
      setIsLoading(false);
      return;
    }

    const result = await createBlogPost({
      title,
      language,
      headerImage,
      mainContent1,
      mainContent2: mainContent2 || undefined,
      mainContent3: mainContent3 || undefined,
      mainContent4: mainContent4 || undefined,
      mainContent5: mainContent5 || undefined,
      mainContent6: mainContent6 || undefined,
    });

    setIsLoading(false);

    if (result.success) {
      toast.success('Blogpost erfolgreich erstellt');
      formRef.current?.reset();
      setImagePreview(null);
      setUploadedImagePath('');
      router.refresh();
    } else {
      toast.error('Fehler beim Erstellen des Blogposts');
    }
  };

  return (
    <div className='flex flex-col items-center w-full'>
      <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col w-full'>
        <div className='mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md'>
          <p className='text-sm text-blue-800'>
            💡 Erstelle einen neuen Blogpost. Mindestens Titel, Headerbild-URL und der erste Absatz sind erforderlich.
          </p>
        </div>

        <div className='mb-4 flex flex-col'>
          <Label htmlFor='title' className='mb-2'>
            Titel *
          </Label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='z.B: Die besten Hautpflege-Tipps für den Winter'
            className='rounded-md border shadow p-2 w-full mb-1'
            required
          />
        </div>

        <div className='mb-4 flex flex-col'>
          <Label htmlFor='language' className='mb-2'>
            Sprache *
          </Label>
          <select
            name='language'
            id='language'
            className='rounded-md border shadow p-2 w-full mb-1'
            required
            defaultValue='de'
          >
            <option value='de'>Deutsch</option>
            <option value='en'>English</option>
          </select>
        </div>

        <div className='mb-4 flex flex-col'>
          <Label htmlFor='headerImage' className='mb-2'>
            Headerbild *
          </Label>
          <input
            type='file'
            name='headerImageFile'
            id='headerImageFile'
            accept='image/*'
            onChange={handleImageChange}
            className='rounded-md border shadow p-2 w-full mb-2'
          />
          {imagePreview && (
            <div className='relative w-full h-48 mb-2 rounded-md overflow-hidden'>
              <Image
                src={imagePreview}
                alt='Preview'
                fill
                className='object-cover'
              />
            </div>
          )}
          <p className='text-xs text-gray-500 mb-2'>Oder verwende eine URL:</p>
          <input
            type='url'
            name='headerImage'
            id='headerImage'
            placeholder='https://example.com/image.jpg'
            className='rounded-md border shadow p-2 w-full mb-1'
          />
        </div>

        <div className='mb-4 flex flex-col'>
          <Label htmlFor='mainContent1' className='mb-2'>
            Absatz 1 *
          </Label>
          <textarea
            name='mainContent1'
            id='mainContent1'
            placeholder='Erster Absatz des Blogposts...'
            className='rounded-md border shadow p-2 w-full mb-1 min-h-[100px]'
            required
          />
        </div>

        <div className='mb-4 flex flex-col'>
          <Label htmlFor='mainContent2' className='mb-2'>
            Absatz 2 (Optional)
          </Label>
          <textarea
            name='mainContent2'
            id='mainContent2'
            placeholder='Zweiter Absatz des Blogposts...'
            className='rounded-md border shadow p-2 w-full mb-1 min-h-[100px]'
          />
        </div>

        <div className='mb-4 flex flex-col'>
          <Label htmlFor='mainContent3' className='mb-2'>
            Absatz 3 (Optional)
          </Label>
          <textarea
            name='mainContent3'
            id='mainContent3'
            placeholder='Dritter Absatz des Blogposts...'
            className='rounded-md border shadow p-2 w-full mb-1 min-h-[100px]'
          />
        </div>

        <div className='mb-4 flex flex-col'>
          <Label htmlFor='mainContent4' className='mb-2'>
            Absatz 4 (Optional)
          </Label>
          <textarea
            name='mainContent4'
            id='mainContent4'
            placeholder='Vierter Absatz des Blogposts...'
            className='rounded-md border shadow p-2 w-full mb-1 min-h-[100px]'
          />
        </div>

        <div className='mb-4 flex flex-col'>
          <Label htmlFor='mainContent5' className='mb-2'>
            Absatz 5 (Optional)
          </Label>
          <textarea
            name='mainContent5'
            id='mainContent5'
            placeholder='Fünfter Absatz des Blogposts...'
            className='rounded-md border shadow p-2 w-full mb-1 min-h-[100px]'
          />
        </div>

        <div className='mb-4 flex flex-col'>
          <Label htmlFor='mainContent6' className='mb-2'>
            Absatz 6 (Optional)
          </Label>
          <textarea
            name='mainContent6'
            id='mainContent6'
            placeholder='Sechster Absatz des Blogposts...'
            className='rounded-md border shadow p-2 w-full mb-1 min-h-[100px]'
          />
        </div>

        <Button type='submit' className='w-full' disabled={isLoading}>
          {isLoading ? 'Wird erstellt...' : 'Blogpost erstellen'}
        </Button>
      </form>
    </div>
  );
}
