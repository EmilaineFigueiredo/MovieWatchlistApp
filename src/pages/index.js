import AllMovies from '../components/AllMovies';
import { useState } from 'react';
import AddMovie from '../components/AddMovie';
import EditMovie from '../components/EditMovie';
import WatchedMovies from '../components/WatchedMovies';
import NotWatchedMovies from '../components/NotWatchedMovies';
import MoviesByRating from '../components/MoviesByRating';

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  const renderComponent = () => {
  switch (selectedComponent) {
    case 'watched':
      return <WatchedMovies isOpen={true} onClose={() => setSelectedComponent('all')} />;
    case 'notWatched':
      return <NotWatchedMovies isOpen={true} onClose={() => setSelectedComponent('all')} />;
    case 'byRating':
  return <MoviesByRating isOpen={true} onClose={() => setSelectedComponent('all')} />;
    default:
      return <AllMovies />;
  }
};

  return (
    <div className="min-h-screen bg-gray-200 p-6 flex flex-col gap-6">
      <h1 className="text-5xl text-gray-700 font-white text-center mb-6">ALL MOVIES</h1>


      {/* MODAL PARA ADICIONAR FILME */}
      {showAddModal && (
        <div className="fixed inset-0 bg-gray-300 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded-md w-full max-w-md relative">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-2 right-2 text-gray-600 text-xl"
            >
              ✖
            </button>

            <AddMovie
              onClose={() => setShowAddModal(false)}
              onSuccess={() => {
                // Aqui você pode, por exemplo, recarregar a lista de filmes
                console.log("Filme adicionado com sucesso!");
              }}
            />
          </div>
        </div>
      )}

      {/* Botões de navegação */}
      <div className="flex flex-wrap gap-4 justify-center">

        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-700 text-white font-light py-2 px-5 rounded-lg transition-colors flex items-center gap-2"
        >
          + Adicionar novo filme
        </button>

        <button
          onClick={() => setSelectedComponent('watched')}
          className="bg-green-500 text-white font-light py-2 px-5 rounded-lg transition-colors flex items-center gap-2"
        >
          Filmes já vistos
        </button>

        <button
          onClick={() => setSelectedComponent('notWatched')}
          className="bg-green-500 text-white font-light py-2 px-5 rounded-lg transition-colors flex items-center gap-2"
        >
          Filmes não vistos
        </button>

        <button
          onClick={() => setSelectedComponent('byRating')}
          className="bg-green-500 text-white font-light py-2 px-5 rounded-lg transition-colors flex items-center gap-2"
        >
          Ordenar por classificação
        </button>
      </div>
      <div className="mt-8">
        {renderComponent()}
      </div>
    </div>
  )
}

