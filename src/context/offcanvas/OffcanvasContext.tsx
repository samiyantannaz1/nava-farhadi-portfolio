import { createContext } from 'react'

interface OffcanvasContextType {
  isOpen: boolean
  openMenu: () => void
  closeMenu: () => void
  toggleMenu: () => void
}

export const OffcanvasContext =
  createContext<OffcanvasContextType | undefined>(undefined)