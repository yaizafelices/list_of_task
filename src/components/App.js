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

  const handleDone = (event) =>{
    const clickedDoneId = event.currentTarget.id;
    const foundTaskDone = tasks.find((tasks) => tasks.id === clickedDoneId);
    foundTaskDone.completed =!foundTaskDone.completed;
    setTasks([...tasks]);
  }

  const renderTasks = () => {
    return tasks.map((tasks) => {
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



  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <ol>{renderTasks()}</ol>
    </div>
  );
}
export default App;

