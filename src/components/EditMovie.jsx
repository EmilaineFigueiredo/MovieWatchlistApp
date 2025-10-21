import { useState, useEffect } from 'react'
import { atualizarFilmeAPI } from '@/services/api'

export default function EditMovie({ isOpen, onClose, onSuccess, filme }) {

  const [formData, setFormData] = useState({
    title: '',
    year: '',
    genre: '',
    watched: '',
    rating: ''
  })

  useEffect(() => {
    if (filme) {
      setFormData({
        title: filme.title,
        year: filme.year,
        genre: filme.genre,
        watched: filme.watched,
        rating: filme.rating
      })
    }
  }, [filme])

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      await atualizarFilmeAPI(filme._id, formData)
      alert('Filme atualizado com sucesso!')
      onSuccess()
      onClose()
    } catch (error) {
      alert('Erro ao atualizar filme.')
    }
  }

  function handleClose() {
    setFormData({
      title: '',
      year: '',
      genre: '',
      watched: '',
      rating: ''
    }),

      onClose()
  }

  function handleChange(e) {
    const { name, type, checked, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  if (!isOpen || !filme) return null

  return (
    <div className="fixed inset-0 bg-white bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Editar Filme</h2>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 text-2xl">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Título</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Ano</label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Gênero</label>
            <input
              type="text"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="watched"
              checked={formData.watched}
              onChange={handleChange}
              className="form-checkbox"
            />
            <label className="text-sm text-gray-700">Assistido</label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Nota</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min="0"
              max="10"
              step="0.1"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex-1">
              Atualizar
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 flex-1"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}