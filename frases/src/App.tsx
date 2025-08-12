import { useState } from 'react'
import './App.css'
import logoImg from './assets/logo.png'

function App() {
  const [textoFrase, setTextoFrase] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        "Siga os bons e aprenda com eles",
        "O sucesso vem para quem está disposto a trabalhar",
        "O bom senso vale mais do que muito conhecimento",
        "Acredite em milagres, mas nunca dependa deles.",
        "A vida trará coisas boas se tiver paciência"
      ]
    },
    {
      id: 2,
      nome: 'Bom dia',
      frases: [
        'Acordar de bem com a vida é o primeiro passo para um dia feliz',
        'Escreva em seu coracao, todo dia é o melhor dia do ano',
        'Bom dia! Não se esqueça que sua alma é o reflexo do sol',
        'A melhor forma de acordar é saltar da cama e correr para o sol',
      ]
    },
    {
      id: 2,
      nome: 'Boa noite',
      frases: [
        'Boa noite, durma bem.',
        'Teste boa noite',
      ]
    }
  ]

  function handleSwitchCategory(index:number){
    setCategoriaSelecionada(index)
  }

  function gerarFrase(){
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length);
    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`);
  }

  return (
    <div className='container'>
      <img
        alt='Logo frases'
        src={logoImg}
        className='logo'
      />

      <h2 className='title'>Categorias</h2>
      <section className='category-area'>
        {allFrases.map((item, index) => (
          <button
            key={item.id}
            className='category-button'
            style={{
              borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#1fa4db"
            }}
            onClick={
              () => handleSwitchCategory(index)}>
            {item.nome}
          </button>
        ))}
      </section>

      <button className='button-frase' onClick={gerarFrase}>Gerar frase</button>

      {textoFrase !== '' && (
        <p className='texto-frase'>
          {textoFrase.trim()}
        </p>
      )}

    </div>
  )
}

export default App
