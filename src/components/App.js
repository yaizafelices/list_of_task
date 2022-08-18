import '../styles/App.scss';

import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {id: '1', task: 'Comprar harina, jamón y pan rallado', completed: true},
    {id: '2', task: 'Hacer croquetas ricas', completed: true},
    {id: '3', task: 'Ir a la puerta de un gimnasio', completed: false},
    {
      id: '4', task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false
    }
  ]);

  const [searchTask, setSearchTask] = useState('');


  const handleDone = (event) =>{
    const clickedDoneId = event.currentTarget.id;
    const foundTaskDone = tasks.find((tasks) => tasks.id === clickedDoneId);
    foundTaskDone.completed =!foundTaskDone.completed;
    setTasks([...tasks]);
  }

  const handleSearchTask = (event) => {
    setSearchTask(event.target.value);
  }

  const renderTasks = () => {
    return tasks
    .filter((tasks) => {
      return tasks.task.toLowerCase().includes(searchTask.toLowerCase());
    })
    
    
    .map((tasks) => {
      let highLight = null;
      if (tasks.completed === true){
        highLight = 'coloredHighLight';
      }
      else {
        highLight = '';
      }
      return (
      <li key={tasks.id} id={tasks.id} className={highLight} onClick={handleDone}>
        {tasks.task}
      </li>)
    })
  }

  const lengthTotalTasks = tasks.length;
  let lenghtCompletedTasks = tasks.filter(function(element, index){
    return element.completed === true;
  }).length;
  let lenghtIncompletedTasks = tasks.filter(function(element, index){
    return element.completed === false;
  }).length;




  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <ol>{renderTasks()}</ol>
      <form>
        <label htmlFor='searchTask' className='label'>Buscar por palabra:</label>
        <input className='input' type='text' id='searchTask' value={searchTask} onChange={handleSearchTask}></input>
      </form>
      <ul>
        <li>Tareas totales: {lengthTotalTasks}</li>
        <li>Tareas completadas: {lenghtCompletedTasks}</li>
        <li>Tareas pendientes: {lenghtIncompletedTasks}</li>
        </ul>

    </div>
  );
}
export default App;

