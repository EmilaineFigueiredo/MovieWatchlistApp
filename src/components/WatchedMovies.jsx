import { useState, useEffect } from 'react'
import { buscarFilmesVistosAPI } from '@/services/api'

export default function WatchedMovies() {
  const [filmes, setFilmes] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    buscarFilmes()
  }, [])

  async function buscarFilmes() {
    try {
      const data = await buscarFilmesVistosAPI()
      setFilmes(data)
      setError(null)
    } catch (err) {
      setError('Erro ao carregar filmes vistos.')
      setFilmes([])
    }
  }

  return (
    <div className="">
      <div className="">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-black">Filmes Vistos</h2>
        </div>

        {error && <p className="text-red-600">{error}</p>}
        {!error && filmes.length === 0 && <p className="text-gray-500">Nenhum filme visto encontrado.</p>}

        {!error && filmes.length > 0 && (

          <ul className="space-y-3">
            {filmes.map(filme => (
              <li key={filme.id} className="border border-white rounded-md p-3">
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