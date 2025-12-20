'use client';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2, Eye } from 'lucide-react';
import { deleteBlogPost, type BlogPostType } from '../_actions/blogPost';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Image from 'next/image';

type Props = {
  blogPosts: BlogPostType[];
};

export default function BlogPostList({ blogPosts }: Props) {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    if (!confirm('Möchtest du diesen Blogpost wirklich löschen?')) return;

    const result = await deleteBlogPost(id);
    if (result.success) {
      toast.success('Blogpost gelöscht');
      router.refresh();
    } else {
      toast.error('Fehler beim Löschen');
    }
  };

  if (blogPosts.length === 0) {
    return (
      <Card className='p-5'>
        <p className='text-gray-500 text-center'>
          Keine Blogposts vorhanden. Erstelle einen neuen Blogpost oben.
        </p>
      </Card>
    );
  }

  return (
    <div className='space-y-3'>
      <h4 className='text-lg font-semibold ml-4'>Alle Blogposts</h4>
      {blogPosts.map((post) => {
        const createdDate = new Date(post.createdAt);
        
        return (
          <Card key={post.id} className='p-4'>
            <div className='flex items-start gap-4'>
              <div className='relative w-32 h-24 flex-shrink-0'>
                <Image
                  src={post.headerImage}
                  alt={post.title}
                  fill
                  className='object-cover rounded-md'
                />
              </div>
              
              <div className='flex-1'>
                <div className='flex items-center gap-2 mb-2'>
                  <h5 className='font-semibold text-lg'>{post.title}</h5>
                  <span className='px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded'>
                    {post.language === 'de' ? '🇩🇪 DE' : '🇬🇧 EN'}
                  </span>
                </div>
                <p className='text-sm text-gray-600 mb-2 line-clamp-2'>
                  {post.mainContent1}
                </p>
                <div className='text-xs text-gray-500'>
                  <p>
                    <span className='font-medium'>Erstellt am:</span>{' '}
                    {createdDate.toLocaleDateString('de-DE', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>

              <div className='flex gap-2'>
                <Button
                  variant='outline'
                  size='sm'
                  onClick={() => router.push(`/blog/${post.id}`)}
                >
                  <Eye className='w-4 h-4' />
                </Button>
                <Button
                  variant='destructive'
                  size='sm'
                  onClick={() => handleDelete(post.id)}
                >
                  <Trash2 className='w-4 h-4' />
                </Button>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
