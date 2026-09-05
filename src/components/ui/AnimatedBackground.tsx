

'use client'

import { motion } from 'framer-motion'

const lines = [
  {
    path: 'M-100 180 C180 20 360 420 620 180 S980 40 1300 220',
    duration: 9,
    delay: 0,
  },
  {
    path: 'M-100 300 C160 120 390 520 650 300 S1000 140 1300 340',
    duration: 11,
    delay: 1,
  },
  {
    path: 'M-100 440 C180 240 400 620 680 400 S1030 260 1300 450',
    duration: 13,
    delay: 2,
  },
  {
    path: 'M-100 590 C160 400 380 760 650 520 S1030 390 1300 570',
    duration: 10,
    delay: 0.5,
  },
]

const particles = [
  { x: 180, y: 170, size: 4, duration: 5 },
  { x: 420, y: 430, size: 3, duration: 7 },
  { x: 720, y: 210, size: 5, duration: 6 },
  { x: 980, y: 500, size: 3, duration: 8 },
  { x: 1100, y: 280, size: 4, duration: 6 },
]

export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Moving light field */}

      <motion.div
        className="absolute -left-1/4 top-1/4 h-[50vh] w-[50vw] rounded-full bg-accent opacity-[0.06] blur-3xl"
        animate={{
          x: ['0%', '100%', '40%', '0%'],
          y: ['0%', '20%', '-10%', '0%'],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute -right-1/4 bottom-0 h-[45vh] w-[45vw] rounded-full bg-accent opacity-[0.05] blur-3xl"
        animate={{
          x: ['0%', '-70%', '-20%', '0%'],
          y: ['0%', '-20%', '10%', '0%'],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Flowing architectural lines */}

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Soft glow */}

          <filter
            id="digitalGlow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur
              stdDeviation="4"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Line gradient */}

          <linearGradient
            id="flowGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop
              offset="0%"
              stopColor="var(--digital)"
              stopOpacity="0"
            />

            <stop
              offset="25%"
              stopColor="var(--digital)"
              stopOpacity="0.65"
            />

            <stop
              offset="50%"
              stopColor="var(--accent)"
              stopOpacity="1"
            />

            <stop
              offset="75%"
              stopColor="var(--digital)"
              stopOpacity="0.65"
            />

            <stop
              offset="100%"
              stopColor="var(--digital)"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        {lines.map((line, index) => (
          <motion.path
            key={index}
            d={line.path}
            fill="none"
            stroke="var(--digital)"
            strokeWidth={index === 1 ? 2 : 1.2}
            strokeOpacity={index === 1 ? 0.85 : 0.5}
            strokeLinecap="round"
            filter={index === 1 ? 'url(#digitalGlow)' : undefined}
            animate={{
              x: [-100, 100, -100],
              y: [
                0,
                index % 2 === 0 ? -45 : 45,
                0,
              ],
            }}
            transition={{
              duration: line.duration,
              delay: line.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Highlight flowing line */}

        <motion.path
          d="M-100 300 C160 120 390 520 650 300 S1000 140 1300 340"
          fill="none"
          stroke="url(#flowGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.7"
          filter="url(#digitalGlow)"
          animate={{
            x: [-180, 180, -180],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Moving diagonal architectural lines */}

        <motion.path
          d="M100 800 L500 0"
          fill="none"
          stroke="var(--digital)"
          strokeWidth="1"
          strokeOpacity="0.3"
          animate={{
            x: [-250, 250, -250],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.path
          d="M700 800 L1100 0"
          fill="none"
          stroke="var(--digital)"
          strokeWidth="1"
          strokeOpacity="0.28"
          animate={{
            x: [250, -250, 250],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>

      {/* Floating particles */}

      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-accent"
          style={{
            left: `${(particle.x / 1200) * 100}%`,
            top: `${(particle.y / 800) * 100}%`,
            width: particle.size,
            height: particle.size,
            boxShadow:
              '0 0 12px color-mix(in srgb, var(--accent) 70%, transparent)',
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            opacity: [0.3, 0.9, 0.4, 0.3],
            scale: [1, 1.6, 0.8, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.4,
          }}
        />
      ))}
    </div>
  )
}