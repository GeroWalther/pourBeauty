import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export type CartItem = {
  product: Product;
};

type CartState = {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  discount: number;
  setDiscount: (discount: number) => void;
  discountCode: string;
  setDiscountCode: (code: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
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
                // Add the specified quantity to the existing quantity
                return {
                  ...item,
                  product: {
                    ...item.product,
                    quantity: item.product.quantity + product.quantity,
                  },
                };
              }
              return item;
            });
            return { items: updatedItems };
          }
          // When adding a new product, use the quantity from the product
          return { items: [...state.items, { product }] };
        }),
      removeItem: (id) =>
        set((state) => {
          const updatedItems = state.items.filter(
            (item) => item.product.id !== id
          );
          return { items: updatedItems };
        }),
      clearCart: () => set({ items: [] }),
      discount: 0,
      setDiscount: (value: number) => set({ discount: value }), // New function to set the discount value directly
      discountCode: '',
      setDiscountCode: (code: string) => set({ discountCode: code }),
      isOpen: false,
      setIsOpen: (isOpen: boolean) => set({ isOpen }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
