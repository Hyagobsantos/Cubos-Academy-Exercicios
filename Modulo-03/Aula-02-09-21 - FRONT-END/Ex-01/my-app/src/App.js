import "./App.css";

function Card({ id, texto }) {
  const idehPar = id % 2 === 0;

  return (
    <div className="card">
      <img src={`https://picsum.photos/id/${id}/200/300`} alt="imagem" />
      {texto}
      {idehPar && "é par"}
    </div>
  );
}

export default function App() {


  const cards = [
    { id: 239, texto: "Card 2" },
    { id: 240, texto: "Card 2" },
    { id: 241, texto: "Card 3" },
    { id: 242, texto: "Card 4" },
  ];

  return (
    <div className="App">
      {cards.map(function (card) {
        return <Card texto={card.texto} key={card.id} id={card.id}></Card>;
      })}
    </div>
  );
}
