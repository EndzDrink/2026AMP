import { useRef, type ReactNode, type CSSProperties } from 'react'

interface SpotlightCardProps {
  children: ReactNode
  className?: string
  spotlightColor?: string
  style?: CSSProperties
}

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(16, 185, 129, 0.15)',
  style,
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    divRef.current.style.setProperty('--mouse-x', `${x}px`)
    divRef.current.style.setProperty('--mouse-y', `${y}px`)
  }

  const handleMouseLeave = () => {
    if (!divRef.current) return
    divRef.current.style.setProperty('--mouse-x', '-9999px')
    divRef.current.style.setProperty('--mouse-y', '-9999px')
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
      style={{
        background: 'radial-gradient(600px circle at var(--mouse-x, -9999px) var(--mouse-y, -9999px), ' + spotlightColor + ', transparent 40%)',
        ...style,
      }}
    >
      {children}
    </div>
  )
}