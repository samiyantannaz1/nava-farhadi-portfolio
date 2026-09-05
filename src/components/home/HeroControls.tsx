'use client'

import { motion } from 'framer-motion'

import { translations } from '@/locales'
import { useLanguage } from '@/hooks/useLanguage'

export default function HeroControls() {
  const { language } = useLanguage()

  const text = translations[language].home.hero

  const scrollUp = () => {
    window.scrollBy({
      top: -window.innerHeight * 0.8,
      behavior: 'smooth',
    })
  }

  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight * 0.8,
      behavior: 'smooth',
    })
  }

  const skipIntro = () => {
    document
      .getElementById('projects')
      ?.scrollIntoView({
        behavior: 'smooth',
      })
  }

  return (
    <div className="absolute inset-x-0 bottom-8 z-20 flex items-end justify-between px-6 md:bottom-10 md:px-10">

      {/* Scroll Control */}

      <div className="flex items-center gap-3 text-foreground/60">
        <div className="flex flex-col items-center">

          {/* Arrow Up */}

          <motion.button
            type="button"
            onClick={scrollUp}
            aria-label="Scroll up"
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{
              scale: 1.25,
              color: 'var(--accent)',
            }}
            className="
              text-lg
              leading-none
              transition-colors
              duration-300
            "
          >
            ↑
          </motion.button>

          {/* Line */}

          <motion.span
            className="my-1 h-6 w-px bg-accent/40"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scaleY: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Arrow Down */}

          <motion.button
            type="button"
            onClick={scrollDown}
            aria-label="Scroll down"
            animate={{
              y: [0, 4, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.15,
            }}
            whileHover={{
              scale: 1.25,
              color: 'var(--accent)',
            }}
            className="
              text-lg
              leading-none
              transition-colors
              duration-300
            "
          >
            ↓
          </motion.button>

        </div>

        {/* Scroll Label */}

        <motion.span
          className="
            [writing-mode:vertical-rl]
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-foreground/50
          "
          animate={{
            opacity: [0.45, 0.8, 0.45],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {text.scroll}
        </motion.span>
      </div>

      {/* Skip Intro */}

      <motion.button
        type="button"
        onClick={skipIntro}
        initial={{
          opacity: 0,
          x: 20,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 1.4,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          x: 5,
        }}
        className="
          group
          flex
          items-center
          gap-3
          text-[10px]
          uppercase
          tracking-[0.2em]
          text-foreground/50
          transition-colors
          duration-300
          hover:text-accent
        "
      >
        <span>{text.skipIntro}</span>

        <motion.span
          animate={{
            x: [0, 4, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="text-accent"
        >
          →
        </motion.span>
      </motion.button>
    </div>
  )
}