import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { faq } from '../data/faq'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (i) => setOpenIndex((current) => (current === i ? -1 : i))

  return (
    <section className="py-20 md:py-28 bg-paper">
      <div className="container-clinic max-w-3xl">
        <span className="eyebrow">Dúvidas comuns</span>
        <h2 className="section-title mt-4">Perguntas frequentes</h2>

        <div className="mt-10 divide-y divide-line border-t border-b border-line">
          {faq.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.question}>
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg text-ink">{item.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-primary"
                  >
                    <Plus size={20} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-muted leading-relaxed pr-8">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
