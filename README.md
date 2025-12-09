# CryptoIP

Статический веб-сайт для обмена криптовалюты USDT через централизованные биржи (Huobi).

## Технологии

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- React Router
- Lucide Icons

## Запуск

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Предпросмотр сборки
npm run preview
```

## Конфигурация

Создайте файл `.env` на основе `.env.example`:

```env
VITE_TG_USERNAME=your_telegram_username
```

## Структура проекта

```
src/
├── components/
│   ├── ui/          # UI компоненты (Button, Card)
│   ├── Layout.tsx   # Основной layout с навигацией
│   └── Mascot.tsx   # SVG маскот
├── pages/
│   ├── Home.tsx     # Главная страница
│   └── Docs.tsx     # Страница документации
├── lib/
│   └── utils.ts     # Утилиты
├── App.tsx
├── main.tsx
└── index.css
```

## Функционал

- Главная страница с информацией о сервисе
- Страница документации с FAQ
- Кнопки "Купить/Продать USDT" открывают диалог в Telegram
