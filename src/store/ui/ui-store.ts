import { create } from "zustand"

// Interfaces
interface menuSideState {
    menuIsOpen: boolean,
    openSideMenu: () => void
    closeSideMenu: () => void
    }

interface cartSideState {
    cartIsOpen: boolean,
    openCart: () => void
    closeCart: () => void
}

// Store state
export const useMenuSideState = create<menuSideState>()((set) => ({
  menuIsOpen: false,
  openSideMenu: () => set({menuIsOpen: true}),
  closeSideMenu: () => set({menuIsOpen: false}),
}))

// Cart state
export const useCartSideState = create<cartSideState>()((set) => ({
  cartIsOpen: false,
  openCart: () => set({cartIsOpen: true}),
  closeCart: () => set({cartIsOpen: false}),
}))