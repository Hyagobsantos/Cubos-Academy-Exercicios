import { useState } from "react";

function App() {
  const [formulario, setFormulario] = useState({nome: '', sobrenome: '', idade:0});
  const [erro, setErro] = useState('');
  
  function handleSubmit(event) {
    event.preventDefault();

    setErro('');

    if(formulario.nome.length < 3) {
      setErro('Nome deve ter mais 2 caracteres')
    }

    if(formulario.idade < 1){
      setErro('idade deve ser maior que 0')
    }
  }

  function handleChange({target}){
    setFormulario({...formulario, [target.name]: target.value });
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
            <input 
              id="nome" 
              name="nome"
              type="text" 
              onChange={handleChange} 
              value={formulario.nome} />
          </div>
          <div className="card1">
            <label>Sobrenome:</label>
            <input 
              id="sobrenome" 
              name="sobrenome" 
              type="text" 
              onChange={handleChange} 
              value={formulario.sobrenome} />
          </div>
          <div className="card1">
            <label>Idade:</label>
            <input 
              id="idade" 
              name="idade" 
              type="number" 
              onChange={handleChange} 
              value={formulario.idade} />
          </div>
          <button type="submit">Enviar</button>
      </form>
    </div>
  )


}
  
export default App;
