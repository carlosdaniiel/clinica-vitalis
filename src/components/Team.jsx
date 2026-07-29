import { motion } from 'framer-motion'
import { team } from '../data/team'

export default function Team() {
  return (
    <section id="equipe" className="py-20 md:py-28 bg-paper">
      <div className="container-clinic">
        <div className="max-w-xl">
          <span className="eyebrow">Quem cuida de você</span>
          <h2 className="section-title mt-4">Nossa equipe médica</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Profissionais experientes, registrados no CRM e comprometidos com a atualização
            constante do conhecimento médico.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src={member.photo}
                  alt={`Foto de ${member.name}, especialista em ${member.specialty}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 font-display text-lg text-ink">{member.name}</h3>
              <p className="text-sm text-primary font-medium">{member.specialty}</p>
              <p className="text-xs text-muted font-mono mt-1">{member.crm}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
