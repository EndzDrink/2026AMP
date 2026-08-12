import { Code2, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800/50 bg-slate-950">
      <div className="section-padding max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Code2 className="w-5 h-5 text-primary-500" />
          <span className="text-sm font-medium text-slate-400">
            Andy Mthembu
          </span>
        </div>

        <p className="text-sm text-slate-500 flex items-center gap-1.5">
          Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> using React, TypeScript & Tailwind
        </p>

        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}