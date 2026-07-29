import { motion } from 'framer-motion'
import { HeartPulse, Baby, Flower2, Bone, Sparkles, Stethoscope } from 'lucide-react'
import { specialties } from '../data/specialties'
import PulseLine from './PulseLine'

const ICONS = { HeartPulse, Baby, Flower2, Bone, Sparkles, Stethoscope }

export default function Specialties() {
  return (
    <section id="especialidades" className="py-20 md:py-28 bg-mint">
      <div className="container-clinic">
        <div className="max-w-xl">
          <span className="eyebrow">O que tratamos</span>
          <h2 className="section-title mt-4">Especialidades médicas</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Do check-up de rotina ao acompanhamento especializado, nossa clínica reúne
            profissionais preparados para cada etapa da sua saúde.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-paper rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-5">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-xl text-ink">{item.name}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-16">
          <PulseLine tone="dark" />
        </div>
      </div>
    </section>
  )
}
