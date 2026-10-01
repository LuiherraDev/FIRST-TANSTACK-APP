import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

const API_URL = import.meta.env.VITE_API_URL

function Home() {
  const [message, setMessage] = useState('')
  const [result, setResult] = useState<unknown>(null)

  const analyzeMessage = async () => {
    const response = await fetch(`${API_URL}/analysis/scam`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    })

    setResult(await response.json())
  }

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-3xl font-bold">Detector de estafas</h1>

      <form
        className="mt-6 flex flex-col gap-4"
        onSubmit={(event) => {
          event.preventDefault()
          analyzeMessage()
        }}
      >
        <textarea
          className="rounded border border-gray-300 p-3"
          rows={5}
          placeholder="Pega aquí el mensaje que quieres analizar"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />

        <button
          className="rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
          type="submit"
        >
          Analizar
        </button>
      </form>

      {result !== null && (
        <pre className="mt-6 overflow-x-auto rounded bg-gray-100 p-4 text-sm">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </main>
  )
}