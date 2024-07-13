import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import db from '@/db';
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

export default async function AdminDashboard() {
  const { amount, numberofOrders } = await getSalesData();
  const { hasBeenShipped } = await getShippedNumber();
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <DashboardCard
        title='Umsatz insgesamt'
        subtitle={`${numberofOrders} Bestellungen`}
        body={`${amount} €`}
      />
      <DashboardCard
        title='Bestellungen'
        subtitle='Anzahl der gesamten Bestellungen'
        body={numberofOrders.toString()}
      />
      <DashboardCard
        title='Bearbeitete bestellungen'
        subtitle='Anzahl der gesamten verschickten Bestellungen'
        body={hasBeenShipped.hasBeenShipped.toString()}
      />
      <DashboardCard
        title='Offene bestellungen'
        subtitle='Anzahl der gesamten Bestellungen'
        body={(hasBeenShipped.hasBeenShipped - numberofOrders).toString()}
      />
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
