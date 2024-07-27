import { formatCurrency } from '@/lib/formatters';
import { Column, Row, Text, Section, Img } from '@react-email/components';
import React from 'react';

type OrderInfoProps = {
  order: {
    id: string;
    createdAt: Date;
    customerName: string;
    address: string;
    email: string;
    pricePaidInCents: number;
  };
  orderedProducts: {
    product: string;
    quantity: number;
  }[];
  products: {
    name: string;
    imagePath: string;
  }[];
};
const dateFormatter = new Intl.DateTimeFormat('de-DE', { dateStyle: 'medium' });

export function OrderInfo({
  order,
  products,
  orderedProducts,
}: OrderInfoProps) {
  return (
    <Section className='border border-solid border-gray-500 rounded-lg p-4 md:p-6'>
      <Section>
        <Row>
          <Column className='flex items-center justify-between'>
            <Text className='mt-0 text-gray-500 whitespace-nowrap text-nowrap mr-4'>
              Bestellungseingang:
            </Text>
            <Text className='mt-0'>
              {dateFormatter.format(order.createdAt)}
            </Text>
          </Column>
          <Column className='flex items-center justify-between'>
            <Text className='mt-0 text-gray-500 whitespace-nowrap text-nowrap mr-28'>
              Bestellcode:
            </Text>
            <Text className='mt-0'>{order.id}</Text>
          </Column>
          <Column className='flex items-center justify-between'>
            <Text className='mt-0 text-gray-500 whitespace-nowrap text-nowrap mr-4'>
              Kunde:
            </Text>
            <Text className='mt-0'>
              {order.customerName || order.email.split('@')[0]}
            </Text>
          </Column>

          <Column className='flex items-center justify-between'>
            <Text className='mt-0 text-gray-500 whitespace-nowrap text-nowrap mr-4'>
              Kunden Email:
            </Text>
            <Text className='mt-0'>{order.email}</Text>
          </Column>
          <Column className='flex items-center justify-between'>
            <Text className='mt-0 text-gray-500 whitespace-nowrap text-nowrap mr-4'>
              Adresse:
            </Text>
            <Text className='mt-0'>{order.address}</Text>
          </Column>
          <Column className='flex items-center justify-between'>
            <Text className='mt-0 text-gray-500 whitespace-nowrap text-nowrap mr-4'>
              Bezahlter Gesamtbetrag:
            </Text>
            <Text className='mt-0 font-bold'>
              {formatCurrency(order.pricePaidInCents / 100)}
            </Text>
          </Column>
        </Row>
      </Section>
      <Section className=' p-4'>
        <Text className='mt-0 mb-4 font text-gray-500 whitespace-nowrap text-nowrap'>
          Bestellte Produkte:
        </Text>
        {products.map((product) => {
          const orderedProduct = orderedProducts.find(
            (p) => p.product === product.name
          );
          return (
            <Row key={product.name}>
              <Column className='flex'>
                <Text className='mt-0'>
                  {product.name} -{' '}
                  <Text className='font-bold ml-1 mt-0'>
                    {orderedProduct?.quantity || 0}x
                  </Text>
                </Text>
              </Column>
              <Img
                src={`${process.env.NEXT_PUBLIC_SERVER_URL}${product.imagePath}`}
                alt={product.name}
                className='w-16 h-16 object-cover rounded-lg'
              />
            </Row>
          );
        })}
      </Section>
    </Section>
  );
}
