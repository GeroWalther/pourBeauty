'use client';
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { getAllProducts, type ProductType } from '../_actions/product';
import ProductForm from '../_components/ProductForm';
import ProductList from '../_components/ProductList';

export default function ProductsPage() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [editingProduct, setEditingProduct] = useState<ProductType | undefined>();

  useEffect(() => {
    const fetchProducts = async () => {
      const prods = await getAllProducts();
      setProducts(prods);
    };
    fetchProducts();
  }, []);

  const handleEdit = (product: ProductType) => {
    setEditingProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingProduct(undefined);
  };

  const refreshProducts = async () => {
    const prods = await getAllProducts();
    setProducts(prods);
    setEditingProduct(undefined);
  };

  return (
    <section>
      <h3 className='text-lg w-full mb-2 text-left ml-4'>
        Erstelle und verwalte hier deine Produkte. Diese werden auf der
        Kundenwebseite angezeigt.
      </h3>
      <Card className='mb-4 p-5'>
        <ProductForm
          editProduct={editingProduct}
          onCancel={editingProduct ? handleCancelEdit : undefined}
          onSuccess={refreshProducts}
        />
      </Card>
      
      <ProductList products={products} onEdit={handleEdit} onDelete={refreshProducts} />
    </section>
  );
}
