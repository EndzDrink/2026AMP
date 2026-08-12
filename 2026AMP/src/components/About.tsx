import { useEffect, useRef, useState } from 'react'
import { BookOpen, MessageCircle, Layers, Award } from 'lucide-react'
import SpotlightCard from './SpotlightCard'

const highlights = [
  {
    icon: BookOpen,
    title: 'Linguistics & Communication',
    description:
      'Academic background in Linguistic and Communication Science, giving me a deep understanding of how people process information and interact with systems.',
  },
  {
    icon: Layers,
    title: 'Enterprise Architecture',
    description:
      'Experienced in designing and developing EA systems that align business strategy with technology implementation across complex organizations.',
  },
  {
    icon: MessageCircle,
    title: 'Human-Centered Design',
    description:
      'I translate technical complexity into intuitive interfaces. My communication background ensures stakeholders always understand the "why" behind the build.',
  },
  {
    icon: Award,
    title: 'Certified Full Stack Developer',
    description:
      'Full Stack Web Development Bootcamp (Udemy, 2022). Also certified in AI A-Z (Udemy, 2023), Lean Six Sigma White Belt (TCL Global, 2024), React Summit 2022 & 2024 (GitNation), and Generative AI Applications.',
  },
]

export default function About() {
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
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-slate-950">
      <div className="section-padding max-w-7xl mx-auto" ref={ref}>
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <span className="text-primary-400 font-mono text-sm tracking-wider uppercase">About Me</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Where Language Meets <span className="text-gradient">Logic</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
              I don't just write code — I architect systems that communicate. My journey from
              linguistics to software engineering gives me a rare perspective on building technology
              that truly serves people.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {highlights.map(({ icon: Icon, title, description }, i) => (
              <SpotlightCard
                key={title}
                className={`group p-6 lg:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-primary-500/30 hover:bg-slate-900/80 transition-all duration-500 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                spotlightColor="rgba(16, 185, 129, 0.12)"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-5 group-hover:bg-primary-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{description}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}