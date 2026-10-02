import { EXAMPLE_MESSAGES } from '../data/example-messages'

export function ExampleMessages({ onSelect }: { onSelect: (text: string) => void }) {
  return (
    <aside>
      <h2 className="text-sm font-semibold text-gray-500">Mensajes de ejemplo</h2>

      <ul className="mt-3 flex flex-wrap gap-2 md:flex-col">
        {EXAMPLE_MESSAGES.map((example) => (
          <li key={example.label}>
            <button
              className="rounded border border-gray-200 px-3 py-2 text-left hover:bg-gray-50 md:w-full"
              type="button"
              onClick={() => onSelect(example.text)}
            >
              <span className="block text-sm font-semibold">{example.label}</span>
              <span className="mt-1 hidden text-xs text-gray-500 md:line-clamp-2">{example.text}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}