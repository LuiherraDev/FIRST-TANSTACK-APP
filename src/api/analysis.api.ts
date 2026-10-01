import type { ScamAnalysis } from '../types/analysis'

const API_URL = import.meta.env.VITE_API_URL

type ApiErrorBody = {
  error?: string
  errors?: { field: string; message: string }[]
}

const getErrorMessage = (body: ApiErrorBody): string => {
  return body.errors?.[0]?.message ?? body.error ?? 'Ha ocurrido un error inesperado'
}

export const analyzeScam = async (message: string): Promise<ScamAnalysis> => {
  const response = await fetch(`${API_URL}/analysis/scam`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  }).catch(() => {
    throw new Error('No se pudo conectar con el servidor')
  })

  const body = await response.json()

  if (!response.ok) {
    throw new Error(getErrorMessage(body))
  }

  return body
}