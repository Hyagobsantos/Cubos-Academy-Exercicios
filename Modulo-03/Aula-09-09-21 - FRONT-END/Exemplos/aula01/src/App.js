import "./index.css";
import { useState } from "react";

function App() {
  const [contador_plus, setContador] = useState(0);

  function contar() {
    setContador(contador_plus + 1);
  }

  function contarmenos() {
    if (contador_plus > 0) {
      setContador(contador_plus - 1);
    }
  }

  function reset() {
    setContador(0);
  }

  return (
    <div className="App">
      contagem {contador_plus}
      <div className="contador">
        <button onClick={contarmenos}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={contar}>+</button>
      </div>
    </div>
  );
}

export default App;
