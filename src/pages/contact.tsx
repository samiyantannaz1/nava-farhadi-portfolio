'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, ArrowUpRight } from 'lucide-react'

import { translations } from '@/locales'
import { useLanguage } from '@/hooks/useLanguage'

export default function ContactPage() {
  const { language } = useLanguage()

  const text = translations[language].contact
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
          CONTACT HERO
          بخش اصلی صفحه تماس
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

          {/* Top Label */}

          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-foreground/10
              pb-5
            "
          >
            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-accent
              "
            >
              {text.eyebrow}
            </motion.p>

            <span
              className="
                text-xs
                tracking-[0.15em]
                text-foreground/30
              "
            >
              01
            </span>
          </div>

          {/* Main Heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-16
              max-w-6xl
              text-[clamp(3rem,7vw,7rem)]
              font-light
              leading-[0.9]
              tracking-[-0.055em]
            "
          >
            {text.title}
          </motion.h1>

          {/* ==================================================
              GLASS CONTACT CARDS
          ================================================== */}

          <div
            className="
              mt-20
              grid
              gap-4
              md:grid-cols-3
            "
          >

            {/* ==================================================
                EMAIL CARD
            ================================================== */}

            <motion.a
              href={`mailto:${text.details.email.value}`}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-foreground/10
                bg-foreground/[0.035]
                p-6
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-accent/40
                hover:bg-accent/[0.08]
                hover:shadow-2xl
                hover:shadow-accent/5
                md:p-8
              "
            >

              {/* Glass Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-10
                  -top-10
                  h-32
                  w-32
                  rounded-full
                  bg-accent/10
                  opacity-0
                  blur-3xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Card Header */}

              <div
                className="
                  relative
                  flex
                  items-start
                  justify-between
                "
              >

                {/* Icon */}

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-foreground/10
                    bg-background/30
                    backdrop-blur-md
                    transition-all
                    duration-500
                    group-hover:border-accent/40
                    group-hover:bg-accent/10
                  "
                >
                  <Mail
                    size={17}
                    strokeWidth={1.5}
                    className="
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* Arrow */}

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  className="
                    text-foreground/30
                    transition-all
                    duration-500
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    group-hover:text-accent
                  "
                />

              </div>

              {/* Card Content */}

              <div className="relative mt-12">

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-foreground/40
                  "
                >
                  {text.details.email.label}
                </p>

                <p
                  className="
                    mt-3
                    break-all
                    text-sm
                    text-foreground/70
                    transition-colors
                    duration-300
                    group-hover:text-accent
                  "
                >
                  {text.details.email.value}
                </p>

              </div>

            </motion.a>

            {/* ==================================================
                INSTAGRAM CARD
            ================================================== */}

            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-foreground/10
                bg-foreground/[0.035]
                p-6
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-accent/40
                hover:bg-accent/[0.08]
                hover:shadow-2xl
                hover:shadow-accent/5
                md:p-8
              "
            >

              {/* Glass Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-10
                  -top-10
                  h-32
                  w-32
                  rounded-full
                  bg-accent/10
                  opacity-0
                  blur-3xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Card Header */}

              <div
                className="
                  relative
                  flex
                  items-start
                  justify-between
                "
              >

                {/* Instagram Icon */}

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-foreground/10
                    bg-background/30
                    backdrop-blur-md
                    transition-all
                    duration-500
                    group-hover:border-accent/40
                    group-hover:bg-accent/10
                  "
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />

                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />

                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                {/* Arrow */}

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  className="
                    text-foreground/30
                    transition-all
                    duration-500
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    group-hover:text-accent
                  "
                />

              </div>

              {/* Card Content */}

              <div className="relative mt-12">

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-foreground/40
                  "
                >
                  {text.details.instagram.label}
                </p>

                <p
                  className="
                    mt-3
                    text-sm
                    text-foreground/70
                    transition-colors
                    duration-300
                    group-hover:text-accent
                  "
                >
                  {text.details.instagram.value}
                </p>

              </div>

            </motion.a>

            {/* ==================================================
                LOCATION CARD
            ================================================== */}

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
                duration: 0.7,
                delay: 0.4,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-foreground/10
                bg-foreground/[0.035]
                p-6
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-accent/40
                hover:bg-accent/[0.08]
                hover:shadow-2xl
                hover:shadow-accent/5
                md:p-8
              "
            >

              {/* Glass Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-10
                  -top-10
                  h-32
                  w-32
                  rounded-full
                  bg-accent/10
                  opacity-0
                  blur-3xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Card Header */}

              <div
                className="
                  relative
                  flex
                  items-start
                  justify-between
                "
              >

                {/* Icon */}

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-foreground/10
                    bg-background/30
                    backdrop-blur-md
                    transition-all
                    duration-500
                    group-hover:border-accent/40
                    group-hover:bg-accent/10
                  "
                >
                  <MapPin
                    size={17}
                    strokeWidth={1.5}
                    className="
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* Arrow */}

                <span
                  className="
                    text-lg
                    text-foreground/30
                    transition-all
                    duration-500
                    group-hover:translate-x-1
                    group-hover:text-accent
                  "
                >
                  →
                </span>

              </div>

              {/* Card Content */}

              <div className="relative mt-12">

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-foreground/40
                  "
                >
                  {text.details.location.label}
                </p>

                <p
                  className="
                    mt-3
                    text-sm
                    text-foreground/70
                    transition-colors
                    duration-300
                    group-hover:text-accent
                  "
                >
                  {text.details.location.value}
                </p>

              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* ==================================================
          PROJECT FORM
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

          {/* Section Heading */}

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
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div className="flex items-center justify-between">

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-accent
                "
              >
                {text.form.title}
              </p>

              <span
                className="
                  text-xs
                  tracking-[0.15em]
                  text-foreground/30
                "
              >
                02
              </span>

            </div>

            <h2
              className="
                mt-8
                max-w-5xl
                text-[clamp(2.2rem,5vw,5rem)]
                font-light
                leading-[0.95]
                tracking-[-0.045em]
              "
            >
              {text.form.title}
            </h2>

          </motion.div>

          {/* ==================================================
              GLASS FORM
          ================================================== */}

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
              amount: 0.15,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              mt-16
              overflow-hidden
              rounded-[2rem]
              border
              border-foreground/10
              bg-foreground/[0.035]
              p-6
              backdrop-blur-2xl
              md:p-10
              lg:p-14
            "
          >

            {/* Ambient Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-32
                -top-32
                h-72
                w-72
                rounded-full
                bg-accent/[0.08]
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-40
                -left-40
                h-80
                w-80
                rounded-full
                bg-foreground/[0.03]
                blur-3xl
              "
            />

            {/* Form */}

            <form
              onSubmit={(event) => {
                event.preventDefault()
              }}
              className="
                relative
                grid
                gap-10
                lg:grid-cols-2
                lg:gap-x-14
                lg:gap-y-12
              "
            >

              {/* Name */}

              <div className="group">

                <label
                  htmlFor="name"
                  className="
                    mb-3
                    block
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-foreground/40
                  "
                >
                  {text.form.name}
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder={text.form.namePlaceholder}
                  className="
                    w-full
                    border-b
                    border-foreground/15
                    bg-transparent
                    px-0
                    py-4
                    text-lg
                    font-light
                    outline-none
                    transition-all
                    duration-500
                    placeholder:text-foreground/20
                    focus:border-accent
                    focus:pl-2
                  "
                />

              </div>

              {/* Email */}

              <div className="group">

                <label
                  htmlFor="email"
                  className="
                    mb-3
                    block
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-foreground/40
                  "
                >
                  {text.form.email}
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={text.form.emailPlaceholder}
                  className="
                    w-full
                    border-b
                    border-foreground/15
                    bg-transparent
                    px-0
                    py-4
                    text-lg
                    font-light
                    outline-none
                    transition-all
                    duration-500
                    placeholder:text-foreground/20
                    focus:border-accent
                    focus:pl-2
                  "
                />

              </div>

              {/* Message */}

              <div className="group lg:col-span-2">

                <label
                  htmlFor="message"
                  className="
                    mb-3
                    block
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-foreground/40
                  "
                >
                  {text.form.message}
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder={text.form.messagePlaceholder}
                  className="
                    w-full
                    resize-none
                    border-b
                    border-foreground/15
                    bg-transparent
                    px-0
                    py-4
                    text-lg
                    font-light
                    outline-none
                    transition-all
                    duration-500
                    placeholder:text-foreground/20
                    focus:border-accent
                    focus:pl-2
                  "
                />

              </div>

              {/* Bottom Row */}

              <div
                className="
                  flex
                  flex-col
                  items-start
                  justify-between
                  gap-8
                  pt-2
                  lg:col-span-2
                  lg:flex-row
                  lg:items-end
                "
              >

                {/* Description */}

                <p
                  className="
                    max-w-md
                    text-xs
                    leading-relaxed
                    text-foreground/30
                  "
                >
                  {text.description}
                </p>

                {/* Submit Button */}

                <button
                  type="submit"
                  className="
                    group
                    inline-flex
                    shrink-0
                    items-center
                    gap-5
                    rounded-full
                    border
                    border-foreground/15
                    bg-background/20
                    px-8
                    py-5
                    text-xs
                    uppercase
                    tracking-[0.16em]
                    backdrop-blur-md
                    transition-all
                    duration-500
                    hover:border-accent
                    hover:bg-accent
                    hover:text-background
                  "
                >

                  <span>
                    {text.form.button}
                  </span>

                  <span
                    className="
                      text-lg
                      transition-transform
                      duration-500
                      group-hover:translate-x-2
                    "
                  >
                    →
                  </span>

                </button>

              </div>

            </form>

          </motion.div>

        </div>
      </section>

      {/* ==================================================
          CLOSING STATEMENT
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

          <motion.p
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
            className="
              max-w-5xl
              text-2xl
              font-light
              leading-tight
              tracking-[-0.03em]
              text-foreground/50
              md:text-5xl
            "
          >
            {text.description}
          </motion.p>

        </div>
      </section>

    </main>
  )
}