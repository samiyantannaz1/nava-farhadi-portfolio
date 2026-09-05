'use client'

import Image from 'next/image'
import { assetPath } from '@/lib/assetPath'
import { motion } from 'framer-motion'

import { translations } from '@/locales'
import { useLanguage } from '@/hooks/useLanguage'

export default function ProfilePage() {
  const { language } = useLanguage()

  const text = translations[language].profile

  const isFa = language === 'fa'

  return (
    <main
      dir={isFa ? 'rtl' : 'ltr'}
      className="
        min-h-screen
        bg-background
        text-foreground
      "
    >
      {/* ==================================================
          PROFILE HERO
          معرفی اصلی + عکس Nava + نام + نقش
      ================================================== */}

      <section
        className="
          px-6
          pb-24
          pt-16
          md:px-10
          md:pb-32
          md:pt-24
        "
      >
        <div className="mx-auto max-w-7xl">

          {/* Hero Grid */}

          <div
            className="
              grid
              gap-12
              border-b
              border-foreground/10
              pb-16
              md:grid-cols-[1fr_2fr]
              md:gap-16
              md:items-start
            "
          >

            {/* ------------------------------------------
                Profile Label + Image
            ------------------------------------------ */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* Profile Label */}

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-accent
                "
              >
                {text.eyebrow}
              </p>

              {/* Nava Image */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  mt-8
                  aspect-[4/5]
                  w-full
                  max-w-md
                  overflow-hidden
                  bg-foreground/5
                "
              >
                <Image
                  src={assetPath("/images/profile/nava-farhadi.png")}
                  alt={text.name}
                  fill
                  priority
                  sizes="
                    (max-width: 768px) 100vw,
                    33vw
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-[1.02]
                  "
                />
              </motion.div>

            </motion.div>


            {/* ------------------------------------------
                Name + Role + Location
            ------------------------------------------ */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                flex
                min-h-full
                flex-col
                justify-end
              "
            >

              {/* Name */}

              <h1
                className="
                  max-w-5xl
                  text-[clamp(3rem,7vw,7rem)]
                  font-light
                  leading-[0.85]
                  tracking-[-0.06em]
                "
              >
                {text.name}
              </h1>

              {/* Role + Location */}

              <div className="mt-10">

                <p
                  className="
                    text-sm
                    text-foreground/70
                    md:text-base
                  "
                >
                  {text.role}
                </p>

                <p
                  className="
                    mt-4
                    text-xs
                    tracking-[0.12em]
                    text-foreground/50
                  "
                >
                  {text.location}
                </p>

              </div>

            </motion.div>

          </div>


          {/* ------------------------------------------
              Intro
          ------------------------------------------ */}

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-16
              max-w-4xl
              text-2xl
              font-light
              leading-relaxed
              tracking-[-0.02em]
              md:text-4xl
            "
          >
            {text.intro}
          </motion.p>

        </div>
      </section>


      {/* ==================================================
          PROFILE
          معرفی و توضیحات درباره Nava
      ================================================== */}

      <section
        className="
          border-t
          border-foreground/10
          px-6
          py-24
          md:px-10
          md:py-32
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-12
            md:grid-cols-[1fr_2fr]
          "
        >

          {/* Section Label */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <p
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-accent
              "
            >
              {text.profile.title}
            </p>
          </motion.div>


          {/* Profile Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-3xl
              text-lg
              font-light
              leading-relaxed
              text-foreground/80
              md:text-2xl
            "
          >
            {text.profile.description}
          </motion.p>

        </div>
      </section>


      {/* ==================================================
          EDUCATION
          تحصیلات
      ================================================== */}

      <section
        className="
          border-t
          border-foreground/10
          px-6
          py-24
          md:px-10
          md:py-32
        "
      >
        <div className="mx-auto max-w-7xl">

          <div
            className="
              grid
              gap-8
              md:grid-cols-[1fr_2fr]
            "
          >

            {/* Education Label */}

            <p
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-accent
              "
            >
              {text.education.title}
            </p>


            {/* Education List */}

            <div>

              {text.education.items.map((item, index) => (
                <motion.div
                  key={`${item.degree}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 25,
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
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  className="
                    grid
                    gap-6
                    border-t
                    border-foreground/10
                    py-8
                    md:grid-cols-[150px_1fr]
                  "
                >

                  {/* Year */}

                  <span
                    className="
                      text-sm
                      text-foreground/40
                    "
                  >
                    {item.year}
                  </span>


                  {/* Degree + Institution */}

                  <div>

                    <h3
                      className="
                        text-xl
                        font-light
                        tracking-[-0.02em]
                        md:text-2xl
                      "
                    >
                      {item.degree}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-sm
                        text-foreground/60
                      "
                    >
                      {item.institution}
                    </p>

                  </div>

                </motion.div>
              ))}

            </div>

          </div>
        </div>
      </section>


      {/* ==================================================
          EXPERTISE
          حوزه‌های تخصصی
          3 Rows × 2 Columns
      ================================================== */}

      <section
        className="
          border-t
          border-foreground/10
          px-6
          py-24
          md:px-10
          md:py-32
        "
      >
        <div className="mx-auto max-w-7xl">

          <div
            className="
              grid
              gap-12
              md:grid-cols-[1fr_2fr]
            "
          >

            {/* Expertise Label */}

            <p
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-accent
              "
            >
              {text.expertise.title}
            </p>


            {/* Expertise Grid */}

            <div
              className="
                grid
                grid-cols-2
                border-l
                border-t
                border-foreground/10
              "
            >

              {/* Expertise Items */}

              {text.expertise.items.map((item, index) => (
                <motion.div
                  key={item}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="
                    flex
                    min-h-28
                    items-center
                    justify-between
                    border-b
                    border-r
                    border-foreground/10
                    px-6
                    py-6
                    transition-colors
                    duration-300
                    hover:bg-foreground/5
                    sm:px-8
                  "
                >

                  {/* Expertise Name */}

                  <span
                    className="
                      text-lg
                      font-light
                      tracking-[-0.02em]
                    "
                  >
                    {item}
                  </span>


                  {/* Number */}

                  <span
                    className="
                      text-xs
                      tracking-[0.12em]
                      text-accent
                    "
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                </motion.div>
              ))}


              {/* Sixth Empty Cell
                  برای کامل شدن جدول 3 × 2 */}

              <div
                aria-hidden="true"
                className="
                  min-h-28
                  border-b
                  border-r
                  border-foreground/10
                "
              />

            </div>

          </div>
        </div>
      </section>


      {/* ==================================================
          CV
          دریافت رزومه
      ================================================== */}

      <section
        className="
          border-t
          border-foreground/10
          px-6
          py-24
          md:px-10
          md:py-32
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            justify-between
            gap-10
            md:flex-row
            md:items-end
          "
        >

          {/* CV Title */}

          <div>

            <p
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-accent
              "
            >
              CV
            </p>

            <h2
              className="
                mt-6
                text-[clamp(2.2rem,5vw,5rem)]
                font-light
                leading-[0.95]
                tracking-[-0.04em]
              "
            >
              {text.name}
            </h2>

          </div>


          {/* Download Button */}

          <button
            type="button"
            className="
              group
              inline-flex
              items-center
              gap-4
              border
              border-foreground/20
              px-6
              py-4
              text-xs
              uppercase
              tracking-[0.15em]
              transition-all
              duration-300
              hover:border-accent
              hover:bg-accent
              hover:text-background
            "
          >
            {text.cv.label}

            <span
              className="
                text-lg
                transition-transform
                duration-300
                group-hover:translate-y-1
              "
            >
              ↓
            </span>

          </button>

        </div>
      </section>

    </main>
  )
}
