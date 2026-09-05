
import Link from 'next/link'

import { navigation } from '@/data/navigation'
import { useLanguage } from '@/hooks/useLanguage'
import { useOffcanvas } from '@/hooks/useOffcanvas'

export default function OffcanvasMenu() {
  const { language } = useLanguage()
  const { isOpen, closeMenu } = useOffcanvas()

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <button
            type="button"
            onClick={closeMenu}
            className="absolute inset-0 bg-black/30"
            aria-label="Close menu"
          />

          {/* Menu */}
          <aside
            className="
              absolute
              right-0
              top-0
              h-full
              w-[85%]
              max-w-sm
              bg-background
              p-8
              text-foreground
              shadow-xl
              transition-colors
              duration-300
            "
            aria-label="Mobile navigation"
            dir={language === 'fa' ? 'rtl' : 'ltr'}
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <span
                className="
                  text-lg
                  font-semibold
                  tracking-[0.1em]
                "
              >
                NAVA FARHADI
              </span>

              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
                className="
                  text-3xl
                  leading-none
                  text-foreground
                  transition-colors
                  duration-300
                  hover:text-accent
                "
              >
                ×
              </button>
            </div>

            {/* Navigation */}
            <nav className="mt-16 flex flex-col gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="
                    text-xl
                    font-medium
                    text-foreground
                    transition-colors
                    duration-300
                    hover:text-accent
                  "
                >
                  {item.label[language]}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  )
}

