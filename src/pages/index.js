import AllMovies from '../components/AllMovies';
import { IoMdAdd } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { GrFormViewHide } from "react-icons/gr";
import { AiOutlineOrderedList } from "react-icons/ai";

import EditMovie from '@/components/EditMovie';

import { useState } from 'react';
import WatchedMovies from '../components/WatchedMovies';
import NotWatchedMovies from '../components/NotWatchedMovies';
import MoviesByRating from '../components/MoviesByRating';

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState('all');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'watched':
        return <WatchedMovies />;
      case 'notWatched':
        return <NotWatchedMovies />;
      case 'byRating':
        return <MoviesByRating />;
      default:
        return <AllMovies />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-500 p-6 flex flex-col gap-6">
      <h1 className="text-6xl text-white font-black text-center mb-6">ALL MOVIES</h1>

      {/* Botões de navegação interna */}
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => setSelectedComponent('watched')}
          className="bg-yellow-300 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
        >
          <GrView /> Filmes já vistos
        </button>

        <button
          onClick={() => setSelectedComponent('notWatched')}
          className="bg-yellow-300 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
        >
          <GrFormViewHide /> Filmes não vistos
        </button>

        <button
          onClick={() => setSelectedComponent('byRating')}
          className="bg-yellow-300 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
        >
          <AiOutlineOrderedList /> Ordenar por classificação
        </button>
      </div>
      <div className="mt-8">
        {renderComponent()}
      </div>
    </div>
  );
}