import { useState, useEffect } from "react";

function App() {
  const [pessoas, setPessoas] = useState([
    { nome: "Ana" },
    { nome: "José" },
    { nome: "Mario" },
    { nome: "Bianca" },
  ]);

  const [indice, setIndice] = useState(0);
  const [contador, setContador] = useState(0);

  useEffect(() => {
    if (indice < 0) {
      setIndice(pessoas.length - 1);
    }

    if (indice > pessoas.length - 1) {
      setIndice(0);
    }
    console.log("rodei")
  },[indice,pessoas]); //paramentros de dependecia 

  return (
    <div className="App">
      <button onClick={() => setIndice(indice - 1)}>Anterior</button>
      <h1>
        {pessoas.map((pessoa, indiceAtual) =>
          indiceAtual === indice ? pessoa.nome : ""
        )}
      </h1>
      <button onClick={() => setIndice(indice + 1)}>Proximo</button>
      <button onClick={() => setContador(contador + 1)}>{contador}</button>
    </div>
  );
}

export default App;
