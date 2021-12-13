import React, { useState } from "react";
import "./App.css";

import Card from "./components/Card";
import gettoken from "./utils/getSpotifyToken";

const baseUrl = (pesquisa) =>
  `https://api.spotify.com/v1/search?q=${pesquisa}&type=track&limit=10`;

export default function App() {
  const [pesquisa, setPesquisa] = useState("");
  const [trakss, setTracks] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erros, setErros] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!pesquisa) return;

    setErros("");
    setCarregando(true);

    try {
      const token = await gettoken();
      const reposta = await fetch(baseUrl(pesquisa), {
        headers: {
          Authorization: token,
        },
      });

      const { tracks } = await reposta.json();

      setTracks(tracks.items);
    } catch (error) {
      setErros(error.message);
    }
    setCarregando(false);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />
      </form>
      {carregando && <span className="loading">Carregando ...</span>}
      {erros && <span className="erro">{erros}</span>}
      {trakss.length === 0 && <span>Nada Encontrado</span>}
      {trakss.map((t) => (
        <Card track={t} />
      ))}
    </div>
  );
}
