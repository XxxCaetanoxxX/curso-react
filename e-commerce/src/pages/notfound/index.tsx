import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div className="w-full flex flex-col pt-5 items-center">
            <h1>Página nao encontrada</h1>
            <Link to="/">
                <button className="cursor-pointer rounded-4xl bg-gray-300 p-1.5 mt-1">Voltar para Home</button>
            </Link>
        </div>
    )
}