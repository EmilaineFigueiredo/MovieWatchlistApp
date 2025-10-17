import { useState } from 'react';
import { adicionarFilmeAPI } from '../services/api';

export default function adicionarFilmeAPI() {
  const [novoFilme, setNovoFilme] = useState('');

  async function adicionarFilme() {
    if (!novoFilme) return;
    try {
      await adicionarFilmeAPI(novoFilme);
      setNovoFilme('');
    } catch (error) {
      console.error('Erro ao adicionar filme.', error);
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 min-w-72 h-fit">
      <h2 className="text-lg font-semibold mb-3">Adicionar Novo Filme</h2>

      <form onSubmit={adicionarFilme} className="flex gap-1 mb-3">
        <input
          type="text"
          value={novoFilme}
          onChange={(e) => setNovoFilme(e.target.value)}
          placeholder="Filme"
          className="flex-1 border border-gray-300 ps-3 py-2 rounded"
        />
        <button type="submit" disabled={!novoFilme} className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600">
          Adicionar
        </button>
      </form>
    </div>
  );
}