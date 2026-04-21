import { useState, useEffect } from 'react'

function Contador() {
  const [contador, setContador] = useState(0)

  useEffect(() => {
    console.log('contador actualizado:', contador)
  }, [contador])

  return (
    <div className="contador">
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </div>
  )
}

export default Contador