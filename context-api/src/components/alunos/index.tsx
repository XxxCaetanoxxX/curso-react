import { Nome } from "../nome";
import { UserContext } from "../../contexts/user";
import { useContext } from 'react'

export function Alunos() {
    const { qtdAlunos, mudaNome } = useContext(UserContext);

    return (
        <div>
            <h3>quantidade de alunos: {qtdAlunos}</h3>

            <button onClick={()=>mudaNome("Matheus")}>
                Mudar nome
            </button>
            
            <br /><br />

            <Nome />
        </div>
    )
}