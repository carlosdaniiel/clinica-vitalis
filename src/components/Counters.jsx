import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useCountUp } from '../hooks/useCountUp'

const stats = [
  { end: 15, suffix: '+', label: 'Anos de experiência' },
  { end: 20000, suffix: '+', label: 'Pacientes atendidos' },
  { end: 98, suffix: '%', label: 'Satisfação dos pacientes' },
  { end: 6, suffix: '', label: 'Especialidades médicas' },
]

function Counter({ end, suffix, label, active }) {
  const value = useCountUp(end, active)
  return (
    <div className="text-center">
      <p className="font-mono text-4xl md:text-5xl text-primary tabular-nums">
        {value.toLocaleString('pt-BR')}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  )
}

export default function Counters() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-16 bg-mint">
      <div className="container-clinic">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <Counter key={stat.label} {...stat} active={active} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
