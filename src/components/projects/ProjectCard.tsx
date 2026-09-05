'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Project as ProjectData } from '@/data/projects'
import { assetPath } from '@/lib/assetPath'

interface ProjectCardData extends ProjectData {
  title: string
  location: string
}

interface ProjectCardProps {
  project: ProjectCardData
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <Link
      href={project.href}
      className="group relative block h-full"
    >
      <motion.article
        initial="rest"
        whileHover="hover"
        className="
          relative
          h-[360px]
          overflow-hidden
          border
          border-foreground/15
          bg-background
          transition-colors
          duration-500
          group-hover:border-accent/60
          md:h-[420px]
        "
      >
        {/* -------------------------------- */}
        {/* Project Number */}
        {/* -------------------------------- */}

        <div
          className="
            absolute
            left-5
            top-5
            z-30
            text-[10px]
            tracking-[0.2em]
            text-foreground/40
            transition-colors
            duration-300
            group-hover:text-accent
          "
        >
          {String(project.id).padStart(2, '0')}
        </div>

        {/* -------------------------------- */}
        {/* Main Content */}
        {/* -------------------------------- */}

        <div
          className="
            absolute
            inset-x-6
            bottom-6
            z-30
          "
        >
          <motion.h3
            variants={{
              rest: {
                x: 0,
              },
              hover: {
                x: 5,
              },
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              text-2xl
              font-light
              leading-tight
              tracking-[-0.03em]
              text-foreground
              transition-colors
              duration-300
              group-hover:text-accent
              md:text-3xl
            "
          >
            {project.title}
          </motion.h3>

          <div className="mt-3 flex items-center gap-3">
            <span
              className="
                text-xs
                tracking-[0.06em]
                text-foreground/50
              "
            >
              {project.location}
            </span>

            {project.area && (
              <>
                <span className="text-foreground/20">
                  ·
                </span>

                <span
                  className="
                    text-xs
                    tracking-[0.06em]
                    text-foreground/40
                  "
                >
                  {project.area}
                </span>
              </>
            )}
          </div>
        </div>

        {/* -------------------------------- */}
        {/* Image Reveal */}
        {/* -------------------------------- */}

        <motion.div
          variants={{
            rest: {
              clipPath: 'inset(100% 0% 0% 0%)',
              scale: 1.08,
            },
            hover: {
              clipPath: 'inset(0% 0% 0% 0%)',
              scale: 1,
            },
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            bottom-0
            right-0
            z-20
            h-[62%]
            w-[72%]
            overflow-hidden
          "
        >
          <Image
            src={assetPath(project.image)}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="
              object-cover
              transition-transform
              duration-1000
              group-hover:scale-105
            "
          />

          {/* Image Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-black/10
            "
          />
        </motion.div>

        {/* -------------------------------- */}
        {/* Decorative Corner */}
        {/* -------------------------------- */}

        <motion.div
          variants={{
            rest: {
              opacity: 0,
              scale: 0.5,
            },
            hover: {
              opacity: 1,
              scale: 1,
            },
          }}
          transition={{
            duration: 0.4,
          }}
          className="
            absolute
            right-5
            top-5
            z-30
            flex
            h-8
            w-8
            items-center
            justify-center
            border
            border-accent/50
            text-sm
            text-accent
          "
        >
          ↗
        </motion.div>

        {/* -------------------------------- */}
        {/* Bottom Accent Line */}
        {/* -------------------------------- */}

        <motion.div
          variants={{
            rest: {
              scaleX: 0,
            },
            hover: {
              scaleX: 1,
            },
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            bottom-0
            left-0
            z-40
            h-px
            w-full
            origin-left
            bg-accent
          "
        />
      </motion.article>
    </Link>
  )
}
