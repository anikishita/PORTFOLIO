```typescript
import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Objectives from './components/Objectives'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

function App(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openContactModal = () => setIsModalOpen(true)
  const closeContactModal = () => setIsModalOpen(false)

  return (
    <div className="bg-slate-950 text-white font-exo antialiased selection:bg-primary/30 selection:text-white overflow-x-hidden min-h-screen">
      {/* Background layers */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-slate-950 to-black"></div>
        <div className="absolute inset-0 bg-circuit opacity-40"></div>
        <div className="absolute inset-0 bg-[length:40px_40px] bg-grid opacity-20"></div>

        {/* Floating accent orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl animate-float"></div>
        <div className="absolute top-1/3 right-20 w-40 h-40 rounded-full bg-glow/10 blur-2xl animate-float" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-10 left-1/3 w-28 h-28 rounded-full bg-primary/10 blur-2xl animate-float" style={{ animationDelay: '2.4s' }}></div>

        {/* Scanline overlay */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent opacity-30 animate-scanline"></div>
      </div>

      <Header />
      <main>
        <Hero onOpenContact={openContactModal} />
        <About />
        <Experience />
        <Skills />
        <Objectives />
        <Contact />
      </main>
      <Footer />
      
      <ContactModal isOpen={isModalOpen} onClose={closeContactModal} />
    </div>
  )
}

export default App
```