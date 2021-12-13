import { useState, useEffect } from "react";

function App() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState();

  useEffect(async () =>  {
    if(cep.length === 8){
      const reponse = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
        method:'GET'
      });
  
      const body = await reponse.json();
      setEndereco(body)
    }
    
  },[cep])


  return (
    <div className="App">
      <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} />
      {endereco && (
        <>
          <h1>
            {endereco.logradouro}, {endereco.bairro}
          </h1>
          <h2>
            {endereco.localidade} - {endereco.uf}
          </h2>
        </>
      )}
    </div>
  );
}

export default App;
