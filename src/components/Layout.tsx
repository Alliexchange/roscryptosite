import { Link, useLocation } from "react-router-dom"
import { Logo, LogoIcon } from "./Logo"
import { CryptoTicker } from "./CryptoTicker"
import { MessageCircle, Rocket } from "lucide-react"

const TG_CHANNEL = "roscrypto"
const TG_MANAGER = "roscrypto_p2p"
const EMAIL = "roscrypto@rambler.ru"

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-white">
      {/* Crypto Ticker */}
      <CryptoTicker />

      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group">
            <Logo size="md" />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-2 sm:gap-6">
            <Link
              to="/"
              className={`
                text-sm px-3 py-2 rounded-lg transition-all duration-200
                ${location.pathname === "/"
                  ? "text-primary font-medium bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }
              `}
            >
              Главная
            </Link>
            <Link
              to="/docs/getting-started"
              className={`
                hidden sm:flex items-center gap-1.5 text-sm px-3 py-2 rounded-lg transition-all duration-200 font-medium
                ${location.pathname === "/docs/getting-started"
                  ? "text-white bg-primary"
                  : "text-primary bg-primary/10 hover:bg-primary/20"
                }
              `}
            >
              <Rocket className="w-3.5 h-3.5" />
              Начало работы
            </Link>
            <Link
              to="/docs"
              className={`
                text-sm px-3 py-2 rounded-lg transition-all duration-200
                ${location.pathname.startsWith("/docs") && location.pathname !== "/docs/getting-started"
                  ? "text-primary font-medium bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }
              `}
            >
              Документация
            </Link>
            <a
              href={`https://t.me/${TG_MANAGER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-lg btn-glow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Telegram</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t bg-slate-900 text-white mt-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <LogoIcon className="!shadow-none" />
                <span className="font-bold text-lg">RosCrypto</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Надежный сервис для покупки и продажи криптовалюты USDT через проверенные биржи.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-400">
                Навигация
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-sm text-slate-400 hover:text-white transition-colors">
                    Главная
                  </Link>
                </li>
                <li>
                  <Link to="/docs" className="text-sm text-slate-400 hover:text-white transition-colors">
                    Документация
                  </Link>
                </li>
                <li>
                  <Link to="/docs/faq" className="text-sm text-slate-400 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/docs/contact" className="text-sm text-slate-400 hover:text-white transition-colors">
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-400">
                Связаться с нами
              </h4>
              <div className="space-y-3">
                <a
                  href={`https://t.me/${TG_MANAGER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  @{TG_MANAGER}
                </a>
                <div>
                  <a
                    href={`https://t.me/${TG_CHANNEL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    Канал: @{TG_CHANNEL}
                  </a>
                </div>
                <div>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {EMAIL}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">Для партнёров</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4">
                Время работы: 9:00 — 22:00 МСК
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} RosCrypto. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
