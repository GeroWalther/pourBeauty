import React from 'react';
import { getAllBlogPosts } from '@/app/admin/_actions/blogPost';
import { Card } from '@/components/ui/card';
import BlogList from './_components/BlogList';

export default async function BlogPage() {
  const blogPosts = await getAllBlogPosts();

  if (blogPosts.length === 0) {
    return (
      <div className='container mx-auto px-6 py-12'>
        <h1 className='text-4xl font-bold mb-8'>Blog</h1>
        <Card className='p-8 text-center'>
          <p className='text-gray-500'>
            Noch keine Blogposts verfügbar. Schauen Sie bald wieder vorbei!
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className='container mx-auto px-6 py-12'>
      <h1 className='text-4xl font-bold mb-8'>Blog</h1>
      <BlogList blogPosts={blogPosts} />
    </div>
  );
}
