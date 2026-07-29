import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HeartPulse } from 'lucide-react'

import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import About from './components/About'
import Specialties from './components/Specialties'
import Team from './components/Team'
import Counters from './components/Counters'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import BackToTop from './components/BackToTop'

function Preloader() {
  return (
    <motion.div
      key="preloader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-paper"
    >
      <motion.span
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
        className="text-primary"
      >
        <HeartPulse size={40} strokeWidth={1.75} />
      </motion.span>
    </motion.div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Preloader />}</AnimatePresence>

      <Header />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Specialties />
        <Team />
        <Counters />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      <WhatsAppButton />
      <BackToTop />
    </>
  )
}
