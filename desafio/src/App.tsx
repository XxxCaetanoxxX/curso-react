import { useState, type FormEvent } from 'react'
import './App.css'

function App() {
  const [nome, setNome] = useState('')
  const [anoNascimento, setAnoNascimento] = useState<number | string>('')
  const [pessoa, setPessoa] = useState<PessoaProps>();

  type PessoaProps = {
    nome: string,
    ano: number,
    idade: number
  }

  function calcularIdade(e: FormEvent){
    e.preventDefault();
    const idade = Number(new Date().getFullYear())-Number(anoNascimento)

    setPessoa({
      nome:nome,
      ano:Number(anoNascimento),
      idade: idade
    })
    setNome('');
    setAnoNascimento('');
  }

  return (
    <div className='container'>
      <h1 style={{color: 'white'}}>Descubra sua idade</h1>
      <form className='formulario' onSubmit={calcularIdade}>
        <label>Digite seu nome:</label>

        <input 
        placeholder='Digite seu nome...'
         value={nome} 
         onChange={(e)=>setNome(e.target.value)}
          required>
          </input>

        <label>Digite o ano que voce nasceu:</label>

        <input 
        placeholder='Digite seu ano de nascimento...' 
        value={anoNascimento} 
        onChange={(e)=>setAnoNascimento(Number(e.target.value))} 
        required 
        type='number'>
        </input>

        <button className='btn-submit' type='submit'>Descobrir Idade</button>
      </form>

      {pessoa && (
        <h1 className='result'>
          {pessoa.nome} você tem: {pessoa.idade} anos
        </h1>
      )}

    </div>
  )
}

export default App
