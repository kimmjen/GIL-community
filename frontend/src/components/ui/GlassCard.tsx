import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'elevated' | 'outlined'
}

export default function GlassCard({
  children,
  className = '',
  size = 'md',
  variant = 'default'
}: GlassCardProps) {
  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6', 
    lg: 'p-8',
    xl: 'p-10'
  }

  const variantClasses = {
    default: 'bg-white border border-gray-200 shadow-sm hover:shadow-md',
    elevated: 'bg-white shadow-lg border border-gray-100 hover:shadow-xl',
    outlined: 'bg-white/50 border-2 border-gray-300 hover:bg-white'
  }

  return (
    <div className={`
      rounded-xl 
      transition-all duration-200
      hover:scale-[1.01]
      ${sizeClasses[size]}
      ${variantClasses[variant]}
      ${className}
    `}>
      {children}
    </div>
  )
}
