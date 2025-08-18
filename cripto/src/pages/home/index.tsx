import styles from './home.module.css'
import { BsSearch } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { useState, type FormEvent, useEffect } from 'react'

interface CoinProps {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
  formatedPrice?: string;
  formatedMarket?: string;
  formatedVolume?: string;
}

interface DataProps {
  data: CoinProps[]
}

export function Home() {
  const [input, setInput] = useState('');
  const [coins, setCoins] = useState<CoinProps[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [offset]);

  async function getData() {
    fetch(`https://rest.coincap.io/v3/assets?apiKey=802ca9768cf87dba56f817a02139635dfc450f1be6f1fb462eb5499b478f5460&limit=10&offset=${offset}`)
      .then(res => res.json())
      .then((data: DataProps) => {
        const coinsData = data.data;

        const price = Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD"
        })

        const priceCompact = Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          notation: "compact"
        })


        const formatedResult = coinsData.map((item) => {
          const formated = {
            ...item,
            formatedPrice: price.format(Number(item.priceUsd)),
            formatedMarket: priceCompact.format(Number(item.marketCapUsd)),
            formatedVolume: priceCompact.format(Number(item.volumeUsd24Hr))
          }

          return formated;
        })
        const listCoins = [...coins, ...formatedResult]
        setCoins(listCoins)
      })
  }


  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (input === '') return;

    navigate(`/detail/${input}`)

  }

  function handleGetMore() {
    if (offset === 0) {
      setOffset(offset + 10)
      return;
    }

    setOffset(offset + 10);
    return;
  }

  return (
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Digite o nome da moeda...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit'>
          <BsSearch size={30} color='#FFF' />
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th scope='col'>Moeda</th>
            <th scope='col'>Valor mercado</th>
            <th scope='col'>Preço</th>
            <th scope='col'>Volume</th>
            <th scope='col'>Mudança 24h</th>
          </tr>
        </thead>

        <tbody id='tbody'>
          {coins.length > 0 && coins.map((item) => (
            <tr className={styles.tr} key={item.id}>
              <td className={styles.tdLabel} data-label='Moeda'>
                <div className={styles.name}>
                  <img
                    className={styles.logo}
                    // alt='Logo Cripto' 
                    src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`} />
                  <Link to={`/detail/${item.id}`}>
                    <span>{item.name}</span> | {item.symbol}
                  </Link>
                </div>
              </td>

              <td className={styles.tdLabel} data-label='Valor mercado'>
                {item.formatedMarket}
              </td>

              <td className={styles.tdLabel} data-label='Preço'>
                {item.formatedPrice}
              </td>

              <td className={styles.tdLabel} data-label='Volume'>
                {item.formatedVolume}
              </td>

              <td className={Number(item.changePercent24Hr) > 0 ? styles.tdProfit : styles.tdLoss} data-label='Mudanca'>
                <span>{Number(item.changePercent24Hr).toFixed(4)}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className={styles.buttonMore} onClick={handleGetMore}>
        Buscar mais...
      </button>
    </main>
  )
}