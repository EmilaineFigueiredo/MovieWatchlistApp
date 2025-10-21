import { useState, useEffect } from 'react';
import { buscarFilmesAPI } from '../services/api';
import EditMovie from './EditMovie';


export default function VerFilmes() {
  const [filmes, setFilmes] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);

  function abrirModalEdicao(filme) {
    setFilmeSelecionado(filme);
    setShowEditModal(true);
  }

  function fecharModalEdicao() {
    setShowEditModal(false);
    setFilmeSelecionado(null);
  }

  // Buscar filmes
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
              className="bg-blue-600 text-white text-sm px-2 py-1 rounded"
              onClick={() => abrirModalEdicao(item)}

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

      {/* MODAL PARA EDITAR FILME */}
      {
        showEditModal && (
          <EditMovie
            isOpen={showEditModal}
            onClose={fecharModalEdicao}
            onSuccess={() => {
              buscarFilmes();
              fecharModalEdicao();
            }}
            filme={filmeSelecionado}
          />
        )
      }
    </div>
  );
}