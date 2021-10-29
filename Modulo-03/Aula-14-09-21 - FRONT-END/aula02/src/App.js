import { useState } from "react";

export default function App() {
  const [tarefa, setTarefa] = useState([]);

  function henderstate(event) {
    if (event.key !== "Enter") return;

    const novasTarefas = [...tarefa, {id: Math.random() , texto: event.target.value}];

    setTarefa(novasTarefas);

    event.target.value = "";
  }

  function handleClick(id) {
    const novasTarefass = tarefa.filter((x) => {
      return x.id !== id
    });

    setTarefa(novasTarefass);
  }

  return (
    <div className="App">
      <input type="text" onKeyDown={henderstate} />
      <ul>
        {tarefa.map((tarefa) => {
          return (
            <li key={tarefa.id} >
              <span>{tarefa.texto}</span>
              <button onClick={() => handleClick(tarefa.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
