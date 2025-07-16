import React from 'react'
import StopWatch from './StopWatch';
const ToDoList = () => {

    const [tasks, setTasks] = React.useState(["Sample Task 1", "Sample Task 2"]);
    const [newTask, setNewTask] = React.useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }   

    function handleAddTask() {
        if(newTask.trim() !== "") {
        setTasks(t=>[...t, newTask]);
        setNewTask("");
        }
    }

    function handleDeleteTask(index) {
        const updatedTasks = (tasks.filter((_, i) => i !== index));
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            // Swap the current task with the one above it
            [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
            setTasks(updatedTasks);
    }
}
    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            // Swap the current task with the one below it
            [updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]];
            setTasks(updatedTasks);
        }

    }

  return (
<div className='to-do-list'>
    <h1> To-Do-List </h1>
    <div>
        <input 
        type='text'
        value={newTask}
        onChange={handleInputChange}
        placeholder='Add a new task...'
        />
        <button className='add-button' onClick={handleAddTask}>Add Task</button>
    </div>
    
    <ol>
        {tasks.map((task, index) => (
            <li key={index}>
                <span className='text'>{task}</span>
                <button className='delete-button' onClick={() => handleDeleteTask(index)}>Delete</button>
                <button className='move-up-button' onClick={() => moveTaskUp(index)}>↑</button>
                <button className='move-down-button' onClick={() => moveTaskDown(index)}>↓</button>
                <StopWatch />
            </li>
        ))}
    </ol>
</div>
  )
}

export default ToDoList