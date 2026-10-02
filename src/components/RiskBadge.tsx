import type { RiskLevel } from '../types/analysis'

const RISK_STYLES: Record<RiskLevel, { label: string; className: string }> = {
  low: { label: 'Riesgo bajo', className: 'bg-green-100 text-green-800' },
  medium: { label: 'Riesgo medio', className: 'bg-yellow-100 text-yellow-800' },
  high: { label: 'Riesgo alto', className: 'bg-red-100 text-red-800' },
}

export function RiskBadge({ risk }: { risk: RiskLevel }) {
  const style = RISK_STYLES[risk]

  return (
    <span className={`rounded px-3 py-1 text-sm font-semibold ${style.className}`}>
      {style.label}
    </span>
  )
}