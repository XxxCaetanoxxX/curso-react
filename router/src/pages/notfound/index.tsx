import { Link } from "react-router-dom"

export function NotFound(){
    return (
        <div>
            <h1>Ops essa pagina não existe!</h1>
            <Link to="/"></Link>
        </div>
    )
}