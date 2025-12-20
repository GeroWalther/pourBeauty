import React from 'react';
import { getBlogPostById } from '@/app/admin/_actions/blogPost';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default async function BlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  const blogPost = await getBlogPostById(params.id);

  if (!blogPost) {
    notFound();
  }

  const createdDate = new Date(blogPost.createdAt);

  return (
    <div className='container mx-auto px-6 py-12 max-w-4xl'>
      <Link href='/blog'>
        <Button variant='ghost' className='mb-6'>
          <ArrowLeft className='w-4 h-4 mr-2' />
          Zurück zum Blog
        </Button>
      </Link>

      <div className='relative w-full h-96 mb-8 rounded-lg overflow-hidden'>
        <Image
          src={blogPost.headerImage}
          alt={blogPost.title}
          fill
          className='object-cover'
          priority
        />
      </div>

      <article>
        <div className='flex items-center gap-3 mb-4'>
          <h1 className='text-4xl font-bold'>{blogPost.title}</h1>
          <span className='px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded'>
            {blogPost.language === 'de' ? '🇩🇪' : '🇬🇧'}
          </span>
        </div>
        <p className='text-sm text-gray-500 mb-8'>
          {createdDate.toLocaleDateString('de-DE', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          })}
        </p>

        <div className='prose prose-lg max-w-none'>
          {blogPost.mainContent1 && (
            <p className='mb-6 text-gray-700 leading-relaxed'>
              {blogPost.mainContent1}
            </p>
          )}

          {blogPost.mainContent2 && (
            <p className='mb-6 text-gray-700 leading-relaxed'>
              {blogPost.mainContent2}
            </p>
          )}

          {blogPost.mainContent3 && (
            <p className='mb-6 text-gray-700 leading-relaxed'>
              {blogPost.mainContent3}
            </p>
          )}

          {blogPost.mainContent4 && (
            <p className='mb-6 text-gray-700 leading-relaxed'>
              {blogPost.mainContent4}
            </p>
          )}

          {blogPost.mainContent5 && (
            <p className='mb-6 text-gray-700 leading-relaxed'>
              {blogPost.mainContent5}
            </p>
          )}

          {blogPost.mainContent6 && (
            <p className='mb-6 text-gray-700 leading-relaxed'>
              {blogPost.mainContent6}
            </p>
          )}
        </div>
      </article>

      <div className='mt-12 pt-8 border-t'>
        <Link href='/blog'>
          <Button variant='outline'>
            <ArrowLeft className='w-4 h-4 mr-2' />
            Zurück zum Blog
          </Button>
        </Link>
      </div>
    </div>
  );
}
