import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Clock, MapPin, CheckCircle2 } from 'lucide-react'

const initialForm = { name: '', email: '', phone: '', specialty: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Informe seu nome completo.'
  if (!form.email.trim()) {
    errors.email = 'Informe seu e-mail.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Informe um e-mail válido.'
  }
  if (!form.phone.trim()) errors.phone = 'Informe um telefone para contato.'
  if (!form.message.trim()) errors.message = 'Conte um pouco sobre o que você precisa.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      // Em produção: enviar para API/backend de agendamento
      setSubmitted(true)
      setForm(initialForm)
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <section id="contato" className="py-20 md:py-28 bg-mint">
      <div className="container-clinic grid lg:grid-cols-5 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 flex flex-col gap-8"
        >
          <div>
            <span className="eyebrow">Fale conosco</span>
            <h2 className="section-title mt-4">Agende sua consulta</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Preencha o formulário ou entre em contato diretamente. Retornamos em até 1 dia útil.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="text-primary shrink-0 mt-0.5" size={20} />
            <div>
              <p className="font-medium text-ink">(11) 4002-8922</p>
              <p className="text-sm text-muted">WhatsApp e ligações</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="text-primary shrink-0 mt-0.5" size={20} />
            <div>
              <p className="font-medium text-ink">Seg–Sex: 7h às 20h</p>
              <p className="text-sm text-muted">Sáb: 8h às 13h</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="text-primary shrink-0 mt-0.5" size={20} />
            <div>
              <p className="font-medium text-ink">Av. Paulista, 1100 — São Paulo, SP</p>
              <p className="text-sm text-muted">Próximo ao metrô Trianon-MASP</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden h-56 border border-line">
            <iframe
              title="Localização da Clínica Vitalis no mapa"
              src="https://www.google.com/maps?q=Av.+Paulista,+1100,+S%C3%A3o+Paulo&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          noValidate
          className="lg:col-span-3 bg-paper rounded-2xl p-8 shadow-sm space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
                Nome completo
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                className={`w-full rounded-lg border px-4 py-2.5 text-ink focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                  errors.name ? 'border-accent' : 'border-line'
                }`}
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className="mt-1 text-xs text-accent">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-ink mb-1.5">
                Telefone
              </label>
              <input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="tel"
                placeholder="(11) 99999-9999"
                className={`w-full rounded-lg border px-4 py-2.5 text-ink focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                  errors.phone ? 'border-accent' : 'border-line'
                }`}
                aria-invalid={!!errors.phone}
              />
              {errors.phone && <p className="mt-1 text-xs text-accent">{errors.phone}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              className={`w-full rounded-lg border px-4 py-2.5 text-ink focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                errors.email ? 'border-accent' : 'border-line'
              }`}
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="mt-1 text-xs text-accent">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="specialty" className="block text-sm font-medium text-ink mb-1.5">
              Especialidade desejada
            </label>
            <select
              id="specialty"
              name="specialty"
              value={form.specialty}
              onChange={handleChange}
              className="w-full rounded-lg border border-line px-4 py-2.5 text-ink focus:outline-none focus:ring-2 focus:ring-primary/40 bg-paper"
            >
              <option value="">Selecione (opcional)</option>
              <option>Cardiologia</option>
              <option>Pediatria</option>
              <option>Ginecologia</option>
              <option>Ortopedia</option>
              <option>Dermatologia</option>
              <option>Clínico Geral</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className={`w-full rounded-lg border px-4 py-2.5 text-ink focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none ${
                errors.message ? 'border-accent' : 'border-line'
              }`}
              aria-invalid={!!errors.message}
            />
            {errors.message && <p className="mt-1 text-xs text-accent">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center rounded-full bg-accent text-paper font-medium py-3.5 hover:bg-accent/90 hover:scale-[1.02] transition-all duration-200"
          >
            Enviar solicitação
          </button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-primary font-medium"
              role="status"
            >
              <CheckCircle2 size={16} />
              Solicitação enviada! Entraremos em contato em breve.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
