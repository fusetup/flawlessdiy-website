"use client"

import { create } from "zustand"

interface ContactDialogStore {
  isOpen: boolean
  openContactDialog: () => void
  closeContactDialog: () => void
}

export const useContactDialog = create<ContactDialogStore>((set) => ({
  isOpen: false,
  openContactDialog: () => set({ isOpen: true }),
  closeContactDialog: () => set({ isOpen: false }),
}))
