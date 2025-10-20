import { useState } from 'react';
import { adicionarFilmeAPI } from '../services/api';

export default function AddMovie({ onClose, onSuccess }) {
  const [novoFilme, setNovoFilme] = useState({
    title: '',
    year: '',
    genre: '',
    watched: false,
    rating: ''
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setNovoFilme(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  async function adicionarFilme(e) {
    e.preventDefault();

    try {
      await adicionarFilmeAPI(novoFilme);
      alert('Filme adicionado com sucesso!');
      onSuccess?.(); // callback opcional
      onClose?.();   // fecha modal se função passada
      setNovoFilme({
        title: '',
        year: '',
        genre: '',
        watched: false,
        rating: ''
      });
    } catch (error) {
      console.error('Erro ao adicionar filme:', error);
      alert('Erro ao adicionar filme.');
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Adicionar Novo Filme</h2>

      <form onSubmit={adicionarFilme} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Título</label>
          <input
            type="text"
            name="title"
            value={novoFilme.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Ano</label>
          <input
            type="number"
            name="year"
            value={novoFilme.year}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Gênero</label>
          <input
            type="text"
            name="genre"
            value={novoFilme.genre}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="watched"
            checked={novoFilme.watched}
            onChange={handleChange}
            className="form-checkbox"
          />
          <label className="text-sm text-gray-700">Já assistido</label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Nota</label>
          <input
            type="number"
            name="rating"
            value={novoFilme.rating}
            onChange={handleChange}
            min="0"
            max="10"
            step="0.1"
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Adicionar
          </button>
        </div>
      </form>
    </div>
  );
}