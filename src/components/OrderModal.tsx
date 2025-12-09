import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { AlertTriangle } from "lucide-react"

const TG_MANAGER = "roscrypto_p2p"

interface OrderModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  initialType?: "buy" | "sell"
}

export function OrderModal({ open, onOpenChange, initialType = "buy" }: OrderModalProps) {
  const [type, setType] = useState<"buy" | "sell">(initialType)
  const [amount, setAmount] = useState("")
  const [lastName, setLastName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [middleName, setMiddleName] = useState("")
  const [telegram, setTelegram] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("Сбербанк")
  const [agreed, setAgreed] = useState(false)

  const paymentMethods = [
    "Сбербанк",
    "Альфабанк",
  ]

  const isValid = amount && lastName && firstName && middleName && telegram && agreed

  const handleSubmit = () => {
    if (!isValid) return

    const typeText = type === "buy" ? "ПОКУПКА" : "ПРОДАЖА"
    const actionText = type === "buy" ? "КУПИТЬ" : "ПРОДАТЬ"
    const fullName = `${lastName.toUpperCase()} ${firstName.toUpperCase()} ${middleName.toUpperCase()}`

    const message = `${typeText}
${fullName}
${actionText} ${amount} USDT
ТГ: ${telegram.startsWith("@") ? telegram : "@" + telegram}
Метод оплаты: ${paymentMethod}`

    window.open(`https://t.me/${TG_MANAGER}?text=${encodeURIComponent(message)}`, "_blank")
    onOpenChange(false)

    // Reset form
    setAmount("")
    setLastName("")
    setFirstName("")
    setMiddleName("")
    setTelegram("")
    setPaymentMethod("Сбербанк")
    setAgreed(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Заявка на обмен</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 pt-4">
          {/* Type tabs */}
          <div className="flex rounded-lg bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => setType("buy")}
              className={cn(
                "flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all",
                type === "buy"
                  ? "bg-primary text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              КУПИТЬ USDT
            </button>
            <button
              type="button"
              onClick={() => setType("sell")}
              className={cn(
                "flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all",
                type === "sell"
                  ? "bg-primary text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              ПРОДАТЬ USDT
            </button>
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Сумма в USDT
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Введите сумму"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-lg"
            />
          </div>

          {/* Personal data */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-slate-700">Данные:</p>

            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Фамилия *"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />

            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Имя *"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />

            <input
              type="text"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              placeholder="Отчество *"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />

            <input
              type="text"
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
              placeholder="Ваш Telegram (@username) *"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
          </div>

          {/* Payment method */}
          <div>
            <p className="text-sm font-medium text-slate-700 mb-1.5">Метод оплаты:</p>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white cursor-pointer"
            >
              {paymentMethods.map((method) => (
                <option key={method} value={method}>
                  {method}
                </option>
              ))}
            </select>
          </div>

          {/* Warning */}
          <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              <strong>Важно:</strong> Используйте только свои реквизиты! При оплате с карты третьего лица банк может заморозить возврат до 30 дней.
            </p>
          </div>

          {/* Agreement */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary"
            />
            <span className="text-sm text-slate-600">
              Я прочитал{" "}
              <a href="/docs/security" className="text-primary hover:underline">
                правила
              </a>{" "}
              и принимаю условия сервиса
            </span>
          </label>

          {/* Submit */}
          <Button
            size="lg"
            onClick={handleSubmit}
            disabled={!isValid}
            className="w-full"
          >
            Создать заявку
          </Button>

          <p className="text-xs text-center text-slate-500">
            После нажатия откроется Telegram с готовым сообщением
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
