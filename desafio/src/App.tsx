import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='container'>
      <h1 style={{color: 'white'}}>Descubra sua idade</h1>
      <form className='formulario'>
        <label>Digite seu nome:</label>
        <input placeholder='Digite seu nome...'></input>
        <label>Digite o ano que voce nasceu:</label>
        <input placeholder='Digite seu ano de nascimento...'></input>
        <button className='btn-submit' type='submit'>Descobrir Idade</button>
      </form>
    </div>
  )
}

export default App
