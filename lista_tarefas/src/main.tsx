import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  //remover strictmode em produção
  <StrictMode>
    <App />
  </StrictMode>,
)
