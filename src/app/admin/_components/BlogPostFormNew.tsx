'use client';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { FormEvent, useState, useRef, useEffect } from 'react';
import { createBlogPost, updateBlogPost } from '../_actions/blogPost';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import RichTextEditor from '@/components/RichTextEditor';
import { Plus, X } from 'lucide-react';
import type { ProductType } from '../_actions/product';
import type { BlogPostType } from '../_actions/blogPost';

interface BlogPostFormNewProps {
  products: ProductType[];
  editPost?: BlogPostType;
  onCancel?: () => void;
  onSuccess?: () => void;
}

export default function BlogPostFormNew({
  products,
  editPost,
  onCancel,
  onSuccess,
}: BlogPostFormNewProps) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(
    editPost?.headerImage || null
  );
  const [uploadedImagePath, setUploadedImagePath] = useState<string>(
    editPost?.headerImage || ''
  );
  const [key, setKey] = useState(0); // Key to force re-render of editors

  // Parse existing content or start with one empty paragraph
  const [paragraphs, setParagraphs] = useState<string[]>(() => {
    if (editPost?.content) {
      try {
        return JSON.parse(editPost.content);
      } catch (e) {
        return ['<p></p>'];
      }
    }
    return ['<p></p>'];
  });

  // Update form when editPost changes
  useEffect(() => {
    if (editPost) {
      setImagePreview(editPost.headerImage);
      setUploadedImagePath(editPost.headerImage);
      try {
        const content = JSON.parse(editPost.content);
        setParagraphs(content);
      } catch (e) {
        setParagraphs(['<p></p>']);
      }
      setKey(prev => prev + 1); // Force re-render
    }
  }, [editPost]);

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

  const addParagraph = () => {
    setParagraphs([...paragraphs, '<p></p>']);
  };

  const removeParagraph = (index: number) => {
    if (paragraphs.length === 1) {
      toast.error('Mindestens ein Absatz ist erforderlich');
      return;
    }
    setParagraphs(paragraphs.filter((_, i) => i !== index));
  };

  const updateParagraph = (index: number, content: string) => {
    const newParagraphs = [...paragraphs];
    newParagraphs[index] = content;
    setParagraphs(newParagraphs);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const title = formData.get('title') as string;
    const language = formData.get('language') as string;
    const headerImage =
      uploadedImagePath || (formData.get('headerImage') as string);

    if (!title || !headerImage || paragraphs.length === 0) {
      toast.error('Bitte fülle mindestens Titel, Headerbild und einen Absatz aus');
      setIsLoading(false);
      return;
    }

    // Store as JSON array
    const content = JSON.stringify(paragraphs);

    const result = editPost
      ? await updateBlogPost(editPost.id, {
          title,
          language,
          headerImage,
          content,
        })
      : await createBlogPost({
          title,
          language,
          headerImage,
          content,
        });

    setIsLoading(false);

    if (result.success) {
      toast.success(
        editPost
          ? 'Blogpost erfolgreich aktualisiert'
          : 'Blogpost erfolgreich erstellt'
      );
      if (!editPost) {
        formRef.current?.reset();
        setImagePreview(null);
        setUploadedImagePath('');
        setParagraphs(['<p></p>']);
        setKey(prev => prev + 1); // Force re-render to clear editors
      }
      if (onSuccess) onSuccess();
      if (onCancel) onCancel();
    } else {
      toast.error(
        editPost
          ? 'Fehler beim Aktualisieren des Blogposts'
          : 'Fehler beim Erstellen des Blogposts'
      );
    }
  };

  return (
    <div className='flex flex-col items-center w-full'>
      <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col w-full'>
        <div className='mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md'>
          <p className='text-sm text-blue-800'>
            💡 {editPost ? 'Bearbeite den' : 'Erstelle einen neuen'} Blogpost. Mindestens Titel, Headerbild und ein Absatz sind erforderlich.
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
            defaultValue={editPost?.title}
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
            defaultValue={editPost?.language || 'de'}
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
            defaultValue={editPost?.headerImage}
            placeholder='https://example.com/image.jpg'
            className='rounded-md border shadow p-2 w-full mb-1'
          />
        </div>

        <div className='mb-4'>
          <div className='flex items-center justify-between mb-3'>
            <Label>Inhalt *</Label>
            <Button
              type='button'
              size='sm'
              variant='outline'
              onClick={addParagraph}
            >
              <Plus className='w-4 h-4 mr-1' />
              Absatz hinzufügen
            </Button>
          </div>

          {paragraphs.map((paragraph, index) => (
            <div key={`${key}-${index}`} className='mb-4'>
              <div className='flex items-center justify-between mb-2'>
                <Label className='text-sm text-gray-600'>
                  Absatz {index + 1}
                </Label>
                {paragraphs.length > 1 && (
                  <Button
                    type='button'
                    size='sm'
                    variant='ghost'
                    onClick={() => removeParagraph(index)}
                  >
                    <X className='w-4 h-4' />
                  </Button>
                )}
              </div>
              <RichTextEditor
                content={paragraph}
                onChange={(html) => updateParagraph(index, html)}
                products={products}
                placeholder='Schreibe hier...'
              />
            </div>
          ))}
        </div>

        <div className='flex gap-3'>
          <Button type='submit' className='flex-1' disabled={isLoading}>
            {isLoading
              ? editPost
                ? 'Wird aktualisiert...'
                : 'Wird erstellt...'
              : editPost
              ? 'Blogpost aktualisieren'
              : 'Blogpost erstellen'}
          </Button>
          {onCancel && (
            <Button type='button' variant='outline' onClick={onCancel}>
              Abbrechen
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
