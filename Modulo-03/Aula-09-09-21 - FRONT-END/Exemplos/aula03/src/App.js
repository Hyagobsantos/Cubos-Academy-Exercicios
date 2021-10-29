import { useState, useEffect } from "react";

export default function App() {
  const [contagem, setContagem] = useState(0);

  var timeID;

  function contagemStart() {
    setInterval(() => {
      setContagem((contagem) => contagem + 1);
    }, 1000);
  }
  function zerar() {
    setContagem(0);
  }

  function pausar() {
    setContagem(function (contagemAnterior) {
      return (contagemAnterior = contagemAnterior);
    });
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setContagem(contagem => contagem + 1)
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [])

  return (
    <div className="App">
      <h1>{contagem}s</h1>
      <button onClick={contagemStart}>Começar Contagem</button>
      <button onClick={zerar}>Zerar</button>
      <button onClick={pausar}>Pausar</button>
    </div>
  );
}
