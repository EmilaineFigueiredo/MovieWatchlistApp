import { useState, useEffect } from 'react'
import { buscarClassificacaoFilmesAPI } from '@/services/api'

export default function Classificacao() {
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    buscarFilmesClassificados()
  }, [])

  async function buscarFilmesClassificados() {
    setLoading(true)
    setError(null)

    try {
      const data = await buscarClassificacaoFilmesAPI()

      // Ordena os filmes por ordem decrescente
      const ordenados = [...data].sort((a, b) => b.rating - a.rating)

      setFilmes(ordenados)
    } catch (err) {
      setError('Erro ao carregar a classificação dos filmes.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="">
      <div className="">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Classificação dos Filmes</h2>
        </div>

        {loading && <p className="text-gray-500">Carregando...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {!loading && !error && filmes.length === 0 && <p className="text-gray-500">Nenhum filme encontrado.</p>}

        <ul className="space-y-3">
          {filmes.map((filme, index) => (
            <li key={filme.id} className="border border-white rounded-md p-3">
              <div className="flex justify-between">
                <span className="font-semibold">
                  {index + 1}. {filme.title} ({filme.year})
                </span>
                <span className="text-green-700 font-bold">{filme.rating}</span>
              </div>
              <div className="text-sm text-gray-600">Gênero: {filme.genre}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}