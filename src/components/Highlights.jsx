import { motion } from 'framer-motion'
import { Clock, UserCheck, ShieldCheck, Award } from 'lucide-react'

const items = [
  { icon: Clock, label: 'Atendimento 24h' },
  { icon: UserCheck, label: 'Profissionais Especializados' },
  { icon: ShieldCheck, label: 'Convênios Aceitos' },
  { icon: Award, label: '15+ Anos de Experiência' },
]

export default function Highlights() {
  return (
    <section className="bg-paper border-b border-line">
      <div className="container-clinic grid grid-cols-2 md:grid-cols-4 gap-6 py-10">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col items-center text-center gap-2"
          >
            <item.icon className="text-primary" size={26} strokeWidth={1.75} />
            <p className="text-sm font-medium text-ink/80">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
