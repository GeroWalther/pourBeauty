import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Tailwind,
} from '@react-email/components';
import { OrderInfo } from './component/OrderInfo';

// has to be default function to make it work in dev mode

type PurchaseReceiptEmailProps = {
  products: {
    name: string;
    imagePath: string;
  }[];
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
    singlePrice?: number;
  }[];
};

PurchaseReceiptEmail.PreviewProps = {
  products: [
    {
      name: 'Miss Glow',
      imagePath: '/512-1.jpg',
    },
    {
      name: 'Miss Glow2',
      imagePath: '/512-2.jpg',
    },
  ],
  order: {
    id: crypto.randomUUID(),
    createdAt: new Date(),
    customerName: 'Sabine Kratz',
    address: '1234 Street, City, State, 12345, Country',
    email: 'sabine@kratz.com',
    pricePaidInCents: 19400,
  },
  orderedProducts: [
    {
      product: 'Miss Glow',
      quantity: 2,
      singlePrice: 8900,
    },
    {
      product: 'Miss Glow2',
      quantity: 1,
      singlePrice: 6900,
    },
  ],
} satisfies PurchaseReceiptEmailProps;

export default function PurchaseReceiptEmail({
  products,
  order,
  orderedProducts,
}: PurchaseReceiptEmailProps) {
  return (
    <Html>
      <Preview>Bestellung - Miss Glow Beauty</Preview>
      <Tailwind>
        <Head />
        <Body className='font-sans bg-pink-200'>
          <Container className='max-w-lg'>
            <Heading className=''>
              Neue Bestellung <br /> eingegangen.
            </Heading>
            <OrderInfo
              order={order}
              products={products}
              orderedProducts={orderedProducts}
            />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
