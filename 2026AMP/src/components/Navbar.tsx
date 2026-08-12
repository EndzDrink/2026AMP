import { useState, useEffect } from 'react'
import { Menu, X, Code2 } from 'lucide-react'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="section-padding max-w-7xl mx-auto flex items-center justify-between h-16 lg:h-20">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-shadow">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight text-white">
            Andy<span className="text-primary-400">.dev</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/50 transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2.5 text-sm font-semibold bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-all shadow-lg shadow-primary-600/20 hover:shadow-primary-600/40"
          >
            Let's Talk
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/50 transition-all"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-slate-800/50">
          <div className="section-padding py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-sm font-medium text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/50 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}