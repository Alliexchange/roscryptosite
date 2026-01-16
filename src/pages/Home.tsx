import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Logo } from "@/components/Logo"
import { OrderModal } from "@/components/OrderModal"
import {
  ArrowRight,
  Shield,
  Zap,
  Users,
  MessageCircle,
  CheckCircle2,
  TrendingUp,
  Lock,
  Clock,
  BadgeCheck,
  Wallet,
  RefreshCw,
  ShoppingCart,
  Scale,
  FileCheck,
  ShieldCheck
} from "lucide-react"
import { Link } from "react-router-dom"

export function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState<"buy" | "sell">("buy")

  const openOrderModal = (type: "buy" | "sell") => {
    setModalType(type)
    setModalOpen(true)
  }

  return (
    <div className="flex flex-col">
      <OrderModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        initialType={modalType}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div>
              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full">
                  <BadgeCheck className="w-4 h-4" />
                  Проверенный сервис обмена
                </div>
                <Link
                  to="/docs/legal-services"
                  className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm font-medium px-4 py-2 rounded-full hover:bg-amber-200 transition-colors"
                >
                  <Scale className="w-4 h-4" />
                  Крипто Юрист
                </Link>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-slate-900">
                Обменивайте{" "}
                <span className="gradient-text">криптовалюту</span>{" "}
                безопасно
              </h1>

              {/* Description */}
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Официальный и безопасный p2p-обмен для физических и юридических лиц.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  onClick={() => openOrderModal("buy")}
                  className="gap-2 text-base h-12 px-8 btn-glow"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Купить USDT
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => openOrderModal("sell")}
                  className="gap-2 text-base h-12 px-8 bg-white"
                >
                  <Wallet className="w-4 h-4" />
                  Продать USDT
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-primary" />
                  Безопасные сделки
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  5-30 минут
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  Лучший курс
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-600" />
                  Юридическая поддержка
                </div>
              </div>

            </div>

            {/* Right side - Logo & Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="gradient-border p-10 rounded-2xl bg-white">
                  <Logo size="lg" showText={false} className="scale-150" />
                </div>
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-white shadow-lg rounded-lg px-4 py-2 border">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Онлайн</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-lg px-4 py-2 border">
                  <div className="text-xs text-slate-500">Через биржу</div>
                  <div className="font-bold text-primary">HTX</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Exchange Style */}
      <section className="stats-section py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">5000+</div>
              <div className="text-sm text-white/70">Успешных сделок</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm text-white/70">Поддержка</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">10 мин</div>
              <div className="text-sm text-white/70">Среднее время сделки</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">0%</div>
              <div className="text-sm text-white/70">Скрытых комиссий</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-slate-900">
                Почему выбирают нас
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Мы делаем обмен криптовалюты простым и безопасным для каждого
              </p>
            </div>

            {/* Features grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="exchange-card">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl feature-icon flex items-center justify-center mb-4">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Безопасность</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Все операции проходят через проверенную биржу HTX с полной защитой ваших средств.{" "}
                    <Link to="/docs/security" className="text-primary hover:underline">Подробнее</Link>
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="exchange-card">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl feature-icon flex items-center justify-center mb-4">
                    <Zap className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Скорость</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Быстрая обработка заявок и моментальное зачисление средств на ваш счет
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="exchange-card">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl feature-icon flex items-center justify-center mb-4">
                    <Users className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Поддержка</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Персональная поддержка в Telegram на каждом этапе обмена.{" "}
                    <Link to="/docs/faq" className="text-primary hover:underline">Частые вопросы</Link>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-slate-900">
                Как это работает
              </h2>
              <p className="text-lg text-slate-600">
                Три простых шага для обмена криптовалюты
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-6">
              <div className="flex gap-6 items-start bg-white p-6 rounded-xl border shadow-sm">
                <div className="w-12 h-12 rounded-full step-number text-white flex items-center justify-center font-bold text-lg shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-slate-900">Создайте заявку</h3>
                  <p className="text-slate-600 leading-relaxed">
                    <a href="https://www.htx.com.pk/invite/ru-ru/1f?invite_code=c8tsd223" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Зарегистрируйтесь на бирже HTX</a> если у вас нет аккаунта. Нажмите кнопку "Купить" или "Продать" USDT. Заполните заявку обмена.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start bg-white p-6 rounded-xl border shadow-sm">
                <div className="w-12 h-12 rounded-full step-number text-white flex items-center justify-center font-bold text-lg shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-slate-900">Согласуйте условия</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Получите ссылку с актуальным курсом обмена и реквизиты для проведения операции. Никаких скрытых комиссий — всё прозрачно.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start bg-white p-6 rounded-xl border shadow-sm">
                <div className="w-12 h-12 rounded-full step-number text-white flex items-center justify-center font-bold text-lg shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-slate-900">Проведите обмен</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Операция проходит через биржу HTX с полной безопасностью.
                    Средства поступят на ваш счет в течение 5-30 минут.
                  </p>
                </div>
              </div>
            </div>

            {/* Link to docs */}
            <div className="text-center mt-10">
              <Link
                to="/docs/create-deal"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Подробная инструкция
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-slate-900">
                Наши услуги
              </h2>
              <p className="text-lg text-slate-600">
                Выберите подходящую операцию
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Buy USDT Card */}
              <div className="exchange-card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Купить USDT</h3>
                    <p className="text-slate-500">Рубли → USDT</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6 text-slate-600">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    Переводите рубли удобным способом
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    Получаете USDT на свой кошелек
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    Минимум от 5 000 ₽
                  </li>
                </ul>
                <Button
                  size="lg"
                  onClick={() => openOrderModal("buy")}
                  className="w-full gap-2 btn-glow"
                >
                  Купить USDT
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Sell USDT Card */}
              <div className="exchange-card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <RefreshCw className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Продать USDT</h3>
                    <p className="text-slate-500">USDT → Рубли</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6 text-slate-600">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                    Переводите USDT на наш адрес
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                    Получаете рубли на карту или СБП
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                    Минимум от 50 USDT
                  </li>
                </ul>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => openOrderModal("sell")}
                  className="w-full gap-2"
                >
                  Продать USDT
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Services Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm font-medium px-4 py-2 rounded-full mb-6">
                <Scale className="w-4 h-4" />
                Штатный юрист
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-slate-900">
                Юридическая поддержка
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Помогаем клиентам со снятием банковских ограничений и сопровождаем сложные кейсы по ФЗ-115 и ФЗ-161
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <Card className="exchange-card">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                    <FileCheck className="w-7 h-7 text-amber-600" />
                  </div>
                  <CardTitle className="text-xl">ФЗ-115</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Помощь при блокировках счетов, подготовка документов для банка, обжалование ограничений
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="exchange-card">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                    <Scale className="w-7 h-7 text-amber-600" />
                  </div>
                  <CardTitle className="text-xl">ФЗ-161</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Консультации по крупным переводам, работе с электронными деньгами и легальным схемам
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="exchange-card">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-7 h-7 text-amber-600" />
                  </div>
                  <CardTitle className="text-xl">Сопровождение</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Полное сопровождение сложных кейсов от консультации до положительного результата
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="text-center">
              <Link
                to="/docs/legal-services"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Подробнее о юридической поддержке
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              <MessageCircle className="w-4 h-4" />
              Начните прямо сейчас
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Готовы к обмену?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Свяжитесь с нами и получите лучший курс обмена криптовалюты
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => openOrderModal("buy")}
                className="gap-2 bg-white text-slate-900 hover:bg-slate-100"
              >
                <MessageCircle className="w-4 h-4" />
                Создать заявку
              </Button>
              <Button
                size="lg"
                variant="ghost"
                onClick={() => window.open('/docs', '_self')}
                className="gap-2 border border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Читать документацию
              </Button>
            </div>

            <p className="text-sm text-slate-500 mt-8">
              Минимальная сумма обмена: 50 USDT / 5 000 ₽
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
