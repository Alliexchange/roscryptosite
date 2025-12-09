import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export function Logo({ className, size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: { icon: 'w-8 h-8', text: 'text-lg' },
    md: { icon: 'w-10 h-10', text: 'text-xl' },
    lg: { icon: 'w-16 h-16', text: 'text-3xl' }
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Logo icon - stylized R with crypto elements */}
      <div className={cn(
        sizes[size].icon,
        "relative bg-gradient-to-br from-blue-700 to-red-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg"
      )}>
        <span className={size === 'lg' ? 'text-2xl' : size === 'md' ? 'text-lg' : 'text-base'}>
          R
        </span>
        {/* Decorative element */}
        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white" />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={cn(
            "font-bold tracking-tight leading-tight",
            sizes[size].text
          )}>
            RosCrypto
          </span>
          {size !== 'sm' && (
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
              Обмен криптовалюты РФ
            </span>
          )}
        </div>
      )}
    </div>
  )
}

// Icon-only version for small spaces
export function LogoIcon({ className }: { className?: string }) {
  return (
    <div className={cn(
      "w-10 h-10 relative bg-gradient-to-br from-blue-700 to-red-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg",
      className
    )}>
      <span className="text-lg">R</span>
      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white" />
    </div>
  )
}
