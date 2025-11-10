```typescript
import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-14 md:py-20 border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div className="hud-divider">[ ABOUT // PROFILE DATA ]</div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="holo-card md:col-span-2">
            <h3 className="font-orbitron text-xl text-primary">OPERATIVE PROFILE</h3>
            <p className="mt-3 text-slate-300">
              Kenith is a 19-year-old BSIT student driven by logic and precision. He loves building digital projects, exploring AI innovations, and creating practical web solutions. His passion lies in developing intelligent web applications that combine modern frontend technologies with AI capabilities. Outside tech, he enjoys gaming and digital creativity, inspired by futuristic designs and innovation.
            </p>
            <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
              <div className="p-3 rounded border border-primary/20 bg-slate-950/40">
                <div className="text-slate-400">Birthday</div>
                <div className="font-orbitron">October 30, 2005</div>
              </div>
              <div className="p-3 rounded border border-primary/20 bg-slate-950/40">
                <div className="text-slate-400">Nationality</div>
                <div>Filipino</div>
              </div>
              <div className="p-3 rounded border border-primary/20 bg-slate-950/40">
                <div className="text-slate-400">Education</div>
                <div>BSIT Student (2nd Year) — STI College</div>
              </div>
              <div className="p-3 rounded border border-primary/20 bg-slate-950/40">
                <div className="text-slate-400">Current Mission</div>
                <div>AI Web Development & Full-Stack Mastery</div>
              </div>
            </div>
          </div>
          
          <div className="holo-card">
            <h3 className="font-orbitron text-lg text-primary">CORE PARAMETERS</h3>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">EDU_LEVEL</span>
                <span className="font-mono">BSIT</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">STATUS</span>
                <span className="font-mono">Active Student</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">FOCUS</span>
                <span className="font-mono">AI | Web Dev | Full-Stack</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">REGION</span>
                <span className="font-mono">PH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
```