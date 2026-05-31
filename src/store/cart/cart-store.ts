import { create } from "zustand"

interface CartState {
  totalItems: number
  addItem: () => void
  removeItem: () => void
}

export const useCartStore = create<CartState>()((set) => ({
  totalItems: 0,
  addItem: () => set((state) => ({ totalItems: state.totalItems + 1 })),
  removeItem: () =>
    set((state) => ({ totalItems: Math.max(0, state.totalItems - 1) })),
}))
