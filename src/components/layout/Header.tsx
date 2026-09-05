
import Link from 'next/link'
import { useRouter } from 'next/router'

import { navigation } from '@/data/navigation'
import { useLanguage } from '@/hooks/useLanguage'
import { useOffcanvas } from '@/hooks/useOffcanvas'
import { useTheme } from '@/hooks/useTheme'

export default function Header() {
  const router = useRouter()

  const { language, toggleLanguage } = useLanguage()
  const { toggleMenu } = useOffcanvas()
  const { theme, toggleTheme } = useTheme()

  const isActive = (href: string) => {
    if (href === '/') {
      return router.pathname === '/'
    }

    if (href === '/#projects') {
      return (
        router.pathname === '/projects/[slug]' ||
        router.pathname.startsWith('/projects')
      )
    }

    return router.pathname === href
  }

  return (
    <header className="relative flex h-25 items-center px-6 md:px-10">
      {/* Logo */}
      <div className="absolute left-6 shrink-0 md:left-10">
        <Link
          href="/"
          className="
            text-xl
            font-semibold
            tracking-[0.12em]
            text-foreground
            transition-colors
            duration-300
            hover:text-accent
            md:text-2xl
            lg:text-[26px]
          "
        >
          NAVA FARHADI
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav
        className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex"
        dir={language === 'fa' ? 'rtl' : 'ltr'}
      >
        {navigation.map((item) => {
          const active = isActive(item.href)

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                whitespace-nowrap
                text-base
                font-medium
                transition-all
                duration-300
                lg:text-[17px]
                ${
                  active
                    ? 'text-accent'
                    : 'text-foreground hover:text-accent'
                }
              `}
            >
              {item.label[language]}
            </Link>
          )
        })}
      </nav>

      {/* Desktop Controls */}
      <div
        className="absolute right-6 hidden items-center gap-6 md:right-10 md:flex"
        dir="ltr"
      >
        {/* Language */}
        <button
          type="button"
          onClick={toggleLanguage}
          aria-label="Change language"
          className="
            text-base
            font-semibold
            tracking-[0.08em]
            text-foreground
            transition-colors
            duration-300
            hover:text-accent
            lg:text-lg
          "
        >
          {language === 'en' ? 'FA' : 'EN'}
        </button>

        {/* Theme */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Change theme"
          className="
            text-2xl
            font-medium
            text-foreground
            transition-colors
            duration-300
            hover:text-accent
            lg:text-3xl
          "
        >
          {theme === 'light' ? '☼' : '☾'}
        </button>
      </div>

      {/* Mobile Controls */}
      <div
        className="
          absolute
          right-6
          flex
          items-center
          gap-4
          md:hidden
        "
        dir="ltr"
      >
        {/* Language */}
        <button
          type="button"
          onClick={toggleLanguage}
          aria-label="Change language"
          className="
            text-sm
            font-semibold
            tracking-[0.06em]
            text-foreground
            transition-colors
            duration-300
            hover:text-accent
          "
        >
          {language === 'en' ? 'FA' : 'EN'}
        </button>

        {/* Theme */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Change theme"
          className="
            text-2xl
            font-medium
            leading-none
            text-foreground
            transition-colors
            duration-300
            hover:text-accent
          "
        >
          {theme === 'light' ? '☼' : '☾'}
        </button>

        {/* Menu */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Open menu"
          className="
            text-xl
            leading-none
            text-foreground
            transition-colors
            duration-300
            hover:text-accent
          "
        >
          ☰
        </button>
      </div>
    </header>
  )
}

