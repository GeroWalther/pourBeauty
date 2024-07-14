import React from 'react';
import PageHeader from '../../_components/PageHeader';
import ProductForm from '../_components/ProductForm';

export default function NewProductPage() {
  return (
    <>
      <PageHeader>Produkt hinzufügen</PageHeader>
      <ProductForm />
    </>
  );
}
