import { useState } from "react";

function Tarefa(props) {
  return (
    <li className="aPorraDoLI">
      <span
        onClick={() => props.handleComplete(props.id)}
        style={{ textDecoration: props.completa ? "line-through" : "none" }}
      >
        {props.children}
      </span>
      <button onClick={() => props.handleDelete(props.id)}>X</button>
    </li>
  );
}

function App() {
  const [lista, setLista] = useState([]);

  console.log(lista);

  function handleKeyDown(event) {
    if (event.code !== "Enter") return;

    const novaTarefa = [
      ...lista,
      { id: Math.random(), texto: event.target.value, completa: false },
    ];

    setLista(novaTarefa);
    event.target.value = "";
  }

  function handleClick(id) {
    const novasTarefas = lista.filter((x) => {
      return x.id !== id;
    });
    setLista(novasTarefas);
  }

  function handleComplete(id) {
    const novasTarefas = [...lista];

    const tarefaCompletada = novasTarefas.find((x) => x.id === id);
    tarefaCompletada.completa = !tarefaCompletada.completa;

    setLista(novasTarefas);
  }

  return (
    <div className="App">
      <div className="Card">
        <input type="text" onKeyDown={handleKeyDown} />
        <ul>
          {lista.map(function (task) {
            return (
              <Tarefa
                key={task.id}
                handleDelete={() => handleClick(task.id)}
                handleComplete={() => handleComplete(task.id)}
                completa={task.completa}
              >
                {task.texto}
              </Tarefa>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
