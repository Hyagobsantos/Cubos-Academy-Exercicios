import { useState } from "react";

function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [erro, setErro] = useState('');
  
  function handleSubmit(event) {
    event.preventDefault();

    setErro('');

    if(nome.length < 3) {
      setErro('Nome deve ter mais 2 caracteres')
    }

    if(idade < 1){
      setErro('idade deve ser maior que 0')
    }
  }

  return (
    <div className="App">
      {
        erro && (
          <div className="alert">
            {erro}
          </div>
        )
      }
      <form onSubmit={handleSubmit}>
          <div className="card1">
            <label>Nome:</label>
            <input type="text" onChange={e => setNome(e.target.value)} value={nome} />
          </div>
          <div className="card1">
            <label>Idade:</label>
            <input type="number" onChange={e => setIdade(e.target.value)} value={idade} />
          </div>
          <button type="submit">Enviar</button>
      </form>
    </div>
  )


}
  
export default App;
