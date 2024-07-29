'use client';
// import { OrderStatusType, OrderType } from '@/app/actions/getOrders';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { FC } from 'react';
import SelectFilter from './SelectFilter';
import { OrderType } from '@/app/admin/_actions/getOrders';

interface OrderTableProps {
  orderData: OrderType;
  orderStatus: any;
}

const OrderTable: FC<OrderTableProps> = ({ orderData, orderStatus }) => {
  if (!orderData) {
    return <div>No orders available</div>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>Order Id</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Kunde</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Bestelleingang</TableHead>
          <TableHead className='text-right'>Betrag</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orderData.map((singleRow: any) => (
          <TableRow key={singleRow.id}>
            <TableCell className='font-medium'>{singleRow.id}</TableCell>
            <TableCell className='text-left w-36'>
              {singleRow.hasBeenShipped ? (
                <SelectFilter
                  items={orderStatus}
                  placeHolder={
                    singleRow.hasBeenShipped ? 'Shipped' : 'Not Shipped'
                  }
                  toChangeValue='shipped'
                  id={singleRow.id}
                />
              ) : (
                <SelectFilter
                  items={orderStatus}
                  placeHolder={
                    singleRow.hasBeenShipped ? 'Shipped' : 'Not Shipped'
                  }
                  toChangeValue='notShipped'
                  id={singleRow.id}
                />
              )}
            </TableCell>
            <TableCell className='font-medium'>
              {singleRow.customerName}
            </TableCell>
            <TableCell className='font-medium min-w-32'>
              {singleRow.address}
            </TableCell>
            <TableCell className='font-medium'>{singleRow.email}</TableCell>
            <TableCell className='font-medium'>
              {new Date(singleRow.createdAt).toLocaleDateString('de-DE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </TableCell>
            <TableCell className='font-bold text-right'>
              €{singleRow.pricePaidInCents / 100}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OrderTable;
