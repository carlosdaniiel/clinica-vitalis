import { motion } from 'framer-motion'
import { CalendarCheck, MessageCircle } from 'lucide-react'
import PulseLine from './PulseLine'

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-mint overflow-hidden">
      <div className="container-clinic grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow">Clínica médica multiespecialidades</span>
          <h1 className="section-title mt-4 text-[2.5rem] md:text-5xl lg:text-6xl">
            Cuidando da sua saúde com{' '}
            <span className="italic text-primary">excelência</span> e humanidade
          </h1>
          <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
            Equipe médica especializada, estrutura moderna e atendimento acolhedor.
            Marque sua consulta em poucos minutos e cuide de quem você ama.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-paper font-medium px-6 py-3.5 hover:bg-accent/90 hover:scale-105 transition-all duration-200"
            >
              <CalendarCheck size={18} />
              Agende sua Consulta
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 text-ink font-medium px-6 py-3.5 hover:bg-ink hover:text-paper transition-all duration-200"
            >
              <MessageCircle size={18} />
              Fale no WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1758691461957-474a7686e388?q=80&w=800&auto=format&fit=crop"
              alt="Médico atendendo paciente em consultório moderno"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-paper rounded-2xl shadow-lg px-5 py-4 hidden sm:block">
            <p className="font-display text-2xl text-primary">15+</p>
            <p className="text-xs text-muted font-mono uppercase tracking-wide">anos de cuidado</p>
          </div>
        </motion.div>
      </div>

      <div className="mt-16">
        <PulseLine tone="dark" />
      </div>
    </section>
  )
}
