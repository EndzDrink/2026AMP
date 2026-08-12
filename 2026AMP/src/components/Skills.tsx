import { useEffect, useRef, useState } from 'react'
import SpotlightCard from './SpotlightCard'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vite', level: 88 },
      { name: 'Shadcn/ui', level: 85 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 88 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'Redis', level: 75 },
      { name: 'REST APIs', level: 92 },
    ],
  },
  {
    title: 'EA & Systems',
    skills: [
      { name: 'System Architecture', level: 85 },
      { name: 'Enterprise Integration', level: 80 },
      { name: 'Database Design', level: 85 },
      { name: 'API Gateway Patterns', level: 78 },
      { name: 'Microservices', level: 75 },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'Linux', level: 80 },
      { name: 'CI/CD', level: 72 },
      { name: 'Nginx', level: 68 },
    ],
  },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-slate-900/30">
      <div className="section-padding max-w-7xl mx-auto" ref={ref}>
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <span className="text-primary-400 font-mono text-sm tracking-wider uppercase">Expertise</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Tech Stack & <span className="text-gradient">Skills</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
              The same stack powering enterprise-grade applications, refined through real-world
              production experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, ci) => (
              <SpotlightCard
                key={category.title}
                className={`p-6 rounded-2xl bg-slate-900/60 border border-slate-800/50 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                spotlightColor="rgba(16, 185, 129, 0.12)"
                style={{ transitionDelay: `${ci * 100}ms` }}
              >
                <h3 className="text-sm font-mono text-primary-400 uppercase tracking-wider mb-6">
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                        <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${ci * 100 + 300}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}