'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [cursorText, setCursorText] = useState('')

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springX = useSpring(mouseX, {
    stiffness: 700,
    damping: 35,
    mass: 0.2,
  })

  const springY = useSpring(mouseY, {
    stiffness: 700,
    damping: 35,
    mass: 0.2,
  })

  // فقط روی دستگاه‌های دارای موس
  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)')

    const update = () => {
      setEnabled(mediaQuery.matches)
    }

    update()

    mediaQuery.addEventListener('change', update)

    return () => {
      mediaQuery.removeEventListener('change', update)
    }
  }, [])

  // دنبال کردن موس
  useEffect(() => {
    if (!enabled) return

    document.body.classList.add('custom-cursor-enabled')

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX)
      mouseY.set(event.clientY)

      const target = event.target as HTMLElement | null

      const cursorTarget = target?.closest<HTMLElement>(
        '[data-cursor]'
      )

      if (cursorTarget) {
        setIsHovering(true)
        setCursorText(
          cursorTarget.dataset.cursorText || ''
        )
      } else {
        setIsHovering(false)
        setCursorText('')
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      setCursorText('')
    }

    window.addEventListener('mousemove', handleMouseMove)

    document.documentElement.addEventListener(
      'mouseleave',
      handleMouseLeave
    )

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      )

      document.documentElement.removeEventListener(
        'mouseleave',
        handleMouseLeave
      )

      document.body.classList.remove(
        'custom-cursor-enabled'
      )
    }
  }, [enabled, mouseX, mouseY])

  if (!enabled) return null

  return (
    <>
      {/* Outer Cursor */}
      <motion.div
        className="
          pointer-events-none
          fixed left-0 top-0
          z-[9999]
          flex items-center justify-center
          rounded-full
          border
          backdrop-blur-md
        "
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          // حالت عادی کمی بزرگ‌تر
          width: isHovering ? 88 : 42,
          height: isHovering ? 88 : 42,

          // طلایی / برنزی
          borderColor: isHovering
            ? 'rgba(196, 157, 87, 0.85)'
            : 'rgba(196, 157, 87, 0.55)',

          backgroundColor: isHovering
            ? 'rgba(196, 157, 87, 0.10)'
            : 'rgba(196, 157, 87, 0.04)',

          boxShadow: isHovering
            ? '0 0 30px rgba(196, 157, 87, 0.16)'
            : '0 0 18px rgba(196, 157, 87, 0.08)',
        }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {isHovering && (
          <motion.span
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="
              text-[10px]
              font-medium
              tracking-[0.2em]
              text-[#c49d57]
            "
          >
            {cursorText || 'VIEW'}
          </motion.span>
        )}
      </motion.div>

      {/* Center Dot */}
      <motion.div
        className="
          pointer-events-none
          fixed left-0 top-0
          z-[10000]
          h-2 w-2
          rounded-full
          bg-[#c49d57]
        "
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          duration: 0.2,
        }}
      />
    </>
  )
}