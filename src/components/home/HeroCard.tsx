'use client'

import { motion } from 'framer-motion'
import { translations } from '@/locales'
import { useLanguage } from '@/hooks/useLanguage'

export default function HeroCard() {
  const { language } = useLanguage()

  const text = translations[language].home.hero

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        w-full
        max-w-[54rem]
        overflow-hidden
        rounded-3xl
        border
        border-accent/40
        bg-white/10
        p-12
        text-center
        shadow-[0_8px_40px_rgba(0,0,0,0.08)]
        backdrop-blur-2xl
        md:p-20
        dark:bg-black/20
      "
    >
      {/* Glass highlight */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-accent/70
        "
      />

      {/* Glass Light Sweep */}
<motion.div
  aria-hidden="true"
  className="
    pointer-events-none
    absolute
    inset-y-0
    -left-1/2
    w-1/3
    rotate-12
    bg-gradient-to-r
    from-transparent
    via-accent/10
    to-transparent
    blur-xl
  "
  animate={{
    x: ['0%', '450%'],
  }}
  transition={{
    duration: 7,
    repeat: Infinity,
    repeatDelay: 4,
    ease: 'easeInOut',
  }}
/>

      {/* Eyebrow */}
      <p className="mb-6 text-xs uppercase tracking-[0.2em] text-accent">
        {text.eyebrow}
      </p>

      {/* Name */}
      <h1
        className="
          text-[clamp(2.8rem,7vw,6.4rem)]
          font-light
          leading-[1.12]
          tracking-[-0.05em]
          text-foreground
        "
      >
        NAVA
        <br />
        <span className="text-accent">FARHADI</span>
      </h1>

      {/* Role */}
      <p
        className="
          mt-8
          text-sm
          leading-7
          text-foreground
          md:text-base
          md:leading-8
        "
      >
        {text.role}
      </p>

      {/* Description */}
      <p
        className="
          mx-auto
          mt-5
          max-w-2xl
          text-sm
          leading-8
          text-foreground/60
          md:text-base
          md:leading-9
        "
      >
        {text.description}
      </p>

      {/* Location */}
      <p className="mt-6 text-xs tracking-[0.15em] text-accent/90">
        {text.location}
      </p>
    </motion.div>
  )
}