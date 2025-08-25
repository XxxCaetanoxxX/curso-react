import { Alunos } from './components/alunos'
import UserProvider from './contexts/user';
import { Footer } from './components/footer'

function App() {

  return (
    <UserProvider>
      <div>
        <h1>Escola dev</h1>
        <br></br>
        <hr />
        <Alunos />

        <Footer />
      </div>
    </UserProvider>
  )
}

export default App
