import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log(nome);
  }

  function handleChange(event) {
    setNome(event.target.value);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input text="text" onChange={handleChange} value={nome} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
