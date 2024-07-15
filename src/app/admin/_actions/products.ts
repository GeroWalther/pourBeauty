'use server';

import db from '@/db';
import { z } from 'zod';
import fs from 'fs/promises';
import { notFound, redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

const fileSchema = z.instanceof(File, { message: 'Required' });
const imageSchema = fileSchema.refine(
  (file) => file.size === 0 || file.type.startsWith('image/')
);

const addSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  priceInCents: z.coerce.number().int().min(1),
  image: imageSchema.refine((file) => file.size > 0, 'Required'),
});

export async function addProduct(
  // prevState: unknown,
  formData: FormData
) {
  const result = addSchema.safeParse(Object.fromEntries(formData.entries()));
  if (result.success === false) {
    // console.log('Error: ', result.error);
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  await fs.mkdir('products', { recursive: true });

  await fs.mkdir('public/products', { recursive: true });
  const imagePath = `/products/${crypto.randomUUID()}-${data.image.name}`;
  await fs.writeFile(
    `public${imagePath}`,
    Buffer.from(await data.image.arrayBuffer())
  );

  // await db.product.create({
  //   data: {
  //     isAvailableForPurchase: false,
  //     name: data.name,
  //     description: data.description,
  //     priceInCents: data.priceInCents,
  //     image: imagePath,
  //   },
  // });

  revalidatePath('/');
  revalidatePath('/products');

  redirect('/admin/products');
}
