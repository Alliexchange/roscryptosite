import { Link, useLocation } from 'react-router-dom'
import { getArticlesByCategory } from '@/lib/docs'
import { ChevronRight, FileText, Rocket } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DocsSidebarProps {
  className?: string
  onNavigate?: () => void
}

export function DocsSidebar({ className, onNavigate }: DocsSidebarProps) {
  const location = useLocation()
  const categories = getArticlesByCategory()

  const currentSlug = location.pathname.replace('/docs/', '') || 'getting-started'

  return (
    <nav className={cn("space-y-6", className)}>
      {categories.map((category) => (
        <div key={category.name}>
          <h3 className="font-semibold text-sm text-foreground/80 uppercase tracking-wider mb-3 px-3">
            {category.name}
          </h3>
          <ul className="space-y-1">
            {category.articles.map((article) => {
              const isActive = currentSlug === article.slug
              const isGettingStarted = article.slug === 'getting-started'
              return (
                <li key={article.slug}>
                  <Link
                    to={`/docs/${article.slug}`}
                    onClick={onNavigate}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200",
                      "hover:bg-accent hover:text-accent-foreground",
                      isActive
                        ? "bg-primary/10 text-primary font-medium border-l-2 border-primary"
                        : isGettingStarted
                          ? "bg-emerald-50 text-emerald-700 font-medium border-l-2 border-emerald-500"
                          : "text-muted-foreground"
                    )}
                  >
                    {isActive ? (
                      <ChevronRight className="w-4 h-4 shrink-0" />
                    ) : isGettingStarted ? (
                      <Rocket className="w-4 h-4 shrink-0 text-emerald-600" />
                    ) : (
                      <FileText className="w-4 h-4 shrink-0 opacity-50" />
                    )}
                    <span className="truncate">{article.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )
}
