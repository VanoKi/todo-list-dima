import { useState } from 'react'
import './App.css'
import {TodolistItem} from "./components/TodolistItem/TodolistItem.tsx";
import {v1} from "uuid";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type Filter = 'All' | 'Completed' | 'Active'

function App() {
  const [tasks, setTasks] = useState([
      { id: v1(), title: 'Сходить в магазин', isDone: true },
      { id: v1(), title: 'Починить машину', isDone: true },
      { id: v1(), title: 'Поспать', isDone: false },
  ])

    const [filter, setFilter] = useState<Filter>('All')

    const addTask = (title: string) => {
        const newTask = {
           id: v1(),
           title: title,
            isDone: false
        }
        setTasks([newTask, ...tasks])
    }

    const deleteTask = (taskId: string) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    const filterTasks = (filter: Filter) => {
        setFilter(filter)
    }

    let filteredTasks = tasks;

    if (filter === 'Completed') {
        filteredTasks = filteredTasks.filter(task => task.isDone)
    }

    if (filter === 'Active') {
        filteredTasks = filteredTasks.filter(task => !task.isDone)
    }

  return (
    <div>
       <TodolistItem
           title={'Список дел'}
           deleteTask={deleteTask}
           tasks={filteredTasks}
           filterTasks={filterTasks}
           addTask={addTask}
       />
    </div>
  )
}
export default  App