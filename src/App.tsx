import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from "./components/Button/Button.tsx";

function App() {
  const [tasks, setTasks] = useState([
      { id: 1, title: 'Сходить в магазин', isDone: true },
      { id: 2, title: 'Починить машину', isDone: true },
      { id: 3, title: 'Поспать', isDone: false },
  ])

  return (
    <div>
        <div>
            <input/>
            <Button title={'+'}/>
        </div>
        <div>
            <Button title={'All'}/>
            <Button title={'Completed'}/>
            <Button title={'Active'}/>
        </div>
        <ul>
            <li>
                <input type="checkbox"/>
                text
                <Button title={'X'}/>
            </li>
        </ul>
    </div>
  )
}

export default App
