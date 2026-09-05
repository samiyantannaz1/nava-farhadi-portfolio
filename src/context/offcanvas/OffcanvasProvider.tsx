import { useState, type ReactNode } from 'react'
import { OffcanvasContext } from './OffcanvasContext'

interface Props {
  children: ReactNode
}

export default function OffcanvasProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => {
    setIsOpen(true)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <OffcanvasContext.Provider
      value={{
        isOpen,
        openMenu,
        closeMenu,
        toggleMenu,
      }}
    >
      {children}
    </OffcanvasContext.Provider>
  )
}