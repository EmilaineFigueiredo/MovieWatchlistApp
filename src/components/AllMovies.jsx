import { useState, useEffect } from 'react';
import { buscarFilmesAPI } from '../services/api';

export default function VerFilmes() {
  const [filmes, setFilmes] = useState([]);

  // Buscar os filmes
  async function buscarFilmes() {
    try {
      const data = await buscarFilmesAPI();
      setFilmes(data);
    } catch (error) {
      console.error('Erro ao carregar filmes.', error);
    }
  }

  // Eliminar um filme
  async function eliminarFilmeAPI(id) {
    try {
      const response = await fetch(`/api/movies/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        console.error('Erro na resposta:', response.status, response.statusText);
        throw new Error('Erro ao eliminar filme.');
      }

      // Após deletar, atualiza a lista
      buscarFilmes();
    } catch (error) {
      console.error('Erro ao eliminar filme.', error);
    }
  }

  // Buscar filmes
  useEffect(() => {
    buscarFilmes();
  }, []);

  return (
      <div>
        {filmes.map((item) => (
          <div key={item._id} className="flex justify-between items-center mb-2">
            <span>{item.filme}</span>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => eliminarFilmeAPI(item._id)}
            >
              Deletar
            </button>
          </div>
        ))}
      </div>
  );
}