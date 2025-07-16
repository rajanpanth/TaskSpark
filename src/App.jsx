import React from 'react'
import StopWatch from './StopWatch'
import DigitalClock from './Clock'
import ToDoList from './ToDo'
import './app.css'
const App = () => {
  return (
<>
<DigitalClock />
<div className='work'><ToDoList />
</div>

</>  )
}

export default App