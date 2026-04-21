import { useState, useEffect } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import Contador from './components/Contador'
import './App.css'

function App() {
  // estado principal con 2 tarea cargadas por defecto
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Aprender React', completada: false },
    { id: 2, texto: 'Hacer el proyecto', completada: false }
  ])

  
  const [cargando, setCargando] = useState(true)

  
  useEffect(() => {
    setTimeout(() => {
      setCargando(false)
    }, 1500)
  }, [])

  
  function agregarTarea(texto) {
    const nuevaTarea = {
      id: Date.now(),
      texto: texto,
      completada: false
    }
    setTareas([...tareas, nuevaTarea])
  }

  // cambia el estado completada de una tarea por su id
  function toggleTarea(id) {
    setTareas(tareas.map(tarea =>
      tarea.id === id
        ? { ...tarea, completada: !tarea.completada }
        : tarea
    ))
  }

  // elimina una tarea del array por su id
  function eliminarTarea(id) {
    setTareas(tareas.filter(tarea => tarea.id !== id))
  }

  // calculos para las estadisticas
  const totalTareas = tareas.length
  const tareasCompletadas = tareas.filter(t => t.completada).length

  // mientras cargando sea true muestraa solo el mensaje
  if (cargando) {
    return <div className="container"><p>Cargando...</p></div>
  }

  return (
    <div className="container">
      <h1>Lista de Tareas</h1>

      <p className="stats">
        Total: {totalTareas} | Completadas: {tareasCompletadas}
      </p>

      <TaskInput onAgregar={agregarTarea} />

      <TaskList
        tareas={tareas}
        onToggle={toggleTarea}
        onEliminar={eliminarTarea}
      />

      
      <Contador />
    </div>
  )
}

export default App
