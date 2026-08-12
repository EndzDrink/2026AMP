import { useEffect, useRef, useState } from 'react'
import { Mail, MapPin, Send, Linkedin, Github } from 'lucide-react'
import SpotlightCard from './SpotlightCard'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormState({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-slate-950">
      <div className="section-padding max-w-7xl mx-auto" ref={ref}>
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <span className="text-primary-400 font-mono text-sm tracking-wider uppercase">Contact</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Let's Build <span className="text-gradient">Together</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
              Whether you need a full stack application, an enterprise system, or just want to
              discuss architecture — I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-6">
              <SpotlightCard 
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50"
                spotlightColor="rgba(16, 185, 129, 0.12)"
              >
                <h3 className="text-lg font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <a
                    href="mailto:SAMthembu@gmail.com"
                    className="flex items-center gap-4 text-slate-400 hover:text-primary-400 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-primary-500/10 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-mono mb-0.5">Email</p>
                      <p className="text-sm font-medium">SAMthembu@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-slate-400">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-mono mb-0.5">Location</p>
                      <p className="text-sm font-medium">30 Acutt Street, Durban Central, 4001</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800">
                  <p className="text-xs text-slate-500 font-mono mb-4">Socials</p>
                  <div className="flex items-center gap-3">
                    {[
                      { icon: Github, href: 'https://github.com/EndzDrink', label: 'GitHub' },
                      { icon: Linkedin, href: 'https://www.linkedin.com/in/andy-mthembu-02002241/', label: 'LinkedIn' },
                    ].map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-slate-800/50 text-slate-400 hover:text-primary-400 hover:bg-slate-800 transition-all"
                        aria-label={label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </div>

            <div className="lg:col-span-3">
              <SpotlightCard 
                className="p-6 lg:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/50"
                spotlightColor="rgba(16, 185, 129, 0.12)"
              >
                <form onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitted}
                    className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                      submitted
                        ? 'bg-primary-700 text-white'
                        : 'bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-600/20 hover:shadow-primary-600/40 hover:-translate-y-0.5'
                    }`}
                  >
                    {submitted ? (
                      <>Message Sent!</>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}