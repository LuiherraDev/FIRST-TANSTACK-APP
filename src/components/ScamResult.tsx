import { RiskBadge } from './RiskBadge'
import type { ScamAnalysis } from '../types/analysis'

const TYPE_LABELS: Record<string, string> = {
  scam: 'Estafa',
  advertising: 'Publicidad',
  personal: 'Personal',
}

const toPercent = (value: number) => `${Math.round(value * 100)} %`

export function ScamResult({ analysis }: { analysis: ScamAnalysis }) {
  return (
    <section className="mt-6 rounded border border-gray-200 p-4">
      <RiskBadge risk={analysis.risk} />

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