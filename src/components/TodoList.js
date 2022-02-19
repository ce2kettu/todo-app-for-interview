import "./TodoList.css"

function TodoList({ tasks, updateTaskCompletion, deleteTask }) {
    const taskItems = tasks.map(task =>
        <div key={task.id} className="task-item">
            <div className="task-item-details" onClick={() => updateTaskCompletion(task.id)}
                style={{ textDecoration: task.isCompleted ? 'line-through' : '' }}>
                {task.name}
            </div>
            <button onClick={() => deleteTask(task.id)}>delete</button>
        </div>
    );
    return (
        <div className="task-list">
            {taskItems}
        </div>
    );
}

export default TodoList;
