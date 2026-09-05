import { useContext } from 'react'
import { OffcanvasContext } from '@/context/offcanvas/OffcanvasContext'

export function useOffcanvas() {
  const context = useContext(OffcanvasContext)

  if (!context) {
    throw new Error(
      'useOffcanvas must be used inside OffcanvasProvider'
    )
  }

  return context
}