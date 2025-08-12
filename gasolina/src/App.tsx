import { useState, type FormEvent } from 'react'
import './App.css'

import logoImg from './assets/logo.png'

interface InfoProps {
  title: string;
  gasolina: string | number;
  alcool: string | number;
}

function App() {
  const [gasolinaInput, setGasolina] = useState(0);
  const [alcoolInput, setAlcool] = useState(0);
  const [info, setInfo] = useState<InfoProps>();

  function compararPrecos(event: FormEvent) {
    //para nao limpar o campo do form assim que emitir o alerta
    event.preventDefault();

    let calculo = (alcoolInput / gasolinaInput)

    if (calculo <= 0.7) {
      setInfo({
        title: "compensa usar álcool!",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput)
      })
    } else {
      setInfo({
        title: "compensa usar gasolina!",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput)
      })
    }
  }

  function formatarMoeda(valor:number){
    let valorFormatado = valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    })

    return valorFormatado;
  }

  return (
    <div>
      <main className='container'>
        <img src={logoImg} alt='Logo da calculadora gasolina x alcool' />
        <h1 className='title'>Qual a melhor opção?</h1>

        <form className='form' onSubmit={compararPrecos}>
          <label>Alcool (preço por litro):</label>
          <input className='input'
            type='number'
            placeholder='4.90'
            min='1' step='0.01'
            required
            onChange={(e) => setAlcool(Number(e.target.value))}
          />

          <label>Gasolina (preço por litro):</label>
          <input className='input'
            type='number'
            placeholder='4.90'
            min='1'
            step='0.01'
            required
            onChange={(e) => setGasolina(Number(e.target.value))}
          />

          <input className='button' type='submit' value='Calcular' />
        </form>

        {/* se tiver o objeto, e suas keys forem maior do que 0, retorne o componente */}
        {info && Object.keys(info).length > 0 && (
          <section className='result'>
            <h2 className='result-title'>{info?.title}</h2>
            <span>Álcool {info?.alcool}</span>
            <span>Gasolina {info?.gasolina}</span>
          </section>
        )}

      </main>
    </div>
  )
}

export default App
