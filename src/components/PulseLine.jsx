import { motion } from 'framer-motion'

/**
 * Divisor de seção em forma de traçado de eletrocardiograma.
 * Elemento de assinatura do site: reforça "vitalidade" e "cuidado"
 * de forma literal ao vocabulário médico, sem ser decoração genérica.
 *
 * tone: 'light' (linha clara, para fundos escuros) | 'dark' (linha escura, para fundos claros)
 */
export default function PulseLine({ tone = 'dark', className = '' }) {
  const stroke = tone === 'light' ? '#E9F3F0' : '#1F6F6B'

  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-10 md:h-12"
      >
        <motion.path
          d="M0 30 H420 L450 30 L465 8 L482 52 L498 30 L515 30 L535 18 L550 42 L565 30 H1200"
          fill="none"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
        />
        <motion.circle
          cx="498"
          cy="30"
          r="4"
          fill="#E85D4E"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1.2, duration: 0.4 }}
        />
      </svg>
    </div>
  )
}
