import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const differentials = [
  'Equipe médica com pós-graduação e atualização constante',
  'Estrutura moderna com laboratório próprio',
  'Agendamento online e por WhatsApp',
  'Ambiente acolhedor pensado para reduzir a ansiedade do paciente',
]

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-paper">
      <div className="container-clinic grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] overflow-hidden order-2 lg:order-1"
        >
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"
            alt="Recepção moderna e acolhedora da Clínica Vitalis"
            className="w-full h-full object-cover aspect-[4/3]"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2"
        >
          <span className="eyebrow">Sobre a clínica</span>
          <h2 className="section-title mt-4">
            Medicina que combina técnica e acolhimento
          </h2>
          <p className="mt-6 text-muted leading-relaxed">
            Há mais de 15 anos, a Clínica Vitalis atende famílias com um compromisso simples:
            tratar cada paciente com a atenção que merece. Nossa missão é unir tecnologia,
            conhecimento médico e um atendimento verdadeiramente humano.
          </p>

          <ul className="mt-8 space-y-4">
            {differentials.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                <span className="text-ink/80">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
