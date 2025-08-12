import { useState } from 'react'
import './App.css'
import logoImg from './assets/logo.png'

function App() {

  return (
    <div className='container'>
      <img 
      alt='Logo frases' 
      src={logoImg}
      className='logo'
      />

      <h2 className='title'>Categorias</h2>
      <section className='category-area'>
        <button className='category-button'>Motivacao</button>
        <button className='category-button'>Bem estar</button>
      </section>

      <button className='button-frase'>Gerar frase</button>

      <p className='texto-frase'>Alguma frase aqui</p>

    </div>
  )
}

export default App
