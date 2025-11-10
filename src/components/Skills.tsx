```typescript
import React from 'react'

interface SkillCategory {
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Technologies',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js']
  },
  {
    title: 'Backend & AI',
    skills: ['Python', 'Node.js', 'AI/ML', 'APIs', 'Database Design']
  },
  {
    title: 'Core Attributes',
    skills: ['Fast Learner', 'Problem Solver', 'Team Player', 'Creative Thinker']
  },
  {
    title: 'Development Tools',
    skills: ['Git', 'VS Code', 'AI Development Tools