export function Mascot({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 48"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <rect x="8" y="16" width="48" height="28" rx="4" fill="#D97706" />

      {/* Ears */}
      <rect x="12" y="8" width="8" height="12" rx="2" fill="#D97706" />
      <rect x="44" y="8" width="8" height="12" rx="2" fill="#D97706" />

      {/* Inner ears */}
      <rect x="14" y="10" width="4" height="6" rx="1" fill="#F59E0B" />
      <rect x="46" y="10" width="4" height="6" rx="1" fill="#F59E0B" />

      {/* Eyes */}
      <rect x="20" y="24" width="6" height="8" rx="1" fill="#1F2937" />
      <rect x="38" y="24" width="6" height="8" rx="1" fill="#1F2937" />

      {/* Eye highlights */}
      <rect x="22" y="26" width="2" height="2" fill="#FFFFFF" />
      <rect x="40" y="26" width="2" height="2" fill="#FFFFFF" />

      {/* Nose */}
      <rect x="30" y="32" width="4" height="3" rx="1" fill="#92400E" />

      {/* Snout highlight */}
      <rect x="24" y="28" width="16" height="12" rx="2" fill="#F59E0B" opacity="0.5" />
    </svg>
  )
}
