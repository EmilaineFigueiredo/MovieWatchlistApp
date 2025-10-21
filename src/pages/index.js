import AllMovies from '../components/AllMovies';
import { useState } from 'react';
import AddMovie from '../components/AddMovie';
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
      case 'allMovies':
        return <AllMovies isOpen={true} onClose={() => setSelectedComponent('all')} />;
      default:
        return <AllMovies />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6 flex flex-col gap-6">
      <h1 className="text-6xl text-gray-700 font-white text-center mb-6">ALL MOVIES</h1>


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
                console.log("Filme adicionado com sucesso!");
              }}
            />
          </div>
        </div>
      )}

      <div className="flex flex-col items-center gap-4">
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          + Adicionar novo filme
        </button>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          <button
            onClick={() => setSelectedComponent('allMovies')}
            className="bg-white text-gray-700 font-light py-2 px-5 rounded-lg transition-colors flex items-center gap-2"
          >
            Todos os Filmes
          </button>
          <button
            onClick={() => setSelectedComponent('watched')}
            className="bg-white text-gray-700 font-light py-2 px-5 rounded-lg transition-colors flex items-center gap-2"
          >
            Filmes já vistos
          </button>

          <button
            onClick={() => setSelectedComponent('notWatched')}
            className="bg-white text-gray-700 font-light py-2 px-5 rounded-lg transition-colors flex items-center gap-2"
          >
            Filmes não vistos
          </button>

          <button
            onClick={() => setSelectedComponent('byRating')}
            className="bg-white text-gray-700 font-light py-2 px-5 rounded-lg transition-colors flex items-center gap-2"
          >
            Ordenar por classificação
          </button>
        </div>
      </div>

      <div className="mt-8">
        {renderComponent()}
      </div>
    </div>
  )
}