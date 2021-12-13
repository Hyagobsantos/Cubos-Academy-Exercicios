import { useState } from 'react';

function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({email: false, senha:false})
  const senhaRef = useRef();


  function handleSubmit(e) {
    e.preventDefault();

    if(senha.length < 8){
      setErros({ ...erros, senha: true})
      senhaRef.current.focus();
      return
    }

    console.log({email, senha})
  }

  return (
    <div className="App">
     <form onSubmit={handleSubmit}>
        <label>
          Email <br />
          <input 
            className={`${erros.email ?? 'erro'}`}
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}          
          />
        </label>
        <label>
          Senha <br />
          <input 
            ref={senhaRef}
            className={`${erros.senha ?? 'erro'}`}
            type="password"
            value={senha}
            onChange={e => setSenha(e.target.value)}    
          />
        </label>
        <button type="submit">Enviar</button>
     </form>
    </div>
  );
}

export default App;
