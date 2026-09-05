'use client'

import { motion } from 'framer-motion'
import { translations } from '@/locales'
import { useLanguage } from '@/hooks/useLanguage'

export default function About() {
  const { language } = useLanguage()

  const text = translations[language].about

  return (
    <section
      id="about"
      className="
        relative
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
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">
              {text.eyebrow}
            </p>
          </div>

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

        {/* Content */}

        <div
          className="
            mt-16
            grid
            gap-16
            md:grid-cols-[1fr_1.5fr]
            md:gap-24
          "
        >
          {/* Side Information */}

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
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <p
              className="
                text-xs
                uppercase
                tracking-[0.18em]
                text-foreground/40
              "
            >
              {text.role}
            </p>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-foreground/60
              "
            >
              {text.location}
            </p>
          </motion.div>

          {/* Main Description */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p
              className="
                max-w-3xl
                text-xl
                font-light
                leading-relaxed
                tracking-[-0.01em]
                md:text-3xl
              "
            >
              {text.description}
            </p>

            {/* Details */}

            <div
              className="
                mt-16
                grid
                grid-cols-1
                border-t
                border-foreground/10
                sm:grid-cols-2
              "
            >
              {text.services.map((service: string, index: number) => (
                <motion.div
                  key={service}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="
                    border-b
                    border-foreground/10
                    py-6
                    sm:pr-8
                    even:sm:border-l
                    even:sm:border-foreground/10
                    even:sm:pl-8
                    even:sm:pr-0
                  "
                >
                  <span className="text-sm text-foreground/70">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}