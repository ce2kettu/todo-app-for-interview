import { useState } from "react";
import TodoList from "./TodoList";
import "./TodoContainer.css"

function TodoContainer() {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState("");
    // for unique id generation
    const [lastId, setLastId] = useState(0);

    const addTask = () => {
        // task name input is not empty
        if (taskName.trim().length !== 0) {
            setTasks(prevTasks => [...prevTasks, {
                id: lastId,
                name: taskName,
                isCompleted: false
            }]);
            setLastId(lastId + 1);
        }
    };

    const updateTaskCompletion = (id) => {
        setTasks(tasks.map(task => task.id === id
            ? { ...task, isCompleted: !task.isCompleted }
            : task
        ));
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const sortAlphabetically = () => {
        const sorted = [...tasks]
        sorted.sort((a, b) =>
            a.name.localeCompare(b.name, "fi")
        );
        setTasks(sorted);
    }

    const deleteAll = () => {
        setTasks([]);
    }

    return (
        <div className="todo-container">
            <input value={taskName} onChange={e => setTaskName(e.target.value)}></input>
            <button onClick={addTask}>Add task</button>
            <TodoList
                tasks={tasks}
                updateTaskCompletion={updateTaskCompletion}
                deleteTask={deleteTask}
            />
            <div>
                <button onClick={() => sortAlphabetically()}>Lajittele A-Ö</button>
                <button onClick={() => deleteAll()}>Poista kaikki</button>
            </div>
        </div>
    );
}

export default TodoContainer;
