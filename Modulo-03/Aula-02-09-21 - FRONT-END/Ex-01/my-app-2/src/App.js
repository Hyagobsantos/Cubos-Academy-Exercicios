import "./App.css";
import { useState } from "react";

export default function App() {
  const [contador, setContador] = useState(0);

  function contarMais() {
    setContador(function (contador) {
      return contador + 1;
    });
  }

  function contaMenis() {
    setContador(function (contadorAnterior) {
      if (!contador <= 0) {
        return contadorAnterior - 1;
      } else {
        return contadorAnterior = 0;
      }
    });
  }

  function reset() {
    setContador(0);
  }

  return (
    <div className="App">
      Contagem {contador}
      <button onClick={contarMais}>Aumentar</button>
      <button onClick={contaMenis}>Diminuir</button>
      <button onClick={reset}>Zerar</button>
    </div>
  );
}
