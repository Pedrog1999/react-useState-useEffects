import TaskItem from './TaskItem'


function TaskList({ tareas, onToggle, onEliminar }) {
  if (tareas.length === 0) {
    return <p className="empty">No hay tareas todavia.</p>
  }

  return (
    <ul className="task-list">
      
      {tareas.map(tarea => (
        <TaskItem
          key={tarea.id}
          id={tarea.id}
          texto={tarea.texto}
          completada={tarea.completada}
          onToggle={onToggle}
          onEliminar={onEliminar}
        />
      ))}
    </ul>
  )
}

export default TaskList
