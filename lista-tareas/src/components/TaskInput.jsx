import { useState } from 'react'


function TaskInput({ onAgregar }) {

  const [valor, setValor] = useState('')

  function handleAgregar() {
    // input vacio no agrego
    if (valor.trim() === '') return

    onAgregar(valor.trim())
    setValor('') // limpiams
  }

  // permite agregar la tarea presionando Enter
  function handleKeyDown(e) {
    if (e.key === 'Enter') handleAgregar()
  }

  return (
    <div className="task-input">
      <input
        type="text"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escribi una tarea..."
      />
      <button onClick={handleAgregar}>Agregar</button>
    </div>
  )
}

export default TaskInput
