import '../styles/App.scss';

// import { useState } from "react";

function App() {
  const tasks = [
    {task: 'Comprar harina, jamón y pan rallado', completed: true},
    {task: 'Hacer croquetas ricas', completed: true},
    {task: 'Ir a la puerta de un gimnasio', completed: false},
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ];

  const renderTasks = () => {
    return tasks.map((tasks, index) => {
      let highLight = null;
      if (tasks.completed === true){
        highLight = 'coloredHighLight';
      }
      else {
        highLight = '';
      }
      return (
      <li key={index} className={highLight}>
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

