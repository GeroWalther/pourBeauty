import React from 'react';
import { Card } from '@/components/ui/card';
import { getAllBlogPosts } from '../_actions/blogPost';
import BlogPostForm from '../_components/BlogPostForm';
import BlogPostList from '../_components/BlogPostList';

export default async function BlogPostPage() {
  const blogPosts = await getAllBlogPosts();

  return (
    <section>
      <h3 className='text-lg w-full mb-2 text-left ml-4'>
        Erstelle und verwalte hier deine Blogposts. Diese werden auf der
        Kundenwebseite unter &quot;Blog&quot; angezeigt.
      </h3>
      <Card className='mb-4 p-5'>
        <BlogPostForm />
      </Card>
      
      <BlogPostList blogPosts={blogPosts} />
    </section>
  );
}
