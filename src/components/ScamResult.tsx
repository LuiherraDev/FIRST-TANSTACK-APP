import type { RiskLevel, ScamAnalysis } from '../types/analysis'

const RISK_STYLES: Record<RiskLevel, { label: string; className: string }> = {
  low: { label: 'Riesgo bajo', className: 'bg-green-100 text-green-800' },
  medium: { label: 'Riesgo medio', className: 'bg-yellow-100 text-yellow-800' },
  high: { label: 'Riesgo alto', className: 'bg-red-100 text-red-800' },
}

const TYPE_LABELS: Record<string, string> = {
  scam: 'Estafa',
  advertising: 'Publicidad',
  personal: 'Personal',
}

const toPercent = (value: number) => `${Math.round(value * 100)} %`

export function ScamResult({ analysis }: { analysis: ScamAnalysis }) {
  const risk = RISK_STYLES[analysis.risk]

  return (
    <section className="mt-6 rounded border border-gray-200 p-4">
      <span className={`rounded px-3 py-1 text-sm font-semibold ${risk.className}`}>
        {risk.label}
      </span>

      <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
        <dt className="text-gray-500">Tipo de mensaje</dt>
        <dd>{TYPE_LABELS[analysis.type] ?? 'Desconocido'}</dd>

        <dt className="text-gray-500">Pide dinero</dt>
        <dd>{toPercent(analysis.asksForMoney)}</dd>

        <dt className="text-gray-500">Pide hacer clic en un enlace</dt>
        <dd>{toPercent(analysis.asksForClick)}</dd>
      </dl>

      <p className="mt-4 text-xs text-gray-500">
        Resultado orientativo generado por una IA. No es una garantía.
      </p>
    </section>
  )
}