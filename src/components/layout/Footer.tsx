'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import { navigation } from '@/data/navigation'
import { translations } from '@/locales'
import { useLanguage } from '@/hooks/useLanguage'

export default function Footer() {
const { language } = useLanguage()

const text = translations[language].footer

const isFa = language === 'fa'

return (
<footer
dir={isFa ? 'rtl' : 'ltr'}
className="
border-t
border-foreground/10
bg-background
text-foreground
"
>

```
  {/* ==================================================
      CTA
      بخش دعوت به همکاری
  ================================================== */}

  <section
    className="
      px-6
      py-24
      md:px-10
      md:py-32
    "
  >
    <div
      className="
        mx-auto
        max-w-7xl
      "
    >

      <div
        className="
          grid
          gap-12
          md:grid-cols-[1fr_2fr]
          md:items-end
        "
      >

        {/* Eyebrow */}

        <motion.p
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
            amount: 0.3,
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
          {text.contact.eyebrow}
        </motion.p>


        {/* CTA Content */}

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
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <h2
            className="
              max-w-4xl
              text-[clamp(2.5rem,6vw,6rem)]
              font-light
              leading-[0.95]
              tracking-[-0.04em]
            "
          >
            {text.contact.title}
          </h2>


          <p
            className="
              mt-8
              max-w-xl
              text-sm
              leading-7
              text-foreground/60
              md:text-base
            "
          >
            {text.contact.description}
          </p>


          {/* Contact Link */}

          <Link
            href="/contact"
            className="
              group
              mt-10
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
            {text.contact.button}

            <span
              className="
                text-lg
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>

        </motion.div>

      </div>

    </div>
  </section>


  {/* ==================================================
      FOOTER MAIN
      برند + Navigation
  ================================================== */}

  <section
    className="
      border-t
      border-foreground/10
      px-6
      py-16
      md:px-10
      md:py-20
    "
  >
    <div
      className="
        mx-auto
        grid
        max-w-7xl
        gap-12
        md:grid-cols-[2fr_1fr]
      "
    >

      {/* Brand */}

      <div>

        <Link
          href="/"
          className="
            text-xl
            font-light
            tracking-[-0.02em]
            transition-opacity
            hover:opacity-60
          "
        >
          {text.brand.name}
        </Link>

        <p
          className="
            mt-4
            text-sm
            text-foreground/60
          "
        >
          {text.brand.role}
        </p>

        <p
          className="
            mt-2
            text-xs
            tracking-[0.08em]
            text-foreground/40
          "
        >
          {text.brand.location}
        </p>

      </div>


      {/* Navigation */}

      <nav>

        <p
          className="
            mb-5
            text-xs
            uppercase
            tracking-[0.2em]
            text-accent
          "
        >
          {text.navigation.title}
        </p>

        <div className="flex flex-col gap-3">

          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                w-fit
                text-sm
                text-foreground/70
                transition-colors
                duration-300
                hover:text-accent
              "
            >
              {item.label[language]}
            </Link>
          ))}

        </div>

      </nav>

    </div>
  </section>


  {/* ==================================================
      FOOTER BOTTOM
      Copyright + Social Links
  ================================================== */}

  <div
    className="
      border-t
      border-foreground/10
      px-6
      py-6
      md:px-10
    "
  >
    <div
      className="
        mx-auto
        flex
        max-w-7xl
        flex-col
        gap-5
        text-xs
        text-foreground/40
        md:flex-row
        md:items-center
        md:justify-between
      "
    >

      {/* Copyright */}

      <p>
        {text.bottom.copyright}
      </p>


      {/* Social */}

      <div className="flex items-center gap-6">

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="
            transition-colors
            duration-300
            hover:text-accent
          "
        >
          {text.bottom.social.instagram}
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="
            transition-colors
            duration-300
            hover:text-accent
          "
        >
          {text.bottom.social.linkedin}
        </a>

      </div>

    </div>
  </div>

</footer>


)
}
