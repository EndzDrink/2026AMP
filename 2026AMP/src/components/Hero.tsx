import { useEffect, useState } from 'react'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import SpotlightCard from './SpotlightCard'

const roles = [
  'Web Developer',
  'EA System Developer',
  'Full Stack Engineer',
  'Communication Specialist',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const speed = isDeleting ? 50 : 100

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-700/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 section-padding max-w-5xl mx-auto text-center">
        <div className="animate-fade-in mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-sm text-slate-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            Available for opportunities
          </div>
        </div>

        <h1 className="animate-slide-up text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          Hi, I'm <span className="text-gradient">Andy Mthembu</span>
        </h1>

        <div className="animate-slide-up h-12 sm:h-16 mb-8" style={{ animationDelay: '0.2s' }}>
          <span className="text-xl sm:text-2xl md:text-3xl font-mono text-slate-400">
            {displayText}
            <span className="inline-block w-0.5 h-6 sm:h-8 bg-primary-500 ml-1 animate-blink align-middle" />
          </span>
        </div>

        <p
          className="animate-slide-up text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animationDelay: '0.4s' }}
        >
          Full Stack Developer with a unique foundation in{' '}
          <span className="text-slate-300 font-medium">Linguistics and Communication Science</span>.
          I bridge the gap between complex enterprise systems and human-centered design.
        </p>

        <div
          className="animate-slide-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{ animationDelay: '0.6s' }}
        >
          <a
            href="#projects"
            className="px-8 py-3.5 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 bg-slate-800/80 hover:bg-slate-800 text-white font-semibold rounded-lg border border-slate-700 hover:border-slate-600 transition-all hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </div>

        <div
          className="animate-slide-up flex items-center justify-center gap-6"
          style={{ animationDelay: '0.8s' }}
        >
          {[
            { icon: Github, href: 'https://github.com/EndzDrink', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/andy-mthembu-02002241/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:SAMthembu@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="block"
            >
              <SpotlightCard
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-primary-400 hover:border-primary-500/30 hover:bg-slate-800/80 transition-all hover:-translate-y-1"
                spotlightColor="rgba(16, 185, 129, 0.12)"
              >
                <Icon className="w-5 h-5" />
              </SpotlightCard>
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-600 hover:text-slate-400 transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  )
}