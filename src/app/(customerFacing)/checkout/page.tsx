import React from 'react';
import CheckoutBtn from './_components/CheckoutStripe';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import CheckoutForm from './_components/CheckoutForm';

export default function CheckoutPage() {
  return (
    <div>
      <h2>Checkout</h2>
      {/* <form>
        <Label htmlFor='name'>Name</Label>
        <Input type='text' id='name' name='name' required />
      </form>
      <CheckoutForm /> */}
      <CheckoutBtn />
    </div>
  );
}
