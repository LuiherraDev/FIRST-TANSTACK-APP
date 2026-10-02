import { RiskBadge } from './RiskBadge'
import type { ScamAnalysis } from '../types/analysis'

const formatDate = (value: string) => new Date(value).toLocaleString('es-ES')

export function ScamHistory({ analyses, total }: { analyses: ScamAnalysis[]; total: number }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold">Histórico ({total})</h2>

      {analyses.length === 0 ? (
        <p className="mt-4 text-sm text-gray-500">Todavía no hay análisis.</p>
      ) : (
        <>
          <ul className="mt-4 flex flex-col gap-3">
            {analyses.map((analysis) => (
              <li key={analysis.id} className="rounded border border-gray-200 p-3">
                <div className="flex items-center justify-between gap-3">
                  <RiskBadge risk={analysis.risk} />
                  <span className="text-xs text-gray-500">{formatDate(analysis.createdAt)}</span>
                </div>

                <p className="mt-2 line-clamp-2 text-sm">{analysis.message}</p>
              </li>
            ))}
          </ul>

          {total > analyses.length && (
            <p className="mt-3 text-xs text-gray-500">
              Mostrando los {analyses.length} más recientes de {total}.
            </p>
          )}
        </>
      )}
    </section>
  )
}