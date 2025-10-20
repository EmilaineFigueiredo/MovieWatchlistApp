import Link from 'next/link';
import AllMovies from '../components/AllMovies';
import { IoMdAdd } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { GrFormViewHide } from "react-icons/gr";
import { AiOutlineOrderedList } from "react-icons/ai";
import EditMovie from '@/components/EditMovie';

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 to-purple-400 text-white p-6 flex flex-col gap-6">
      <h1 className="text-6xl font-white text-center mb-6">ALL MOVIES</h1>
      <AllMovies />

      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/AddMovie" className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg transition-colors" target="_blank">
          <IoMdAdd /> Adicionar novo filme
        </Link>
        <Link href="/EditMovie" className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg transition-colors" target="_blank">
          <MdOutlineEdit /> Editar informações
        </Link>
        <Link href="/WatchedMovies" className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg transition-colors" target="_blank">
          <GrView /> Filmes já vistos
        </Link>
        <Link href="/NotWatchedMovies" className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg transition-colors" target="_blank">
          <GrFormViewHide /> Filmes não vistos
        </Link>
        <Link href="/MoviesByRating" className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg transition-colors" target="_blank">
          <AiOutlineOrderedList /> Ordenar por classificação
        </Link>
      </div>
    </div>
  );
}