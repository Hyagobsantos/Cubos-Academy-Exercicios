import {useState} from 'react'

function App() {
  const [contador, setContador] = useState(0)

  function handleClick(){
    setContador(contador + 1)
  }

  return (
    <div className="App">
      <h1>Contador {contador}</h1>
      <button onClick={() => {setContador(contador + 1)}}>Contar</button>
    </div>
  );
}

export default App;
