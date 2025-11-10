```typescript
import React, { useState } from 'react'

const Header: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
  }

  const closeMobileNav = () => {
    setIsMobileNavOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur border-b border-primary/30">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="status-pulse"></div>
          <div className="font-orbitron tracking-widest text-sm md:text-base">
            K/EN-ITH // <span className="text-primary">KENITH MOSQUERA</span>
          </div>
        </div>
        
        <nav className="hidden md:flex gap-6 text-sm tracking-widest">
          <a href="#about" className="nav-link" onClick={closeMobileNav}>ABOUT</a>
          <a href="#experience" className="nav-link" onClick={closeMobileNav}>EXPERIENCE</a>
          <a href="#skills" className="nav-link" onClick={closeMobileNav}>SKILLS</a>
          <a href="#objectives" className="nav-link" onClick={closeMobileNav}>OBJECTIVES</a>
          <a href="#contact" className="nav-link" onClick={closeMobileNav}>CONTACT</a>
        </nav>
        
        <div className="md:hidden">
          <button 
            onClick={toggleMobileNav}
            className="p-2 rounded border border-primary/40 text-primary hover:bg-primary/10 transition"
            aria-label="Toggle mobile menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" d="M3 6h18M3 12h18M3 18h18"/>
            </svg>
          </button>
        </div>
      </div>
      
      {isMobileNavOpen && (
        <div className="md:hidden border-t border-primary/20">
          <div className="px-6 py-3 flex flex-col gap-2 text-sm tracking-widest">
            <a href="#about" className="py-2 hover:text-primary transition" onClick={closeMobileNav}>ABOUT</a>
            <a href="#experience" className="py-2 hover:text-primary transition" onClick={closeMobileNav}>EXPERIENCE</a>
            <a href="#skills" className="py-2 hover:text-primary transition" onClick={closeMobileNav}>SKILLS</a>
            <a href="#objectives" className="py-2 hover:text-primary transition" onClick={closeMobileNav}>OBJECTIVES</a>
            <a href="#contact" className="py-2 hover:text-primary transition" onClick={closeMobileNav}>CONTACT</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
```