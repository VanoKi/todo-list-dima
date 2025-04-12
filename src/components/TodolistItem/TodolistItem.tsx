import {Filter, TaskType} from "../../App.tsx";

type Props = {
    title: string
    tasks: TaskType[]
    deleteTask: (taskId: string) => void
    filterTasks: (filter: Filter) => void
    addTask: (title: string) => void
}


export const TodolistItem = (props: Props) => {
    const {title, tasks, deleteTask, filterTasks, addTask} = props

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button onClick={() => addTask()}>+</button>
            </div>
            <div>
                <button onClick={() => filterTasks('All')}>All</button>
                <button onClick={() => filterTasks('Completed')}>Completed</button>
                <button onClick={() => filterTasks('Active')}>Active</button>
            </div>
            <ul>
                {tasks.length > 0 ? tasks.map(task => {
                    return (
                        <li key={task.id}>
                            <span>{task.title}</span>
                            <input type='checkbox' checked={task.isDone} />
                            <button onClick={() => deleteTask(task.id)}>X</button>
                        </li>
                    )
                }) : <p>Тасок нет</p>
                }
            </ul>
        </div>
    )
}