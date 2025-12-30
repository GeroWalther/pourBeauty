'use client';
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { getAllBlogPosts, type BlogPostType } from '../_actions/blogPost';
import { getAllProducts } from '../_actions/product';
import BlogPostFormNew from '../_components/BlogPostFormNew';
import BlogPostList from '../_components/BlogPostList';
import type { ProductType } from '../_actions/product';

export default function BlogPostPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPostType[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPostType | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const [posts, prods] = await Promise.all([
        getAllBlogPosts(),
        getAllProducts(),
      ]);
      setBlogPosts(posts);
      setProducts(prods);
    };
    fetchData();
  }, []);

  const handleEdit = (post: BlogPostType) => {
    setEditingPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingPost(undefined);
  };

  const refreshPosts = async () => {
    const posts = await getAllBlogPosts();
    setBlogPosts(posts);
    setEditingPost(undefined);
  };

  return (
    <section>
      <h3 className='text-lg w-full mb-2 text-left ml-4'>
        Erstelle und verwalte hier deine Blogposts. Diese werden auf der
        Kundenwebseite unter &quot;Blog&quot; angezeigt.
      </h3>
      <Card className='mb-4 p-5'>
        <BlogPostFormNew
          products={products}
          editPost={editingPost}
          onCancel={editingPost ? handleCancelEdit : undefined}
          onSuccess={refreshPosts}
        />
      </Card>
      
      <BlogPostList blogPosts={blogPosts} onEdit={handleEdit} onDelete={refreshPosts} />
    </section>
  );
}
