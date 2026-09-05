import type { AppProps } from 'next/app'

import ThemeProvider from '@/context/theme/ThemeProvider'
import LanguageProvider from '@/context/language/LanguageProvider'
import OffcanvasProvider from '@/context/offcanvas/OffcanvasProvider'

import Layout from '@/components/layout/Layout'

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <OffcanvasProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </OffcanvasProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}