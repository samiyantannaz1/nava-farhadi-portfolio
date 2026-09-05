import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { translations } from '@/locales'
import { useLanguage } from '@/hooks/useLanguage'

export default function ProjectDetailPage() {
  const router = useRouter()
  const { language } = useLanguage()

  const isFa = language === 'fa'
  const slug = router.query.slug

  if (!router.isReady) {
    return null
  }

  if (typeof slug !== 'string') {
    return null
  }

  const projectDetails = translations[language].projectDetails

  const project =
    projectDetails[
      slug as keyof typeof projectDetails
    ]

  if (!project) {
    return (
      <main
        dir={isFa ? 'rtl' : 'ltr'}
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-background
          px-6
          text-foreground
        "
      >
        <div className="text-center">
          <p
            className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-accent
            "
          >
            404
          </p>

          <h1
            className="
              mt-5
              text-4xl
              font-light
              tracking-[-0.04em]
            "
          >
            Project not found
          </h1>

          <Link
            href="/#projects"
            className="
              mt-8
              inline-flex
              border
              border-foreground/20
              px-6
              py-3
              text-xs
              uppercase
              tracking-[0.15em]
              transition-colors
              duration-300
              hover:border-accent
              hover:text-accent
            "
          >
            Back to Projects
          </Link>
        </div>
      </main>
    )
  }

  const projectKeys = Object.keys(projectDetails)

  const currentIndex = projectKeys.indexOf(slug)

  const previousSlug =
    currentIndex > 0
      ? projectKeys[currentIndex - 1]
      : null

  const nextSlug =
    currentIndex < projectKeys.length - 1
      ? projectKeys[currentIndex + 1]
      : null

  const previousProject = previousSlug
    ? projectDetails[
        previousSlug as keyof typeof projectDetails
      ]
    : null

  const nextProject = nextSlug
    ? projectDetails[
        nextSlug as keyof typeof projectDetails
      ]
    : null

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
          PROJECT HERO
          هیرو و معرفی اصلی پروژه
      ================================================== */}

      <section
        className="
          px-6
          pb-16
          pt-12
          md:px-10
          md:pb-24
          md:pt-16
        "
      >
        <div className="mx-auto max-w-7xl">

          {/* Top Navigation */}

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
            <Link
              href="/#projects"
              className="
                text-xs
                uppercase
                tracking-[0.15em]
                text-foreground/50
                transition-colors
                duration-300
                hover:text-accent
              "
            >
              {isFa ? 'بازگشت به پروژه‌ها' : 'Back to Projects'}
            </Link>

            <span
              className="
                text-xs
                tracking-[0.15em]
                text-foreground/30
              "
            >
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
          </div>


          {/* Project Title */}

          <div
            className="
              grid
              gap-10
              py-16
              md:grid-cols-[1.6fr_1fr]
              md:items-end
              md:py-24
            "
          >

            <motion.h1
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                max-w-6xl
                text-[clamp(3rem,7vw,7rem)]
                font-light
                leading-[0.84]
                tracking-[-0.065em]
              "
            >
              {project.title}
            </motion.h1>


            {/* Project Meta */}

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
                delay: 0.15,
              }}
              className="max-w-md"
            >
              <p
                className="
                  text-sm
                  text-foreground/70
                  md:text-base
                "
              >
                {project.location}
              </p>

              <div
                className="
                  mt-6
                  grid
                  grid-cols-2
                  gap-x-8
                  gap-y-5
                  border-t
                  border-foreground/10
                  pt-5
                "
              >

                <div>
                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      text-foreground/35
                    "
                  >
                    {isFa ? 'مساحت' : 'Area'}
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-foreground/70
                    "
                  >
                    {project.area}
                  </p>
                </div>


                <div>
                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      text-foreground/35
                    "
                  >
                    {isFa ? 'سال' : 'Year'}
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-foreground/70
                    "
                  >
                    {project.year}
                  </p>
                </div>


                <div>
                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      text-foreground/35
                    "
                  >
                    {isFa ? 'نوع' : 'Type'}
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-foreground/70
                    "
                  >
                    {project.type}
                  </p>
                </div>


                <div>
                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      text-foreground/35
                    "
                  >
                    {isFa ? 'دسته‌بندی' : 'Category'}
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-foreground/70
                    "
                  >
                    {project.category}
                  </p>
                </div>

              </div>
            </motion.div>

          </div>


          {/* Hero Image */}

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
              duration: 1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              aspect-[16/10]
              overflow-hidden
              bg-foreground/5
            "
          >
            <Image
              src={project.gallery[0]}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="
                object-cover
                transition-transform
                duration-[1.5s]
                hover:scale-[1.02]
              "
            />
          </motion.div>

        </div>
      </section>


      {/* ==================================================
          PROJECT DESCRIPTION
          معرفی و توضیحات پروژه
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

          {/* Label */}

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
          >
            <p
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-accent
              "
            >
              {isFa ? 'پروژه' : 'Project'}
            </p>
          </motion.div>


          {/* Description */}

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
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              max-w-4xl
              text-2xl
              font-light
              leading-relaxed
              tracking-[-0.02em]
              md:text-4xl
            "
          >
            {project.description}
          </motion.p>

        </div>
      </section>


      {/* ==================================================
          PROJECT CONCEPT
          کانسپت پروژه
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

          {/* Label */}

          <p
            className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-accent
            "
          >
            {isFa ? 'کانسپت' : 'Concept'}
          </p>


          {/* Concept */}

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
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              max-w-3xl
              text-lg
              font-light
              leading-relaxed
              text-foreground/70
              md:text-2xl
            "
          >
            {project.concept}
          </motion.p>

        </div>
      </section>


      {/* ==================================================
          PROJECT GALLERY
          گالری تصاویر پروژه
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

          {/* Gallery Header */}

          <div
            className="
              mb-16
              flex
              items-end
              justify-between
            "
          >
            <p
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-accent
              "
            >
              {isFa ? 'گالری' : 'Gallery'}
            </p>

            <span
              className="
                text-xs
                tracking-[0.15em]
                text-foreground/30
              "
            >
              {String(project.gallery.length).padStart(2, '0')}
            </span>
          </div>


          {/* Gallery */}

          <div className="space-y-6 md:space-y-10">

            {project.gallery.slice(1).map((image, index) => {

              const isLarge = index % 3 === 0

              return (
                <motion.div
                  key={image}
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
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`
                    relative
                    overflow-hidden
                    bg-foreground/5
                    ${
                      isLarge
                        ? 'aspect-[16/9] md:w-[82%]'
                        : 'aspect-[4/3] md:ml-auto md:w-[62%]'
                    }
                  `}
                >
                  <Image
                    src={image}
                    alt={`${project.title} ${index + 2}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 82vw"
                    className="
                      object-cover
                      transition-transform
                      duration-[1.2s]
                      hover:scale-[1.025]
                    "
                  />
                </motion.div>
              )
            })}

          </div>

        </div>
      </section>


      {/* ==================================================
          PROJECT NAVIGATION
          جابه‌جایی بین پروژه‌ها
      ================================================== */}

      <section
        className="
          border-t
          border-foreground/10
          px-6
          py-20
          md:px-10
          md:py-28
        "
      >
        <div className="mx-auto max-w-7xl">

          <div
            className="
              grid
              gap-4
              md:grid-cols-2
            "
          >

            {/* Previous */}

            {previousProject && previousSlug ? (
              <Link
                href={`/projects/${previousSlug}`}
                className="
                  group
                  border
                  border-foreground/10
                  p-6
                  transition-all
                  duration-500
                  hover:border-accent/40
                  hover:bg-foreground/[0.03]
                  md:p-8
                "
              >
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-foreground/35
                  "
                >
                  {isFa ? 'پروژه قبلی' : 'Previous Project'}
                </p>

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    justify-between
                    gap-6
                  "
                >
                  <h3
                    className="
                      text-2xl
                      font-light
                      tracking-[-0.03em]
                      transition-colors
                      duration-300
                      group-hover:text-accent
                      md:text-3xl
                    "
                  >
                    {previousProject.title}
                  </h3>

                  <span
                    className="
                      text-xl
                      transition-transform
                      duration-300
                      group-hover:-translate-x-1
                    "
                  >
                    {isFa ? '→' : '←'}
                  </span>
                </div>
              </Link>
            ) : (
              <div />
            )}


            {/* Next */}

            {nextProject && nextSlug ? (
              <Link
                href={`/projects/${nextSlug}`}
                className="
                  group
                  border
                  border-foreground/10
                  p-6
                  text-left
                  transition-all
                  duration-500
                  hover:border-accent/40
                  hover:bg-foreground/[0.03]
                  md:p-8
                  rtl:text-right
                "
              >
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-foreground/35
                  "
                >
                  {isFa ? 'پروژه بعدی' : 'Next Project'}
                </p>

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    justify-between
                    gap-6
                  "
                >
                  <span
                    className="
                      text-xl
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    {isFa ? '←' : '→'}
                  </span>

                  <h3
                    className="
                      text-2xl
                      font-light
                      tracking-[-0.03em]
                      transition-colors
                      duration-300
                      group-hover:text-accent
                      md:text-3xl
                    "
                  >
                    {nextProject.title}
                  </h3>
                </div>
              </Link>
            ) : null}

          </div>

        </div>
      </section>


      {/* ==================================================
          BACK TO PROJECTS
          بازگشت به لیست پروژه‌ها
      ================================================== */}

      <section
        className="
          border-t
          border-foreground/10
          px-6
          py-16
          md:px-10
        "
      >
        <div className="mx-auto max-w-7xl">

          <Link
            href="/#projects"
            className="
              group
              inline-flex
              items-center
              gap-4
              text-xs
              uppercase
              tracking-[0.16em]
              text-foreground/50
              transition-colors
              duration-300
              hover:text-accent
            "
          >
            <span
              className="
                text-lg
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            >
              {isFa ? '→' : '←'}
            </span>

            {isFa
              ? 'بازگشت به پروژه‌ها'
              : 'Back to Projects'}
          </Link>

        </div>
      </section>

    </main>
  )
}