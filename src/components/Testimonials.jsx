import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % testimonials.length)
  }, [])

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [paused, next])

  const current = testimonials[index]

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-ink text-paper">
      <div className="container-clinic">
        <div className="max-w-xl">
          <span className="eyebrow text-mint/70">Depoimentos</span>
          <h2 className="section-title mt-4 text-paper">O que nossos pacientes dizem</h2>
        </div>

        <div
          className="mt-12 relative max-w-2xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote className="text-primary/40 mb-4" size={40} />

          <div className="min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <p className="font-display text-xl md:text-2xl leading-snug text-paper">
                  “{current.quote}”
                </p>
                <div className="mt-6 flex items-center gap-1">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-3 font-medium text-paper">{current.name}</p>
                <p className="text-sm text-mint/60">{current.role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Depoimento anterior"
              className="p-2.5 rounded-full border border-paper/20 hover:bg-paper/10 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Próximo depoimento"
              className="p-2.5 rounded-full border border-paper/20 hover:bg-paper/10 transition-colors"
            >
              <ChevronRight size={18} />
            </button>

            <div className="flex items-center gap-1.5 ml-2" role="tablist" aria-label="Selecionar depoimento">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setIndex(i)}
                  aria-label={`Ver depoimento de ${t.name}`}
                  aria-selected={i === index}
                  role="tab"
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-6 bg-accent' : 'w-1.5 bg-paper/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
