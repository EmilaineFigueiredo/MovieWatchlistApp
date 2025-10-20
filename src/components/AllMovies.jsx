import { useState, useEffect } from 'react';
import { buscarFilmesAPI } from '../services/api';
import EditMovie from './EditMovie';


export default function VerFilmes() {
  const [filmes, setFilmes] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);


  // Buscar os filmes
  async function buscarFilmes() {
    try {
      const data = await buscarFilmesAPI();
      setFilmes(data);
    } catch (error) {
      console.error('Erro ao carregar filmes.', error);
    }
  }

  // Editar um filme

  {/* MODAL PARA EDITAR FILME */ }
  {
    showEditModal && (
      <div className="fixed inset-0 bg-gray-300 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white text-black p-6 rounded-md w-full max-w-md relative">
          <button
            onClick={() => setShowEditModal(false)}
            className="absolute top-2 right-2 text-gray-600"
          >
            ✖
          </button>
          <EditMovie />
        </div>
      </div>
    )
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
    <div className="bg-white text-black text-md p-5 rounded">
      {filmes.map((item) => (
        <div key={item._id} className="flex justify-between items-center mb-2">

          <div className="mb-4">
            <span className="text-lg font-bold text-black">{item.title}</span>
            <div className="mt-1 text-sm text-gray-700 space-y-1">
              <div>Ano: {item.year}</div>
              <div>Gênero: {item.genre}</div>
              <div>Estado: {item.watched ? 'Visto' : 'Por ver'}</div>
              <div>Classificação: {item.rating}</div>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              className="bg-yellow-500 text-white text-sm px-2 py-1 rounded"
              onClick={() => atualizarFilmeAPI(item._id)}
            >
              Editar
            </button>
            <button
              className="bg-red-500 text-white text-sm px-2 py-1 rounded"
              onClick={() => eliminarFilmeAPI(item._id)}
            >
              Deletar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}