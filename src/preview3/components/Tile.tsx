import type { ReactNode } from 'react'

type TileVariant = 'light' | 'quiet' | 'tint' | 'dark' | 'teal' | 'green'

type TileTag = 'div' | 'section' | 'article' | 'li'

interface TileProps {
  children: ReactNode
  variant?: TileVariant
  as?: TileTag
  className?: string
}

const baseClass =
  'relative rounded-tile p-5 shadow-tile sm:p-7 transition-[box-shadow,border-color] duration-200 ease-out-soft'

const variantClass: Record<TileVariant, string> = {
  light: 'border border-line bg-card hover:shadow-tile-hover',
  quiet: 'border border-line-strong bg-cream hover:shadow-tile-hover',
  tint: 'border border-tintline bg-tint hover:shadow-tile-hover',
  dark: 'border border-transparent bg-banner text-white focus-light',
  teal: 'border border-transparent grad-teal text-white focus-light',
  green: 'border border-transparent bg-wa text-ongreen hover:shadow-tile-hover',
}

function Tile({ children, variant = 'light', as = 'div', className }: TileProps) {
  const Tag = as
  return <Tag className={`${baseClass} ${variantClass[variant]}${className ? ` ${className}` : ''}`}>{children}</Tag>
}

export default Tile
