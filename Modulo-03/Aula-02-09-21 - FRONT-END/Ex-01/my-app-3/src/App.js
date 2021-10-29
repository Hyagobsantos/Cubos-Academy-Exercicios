import { useState } from "react";

export default function App() {
  const [tema, setTema] = useState("claro");

  function trocaTema() {
    // const novoTema = tema === "claro" ? "escuro" : "claro";

    // setTema(novoTema);

    setTema(function (tema) {
      if (tema === "claro") {
        return (tema = "escuro");
      } else {
        return (tema = "claro");
      }
    });
  }

  return (
    <div className={`App ${tema}`}>
      <h1>Olá Mundo</h1>
      <p>
        A prova de matemática possui 36 minutos de duração e 12 perguntas. Você
        pode acompanhar o tempo restante direto na própria página da prova, ao
        lado direito superior, conforme a imagem abaixo.
      </p>
      <button onClick={trocaTema}>Tema 🌞</button>
    </div>
  );
}
