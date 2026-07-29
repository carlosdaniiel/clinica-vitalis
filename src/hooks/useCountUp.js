import { useEffect, useRef, useState } from 'react'

/**
 * Anima um número de 0 até `end` quando `start` é true.
 * Usado nos contadores da seção "Números da Clínica".
 */
export function useCountUp(end, start, duration = 1800) {
  const [value, setValue] = useState(0)
  const frameRef = useRef(null)
  const startTimeRef = useRef(null)

  useEffect(() => {
    if (!start) return

    const step = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1)
      // easeOutCubic para desacelerar suavemente no final
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * end))

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step)
      } else {
        setValue(end)
      }
    }

    frameRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameRef.current)
  }, [start, end, duration])

  return value
}
