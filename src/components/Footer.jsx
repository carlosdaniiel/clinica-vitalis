import { HeartPulse, Instagram, Facebook, Linkedin } from 'lucide-react'

const quickLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-paper pt-16 pb-8">
      <div className="container-clinic grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <a href="#inicio" className="flex items-center gap-2 font-display text-xl text-paper">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-mint text-ink">
              <HeartPulse size={18} strokeWidth={2.25} />
            </span>
            Clínica Vitalis
          </a>
          <p className="mt-4 text-sm text-mint/60 max-w-sm leading-relaxed">
            Atendimento médico multiespecialidades com excelência técnica e cuidado humano,
            há mais de 15 anos ao lado de quem confia em nós.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <a
              href="#"
              aria-label="Instagram da Clínica Vitalis"
              className="p-2 rounded-full border border-paper/20 hover:bg-paper/10 transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              aria-label="Facebook da Clínica Vitalis"
              className="p-2 rounded-full border border-paper/20 hover:bg-paper/10 transition-colors"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn da Clínica Vitalis"
              className="p-2 rounded-full border border-paper/20 hover:bg-paper/10 transition-colors"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        <div>
          <p className="font-medium text-paper mb-4">Links rápidos</p>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-mint/60 hover:text-paper transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-medium text-paper mb-4">Contato</p>
          <ul className="space-y-2.5 text-sm text-mint/60">
            <li>(11) 4002-8922</li>
            <li>contato@clinicavitalis.com.br</li>
            <li>Av. Paulista, 1100 — São Paulo, SP</li>
          </ul>
        </div>
      </div>

      <div className="container-clinic mt-12 pt-6 border-t border-paper/10 text-xs text-mint/50 flex flex-col sm:flex-row justify-between gap-2">
        <p>© {new Date().getFullYear()} Clínica Vitalis. Todos os direitos reservados.</p>
        <p>CNPJ 00.000.000/0001-00</p>
      </div>
    </footer>
  )
}
