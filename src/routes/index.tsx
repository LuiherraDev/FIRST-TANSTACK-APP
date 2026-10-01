import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { analyzeScam } from '../api/analysis.api'
import { ScamResult } from '../components/ScamResult'
import { analysisSchema } from '../schemas/analysis.schema'
import type { ScamAnalysis } from '../types/analysis'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const [message, setMessage] = useState('')
  const [result, setResult] = useState<ScamAnalysis | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleAnalyze = async () => {
    setErrorMessage(null)

    const validation = analysisSchema.safeParse({ message })

    if (!validation.success) {
      setErrorMessage(validation.error.issues[0]?.message ?? 'El mensaje no es válido')
      return
    }

    setIsLoading(true)

    try {
      const analysis = await analyzeScam(validation.data.message)
      setResult(analysis)
    } catch (error) {
      setResult(null)
      setErrorMessage(error instanceof Error ? error.message : 'Ha ocurrido un error inesperado')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-3xl font-bold">Detector de estafas</h1>

      <form
        className="mt-6 flex flex-col gap-4"
        onSubmit={(event) => {
          event.preventDefault()
          handleAnalyze()
        }}
      >
        <textarea
          className="rounded border border-gray-300 p-3"
          rows={5}
          placeholder="Pega aquí el mensaje que quieres analizar"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />

        <p className="text-right text-xs text-gray-500">{message.length} / 2000</p>

        {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}

        <button
          className="rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Analizando...' : 'Analizar'}
        </button>
      </form>

      {result && <ScamResult analysis={result} />}
    </main>
  )
}