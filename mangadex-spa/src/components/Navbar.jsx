import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="bg-gray-800 p-4 text-white flex justify-between">
            <div className="font-bold text-xl">MangaDex SPA</div>
            <div className="space-x-4">
                <Link to="/" className="hover:underline" >Inicio </Link>
                <Link to="/search" className="hover:underline">Buscar</Link>
            </div>
        </nav>

    );
}