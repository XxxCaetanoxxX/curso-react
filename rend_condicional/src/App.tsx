import { useState } from 'react'
import './App.css'

function App() {
  const [signed, setSigned] = useState(false);
  const [name, setName] = useState('caetanocesar');

  return (
    <div>
      <button onClick={() => setSigned(true)}>Entrar</button>
      {/* caso logado mestra algo, caso nao logado manda outra coisa */}
      {signed ? 
      (<h1>Você está logado</h1>) : 
      (<h1>Você não está logado</h1>)}

      {/* so mostra algo caso o usuario esteja logado */}
      {signed && (
        <div>
        <h1>Você está logado</h1>
        <p>Usuario Online!</p>
        <button onClick={() => setSigned(false)}>Sair</button>
        </div>
      )}

      {name.length >= 5 && (
        <h1>Nome muito grande</h1>
      )}
    </div>
  )
}

export default App
