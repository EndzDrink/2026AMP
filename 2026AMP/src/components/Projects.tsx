import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Github, Layers, Shield, BarChart3 } from 'lucide-react'
import SpotlightCard from './SpotlightCard'

const projects = [
  {
    title: 'Application Manager',
    description:
      'Enterprise-grade application management platform serving multiple organizational roles (CIO, PMO, EA, Security, CRM). Features real-time vetting workflows, role-based dashboards, and Redis-backed session management.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind', 'PostgreSQL', 'Redis'],
    icon: Layers,
    color: 'from-primary-500 to-primary-700',
    github: 'https://github.com/EndzDrink/App-Manager',
    live: 'https://application-manager-system.netlify.app/',
    featured: true,
  },
  {
    title: 'EA Strategy Portal',
    description:
      'Enterprise Architecture strategy alignment tool. Enables architecture review boards to assess project alignment, manage technology roadmaps, and visualize system dependencies across departments.',
    tags: ['React', 'TypeScript', 'Vite', 'Shadcn/ui', 'REST API'],
    icon: Shield,
    color: 'from-blue-500 to-blue-700',
    github: 'https://github.com/EndzDrink/EA_STRATEGY_PORTAL',
    live: 'https://easportal.netlify.app/',
    featured: true,
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Real-time analytics and reporting dashboard with customizable widgets, data visualization, and export capabilities. Built for executive decision-making with focus on clarity and performance.',
    tags: ['React', 'D3.js', 'Node.js', 'WebSockets', 'Tailwind'],
    icon: BarChart3,
    color: 'from-purple-500 to-purple-700',
    github: '#',
    live: '#',
    featured: false,
  },
]

export default function Projects() {
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
    <section id="projects" className="relative py-24 lg:py-32 bg-slate-950">
      <div className="section-padding max-w-7xl mx-auto" ref={ref}>
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <span className="text-primary-400 font-mono text-sm tracking-wider uppercase">Portfolio</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
              Production-ready applications built with modern architecture patterns and
              enterprise-scale considerations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, i) => {
              const Icon = project.icon
              return (
                <SpotlightCard
                  key={project.title}
                  className={`group relative p-6 lg:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-500 hover:-translate-y-1 ${
                    project.featured && i === 0 ? 'lg:col-span-2' : ''
                  } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  spotlightColor="rgba(16, 185, 129, 0.12)"
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shrink-0 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 shrink-0">
                          <a
                            href={project.github}
                            className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
                            aria-label="View code"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                          <a
                            href={project.live}
                            className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
                            aria-label="Live demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      <p className="text-slate-400 text-sm leading-relaxed mb-5">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-mono rounded-full bg-slate-800/80 text-slate-400 border border-slate-700/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}