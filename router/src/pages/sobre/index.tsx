import { Link } from "react-router-dom"

export function Sobre(){
    return(
        <div>
            <h1>Página sobre</h1>
            <span>Bem vindo a pagina sobre</span>
            <br />
            <Link to="/">Home</Link>
        </div>
    )
}