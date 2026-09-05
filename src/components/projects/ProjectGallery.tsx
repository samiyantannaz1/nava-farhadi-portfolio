'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

import { projects } from '@/data/projects'
import { translations } from '@/locales'
import { useLanguage } from '@/hooks/useLanguage'
import { assetPath } from '@/lib/assetPath'
import ProjectCard from './ProjectCard'

export default function ProjectGallery() {
  const { language } = useLanguage()

  const text = translations[language].projects

  const [currentIndex, setCurrentIndex] = useState(0)

  const currentProject = projects[currentIndex]

  const currentContent =
    text.items[
      currentProject.slug as keyof typeof text.items
    ]

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <>
      {/* ========================================= */}
      {/* DESKTOP / TABLET                         */}
      {/* ========================================= */}

      <div
        className="
          hidden
          md:grid
          md:grid-cols-2
          md:gap-x-6
          md:gap-y-12
          lg:grid-cols-4
        "
      >
        {projects.map((project, index) => {
          const content =
            text.items[
              project.slug as keyof typeof text.items
            ]

          return (
            <motion.div
              key={project.id}
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
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProjectCard
                project={{
                  ...project,
                  title: content.title,
                  location: content.location,
                }}
              />
            </motion.div>
          )
        })}
      </div>

      {/* ========================================= */}
      {/* MOBILE                                    */}
      {/* ========================================= */}

      <div className="md:hidden">
        <div className="mx-auto max-w-xl">

          {/* Project Image */}

          <Link
            href={currentProject.href}
            className="group block"
          >
            <div
              className="
                relative
                aspect-[4/3]
                w-full
                overflow-hidden
                border
                border-foreground/10
                bg-foreground/5
              "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -20,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={assetPath(currentProject.image)}
                    alt={currentContent.title}
                    fill
                    sizes="100vw"
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-[1.03]
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/5
                    "
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </Link>

          {/* Project Information */}

          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 text-center"
            >
              <Link
                href={currentProject.href}
                className="group inline-block"
              >
                <h3
                  className="
                    text-3xl
                    font-light
                    leading-tight
                    tracking-[-0.04em]
                    text-foreground
                    transition-colors
                    duration-300
                    group-hover:text-accent
                  "
                >
                  {currentContent.title}
                </h3>
              </Link>

              <div
                className="
                  mt-3
                  flex
                  items-center
                  justify-center
                  gap-3
                  text-xs
                  tracking-[0.06em]
                  text-foreground/50
                "
              >
                <span>
                  {currentContent.location}
                </span>

                {currentProject.area && (
                  <>
                    <span className="text-foreground/20">
                      ·
                    </span>

                    <span>
                      {currentProject.area}
                    </span>
                  </>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}

          <div
            className="
              mt-7
              flex
              items-center
              justify-between
            "
          >
            {/* Previous */}

            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous project"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                border
                border-foreground/15
                text-lg
                text-foreground/60
                transition-all
                duration-300
                hover:border-accent
                hover:text-accent
              "
            >
              ←
            </button>

            {/* Counter */}

            <div
              className="
                text-xs
                tracking-[0.2em]
                text-foreground/40
              "
            >
              {String(currentIndex + 1).padStart(2, '0')}

              <span className="mx-2 text-foreground/20">
                /
              </span>

              {String(projects.length).padStart(2, '0')}
            </div>

            {/* Next */}

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next project"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                border
                border-foreground/15
                text-lg
                text-foreground/60
                transition-all
                duration-300
                hover:border-accent
                hover:text-accent
              "
            >
              →
            </button>
          </div>

        </div>
      </div>
    </>
  )
}