import { useState, useEffect } from 'react'
import { buscarFilmesNaoVistosAPI } from '@/services/api'

export default function NotWatchedMovies({ isOpen, onClose }) {
  const [filmes, setFilmes] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    if (isOpen) {
      buscarFilmes()
    }
  }, [isOpen])

  async function buscarFilmes() {
    try {
      const data = await buscarFilmesNaoVistosAPI()
      setFilmes(data)
      setError(null)
    } catch (err) {
      setError('Erro ao carregar filmes não vistos.')
      setFilmes([])
    }
  }

  function handleClose() {
    onClose()
    setFilmes([])
    setError(null)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-gray-300 bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Filmes Não Vistos</h2>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 text-2xl">✕</button>
        </div>

        {error && <p className="text-red-600">{error}</p>}
        {!error && filmes.length === 0 && <p className="text-gray-500">Nenhum filme não visto encontrado.</p>}

        {!error && filmes.length > 0 && (
          <ul className="space-y-3">
            {filmes.map(filme => (
              <li key={filme.id} className="border border-gray-300 rounded-md p-3">
                <div className="flex justify-between">
                  <span className="font-semibold">{filme.title} ({filme.year})</span>
                  <span className="text-green-700 font-bold">{filme.rating}</span>
                </div>
                <div className="text-sm text-gray-600">Gênero: {filme.genre}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}