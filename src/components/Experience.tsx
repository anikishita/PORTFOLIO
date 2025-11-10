```typescript
import React from 'react'

interface ExperienceItem {
  time: string
  title: string
  description: string
}

const experiences: ExperienceItem[] = [
  {
    time: '[2024]',
    title: 'SITIO CUATRO OPS — Bartender',
    description: 'Managed service flow under pressure, maintained operational efficiency.'
  },
  {
    time: '[2023]',
    title: 'GAS UNIT — Delivery Worker',
    description: 'Executed safe transport and coordination with clients.'
  },
  {
    time: '[2023]',
    title: 'WATER SUPPLY OPS — Delivery Worker',
    description: 'Ensured reliability and client satisfaction.'
  },
  {
    time: '[2021]',
    title: 'ABESTILLA MERCH OPS — Store Manager',
    description: 'Oversaw logistics, sales, and stock coordination.'
  }
]

const ExperienceCard: React.FC<ExperienceItem> = ({ time, title, description }) => {
  return (
    <div className="relative border border-primary/35 bg-gradient-to-b from-primary/8 to-primary/3 rounded-xl p-4 pl-12 overflow-hidden">
      <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/80 to-transparent rounded"></div>
      <div className="absolute left-3.5 top-3.5 font-orbitron text-xs tracking-widest text-blue-200">
        {time}
      </div>
      <div className="font-orbitron text-blue-100 tracking-wide">
        {title}
      </div>
      <div className="text-blue-200/90 mt-1">
        {description}
      </div>
    </div>
  )
}

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-14 md:py-20 border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div className="hud-divider">[ EXPERIENCE // OPERATION LOGS ]</div>
        <div className="mt-6 space-y-4">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              time={exp.time}
              title={exp.title}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
```