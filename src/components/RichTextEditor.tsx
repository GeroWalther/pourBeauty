'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import { Button } from '@/components/ui/button';
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Link as LinkIcon,
  Palette,
} from 'lucide-react';
import { useCallback, useState } from 'react';
import type { ProductType } from '@/app/admin/_actions/product';

interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
  placeholder?: string;
  products?: ProductType[];
}

const BRAND_COLORS = [
  { name: 'Primary (Teal)', value: '#1a9a8c' }, // oklch(0.52 0.12 195)
  { name: 'Secondary (Dark Teal)', value: '#0d5c5a' }, // oklch(0.35 0.08 210)
  { name: 'Accent (Light Teal)', value: '#b3e5e0' }, // oklch(0.88 0.08 180)
  { name: 'Text Dark', value: '#2d3748' }, // Foreground color
  { name: 'Muted', value: '#718096' }, // Muted foreground
];

export default function RichTextEditor({
  content,
  onChange,
  placeholder = 'Start typing...',
  products = [],
}: RichTextEditorProps) {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [showProductPicker, setShowProductPicker] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-600 underline',
        },
      }),
      TextStyle,
      Color,
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          'prose prose-sm max-w-none focus:outline-none min-h-[150px] p-3 border rounded-md',
      },
    },
    immediatelyRender: false,
  });

  const setLink = useCallback(() => {
    if (!editor) return;

    if (linkUrl === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      setShowLinkInput(false);
      return;
    }

    editor
      .chain()
      .focus()
      .extendMarkRange('link')
      .setLink({ href: linkUrl })
      .run();

    setShowLinkInput(false);
    setLinkUrl('');
  }, [editor, linkUrl]);

  const setProductLink = useCallback(
    (product: ProductType) => {
      if (!editor) return;

      const productUrl = `/products/${product.slug}`;
      const selectedText = editor.state.doc.textBetween(
        editor.state.selection.from,
        editor.state.selection.to
      );

      if (selectedText) {
        editor
          .chain()
          .focus()
          .extendMarkRange('link')
          .setLink({ href: productUrl })
          .run();
      } else {
        editor
          .chain()
          .focus()
          .insertContent(
            `<a href="${productUrl}" class="text-blue-600 underline">${product.name}</a> `
          )
          .run();
      }

      setShowProductPicker(false);
    },
    [editor]
  );

  const setColor = useCallback(
    (color: string) => {
      if (!editor) return;
      editor.chain().focus().setColor(color).run();
      setShowColorPicker(false);
    },
    [editor]
  );

  if (!editor) {
    return null;
  }

  return (
    <div className='border rounded-md'>
      {/* Toolbar */}
      <div className='flex flex-wrap gap-1 p-2 border-b bg-gray-50'>
        <Button
          type='button'
          size='sm'
          variant={editor.isActive('bold') ? 'default' : 'outline'}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold className='w-4 h-4' />
        </Button>

        <Button
          type='button'
          size='sm'
          variant={editor.isActive('italic') ? 'default' : 'outline'}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic className='w-4 h-4' />
        </Button>

        <Button
          type='button'
          size='sm'
          variant={editor.isActive('bulletList') ? 'default' : 'outline'}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List className='w-4 h-4' />
        </Button>

        <Button
          type='button'
          size='sm'
          variant={editor.isActive('orderedList') ? 'default' : 'outline'}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered className='w-4 h-4' />
        </Button>

        <div className='relative'>
          <Button
            type='button'
            size='sm'
            variant='outline'
            onClick={() => {
              setShowColorPicker(!showColorPicker);
              setShowLinkInput(false);
              setShowProductPicker(false);
            }}
          >
            <Palette className='w-4 h-4' />
          </Button>

          {showColorPicker && (
            <div className='absolute z-10 mt-1 p-2 bg-white border rounded-md shadow-lg'>
              <div className='flex flex-col gap-1'>
                {BRAND_COLORS.map((color) => (
                  <button
                    key={color.value}
                    type='button'
                    className='flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded text-sm'
                    onClick={() => setColor(color.value)}
                  >
                    <div
                      className='w-6 h-6 rounded border'
                      style={{ backgroundColor: color.value }}
                    />
                    {color.name}
                  </button>
                ))}
                <button
                  type='button'
                  className='px-3 py-2 hover:bg-gray-100 rounded text-sm text-left'
                  onClick={() => setColor('#000000')}
                >
                  Reset Color
                </button>
              </div>
            </div>
          )}
        </div>

        <div className='relative'>
          <Button
            type='button'
            size='sm'
            variant={editor.isActive('link') ? 'default' : 'outline'}
            onClick={() => {
              setShowLinkInput(!showLinkInput);
              setShowColorPicker(false);
              setShowProductPicker(false);
            }}
          >
            <LinkIcon className='w-4 h-4' />
          </Button>

          {showLinkInput && (
            <div className='absolute z-10 mt-1 p-3 bg-white border rounded-md shadow-lg w-64'>
              <input
                type='url'
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                placeholder='https://example.com'
                className='w-full px-2 py-1 border rounded mb-2'
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    setLink();
                  }
                }}
              />
              <div className='flex gap-2'>
                <Button type='button' size='sm' onClick={setLink}>
                  Set Link
                </Button>
                <Button
                  type='button'
                  size='sm'
                  variant='outline'
                  onClick={() => {
                    editor.chain().focus().unsetLink().run();
                    setShowLinkInput(false);
                    setLinkUrl('');
                  }}
                >
                  Remove
                </Button>
              </div>
            </div>
          )}
        </div>

        {products.length > 0 && (
          <div className='relative'>
            <Button
              type='button'
              size='sm'
              variant='outline'
              onClick={() => {
                setShowProductPicker(!showProductPicker);
                setShowLinkInput(false);
                setShowColorPicker(false);
              }}
            >
              🔗 Product
            </Button>

            {showProductPicker && (
              <div className='absolute z-10 mt-1 p-2 bg-white border rounded-md shadow-lg w-64 max-h-64 overflow-y-auto'>
                <p className='text-xs text-gray-500 mb-2 px-2'>
                  Select text first, or click to insert product link
                </p>
                {products.map((product) => (
                  <button
                    key={product.id}
                    type='button'
                    className='w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm'
                    onClick={() => setProductLink(product)}
                  >
                    {product.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <Button
          type='button'
          size='sm'
          variant='outline'
          onClick={() => editor.chain().focus().setHardBreak().run()}
        >
          BR
        </Button>
      </div>

      {/* Editor */}
      <EditorContent editor={editor} placeholder={placeholder} />
    </div>
  );
}
