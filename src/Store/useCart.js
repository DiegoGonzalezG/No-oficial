
import { create } from "zustand";

const useCart = create((set) => ({
  items: [],
  total: 0,
  
 
  addItem: (item) => set((state) => {
    const existingItem = state.items.find((i) => i.id === item.id);
    let updatedItems;
    if (existingItem) {
      updatedItems = state.items.map((i) =>
        i.id === item.id
          ? { ...i, quantity: i.quantity + 1 }
          : i
      );
    } else {
      updatedItems = [...state.items, { ...item, quantity: 1 }];
    }
    const newTotal = updatedItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
    return { items: updatedItems, total: newTotal };
  }),

 
  removeItem: (id) => set((state) => {
    const updatedItems = state.items.filter((item) => item.id !== id);
    const newTotal = updatedItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
    return { items: updatedItems, total: newTotal };
  }),


  clearCart: () => set(() => ({ items: [], total: 0 }))
}));

export default useCart;
