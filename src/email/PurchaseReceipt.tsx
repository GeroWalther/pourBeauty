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
    id?: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }[];
  order: {
    id: string;
    createdAt: Date;
    customerName?: string;
    address: string;
    email: string;
    pricePaidInCents: number;
    shippingCost: number;
  };
};

PurchaseReceiptEmail.PreviewProps = {
  products: [
    {
      name: 'Miss Glow',
      image: '/512-1.jpg',
      price: 89,
      quantity: 2,
    },
    {
      name: 'Miss Glow2',
      image: '/512-2.jpg',
      price: 40,
      quantity: 1,
    },
  ],
  order: {
    id: crypto.randomUUID(),
    createdAt: new Date(),
    customerName: 'Sabine Kratz',
    address: '1234 Street, City, State, 12345, Country',
    email: 'sabine@kratz.com',
    pricePaidInCents: 22300,
    shippingCost: 5,
  },
} satisfies PurchaseReceiptEmailProps;

export default function PurchaseReceiptEmail({
  products,
  order,
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
            <OrderInfo order={order} products={products} />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
