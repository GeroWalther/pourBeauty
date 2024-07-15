import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type CartItem = {
  product: Product;
};

type CartState = {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
};

// add items
// remove items
// clear the cart
// (keep track of cart items)
export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) =>
        set((state) => {
          // this logic updates the quantity if the product is already in the cart
          const existingItem = state.items.find(
            (item) => item.product.id === product.id
          );
          if (existingItem) {
            const updatedItems = state.items.map((item) => {
              if (item.product.id === product.id) {
                return { product, quantity: item.product.quantity + 1 };
              }
              return item;
            });
            return { items: updatedItems };
          }
          return { items: [...state.items, { product, quantity: 1 }] };
        }),
      removeItem: (id) =>
        set((state) => {
          const updatedItems = state.items.filter(
            (item) => item.product.id !== id
          );
          return { items: updatedItems };
        }),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
