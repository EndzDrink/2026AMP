import { useEffect, useRef, useState } from 'react'
import { GraduationCap, Briefcase, Award, Calendar } from 'lucide-react'
import SpotlightCard from './SpotlightCard'

const experiences = [
  {
    type: 'education',
    title: 'BA Linguistics & Communication Science',
    organization: 'Durban University of Technology',
    period: 'Completed',
    description:
      'Foundation in language structure, semantics, pragmatics, and communication theory. This background directly informs my approach to API design, user experience, and system documentation.',
    icon: GraduationCap,
  },
  {
    type: 'certification',
    title: 'Full Stack Web Development Bootcamp',
    organization: 'Udemy',
    period: 'Jan 2022',
    description:
      'The Ultimate 2022 Fullstack Web Development Bootcamp. Comprehensive training in MongoDB, Express, React, Node.js (MERN), HTML5, CSS3, and modern deployment strategies.',
    icon: Award,  
  },
  {
    type: 'certification',
    title: 'React Summit 2022 — Architecture, Data, Security, DevOps',
    organization: 'GitNation Foundation',
    period: 'Jun 2022',
    description:
      'Advanced React ecosystem training covering web architecture, data handling, security best practices, DevOps, and full-stack AI integration. Skills: React Hooks, styled-components.',
    icon: Award,
  },
  {
    type: 'certification',
    title: 'Artificial Intelligence A-Z',
    organization: 'Udemy',
    period: 'Jul 2023',
    description:
      'Deep dive into artificial intelligence fundamentals, machine learning workflows, and practical AI implementation for real-world applications.',
    icon: Award,
  },
  {
    type: 'certification',
    title: 'Lean Six Sigma White Belt',
    organization: 'TCL Global',
    period: 'Jun 2024',
    description:
      'Process improvement and quality management certification. Skills: Databases, Business Intelligence (BI), and operational excellence methodologies.',
    icon: Award,
  },
  {
    type: 'certification',
    title: 'Building Generative AI Applications — React Summit 2024',
    organization: 'GitNation Foundation',
    period: 'Jun 2024',
    description:
      'Cutting-edge training on integrating generative AI into React applications. Modern patterns for AI-powered user interfaces and intelligent system design.',
    icon: Award,
  },
  {
    type: 'certification',
    title: 'Writing for Government — Basic Writing Skills',
    organization: 'National School of Government (NSG)',
    period: 'Jan 2026',
    description:
      'Professional writing certification focused on written communication, report writing, and structured documentation for government and enterprise contexts.',
    icon: Award,
  },
  {
    type: 'work',
    title: 'Web & EA System Developer',
    organization: 'Zamambo Telecomms',
    period: 'Present',
    description:
      'Designing and developing enterprise application management systems. Responsible for full stack architecture, database design, role-based access control, and real-time data workflows.',
    icon: Briefcase,
  },
]

export default function Experience() {
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
    <section id="experience" className="relative py-24 lg:py-32 bg-slate-900/30">
      <div className="section-padding max-w-4xl mx-auto" ref={ref}>
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <span className="text-primary-400 font-mono text-sm tracking-wider uppercase">Background</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Experience & <span className="text-gradient">Education</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-slate-700 to-transparent hidden sm:block" />

            <div className="space-y-8">
              {experiences.map((exp, i) => {
                const Icon = exp.icon
                return (
                  <div
                    key={exp.title}
                    className={`relative flex gap-6 transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${i * 200}ms` }}
                  >
                    <div className="hidden sm:flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-primary-500/50 flex items-center justify-center z-10">
                        <Icon className="w-5 h-5 text-primary-400" />
                      </div>
                    </div>

                    <SpotlightCard
                      className="flex-1 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-slate-700/50 transition-all"
                      spotlightColor="rgba(16, 185, 129, 0.12)"
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="sm:hidden w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-primary-400" />
                        </span>
                        <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                        <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-mono text-slate-500">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-primary-400 mb-3">{exp.organization}</p>
                      <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                    </SpotlightCard>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}