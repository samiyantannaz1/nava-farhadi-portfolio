import type { ReactNode } from 'react'
import CustomCursor from '../CustomCurso/CustomCursor'

import Header from './Header'
import Footer from './Footer'
import OffcanvasMenu from './OffcanvasMenu'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />

      <main>{children}</main>

      <Footer />

      <OffcanvasMenu />

      <CustomCursor />
    </div>
  )
}