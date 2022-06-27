import React, {useState} from 'react';
import './App.css';

function App() {

    const [tasks, setTasks] = useState([
      { name: "Buy Shopping", priority: "high" },
      { name: "Clean Bathroom", priority: "low" },
      { name: "Car's MOT", priority: "high" },
  ])
    const [newTask, setNewTask] = useState("");
  
    const taskNodes = tasks.map((task, index) => {
      return(
        <li key={index} className={task.isHighPriority ? "high priority" : "low priority"}>
          <span>{ task.name }</span>
        
        </li>
      )
    })

    const handleTaskInput = (event) => {
      setNewTask(event.item.value)
    }

    const saveNewTask = (event) => {
      event.preventDefault();
      const copyTasks = [...tasks]
      copyTasks.push({name: newTask, isHighPriority: "high"})
      setTasks(copyTasks)
      setNewTask("")
    }

    const isHighPriority = (index) => {
      const copyTasks = [...tasks]
      copyTasks[index].isHighPriority = "high";
      setTasks(copyTasks)
    }


  return (
    <div className="App">
  <header class="App-link">  
    <h1>ToDo's</h1>
    <hr></hr>
  </header> 

    <ul>
      {taskNodes}
    </ul>

    <form>
      <input type="radio" id="high" name="high priority" value="high"></input>
      <label for="high">High</label><br></br>
      <input type="radio" id="high" name="low priority" value="low"></input>
      <label for="low">Low</label>
    </form>


    <form onSubmit={saveNewTask}>
      <label htmlFor="new-task">Add a new Task:</label>
      <input id="new-task" type="text" onChange={handleTaskInput}/>
      <input type="submit" value="Save Task" />
    </form>
    
  </div> 
  );
}

export default App;
