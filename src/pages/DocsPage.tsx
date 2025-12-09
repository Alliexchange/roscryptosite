import { useParams, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { getArticleBySlug, getAllArticles } from '@/lib/docs'
import { DocsSidebar } from '@/components/DocsSidebar'
import { MarkdownContent } from '@/components/MarkdownContent'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const TG_USERNAME = import.meta.env.VITE_TG_USERNAME || 'roscrypto_p2p'

export function DocsPage() {
  const { slug } = useParams<{ slug: string }>()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Default to getting-started if no slug
  const currentSlug = slug || 'getting-started'
  const article = getArticleBySlug(currentSlug)

  // Get all articles for prev/next navigation
  const allArticles = getAllArticles()
  const currentIndex = allArticles.findIndex(a => a.slug === currentSlug)
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null

  // Show error if no articles found at all
  if (allArticles.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Документация загружается...</h1>
        <p className="text-muted-foreground">Если страница не загрузилась, попробуйте обновить.</p>
      </div>
    )
  }

  // Redirect to first article if slug is not found
  if (!article) {
    return <Navigate to={`/docs/${allArticles[0].slug}`} replace />
  }

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="h-14 w-14 rounded-full shadow-lg"
        >
          {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar */}
          <aside
            className={cn(
              "fixed lg:sticky lg:top-24 z-50 lg:z-0",
              "w-72 lg:w-64 xl:w-72 shrink-0",
              "h-[calc(100vh-6rem)] lg:h-[calc(100vh-8rem)]",
              "bg-white lg:bg-transparent",
              "border-r lg:border-0",
              "overflow-y-auto",
              "transition-transform duration-300",
              "top-0 left-0",
              sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            )}
          >
            <div className="p-6 lg:p-0 lg:pr-6">
              <h2 className="font-bold text-lg mb-6 lg:hidden">Навигация</h2>
              <DocsSidebar onNavigate={() => setSidebarOpen(false)} />
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            {/* Breadcrumb */}
            <div className="mb-6 text-sm text-muted-foreground">
              <span className="hover:text-foreground cursor-pointer">Документация</span>
              <span className="mx-2">/</span>
              <span className="text-foreground">{article.title}</span>
            </div>

            {/* Article content */}
            <article className="bg-white rounded-xl border shadow-sm p-6 lg:p-10">
              <MarkdownContent content={article.content} />

              {/* Prev/Next navigation */}
              <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row gap-4 justify-between">
                {prevArticle ? (
                  <a
                    href={`/docs/${prevArticle.slug}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <div>
                      <div className="text-xs uppercase tracking-wide">Назад</div>
                      <div className="font-medium text-foreground group-hover:text-primary">
                        {prevArticle.title}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div />
                )}

                {nextArticle ? (
                  <a
                    href={`/docs/${nextArticle.slug}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group text-right sm:ml-auto"
                  >
                    <div>
                      <div className="text-xs uppercase tracking-wide">Далее</div>
                      <div className="font-medium text-foreground group-hover:text-primary">
                        {nextArticle.title}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <div />
                )}
              </div>
            </article>

            {/* Help section */}
            <div className="mt-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
                <div>
                  <h3 className="font-semibold mb-1">Остались вопросы?</h3>
                  <p className="text-sm text-muted-foreground">
                    Наша команда поддержки готова помочь вам
                  </p>
                </div>
                <Button
                  onClick={() => window.open(`https://t.me/${TG_USERNAME}`, '_blank')}
                  className="gap-2 shrink-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  Написать в Telegram
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
