import { useState } from 'react'
import './App.css'

function App() {
  const [valor, setValor] = useState(0) 

const sumar = () => {
  setValor(valor + 1)
}

const restablecer = () => {
setValor(0); 
}

const restar = () => {
  setValor(valor - 1)
}


  return (
      <div className="card">
      <h1>Contador</h1>
      <h2>{valor}</h2>
      <button onClick={restar}>Disminuir</button>
      <button onClick={restablecer}>Restablecerr</button>
      <button onClick={sumar}>Aumentar</button>
      </div> 
  )
}

export default App
