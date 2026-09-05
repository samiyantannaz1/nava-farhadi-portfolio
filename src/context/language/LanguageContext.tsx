import { createContext } from 'react'

interface LanguageContextType {
  language: 'fa' | 'en'
  toggleLanguage: () => void
}

export const LanguageContext =
  createContext<LanguageContextType | undefined>(undefined)