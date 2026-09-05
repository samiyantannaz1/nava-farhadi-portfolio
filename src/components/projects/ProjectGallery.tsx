'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import { translations } from '@/locales'
import { useLanguage } from '@/hooks/useLanguage'
import ProjectCard from './ProjectCard'

export default function ProjectGallery() {
  const { language } = useLanguage()

  const text = translations[language].projects

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-x-6
        gap-y-12
        sm:grid-cols-2
        md:grid-cols-3
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
  )
}