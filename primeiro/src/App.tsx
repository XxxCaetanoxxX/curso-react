import { useState } from 'react'
export default function App() {
  interface InfoAlunoProps {
    nome: string;
    idade: number;
  }

  const [input, setInput] = useState('');
  const [idade, setIdade] = useState('');
  const [contador, setContador] = useState(0);

  const [infoAluno, setInfoAluno] = useState<InfoAlunoProps>();

  function mostrarAluno(){
    setInfoAluno({
      nome: input,
      idade: Number(idade)
    });
  }

  function adicionar(){
    setContador(ValorAtual => ValorAtual + 1);
  } 

  function diminuir(){
    if(contador <= 0){
      return;
    }
    setContador(ValorAtual => ValorAtual - 1);
  }

  return (
    <div>
      <h1>Conhecendo usestate</h1>
      
      <input placeholder="Digite seu nome" 
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />

      <br /><br />

      <input placeholder="Digite sua idade" 
      value={idade}
      onChange={(e) => setIdade(e.target.value)}
      />

      <br /><br />

       <button onClick={mostrarAluno}>Mostrar aluno</button>

       <hr />

       <h3>Bem vindo {infoAluno?.nome}</h3>
       
       <h4>Idade: {infoAluno?.idade}</h4>

       <hr />
       <br />
       <h1>Contador com useState</h1>

       <button onClick={adicionar}>+</button>{contador}<button onClick={diminuir}>-</button>
    </div>
  )
}