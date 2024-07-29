import { create } from "zustand"

// Interfaces
interface menuSideState {
    menuIsOpen: boolean,
    openSideMenu: () => void
    closeSideMenu: () => void
    }

// Store state
export const useMenuSideState = create<menuSideState>()((set) => ({
  menuIsOpen: false,
  openSideMenu: () => set({menuIsOpen: true}),
  closeSideMenu: () => set({menuIsOpen: false}),
}))

