
import { useEffect, useState, type ReactNode } from 'react'

import { LanguageContext } from './LanguageContext'

interface Props {
  children: ReactNode
}

export default function LanguageProvider({ children }: Props) {
  const [language, setLanguage] = useState<'fa' | 'en'>('en')

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'fa' : 'en'))
  }

  // تغییر جهت و زبان کل سایت بر اساس زبان انتخاب‌شده
  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr'
  }, [language])

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

