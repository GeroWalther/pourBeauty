'use server';
import db from '@/db';

export async function getAllBlogPosts() {
  try {
    const blogPosts = await db.blogPost.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return blogPosts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPostById(id: string) {
  try {
    const blogPost = await db.blogPost.findUnique({
      where: { id },
    });
    return blogPost;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function createBlogPost(data: {
  headerImage: string;
  title: string;
  language: string;
  mainContent1: string;
  mainContent2?: string;
  mainContent3?: string;
  mainContent4?: string;
  mainContent5?: string;
  mainContent6?: string;
}) {
  try {
    const blogPost = await db.blogPost.create({
      data,
    });
    return { success: true, blogPost };
  } catch (error) {
    console.error('Error creating blog post:', error);
    return { success: false, error: 'Failed to create blog post' };
  }
}

export async function updateBlogPost(
  id: string,
  data: {
    headerImage: string;
    title: string;
    language: string;
    mainContent1: string;
    mainContent2?: string;
    mainContent3?: string;
    mainContent4?: string;
    mainContent5?: string;
    mainContent6?: string;
  }
) {
  try {
    const blogPost = await db.blogPost.update({
      where: { id },
      data,
    });
    return { success: true, blogPost };
  } catch (error) {
    console.error('Error updating blog post:', error);
    return { success: false, error: 'Failed to update blog post' };
  }
}

export async function deleteBlogPost(id: string) {
  try {
    await db.blogPost.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return { success: false };
  }
}

export type BlogPostType = Awaited<ReturnType<typeof getAllBlogPosts>>[0];
