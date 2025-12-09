// Explicit imports for each markdown file - ensures proper bundling in production
import gettingStartedRaw from '@/content/docs/getting-started.md?raw'
import htxRegistrationRaw from '@/content/docs/htx-registration.md?raw'
import createDealRaw from '@/content/docs/create-deal.md?raw'
import securityRaw from '@/content/docs/security.md?raw'
import whatIsUsdtRaw from '@/content/docs/what-is-usdt.md?raw'
import faqRaw from '@/content/docs/faq.md?raw'
import contactRaw from '@/content/docs/contact.md?raw'

export interface DocArticle {
  slug: string
  title: string
  description: string
  order: number
  category: string
  content: string
}

export interface DocCategory {
  name: string
  articles: DocArticle[]
}

// Simple frontmatter parser (no eval, works in production)
function parseFrontmatter(raw: string): { data: Record<string, string | number>; content: string } {
  const lines = raw.split('\n')
  const data: Record<string, string | number> = {}
  let content = raw

  if (lines[0]?.trim() === '---') {
    let endIndex = -1
    for (let i = 1; i < lines.length; i++) {
      if (lines[i]?.trim() === '---') {
        endIndex = i
        break
      }
      const match = lines[i]?.match(/^(\w+):\s*(.+)$/)
      if (match) {
        const [, key, value] = match
        // Try to parse as number
        const numValue = Number(value)
        data[key] = isNaN(numValue) ? value : numValue
      }
    }
    if (endIndex > 0) {
      content = lines.slice(endIndex + 1).join('\n').trim()
    }
  }

  return { data, content }
}

// Map of slug to raw content
const rawDocs: Record<string, string> = {
  'getting-started': gettingStartedRaw,
  'htx-registration': htxRegistrationRaw,
  'create-deal': createDealRaw,
  'security': securityRaw,
  'what-is-usdt': whatIsUsdtRaw,
  'faq': faqRaw,
  'contact': contactRaw,
}

// Parse all documents
function parseDocuments(): DocArticle[] {
  const articles: DocArticle[] = []

  for (const [slug, rawContent] of Object.entries(rawDocs)) {
    try {
      const { data, content: markdownContent } = parseFrontmatter(rawContent)

      articles.push({
        slug,
        title: String(data.title || slug),
        description: String(data.description || ''),
        order: Number(data.order) || 999,
        category: String(data.category || 'Общее'),
        content: markdownContent
      })
    } catch (e) {
      console.error(`Failed to parse ${slug}:`, e)
    }
  }

  // Sort by order
  return articles.sort((a, b) => a.order - b.order)
}

// Cache parsed documents
let cachedArticles: DocArticle[] | null = null

export function getAllArticles(): DocArticle[] {
  if (!cachedArticles) {
    cachedArticles = parseDocuments()
  }
  return cachedArticles
}

export function getArticleBySlug(slug: string): DocArticle | undefined {
  return getAllArticles().find(article => article.slug === slug)
}

export function getArticlesByCategory(): DocCategory[] {
  const articles = getAllArticles()
  const categoryMap = new Map<string, DocArticle[]>()

  // Group articles by category
  for (const article of articles) {
    const existing = categoryMap.get(article.category) || []
    existing.push(article)
    categoryMap.set(article.category, existing)
  }

  // Convert to array and maintain order
  const categories: DocCategory[] = []
  const categoryOrder = ['Начало', 'Инструкции', 'Информация']

  for (const name of categoryOrder) {
    const categoryArticles = categoryMap.get(name)
    if (categoryArticles) {
      categories.push({ name, articles: categoryArticles })
      categoryMap.delete(name)
    }
  }

  // Add any remaining categories
  for (const [name, categoryArticles] of categoryMap) {
    categories.push({ name, articles: categoryArticles })
  }

  return categories
}
