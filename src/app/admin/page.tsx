import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import db from '@/db';
import { formatCurrency, formatNumber } from '@/lib/formatters';
import React from 'react';

async function getSalesData() {
  const data = await db.order.aggregate({
    _sum: { pricePaidInCents: true },
    _count: true,
  });

  return {
    amount: (data._sum.pricePaidInCents || 0) / 100,
    numberofOrders: data._count,
  };
}
async function getShippedNumber() {
  const data = await db.order.aggregate({
    _count: { hasBeenShipped: true },
  });
  return {
    hasBeenShipped: data._count,
  };
}
async function getUserData() {
  const [userCount, orderData] = await Promise.all([
    db.user.count({ where: { isAdmin: false } }),
    db.order.aggregate({
      _sum: { pricePaidInCents: true },
    }),
  ]);

  return {
    userCount,
    averageValuePerCustomer:
      userCount === 0
        ? 0
        : (orderData._sum.pricePaidInCents || 0) / userCount / 100,
  };
}
// async function getProductData() {
//   const [activeCount, inactiveCount] = await Promise.all([
//     db.product.count({ where: { isAvailableForPurchase: true } }),
//     db.product.count({ where: { isAvailableForPurchase: false } }),
//   ]);

//   return { activeCount, inactiveCount };
// }

export default async function AdminDashboard() {
  const [
    salesData,
    hasShipped,
    userData,
    // productData
  ] = await Promise.all([
    getSalesData(),
    getShippedNumber(),
    getUserData(),
    // getProductData(),
  ]);

  const { amount, numberofOrders } = salesData;
  const { hasBeenShipped } = hasShipped;
  const { userCount, averageValuePerCustomer } = userData;
  // const { activeCount, inactiveCount } = productData;

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <DashboardCard
        title='Umsatz insgesamt'
        subtitle={`${formatNumber(numberofOrders)} Bestellungen`}
        body={formatCurrency(amount)}
      />
      <DashboardCard
        title='Bestellungen'
        subtitle='Anzahl der gesamten Bestellungen'
        body={numberofOrders.toString()}
      />
      <DashboardCard
        title='Bearbeitete Bestellungen'
        subtitle='Anzahl der gesamten verschickten Bestellungen'
        body={hasBeenShipped.hasBeenShipped.toString()}
      />
      <DashboardCard
        title='Offene Bestellungen'
        subtitle='Anzahl der gesamten Bestellungen'
        body={(hasBeenShipped.hasBeenShipped - numberofOrders).toString()}
      />
      <DashboardCard
        title='Kunden'
        subtitle={`${formatCurrency(
          averageValuePerCustomer
        )} Durchschnittlicher Kunden-Wert`}
        body={formatNumber(userCount)}
      />
      {/* <DashboardCard
        title='Produkte im Shop'
        subtitle={`${formatNumber(inactiveCount)} Inaktiv`}
        body={formatNumber(activeCount)}
      /> */}
    </div>
  );
}

type DashboardCardProps = {
  title: string;
  subtitle: string;
  body: string;
};
function DashboardCard({ title, subtitle, body }: DashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className=' text-xl font-semibold'>{body}</p>
      </CardContent>
    </Card>
  );
}
