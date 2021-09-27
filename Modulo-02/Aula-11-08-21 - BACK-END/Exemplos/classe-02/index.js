const express = require("express");
const {
  alllivros,
  livrosbyId,
  createLivro,
  substituirLivro,
  alterarLivro,
  deletar,
} = require("./controller");

let porta = 8000;

const app = express();

app.use(express.json());
app.get("/livros", alllivros);
app.get("/livros/:id", livrosbyId);
app.post("/livros", createLivro);
app.put("/livros/:id", substituirLivro);
app.patch("/livros/:id", alterarLivro);
app.delete("/livros/:id", deletar);

app.listen(porta, () => {
  console.log(`Rodando em http://localhost:${porta}`);
});
