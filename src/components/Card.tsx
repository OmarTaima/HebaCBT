import type { ReactNode } from 'react'

type CardVariant = 'default' | 'dark'

interface CardProps {
  children: ReactNode
  variant?: CardVariant
  className?: string
}

const variantClass: Record<CardVariant, string> = {
  default: 'rounded-card border border-line bg-card p-6 shadow-card sm:p-7',
  dark: 'relative overflow-hidden rounded-card border-transparent bg-banner px-5 py-4 text-white shadow-card sm:px-7 sm:py-5',
}

function Card({ children, variant = 'default', className }: CardProps) {
  return <div className={`${variantClass[variant]}${className ? ` ${className}` : ''}`}>{children}</div>
}

export default Card
