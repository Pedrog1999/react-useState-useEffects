import { useState, useEffect } from 'react'

function Contador() {

  const [contador, setContador] = useState(() => {
    const guardado = localStorage.getItem('contador')
    return guardado ? parseInt(guardado) : 0
  })

 
  useEffect(() => {
    localStorage.setItem('contador', contador)
    console.log('contador actualizado:', contador)
  }, [contador])

  return (
    <div className="contador">
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
    </div>
  )
}

export default Contador
