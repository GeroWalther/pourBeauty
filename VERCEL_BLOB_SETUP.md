# Vercel Blob Setup Guide

This project uses Vercel Blob for storing uploaded images (blog images and product images).

## Setup Instructions

### 1. Install Dependencies

The `@vercel/blob` package has already been installed:

```bash
npm install @vercel/blob
```

### 2. Get Your Vercel Blob Token

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Navigate to the **Storage** tab
4. Create a new Blob Store (if you don't have one already)
5. Copy your `BLOB_READ_WRITE_TOKEN`

### 3. Add Environment Variable

Add the following to your `.env` file:

```bash
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_your_token_here
```

### 4. Deploy Environment Variable

When deploying to Vercel:

1. Go to your project settings
2. Navigate to **Environment Variables**
3. Add `BLOB_READ_WRITE_TOKEN` with your token value
4. Make sure it's available for Production, Preview, and Development environments

## What Was Changed

### Blog Image Uploads
- **File**: `src/app/api/upload-blog-image/route.ts`
- **Before**: Saved images to `public/blog-images/` directory
- **After**: Uploads images to Vercel Blob storage
- **Returns**: Full blob URL instead of local path

### Product Image Uploads
- **File**: `src/app/admin/_actions/products.ts`
- **Before**: Saved images to `public/products/` directory
- **After**: Uploads images to Vercel Blob storage
- **Returns**: Full blob URL instead of local path

## Benefits

✅ **Scalable**: No file system limitations  
✅ **CDN**: Automatic global distribution via Vercel's CDN  
✅ **Fast**: Optimized for image delivery  
✅ **Reliable**: No need to worry about server restarts clearing files  
✅ **Easy**: Simple API with automatic URL management

## Usage

The implementation is transparent to your forms. The existing blog post form and product form will continue to work without any changes, but images will now be stored in Vercel Blob instead of the local file system.

## Local Development

For local development, you can:
1. Use your production Blob token
2. Create a separate development Blob store with its own token

## Migration Notes

Existing images in `public/blog-images/` and `public/products/` will remain accessible. New uploads will go to Vercel Blob. If you want to migrate old images, you can write a migration script using the `@vercel/blob` package's `put` function.
