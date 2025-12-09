import { useEffect, useState } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface CryptoPrice {
  id: string
  symbol: string
  name: string
  current_price: number
  price_change_percentage_24h: number
  image: string
}

const CRYPTO_IDS = [
  'bitcoin',
  'ethereum',
  'tether',
  'binancecoin',
  'ripple',
  'solana',
  'dogecoin',
  'cardano',
  'tron',
  'polkadot'
]

export function CryptoTicker() {
  const [prices, setPrices] = useState<CryptoPrice[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${CRYPTO_IDS.join(',')}&order=market_cap_desc&sparkline=false&price_change_percentage=24h`
        )
        if (response.ok) {
          const data = await response.json()
          setPrices(data)
        }
      } catch (error) {
        console.error('Failed to fetch crypto prices:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPrices()
    // Update every 60 seconds
    const interval = setInterval(fetchPrices, 60000)
    return () => clearInterval(interval)
  }, [])

  if (loading || prices.length === 0) {
    return (
      <div className="bg-slate-900 text-white py-2 overflow-hidden">
        <div className="flex items-center justify-center text-sm text-slate-400">
          Загрузка курсов...
        </div>
      </div>
    )
  }

  // Duplicate items for seamless loop
  const duplicatedPrices = [...prices, ...prices]

  return (
    <div className="bg-slate-900 text-white py-2.5 overflow-hidden border-b border-slate-800">
      <div className="ticker-wrapper">
        <div className="ticker-content">
          {duplicatedPrices.map((crypto, index) => (
            <div
              key={`${crypto.id}-${index}`}
              className="ticker-item flex items-center gap-3 px-6"
            >
              <img
                src={crypto.image}
                alt={crypto.name}
                className="w-5 h-5 rounded-full"
              />
              <span className="font-medium text-white">
                {crypto.symbol.toUpperCase()}
              </span>
              <span className="text-slate-300">
                ${crypto.current_price.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: crypto.current_price < 1 ? 4 : 2
                })}
              </span>
              <span
                className={`flex items-center gap-1 text-sm font-medium ${
                  crypto.price_change_percentage_24h >= 0
                    ? 'text-emerald-400'
                    : 'text-red-400'
                }`}
              >
                {crypto.price_change_percentage_24h >= 0 ? (
                  <TrendingUp className="w-3.5 h-3.5" />
                ) : (
                  <TrendingDown className="w-3.5 h-3.5" />
                )}
                {crypto.price_change_percentage_24h >= 0 ? '+' : ''}
                {crypto.price_change_percentage_24h.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
