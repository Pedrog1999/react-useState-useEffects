
function TaskItem({ id, texto, completada, onToggle, onEliminar }) {
  return (
    <li className="task-item">
      
      <span className={completada ? 'tachado' : ''}>
        {texto}
      </span>

      <div className="task-buttons">
        <button onClick={() => onToggle(id)}>
          {completada ? 'Deshacer' : 'Completar'}
        </button>

        <button onClick={() => onEliminar(id)}>Eliminar</button>
      </div>
    </li>
  )
}

export default TaskItem
