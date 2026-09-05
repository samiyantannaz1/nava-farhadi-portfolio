'use client'

import { motion } from 'framer-motion'
import { translations } from '@/locales'
import { useLanguage } from '@/hooks/useLanguage'
import ProjectGallery from './ProjectGallery'

export default function Projects() {
  const { language } = useLanguage()

  const text = translations[language].projects

  return (
    <section
      id="projects"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-background
        px-6
        py-24
        text-foreground
        md:px-10
        md:py-32
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-8 md:grid-cols-[1fr_2fr]"
        >
          {/* Label */}

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">
              {text.eyebrow}
            </p>
          </div>

          {/* Title + Description */}

          <div>
            <h2
              className="
                max-w-4xl
                text-[clamp(2.5rem,6vw,6rem)]
                font-light
                leading-[0.95]
                tracking-[-0.04em]
              "
            >
              {text.title}
            </h2>

            <p
              className="
                mt-8
                max-w-2xl
                text-sm
                leading-7
                text-foreground/60
                md:text-base
              "
            >
              {text.description}
            </p>
          </div>
        </motion.div>

        {/* Divider */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-20
            h-px
            origin-left
            bg-foreground/10
          "
        />

        {/* Project Gallery */}

        <div className="mt-16">
          <ProjectGallery />
        </div>

      </div>
    </section>
  )
}