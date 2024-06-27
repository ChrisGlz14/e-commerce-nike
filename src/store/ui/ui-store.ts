import { create } from "zustand"

interface menuSideState {
    menuIsOpen: boolean,
    openSideMenu: () => void
    closeSideMenu: () => void
    }
    
    export const useMenuSideState = create<menuSideState>()((set) => ({
      menuIsOpen: false,
      openSideMenu: () => set({menuIsOpen: true}),
      closeSideMenu: () => set({menuIsOpen: false}),
    }))

    