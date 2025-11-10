```typescript
import React from 'react'

interface HeroProps {
  onOpenContact: () => void
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-orbitron text-3xl md:text-5xl lg:text-6xl leading-tight">
              KENITH MOSQUERA // <span className="text-primary drop-shadow-[0_0_12px_rgba(14,165,233,.5)]">SYSTEM ONLINE</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Aspiring AI Web Developer • Full-Stack Engineer • Innovation Enthusiast
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="assets/Kenith_Mosquera_Resume.pdf" 
                download 
                className="btn-primary"
              >
                > DOWNLOAD RESUME
              </a>
              <button 
                className="btn-secondary" 
                onClick={onOpenContact}
              >
                > CONTACT PROTOCOL
              </button>
            </div>
            <p className="mt-6 text-xs text-slate-400 tracking-widest">
              Mindset: "Adapt. Learn. Execute." — Calm, focused, efficient.
            </p>
          </div>
          
          <div className="relative">
            <div className="rounded-xl border border-primary/30 bg-slate-900/50 p-6 shadow-neon backdrop-blur animate-glowPulse">
              <div className="text-xs uppercase tracking-widest text-slate-400">Status</div>
              <div className="mt-2 font-orbitron text-2xl text-primary">ACTIVE</div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="p-3 rounded border border-primary/20 bg-slate-950/40">
                  <div className="text-slate-400">Codename</div>
                  <div className="font-orbitron">K/EN-ITH</div>
                </div>
                <div className="p-3 rounded border border-primary/20 bg-slate-950/40">
                  <div className="text-slate-400">Age</div>
                  <div className="font-orbitron">19</div>
                </div>
                <div className="p-3 rounded border border-primary/20 bg-slate-950/40">
                  <div className="text-slate-400">Education</div>
                  <div>BSIT — STI College</div>
                </div>
                <div className="p-3 rounded border border-primary/20 bg-slate-950/40">
                  <div className="text-slate-400">Region</div>
                  <div>Philippines</div>
                </div>
              </div>
            </div>
            
            {/* Floating status chips */}
            <div className="absolute -top-6 -right-6 rotate-6">
              <div className="holo-card">
                <div className="text-xs uppercase tracking-widest text-slate-300">Focus</div>
                <div className="font-orbitron text-primary">AI & WEB</div>
              </div>
            </div>
            
            <div className="absolute -bottom-5 -left-5 -rotate-6">
              <div className="holo-card">
                <div className="text-xs uppercase tracking-widest text-slate-300">Mission</div>
                <div>Full-Stack Development</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
```