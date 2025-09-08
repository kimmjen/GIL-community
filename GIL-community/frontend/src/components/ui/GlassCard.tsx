import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function GlassCard({ children, className = '', size = 'md' }: GlassCardProps) {
  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6', 
    lg: 'p-8',
    xl: 'p-10'
  }

  return (
    <div className={`
      relative
      backdrop-blur-xl bg-white/20 
      border border-white/30 
      rounded-2xl 
      shadow-xl shadow-black/5
      hover:bg-white/25 
      hover:shadow-2xl hover:shadow-black/10
      hover:border-white/40
      hover:scale-[1.02]
      transition-all duration-300
      overflow-hidden
      group
      ${sizeClasses[size]}
      ${className}
    `}>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Subtle border animation */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-pulse"></div>
    </div>
  )
}
