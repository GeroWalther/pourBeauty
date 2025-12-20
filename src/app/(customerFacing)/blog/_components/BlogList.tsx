'use client';
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { BlogPostType } from '@/app/admin/_actions/blogPost';

type Props = {
  blogPosts: BlogPostType[];
};

export default function BlogList({ blogPosts }: Props) {
  const [languageFilter, setLanguageFilter] = useState<'all' | 'de' | 'en'>('all');

  const filteredPosts = useMemo(() => {
    if (languageFilter === 'all') {
      return blogPosts;
    }
    return blogPosts.filter(post => post.language === languageFilter);
  }, [languageFilter, blogPosts]);

  return (
    <>
      {/* Language Filter */}
      <div className='flex gap-3 mb-8'>
        <Button
          variant={languageFilter === 'all' ? 'default' : 'outline'}
          onClick={() => setLanguageFilter('all')}
        >
          Alle / All
        </Button>
        <Button
          variant={languageFilter === 'de' ? 'default' : 'outline'}
          onClick={() => setLanguageFilter('de')}
        >
          Deutsch
        </Button>
        <Button
          variant={languageFilter === 'en' ? 'default' : 'outline'}
          onClick={() => setLanguageFilter('en')}
        >
          English
        </Button>
      </div>

      {filteredPosts.length === 0 ? (
        <Card className='p-8 text-center'>
          <p className='text-gray-500'>
            Keine Blogposts in dieser Sprache verfügbar.
          </p>
        </Card>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredPosts.map((post) => {
            const createdDate = new Date(post.createdAt);
            
            return (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className='overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full'>
                  <div className='relative w-full h-48'>
                    <Image
                      src={post.headerImage}
                      alt={post.title}
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div className='p-4'>
                    <h2 className='text-xl font-semibold mb-2 line-clamp-2'>
                      {post.title}
                    </h2>
                    <p className='text-sm text-gray-600 mb-3 line-clamp-3'>
                      {post.mainContent1}
                    </p>
                    <p className='text-xs text-gray-500'>
                      {createdDate.toLocaleDateString('de-DE', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
